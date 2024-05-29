---
title: Consensus Team Update
slug: 2024-05-29-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Updated UTXO-HD to use simple diffs which drastically improved the mempool benchmarks ([#1114](https://github.com/IntersectMBO/ouroboros-consensus/issues/1114)).
- Helped `quickcheck-state-machine` to release version 0.10.0 ([#48](https://github.com/stevana/quickcheck-state-machine/pull/48)). We rely on this library for our high-assurance property-tests.
- Rebased UTXO-HD on top of node 8.11 ([#1121](https://github.com/IntersectMBO/ouroboros-consensus/pull/1121)). A replay with the in-memory backend took 5:05 hours up to slot 124M.
