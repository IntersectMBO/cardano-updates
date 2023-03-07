---
title: Node API & CLI Team Update
slug: 2022-12-28-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2022-12-28 - 2023-01-10

## High level summary

## Completed

### docs

### CI & project maintenance
- [Fix hedgehog-extras sha hash](https://github.com/input-output-hk/cardano-node/pull/4762)
- [Update hegehog-extras bounds](https://github.com/input-output-hk/cardano-node/pull/4759)
- [GitHub token fix](https://github.com/input-output-hk/cardano-node/pull/4751)
- [Use setup-haskell action](https://github.com/input-output-hk/cardano-node/pull/4743)
- [Use Github Action to install libsecp256k1](https://github.com/input-output-hk/cardano-node/pull/4738)
- [Update index state and hedgehog-extras.](https://github.com/input-output-hk/cardano-node/pull/4714)
- [Cleaned cabal files](https://github.com/input-output-hk/cardano-node/pull/4710)
- [Add cache versioning](https://github.com/input-output-hk/cardano-node/pull/4737)
- [Delete obsolete scripts](https://github.com/input-output-hk/cardano-node/pull/4742)
- [Use SECURITY.md published in Cardano Engineering Handbook](https://github.com/input-output-hk/cardano-node/pull/4746)

### Developer experience

### cardano-cli
- [Infer protocol params in transaction build](https://github.com/input-output-hk/cardano-node/pull/4431)
- [Allow assembling transactions with no witnesses](https://github.com/input-output-hk/cardano-node/pull/4408)
- [Filter out duplicate collateral inputs in tx build cmds](https://github.com/input-output-hk/cardano-node/pull/4749)
- [Optimise query stake-snapshot command](https://github.com/input-output-hk/cardano-node/pull/4754)

### cardano-api

### cardano-node

### cardano-testnet

## In Progress

## CI & project mainteance
- [Copyright updates](https://github.com/input-output-hk/cardano-node/pull/4755)

### cardano-cli
- [Fix bug in hash computation in cardano-cli genesis create-cardano](https://github.com/input-output-hk/cardano-node/pull/4761)
- [Cleanup exports of cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/4636)
- [BUGFIX]- [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
- [Multiple pools support in query stake snapshot](https://github.com/input-output-hk/cardano-node/pull/4279)
- [Debug output for transaction submit](https://github.com/input-output-hk/cardano-node/pull/3819)
- [Handle pipes in cardano-cli](https://github.com/input-output-hk/cardano-node/pull/4625)
- [Fully remove the cli intermediate TxBody format](https://github.com/input-output-hk/cardano-node/pull/4713)
- [Render consistent plutus script failure output](https://github.com/input-output-hk/cardano-node/pull/4659)
- [Read network ID from environment](https://github.com/input-output-hk/cardano-node/pull/4666)
- [CLI option to append additional signatures to a transactions](https://github.com/input-output-hk/cardano-node/pull/4647)
- [Cardano ping](https://github.com/input-output-hk/cardano-node/pull/4664)
- [Better error message for query utxo on oops](https://github.com/input-output-hk/cardano-node/pull/4777)

### cardano-api
- [Make TxBodyContent an instance of Monoid](https://github.com/input-output-hk/cardano-node/pull/4458)
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450)
- [Fully remove the cli intermediate TxBody format](https://github.com/input-output-hk/cardano-node/pull/4713)
- [Remove simple script distinction](https://github.com/input-output-hk/cardano-node/pull/4763)
- [Export SubmitResult from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4753)
### cardano-node
- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)

### cardano-testnet
- [Use Haskell variables for passing values](https://github.com/input-output-hk/cardano-node/pull/4845)
