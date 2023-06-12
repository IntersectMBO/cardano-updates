---
title: Node API & CLI Team Update
slug: 2023-05-24-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-05-24 - 2023-06-06

## High level summary
- The last sprint focused on removing cardano-cli and cardano-api from the cardano-node repository. We have successfully moved cardano-api to its own repository and will do the same for cardano-cli after the 8.1 node is released. 
- We provided assitance where needed in the release
- An integration repository https://github.com/input-output-hk/fusion-flamingo was created to enable my team to more easily work on cardano-cli and cardano-api

### docs

### CI & project maintenance

### Developer experience

### cardano-cli
- [Update `cardano-cli` changelog](https://github.com/input-output-hk/cardano-node/pull/5290) 
- [Propagate protocol parameters conversion errors](https://github.com/input-output-hk/cardano-node/pull/5197) 
- [Command line option for parsing UTC time to slot number](https://github.com/input-output-hk/cardano-node/pull/5149) 

### cardano-api
- [Switch to `tasty-discover`](https://github.com/input-output-hk/cardano-api/pull/31) 
- [Move tests to standard locations](https://github.com/input-output-hk/cardano-api/pull/30) 
- [Make cardano-api:internal component public](https://github.com/input-output-hk/cardano-api/pull/26) 
- [update chaps index](https://github.com/input-output-hk/cardano-api/pull/24) 
- [Make `ErrorSpec` check for all constructors, move golden tests together](https://github.com/input-output-hk/cardano-api/pull/18) 
- [Expose toAlonzoCostModels](https://github.com/input-output-hk/cardano-api/pull/17) 
- [Make `ErrorsSpec`  use generated types and constructors names](https://github.com/input-output-hk/cardano-api/pull/9) 
- [Check changelog in tag script](https://github.com/input-output-hk/cardano-api/pull/32) 
- [Use tag script from `cardano-dev` repository instead](https://github.com/input-output-hk/cardano-api/pull/34) 
- [Use .x suffix for release branches](https://github.com/input-output-hk/cardano-api/pull/38) 

### cardano-node
- [Use `cryptoInit` instead of `sodiumInit`](https://github.com/input-output-hk/cardano-node/pull/5291) 
- [Move configuration tests to `cardano-node` tests](https://github.com/input-output-hk/cardano-node/pull/5284) 
- [update chaps & integration](https://github.com/input-output-hk/cardano-node/pull/5243) 
- [#5222 Remove `ApplicationName` and `ApplicationVersion` config parameters](https://github.com/input-output-hk/cardano-node/pull/5240) 

### cardano-testnet
