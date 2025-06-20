/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type TokenDataStruct = {
  tokenType: BigNumberish;
  tokenAddress: AddressLike;
  tokenSubID: BigNumberish;
};

export type TokenDataStructOutput = [
  tokenType: bigint,
  tokenAddress: string,
  tokenSubID: bigint
] & { tokenType: bigint; tokenAddress: string; tokenSubID: bigint };

export type CommitmentPreimageStruct = {
  npk: BytesLike;
  token: TokenDataStruct;
  value: BigNumberish;
};

export type CommitmentPreimageStructOutput = [
  npk: string,
  token: TokenDataStructOutput,
  value: bigint
] & { npk: string; token: TokenDataStructOutput; value: bigint };

export type ShieldCiphertextStruct = {
  encryptedBundle: [BytesLike, BytesLike, BytesLike];
  shieldKey: BytesLike;
};

export type ShieldCiphertextStructOutput = [
  encryptedBundle: [string, string, string],
  shieldKey: string
] & { encryptedBundle: [string, string, string]; shieldKey: string };

export type CommitmentCiphertextStruct = {
  ciphertext: [BytesLike, BytesLike, BytesLike, BytesLike];
  blindedSenderViewingKey: BytesLike;
  blindedReceiverViewingKey: BytesLike;
  annotationData: BytesLike;
  memo: BytesLike;
};

export type CommitmentCiphertextStructOutput = [
  ciphertext: [string, string, string, string],
  blindedSenderViewingKey: string,
  blindedReceiverViewingKey: string,
  annotationData: string,
  memo: string
] & {
  ciphertext: [string, string, string, string];
  blindedSenderViewingKey: string;
  blindedReceiverViewingKey: string;
  annotationData: string;
  memo: string;
};

export type G1PointStruct = { x: BigNumberish; y: BigNumberish };

export type G1PointStructOutput = [x: bigint, y: bigint] & {
  x: bigint;
  y: bigint;
};

export type G2PointStruct = {
  x: [BigNumberish, BigNumberish];
  y: [BigNumberish, BigNumberish];
};

export type G2PointStructOutput = [x: [bigint, bigint], y: [bigint, bigint]] & {
  x: [bigint, bigint];
  y: [bigint, bigint];
};

export type VerifyingKeyStruct = {
  artifactsIPFSHash: string;
  alpha1: G1PointStruct;
  beta2: G2PointStruct;
  gamma2: G2PointStruct;
  delta2: G2PointStruct;
  ic: G1PointStruct[];
};

export type VerifyingKeyStructOutput = [
  artifactsIPFSHash: string,
  alpha1: G1PointStructOutput,
  beta2: G2PointStructOutput,
  gamma2: G2PointStructOutput,
  delta2: G2PointStructOutput,
  ic: G1PointStructOutput[]
] & {
  artifactsIPFSHash: string;
  alpha1: G1PointStructOutput;
  beta2: G2PointStructOutput;
  gamma2: G2PointStructOutput;
  delta2: G2PointStructOutput;
  ic: G1PointStructOutput[];
};

export type BoundParamsStruct = {
  treeNumber: BigNumberish;
  minGasPrice: BigNumberish;
  unshield: BigNumberish;
  chainID: BigNumberish;
  adaptContract: AddressLike;
  adaptParams: BytesLike;
  commitmentCiphertext: CommitmentCiphertextStruct[];
};

export type BoundParamsStructOutput = [
  treeNumber: bigint,
  minGasPrice: bigint,
  unshield: bigint,
  chainID: bigint,
  adaptContract: string,
  adaptParams: string,
  commitmentCiphertext: CommitmentCiphertextStructOutput[]
] & {
  treeNumber: bigint;
  minGasPrice: bigint;
  unshield: bigint;
  chainID: bigint;
  adaptContract: string;
  adaptParams: string;
  commitmentCiphertext: CommitmentCiphertextStructOutput[];
};

export type ShieldRequestStruct = {
  preimage: CommitmentPreimageStruct;
  ciphertext: ShieldCiphertextStruct;
};

