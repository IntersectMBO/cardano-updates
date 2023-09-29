---
title: Node API & CLI Team Update
slug: 2023-08-29-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-08-16 - 2023-08-29

## High level summary

CLI is making progress towards phases 3 and 4 of SanchoNet.
- Ability to create info, no-confidence and new committee governance actions.
- Voting as DREP is possible now on the CLI

- API is now using Ledger's PParams and VotingProcedures
- Expose following queries from consensus:
      - GetGovState
      - GetDRepState
      - GetDRepStakeDistr
      - GetCommitteeState
      - GetConstitution

### cardano-cli

- [Add goverance info action creation to era based cli](https://github.com/input-output-hk/cardano-cli/pull/179)
- [Add create-no-confidence command to era based cardano-cli](https://github.com/input-output-hk/cardano-cli/pull/176)
- [Add create-new-committee command to era based cli](https://github.com/input-output-hk/cardano-cli/pull/175)
- [Enable `--drep-script-hash` option](https://github.com/input-output-hk/cardano-cli/pull/204)
- [Remove `experimental` subcommand](https://github.com/input-output-hk/cardano-cli/pull/211)
- [Upgrade to `cardano-api-8.17.0.0`](https://github.com/input-output-hk/cardano-cli/pull/210)
- [New `governance drep id` command](https://github.com/input-output-hk/cardano-cli/pull/194)
- [Add `governance query` commands](https://github.com/input-output-hk/cardano-cli/pull/189)
- [Add `--verification-key` option to `committee key-hash` command](https://github.com/input-output-hk/cardano-cli/pull/187)
- [Read and write `VotingProcedures` files instead of `VotingEntry` files](https://github.com/input-output-hk/cardano-cli/pull/203)
- [Release 8.6.0.0](https://github.com/input-output-hk/cardano-cli/pull/201)
- [Merge `LegacyClientCmdError` into `CmdError` ](https://github.com/input-output-hk/cardano-cli/pull/195)
- [Add test for conway governance action create-constitution](https://github.com/input-output-hk/cardano-cli/pull/193)
- [Move legacy errors out of legacy command structure modules](https://github.com/input-output-hk/cardano-cli/pull/192)
- [Governance `drep` and `vote` command groups](https://github.com/input-output-hk/cardano-cli/pull/191)
- [Move command errors from era-based to `CmdError` module](https://github.com/input-output-hk/cardano-cli/pull/188)
- [Move some error types](https://github.com/input-output-hk/cardano-cli/pull/186)
- [Delete unused module](https://github.com/input-output-hk/cardano-cli/pull/185)
- [Refactor: Use `maybeFeatureInEra` instead of `featureInEra` where possible](https://github.com/input-output-hk/cardano-cli/pull/183)
- [Remove all uses of `toS`, `purer`, `cborError` and `intercalate` from `Cardano.Prelude`](https://github.com/input-output-hk/cardano-cli/pull/182)
- [Remove example era-based parsers we don't need anymore](https://github.com/input-output-hk/cardano-cli/pull/180)
- [Bump CHaP index in preparation for  8.3.0 pre](https://github.com/input-output-hk/cardano-cli/pull/174)


### cardano-api

- [New version `cardano-api-8.17.0.0`](https://github.com/input-output-hk/cardano-api/pull/216)
- [Replace ProtocolParameters usage with ledger's PParams](https://github.com/input-output-hk/cardano-api/pull/214)
- [Use injective type families to improve type inference](https://github.com/input-output-hk/cardano-api/pull/210)
- [Delete `TxVotes` and `VotingEntry` and use `VotingProcedures` instead](https://github.com/input-output-hk/cardano-api/pull/209)
- [New functions `emptyVotingProcedures`, `singletonVotingProcedures` and `mergeVotingProcedures`](https://github.com/input-output-hk/cardano-api/pull/208)
- [New `makeStakeAddressAndDRepDelegationCertificate` function](https://github.com/input-output-hk/cardano-api/pull/207)
- [Expose ledger lenses for governance types](https://github.com/input-output-hk/cardano-api/pull/206)
- [New version cardano-api-8.16.1.0](https://github.com/input-output-hk/cardano-api/pull/205)
- [Add `VotingProcedures` type](https://github.com/input-output-hk/cardano-api/pull/204)
- [Release 8.16.0.0](https://github.com/input-output-hk/cardano-api/pull/202)
- [Update createAnchor to use hashAnchorData](https://github.com/input-output-hk/cardano-api/pull/200)
- [Release 8.15.0.0](https://github.com/input-output-hk/cardano-api/pull/197)
- [Add consensus governance queries](https://github.com/input-output-hk/cardano-api/pull/196)

### cardano-node

### cardano-testnet

### docs

### CI & project maintenance
