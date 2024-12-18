//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OmniPortal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Holesky Etherscan__](https://holesky.etherscan.io/address/0xFfefF1D0972BCfD28339A80Ef80Ac7e441e49080)
 */
export const omniPortalAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  { type: "error", inputs: [], name: "ECDSAInvalidSignature" },
  {
    type: "error",
    inputs: [{ name: "length", internalType: "uint256", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
  },
  {
    type: "error",
    inputs: [{ name: "s", internalType: "bytes32", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
  },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "MerkleProofInvalidMultiproof" },
  { type: "error", inputs: [], name: "NotInitializing" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner",
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount",
  },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "oracle",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "FeeOracleSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "FeesCollected",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "srcChainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      {
        name: "shardId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      {
        name: "offset",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "InXBlockOffsetSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "srcChainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      {
        name: "shardId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      {
        name: "offset",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "InXMsgOffsetSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "Initialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  { type: "event", anonymous: false, inputs: [], name: "Paused" },
  { type: "event", anonymous: false, inputs: [], name: "Unpaused" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "setId", internalType: "uint64", type: "uint64", indexed: true },
    ],
    name: "ValidatorSetAdded",
  },
  { type: "event", anonymous: false, inputs: [], name: "XCallPaused" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "chainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
    ],
    name: "XCallToPaused",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "chainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
    ],
    name: "XCallToUnpaused",
  },
  { type: "event", anonymous: false, inputs: [], name: "XCallUnpaused" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "destChainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      {
        name: "shardId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      { name: "offset", internalType: "uint64", type: "uint64", indexed: true },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "to", internalType: "address", type: "address", indexed: false },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "gasLimit",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
      {
        name: "fees",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "XMsg",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "size", internalType: "uint16", type: "uint16", indexed: false },
    ],
    name: "XMsgMaxDataSizeSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "gasLimit",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "XMsgMaxGasLimitSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "gasLimit",
        internalType: "uint64",
        type: "uint64",
        indexed: false,
      },
    ],
    name: "XMsgMinGasLimitSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "sourceChainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      {
        name: "shardId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
      { name: "offset", internalType: "uint64", type: "uint64", indexed: true },
      {
        name: "gasUsed",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "relayer",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "success", internalType: "bool", type: "bool", indexed: false },
      { name: "error", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "XReceipt",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "size", internalType: "uint16", type: "uint16", indexed: false },
    ],
    name: "XReceiptMaxErrorSizeSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "cutoff", internalType: "uint8", type: "uint8", indexed: false },
    ],
    name: "XSubValsetCutoffSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "chainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
    ],
    name: "XSubmitFromPaused",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "chainId",
        internalType: "uint64",
        type: "uint64",
        indexed: true,
      },
    ],
    name: "XSubmitFromUnpaused",
  },
  { type: "event", anonymous: false, inputs: [], name: "XSubmitPaused" },
  { type: "event", anonymous: false, inputs: [], name: "XSubmitUnpaused" },
  {
    type: "function",
    inputs: [],
    name: "ActionXCall",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "ActionXSubmit",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "KeyPauseAll",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "XSubQuorumDenominator",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "XSubQuorumNumerator",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "valSetId", internalType: "uint64", type: "uint64" },
      {
        name: "validators",
        internalType: "struct XTypes.Validator[]",
        type: "tuple[]",
        components: [
          { name: "addr", internalType: "address", type: "address" },
          { name: "power", internalType: "uint64", type: "uint64" },
        ],
      },
    ],
    name: "addValidatorSet",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "chainId",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "to", internalType: "address", type: "address" }],
    name: "collectFees",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "destChainId", internalType: "uint64", type: "uint64" },
      { name: "data", internalType: "bytes", type: "bytes" },
      { name: "gasLimit", internalType: "uint64", type: "uint64" },
    ],
    name: "feeFor",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "feeOracle",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "uint64", type: "uint64" },
      { name: "", internalType: "uint64", type: "uint64" },
    ],
    name: "inXBlockOffset",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "uint64", type: "uint64" },
      { name: "", internalType: "uint64", type: "uint64" },
    ],
    name: "inXMsgOffset",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "p",
        internalType: "struct OmniPortal.InitParams",
        type: "tuple",
        components: [
          { name: "owner", internalType: "address", type: "address" },
          { name: "feeOracle", internalType: "address", type: "address" },
          { name: "omniChainId", internalType: "uint64", type: "uint64" },
          { name: "omniCChainId", internalType: "uint64", type: "uint64" },
          { name: "xmsgMaxGasLimit", internalType: "uint64", type: "uint64" },
          { name: "xmsgMinGasLimit", internalType: "uint64", type: "uint64" },
          { name: "xmsgMaxDataSize", internalType: "uint16", type: "uint16" },
          {
            name: "xreceiptMaxErrorSize",
            internalType: "uint16",
            type: "uint16",
          },
          { name: "xsubValsetCutoff", internalType: "uint8", type: "uint8" },
          { name: "cChainXMsgOffset", internalType: "uint64", type: "uint64" },
          {
            name: "cChainXBlockOffset",
            internalType: "uint64",
            type: "uint64",
          },
          { name: "valSetId", internalType: "uint64", type: "uint64" },
          {
            name: "validators",
            internalType: "struct XTypes.Validator[]",
            type: "tuple[]",
            components: [
              { name: "addr", internalType: "address", type: "address" },
              { name: "power", internalType: "uint64", type: "uint64" },
            ],
          },
        ],
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "actionId", internalType: "bytes32", type: "bytes32" }],
    name: "isPaused",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "actionId", internalType: "bytes32", type: "bytes32" },
      { name: "chainId_", internalType: "uint64", type: "uint64" },
    ],
    name: "isPaused",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "isPaused",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    name: "isSupportedDest",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    name: "isSupportedShard",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "isXCall",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "latestValSetId",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "network",
    outputs: [{ name: "chainId", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "omniCChainId",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "omniChainId",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "uint64", type: "uint64" },
      { name: "", internalType: "uint64", type: "uint64" },
    ],
    name: "outXMsgOffset",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "pauseXCall",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "chainId_", internalType: "uint64", type: "uint64" }],
    name: "pauseXCallTo",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "pauseXSubmit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "chainId_", internalType: "uint64", type: "uint64" }],
    name: "pauseXSubmitFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "feeOracle_", internalType: "address", type: "address" }],
    name: "setFeeOracle",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "sourceChainId", internalType: "uint64", type: "uint64" },
      { name: "shardId", internalType: "uint64", type: "uint64" },
      { name: "offset", internalType: "uint64", type: "uint64" },
    ],
    name: "setInXBlockOffset",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "sourceChainId", internalType: "uint64", type: "uint64" },
      { name: "shardId", internalType: "uint64", type: "uint64" },
      { name: "offset", internalType: "uint64", type: "uint64" },
    ],
    name: "setInXMsgOffset",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "network_",
        internalType: "struct XTypes.Chain[]",
        type: "tuple[]",
        components: [
          { name: "chainId", internalType: "uint64", type: "uint64" },
          { name: "shards", internalType: "uint64[]", type: "uint64[]" },
        ],
      },
    ],
    name: "setNetwork",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "numBytes", internalType: "uint16", type: "uint16" }],
    name: "setXMsgMaxDataSize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "gasLimit", internalType: "uint64", type: "uint64" }],
    name: "setXMsgMaxGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "gasLimit", internalType: "uint64", type: "uint64" }],
    name: "setXMsgMinGasLimit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "numBytes", internalType: "uint16", type: "uint16" }],
    name: "setXReceiptMaxErrorSize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "xsubValsetCutoff_", internalType: "uint8", type: "uint8" },
    ],
    name: "setXSubValsetCutoff",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "unpauseXCall",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "chainId_", internalType: "uint64", type: "uint64" }],
    name: "unpauseXCallTo",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "unpauseXSubmit",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "chainId_", internalType: "uint64", type: "uint64" }],
    name: "unpauseXSubmitFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "uint64", type: "uint64" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "valSet",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    name: "valSetTotalPower",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "destChainId", internalType: "uint64", type: "uint64" },
      { name: "conf", internalType: "uint8", type: "uint8" },
      { name: "to", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" },
      { name: "gasLimit", internalType: "uint64", type: "uint64" },
    ],
    name: "xcall",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "xmsg",
    outputs: [
      {
        name: "",
        internalType: "struct XTypes.MsgContext",
        type: "tuple",
        components: [
          { name: "sourceChainId", internalType: "uint64", type: "uint64" },
          { name: "sender", internalType: "address", type: "address" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "xmsgMaxDataSize",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "xmsgMaxGasLimit",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "xmsgMinGasLimit",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "xreceiptMaxErrorSize",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "xsubValsetCutoff",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "xsub",
        internalType: "struct XTypes.Submission",
        type: "tuple",
        components: [
          { name: "attestationRoot", internalType: "bytes32", type: "bytes32" },
          { name: "validatorSetId", internalType: "uint64", type: "uint64" },
          {
            name: "blockHeader",
            internalType: "struct XTypes.BlockHeader",
            type: "tuple",
            components: [
              { name: "sourceChainId", internalType: "uint64", type: "uint64" },
              {
                name: "consensusChainId",
                internalType: "uint64",
                type: "uint64",
              },
              { name: "confLevel", internalType: "uint8", type: "uint8" },
              { name: "offset", internalType: "uint64", type: "uint64" },
              {
                name: "sourceBlockHeight",
                internalType: "uint64",
                type: "uint64",
              },
              {
                name: "sourceBlockHash",
                internalType: "bytes32",
                type: "bytes32",
              },
            ],
          },
          {
            name: "msgs",
            internalType: "struct XTypes.Msg[]",
            type: "tuple[]",
            components: [
              { name: "destChainId", internalType: "uint64", type: "uint64" },
              { name: "shardId", internalType: "uint64", type: "uint64" },
              { name: "offset", internalType: "uint64", type: "uint64" },
              { name: "sender", internalType: "address", type: "address" },
              { name: "to", internalType: "address", type: "address" },
              { name: "data", internalType: "bytes", type: "bytes" },
              { name: "gasLimit", internalType: "uint64", type: "uint64" },
            ],
          },
          { name: "proof", internalType: "bytes32[]", type: "bytes32[]" },
          { name: "proofFlags", internalType: "bool[]", type: "bool[]" },
          {
            name: "signatures",
            internalType: "struct XTypes.SigTuple[]",
            type: "tuple[]",
            components: [
              {
                name: "validatorAddr",
                internalType: "address",
                type: "address",
              },
              { name: "signature", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "xsubmit",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const
