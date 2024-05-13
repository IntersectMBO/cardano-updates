---
title: Node API & CLI Team Update
slug: 2024-05-13-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-04-27 - 2024-05-13

## High level summary

Enhancements to the CLI encompass several noteworthy additions. These include the introduction of a new hardfork initiation command, rendering --prev-governance-action-tx-id optional for create-no-confidence actions, addressing scenarios where the committee is defined in the Conway Genesis file, and refining help texts. Additionally, there have been updates to the description fields in governance action files.

Adjust maximum understood protocol version from 9 to 10 when the experimental hardforks flag is enabled. This allows us to bypass Conway's bootstrap phase in testing

Continued work in testing implementation of CIP1694 with cardano-testnet. 

### cardano-cli

- [Make `--prev-governance-action-tx-id` and `--prev-governance-action-tx-id` optional for `create-no-confidence` command](https://github.com/IntersectMBO/cardano-cli/pull/753)
- [Clarify help texts related to JSON and CBOR](https://github.com/IntersectMBO/cardano-cli/pull/751)
- [Release 8.23.0.0 + upgrade cardano-api to 8.45.2.0](https://github.com/IntersectMBO/cardano-cli/pull/749)
- [Export friendly function that returns ByteString + export buildShelleyAddress](https://github.com/IntersectMBO/cardano-cli/pull/748)
- [action create-hardfork cmd + update description fields in all governance action files.](https://github.com/IntersectMBO/cardano-cli/pull/746)
- [Export toTxOutInAnyEra](https://github.com/IntersectMBO/cardano-cli/pull/745)
- [Enable manual specification of execution units for plutus voting and proposing scripts](https://github.com/IntersectMBO/cardano-cli/pull/744)

### cardano-api

- [Release cardano-api-8.45.2.0](https://github.com/IntersectMBO/cardano-api/pull/528)
- [Update estimateBalancedTxBody to account for required deposits ](https://github.com/IntersectMBO/cardano-api/pull/527)

### cardano-node

- [Count votes in Propose Constitution test before ratification](https://github.com/IntersectMBO/cardano-node/pull/5827)
- [Adjust maximum understood protocol version from 9 to 10](https://github.com/IntersectMBO/cardano-node/pull/5820)

### cardano-testnet

- [Refactor: Use KeyPair type for key pairs in cardano-testnet](https://github.com/IntersectMBO/cardano-node/pull/5829)
- [Count votes in Propose Constitution test before ratification](https://github.com/IntersectMBO/cardano-node/pull/5827)
- [Disable DRep Activity test ](https://github.com/IntersectMBO/cardano-node/pull/5825)
- [Reorganize cardano-testnet](https://github.com/IntersectMBO/cardano-node/pull/5824)
- [cardano-testnet: Add new constitutional committee](https://github.com/IntersectMBO/cardano-node/pull/5821)
- [Enable epoch state logging by default](https://github.com/IntersectMBO/cardano-node/pull/5818)
- [Refactor `ProposeNewConstitutionSPO` test to reuse code](https://github.com/IntersectMBO/cardano-node/pull/5816)

### docs

### CI & project maintenance
