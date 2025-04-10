---
title: Node API & CLI Team Update
slug: 2025-01-01-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-12-18T00:00:00Z - 2025-01-01T00:00:00Z

## High level summary
- SPO Stake Distribution: Added functionality to query spo-stake-distribution that reveals DRep delegation choices of stake pool rewards accounts. 
- API Release: Published cardano-api-10.5.0.0
- API Exports: Added the export of genTxOutByron to support external tools that need to work with Byron-era transaction outputs.

### cardano-cli
- [Augment of query spo-stake-distribution to include the DRep delegation choices of the Pool's rewards accounts](https://github.com/IntersectMBO/cardano-cli/pull/990)
- [Bump hackage and chap, restrict hedgehog-extras <= 0.6.5.0](https://github.com/IntersectMBO/cardano-cli/pull/998)
- [Make tests run in `PropertyT (ResourceT IO)`](https://github.com/IntersectMBO/cardano-cli/pull/997)

### cardano-api
- [Export genTxOutByron](https://github.com/IntersectMBO/cardano-api/pull/703)
- [Release cardano-api-10.5.0.0](https://github.com/IntersectMBO/cardano-api/pull/712)

### cardano-node
- None

### cardano-testnet
- None

### docs
- [Improve query proposals help text.](https://github.com/IntersectMBO/cardano-cli/pull/994)

### CI & project maintenance
- None
