---
title: Node API & CLI Team Update
slug: 2023-10-10-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-09-27 - 2023-10-10

## High level summary

CARDANO-NODE
- [Pre-release of cardano-node 8.5.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.5.0-pre)

CARDANO-CLI
- Depracated governance query commands and moved all governance related queries to `cardano-cli <era> query`
- Drep registration certificates now allow to include an anchor
- Integrated Drep retirement ceriticates
- clean up of Drep registration certificates.

CARDANO-API
- Add support for committee hot key witnesses
- Require conway onwards for voting
- Conway drep registration: expose ledger anchor parameter
- Add certs to txbody of Conway transactions

### cardano-cli

- [Move `governance query` commands to `query` command group](https://github.com/input-output-hk/cardano-cli/pull/347)
- [Rename create-new-committee into update-committee](https://github.com/input-output-hk/cardano-cli/pull/344)
- [New version cardano-cli-8.12.0.0](https://github.com/input-output-hk/cardano-cli/pull/341)
- [Add support for committee hot key witnesses](https://github.com/input-output-hk/cardano-cli/pull/338)
- [conway governance vote create: make it possible to use cc hot keys](https://github.com/input-output-hk/cardano-cli/pull/337)
- [New version `cardano-cli-8.11.0.0`](https://github.com/input-output-hk/cardano-cli/pull/331)
- [Drep certification registration: add parameters for anchor](https://github.com/input-output-hk/cardano-cli/pull/330)
- [Upgrade to `cardano-api-8.25.0.1`](https://github.com/input-output-hk/cardano-cli/pull/329)
- [Move files that are not golden files into `input` directory](https://github.com/input-output-hk/cardano-cli/pull/327)
- [Update to cardano-api-8.24](https://github.com/input-output-hk/cardano-cli/pull/324)
- [Fix #311 - Add Cold Committee Key text envelope](https://github.com/input-output-hk/cardano-cli/pull/323)
- [create-poll, answer-poll, verify-poll: move to 'babbage governance' block](https://github.com/input-output-hk/cardano-cli/pull/322)
- [Update to `cardano-api-8.23.1.0`](https://github.com/input-output-hk/cardano-cli/pull/320)
- [Make `transaction view` emit JSON](https://github.com/input-output-hk/cardano-cli/pull/319)
- [Tidy up query command structure](https://github.com/input-output-hk/cardano-cli/pull/318)
- [Use `caseShelleyToBabbageOrConwayEraOnwards` from `cardano-api`](https://github.com/input-output-hk/cardano-cli/pull/317)
- [Add DRep Retirement Certificate command](https://github.com/input-output-hk/cardano-cli/pull/316)
- [Update to cardano api 8.22.0.0](https://github.com/input-output-hk/cardano-cli/pull/310)
- [drep registration-certificate: remove mix with SPO registration](https://github.com/input-output-hk/cardano-cli/pull/309)

### cardano-api

- [Delete `EraCast` instance for `Certificate`](https://github.com/input-output-hk/cardano-api/pull/307)
- [Add certs to txbody of Conway transactions](https://github.com/input-output-hk/cardano-api/pull/306)
- [Move DRep reg certificate anchor types from cardano-cli to cardano-api](https://github.com/input-output-hk/cardano-api/pull/305)
- [Add BabbageEraOnly](https://github.com/input-output-hk/cardano-api/pull/304)
- [New version cardano-api-8.25.2.0](https://github.com/input-output-hk/cardano-api/pull/303)
- [Add support for committee hot key witnesses](https://github.com/input-output-hk/cardano-api/pull/300)
- [Reduce constraint usage with eons](https://github.com/input-output-hk/cardano-api/pull/299)
- [Delete `withShelleyBasedEraConstraintsForLedger`](https://github.com/input-output-hk/cardano-api/pull/297)
- [Simplify `DebugLedgerState` with eons](https://github.com/input-output-hk/cardano-api/pull/296)
- [New version cardano-api-8.25.0.0](https://github.com/input-output-hk/cardano-api/pull/294)
- [Require conway onwards for voting](https://github.com/input-output-hk/cardano-api/pull/293)
- [Add witness committee cold key](https://github.com/input-output-hk/cardano-api/pull/292)
- [Fix CHaP failure due to haddock issue](https://github.com/input-output-hk/cardano-api/pull/291)
- [Amend cardano-api/pull/284 to use ReexposeLedger](https://github.com/input-output-hk/cardano-api/pull/290)
- [Rename `AnyEraInEon` to `EraInEon`](https://github.com/input-output-hk/cardano-api/pull/289)
- [Release 8.24.0.0](https://github.com/input-output-hk/cardano-api/pull/288)
- [Parameterize `AnyEraInEon`.  Add `AnyEon`](https://github.com/input-output-hk/cardano-api/pull/287)
- [New version `cardano-api-8.23.0.0`](https://github.com/input-output-hk/cardano-api/pull/286)
- [conway drep registration: expose ledger anchor parameter](https://github.com/input-output-hk/cardano-api/pull/284)
- [New `caseAlonzoOnlyOrBabbageEraOnwards` and `alonzoEraOnlyToAlonzoEraOnwards` functions](https://github.com/input-output-hk/cardano-api/pull/282)
- [Rename eon functions](https://github.com/input-output-hk/cardano-api/pull/281)
- [New `AnyEraInEon`](https://github.com/input-output-hk/cardano-api/pull/280)
- [Replace `ValidityLowerBoundSupportedInEra`](https://github.com/input-output-hk/cardano-api/pull/279)
- [Replace `TxExtraKeyWitnessesSupportedInEra`](https://github.com/input-output-hk/cardano-api/pull/278)
- [Explicit pattern match on all ledger certificates constructors. Remove redundant module](https://github.com/input-output-hk/cardano-api/pull/277)
- [Release 8.22.0.0](https://github.com/input-output-hk/cardano-api/pull/276)
- [Replace `TxTotalAndReturnCollateralSupportedInEra`](https://github.com/input-output-hk/cardano-api/pull/275)

### cardano-node

- [Integrate upstream libraries for 8.5](https://github.com/input-output-hk/cardano-node/pull/5490)

### cardano-testnet

- [bump cardano-api to 8.25.2](https://github.com/input-output-hk/cardano-node/pull/5497)
- [Remove unused code in cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/5491)
- [Integrate upstream libraries for 8.5](https://github.com/input-output-hk/cardano-node/pull/5490)

### docs

### CI & project maintenance
