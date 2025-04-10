import RailgunLogicV1ABI from '@railgun-reloaded/contract-abis/RailgunLogicV1.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RailgunLogicV1 } from '../generated-types/RailgunLogicV1'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Typed Contract For RailgunLogic V1
 */
class RailgunLogicV1Base extends BaseContract {
  /**
   * Create RailgunLogicV1 ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, RailgunLogicV1ABI, runner)
  }
}

export const RailgunLogicV1Contract = RailgunLogicV1Base as TypedContractConstructor<RailgunLogicV1>
