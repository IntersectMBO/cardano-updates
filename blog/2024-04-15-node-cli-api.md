---
title: Node API & CLI Team Update
slug: 2024-04-15-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-04-01 - 2024-04-15

## High level summary

Adding support for script based committee members certificates: authorization and resignation. It is now possible to convert extended signing Drep and Committee keys to a Shelley-format key. Improvements to Conway era tests. Use threshold instead of quorum for committee members. 

### cardano-cli

- [Provide a default value for `calculate-min-fee --reference-script-size`](https://github.com/IntersectMBO/cardano-cli/pull/716)
- [Improvements to governance tests](https://github.com/IntersectMBO/cardano-cli/pull/714)
- [Add transaction metadata golden test](https://github.com/IntersectMBO/cardano-cli/pull/713)
- [key non-extended-key: make pattern matches exhaustive, so that we are notified of possible extensions](https://github.com/IntersectMBO/cardano-cli/pull/710)
- [foldSomeAddressVerificationKey->mapSomeAddressVerificationKey](https://github.com/IntersectMBO/cardano-cli/pull/708)
- [Enable both --cold-script-file and --cold-script-hash for committee auth and resig commands](https://github.com/IntersectMBO/cardano-cli/pull/699)
- [Fix inversion in --include-stake parser + print "stake" field even when there is no stake (do not hide stake absence)](https://github.com/IntersectMBO/cardano-cli/pull/698)
- [Release cardano-cli-8.22.0.0](https://github.com/IntersectMBO/cardano-cli/pull/697)
- [Fix broken golden tests](https://github.com/IntersectMBO/cardano-cli/pull/694)
- [Fix protocol params order for minFeeA and minFeeB](https://github.com/IntersectMBO/cardano-cli/pull/693)
- [convert-cardano-address-key: support DRep and CC keys](https://github.com/IntersectMBO/cardano-cli/pull/691)
- [updating cli to use threshold instead of quorum for constitutional co…](https://github.com/IntersectMBO/cardano-cli/pull/689)

### cardano-api

- [Sort metadata keys for no-schema json for canonical CBOR](https://github.com/IntersectMBO/cardano-api/pull/517)
- [Add support for CC keys in the SomeAddressVerificationKey type](https://github.com/IntersectMBO/cardano-api/pull/514)
- [Implement estimateBalancedTxBody and estimateOrCalculateBalancedTxBody](https://github.com/IntersectMBO/cardano-api/pull/511)
- [Release cardano-api-8.44.0.0](https://github.com/IntersectMBO/cardano-api/pull/506)
- [LedgerState.hs improvements](https://github.com/IntersectMBO/cardano-api/pull/503)

### cardano-testnet

- [Updated copyright](https://github.com/IntersectMBO/cardano-node/pull/5766)
- [Set NumThreads to 1 in cardano-testnet-test](https://github.com/IntersectMBO/cardano-node/pull/5758)
- [Remove manual DRep registration from InfoAction test](https://github.com/IntersectMBO/cardano-node/pull/5749)
- [DRep deposits test](https://github.com/IntersectMBO/cardano-node/pull/5748)
- [Add tx fee check to hprop_transaction](https://github.com/IntersectMBO/cardano-node/pull/5747)
- [cardano-testnet: Avoid rewrite of sgMaxLovelaceSupply](https://github.com/IntersectMBO/cardano-node/pull/5746)

### docs

### CI & project maintenance
