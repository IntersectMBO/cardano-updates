---
title: Consensus Team Update
slug: 2024-09-04-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Added a [snapshot-converter tool](https://github.com/IntersectMBO/ouroboros-consensus/pull/1222), which will be merged soon.
This tool converts non-UTXO-HD ledger snapshots, into UTXO-HD ones, so that the user does not have to replay from Genesis when using an UTXO-HD capable node.
This patch also solves an issue with deserialization of `TxOuts` in `Conway` in the UTxO-HD implementation.
- [Solved](https://github.com/IntersectMBO/ouroboros-consensus/pull/1232) a memory leak in the UTxO-HD implementation. This patch will be benchmarked this week.
- Wrote a [test](https://github.com/IntersectMBO/ouroboros-consensus/pull/1230) for adding large txs to the mempool.
- [Expanded](https://github.com/IntersectMBO/ouroboros-consensus/pull/1175) the Mempool capacity beyond just byte size.
- @amesgen discovered and advised on a Conway ledger snapshot deserialization bug.
