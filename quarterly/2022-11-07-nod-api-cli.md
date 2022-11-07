---
title: Node API & CLI Team Update
slug: 2022-10-07-node-cli-api
authors: Jimbo4350
tags: [cli-api-quarterly]
hide_table_of_contents: false
---

## Node-Api-Cli Quarterly Update
## 2022-09 - 2022-11-04

- Various improvements to tests/CI/GHC 9.2.4 preparations/upgrade to cabal-3.8.1.0
- Major clean up of stale iusses + PRs.
- Implementation of stale-bot to mitigate against a proliferation of outdated issues and PRs
- cardano-api refactoring with the aim of exposing more user friendly functions, particularly concerning transaction construction and querying the node.
- cardano-cli refactoring with the aim of moving reusable functions to cardano-api. We have made strides here and have managed to improve the interface of transaction construction and validation.
- General documentation updates and improvements
- Addition of tx-mempool command which allows users to:
  - Query the node about the current mempool's capacity and sizes
  - Request the next transaction from the mempool's current list
  - Query if a particular transaction exists in the mempool
-  Initial refactoring of cardano-testnet

Next quarter

- cardano-api
  - Working with Konstantinos and his team to make cardano-api better for dapp developers - we have a google doc for this, I can send it to you privately.
- cardano-testnet
  - Working with Marc Fontaine to create an easy to use executable to deploy testnets locally - https://github.com/input-output-hk/cardano-node/issues/4598
- Serenity
  - Continued refactoring of cardano-api and cardano-cli, with the particular focus on extracting re-usable components of cardano-cli and moving them to cardano-api. This is harder to define but will manifest in stuff moving from cardano-cli to cardano-api and is tied in to the cardano-api work specified above.
- General bug fixing and smaller feature requests for the api/cli that are always coming in. Robert is primarily handling this at the moment as he is relatively new.
