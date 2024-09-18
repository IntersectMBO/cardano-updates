---
title: Consensus Team Update
slug: 2024-09-18-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Debunked our working theory on the cause of [performance degradation when taking a ledger snapshot](https://github.com/IntersectMBO/ouroboros-consensus/issues/86). We are now back to the UTXO set as the first contributing cause to said degradation, and together with the Ledger team [we have proposed](https://github.com/IntersectMBO/cardano-ledger/issues/4634) a way decrease the number of allocations when serializing the ledger state.
- Developed the first and second draft scripts for estimating the bandwidth necessary to ensure the CPU is the bottleneck when syncing ([#1240](https://github.com/IntersectMBO/ouroboros-consensus/pull/1240)). This is informing us and the Networking Team how to refine `BlockFetch` for the syncing node (especially for Genesis).
- On the UTXO-HD front:
    - After addressing several issues found during benchmarking and testing, the performance team ran benchmarks on the `utxo-hd-9.1` branch, yielding positive results. The nodes function without errors. The memory and CPU usage is almost on par with the `9.1` node.
    - A [tool](https://github.com/IntersectMBO/ouroboros-consensus/pull/1222) has been provided to convert ledger state snapshots from pre-UTxO-HD nodes to UTxO-HD nodes, allowing users to use UTxO-HD right away without needing to replay the chain (since they can use their locally stored ledger state after converting it with the aforementioned tool).
    - The SDET team will run integration tests on the `utxo-hd-9.1` branch. If the tests pass, we will start working on wrapping up the documentation and preparing the branch for merging once it is decided to release this feature.
    - Bear in mind that:
        - This UTxO-HD release uses an LMDB backend (but it also provides an in-memory backend). The LSM-tree backend should arrive Q1 2025.
        - UTxO-HD is just the first step of a bigger initiative for moving parts of the ledger state to the disk storage, lowering the memory requirements of the node and contributing to long term sustainability of Cardano.
