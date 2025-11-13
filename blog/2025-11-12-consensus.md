---
title: Consensus Team Update
slug: 2025-11-12-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Discovered the "bufferbloat" pathology of the October 2025 Leios demo. Opened [#1756](https://github.com/IntersectMBO/ouroboros-consensus/issues/1756) to troubleshoot it.
- Introduced additional changes needed for LSM-tree integration in `cardano-node` ([#1715](https://github.com/IntersectMBO/ouroboros-consensus/pull/1715)).
- Fixed race conditions and double read-lock acquisitions in the LedgerDb, and improved resource management in the LedgerDb ([#1737](https://github.com/IntersectMBO/ouroboros-consensus/pull/1737), [#1741](https://github.com/IntersectMBO/ouroboros-consensus/pull/1741)).
- Improved memory management by preventing the retention of the Genesis ledger state, which is particularly relevant during benchmarking and testing ([#1731](https://github.com/IntersectMBO/ouroboros-consensus/pull/1731)).
- Improved resource management in the mempool and LedgerDb ([#1714](https://github.com/IntersectMBO/ouroboros-consensus/pull/1714)).
