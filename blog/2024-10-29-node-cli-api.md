---
title: Node API & CLI Team Update
slug: 2024-10-29-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-10-16T00:00:00Z - 2024-10-29T00:00:00Z

## High level summary
The Node-API-CLI team made significant progress in this period, with the most notable change being the addition of a compatible command group to the Cardano CLI. This important development lays the groundwork for eventually deprecating the Shelley through Babbage command groups.

Key accomplishments include:

- Released Cardano CLI versions 10.0 and 10.1.0.0
- Added a new "compatible" command group to simplify CLI structure
- Implemented hash checks for governance-related certificate creation
- Fixed issues with DRep credential generation
- Removed direct dependencies from Cardano ledger packages
- Integrated Plutus 1.36 and latest ledger for the 10.0 release
- Made multiple improvements to the Cardano API, including governance alignment updates and fixes for datum conversion
- Enhanced Cardano testnet with improved testing capabilities for stake address registration/deregistration


### cardano-cli
- [Add compatible command group](https://github.com/IntersectMBO/cardano-cli/pull/917)
- [Add hash checks for `governance committee create-cold-key-resignation-certificate` and `governance vote create`](https://github.com/IntersectMBO/cardano-cli/pull/937)
- [Add new types to list of accepted types and remove deprecated ones](https://github.com/IntersectMBO/cardano-cli/pull/892)
- [Fix num of `DRep` credentials generated for transient parameter](https://github.com/IntersectMBO/cardano-cli/pull/948)
- [Fixes test issues arising from integration of plutus 1.36 and latest ledger for 10.0 release](https://github.com/IntersectMBO/cardano-cli/pull/940)
- [Release cardano-cli-10.1.0.0](https://github.com/IntersectMBO/cardano-cli/pull/947)
- [release CLI 10.0](https://github.com/IntersectMBO/cardano-cli/pull/933)
- [Remove direct dependencies from `cardano-ledger-*`](https://github.com/IntersectMBO/cardano-cli/pull/941)
- [Revert "create-testnet-data: augment/check node configuration file for genesis hashes and paths"](https://github.com/IntersectMBO/cardano-cli/pull/930)
- [Update cardano-api to 9.4.0.0](https://github.com/IntersectMBO/cardano-cli/pull/936)
- [Upgrade cardano-api-10.1.0.0](https://github.com/IntersectMBO/cardano-cli/pull/946)
- [Upgrade chap (include cardano-ledger-conway-1.17.1.0)](https://github.com/IntersectMBO/cardano-cli/pull/949)

### cardano-api
- [Expose remaining functions and types from `cardano-ledger-*` required by `cardano-cli`](https://github.com/IntersectMBO/cardano-api/pull/656)
- [Expose symbols required by hash check in `transaction build` in `cardano-cli`](https://github.com/IntersectMBO/cardano-api/pull/661)
- [Fix datum conversion in 'fromLedgerTxOuts' when using 'fromAlonzoTxOut'](https://github.com/IntersectMBO/cardano-api/pull/620)
- [governance alignment updates](https://github.com/IntersectMBO/cardano-api/pull/654)
- [Node 10.0 integration](https://github.com/IntersectMBO/cardano-api/pull/643)
- [Release cardano-api-10.1.0.0](https://github.com/IntersectMBO/cardano-api/pull/659)
- [Rename `TxOutDatumInTx` datum to `TxOutSupplementalDatum`](https://github.com/IntersectMBO/cardano-api/pull/662)
- [Use correct pattern for stake deregistration certs in Conway](https://github.com/IntersectMBO/cardano-api/pull/657)

### cardano-testnet
- [cardano-testnet | Add stake address registration/deregistration test](https://github.com/IntersectMBO/cardano-node/pull/6017)
- [cardano-testnet | Make simple transaction build test use true values instead of hardcoded ones](https://github.com/IntersectMBO/cardano-node/pull/6024)
- [cardano-testnet: QoL changes](https://github.com/IntersectMBO/cardano-node/pull/6008)

### docs
- None

### CI & project maintenance
- None
