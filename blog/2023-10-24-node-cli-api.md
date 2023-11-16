---
title: Node API & CLI Team Update
slug: 2023-10-24-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-10-11 - 2023-10-24

## High level summary

CARDANO-CLI
- Disambiguate cardano-cli stake credential related flags on treasury withdrawal governance actions making it easy to identify which is used for the deposit refund and which for the destination of the funds from the treasury if the action is ratified.
- `stake-address-info` now shows deposits balance.
- Added `conway governance action view` to allow to inspect governance action files before submitting them on a transaction.
- `build-raw` support for `--vote-file` and `--proposal-file`


CARDANO-API
- Support DRep extended keys
- Support Plutus V1 in Conway

### cardano-cli
- [Upgrade to `cardano-api-8.28.0.0`](https://github.com/input-output-hk/cardano-cli/pull/394)
- [Simplify `toTxOutInAnyEra`](https://github.com/input-output-hk/cardano-cli/pull/393)
- [Upgrade to `cardano-api-8.27.0.0`](https://github.com/input-output-hk/cardano-cli/pull/390)
- [Upgrade to `cardano-api-8.26.0.0`](https://github.com/input-output-hk/cardano-cli/pull/389)
- [Check that poll answer index is not negative, to avoid a Prelude.!! error](https://github.com/input-output-hk/cardano-cli/pull/380)
- [drep registration-certificate: add a golden test](https://github.com/input-output-hk/cardano-cli/pull/379)
- [Disambiguate treasury withdrawal flags](https://github.com/input-output-hk/cardano-cli/pull/378)
- [Make `stake-address-info` query also return deposit](https://github.com/input-output-hk/cardano-cli/pull/375)
- [Add `conway governance action view`](https://github.com/input-output-hk/cardano-cli/pull/374)
- [Ch/clearer anchor flags](https://github.com/input-output-hk/cardano-cli/pull/372)
- [Command argument types for `transaction` commands](https://github.com/input-output-hk/cardano-cli/pull/371)
- [Remove eras' constitution-hash](https://github.com/input-output-hk/cardano-cli/pull/370)
- [Shelley to Alonzo: add create-genesis-key-delegation-certificate to governance](https://github.com/input-output-hk/cardano-cli/pull/368)
- [Enable reading of Conway `TxWitness`es](https://github.com/input-output-hk/cardano-cli/pull/367)
- [Make `governance action create-protocol-parameters-update` Conway onwards only](https://github.com/input-output-hk/cardano-cli/pull/366)
- [`transaction build-raw` support for `--vote-file` and `--proposal-file`](https://github.com/input-output-hk/cardano-cli/pull/365)
- [Command argument types for governance key commands](https://github.com/input-output-hk/cardano-cli/pull/364)
- [Add test of voting using a cc hot key](https://github.com/input-output-hk/cardano-cli/pull/363)

### cardano-api
- [Add Show instance for FoldBlocksError](https://github.com/input-output-hk/cardano-api/pull/338)
- [Upgrade typed-protocols to 1.1.1](https://github.com/input-output-hk/cardano-api/pull/336)
- [Improved validity range handling](https://github.com/input-output-hk/cardano-api/pull/332)
- [New version `cardano-api-8.28.0.0`](https://github.com/input-output-hk/cardano-api/pull/331)
- [Delete `AlonzoEraOnly`](https://github.com/input-output-hk/cardano-api/pull/330)
- [New `shelleyToAlonzoEraToShelleyToBabbageEra` function](https://github.com/input-output-hk/cardano-api/pull/329)
- [DRep extended key: add CastVerificationKeyRole](https://github.com/input-output-hk/cardano-api/pull/327)
- [New version `cardadno-api-8.27.0.0`](https://github.com/input-output-hk/cardano-api/pull/326)
- [Delete unnecessary calls to `shelleyBasedEraConstraints`](https://github.com/input-output-hk/cardano-api/pull/325)
- [New version `cardadno-api-8.27.0.0`](https://github.com/input-output-hk/cardano-api/pull/324)
- [Support Plutus V1 in Conway](https://github.com/input-output-hk/cardano-api/pull/323)
- [Parameterize GovernanceAction on era ](https://github.com/input-output-hk/cardano-api/pull/322)
- [Support DRep extended keys](https://github.com/input-output-hk/cardano-api/pull/320)
- [New version `cardano-api-8.26.0.0`](https://github.com/input-output-hk/cardano-api/pull/317)
- [Haddock document the case functions, so that their behavior is easier to understand when calling them](https://github.com/input-output-hk/cardano-api/pull/314)
- [Avoid `IsShelleyBasedEra` and `IsCardanoEra` where possible](https://github.com/input-output-hk/cardano-api/pull/313)
- [New `MaryEraOnly` eon. Disjoint functions](https://github.com/input-output-hk/cardano-api/pull/312)

### cardano-node

### cardano-testnet
- [Factor out file creation for SPO](https://github.com/input-output-hk/cardano-node/pull/5515)

### docs
- [Tracer documentation generation enhacements ](https://github.com/input-output-hk/cardano-node/pull/5504)

### CI & project maintenance
