---
title: Node API & CLI Team Update
slug: 2024-10-16-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-10-02T00:00:00Z - 2024-10-16T00:00:00Z

## High level summary
- More anchor data hash checks were added to cardano-cli commands.
- Support to create certificates that can register and delegate stake.
- Moved various era agnostic commands to the top level of cardano-cli. 
- Added Cardano.Api.Tx.Compatible to cardano-api which allows the creation of simple unbalanced transactions that can submit protocol updates in any era.

### cardano-cli
- [Add hash checks for `drep registration-certificate` and `drep update-certificate`](https://github.com/IntersectMBO/cardano-cli/pull/916)
- [Add metadata validation, hash checking, and URL support to `stake-pool registration-certificate`, and hash checking and URL support to `stake-pool metadata-hash`](https://github.com/IntersectMBO/cardano-cli/pull/932)
- [Add url support to metadata hash cmd](https://github.com/IntersectMBO/cardano-cli/pull/927)
- [Add support for certificates to register and delegate stake simultaneously](https://github.com/IntersectMBO/cardano-cli/pull/919)
- [Hide free instances of `HashCheckParamInfo` into functions](https://github.com/IntersectMBO/cardano-cli/pull/921)
- [Move address commands to top level](https://github.com/IntersectMBO/cardano-cli/pull/934)
- [Move key commands to top level](https://github.com/IntersectMBO/cardano-cli/pull/931)
- [Move node commands to top level](https://github.com/IntersectMBO/cardano-cli/pull/929)
- [Remove unnecessary era parameters and use ShelleyBasedEra era](https://github.com/IntersectMBO/cardano-cli/pull/935)


### cardano-api
- [Add Cardano.Api.Tx.Compatible](https://github.com/IntersectMBO/cardano-api/pull/644)
- [Add voting to simple tx interface](https://github.com/IntersectMBO/cardano-api/pull/648)
- [Export GenesisHashByron](https://github.com/IntersectMBO/cardano-api/pull/652)
- [Expose AnyVote](https://github.com/IntersectMBO/cardano-api/pull/649)
- [Expose functions and types from `cardano-ledger-alonzo` and `cardano-ledger-byron` required by cardano-cli](https://github.com/IntersectMBO/cardano-api/pull/647)
- [Handle plutus related ledger events in Conway](https://github.com/IntersectMBO/cardano-api/pull/650)
- [Make `Some` accept forall k. instead of Type kind](https://github.com/IntersectMBO/cardano-api/pull/651)
- [Release 9.4.0.0](https://github.com/IntersectMBO/cardano-api/pull/653)


### cardano-node
- [cardano-tracer: Fix multiple empty logs being produced.](https://github.com/IntersectMBO/cardano-node/pull/6002)

### cardano-testnet
- [cardano-testnet | configurable SPO and relays count, enable parallel execution of the test suite](https://github.com/IntersectMBO/cardano-node/pull/6007)
- [cardano-testnet | Reenable chairman test](https://github.com/IntersectMBO/cardano-node/pull/5992)
- [cardano-testnet | Remove `NodeRuntime` type](https://github.com/IntersectMBO/cardano-node/pull/6013)
- [cardano-testnet: don't specify delegated supply anymore. Use create-testnet-data default behavior](https://github.com/IntersectMBO/cardano-node/pull/6001)
- [cardano-testnet: remove unused ForkPoint datatype](https://github.com/IntersectMBO/cardano-node/pull/6006)

### docs

### CI & project maintenance
