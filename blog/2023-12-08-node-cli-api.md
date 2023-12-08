---
title: Node API & CLI Team Update
slug: 2023-12-08-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-11-15 - 2023-12-08

## High level summary

This is sprint was mostly about bug fixing, code clean-ups and optimizations in preparation for a mainnet suitable release.

### cardano-cli

- [Unify previous governance action parameters across actions](https://github.com/input-output-hk/cardano-cli/pull/511)
- [Release 8.17.0.0](https://github.com/input-output-hk/cardano-cli/pull/510)
- [ Restore the inclusion of datum hashes in Alonzo era tx bodies](https://github.com/input-output-hk/cardano-cli/pull/507)
- [create-staked: add test](https://github.com/input-output-hk/cardano-cli/pull/498)
- [create-staked: simplify some code](https://github.com/input-output-hk/cardano-cli/pull/497)
- [Remove unused cabal file code](https://github.com/input-output-hk/cardano-cli/pull/495)
- [New version cardano-cli-8.16.0.1](https://github.com/input-output-hk/cardano-cli/pull/491)
- [Fix era mismatch error in stake-address-info](https://github.com/input-output-hk/cardano-cli/pull/490)
- [Release 8.16.0](https://github.com/input-output-hk/cardano-cli/pull/489)
- [Add create-testnet-data command](https://github.com/input-output-hk/cardano-cli/pull/488)
- [Rename stake-address-info field: stakeDelegation -> delegation for eras prior to Conway](https://github.com/input-output-hk/cardano-cli/pull/487)
- [Update the `--key-output-format` help text: default is text-envelope](https://github.com/input-output-hk/cardano-cli/pull/486)
- [Complete help texts for `create-protocol-parameters-update`](https://github.com/input-output-hk/cardano-cli/pull/484)
- [Fix using queryStakeVoteDelegatees in eras before conway](https://github.com/input-output-hk/cardano-cli/pull/483)
- [Use node queries with tighter eons. Simplify prettyprinting.](https://github.com/input-output-hk/cardano-cli/pull/481)
- [Add support for Plutus V3 in command line interface](https://github.com/input-output-hk/cardano-cli/pull/479)
- [Remove Byron Tx](https://github.com/input-output-hk/cardano-cli/pull/478)
- [Use `selectStakeCredentialWitness` instead of duplicating credential selection](https://github.com/input-output-hk/cardano-cli/pull/476)
- [Revert "query protocol parameters: use ledger instances"](https://github.com/input-output-hk/cardano-cli/pull/475)
- [governance action: prefix stake-verification-key/stake-key arguments with --deposit-return](https://github.com/input-output-hk/cardano-cli/pull/470)
- [Fix NodeEraMismatchError mismatch](https://github.com/input-output-hk/cardano-cli/pull/469)
- [Byron isolation 2 of n](https://github.com/input-output-hk/cardano-cli/pull/467)
- [Fix description of `vote-delegation-certificate` command](https://github.com/input-output-hk/cardano-cli/pull/466)
- [New version `cardano-cli-8.15.0.0`](https://github.com/input-output-hk/cardano-cli/pull/464)
- [Integration work for Node 8.7.0](https://github.com/input-output-hk/cardano-cli/pull/463)
- [Align create-constitution anchor flags with other anchor flags](https://github.com/input-output-hk/cardano-cli/pull/460)
- [conway governance hash: add option to write hash to file (--out-file)](https://github.com/input-output-hk/cardano-cli/pull/459)
- [Update pCmds to take `ShelleyBasedEra era` instead of `Cardano era`](https://github.com/input-output-hk/cardano-cli/pull/458)
- [Add one missing extended to non extended golden tests](https://github.com/input-output-hk/cardano-cli/pull/457)
- [Correct conway parser, so that --key-reg-deposit-amt is mandatory](https://github.com/input-output-hk/cardano-cli/pull/456)

### cardano-api

- [Release 8.36.1.1](https://github.com/input-output-hk/cardano-api/pull/399)
- [Restore the inclusion of datum hashes in Alonzo era tx bodies](https://github.com/input-output-hk/cardano-api/pull/398)
- [New version cardano-api-8.36.1.0](https://github.com/input-output-hk/cardano-api/pull/396)
- [Expose AnyProposals and AnyRatificationState](https://github.com/input-output-hk/cardano-api/pull/395)
- [New version `cardano-api-8.36.0.0`](https://github.com/input-output-hk/cardano-api/pull/394)
- [New `ToJSON` instance for `TxValidationErrorInCardanoMode`](https://github.com/input-output-hk/cardano-api/pull/393)
- [Update to latest consensus release](https://github.com/input-output-hk/cardano-api/pull/392)
- [Fix generated textEnvelope type on registering a Stake Address Registration Certificate](https://github.com/input-output-hk/cardano-api/pull/390)
- [New version `cardano-api-8.35.0.0`](https://github.com/input-output-hk/cardano-api/pull/389)
- [Expose NewGovernanceProposals and EpochBoundaryRatificationState ledger events](https://github.com/input-output-hk/cardano-api/pull/388)
- [Remove renderEra. Rename prettyTo* to docTo* functions](https://github.com/input-output-hk/cardano-api/pull/387)
- [Guard queries with their respective eras](https://github.com/input-output-hk/cardano-api/pull/386)
- [Release 8.34.1](https://github.com/input-output-hk/cardano-api/pull/385)
- [Expose `stakeCredentialWitness` function, which returns only stake credentials for the certificates requiring witnessing: delegation and deregistration](https://github.com/input-output-hk/cardano-api/pull/383)
- [Remove ByronTx](https://github.com/input-output-hk/cardano-api/pull/382)
- [New version `cardano-api-8.34.0.0`](https://github.com/input-output-hk/cardano-api/pull/381)
- [`ToJSON` instance for `TxValidationError`](https://github.com/input-output-hk/cardano-api/pull/379)
- [Parameterize `createAndValidateTransactionBody` on `ShelleyBasedEra era`](https://github.com/input-output-hk/cardano-api/pull/378)
- [New version `cardano-api-8.33.0.0`](https://github.com/input-output-hk/cardano-api/pull/377)
- [Minor `prettyprinter` fixes](https://github.com/input-output-hk/cardano-api/pull/375)
- [Export `AllegraEraOnwards`](https://github.com/input-output-hk/cardano-api/pull/374)
- [New version `cardano-api-8.32.0.0`](https://github.com/input-output-hk/cardano-api/pull/371)
- [Use `Pretty` for rendering errors instead of `Show`](https://github.com/input-output-hk/cardano-api/pull/370)

### cardano-node

- [Bump CHaP](https://github.com/input-output-hk/cardano-node/pull/5566)
- [Allow text-1](https://github.com/input-output-hk/cardano-node/pull/5562)
- [Release cardano-node 8.7.1](https://github.com/input-output-hk/cardano-node/pull/5560)
- [Bump CHaP](https://github.com/input-output-hk/cardano-node/pull/5557)
- [Forcefully disable PeerSharing if InitiatorMode is used](https://github.com/input-output-hk/cardano-node/pull/5551)
- [Optimize new tracing further](https://github.com/input-output-hk/cardano-node/pull/5541)

### cardano-testnet

- [Bump CHaP](https://github.com/input-output-hk/cardano-node/pull/5566)
- [Transaction submission test via `cardano-submit-api`](https://github.com/input-output-hk/cardano-node/pull/5558)
- [Bump CHaP](https://github.com/input-output-hk/cardano-node/pull/5557)
- [Transaction integration test](https://github.com/input-output-hk/cardano-node/pull/5552)

### docs

### CI & project maintenance
