// Code generated by github.com/fjl/gencodec. DO NOT EDIT.

package ethclient

import (
	"encoding/json"
	"errors"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/core/types"
)

var _ = (*receiptMarshaling)(nil)

// MarshalJSON marshals as JSON.
func (r Receipt) MarshalJSON() ([]byte, error) {
	type Receipt struct {
		Type                    hexutil.Uint64  `json:"type,omitempty"`
		PostState               hexutil.Bytes   `json:"root"`
		Status                  hexutil.Uint64  `json:"status"`
		CumulativeGasUsed       hexutil.Uint64  `gencodec:"required"   json:"cumulativeGasUsed"`
		Bloom                   types.Bloom     `gencodec:"required"   json:"logsBloom"`
		Logs                    []*types.Log    `gencodec:"required"   json:"logs"`
		TxHash                  common.Hash     `gencodec:"required"           json:"transactionHash"`
		ContractAddress         common.Address  `json:"contractAddress"`
		GasUsed                 hexutil.Uint64  `gencodec:"required"           json:"gasUsed"`
		EffectiveGasPrice       *hexutil.Big    `json:"effectiveGasPrice"`
		BlobGasUsed             hexutil.Uint64  `json:"blobGasUsed,omitempty"`
		BlobGasPrice            *hexutil.Big    `json:"blobGasPrice,omitempty"`
		BlockHash               common.Hash     `json:"blockHash,omitempty"`
		BlockNumber             *hexutil.Big    `json:"blockNumber,omitempty"`
		TransactionIndex        hexutil.Uint    `json:"transactionIndex"`
		OPDepositNonce          *hexutil.Uint64 `json:"depositNonce,omitempty"`
		OPDepositReceiptVersion *hexutil.Uint64 `json:"depositReceiptVersion,omitempty"`
		OPL1GasPrice            *hexutil.Big    `json:"l1GasPrice,omitempty"`
		OPL1BlobBaseFee         *hexutil.Big    `json:"l1BlobBaseFee,omitempty"`
		OPL1GasUsed             *hexutil.Big    `json:"l1GasUsed,omitempty"`
		OPL1Fee                 *hexutil.Big    `json:"l1Fee,omitempty"`
		OPL1FeeScalar           *big.Float      `json:"l1FeeScalar,omitempty"`
		OPL1BaseFeeScalar       *hexutil.Uint64 `json:"l1BaseFeeScalar,omitempty"`
		OPL1BlobBaseFeeScalar   *hexutil.Uint64 `json:"l1BlobBaseFeeScalar,omitempty"`
	}
	var enc Receipt
	enc.Type = hexutil.Uint64(r.Type)
	enc.PostState = r.PostState
	enc.Status = hexutil.Uint64(r.Status)
	enc.CumulativeGasUsed = hexutil.Uint64(r.CumulativeGasUsed)
	enc.Bloom = r.Bloom
	enc.Logs = r.Logs
	enc.TxHash = r.TxHash
	enc.ContractAddress = r.ContractAddress
	enc.GasUsed = hexutil.Uint64(r.GasUsed)
	enc.EffectiveGasPrice = (*hexutil.Big)(r.EffectiveGasPrice)
	enc.BlobGasUsed = hexutil.Uint64(r.BlobGasUsed)
	enc.BlobGasPrice = (*hexutil.Big)(r.BlobGasPrice)
	enc.BlockHash = r.BlockHash
	enc.BlockNumber = (*hexutil.Big)(r.BlockNumber)
	enc.TransactionIndex = hexutil.Uint(r.TransactionIndex)
	enc.OPDepositNonce = (*hexutil.Uint64)(r.OPDepositNonce)
	enc.OPDepositReceiptVersion = (*hexutil.Uint64)(r.OPDepositReceiptVersion)
	enc.OPL1GasPrice = (*hexutil.Big)(r.OPL1GasPrice)
	enc.OPL1BlobBaseFee = (*hexutil.Big)(r.OPL1BlobBaseFee)
	enc.OPL1GasUsed = (*hexutil.Big)(r.OPL1GasUsed)
	enc.OPL1Fee = (*hexutil.Big)(r.OPL1Fee)
	enc.OPL1FeeScalar = r.OPL1FeeScalar
	enc.OPL1BaseFeeScalar = (*hexutil.Uint64)(r.OPL1BaseFeeScalar)
	enc.OPL1BlobBaseFeeScalar = (*hexutil.Uint64)(r.OPL1BlobBaseFeeScalar)
	return json.Marshal(&enc)
}

