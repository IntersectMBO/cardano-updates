---
title: Node API & CLI Team Update
slug: 2024-12-04-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-11-20T00:00:00Z - 2024-12-04T00:00:00Z

## High level summary

### Major Enhancements
- Byron Genesis Support: Added capability to create Byron genesis files in the create-testnet-data command
- HTTP Support for Anchor Data: Modified anchor-data checking to allow HTTP schema (with warnings) for testing purposes
- Minting Script Witness Refactoring: Introduced MintScriptWitnessWithPolicyId as a first step toward deprecating ScriptWitnessFiles, making the code more maintainable and flexible
- Code Sharing Improvements: Implemented shared code between genesis commands and query fields, reducing duplication and improving maintainability

### API Enhancements
- Released cardano-api-10.3.0.0
- Implemented and exported the Convert typeclass for better eon type conversion handling
- Exposed functions for converting datums and scripts to JSON

### cardano-cli
- [Allow and add warning for HTTP anchor-data](https://github.com/IntersectMBO/cardano-cli/pull/979)
- [create-testnet-data: create byron genesis](https://github.com/IntersectMBO/cardano-cli/pull/974)
- [genesis creation: share code](https://github.com/IntersectMBO/cardano-cli/pull/973)
- [Minting script witness refactor](https://github.com/IntersectMBO/cardano-cli/pull/971)
- [Minting script witness refactor](https://github.com/IntersectMBO/cardano-cli/pull/971)
- [Remove usage of experimental api in transaction balancing](https://github.com/IntersectMBO/cardano-cli/pull/970)
- [Remove usage of experimental api in transaction balancing](https://github.com/IntersectMBO/cardano-cli/pull/970)
- [Share code in fields of queries](https://github.com/IntersectMBO/cardano-cli/pull/985)

### cardano-api
- [Export GovActionIx from the ledger](https://github.com/IntersectMBO/cardano-api/pull/688)
- [Export the Convert class](https://github.com/IntersectMBO/cardano-api/pull/696)
- [Expose `EraTxWits`, `TxDats`, and functions for converting datums and scripts to JSON](https://github.com/IntersectMBO/cardano-api/pull/689)
- [fromProposalProcedure: return StakeCredential](https://github.com/IntersectMBO/cardano-api/pull/692)
- [Implement Convert typeclass](https://github.com/IntersectMBO/cardano-api/pull/690)
- [Refactor `TxMintValue`](https://github.com/IntersectMBO/cardano-api/pull/663)
- [Release cardano-api-10.3.0.0](https://github.com/IntersectMBO/cardano-api/pull/686)
- [Update ScriptErrorEvaluationFailed with DebugPlutusFailure](https://github.com/IntersectMBO/cardano-api/pull/683)

### cardano-node
- None 

### cardano-testnet
- None

### docs
- None 

### CI & project maintenance
- None