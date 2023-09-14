---
title: Node API & CLI Team Update
slug: 2023-06-07-node-cli-api
tags: [cli-api]
authors: carlos
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-06-07 - 2023-06-20

## High level summary

* Completed cardano-cli migration to input-output-hk/cardano-cli
* cardano-cli ping now uses cardano-ping-0.2.0.5
* New queries on API:
  * `queryCurrentEpochState`
  * `queryDebugLedgerState`
  * `queryGenesisParameters`
  * `queryPoolDistribution`
  * `queryPoolState`
  * `queryProtocolParameters`
  * `queryProtocolParametersUpdate`
  * `queryProtocolState`
  * `queryStakeAddresses`
  * `queryStakeDistribution`
  * `queryStakePoolParameters`
  * `queryStakeSnapshot`
* Deprecate:
  * `queryPparams`
* Export query API as functions
  * `genFeatureValueInEra`
  * `featureInShelleyBasedEra`
  * `isFeatureValue`
  * `valueOrDefault`
  * `asFeatureValue`
  * `asFeatureValueInShelleyBasedEra`
  * `queryEpoch`
  * `requireShelleyBasedEra`
* Restructure cardano-testnet (WIP)
____

### cardano-cli

- [update network dependency and versions](https://github.com/input-output-hk/cardano-node/pull/5328)
- [Updated cardano-cli to use `cardano-ping-0.2.0.5`.](https://github.com/input-output-hk/cardano-node/pull/5326)
- [Use `cardano-cli` from CHaP](https://github.com/input-output-hk/cardano-node/pull/5316)
- [Add `--conway-era` flag](https://github.com/input-output-hk/cardano-node/pull/5315)
- [Updated cardano-cli ping command](https://github.com/input-output-hk/cardano-node/pull/5313)
- [Add `--conway-era` flag](https://github.com/input-output-hk/cardano-node/pull/5311)

- [Use cardano-ping-0.2.0.5](https://github.com/input-output-hk/cardano-cli/pull/30)
- [Deprecate `--protocol-params-file` option of the `transaction build` command more thoroughly](https://github.com/input-output-hk/cardano-cli/pull/28)
- [New `Cardano.Api.Query.Expr` module](https://github.com/input-output-hk/cardano-cli/pull/25)
- [Use simplified `queryStateForBalancedTx`](https://github.com/input-output-hk/cardano-cli/pull/24)
- [Add `--conway-era` flag](https://github.com/input-output-hk/cardano-cli/pull/20)


### cardano-api

- [New version `cardano-api-8.5.2.0`](https://github.com/input-output-hk/cardano-api/pull/59)
- [New `requireShelleyBasedEra` function](https://github.com/input-output-hk/cardano-api/pull/58)
- [New version cardano-api-8.5.1.0](https://github.com/input-output-hk/cardano-api/pull/57)
- [New `queryEpoch` function](https://github.com/input-output-hk/cardano-api/pull/56)
- [New version 8.5.0.0](https://github.com/input-output-hk/cardano-api/pull/55)
- [Error on `hlint` warnings in CI](https://github.com/input-output-hk/cardano-api/pull/54)
- [Additional query expression functions](https://github.com/input-output-hk/cardano-api/pull/53)
- [New version `cardano-api-8.4.0.0`](https://github.com/input-output-hk/cardano-api/pull/52)
- [New version `cardano-api-8.3.0.0`](https://github.com/input-output-hk/cardano-api/pull/49)
- [New `Cardano.Api.Query.Expr` module](https://github.com/input-output-hk/cardano-api/pull/48)
- [Simplify `queryStateForBalancedTx`](https://github.com/input-output-hk/cardano-api/pull/47)
- [Revert to use `testProperty` now that it isn't deprecated anymore](https://github.com/input-output-hk/cardano-api/pull/46)

### cardano-node

- [cardano-node 8.1.1 release](https://github.com/input-output-hk/cardano-node/releases/tag/8.1.1)
- [update network dependency and versions](https://github.com/input-output-hk/cardano-node/pull/5328)

### cardano-testnet

- [Add ability to retry tests with DISABLE_RETRIES=1](https://github.com/input-output-hk/cardano-node/pull/5340)
- [Move golden files to proper location](https://github.com/input-output-hk/cardano-node/pull/5339)
- [Conway testnet](https://github.com/input-output-hk/cardano-node/pull/5336)
- [Don't retry testnet when failed](https://github.com/input-output-hk/cardano-node/pull/5335)
- [Remove YAML filepath record from data Conf](https://github.com/input-output-hk/cardano-node/pull/5321)
- [Add `--conway-era` flag](https://github.com/input-output-hk/cardano-node/pull/5315)
- [Add `--conway-era` flag](https://github.com/input-output-hk/cardano-node/pull/5311)
- [Remove duplicate --testnet-magic flag](https://github.com/input-output-hk/cardano-node/pull/5309)
- [Restructure cardano testnet ](https://github.com/input-output-hk/cardano-node/pull/5307)

### docs

### CI & project maintenance

- [Fix Windows CI issues](https://github.com/input-output-hk/cardano-cli/pull/18)
