---
title: Node API & CLI Team Update
slug: 20240806-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-07-22 - 2024-08-06

## High level summary

- [Cardano-node 9.1.0 release summary](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0)

### cardano-cli

- [Release cardano-cli-9.2.1.0](https://github.com/IntersectMBO/cardano-cli/pull/847)
- [Release cardano-cli-9.2.0.0](https://github.com/IntersectMBO/cardano-cli/pull/846)
- [Use `IsList(toList,fromList)` instead of specialised functions](https://github.com/IntersectMBO/cardano-cli/pull/852)
- [Fix invalid sync percentage display in `query tip`](https://github.com/IntersectMBO/cardano-cli/pull/851)
- [Add "query treasury" command](https://github.com/IntersectMBO/cardano-cli/pull/845)
- [Plutus V3 script updates](https://github.com/IntersectMBO/cardano-cli/pull/822)

### cardano-api

- [Release cardano-api-9.1.0.0](https://github.com/IntersectMBO/cardano-api/pull/593)
- [Remove CPP extension from `Cardano.Api.Fees`.  Use `IsList(toList,fromList)` instead of specialised functions.](https://github.com/IntersectMBO/cardano-api/pull/603)
- [Make it build with ghc-9.10](https://github.com/IntersectMBO/cardano-api/pull/599)
- [Expose `querySPOStakeDistribution` query](https://github.com/IntersectMBO/cardano-api/pull/598)
- [Modify TxCertificates allow multiple script witnesses for a single stake credential](https://github.com/IntersectMBO/cardano-api/pull/595)

### cardano-node

- [Cardano-node 9.1.0 release](https://github.com/IntersectMBO/cardano-node/pull/5910)
- [Make Plutus v2 cost model decoding era dependent](https://github.com/IntersectMBO/cardano-node/pull/5896)
- [New tracing system: actually trace GSM events](https://github.com/IntersectMBO/cardano-node/pull/5924)

### cardano-testnet

- [cardano-testnet | Add `cardano-cli query treasury`  check in treasury growth test](https://github.com/IntersectMBO/cardano-node/pull/5919)
- [Make Plutus v2 cost model decoding era dependent](https://github.com/IntersectMBO/cardano-node/pull/5896)
- [[cardano-testnet] Fix flaky test workspace cleanup and node port allocation](https://github.com/IntersectMBO/cardano-node/pull/5875)


