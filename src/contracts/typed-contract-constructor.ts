import type { BaseContract, ContractRunner } from 'ethers'

type TypedContractConstructor<TypedContractClass extends BaseContract> = typeof BaseContract & {
  new (target: string, runner?: null | ContractRunner): TypedContractClass;
}

export type { TypedContractConstructor }
