//nolint:unused // It will be used in PRs.
package solver

import (
	"context"
	"net/http"
	"net/http/pprof"
	"time"

	"github.com/omni-network/omni/contracts/bindings"
	"github.com/omni-network/omni/halo/genutil/evm/predeploys"
	"github.com/omni-network/omni/lib/buildinfo"
	"github.com/omni-network/omni/lib/errors"
	"github.com/omni-network/omni/lib/ethclient"
	"github.com/omni-network/omni/lib/ethclient/ethbackend"
	"github.com/omni-network/omni/lib/expbackoff"
	"github.com/omni-network/omni/lib/log"
	"github.com/omni-network/omni/lib/netconf"
	"github.com/omni-network/omni/lib/xchain"

	"github.com/ethereum/go-ethereum/common"

	"github.com/prometheus/client_golang/prometheus/promhttp"
)

// Run starts the solver service.
func Run(ctx context.Context, cfg Config) error {
	log.Info(ctx, "Starting solver service")

	buildinfo.Instrument(ctx)

	// Start monitoring first, so app is "up"
	monitorChan := serveMonitoring(cfg.MonitoringAddr)

	portalReg, err := makePortalRegistry(cfg.Network, cfg.RPCEndpoints)
	if err != nil {
		return err
	}

	network, err := netconf.AwaitOnExecutionChain(ctx, cfg.Network, portalReg, cfg.RPCEndpoints.Keys())
	if err != nil {
		return err
	}

	_, err = initializeEthClients(network.EVMChains(), cfg.RPCEndpoints)
	if err != nil {
		return err
	}

	select {
	case <-ctx.Done():
		log.Info(ctx, "Shutdown detected, stopping...")
		return nil
	case err := <-monitorChan:
		return err
	}
}

// serveMonitoring starts a goroutine that serves the monitoring API. It
// returns a channel that will receive an error if the server fails to start.
func serveMonitoring(address string) <-chan error {
	errChan := make(chan error)
	go func() {
		mux := http.NewServeMux()
		mux.Handle("/metrics", promhttp.Handler())

		// Copied from net/http/pprof/pprof.go
		mux.HandleFunc("/debug/pprof/", pprof.Index)
		mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)
		mux.HandleFunc("/debug/pprof/profile", pprof.Profile)
		mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)
		mux.HandleFunc("/debug/pprof/trace", pprof.Trace)

		srv := &http.Server{
			Addr:              address,
			ReadHeaderTimeout: 5 * time.Second,
			IdleTimeout:       5 * time.Second,
			WriteTimeout:      5 * time.Second,
			Handler:           mux,
		}
		errChan <- errors.Wrap(srv.ListenAndServe(), "serve monitoring")
	}()

	return errChan
}

func makePortalRegistry(network netconf.ID, endpoints xchain.RPCEndpoints) (*bindings.PortalRegistry, error) {
	meta := netconf.MetadataByID(network, network.Static().OmniExecutionChainID)
	rpc, err := endpoints.ByNameOrID(meta.Name, meta.ChainID)
	if err != nil {
		return nil, err
	}

	ethCl, err := ethclient.Dial(meta.Name, rpc)
	if err != nil {
		return nil, err
	}

	resp, err := bindings.NewPortalRegistry(common.HexToAddress(predeploys.PortalRegistry), ethCl)
	if err != nil {
		return nil, errors.Wrap(err, "create portal registry")
	}

	return resp, nil
}

// initializeEthClients initializes the RPC clients for the given chains.
func initializeEthClients(chains []netconf.Chain, endpoints xchain.RPCEndpoints) (map[uint64]ethclient.Client, error) {
	rpcClientPerChain := make(map[uint64]ethclient.Client)
	for _, chain := range chains {
		rpc, err := endpoints.ByNameOrID(chain.Name, chain.ID)
		if err != nil {
			return nil, err
		}
		c, err := ethclient.Dial(chain.Name, rpc)
		if err != nil {
			return nil, errors.Wrap(err, "dial rpc", "chain_name", chain.Name, "chain_id", chain.ID, "rpc_url", rpc)
		}
		rpcClientPerChain[chain.ID] = c
	}

	return rpcClientPerChain, nil
}

func startEventStreams(
	ctx context.Context,
	network netconf.Network,
	xprov xchain.Provider,
	backends ethbackend.Backends,
	def Definition,
	solverAddr common.Address,
) error {
	inboxContracts := make(map[uint64]*bindings.SolveInbox)
	outboxContracts := make(map[uint64]*bindings.SolveOutbox)
	for _, chain := range network.EVMChains() {
		backend, err := backends.Backend(chain.ID)
		if err != nil {
			return err
		}

		inbox, err := bindings.NewSolveInbox(def.InboxAddress, backend)
		if err != nil {
			return errors.Wrap(err, "create inbox contract", "chain_id", chain.ID)
		}

		outbox, err := bindings.NewSolveOutbox(def.OutboxAddress, backend)
		if err != nil {
			return errors.Wrap(err, "create outbox contract", "chain_id", chain.ID)
		}

		inboxContracts[chain.ID] = inbox
		outboxContracts[chain.ID] = outbox
	}

	deps := procDeps{
		ParseID:      newIDParser(inboxContracts),
		GetRequest:   newRequestGetter(inboxContracts),
		ShouldReject: newRequestValidator(def),
		Accept:       newAcceptor(inboxContracts, backends, solverAddr),
		Reject:       newRejector(inboxContracts, backends, solverAddr),
		Fulfill:      newFulfiller(outboxContracts, backends, solverAddr),
		Claim:        newClaimer(inboxContracts, backends, solverAddr),
	}

	for _, chain := range network.EVMChains() {
		go streamEventsForever(ctx, chain.ID, xprov, deps, def)
	}

	return nil
}

func streamEventsForever(
	ctx context.Context,
	chainID uint64,
	xprov xchain.Provider,
	deps procDeps,
	def Definition,
) {
	backoff := expbackoff.New(ctx, expbackoff.WithPeriodicConfig(time.Second*5))
	for {
		req := xchain.EventLogsReq{
			ChainID:       chainID,
			Height:        0, // TODO(corver): Persist heights in DB.
			ConfLevel:     xchain.ConfLatest,
			FilterAddress: def.InboxAddress,
			FilterTopics:  allEventTopics,
		}
		err := xprov.StreamEventLogs(ctx, req, newEventProcessor(deps, chainID))
		if ctx.Err() != nil {
			return
		}

		log.Warn(ctx, "Failure streaming inbox events (will retry)", err)
		backoff()
	}
}
