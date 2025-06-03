import ABI from '@railgun-reloaded/contract-abis/RailgunV1.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RailgunV1 } from '../generated-types/RailgunV1'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Typed Contract For RailgunLogic V1
 */
class RailgunV1Base extends BaseContract {
  /**
   * Create RailgunLogicV1 ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, ABI, runner)
  }
}

export const RailgunV1Contract = RailgunV1Base as TypedContractConstructor<RailgunV1>
