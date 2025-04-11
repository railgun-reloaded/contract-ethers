import type { Addressable, BaseContract, ContractRunner } from 'ethers'

type TypedContractConstructor<TypedContractClass extends BaseContract> = typeof BaseContract & {
  new (target: string | Addressable, runner?: null | ContractRunner): TypedContractClass;
}

export type { TypedContractConstructor }
