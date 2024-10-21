---
title: Node API & CLI Team Update
slug: 2024-10-02-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-09-18T00:00:00Z - 2024-10-02T00:00:00Z

## High level summary

- We continue to remove irrelevant eras from cardano-cli with an aim to simplify the Haskell code and the interface exposed to the user. 
- During a working group meeting a user [pointed out](https://github.com/IntersectMBO/cardano-cli/issues/882) the possibility to specify an incorrect anchor data hash. This has been largely rectified in `cardano-cli` but there is some more work to be done particularly in the `transaction build` command. 
- We added the possibility to specify supplemental datums and other minor improvements in this sprint.

### cardano-cli
- [Add a test of create-cardano](https://github.com/IntersectMBO/cardano-cli/pull/907)
- [Add anchor data hash checks to remaining governance action commands](https://github.com/IntersectMBO/cardano-cli/pull/915)
- [Add hash validation and support for HTTP(S) and IPFS to command `hash anchor-data`](https://github.com/IntersectMBO/cardano-cli/pull/895)
- [Add proposal hash check when creating `info` governance action](https://github.com/IntersectMBO/cardano-cli/pull/910)
- [create-testnet-data: take optional node configuration file as input and check/add genesis hashes and paths](https://github.com/IntersectMBO/cardano-cli/pull/908)
- [Remove era|legacy transaction view](https://github.com/IntersectMBO/cardano-cli/pull/868)
- [Remove eras older than Babbage support in `transaction build` and `transaction build-estimate`](https://github.com/IntersectMBO/cardano-cli/pull/878)
- [Remove legacy commands](https://github.com/IntersectMBO/cardano-cli/pull/905)
- [Update create-treasury-withdrawal](https://github.com/IntersectMBO/cardano-cli/pull/914)


### cardano-api
- [638-Allow next leadership-schedule at 4k/f](https://github.com/IntersectMBO/cardano-api/pull/639)
- [Add new field 'inlineDatumRaw' to TxOut ToJSON instance](https://github.com/IntersectMBO/cardano-api/pull/632)
- [Introduce supplementary datums](https://github.com/IntersectMBO/cardano-api/pull/640)
- [Make `IsXXXBasedEra` a class hierarchy](https://github.com/IntersectMBO/cardano-api/pull/641)


### cardano-node
- [cardano-node 9.2.0 release](https://github.com/IntersectMBO/cardano-node/pull/5944)
- [cardano-tracer: Allow switching EKG service between different nodes.](https://github.com/IntersectMBO/cardano-node/pull/5975)
- [cardano-tracer: OpenMetrics compliance for Prometheus; fix `forHuman` output in journald](https://github.com/IntersectMBO/cardano-node/pull/5997)


### cardano-testnet
- [cardano-testnet: Code sharing in Defaults.hs](https://github.com/IntersectMBO/cardano-node/pull/5996)
- [cardano-testnet: rename ShelleyTestnetOptions into GenesisOptions](https://github.com/IntersectMBO/cardano-node/pull/5987)

### docs

### CI & project maintenance
