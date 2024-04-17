---
title: Consensus Team Update
slug: 2024-04-17-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- [Implemented](https://github.com/IntersectMBO/ouroboros-consensus/pull/955) the new diffusion pipelining criterion.
- Presented, reviewed and merged the March [milestone](https://github.com/IntersectMBO/ouroboros-consensus/pull/1015) for Genesis.
- [Integrated](https://github.com/IntersectMBO/cardano-node/pull/5774) latest changes into Node version 8.10.
- Regarding the UTXO-HD feature we:
  - Completed fixes in test-suites from `cardano-node`, `cardano-api`, and `ouroboros-consensus`. All tests are passing in latest prototype.
  - Prepared UTXO-HD prototype for LMDB benchmarking.
  - [Fixed](https://github.com/IntersectMBO/cardano-node/pull/5768) tracing in `cardano-node`.
  - Started merging code from the UTXO-HD branch into `main` ([1053](https://github.com/IntersectMBO/ouroboros-consensus/pull/1053), [1052](https://github.com/IntersectMBO/ouroboros-consensus/pull/1052), and [1054](https://github.com/IntersectMBO/ouroboros-consensus/pull/1054)).
- We're currently working on getting rid of `NoThunks` errors in Consensus, so that we can enable these tests in CI, for extra assurance.
