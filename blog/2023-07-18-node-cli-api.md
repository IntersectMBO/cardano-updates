---
title: Node API & CLI Team Update
slug: 2023-07-18-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-07-05 - 2023-07-18

## High level summary

- Integrate Conway certificates in cardano-api
- Prepare cardano-cli and cardano-api for cardano-node 8.1.2
- Tagged cardano-cli 8.3.0.0
    - Query for the hash of the constitution (Conway)
    - Ability to create votes and governance actions
- Tagged cardano-cli 8.3.1.0
    - Make it build with ghc-9.6
- Upgrade to optparse-applicative-fork-0.18.1.0 for parsing command line options


### cardano-cli

- [Upgrade to `optparse-applicative-fork-0.18.1.0`](https://github.com/input-output-hk/cardano-cli/pull/74)
- [Integrate cardano-api changes for fixed Show and Eq instances for Proposal type](https://github.com/input-output-hk/cardano-cli/pull/72)
- [New version `cardano-cli-8.3.1.0`](https://github.com/input-output-hk/cardano-cli/pull/68)
- [Add alonzo era to `Parser AnyShelleyBasedEra`](https://github.com/input-output-hk/cardano-cli/pull/67)
- [Use `sbe` variable name for the type is `ShelleyBasedEra`](https://github.com/input-output-hk/cardano-cli/pull/66)
- [New version `cardano-cli-8.3.0.0`](https://github.com/input-output-hk/cardano-cli/pull/65)

### cardano-api

- [Fix ghc version CPP](https://github.com/input-output-hk/cardano-api/pull/123)
- [Add a HasTypeProxy constraint to getVerificationKey](https://github.com/input-output-hk/cardano-api/pull/122)
- [Incorporate remaining ledger certificates](https://github.com/input-output-hk/cardano-api/pull/119)
- [Release cardano-api 8.8.1.0, cardano-api-gen 8.1.1.0](https://github.com/input-output-hk/cardano-api/pull/117)
- [Fix Eq, Show for Proposal type](https://github.com/input-output-hk/cardano-api/pull/115)
- [Wire up remaining governance actions](https://github.com/input-output-hk/cardano-api/pull/112)
- [Export `withShelleyBasedEraConstraintsForLedger`](https://github.com/input-output-hk/cardano-api/pull/108)
- [Remove unnecessary constraint](https://github.com/input-output-hk/cardano-api/pull/106)
- [Make it build with ghc-9.6](https://github.com/input-output-hk/cardano-api/pull/104)
- [New `shelleyBasedEraConstraints` function](https://github.com/input-output-hk/cardano-api/pull/103)
- [New version `cardano-api-8.8.0.0`](https://github.com/input-output-hk/cardano-api/pull/102)
- [Add CastVerificationKeyRole StakePoolKey StakeKey instance](https://github.com/input-output-hk/cardano-api/pull/101)
- [Update ledger and consensus](https://github.com/input-output-hk/cardano-api/pull/99)
- [Rename `era` to `sbe` when type is `ShelleyBasedEra`](https://github.com/input-output-hk/cardano-api/pull/98)

### cardano-node

### cardano-testnet

- [Fix Shutdown test for new exit codes](https://github.com/input-output-hk/cardano-node/pull/5391)

### docs

- [Fix markdown links](https://github.com/input-output-hk/cardano-node/pull/5387)

### CI & project maintenance

- [Apply `stylish-haskell` to project](https://github.com/input-output-hk/cardano-cli/pull/69)