export type ShieldRequestStructOutput = [
  preimage: CommitmentPreimageStructOutput,
  ciphertext: ShieldCiphertextStructOutput
] & {
  preimage: CommitmentPreimageStructOutput;
  ciphertext: ShieldCiphertextStructOutput;
};

export type SnarkProofStruct = {
  a: G1PointStruct;
  b: G2PointStruct;
  c: G1PointStruct;
};

export type SnarkProofStructOutput = [
  a: G1PointStructOutput,
  b: G2PointStructOutput,
  c: G1PointStructOutput
] & { a: G1PointStructOutput; b: G2PointStructOutput; c: G1PointStructOutput };

export type TransactionStruct = {
  proof: SnarkProofStruct;
  merkleRoot: BytesLike;
  nullifiers: BytesLike[];
  commitments: BytesLike[];
  boundParams: BoundParamsStruct;
  unshieldPreimage: CommitmentPreimageStruct;
};

export type TransactionStructOutput = [
  proof: SnarkProofStructOutput,
  merkleRoot: string,
  nullifiers: string[],
  commitments: string[],
  boundParams: BoundParamsStructOutput,
  unshieldPreimage: CommitmentPreimageStructOutput
] & {
  proof: SnarkProofStructOutput;
  merkleRoot: string;
  nullifiers: string[];
  commitments: string[];
  boundParams: BoundParamsStructOutput;
  unshieldPreimage: CommitmentPreimageStructOutput;
};

