---
title: Node API & CLI Team Update
slug: 2024-01-31-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-01-16 - 2024-01-31

## High level summary

- cardano-cli: Adapt the output of the `protocol-parameters` query to show all parameters in Conway. Improved help on various commands. New command create-testnet-data to eventually replace create-staked.  

### cardano-cli

- [Update hedgehog-extras to 0.6.0.1](https://github.com/IntersectMBO/cardano-cli/pull/589)
- [create-testnet-data: don't fail trying to create irrelevant READMEs](https://github.com/IntersectMBO/cardano-cli/pull/588)
- [Update help for `drep-stake-distribution` and `drep-state` queries](https://github.com/IntersectMBO/cardano-cli/pull/585)
- [Release 8.19.0.0](https://github.com/IntersectMBO/cardano-cli/pull/578)
- [Update cardano-api 8.37.1](https://github.com/IntersectMBO/cardano-cli/pull/576)
- [create-testnet-data: various enhancements](https://github.com/IntersectMBO/cardano-cli/pull/575)
- [Revert #569: Back to cardano-api JSON for protocol parameters](https://github.com/IntersectMBO/cardano-cli/pull/572)
- [Use (slightly hacked) cardano-ledger JSON output for protocol parameters](https://github.com/IntersectMBO/cardano-cli/pull/569)

### cardano-api

- [Expose getAnyNewEpochState. Simplify rendering LedgerState errors](https://github.com/IntersectMBO/cardano-api/pull/439)
- [Bump CHaP, update hedgehog-extras 0.6.0.2](https://github.com/IntersectMBO/cardano-api/pull/438)
- [Fix bech32 prefixes of committee keys](https://github.com/IntersectMBO/cardano-api/pull/435)
- [Update hedgehog-extras to 0.6.0.1](https://github.com/IntersectMBO/cardano-api/pull/434)
- [Add return value to `checkLedgerStateCondition`](https://github.com/IntersectMBO/cardano-api/pull/433)
- [Release 8.37.1.0](https://github.com/IntersectMBO/cardano-api/pull/432)
- [Better `MonadError` handling to avoid nesting `ExceptT` in `modifyError`](https://github.com/IntersectMBO/cardano-api/pull/431)
- [Bump hedgehog-extras 0.6.0.0](https://github.com/IntersectMBO/cardano-api/pull/430)
- [Fix cardano-node deadlink](https://github.com/IntersectMBO/cardano-api/pull/429)

### cardano-testnet

- [Bump hedgehog-extras 0.6.0.1](https://github.com/IntersectMBO/cardano-node/pull/5647)
- [Update cardano-cli 8.19](https://github.com/IntersectMBO/cardano-node/pull/5644)
- [Disable ledger events governance test temporarily ](https://github.com/IntersectMBO/cardano-node/pull/5640)

### docs

### CI & project maintenance
