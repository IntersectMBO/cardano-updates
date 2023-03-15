---
title: Node API & CLI Team Update
slug: 2023-01-25-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-01-25 - 2023-02-07

## High level summary
General clean up (error message improvement) and focus on CI maintenance. Multiple pools now supported in the `cardano-cli query stake-snapshot` command. 

## Completed

### docs

### CI & project maintenance
- [Fix how changed files are selected in stylish-haskell CI check](https://github.com/input-output-hk/cardano-node/pull/4853)
- [Copyright updates](https://github.com/input-output-hk/cardano-node/pull/4755)
- [Remove hlint from nix required CI](https://github.com/input-output-hk/cardano-node/pull/4848)
- [Remove reconfigure-hlint.sh script](https://github.com/input-output-hk/cardano-node/pull/4838)
- [Fix hlint warnings](https://github.com/input-output-hk/cardano-node/pull/4837)
- [Implement ADR-2: Restructure modules for generators](https://github.com/input-output-hk/cardano-node/pull/4833)
- [Stylish Haskell in CI](https://github.com/input-output-hk/cardano-node/pull/4803)
- [Revert skip doc in ci](https://github.com/input-output-hk/cardano-node/pull/4802)
- [Skip CI on doc only changes](https://github.com/input-output-hk/cardano-node/pull/4800)
- [Skip CI if only changes are documentation](https://github.com/input-output-hk/cardano-node/pull/4792)
- [Build all of cardano-node in CI](https://github.com/input-output-hk/cardano-node/pull/4776)
- [Check cabal files in CI](https://github.com/input-output-hk/cardano-node/pull/4766)

### Developer experience

### cardano-cli
- [Straight line error handling](https://github.com/input-output-hk/cardano-node/pull/4785)
- [Multiple pools support in query stake snapshot](https://github.com/input-output-hk/cardano-node/pull/4279)

### cardano-api
- [New NodeToClientVersionOf typeclass](https://github.com/input-output-hk/cardano-node/pull/4787)
- [Remove NoImplicitPrelude from cardano-api](https://github.com/input-output-hk/cardano-node/pull/4832)
- [Add ReaderT of NodeToClientVersion to LocalStateQueryExpr](https://github.com/input-output-hk/cardano-node/pull/4809)
- [Use hoistMaybe](https://github.com/input-output-hk/cardano-node/pull/4808)
- [Better error message for query utxo without oops](https://github.com/input-output-hk/cardano-node/pull/4788)

### cardano-node

### cardano-testnet
- [New query stake-snapshot integration test](https://github.com/input-output-hk/cardano-node/pull/4805)
- [Make leadership-schedule test less flaky](https://github.com/input-output-hk/cardano-node/pull/4671)

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
