---
title: Node API & CLI Team Update
slug: 2025-01-15-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2025-01-01T00:00:00Z - 2025-01-15T00:00:00Z

## High level summary
- **cardano-cli updates**
  - Added datums and scripts support to `friendlyTxImpl`
  - Enhanced DRep functionality:
    - Disambiguated key vs script certificates
    - Added `--output-bech32` and `--output-hex` options
    - Supported key hash inputs
  - Improved Conway genesis documentation
  - Released v10.2.0.0
  - Optimized CI with multi-core Haskell builds

- **cardano-api improvements**
  - Implemented JSON schema validation for governance metadata
  - Added new query for big ledger peers snapshot
  - Enhanced transaction compatibility with certificates support
  - Refactored witness indexing system
  - Prepared for node v10.2.0 release

- **Infrastructure**
  - Enabled parallel builds in GitHub Actions CI
  - Removed redundant cabal constraints

### cardano-cli
- [Add datums and scripts to `friendlyTxImpl`](https://github.com/IntersectMBO/cardano-cli/pull/977)
- [create-testnet-data: document in more details subtleties of Conway genesis initialization](https://github.com/IntersectMBO/cardano-cli/pull/1003)
- [Disambiguate DRep being a key or a script in certificate descriptions](https://github.com/IntersectMBO/cardano-cli/pull/1007)
- [drep id: have --output-bech32 and --output-hex instead of --output-format STRING](https://github.com/IntersectMBO/cardano-cli/pull/1017)
- [drep id: support key hash](https://github.com/IntersectMBO/cardano-cli/pull/1009)
- [DRep.hs: delete unused code](https://github.com/IntersectMBO/cardano-cli/pull/1016)
- [Enable multiple cores in haskell GHA](https://github.com/IntersectMBO/cardano-cli/pull/1006)
- [Move `genesis hash` to `hash genesis-file`](https://github.com/IntersectMBO/cardano-cli/pull/982)
- [Release 10.2.0.0 ](https://github.com/IntersectMBO/cardano-cli/pull/1008)
- [Remove orphan instance](https://github.com/IntersectMBO/cardano-cli/pull/1004)
- [transaction id: add --output-[json,text] flag to control format of the output](https://github.com/IntersectMBO/cardano-cli/pull/1005)

### cardano-api
- [Add certificates support in `createCompatibleSignedTx`.](https://github.com/IntersectMBO/cardano-api/pull/691)
- [Add JSON schema checking functionality for validating gov action metadata](https://github.com/IntersectMBO/cardano-api/pull/713)
- [Added a new query for a snapshot of big ledger peers](https://github.com/IntersectMBO/cardano-api/pull/521)
- [Integrate in preparation for `cardano-node` release `10.2.0`](https://github.com/IntersectMBO/cardano-api/pull/687)
- [Refactor witnesses indexing functions to have the indexing logic in one place](https://github.com/IntersectMBO/cardano-api/pull/697)
- [Remove redundant constraints from cabal.project](https://github.com/IntersectMBO/cardano-api/pull/721)

### cardano-node
- None

### cardano-testnet
- None

### docs
- None

### CI & project maintenance
- [Enable multiple cores in haskell GHA](https://github.com/IntersectMBO/cardano-api/pull/629)