export interface RailgunV2_1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "ZERO_VALUE"
      | "addToBlocklist"
      | "addVector"
      | "changeFee"
      | "changeTreasury"
      | "checkSafetyVectors"
      | "getFee"
      | "getInsertionTreeNumberAndStartingIndex"
      | "getTokenID"
      | "getVerificationKey"
      | "hashBoundParams"
      | "hashCommitment"
      | "hashLeftRight"
      | "initializeRailgunLogic"
      | "lastEventBlock"
      | "merkleRoot"
      | "nextLeafIndex"
      | "nftFee"
      | "nullifiers"
      | "owner"
      | "removeFromBlocklist"
      | "removeVector"
      | "renounceOwnership"
      | "rootHistory"
      | "setVerificationKey"
      | "shield"
      | "shieldFee"
      | "snarkSafetyVector"
      | "sumCommitments"
      | "tokenBlocklist"
      | "tokenIDMapping"
      | "transact"
      | "transferOwnership"
      | "treasury"
      | "treeNumber"
      | "unshieldFee"
      | "validateCommitmentPreimage"
      | "validateTransaction"
      | "verify"
      | "verifyProof"
      | "zeros"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddToBlocklist"
      | "FeeChange"
      | "Initialized"
      | "Nullified"
      | "OwnershipTransferred"
      | "RemoveFromBlocklist"
      | "Shield"
      | "Transact"
      | "TreasuryChange"
      | "Unshield"
      | "VerifyingKeySet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToBlocklist",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addVector",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeTreasury",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSafetyVectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInsertionTreeNumberAndStartingIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenID",
    values: [TokenDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getVerificationKey",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashBoundParams",
    values: [BoundParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "hashCommitment",
    values: [CommitmentPreimageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeRailgunLogic",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastEventBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextLeafIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nftFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nullifiers",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeFromBlocklist",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeVector",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rootHistory",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerificationKey",
    values: [BigNumberish, BigNumberish, VerifyingKeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "shield",
    values: [ShieldRequestStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "shieldFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "snarkSafetyVector",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sumCommitments",
    values: [TransactionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBlocklist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIDMapping",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transact",
    values: [TransactionStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "treeNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unshieldFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validateCommitmentPreimage",
    values: [CommitmentPreimageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTransaction",
    values: [TransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [TransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [VerifyingKeyStruct, SnarkProofStruct, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addToBlocklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addVector", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkSafetyVectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInsertionTreeNumberAndStartingIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTokenID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVerificationKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashBoundParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeRailgunLogic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastEventBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextLeafIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nftFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nullifiers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeFromBlocklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeVector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rootHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerificationKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shield", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shieldFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "snarkSafetyVector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sumCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBlocklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIDMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transact", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treeNumber", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unshieldFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateCommitmentPreimage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}

export namespace AddToBlocklistEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeChangeEvent {
  export type InputTuple = [
    shieldFee: BigNumberish,
    unshieldFee: BigNumberish,
    nftFee: BigNumberish
  ];
  export type OutputTuple = [
    shieldFee: bigint,
    unshieldFee: bigint,
    nftFee: bigint
  ];
  export interface OutputObject {
    shieldFee: bigint;
    unshieldFee: bigint;
    nftFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NullifiedEvent {
  export type InputTuple = [treeNumber: BigNumberish, nullifier: BytesLike[]];
  export type OutputTuple = [treeNumber: bigint, nullifier: string[]];
  export interface OutputObject {
    treeNumber: bigint;
    nullifier: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveFromBlocklistEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ShieldEvent {
  export type InputTuple = [
    treeNumber: BigNumberish,
    startPosition: BigNumberish,
    commitments: CommitmentPreimageStruct[],
    shieldCiphertext: ShieldCiphertextStruct[],
    fees: BigNumberish[]
  ];
  export type OutputTuple = [
    treeNumber: bigint,
    startPosition: bigint,
    commitments: CommitmentPreimageStructOutput[],
    shieldCiphertext: ShieldCiphertextStructOutput[],
    fees: bigint[]
  ];
  export interface OutputObject {
    treeNumber: bigint;
    startPosition: bigint;
    commitments: CommitmentPreimageStructOutput[];
    shieldCiphertext: ShieldCiphertextStructOutput[];
    fees: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransactEvent {
  export type InputTuple = [
    treeNumber: BigNumberish,
    startPosition: BigNumberish,
    hash: BytesLike[],
    ciphertext: CommitmentCiphertextStruct[]
  ];
  export type OutputTuple = [
    treeNumber: bigint,
    startPosition: bigint,
    hash: string[],
    ciphertext: CommitmentCiphertextStructOutput[]
  ];
  export interface OutputObject {
    treeNumber: bigint;
    startPosition: bigint;
    hash: string[];
    ciphertext: CommitmentCiphertextStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TreasuryChangeEvent {
  export type InputTuple = [treasury: AddressLike];
  export type OutputTuple = [treasury: string];
  export interface OutputObject {
    treasury: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnshieldEvent {
  export type InputTuple = [
    to: AddressLike,
    token: TokenDataStruct,
    amount: BigNumberish,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    to: string,
    token: TokenDataStructOutput,
    amount: bigint,
    fee: bigint
  ];
  export interface OutputObject {
    to: string;
    token: TokenDataStructOutput;
    amount: bigint;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VerifyingKeySetEvent {
  export type InputTuple = [
    nullifiers: BigNumberish,
    commitments: BigNumberish,
    verifyingKey: VerifyingKeyStruct
  ];
  export type OutputTuple = [
    nullifiers: bigint,
    commitments: bigint,
    verifyingKey: VerifyingKeyStructOutput
  ];
  export interface OutputObject {
    nullifiers: bigint;
    commitments: bigint;
    verifyingKey: VerifyingKeyStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RailgunV2_1 extends BaseContract {
  connect(runner?: ContractRunner | null): RailgunV2_1;
  waitForDeployment(): Promise<this>;

  interface: RailgunV2_1Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ZERO_VALUE: TypedContractMethod<[], [string], "view">;

  addToBlocklist: TypedContractMethod<
    [_tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  addVector: TypedContractMethod<[vector: BigNumberish], [void], "nonpayable">;

  changeFee: TypedContractMethod<
    [
      _shieldFee: BigNumberish,
      _unshieldFee: BigNumberish,
      _nftFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  changeTreasury: TypedContractMethod<
    [_treasury: AddressLike],
    [void],
    "nonpayable"
  >;

  checkSafetyVectors: TypedContractMethod<[], [void], "nonpayable">;

  getFee: TypedContractMethod<
    [_amount: BigNumberish, _isInclusive: boolean, _feeBP: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  getInsertionTreeNumberAndStartingIndex: TypedContractMethod<
    [_newCommitments: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  getTokenID: TypedContractMethod<
    [_tokenData: TokenDataStruct],
    [string],
    "view"
  >;

  getVerificationKey: TypedContractMethod<
    [_nullifiers: BigNumberish, _commitments: BigNumberish],
    [VerifyingKeyStructOutput],
    "view"
  >;

  hashBoundParams: TypedContractMethod<
    [_boundParams: BoundParamsStruct],
    [bigint],
    "view"
  >;

  hashCommitment: TypedContractMethod<
    [_commitmentPreimage: CommitmentPreimageStruct],
    [string],
    "view"
  >;

  hashLeftRight: TypedContractMethod<
    [_left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;

  initializeRailgunLogic: TypedContractMethod<
    [
      _treasury: AddressLike,
      _shieldFee: BigNumberish,
      _unshieldFee: BigNumberish,
      _nftFee: BigNumberish,
      _owner: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  lastEventBlock: TypedContractMethod<[], [bigint], "view">;

  merkleRoot: TypedContractMethod<[], [string], "view">;

  nextLeafIndex: TypedContractMethod<[], [bigint], "view">;

  nftFee: TypedContractMethod<[], [bigint], "view">;

  nullifiers: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  removeFromBlocklist: TypedContractMethod<
    [_tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  removeVector: TypedContractMethod<
    [vector: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rootHistory: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [boolean],
    "view"
  >;

  setVerificationKey: TypedContractMethod<
    [
      _nullifiers: BigNumberish,
      _commitments: BigNumberish,
      _verifyingKey: VerifyingKeyStruct
    ],
    [void],
    "nonpayable"
  >;

  shield: TypedContractMethod<
    [_shieldRequests: ShieldRequestStruct[]],
    [void],
    "nonpayable"
  >;

  shieldFee: TypedContractMethod<[], [bigint], "view">;

  snarkSafetyVector: TypedContractMethod<
    [arg0: BigNumberish],
    [boolean],
    "view"
  >;

  sumCommitments: TypedContractMethod<
    [_transactions: TransactionStruct[]],
    [bigint],
    "view"
  >;

  tokenBlocklist: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  tokenIDMapping: TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, string, bigint] & {
        tokenType: bigint;
        tokenAddress: string;
        tokenSubID: bigint;
      }
    ],
    "view"
  >;

  transact: TypedContractMethod<
    [_transactions: TransactionStruct[]],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  treeNumber: TypedContractMethod<[], [bigint], "view">;

  unshieldFee: TypedContractMethod<[], [bigint], "view">;

  validateCommitmentPreimage: TypedContractMethod<
    [_note: CommitmentPreimageStruct],
    [[boolean, string]],
    "view"
  >;

  validateTransaction: TypedContractMethod<
    [_transaction: TransactionStruct],
    [[boolean, string]],
    "view"
  >;

  verify: TypedContractMethod<
    [_transaction: TransactionStruct],
    [boolean],
    "view"
  >;

  verifyProof: TypedContractMethod<
    [
      _verifyingKey: VerifyingKeyStruct,
      _proof: SnarkProofStruct,
      _inputs: BigNumberish[]
    ],
    [boolean],
    "view"
  >;

  zeros: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ZERO_VALUE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addToBlocklist"
  ): TypedContractMethod<[_tokens: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addVector"
  ): TypedContractMethod<[vector: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeFee"
  ): TypedContractMethod<
    [
      _shieldFee: BigNumberish,
      _unshieldFee: BigNumberish,
      _nftFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeTreasury"
  ): TypedContractMethod<[_treasury: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkSafetyVectors"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getFee"
  ): TypedContractMethod<
    [_amount: BigNumberish, _isInclusive: boolean, _feeBP: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInsertionTreeNumberAndStartingIndex"
  ): TypedContractMethod<
    [_newCommitments: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenID"
  ): TypedContractMethod<[_tokenData: TokenDataStruct], [string], "view">;
  getFunction(
    nameOrSignature: "getVerificationKey"
  ): TypedContractMethod<
    [_nullifiers: BigNumberish, _commitments: BigNumberish],
    [VerifyingKeyStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashBoundParams"
  ): TypedContractMethod<[_boundParams: BoundParamsStruct], [bigint], "view">;
  getFunction(
    nameOrSignature: "hashCommitment"
  ): TypedContractMethod<
    [_commitmentPreimage: CommitmentPreimageStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashLeftRight"
  ): TypedContractMethod<
    [_left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "initializeRailgunLogic"
  ): TypedContractMethod<
    [
      _treasury: AddressLike,
      _shieldFee: BigNumberish,
      _unshieldFee: BigNumberish,
      _nftFee: BigNumberish,
      _owner: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lastEventBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "merkleRoot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nextLeafIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nftFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nullifiers"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeFromBlocklist"
  ): TypedContractMethod<[_tokens: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeVector"
  ): TypedContractMethod<[vector: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rootHistory"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "setVerificationKey"
  ): TypedContractMethod<
    [
      _nullifiers: BigNumberish,
      _commitments: BigNumberish,
      _verifyingKey: VerifyingKeyStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "shield"
  ): TypedContractMethod<
    [_shieldRequests: ShieldRequestStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "shieldFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "snarkSafetyVector"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "sumCommitments"
  ): TypedContractMethod<
    [_transactions: TransactionStruct[]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenBlocklist"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "tokenIDMapping"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, string, bigint] & {
        tokenType: bigint;
        tokenAddress: string;
        tokenSubID: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "transact"
  ): TypedContractMethod<
    [_transactions: TransactionStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "treeNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unshieldFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validateCommitmentPreimage"
  ): TypedContractMethod<
    [_note: CommitmentPreimageStruct],
    [[boolean, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "validateTransaction"
  ): TypedContractMethod<
    [_transaction: TransactionStruct],
    [[boolean, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "verify"
  ): TypedContractMethod<[_transaction: TransactionStruct], [boolean], "view">;
  getFunction(
    nameOrSignature: "verifyProof"
  ): TypedContractMethod<
    [
      _verifyingKey: VerifyingKeyStruct,
      _proof: SnarkProofStruct,
      _inputs: BigNumberish[]
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "zeros"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getEvent(
    key: "AddToBlocklist"
  ): TypedContractEvent<
    AddToBlocklistEvent.InputTuple,
    AddToBlocklistEvent.OutputTuple,
    AddToBlocklistEvent.OutputObject
  >;
  getEvent(
    key: "FeeChange"
  ): TypedContractEvent<
    FeeChangeEvent.InputTuple,
    FeeChangeEvent.OutputTuple,
    FeeChangeEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Nullified"
  ): TypedContractEvent<
    NullifiedEvent.InputTuple,
    NullifiedEvent.OutputTuple,
    NullifiedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RemoveFromBlocklist"
  ): TypedContractEvent<
    RemoveFromBlocklistEvent.InputTuple,
    RemoveFromBlocklistEvent.OutputTuple,
    RemoveFromBlocklistEvent.OutputObject
  >;
  getEvent(
    key: "Shield"
  ): TypedContractEvent<
    ShieldEvent.InputTuple,
    ShieldEvent.OutputTuple,
    ShieldEvent.OutputObject
  >;
  getEvent(
    key: "Transact"
  ): TypedContractEvent<
    TransactEvent.InputTuple,
    TransactEvent.OutputTuple,
    TransactEvent.OutputObject
  >;
  getEvent(
    key: "TreasuryChange"
  ): TypedContractEvent<
    TreasuryChangeEvent.InputTuple,
    TreasuryChangeEvent.OutputTuple,
    TreasuryChangeEvent.OutputObject
  >;
  getEvent(
    key: "Unshield"
  ): TypedContractEvent<
    UnshieldEvent.InputTuple,
    UnshieldEvent.OutputTuple,
    UnshieldEvent.OutputObject
  >;
  getEvent(
    key: "VerifyingKeySet"
  ): TypedContractEvent<
    VerifyingKeySetEvent.InputTuple,
    VerifyingKeySetEvent.OutputTuple,
    VerifyingKeySetEvent.OutputObject
  >;

  filters: {
    "AddToBlocklist(address)": TypedContractEvent<
      AddToBlocklistEvent.InputTuple,
      AddToBlocklistEvent.OutputTuple,
      AddToBlocklistEvent.OutputObject
    >;
    AddToBlocklist: TypedContractEvent<
      AddToBlocklistEvent.InputTuple,
      AddToBlocklistEvent.OutputTuple,
      AddToBlocklistEvent.OutputObject
    >;

    "FeeChange(uint256,uint256,uint256)": TypedContractEvent<
      FeeChangeEvent.InputTuple,
      FeeChangeEvent.OutputTuple,
      FeeChangeEvent.OutputObject
    >;
    FeeChange: TypedContractEvent<
      FeeChangeEvent.InputTuple,
      FeeChangeEvent.OutputTuple,
      FeeChangeEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Nullified(uint16,bytes32[])": TypedContractEvent<
      NullifiedEvent.InputTuple,
      NullifiedEvent.OutputTuple,
      NullifiedEvent.OutputObject
    >;
    Nullified: TypedContractEvent<
      NullifiedEvent.InputTuple,
      NullifiedEvent.OutputTuple,
      NullifiedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RemoveFromBlocklist(address)": TypedContractEvent<
      RemoveFromBlocklistEvent.InputTuple,
      RemoveFromBlocklistEvent.OutputTuple,
      RemoveFromBlocklistEvent.OutputObject
    >;
    RemoveFromBlocklist: TypedContractEvent<
      RemoveFromBlocklistEvent.InputTuple,
      RemoveFromBlocklistEvent.OutputTuple,
      RemoveFromBlocklistEvent.OutputObject
    >;

    "Shield(uint256,uint256,tuple[],tuple[],uint256[])": TypedContractEvent<
      ShieldEvent.InputTuple,
      ShieldEvent.OutputTuple,
      ShieldEvent.OutputObject
    >;
    Shield: TypedContractEvent<
      ShieldEvent.InputTuple,
      ShieldEvent.OutputTuple,
      ShieldEvent.OutputObject
    >;

    "Transact(uint256,uint256,bytes32[],tuple[])": TypedContractEvent<
      TransactEvent.InputTuple,
      TransactEvent.OutputTuple,
      TransactEvent.OutputObject
    >;
    Transact: TypedContractEvent<
      TransactEvent.InputTuple,
      TransactEvent.OutputTuple,
      TransactEvent.OutputObject
    >;

    "TreasuryChange(address)": TypedContractEvent<
      TreasuryChangeEvent.InputTuple,
      TreasuryChangeEvent.OutputTuple,
      TreasuryChangeEvent.OutputObject
    >;
    TreasuryChange: TypedContractEvent<
      TreasuryChangeEvent.InputTuple,
      TreasuryChangeEvent.OutputTuple,
      TreasuryChangeEvent.OutputObject
    >;

    "Unshield(address,tuple,uint256,uint256)": TypedContractEvent<
      UnshieldEvent.InputTuple,
      UnshieldEvent.OutputTuple,
      UnshieldEvent.OutputObject
    >;
    Unshield: TypedContractEvent<
      UnshieldEvent.InputTuple,
      UnshieldEvent.OutputTuple,
      UnshieldEvent.OutputObject
    >;

    "VerifyingKeySet(uint256,uint256,tuple)": TypedContractEvent<
      VerifyingKeySetEvent.InputTuple,
      VerifyingKeySetEvent.OutputTuple,
      VerifyingKeySetEvent.OutputObject
    >;
    VerifyingKeySet: TypedContractEvent<
      VerifyingKeySetEvent.InputTuple,
      VerifyingKeySetEvent.OutputTuple,
      VerifyingKeySetEvent.OutputObject
    >;
  };
}
