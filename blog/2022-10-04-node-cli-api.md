---
title: Node API & CLI Team Update
slug: 2022-10-04-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

## Node-Api-Cli Update
## 2022-10-04 - 2022-10-18

### Executive Summary
The majority of the team's time was spent between getting `1.34.4` ready, addressing various feature requests/issues/bugs that have arisen and refactoring components in the api and cli. The current refactoring is aimed at the long term goal of empowering users to be able to easily build applications similar to `cardano-cli`.

### Completed

- [GHC 9.2.4 preparations](https://github.com/input-output-hk/cardano-node/pull/4504)

#### cardano-cli

- [Serenity] - [Separate IO from txBuild and txBuildRaw functions](https://github.com/input-output-hk/cardano-node/pull/4491)

#### cardano-api

- [BUGFIX] - [TxWitness text envelope format does not roundtrip in Shelley era](https://github.com/input-output-hk/cardano-node/pull/4501)

#### cardano-node

- [Fix MacOS GHA CI](https://github.com/input-output-hk/cardano-node/pull/4526)

### In Progress

- [Release 1.34.4](https://github.com/input-output-hk/cardano-node/pull/4508)

#### cardano-cli

- [BUGFIX] - [Fix query era mismatch bug in transaction build command](https://github.com/input-output-hk/cardano-node/pull/4538)
- [Serenity] - [Condense Read and Validation modules in cardano-cli](https://github.com/input-output-hk/cardano-node/pull/4516)
- [BUGFIX]- [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
- [Infer protocol params in transaction build](https://github.com/input-output-hk/cardano-node/pull/4431)
- [Allow assembling transactions with no witnesses](https://github.com/input-output-hk/cardano-node/pull/4408)
- [Add tx-mempool command to CLI](https://github.com/input-output-hk/cardano-node/pull/4276)

### cardano-api

- [Return Lovelace for calculateMinimumUTxO](https://github.com/input-output-hk/cardano-node/pull/4482)
- [Make TxBodyContent an instance of Monoid](https://github.com/input-output-hk/cardano-node/pull/4458)
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450)

### cardano-node

- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)
