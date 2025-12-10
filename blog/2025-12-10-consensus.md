---
title: Consensus Team Update
slug: 2025-12-10-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Completed the LSM work in Consensus. Remaining LSM work is just integration in API, CLI, and Node which will be done as part of Node 10.7. In particular we:
    - Made forkers more observable ([#1773](https://github.com/IntersectMBO/ouroboros-consensus/pull/1773)).
    - Updated the code to reject legacy snapshots ([#1774](https://github.com/IntersectMBO/ouroboros-consensus/pull/1774)).
    - Updated to latest LSM-trees ([#1776](https://github.com/IntersectMBO/ouroboros-consensus/pull/1776)), including dependency updates to allow older `filepath` ([#804](https://github.com/IntersectMBO/lsm-tree/pull/804)) and older `unix` ([#805](https://github.com/IntersectMBO/lsm-tree/pull/805)).
- Fixed a deadlock in the `V1LMDB` mempool implementation ([#1787](https://github.com/IntersectMBO/ouroboros-consensus/issues/1787), [#1798](https://github.com/IntersectMBO/ouroboros-consensus/pull/1798)).
- Resolved a memory leak in benchmarks for the 10.6.1 release ([#1802](https://github.com/IntersectMBO/ouroboros-consensus/pull/1802)).
- Prepared a 10.6.1 node with LSM-trees for [preliminary deployment on a relay](https://github.com/IntersectMBO/cardano-node/tree/js/lsm-10.6.1) to gather performance measurements.
- Successfully compiled an [untested prototype of a node](https://github.com/IntersectMBO/cardano-node/tree/js/multiple-tables) using different tables per block, preparatory work for LedgerHD planned for Node 10.8.
- Modified `cardano-testnet` to support running with `kes-agent`.
- Made progress on migrating Leios demos to `ouroboros-leios`, including traffic control support for network delay and bandwidth configuration in Leios experiments ([#651](https://github.com/input-output-hk/ouroboros-leios/pull/651)). The remaining work involves making sure CI passes and incorporating review feedback.
- Continued work on Node 10.7 integration.
