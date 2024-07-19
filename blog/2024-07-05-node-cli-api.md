---
title: Node API & CLI Team Update
slug: 2024-07-05-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-06-21 - 2024-07-05

## High level summary

Preparation for node 9.0 with cardano-api-9.0.0.0 and cardano-cli-9.0.0.0

### cardano-cli

- [Fix typo in help/error messages](https://github.com/IntersectMBO/cardano-cli/pull/820)
- [Remove the unused output options from runTxBuild](https://github.com/IntersectMBO/cardano-cli/pull/817)
- [Share code in parsers of committee commands](https://github.com/IntersectMBO/cardano-cli/pull/816)
- [Release cardano-cli-9.0.0.0](https://github.com/IntersectMBO/cardano-cli/pull/814)
- [Integrate for node 9.0](https://github.com/IntersectMBO/cardano-cli/pull/808)
- [Release 8.25.0.0](https://github.com/IntersectMBO/cardano-cli/pull/807)
- [Add --hot-script-hash option to committee create-hot-key-authorization-certificate subcommand](https://github.com/IntersectMBO/cardano-cli/pull/806)
- [Update cardano-api to 8.49.0.0](https://github.com/IntersectMBO/cardano-cli/pull/804)
- [Make --fee mandatory in legacy transaction build-raw](https://github.com/IntersectMBO/cardano-cli/pull/797)
- [governance committee: fix hot/cold confusion in help text](https://github.com/IntersectMBO/cardano-cli/pull/795)

### cardano-api

- [release cardano-api 9.0.0.0](https://github.com/IntersectMBO/cardano-api/pull/574)
- [integrate ouroboros-consensus and ledger for 9.0](https://github.com/IntersectMBO/cardano-api/pull/571)
- [Remove check for DRep metadata size](https://github.com/IntersectMBO/cardano-api/pull/569)
- [Regression test for issue with deserialization of PoolDistr](https://github.com/IntersectMBO/cardano-api/pull/567)
- [Remove redundant era conversion functions. Handle IO Exceptions in consensus queries. Refactor `Cardano.Api.Convenience.Query` to work in `ExceptT e IO`.](https://github.com/IntersectMBO/cardano-api/pull/566)
- [Release cardano-api-8.49.0.0](https://github.com/IntersectMBO/cardano-api/pull/565)

### cardano-node

- [Cl/integrate 9.0](https://github.com/IntersectMBO/cardano-node/pull/5895)
- [Bump node version to 8.12.2](https://github.com/IntersectMBO/cardano-node/pull/5893)
- [node-8.12.2](https://github.com/IntersectMBO/cardano-node/pull/5892)
- [consensus/ledger/network: bump version for 8.12.1 release](https://github.com/IntersectMBO/cardano-node/pull/5886)

### cardano-testnet

- [Cl/integrate 9.0](https://github.com/IntersectMBO/cardano-node/pull/5895)

### docs

### CI & project maintenance
