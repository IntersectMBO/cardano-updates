---
title: Node API & CLI Team Update
slug: 2023-07-04-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-06-21 - 2023-07-04

## High level summary

- Started integration of conway era into the cardano-api,
- Pre-release of cardano-cli 8.2.1 which enables creating goveranance "Update constitution" governance actionsas well as voting. Both only as SPO. DREP and CC will come in future releases.
- Cardano-cli is moving to a top-level era command structure (i.e. cardano-cli conway, cardano-cli babbage, etc to accomodate for different fucntionalities available in diferent eras. In particular between Babbage and Conway governance-related functionalities.
- Continue refactoring cardano-testnet
- CI and docs house keeping on the new cardnao-cli and cardano-api repositories


### cardano-cli

- [Update to `cardano-api-8.7.0.0`](https://github.com/input-output-hk/cardano-cli/pull/60)
- [Release 8.2.1](https://github.com/input-output-hk/cardano-cli/pull/44)
- [Use new function-based API instead of using query data types directly](https://github.com/input-output-hk/cardano-cli/pull/39)

### cardano-api

- [Release cardano-api 8.7](https://github.com/input-output-hk/cardano-api/pull/94)
- [New version `cardano-api-8.6.0.0`](https://github.com/input-output-hk/cardano-api/pull/92)
- [New version `cardano-api-8.2.0.0.1.0.0`](https://github.com/input-output-hk/cardano-api/pull/90)
- [Backport: Add era phantom type parameter to Certificate](https://github.com/input-output-hk/cardano-api/pull/88)
- [Parameterise `Certificate` type with phantom `era` type argument](https://github.com/input-output-hk/cardano-api/pull/86)
- [Voting procedure and proposal procedure updates](https://github.com/input-output-hk/cardano-api/pull/85)
- [Parameterise `Certificate` with `era`](https://github.com/input-output-hk/cardano-api/pull/84)
- [Parameterise `Certificate` type with phantom `era` type argument](https://github.com/input-output-hk/cardano-api/pull/83)
- [Add contributing guide](https://github.com/input-output-hk/cardano-api/pull/79)
- [Unified `ShelleyBasedEra` constraint summoning](https://github.com/input-output-hk/cardano-api/pull/77)
- [Update CHaP index](https://github.com/input-output-hk/cardano-api/pull/70)
- [CIP-1694 API - Part 1](https://github.com/input-output-hk/cardano-api/pull/41)


### cardano-node

- [cardano-node top level error handler](https://github.com/input-output-hk/cardano-node/pull/5356)
- [Turn on some traces by default](https://github.com/input-output-hk/cardano-node/pull/5353)

### cardano-testnet

- [Report payment address and UTxOs in testnets](https://github.com/input-output-hk/cardano-node/pull/5364)
- [New Conway `stake-snapshot` tests](https://github.com/input-output-hk/cardano-node/pull/5362)

### docs

- [Add contributing guide](https://github.com/input-output-hk/cardano-api/pull/79)
- [Release workflow description](https://github.com/input-output-hk/cardano-api/pull/33)
- [Turn on some traces by default](https://github.com/input-output-hk/cardano-node/pull/5353)



### CI & project maintenance

- [Add PR changelog check](https://github.com/input-output-hk/cardano-api/pull/75)
- [Fix stylish haskell in github action workflow](https://github.com/input-output-hk/cardano-api/pull/71)
- [Enable CI on PRs from forks](https://github.com/input-output-hk/cardano-api/pull/62)
- [Remove merge_group trigger from changelog check CI](https://github.com/input-output-hk/cardano-cli/pull/53)
- [Add PR changelog check. Add core-tech group to GHA description codeowners.](https://github.com/input-output-hk/cardano-cli/pull/46)
- [Fix stylish haskell in github action workflow](https://github.com/input-output-hk/cardano-cli/pull/41)
- [Enable CI in PRs from forks](https://github.com/input-output-hk/cardano-cli/pull/40)
- [Add contributing guide](https://github.com/input-output-hk/cardano-cli/pull/48)
