---
title: Consensus Team Update
slug: 2023-08-09-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

This week the Consensus team worked on integrating the latest node release into the UTxO HD branch. Our ad-hoc benchmarks in which we sync a node from scratch showed that the LMDB backend uses around 8GB of memory.  We also released new versions of `fs-sim` and `fs-api`, and released `strict-checked-vars`.

## UTxO-HD

- Rebased UTxO-HD on top of node 8.2 ([issue](https://github.com/input-output-hk/ouroboros-consensus/issues/256))
- Address new `Maybe` translations for UTxOs in Conway 1.6. ([PR](https://github.com/input-output-hk/ouroboros-consensus/pull/261)).
- Performed ad-hoc benchmarking syncs with both implementations. The LMDB backend uses around 8GB of memory. 
- [Fixed](https://github.com/input-output-hk/cardano-node/compare/96e92351ad35cfce1b0c2c47c4ed05792bf81fad..90d4c93af0846c9b027d530c042180c51aeee4fd) an infinite loop on the mempool tracing code that was preventing the node from shutting down gracefully.
- Fixed an infinite loop on the ledger state query for traversing queries that prevented the node from running `QueryUTxOByAddress` ([PR](https://github.com/input-output-hk/ouroboros-consensus/pull/273)).
- Measured the speed of `QueryUTxOByAddress` under different `queryBatchSize` values. There is a significant performance degradation for these queries when using the UTxO-HD version. Using the mainnet UTxO set at slot 90 million, querying an address took 40 seconds using the in-memory backend and 90 seconds using the LMDB backend, whereas the baseline took 7 seconds. We need to investigate if we can improve this situation or whether an external service that runs alongside the node is a better solution.

## Fostering collaboration 

- Drafted a document explaining versioning of local state queries [#273](https://github.com/input-output-hk/ouroboros-consensus/pull/273).
