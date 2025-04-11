---
title: Node API & CLI Team Update
slug: 2025-02-28-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2025-02-15T00:00:00Z - 2025-02-28T00:00:00Z

## High level summary
- **cardano-cli updates**
  - Added Plutus script cost calculation for existing transactions
  - Implemented property test watchdog for better testing
  - Bumped cardano-api dependency to 10.9.0.0
  - Set hex as default output format for binary query utxo
  - Began RIO monad integration (part 1)
  - Refactored module structure to be domain-oriented
  - Standardized on fourmolu for code formatting

- **cardano-api improvements**
  - Added execution units check in transaction autobalancing tests
  - Included transaction creation examples in Haddock docs
  - Fixed governance action handling in transaction balancing
  - Enhanced witness count estimation to include simple scripts
  - Split compatible transaction building and signing logic
  - Migrated from cryptonite to crypton library
  - Standardized on fourmolu for code formatting
  - Updated CHaP index and flake inputs

- **cardano-testnet updates**
  - Fixed testnet test configuration
  - Optimized testnet code by removing unused indirections
  - Removed unused custom node configuration file option
  - Updated transaction submission handling


### cardano-cli
- [Add command to calculate plutus script costs from an already constructed transaction](https://github.com/IntersectMBO/cardano-cli/pull/1031)
- [Add watchdog for property tests in cardano-cli-test](https://github.com/IntersectMBO/cardano-cli/pull/1072)
- [Bump `cardano-api` to 10.9.0.0](https://github.com/IntersectMBO/cardano-cli/pull/1068)
- [Default to hex for binary query utxo output](https://github.com/IntersectMBO/cardano-cli/pull/1066)
- [Integrate RIO monad part 1](https://github.com/IntersectMBO/cardano-cli/pull/1033)
- [Refactor modules structure to make it more domain-related instead of function-related](https://github.com/IntersectMBO/cardano-cli/pull/1071)
- [Remove stylish haskell. Use only fourmolu for formatting.](https://github.com/IntersectMBO/cardano-cli/pull/1069)

### cardano-api
- [Add execution units check in transaction autobalancing test](https://github.com/IntersectMBO/cardano-api/pull/764)
- [Added examples of transaction creation to Haddock](https://github.com/IntersectMBO/cardano-api/pull/698)
- [Fix missing gov action on balance transaction](https://github.com/IntersectMBO/cardano-api/pull/765)
- [Fix typo in cardano-api's change log](https://github.com/IntersectMBO/cardano-api/pull/754)
- [Modify `estimateTransactionKeyWitnessCount` to estimate simple scripts too](https://github.com/IntersectMBO/cardano-api/pull/755)
- [Remove stylish haskell. Use only fourmolu for formatting.](https://github.com/IntersectMBO/cardano-api/pull/756)
- [Split compatible transaction building and signing](https://github.com/IntersectMBO/cardano-api/pull/750)
- [Switch cryptonite to crypton](https://github.com/IntersectMBO/cardano-api/pull/762)
- [Update CHaP index state and flake input](https://github.com/IntersectMBO/cardano-api/pull/752)

### cardano-node
- [cardano-testnet-test: fix a test stanza](https://github.com/IntersectMBO/cardano-node/pull/6129)
- [cardano-testnet: avoid a useless indirection](https://github.com/IntersectMBO/cardano-node/pull/6134)
- [cardano-testnet: remove possibility to programmatically pass a custom node configuration file (it was unused)](https://github.com/IntersectMBO/cardano-node/pull/6118)
- [cardano-testnet: use new output of "transaction submit"](https://github.com/IntersectMBO/cardano-node/pull/6003)

### cardano-testnet
- None

### docs
- None

### CI & project maintenance
- None
