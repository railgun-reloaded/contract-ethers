import ABI from '@railgun-reloaded/contract-abis/RailgunV2.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RailgunV2 } from '../generated-types/RailgunV2'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Typed Contract for RailgunSmartWallet V2
 */
class RailgunV2Base extends BaseContract {
  /**
   * Create RailgunSmartWalletV2 ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, ABI, runner)
  }
}

export const RailgunV2Contract = RailgunV2Base as TypedContractConstructor<RailgunV2>
