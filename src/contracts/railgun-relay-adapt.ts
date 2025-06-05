import ABI from '@railgun-reloaded/contract-abis/RelayAdapt.json'
import type { Addressable, ContractRunner } from 'ethers'
import { BaseContract } from 'ethers'

import type { RelayAdapt } from '../generated-types/RelayAdapt'

import type { TypedContractConstructor } from './typed-contract-constructor'

/**
 * Relay Adapt Contract
 */
class RailgunRelayAdaptBase extends BaseContract {
  /**
   * Create Railgun RelayAdapt ethers contract class
   * @param target - contract address
   * @param runner - ethers runner (provider, signer, etc.)
   */
  constructor (target: string | Addressable, runner?: null | ContractRunner) {
    super(target, ABI, runner)
  }
}

export const RailgunRelayAdaptContract = RailgunRelayAdaptBase as TypedContractConstructor<RelayAdapt>
