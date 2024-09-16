---
title: Node API & CLI Team Update
slug: 2024-09-03-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-08-21 - 2024-09-03

## High level summary

Various bug fixes and refactorings. We have begun to deprecate pre-mainnet eras in cardano-cli.

### cardano-cli
- [Add older eras deprecation notice.](https://github.com/IntersectMBO/cardano-cli/pull/879)
- [Avoid using Opt.auto to avoid overflows going silent](https://github.com/IntersectMBO/cardano-cli/pull/864)
- [Clean-up remainings of `query constitution-hash`](https://github.com/IntersectMBO/cardano-cli/pull/871)
- [create-testnet-data: better behavior for create-testnet-data --total-supply and --delegated-supply](https://github.com/IntersectMBO/cardano-cli/pull/874)
- [Fix estmated fee rendering](https://github.com/IntersectMBO/cardano-cli/pull/873)
- [Fix treasury withdrawal. ](https://github.com/IntersectMBO/cardano-cli/pull/877)
- [Share code in parsers of protocol version](https://github.com/IntersectMBO/cardano-cli/pull/869)
- [Update README with link to the commands reference. Remove obsolete readme parts.](https://github.com/IntersectMBO/cardano-cli/pull/875)

### cardano-api
- [Fix incorrect fees estimation when balancing transaction minting assets](https://github.com/IntersectMBO/cardano-api/pull/622)
- [Include datums and redeemers in makeUnsignedTx](https://github.com/IntersectMBO/cardano-api/pull/623)

### cardano-node
- [bench: `6-dense` profiles; resource trace emission fix](https://github.com/IntersectMBO/cardano-node/pull/5964)

### cardano-testnet
- [cardano-testnet: honor --max-supply value, by passing it to --create-testnet-data under the hood](https://github.com/IntersectMBO/cardano-node/pull/5960)

### docs

### CI & project maintenance
