---
title: Node API & CLI Team Update
slug: 2023-11-14-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-11-01 - 2023-11-14

## High level summary

CARDANO-NODE
- [Pre-release of Cardano Node 8.6.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.6.0-pre)

CARDANO-CLI
- Improve golden tests
- Clean-up of conway era commands

### cardano-cli
- [Replace usages of assertFileOccurences (6/6)](https://github.com/input-output-hk/cardano-cli/pull/451)
- [Replace usages of assertFileOccurences (5/6)](https://github.com/input-output-hk/cardano-cli/pull/448)
- [Replace usages of assertFileOccurences by usage of new functions ✨ (4/n)](https://github.com/input-output-hk/cardano-cli/pull/444)
- [put n shelley/byron key witnesses arguments in correct order](https://github.com/input-output-hk/cardano-cli/pull/443)
- [Replace usages of assertFileOccurences by comparisons with golden files (3/n)](https://github.com/input-output-hk/cardano-cli/pull/441)
- [Replace usages of assertFileOccurences by comparisons with golden files (2/n)](https://github.com/input-output-hk/cardano-cli/pull/436)
- [Update to `cardano-8.31.0.0`](https://github.com/input-output-hk/cardano-cli/pull/435)
- [Remove remaining uses of `IsCardanoEra`](https://github.com/input-output-hk/cardano-cli/pull/434)
- [Release 8.14.0.0](https://github.com/input-output-hk/cardano-cli/pull/432)
- [Upgrade cardano-api to 8.30](https://github.com/input-output-hk/cardano-cli/pull/430)
- [Command types for `node` commands](https://github.com/input-output-hk/cardano-cli/pull/428)
- [Split governance `MIRTransferConstructor`](https://github.com/input-output-hk/cardano-cli/pull/427)
- [Replace usages of assertFileOccurences by comparisons with golden files (1/n)](https://github.com/input-output-hk/cardano-cli/pull/426)
- [Command argument types for `drep` commands](https://github.com/input-output-hk/cardano-cli/pull/425)
- [Add golden test for `governance action create-no-confidence`](https://github.com/input-output-hk/cardano-cli/pull/421)
- [Command arguments types for stake-pool commands](https://github.com/input-output-hk/cardano-cli/pull/419)


### cardano-api
- [New version `cardano-api-8.31.0.0`](https://github.com/input-output-hk/cardano-api/pull/364)
- [Use ledger presentation of multi-asset values directly.  Lens to make this uniform over `ShelleyBasedEra`](https://github.com/input-output-hk/cardano-api/pull/360)
- [Protocol version change is not common to all versions anymore](https://github.com/input-output-hk/cardano-api/pull/358)
- [Delete `ByronAndAllegraEraOnwards`](https://github.com/input-output-hk/cardano-api/pull/355)
- [Replace `IsCardanoEra` and `IsShelleyBasedEra` contraints in GADT constructors with `Typeable`](https://github.com/input-output-hk/cardano-api/pull/354)
- [Modify foldBlocks to recurse on ledger events ](https://github.com/input-output-hk/cardano-api/pull/353)
- [Add generators for `EraBasedProtocolParametersUpdate`](https://github.com/input-output-hk/cardano-api/pull/352)
- [New version `cardano-api-8.30.0.0`](https://github.com/input-output-hk/cardano-api/pull/351)

### cardano-node
- [Pre-release of Cardano Node 8.6.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.6.0-pre)
- - [cardano-node: use ouroboros-network-protocols-0.5.2](https://github.com/input-output-hk/cardano-node/pull/5525)


### cardano-testnet

### docs

### CI & project maintenance
