---
title: Node API & CLI Team Update
slug: 2023-02-08-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-02-08 - 2023-02-21

## High level summary
More maintenance and resolving raised issues.

## Completed

### docs

### CI & project maintenance
- [Remove use of multiline literals](https://github.com/input-output-hk/cardano-node/pull/4889)
- [Markdown links CI check](https://github.com/input-output-hk/cardano-node/pull/4775)
- [Date ranges for copyright](https://github.com/input-output-hk/cardano-node/pull/4755)

### Developer experience

### cardano-cli
- [Re-add support for decoding GenesisExtendedKey text envelope](https://github.com/input-output-hk/cardano-node/pull/4894)
- [Disallow empty cost model for create update proposal](https://github.com/input-output-hk/cardano-node/pull/4885)
- [Refactor code using onLeft and onNothing](https://github.com/input-output-hk/cardano-node/pull/4815)

### cardano-api
- [Simplify SerialiseAsRawBytes type class](https://github.com/input-output-hk/cardano-node/pull/4876)

### cardano-node

### cardano-testnet

## In Progress

## CI & project mainteance

### cardano-cli
- [Fix bug in hash computation in cardano-cli genesis create-cardano](https://github.com/input-output-hk/cardano-node/pull/4761)
- [Cleanup exports of cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/4636)
- [BUGFIX] - [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
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
- [Remove simple script distinction](https://github.com/input-output-hk/cardano-node/pull/4763)
- [Export SubmitResult from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4753)
### cardano-node
- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)

### cardano-testnet
- [Use Haskell variables for passing values](https://github.com/input-output-hk/cardano-node/pull/4845)
