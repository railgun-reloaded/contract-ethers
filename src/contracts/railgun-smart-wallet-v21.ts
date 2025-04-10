import RailgunSmartWalletV21ABI from '@railgun-reloaded/contract-abis/RailgunSmartWalletV21.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RailgunSmartWalletV21 } from '../generated-types/RailgunSmartWalletV21'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Typed Contract for RailgunSmartWallet V2
 */
class RailgunSmartWalletV21Base extends BaseContract {
  /**
   * Create RailgunSmartWalletV21 ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, RailgunSmartWalletV21ABI, runner)
  }
}

export const RailgunSmartWalletV21Contract = RailgunSmartWalletV21Base as TypedContractConstructor<RailgunSmartWalletV21>
