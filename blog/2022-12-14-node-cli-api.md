---
title: Node API & CLI Team Update
slug: 2022-12-14-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2022-12-14 - 2022-12-27

## High level summary

PRs merged in this sprint focused on clean up and resolving existing issues. The majority of the time during this sprint was spent on the In Progress PRs which have dependencies on consensus. This has been since rectified i.e cardano-node dependencies have been bumped. 

## Completed

### docs

- [Move style guide to wiki](https://github.com/input-output-hk/cardano-node/pull/4703)

### CI & project maintenance

- [Cache secp256k1](https://github.com/input-output-hk/cardano-node/pull/4734)
- [Use cabal-cache](https://github.com/input-output-hk/cardano-node/pull/4717)
- [build(deps): bump certifi from 2020.4.5.2 to 2022.12.7 in /doc/.sphinx](https://github.com/input-output-hk/cardano-node/pull/4699)
- [Update cabal.project](https://github.com/input-output-hk/cardano-node/pull/4724)

### Developer experience

- [Add aarch64-darwin to nix-shell](https://github.com/input-output-hk/cardano-node/pull/4125)

### cardano-cli
- [Improved error message for failed asset name decode](https://github.com/input-output-hk/cardano-node/pull/4626)
- [Optimise query leadership schedule command](https://github.com/input-output-hk/cardano-node/pull/4250)
- [Remove cardano-cli address build-script](https://github.com/input-output-hk/cardano-node/pull/4700)

### cardano-api
- [Move signing key reading to cardano-api](https://github.com/input-output-hk/cardano-node/pull/4698)

### cardano-node

### cardano-testnet
- [Only run chairman test on latest era](https://github.com/input-output-hk/cardano-node/pull/4712)
- [Add fix and test for `foldBlocks`](https://github.com/input-output-hk/cardano-node/pull/4679)

## In Progress

## CI & project mainteance
- [Copyright updates](https://github.com/input-output-hk/cardano-node/pull/4755)

### cardano-cli
- [BUGFIX]- [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
- [Infer protocol params in transaction build](https://github.com/input-output-hk/cardano-node/pull/4431)
- [Allow assembling transactions with no witnesses](https://github.com/input-output-hk/cardano-node/pull/4408)
- [Multiple pools support in query stake snapshot](https://github.com/input-output-hk/cardano-node/pull/4279)
- [Optimise query leadership schedule command](https://github.com/input-output-hk/cardano-node/pull/4250)
- [Optimise query stake snapshot command](https://github.com/input-output-hk/cardano-node/pull/4179)
- [Debug output for transaction submit](https://github.com/input-output-hk/cardano-node/pull/3819)
- [Handle pipes in cardano-cli](https://github.com/input-output-hk/cardano-node/pull/4625)
- [Fully remove the cli intermediate TxBody format](https://github.com/input-output-hk/cardano-node/pull/4713)
- [Render consistent plutus script failure output](https://github.com/input-output-hk/cardano-node/pull/4659)
- [Read network ID from environment](https://github.com/input-output-hk/cardano-node/pull/4666)
- [CLI option to append additional signatures to a transactions](https://github.com/input-output-hk/cardano-node/pull/4647)
- [Cardano ping](https://github.com/input-output-hk/cardano-node/pull/4664)

### cardano-api
- [Make TxBodyContent an instance of Monoid](https://github.com/input-output-hk/cardano-node/pull/4458)
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450)
- [Fully remove the cli intermediate TxBody format](https://github.com/input-output-hk/cardano-node/pull/4713)

### cardano-node
- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)

### cardano-testnet
- [Cleanup exports of cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/4636)
