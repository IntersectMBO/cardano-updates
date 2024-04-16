---
title: Node API & CLI Team Update
slug: 2024-03-15-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-03-01 - 2024-03-15

## High level summary

- cardano-cli: Focus is on testing Conway features. Several improvements to create-testnet-data command, useful for creating/deploying local clusters for testing. Enable parallel execution of tests. 

### cardano-cli

- [Update cardano-api-8.40.0.0](https://github.com/IntersectMBO/cardano-cli/pull/648)
- [create-testnet-data: fix that treasury could be unexpectedly negative](https://github.com/IntersectMBO/cardano-cli/pull/644)
- [Fix parallel `create-testnet-data` stdout contents test ](https://github.com/IntersectMBO/cardano-cli/pull/640)
- [cardano-cli-test: remove compatibility shim that is now useless](https://github.com/IntersectMBO/cardano-cli/pull/639)
- [create-testnet-data: fix computation of not-delegated amount](https://github.com/IntersectMBO/cardano-cli/pull/638)
- [Follow-ups of create-testnet-data+relays](https://github.com/IntersectMBO/cardano-cli/pull/636)
- [Allow an output file to be specified for query pool-state](https://github.com/IntersectMBO/cardano-cli/pull/635)
- [Bump cardano-ping](https://github.com/IntersectMBO/cardano-cli/pull/633)
- [create-testnet-data: allow to specify relays for SPOs (like create-staked)](https://github.com/IntersectMBO/cardano-cli/pull/632)


### cardano-api

- [Fix for foldEpochState haddock](https://github.com/IntersectMBO/cardano-api/pull/483)
- [Expose default genesis for Conway and Alonzo, and DRepState constructors](https://github.com/IntersectMBO/cardano-api/pull/482)
- [New version `cardano-api-8.40.0.0`](https://github.com/IntersectMBO/cardano-api/pull/480)
- [Remove error `"evaluateTransactionFee: TODO support Byron key witnesses"`](https://github.com/IntersectMBO/cardano-api/pull/478)
- [Use the ledger's Coin instead of our custom Lovelace type](https://github.com/IntersectMBO/cardano-api/pull/475)
- [Revert "Remove unused constraint"](https://github.com/IntersectMBO/cardano-api/pull/472)

- [Add `SlotNo` and `BlockNo` parameters to `foldEpochState`'s callback function](https://github.com/IntersectMBO/cardano-api/pull/470)
- [Expose Block constructors](https://github.com/IntersectMBO/cardano-api/pull/468)

### cardano-testnet

- [Update cardano-ping to the same version as cardano-cli](https://github.com/IntersectMBO/cardano-node/pull/5710)
- [Remove flaky calls to by `byDeadlineM` in `cardano-testnet`](https://github.com/IntersectMBO/cardano-node/pull/5707)
- [Add PARALLEL_TESTNETS flag](https://github.com/IntersectMBO/cardano-node/pull/5706)
- [testnet: reduce log length significantly, by not logging the config](https://github.com/IntersectMBO/cardano-node/pull/5701)
- [Use more realistic default conway genesis](https://github.com/IntersectMBO/cardano-node/pull/5700)
- [Make testnet's nodes' ports allocation dynamic](https://github.com/IntersectMBO/cardano-node/pull/5699)

### docs

### CI & project maintenance

- [Enable parallel execution of tests (cli)](https://github.com/IntersectMBO/cardano-cli/pull/637)
- [Enable parallel execution of tests (api)](https://github.com/IntersectMBO/cardano-api/pull/471)