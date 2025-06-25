---
title: Consensus Team Update
slug: 2025-06-25-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High-level summary

- Added support for late input block inclusion in the Haskell implementation of the Leios simulator ([#413](https://github.com/input-output-hk/ouroboros-leios/pull/413)).
- Held the Consensus Working Group call ([recording](https://drive.google.com/file/d/1k5POQe05Ov2G0JKZdlB_tO-I_N04FADO/view?usp=sharing)), where we discussed the tie-breaker change proposed in [#1548](https://github.com/IntersectMBO/ouroboros-consensus/pull/1548). A request for comments has been submitted to the Technical Steering Committee.
- Released [`cuddle`](https://hackage.haskell.org/package/cuddle) on Hackage.
- Optimized handle usage in the on-disk backend of UTxO-HD ([#1563](https://github.com/IntersectMBO/ouroboros-consensus/pull/1563)) and exposed a configuration option for setting the maximum number of open handles ([#6256](https://github.com/IntersectMBO/cardano-node/pull/6256)).
- Incorporated further improvements to resource management in UTxO-HD ([#1564](https://github.com/IntersectMBO/ouroboros-consensus/pull/1564)).
- Implemented a new query to retrieve the maximum major protocol version supported by the code ([#1562](https://github.com/IntersectMBO/ouroboros-consensus/pull/1562)).
- Introduced new versions of `GetPoolDistr` and `GetStakeDistribution` queries, now returning additional information ([#1540](https://github.com/IntersectMBO/ouroboros-consensus/pull/1540)).
