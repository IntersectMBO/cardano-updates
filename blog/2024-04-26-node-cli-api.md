---
title: Node API & CLI Team Update
slug: 2024-04-27-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-04-16 - 2024-04-26

## High level summary

[8.10.1-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.10.1-pre) was released to SanchoNet. 

The team continues focused on implementing tests for the Conway era on the cardano-node repository. This sprint the team made various improvements to 
CI pipelines on cardano-cli. 

- Cardano-cli: implemented `build-estimate` to facilitate automatic transaction balancing without access to a live node; and added  `minFeeRefScriptCostPerByte` as an option to `create-protocol-parameters-update` command. 
- Cardano-api: Released version 8.45.1.0 

### cardano-node 

- [version bumps for 8.10.1-pre](https://github.com/IntersectMBO/cardano-node/pull/5794)
- [Rename new 'can_forge_blocks' metric to 'forging_enabled'](https://github.com/IntersectMBO/cardano-node/pull/5802)

### cardano-cli

- [add minFeeRefScriptCostPerByte to create-protocol-param-update + bump cardano-api](https://github.com/IntersectMBO/cardano-cli/pull/736)
- [Introduce new `cardano-cli latest transaction build-estimate` command](https://github.com/IntersectMBO/cardano-cli/pull/728)
- [Fix misunderstanding in generated README](https://github.com/IntersectMBO/cardano-cli/pull/726)
- [Better use of golden files in CI](https://github.com/IntersectMBO/cardano-cli/pull/724)

### cardano-api

- [cardano-api 8.45.1.0](https://github.com/IntersectMBO/cardano-api/pull/526)
- [adding MinFeeRefScriptCostPerByte to Conway PParams](https://github.com/IntersectMBO/cardano-api/pull/524)

### cardano-testnet

- [Use random port number when starting cardano-testnet](https://github.com/IntersectMBO/cardano-node/pull/5791)

### docs

### CI & project maintenance
