---
title: Node API & CLI Team Update
slug: 2025-01-30-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2025-01-15T00:00:00Z - 2025-01-30T00:00:00Z

## High level summary
- **cardano-cli updates**
  - Added certificates support to `compatible transaction-sign`
  - Integrated changes for node v10.2.0 release
  - Implemented query for big ledger peers snapshot
  - Refactored node connection handling using `LocalNodeConnectInfo`
  - Released v10.3.0.0
  - Removed deprecated `ScriptWitnessFiles` usage
  - Simplified GHA workflows using Nix
  - Updated Nix tooling and dependencies

- **cardano-api improvements**
  - Added support for ratify-state query
  - Reorganized certificate witnesses into ordered maps
  - Deprecated and removed outdated patterns
  - Downgraded Plutus to v1.37
  - Fixed Plutus CBOR encoding bug
  - Exposed GovActionState from Ledger
  - Released versions 10.6.0.0 and 10.7.0.0
  - Added Plutus script language conversion exports

### cardano-cli
- [Adapt to removal of some patterns in API](https://github.com/IntersectMBO/cardano-cli/pull/1020)
- [Add certificates to CLI interface in `compatible transaction-sign` ](https://github.com/IntersectMBO/cardano-cli/pull/972)
- [Integrate in preparation for cardano-node release 10.2.0](https://github.com/IntersectMBO/cardano-cli/pull/986)
- [Misc refactors in pretty printing and replacing unnecessary functions](https://github.com/IntersectMBO/cardano-cli/pull/980)
- [Query a node for a snapshot of big ledger peers](https://github.com/IntersectMBO/cardano-cli/pull/727)
- [Refactor node connection passing to make it use `LocalNodeConnectInfo` type](https://github.com/IntersectMBO/cardano-cli/pull/1034)
- [Release cardano-cli-10.3.0.0](https://github.com/IntersectMBO/cardano-cli/pull/1019)
- [Remove use of `ScriptWitnessFiles` in spending scripts](https://github.com/IntersectMBO/cardano-cli/pull/1025)
- [Remove use of script witness files in certifying scripts](https://github.com/IntersectMBO/cardano-cli/pull/1026)
- [Update nix cabal version & flake inputs](https://github.com/IntersectMBO/cardano-cli/pull/1030)

### cardano-api
- [Add support for the ratify-state query](https://github.com/IntersectMBO/cardano-api/pull/737)
- [Change a representation of witnesses in transaction's certificates to an ordered map where a certificate is the key](https://github.com/IntersectMBO/cardano-api/pull/734)
- [Deprecate a lot of patterns](https://github.com/IntersectMBO/cardano-api/pull/733)
- [Deprecate some patterns, remove their internal use](https://github.com/IntersectMBO/cardano-api/pull/728)
- [Downgrade plutus version to 1.37](https://github.com/IntersectMBO/cardano-api/pull/727)
- [Expose GovActionState from Ledger](https://github.com/IntersectMBO/cardano-api/pull/730)
- [Fix plutus double CBOR encoding bug](https://github.com/IntersectMBO/cardano-api/pull/720)
- [Re-export getBlockTxs](https://github.com/IntersectMBO/cardano-api/pull/738)
- [Release 10.7.0.0](https://github.com/IntersectMBO/cardano-api/pull/736)
- [Release cardano-api-10.6.0.0](https://github.com/IntersectMBO/cardano-api/pull/725)
- [Shelley: export {to,from}AlonzoLanguage (Plutus script language conversions)](https://github.com/IntersectMBO/cardano-api/pull/731)

### cardano-node
- None

### cardano-testnet
- None

### docs
- None

### CI & project maintenance
- [Simplify GHAs using nix, update nix shell haskell tools](https://github.com/IntersectMBO/cardano-cli/pull/1029)

