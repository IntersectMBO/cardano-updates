---
title: Node API & CLI Team Update
slug: 2023-08-15-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-08-02 - 2023-08-15

## High level summary

- cardano-node 8.2.1 (pre-release) to SanchoNet
- Continue moving CLI into era-based top level command structure
- Wire-up DREP key generation,
- Fix DREP deregistration certificates
- Implement Constitutional Committee Key generation on the CLI
- Introducing era-based protocol parameters on the API
- Removing depracated functions and types on the API


### cardano-cli

- [Update to `cardano-api-8.13.0.0`](https://github.com/input-output-hk/cardano-cli/pull/169)
- [Reenable golden tests](https://github.com/input-output-hk/cardano-cli/pull/164)
- [#128 DRep key generation](https://github.com/input-output-hk/cardano-cli/pull/163)
- [Bump index states](https://github.com/input-output-hk/cardano-cli/pull/160)
- [Fix deregistration-certificate: generate deregistration instead of registration certs](https://github.com/input-output-hk/cardano-cli/pull/159)
- [Structuring legacy code so that era-based code does not depend on it](https://github.com/input-output-hk/cardano-cli/pull/158)
- [Plural for command groups](https://github.com/input-output-hk/cardano-cli/pull/151)
- [Implement `conway governance committee key-hash` command](https://github.com/input-output-hk/cardano-cli/pull/144)
- [Wire up constitution creation in the new era based cli commands](https://github.com/input-output-hk/cardano-cli/pull/142)
- [cardano-cli 8.5.0.0](https://github.com/input-output-hk/cardano-cli/pull/140)
- [Wire up remaining DReps](https://github.com/input-output-hk/cardano-cli/pull/137)
- [Implement `conway governance committee hot-key-gen` command](https://github.com/input-output-hk/cardano-cli/pull/136)
- [Convert to use `tasty-discover`](https://github.com/input-output-hk/cardano-cli/pull/127)

### cardano-api

- [Release cardano-api 8.13.1.0](https://github.com/input-output-hk/cardano-api/pull/189)
- [Fix build](https://github.com/input-output-hk/cardano-api/pull/187)
- [cardano-api 8.13.0.0](https://github.com/input-output-hk/cardano-api/pull/185)
- [Modify `queryGenesisParameters` so that its type advertises it only returns genesis parameters for the Shelley era](https://github.com/input-output-hk/cardano-api/pull/181)
- [Introduce EraBasedProtocolParametersUpdate](https://github.com/input-output-hk/cardano-api/pull/180)
- [Delete deprecated functions and types](https://github.com/input-output-hk/cardano-api/pull/173)
- [Simplify code with new constraints functions](https://github.com/input-output-hk/cardano-api/pull/171)
- [Fix `EraCast Certificate`](https://github.com/input-output-hk/cardano-api/pull/170)
- [New version `cardano-api-8.12.0.0`](https://github.com/input-output-hk/cardano-api/pull/168)
- [Fix committee hot keys](https://github.com/input-output-hk/cardano-api/pull/167)
- [New version `cardano-api-8.11.1.0`](https://github.com/input-output-hk/cardano-api/pull/164)
- [Fix typo Constitional -> Constitutional](https://github.com/input-output-hk/cardano-api/pull/163)


### cardano-node

- [cardano-git-rev: New version for CHaP](https://github.com/input-output-hk/cardano-node/pull/5430)
- [Fix broken links in docs](https://github.com/input-output-hk/cardano-node/pull/5427)
- [cardano-node 8.2.1](https://github.com/input-output-hk/cardano-node/pull/5423)


### cardano-testnet

- [Fix broken links in docs](https://github.com/input-output-hk/cardano-node/pull/5427)
- [cardano-node 8.2.1](https://github.com/input-output-hk/cardano-node/pull/5423)


### docs

[Fix broken links in docs](https://github.com/input-output-hk/cardano-node/pull/5427)

### CI & project maintenance

- [Convert to use `tasty-discover`](https://github.com/input-output-hk/cardano-cli/pull/127)