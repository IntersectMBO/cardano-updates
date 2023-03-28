---
title: Node API & CLI Team Update
slug: 2023-03-08-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-03-08 - 2023-03-21

## High level summary

General bug fixes and some refactoring 
## Completed

### docs

### CI & project maintenance

### Developer experience

### cardano-cli
- [Remove error calls in Cardano.CLI.Shelley.Run.Transaction](https://github.com/input-output-hk/cardano-node/pull/4958) 
- [Detect invalid counter and certificate](https://github.com/input-output-hk/cardano-node/pull/4880) 

### cardano-api
- [Add missing imports](https://github.com/input-output-hk/cardano-node/pull/5003) 
- [Add LedgerStateBabbage and LedgerStateConway pattern synonyms](https://github.com/input-output-hk/cardano-node/pull/5001) 
- [Remove unnecessary functions](https://github.com/input-output-hk/cardano-node/pull/4967) 
- [Remove duplicate scripts when building transaction body for Mary, Alonzo and Babbage](https://github.com/input-output-hk/cardano-node/pull/4953) 
- [Reduce number of calls to toLedgerPParams](https://github.com/input-output-hk/cardano-node/pull/4903) 
- [Remove simple script distinction](https://github.com/input-output-hk/cardano-node/pull/4763) 
- [Add ToJSON/FromJSON instances for ChainPoint](https://github.com/input-output-hk/cardano-node/pull/4686) 
- [Derive Eq instance for AcquiringFailure](https://github.com/input-output-hk/cardano-node/pull/4683) 
- [Export `fromShelleyBasedScript` from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4682) 
- [Remove unnecessary validation of Data](https://github.com/input-output-hk/cardano-node/pull/4344) 
- [Remove hint of "string" support for ScriptData](https://github.com/input-output-hk/cardano-node/pull/3775) 

### cardano-node
- [Conway hard forks on prot-ver 9](https://github.com/input-output-hk/cardano-node/pull/4988) 
- [Reinstate -Werror for cardano-node and fix errors](https://github.com/input-output-hk/cardano-node/pull/4968) 
- [Take all dependencies from Hackage or CHaP](https://github.com/input-output-hk/cardano-node/pull/4921) 
- [Less verbose node-to-client and node-to-node version logging](https://github.com/input-output-hk/cardano-node/pull/4911) 
- [Get AcceptedConnectionsLimit from the configuration](https://github.com/input-output-hk/cardano-node/pull/4902) 

### cardano-testnet
- [fix cardano-testnet Babbage genesis.json](https://github.com/input-output-hk/cardano-node/pull/4729) 



