/* eslint camelcase: ["error", {allow: ["RailgunV2_1Contract", "RailgunV2_1"]}] */
import ABI from '@railgun-reloaded/contract-abis/RailgunV2_1.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RailgunV2_1 } from '../generated-types/RailgunV2_1'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Typed Contract for RailgunSmartWallet V2
 */
class RailgunV2_1Base extends BaseContract {
  /**
   * Create RailgunSmartWalletV21 ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, ABI, runner)
  }
}

export const RailgunV2_1Contract = RailgunV2_1Base as TypedContractConstructor<RailgunV2_1>
