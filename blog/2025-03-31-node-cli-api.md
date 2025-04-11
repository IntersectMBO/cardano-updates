---
title: Node API & CLI Team Update
slug: 2025-03-31-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2025-03-15T00:00:00Z - 2025-03-31T00:00:00Z

## High level summary
- **cardano-cli updates**
  - Added mnemonic sentence support for key generation
  - Improved minting value representation in code
  - Removed deprecated `shelley` command group and related tests
  - Optimized command parsing by inlining `subParser`
  - Parallelized golden tests for help commands
  - Released v10.5.0.0

- **cardano-api improvements**
  - Added mnemonic support
  - Introduced new witness API and improved minting policies
  - Added deserialization warnings for HashableScriptData
  - Removed deprecated ProtocolParameters
  - Released versions 10.11.0.0, 10.11.1.0, and 10.12.0.0
  - Added missing StakePool key conversion instance

- **cardano-testnet updates**
  - Expose option to specify a node configuration file 
  - Removed unused P2P enable option
  - Changed to file-based PID storage for testnet nodes

### cardano-cli
- [Add mnemonic sentence support](https://github.com/IntersectMBO/cardano-cli/pull/975)
- [Better representation of minting values in the code](https://github.com/IntersectMBO/cardano-cli/pull/1085)
- [Delete top-level `shelley` command group and delete associated tests](https://github.com/IntersectMBO/cardano-cli/pull/1111)
- [Inline `subParser`](https://github.com/IntersectMBO/cardano-cli/pull/1094)
- [Parallelise HelpCmd golden tests](https://github.com/IntersectMBO/cardano-cli/pull/1103)
- [Release cardano-cli-10.5.0.0](https://github.com/IntersectMBO/cardano-cli/pull/1096)

### cardano-api
- [Add fromCtxUTxOTxOut](https://github.com/IntersectMBO/cardano-api/pull/770)
- [Add missing `CastVerificationKeyRole StakePoolExtendedKey StakePoolKey` instance](https://github.com/IntersectMBO/cardano-api/pull/782)
- [Add mnemonic support](https://github.com/IntersectMBO/cardano-api/pull/678)
- [Add warning for deserialisation issues for HashableScriptData](https://github.com/IntersectMBO/cardano-api/pull/783)
- [Fix inputSet to be parameterized on the era](https://github.com/IntersectMBO/cardano-api/pull/788)
- [For release 10.3](https://github.com/IntersectMBO/cardano-api/pull/758)
- [Introduce new witness api](https://github.com/IntersectMBO/cardano-api/pull/763)
- [Make 1-1 relationship of witness and policy ID in TxMintValue instead of 1-*](https://github.com/IntersectMBO/cardano-api/pull/776)
- [Release cardano-api-10.11.0.0](https://github.com/IntersectMBO/cardano-api/pull/780)
- [Release cardano-api-10.11.1.0](https://github.com/IntersectMBO/cardano-api/pull/784)
- [Release cardano-api-10.12.0.0](https://github.com/IntersectMBO/cardano-api/pull/791)
- [Remove ProtocolParameters](https://github.com/IntersectMBO/cardano-api/pull/729)

### cardano-node
- [cardano-testnet: allow to take node configuration file as input](https://github.com/IntersectMBO/cardano-node/pull/6148)
- [cardano-testnet: remove unused enable P2P option](https://github.com/IntersectMBO/cardano-node/pull/6154)
- [cardano-testnet: store node PIDs as files](https://github.com/IntersectMBO/cardano-node/pull/6162)

### cardano-testnet
- None

### docs
- None

### CI & project maintenance
- None
