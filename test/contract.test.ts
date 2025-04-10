import { test } from 'brittle'
import { JsonRpcProvider } from 'ethers'

import { RailgunLogicV1Contract, RailgunRelayAdaptContract, RailgunSmartWalletV2Contract } from '../src'

const mockProvider = new JsonRpcProvider('http://localhost:8545')
const mockAddress = '0x1234567890123456789012345678901234567890'

test('should create an instance of RailgunLogicV1Contract', (assert) => {
  const contract = new RailgunLogicV1Contract(mockAddress, mockProvider)
  assert.ok(contract, 'Contract instance should be created')
  assert.is(contract.target, mockAddress, 'Contract should have the correct target address')
  assert.ok(contract.runner === mockProvider, 'Contract should have the correct provider')
  assert.ok(contract.interface, 'Contract should have an interface')
})

test('should have expected functions', (assert) => {
  const contract = new RailgunLogicV1Contract(mockAddress, mockProvider)
  // Check for expected functions from the ABI
  assert.is(typeof contract.getVerificationKey, 'function', 'getVerificationKey function should exist')
})

test('should create an instance of RailgunSmartWalletV2Contract', (assert) => {
  const contract = new RailgunSmartWalletV2Contract(mockAddress, mockProvider)
  assert.ok(contract, 'Contract instance should be created')
  assert.is(contract.target, mockAddress, 'Contract should have the correct target address')
  assert.ok(contract.runner === mockProvider, 'Contract should have the correct provider')
  assert.ok(contract.interface, 'Contract should have an interface')
})

test('should have expected functions', (assert) => {
  const contract = new RailgunSmartWalletV2Contract(mockAddress, mockProvider)
  assert.is(typeof contract.getTokenID, 'function', 'getTokenID function should exist')
})

test('should create an instance of RailgunRelayAdapt', (assert) => {
  const contract = new RailgunRelayAdaptContract(mockAddress, mockProvider)
  assert.ok(contract, 'Contract instance should be created')
  assert.is(contract.target, mockAddress, 'Contract should have the correct target address')
  assert.ok(contract.runner === mockProvider, 'Contract should have the correct provider')
  assert.ok(contract.interface, 'Contract should have an interface')
})
