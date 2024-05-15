---
title: Consensus Team Update
slug: 2024-05-15-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary


- Released Consensus for Node 8.11 ([#1101](https://github.com/IntersectMBO/ouroboros-consensus/pull/1101))
- Improved the Praos chain order:
  - Restricted VRF tiebreaker based on slot distance ([#1047](https://github.com/IntersectMBO/ouroboros-consensus/pull/1047))
  -  Small tweak to the issue number tiebreaker ([#1086](https://github.com/IntersectMBO/ouroboros-consensus/pull/1086))
- Wrote overview on the statistics on the leader schedule ([#1096](https://github.com/IntersectMBO/ouroboros-consensus/pull/1096))
- Integrated robustness refinement for concluding that a node is caught up in the context of bootstrap peers ([#1031](https://github.com/IntersectMBO/ouroboros-consensus/pull/1031))
- The P&T team managed to complete the UTXO-HD benchmarks using the LMDB backend and the [results](https://updates.cardano.intersectmbo.org/2024-05-07-performance-and-tracing#utxo-hd--lmdb) are promising.
- We're working on setting up the Consensus Technical Working Group within Intersect, so if you'd like to participate please reach out to [Damian Nadales](mailto:damian.nadales@iohk.io).
