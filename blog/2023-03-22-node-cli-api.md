---
title: Node API & CLI Team Update
slug: 2023-03-22-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-03-22 - 2023-04-05

## High level summary

- Added new cardano-cli ping command which allows users to ping remote cardano-nodes.
- The `transaction build` command now can automatically balance multiassets
- New combinators for constructing transaction bodies. This allows us to construct transaction bodies in a composable manner.

### docs

### CI & project maintenance

### Developer experience

### cardano-cli
- [Remove unused error constructors](https://github.com/input-output-hk/cardano-node/pull/5041) 
- [Fix qKesKesKeyExpiry to not always be null](https://github.com/input-output-hk/cardano-node/pull/4909) 
- [New cardano-cli ping command.](https://github.com/input-output-hk/cardano-node/pull/4664) 

### cardano-api
- [Remove use of AcquireFailure type](https://github.com/input-output-hk/cardano-node/pull/5040) 
- [Simplify implementation of executeQueryAnyMode](https://github.com/input-output-hk/cardano-node/pull/5038) 
- [Script data serialisation](https://github.com/input-output-hk/cardano-node/pull/5002) 
- [Guard against overflows in Shelley TxIns](https://github.com/input-output-hk/cardano-node/pull/4956) 
- [Combinators for TxBodyContent and related types](https://github.com/input-output-hk/cardano-node/pull/4941) 
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450) 

### cardano-node

### cardano-testnet
- [Use Haskell variables for passing values.](https://github.com/input-output-hk/cardano-node/pull/5011) 
- [Re-enable kes-period-info test.](https://github.com/input-output-hk/cardano-node/pull/4879) 



