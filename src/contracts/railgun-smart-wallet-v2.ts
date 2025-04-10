import RailgunSmartWalletV2ABI from '@railgun-reloaded/contract-abis/RailgunSmartWalletV2.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RailgunSmartWalletV2 } from '../generated-types/RailgunSmartWalletV2'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Typed Contract for RailgunSmartWallet V2
 */
class RailgunSmartWalletV2Base extends BaseContract {
  /**
   * Create RailgunSmartWalletV2 ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, RailgunSmartWalletV2ABI, runner)
  }
}

export const RailgunSmartWalletV2Contract = RailgunSmartWalletV2Base as TypedContractConstructor<RailgunSmartWalletV2>
