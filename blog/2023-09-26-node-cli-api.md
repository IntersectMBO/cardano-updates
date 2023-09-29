---
title: Node API & CLI Team Update
slug: 2023-09-26-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-09-13 - 2023-09-26

## High level summary
* [cardano-node 8.4.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.4.0-pre) release suitable for SanchoNet.
* CLI continues making progress integrating governance features. During this sprint we integrated the **info** and **new-committee** governance actions.
* The team continued moving to the ERA top-level commands structure. Removed `--conway-era` flag from the legacy commands making conway era commands only accessible via `cardano-cli conway`.
* `stake-pool` command is now under the ERA top level structure.
* API continues integration with governance features, it is worth to higlight that now _ProposeNewCommitee_ uses the right key type (cc-cold)

### cardano-cli

- [Disambiguate 2-n flags in governance new-committee action](https://github.com/input-output-hk/cardano-cli/pull/302)
- [New version `cardano-cli-8.10.0.0`](https://github.com/input-output-hk/cardano-cli/pull/298)
- [Upgrade to `cardano-api-8.20.2`](https://github.com/input-output-hk/cardano-cli/pull/295)
- [cardano-cli: add governance create-info command](https://github.com/input-output-hk/cardano-cli/pull/292)
- [Release 8.9.0.0](https://github.com/input-output-hk/cardano-cli/pull/287)
- [Export `Cardano.CLI.Legacy.Options.pLegacyCardanoEra` for cardano-testnet](https://github.com/input-output-hk/cardano-cli/pull/286)
- [Rename `SomeWitness` to `SomeSigningWitness`.  Rename constructors to avoid name conflicts.](https://github.com/input-output-hk/cardano-cli/pull/284)
- [Update cardano-api to 8.20.1.0](https://github.com/input-output-hk/cardano-cli/pull/283)
- [Remove unused governance-related code](https://github.com/input-output-hk/cardano-cli/pull/282)
- [Fix typo in stake-pool help text and clarify drep queries arguments](https://github.com/input-output-hk/cardano-cli/pull/281)
- [Remove redundant conversions in JSON friendly instances ](https://github.com/input-output-hk/cardano-cli/pull/280)
- [Regularise era based command structure](https://github.com/input-output-hk/cardano-cli/pull/279)
- [Simplify era handling](https://github.com/input-output-hk/cardano-cli/pull/277)
- [Remove `--conway-era` flag](https://github.com/input-output-hk/cardano-cli/pull/276)
- [Era-based `stake-pool` command](https://github.com/input-output-hk/cardano-cli/pull/275)
- [Fix git revision in `version` command](https://github.com/input-output-hk/cardano-cli/pull/274)
- [cardano-cli-8.8.0.0](https://github.com/input-output-hk/cardano-cli/pull/273)

### cardano-api

- [Organise eon re-exports. Export `MaryEraOnwards`](https://github.com/input-output-hk/cardano-api/pull/265)
- [cardano-api-internal: ProposeNewCommittee: StakeKey -> CommitteeColdKey](https://github.com/input-output-hk/cardano-api/pull/264)
- [New version `cardano-api-8.21.0.0`](https://github.com/input-output-hk/cardano-api/pull/262)
- [Delete unused eon constraints](https://github.com/input-output-hk/cardano-api/pull/256)
- [Export ByronEraOnly](https://github.com/input-output-hk/cardano-api/pull/255)
- [Replace only `AdaSupportedInEra` and `MultiAssetSupportedInEra` with eons](https://github.com/input-output-hk/cardano-api/pull/254)
- [New version `cardano-api-8.20.2.0`](https://github.com/input-output-hk/cardano-api/pull/250)
- [Add JSON instance for Hash GenesisKey ](https://github.com/input-output-hk/cardano-api/pull/249)
- [Support more ledger constraints](https://github.com/input-output-hk/cardano-api/pull/248)
- [Rename `FeatureInEra` to `Eon`](https://github.com/input-output-hk/cardano-api/pull/247)
- [Release 8.20.1.0](https://github.com/input-output-hk/cardano-api/pull/246)
- [Fix DRep Stake and DRep Stake queries for empty lists](https://github.com/input-output-hk/cardano-api/pull/245)
- [Delete `TxFeesExplicitInEra` and `TxFeesImplicitInEra`](https://github.com/input-output-hk/cardano-api/pull/244)
- [Fix typos in some deserialization error messages](https://github.com/input-output-hk/cardano-api/pull/243)
- [Fix querying for dreps in `transaction build` in eras before conway](https://github.com/input-output-hk/cardano-api/pull/240)

### cardano-node

- [Trace Configuration Trace Message Enhancement](https://github.com/input-output-hk/cardano-node/pull/5480)
- [Bump versions for cardano-node-8.4.0-pre](https://github.com/input-output-hk/cardano-node/pull/5474)
- [Updated dependencies for cardano-node-8.4.0-pre](https://github.com/input-output-hk/cardano-node/pull/5467)
- [cardano-node: reduce orphan instances](https://github.com/input-output-hk/cardano-node/pull/5466)

### cardano-testnet

- [Bump versions for cardano-node-8.4.0-pre](https://github.com/input-output-hk/cardano-node/pull/5474)
- [Update to cardano-cli 8.9.0.0](https://github.com/input-output-hk/cardano-node/pull/5471)
- [Updated dependencies for cardano-node-8.4.0-pre](https://github.com/input-output-hk/cardano-node/pull/5467)

### docs

### CI & project maintenance
