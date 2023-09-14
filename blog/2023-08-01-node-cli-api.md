---
title: Node API & CLI Team Update
slug: 2023-08-01-node-cli-api
tags: [cli-api]
authors: carlos
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-07-19 - 2023-08-01

## High level summary

- Release of Node 8.2.0
    - Updates to the ledger packages extend progress on the Conway ledger era to support new governance features via CIP-1694.
    - This release is phase 1 of the SanchoNet roll out
    - Allows SPOs to vote on changes to the on-chain constitution.
    - Ability to start the node in block production mode with no secrets loaded using the --non-producing-node flag.
    - Updates to the networking packages prepare the road for peer sharing.
- cardano-cli and cardano-api continue to integrate Conway era features
- Continue refactoring of cardano-testnet

### cardano-cli

- [Use AnyShelleyToBabbageEra from cardano-api instead](https://github.com/input-output-hk/cardano-cli/pull/116)
- [Update to `cardano-api-8.10.2.0`](https://github.com/input-output-hk/cardano-cli/pull/115)
- [Add rendering for `ConwayCertificate` in `Cardano.Cli.Json.Friendly`](https://github.com/input-output-hk/cardano-cli/pull/113)
- [Update to `cardano-api-8.10.1.0`](https://github.com/input-output-hk/cardano-cli/pull/111)
- [Add DRep registration certificate command](https://github.com/input-output-hk/cardano-cli/pull/110)
- [Add options to delegate voting stake ](https://github.com/input-output-hk/cardano-cli/pull/109)
- [Share MIR certificates code between era-based and legacy CLI parsers](https://github.com/input-output-hk/cardano-cli/pull/107)
- [Release cardano-cli 8.4.0.0](https://github.com/input-output-hk/cardano-cli/pull/106)
- [Update to`cardano-api-8.10.0.0`](https://github.com/input-output-hk/cardano-cli/pull/103)
- [Change directory structure from Options/.. to EraBased/..](https://github.com/input-output-hk/cardano-cli/pull/100)
- [Era-sensitive command structure](https://github.com/input-output-hk/cardano-cli/pull/98)
- [#86 Set default era to Babbage in stake-address, stake-pool and governance commmands](https://github.com/input-output-hk/cardano-cli/pull/90)


### cardano-api


- [Deprecate `shelleyCertificateConstraints` and `conwayCertificateConstraints`](https://github.com/input-output-hk/cardano-api/pull/155)
- [Deprecate `TxVotesSupportedInEra`](https://github.com/input-output-hk/cardano-api/pull/154)
- [Add SerialiseAsBech32 instances for committee cold and hot keys](https://github.com/input-output-hk/cardano-api/pull/152)
- [Deprecate some constraint functions](https://github.com/input-output-hk/cardano-api/pull/151)
- [Deprecate `TxGovernanceActionSupportedInEra`](https://github.com/input-output-hk/cardano-api/pull/150)
- [More `shelleyBasedEraConstraint` constraints](https://github.com/input-output-hk/cardano-api/pull/149)
- [New version `cardano-api-8.10.2.0`](https://github.com/input-output-hk/cardano-api/pull/148)
- [Expose shelleyCertificateConstraints and conwayCertificateConstraints](https://github.com/input-output-hk/cardano-api/pull/147)
- [Remove unnecessary function `getShelleyEraTxBodyConstraint`](https://github.com/input-output-hk/cardano-api/pull/146)
- [Provide additional constraints in `shelleyBasedEraConstraints`](https://github.com/input-output-hk/cardano-api/pull/143)
- [Update changelogs for `cardano-api-8.10.1.0`](https://github.com/input-output-hk/cardano-api/pull/142)
- [handleFileForWritingWithOwnerPermissionImpl: Fix permisions](https://github.com/input-output-hk/cardano-api/pull/141)
- [Update DRepKey with correct `Voting` keyrole](https://github.com/input-output-hk/cardano-api/pull/138)
- [Support more constraints for Conway witnesses](https://github.com/input-output-hk/cardano-api/pull/137)
- [New version `cardano-api-8.10.0.0`](https://github.com/input-output-hk/cardano-api/pull/135)
- [Expose toShelleyPoolParams for conway integration](https://github.com/input-output-hk/cardano-api/pull/134)
- [`FeatureInEra` instance for `ShelleyBasedEra`](https://github.com/input-output-hk/cardano-api/pull/131)
- [Expose more functionality from cardano-api](https://github.com/input-output-hk/cardano-api/pull/130)
- [Improved feature ergonomics](https://github.com/input-output-hk/cardano-api/pull/128)
- [Rename `AtMostBabbageEra` to `ShelleyToBabbageEra`](https://github.com/input-output-hk/cardano-api/pull/127)


### cardano-node

- [Fix stubbed LogFormatting instances](https://github.com/input-output-hk/cardano-node/pull/5412)
- [8.2.0 version bumps](https://github.com/input-output-hk/cardano-node/pull/5411)
- [Bump network packages version](https://github.com/input-output-hk/cardano-node/pull/5409)
- [Fix missing `ToObject` tracing instances.](https://github.com/input-output-hk/cardano-node/pull/5404)
- [input-output-hk/cardano-cli#85 Fix node crashing in babbage](https://github.com/input-output-hk/cardano-node/pull/5401)


### cardano-testnet

- [8.2.0 version bumps](https://github.com/input-output-hk/cardano-node/pull/5411)
- [Bump network packages version](https://github.com/input-output-hk/cardano-node/pull/5409)
- [Fix missing `ToObject` tracing instances.](https://github.com/input-output-hk/cardano-node/pull/5404)
- [Fix plutus script costing in cardano-testnet](https://github.com/input-output-hk/cardano-node/pull/5400)

### docs

- [Bump network packages version](https://github.com/input-output-hk/cardano-node/pull/5409)
    - [WarmValency](https://github.com/input-output-hk/cardano-node/blob/05c0392b4722d7fe2f82db1854b28de4f28a917b/doc/getting-started/understanding-config-files.md?plain=1#L84C1-L97C42)

### CI & project maintenance
