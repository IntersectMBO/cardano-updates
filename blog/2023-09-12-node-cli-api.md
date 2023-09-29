---
title: Node API & CLI Team Update
slug: 2023-09-12-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-08-30 - 2023-09-12

## High level summary

Release of [Cardano-node 8.3.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.3.0-pre) for SanchoNet. Adds DReps to the Conway governance rules. Allows registration of DReps, delegation to DReps and voting on constitution action with DReps and SPOs.
This release completes [phase 2 of SanchoNet feature roll out plan](https://sancho.network/get-started#sanchonet-feature-rollout)

CLI continues on its migration to a era-based top-level commands. This sprint we moved `text-view`, `key`, `query`, `genesis`, `node`, `stake-address`, `transaction` and `address` into this new command structure. This is the initial migration, there is still some clean-up to do on future sprints.

We are moving the `drep delegation-certificate` to the stake-address command so delegating to a drep is done via  `stake-addres vote-delegation-certificate`. Along the same lines, we are renaming
`stake-address delegation-certificate` (delagating to a stake pool) to `stake-address stake-delegation-certificate` to distinguish between stake delegation to a pool and votes delegation to a drep. On top
of that, there is a new type of delegation certificate to delegate (stake) to a stake pool and (votes) to a drep simultaneosuly `stake-address stake-and-vote-delegation-certificate`. Note that change is not included on  8.3 but will come on 8.4.
Removing `--conway-era` flag from all the `transaction` sub-commands.

Update description fields in delegation certificates from `Stake Address Delegation Certificate` to respectively (Conway onwards):
  - `Stake Delegation Certificate`
  - `Vote Delegation Certificate`
  - `Stake and Vote Delegation Certificate`

### cardano-cli

- [New `stake-address vote-delegation-certificate` command](https://github.com/input-output-hk/cardano-cli/pull/261)
- [New `stake-address stake-and-vote-delegation-certificate` command](https://github.com/input-output-hk/cardano-cli/pull/257)
- [Change `TreasuryWithdrawalCmd` to a record](https://github.com/input-output-hk/cardano-cli/pull/260)
- [Simplify `stake-address stake-delegation-certificate` command across eras](https://github.com/input-output-hk/cardano-cli/pull/256)
- [Remove `EraBased` prefix and add `Cmd` suffix](https://github.com/input-output-hk/cardano-cli/pull/254)
- [#221 Update description fields on delegation certificates](https://github.com/input-output-hk/cardano-cli/pull/250)
- [Update error message for eras mismatch between node and cli](https://github.com/input-output-hk/cardano-cli/pull/249)
- [Era based `address` commands](https://github.com/input-output-hk/cardano-cli/pull/248)
- [Consistent naming for `stake-pool` command related types, functions and modules](https://github.com/input-output-hk/cardano-cli/pull/246)
- [Disable `redundant-constraints` warning only on `ghc-8.10.7`](https://github.com/input-output-hk/cardano-cli/pull/245)
- [Remove `EraBased` prefix from era-based commands](https://github.com/input-output-hk/cardano-cli/pull/244)
- [Rename `delegation-certificate` to `stake-delegation-certificate` only in era-based command structure](https://github.com/input-output-hk/cardano-cli/pull/243)
- [Move `node` run commands implementation into era based](https://github.com/input-output-hk/cardano-cli/pull/242)
- [Era-based `stake-address` command group](https://github.com/input-output-hk/cardano-cli/pull/241)
- [Remove duplicate instances and add new `FeatureInEra ShelleyBasedEra` instance](https://github.com/input-output-hk/cardano-cli/pull/240)
- [Remove `EraBased` prefix from errors](https://github.com/input-output-hk/cardano-cli/pull/239)
- [Move `text-view` run commands implementation into era-based](https://github.com/input-output-hk/cardano-cli/pull/238)
- [Move `key` run commands implementation into era based](https://github.com/input-output-hk/cardano-cli/pull/237)
- [Move `query` run commands implementation into era based](https://github.com/input-output-hk/cardano-cli/pull/236)
- [Move `genesis` run commands implementation into era based](https://github.com/input-output-hk/cardano-cli/pull/235)
- [Move `pool` run commands implementation into era based](https://github.com/input-output-hk/cardano-cli/pull/234)
- [Move `stake-address` run commands implementation into era based](https://github.com/input-output-hk/cardano-cli/pull/233)
- [Move `address` run command implementation into era-based](https://github.com/input-output-hk/cardano-cli/pull/232)
- [Delete legacy `conway governance` commands](https://github.com/input-output-hk/cardano-cli/pull/231)
- [Era sensitive transaction run commands](https://github.com/input-output-hk/cardano-cli/pull/230)
- [Move transaction command code into era based](https://github.com/input-output-hk/cardano-cli/pull/229)
- [Fix query `key-period-info`](https://github.com/input-output-hk/cardano-cli/pull/228)
- [New `hprop_golden_shelleyStakeAddressRegistrationCertificateWithBuildRaw` test](https://github.com/input-output-hk/cardano-cli/pull/227)
- [Prefix complex delegation certificate option](https://github.com/input-output-hk/cardano-cli/pull/225)

### cardano-api

- [Fix test constraints functions](https://github.com/input-output-hk/cardano-api/pull/233)
- [New `caseShelleyToBabbageAndConwayEraOnwards` function](https://github.com/input-output-hk/cardano-api/pull/231)
- [Delete deprecated functions and types](https://github.com/input-output-hk/cardano-api/pull/230)
- [Release 8.19.0.0](https://github.com/input-output-hk/cardano-api/pull/228)
- [`FeatureInEra` instances for `CardanoEra` and `ShelleyBasedEra`](https://github.com/input-output-hk/cardano-api/pull/226)
- [New `mapSomeAddressVerification` key function](https://github.com/input-output-hk/cardano-api/pull/225)
- [Fix type signature of `queryGenesisParameters` so that it can be queried in any era](https://github.com/input-output-hk/cardano-api/pull/224)
- [Release 8.18.0.0](https://github.com/input-output-hk/cardano-api/pull/222)
- [Fix exception when executing drep queries](https://github.com/input-output-hk/cardano-api/pull/221)

### cardano-node

- [Cardano-node 8.3.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.3.0-pre)
- [Fix deadlock issue with stdout tracer in tx-generator](https://github.com/input-output-hk/cardano-node/pull/5460)
- [nix: workbench tracing configuration](https://github.com/input-output-hk/cardano-node/pull/5453)

### cardano-testnet

### docs

### CI & project maintenance
