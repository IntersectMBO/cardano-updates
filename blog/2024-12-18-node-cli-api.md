---
title: Node API & CLI Team Update
slug: 2024-12-18-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-12-04T00:00:00Z - 2024-12-18T00:00:00Z

## High level summary

### Feature Enhancements
- New Query Command: Implemented the "query proposals" command to provide users with easy access to proposal information in the Conway era
- Enhanced Transaction Modification: Added comprehensive transaction modification capabilities with new modX functions for various fields of TxBodyContent up to the Babbage era

### Code Quality Improvements
- Better Code Structure: Moved Byron-specific code to its own file, making the codebase more maintainable
- Query Implementation Simplification: Reduced code complexity in Query.hs 
- Documentation Improvements: Added explanatory comments for configurations like why drepDelegs can be left empty in testnet data

### Documentation and Governance
- OSC Alignment: Updated documentation to align with the Open Source Committee governance policies

### cardano-cli
- [Align docs to OSC governance](https://github.com/IntersectMBO/cardano-cli/pull/938)
- [create-testnet-data: move Byron handling to its own file](https://github.com/IntersectMBO/cardano-cli/pull/992)
- [create-testnet-data: use experimental API and make arguments era specific](https://github.com/IntersectMBO/cardano-cli/pull/968)
- [Implement command "query proposals"](https://github.com/IntersectMBO/cardano-cli/pull/984)
- [Query.hs: simplify implementation with a few new functions and code sharing](https://github.com/IntersectMBO/cardano-cli/pull/993)
- [Update API to 10.4.0.0](https://github.com/IntersectMBO/cardano-cli/pull/988)

### cardano-api
- [Add `modX` functions for all fields of `TxBodyContent` up to Babbage.](https://github.com/IntersectMBO/cardano-api/pull/706)
- [Add modifier functions for TxInsCollateral, TxInsReference, TxExtraKe…](https://github.com/IntersectMBO/cardano-api/pull/704)
- [Don't export coerceKeyRole, export RewardAccount](https://github.com/IntersectMBO/cardano-api/pull/708)
- [Export HasKeyRole's coerceKeyRole function](https://github.com/IntersectMBO/cardano-api/pull/699)
- [Integrate query proposals](https://github.com/IntersectMBO/cardano-api/pull/684)
- [Release 10.4.0.0](https://github.com/IntersectMBO/cardano-api/pull/700)

### cardano-node
- None 

### cardano-testnet
- None 

### docs
- [create-testnet-data's implementation: explain why drepDelegs can be left empty](https://github.com/IntersectMBO/cardano-cli/pull/991)
 

### CI & project maintenance
- None