// UnmarshalJSON unmarshals from JSON.
func (r *Receipt) UnmarshalJSON(input []byte) error {
	type Receipt struct {
		Type                    *hexutil.Uint64 `json:"type,omitempty"`
		PostState               *hexutil.Bytes  `json:"root"`
		Status                  *hexutil.Uint64 `json:"status"`
		CumulativeGasUsed       *hexutil.Uint64 `gencodec:"required"   json:"cumulativeGasUsed"`
		Bloom                   *types.Bloom    `gencodec:"required"   json:"logsBloom"`
		Logs                    []*types.Log    `gencodec:"required"   json:"logs"`
		TxHash                  *common.Hash    `gencodec:"required"           json:"transactionHash"`
		ContractAddress         *common.Address `json:"contractAddress"`
		GasUsed                 *hexutil.Uint64 `gencodec:"required"           json:"gasUsed"`
		EffectiveGasPrice       *hexutil.Big    `json:"effectiveGasPrice"`
		BlobGasUsed             *hexutil.Uint64 `json:"blobGasUsed,omitempty"`
		BlobGasPrice            *hexutil.Big    `json:"blobGasPrice,omitempty"`
		BlockHash               *common.Hash    `json:"blockHash,omitempty"`
		BlockNumber             *hexutil.Big    `json:"blockNumber,omitempty"`
		TransactionIndex        *hexutil.Uint   `json:"transactionIndex"`
		OPDepositNonce          *hexutil.Uint64 `json:"depositNonce,omitempty"`
		OPDepositReceiptVersion *hexutil.Uint64 `json:"depositReceiptVersion,omitempty"`
		OPL1GasPrice            *hexutil.Big    `json:"l1GasPrice,omitempty"`
		OPL1BlobBaseFee         *hexutil.Big    `json:"l1BlobBaseFee,omitempty"`
		OPL1GasUsed             *hexutil.Big    `json:"l1GasUsed,omitempty"`
		OPL1Fee                 *hexutil.Big    `json:"l1Fee,omitempty"`
		OPL1FeeScalar           *big.Float      `json:"l1FeeScalar,omitempty"`
		OPL1BaseFeeScalar       *hexutil.Uint64 `json:"l1BaseFeeScalar,omitempty"`
		OPL1BlobBaseFeeScalar   *hexutil.Uint64 `json:"l1BlobBaseFeeScalar,omitempty"`
	}
	var dec Receipt
	if err := json.Unmarshal(input, &dec); err != nil {
		return err
	}
	if dec.Type != nil {
		r.Type = uint8(*dec.Type)
	}
	if dec.PostState != nil {
		r.PostState = *dec.PostState
	}
	if dec.Status != nil {
		r.Status = uint64(*dec.Status)
	}
	if dec.CumulativeGasUsed == nil {
		return errors.New("missing required field 'cumulativeGasUsed' for Receipt")
	}
	r.CumulativeGasUsed = uint64(*dec.CumulativeGasUsed)
	if dec.Bloom == nil {
		return errors.New("missing required field 'logsBloom' for Receipt")
	}
	r.Bloom = *dec.Bloom
	if dec.Logs == nil {
		return errors.New("missing required field 'logs' for Receipt")
	}
	r.Logs = dec.Logs
	if dec.TxHash == nil {
		return errors.New("missing required field 'transactionHash' for Receipt")
	}
	r.TxHash = *dec.TxHash
	if dec.ContractAddress != nil {
		r.ContractAddress = *dec.ContractAddress
	}
	if dec.GasUsed == nil {
		return errors.New("missing required field 'gasUsed' for Receipt")
	}
	r.GasUsed = uint64(*dec.GasUsed)
	if dec.EffectiveGasPrice != nil {
		r.EffectiveGasPrice = (*big.Int)(dec.EffectiveGasPrice)
	}
	if dec.BlobGasUsed != nil {
		r.BlobGasUsed = uint64(*dec.BlobGasUsed)
	}
	if dec.BlobGasPrice != nil {
		r.BlobGasPrice = (*big.Int)(dec.BlobGasPrice)
	}
	if dec.BlockHash != nil {
		r.BlockHash = *dec.BlockHash
	}
	if dec.BlockNumber != nil {
		r.BlockNumber = (*big.Int)(dec.BlockNumber)
	}
	if dec.TransactionIndex != nil {
		r.TransactionIndex = uint(*dec.TransactionIndex)
	}
	if dec.OPDepositNonce != nil {
		r.OPDepositNonce = (*uint64)(dec.OPDepositNonce)
	}
	if dec.OPDepositReceiptVersion != nil {
		r.OPDepositReceiptVersion = (*uint64)(dec.OPDepositReceiptVersion)
	}
	if dec.OPL1GasPrice != nil {
		r.OPL1GasPrice = (*big.Int)(dec.OPL1GasPrice)
	}
	if dec.OPL1BlobBaseFee != nil {
		r.OPL1BlobBaseFee = (*big.Int)(dec.OPL1BlobBaseFee)
	}
	if dec.OPL1GasUsed != nil {
		r.OPL1GasUsed = (*big.Int)(dec.OPL1GasUsed)
	}
	if dec.OPL1Fee != nil {
		r.OPL1Fee = (*big.Int)(dec.OPL1Fee)
	}
	if dec.OPL1FeeScalar != nil {
		r.OPL1FeeScalar = dec.OPL1FeeScalar
	}
	if dec.OPL1BaseFeeScalar != nil {
		r.OPL1BaseFeeScalar = (*uint64)(dec.OPL1BaseFeeScalar)
	}
	if dec.OPL1BlobBaseFeeScalar != nil {
		r.OPL1BlobBaseFeeScalar = (*uint64)(dec.OPL1BlobBaseFeeScalar)
	}
	return nil
}