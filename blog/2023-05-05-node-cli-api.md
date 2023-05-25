---
title: Node API & CLI Team Update
slug: 2023-05-05-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-05-05 - 2023-05-23

## High level summary
- Golden tests for cardano-cli command help output were added.
- Documentation was updated with new libsodium installation instructions.
- There were several updates for the cardano-cli:
    - Deletion of the deprecated shelley command group.
    - Addition of golden tests for CLI help.
    - An improvement to avoid bare IO in tests, allowing better error reporting in failed tests.
    - Generation of UTCTime test values without leap seconds (avoids erroneous test failures)
    - Support for signing transactions with GenesisDelegateSigningKey_ed25519_bip32.
- The cardano-api underwent multiple refinements:
    - Implementing deposit handling when balancing transactions (necessary for Conway)
    - Cleaning up socket file path code.
- Several changes were made to the cardano-testnet:
    - Adding golden tests for cardano-testnet help.
    - Removing all hardcoded yaml files in cardano-testnet
    - Improving cardano-testnet help output.
    - Parameterizing default yaml configuration value, allowing for easier hardforking to the era of choice.

### docs
- [Update libsodium installation instructions](https://github.com/input-output-hk/cardano-node/pull/5181) 

### CI & project maintenance

### Developer experience

### cardano-cli
- [Delete deprecated `shelley` command group](https://github.com/input-output-hk/cardano-node/pull/5264) 
- [Add golden tests for CLI help](https://github.com/input-output-hk/cardano-node/pull/5206) 
- [Avoid bare IO in tests](https://github.com/input-output-hk/cardano-node/pull/5201) 
- [Split `cardano-cli` test files into separate directories](https://github.com/input-output-hk/cardano-node/pull/5200) 
- [Make UTCTime test generator generate values without leap seconds](https://github.com/input-output-hk/cardano-node/pull/5198) 
- [Add support with signing transactions with `GenesisDelegateSigningKey_ed25519_bip32`](https://github.com/input-output-hk/cardano-node/pull/5189) 
- [Rename --signed-tx-file argument to --tx-file argument in verify-poll command](https://github.com/input-output-hk/cardano-node/pull/5184) 
- [Simplify socket path code](https://github.com/input-output-hk/cardano-node/pull/5120) 

### cardano-api
- [refactor: make renderScriptWitnessIndex output more explicit](https://github.com/input-output-hk/cardano-node/pull/5221) 
- [Implement deposit handling when balancing transactions](https://github.com/input-output-hk/cardano-node/pull/5218) 
- [Replace remaining `FilePath` use in `cardano-api`](https://github.com/input-output-hk/cardano-node/pull/5217) 
- [Cleanup socket file path code](https://github.com/input-output-hk/cardano-node/pull/5215) 
- [Delete `readEnvSocketPath` function](https://github.com/input-output-hk/cardano-node/pull/5207) 
- [IO functions for reading. Remove PoolMetadataFile type](https://github.com/input-output-hk/cardano-node/pull/5194) 
- [Expose config reader](https://github.com/input-output-hk/cardano-node/pull/5191) 
- [Golden tests for `cardano-api` errors](https://github.com/input-output-hk/cardano-node/pull/5188) 
- [Fix `toEraInMode` for conway](https://github.com/input-output-hk/cardano-node/pull/5175) 
- [Use machine readable output for ToJSON ScriptWitnessIndex](https://github.com/input-output-hk/cardano-node/pull/5168) 
- [Expose LocalTxSubmissionClient data constructor](https://github.com/input-output-hk/cardano-node/pull/5096) 
- [Use cardano-api from separate repository](https://github.com/input-output-hk/cardano-node/pull/5047) 
- [[cardano-api] Export fromConsensusPointHF](https://github.com/input-output-hk/cardano-node/pull/4684) 

### cardano-node
- [Provide orphan `ToJSON` instances for `HardForkNodeToClientVersion` and `HardForkNodeToNodeVersion`](https://github.com/input-output-hk/cardano-node/pull/5022) 

### cardano-testnet
- [Add golden test for `cardano-testnet` help](https://github.com/input-output-hk/cardano-node/pull/5254) 
- [Remove all hardcoded yaml files from cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/5242) 
- [Fix cardano-testnet help](https://github.com/input-output-hk/cardano-node/pull/5234) 
- [Parameterize default yaml configuration value in cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/5211) 
- [Freeze callstack in integration and integrationRetryWorkspace functions](https://github.com/input-output-hk/cardano-node/pull/5165) 
- [Create defaultYamlValue for cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/5128) 
