---
title: System Test Team Update
slug: 2023-01-13-system-test
authors: dorin100
tags: [system-test]
hide_table_of_contents: false
---

## High level summary
During the last 2 weeks we did more improvements on our Test Framework, ran some sanity tests related to the _P2P Single
Relay_ functionality.

We also update the Node & DB-Sync sync tets to build with Nix as the prebuilt files are no longer available at PR level.

## Workstreams

### Framework improvements:
- extended the _cardano-node-tests_ with the ability for anybody to fork the repo and [run all our System Tests on GitHub Actions](https://tests.cardano.intersectmbo.org/readme.html)
- added 2 new nightly pipelines - nightly-mixed and nightly-p2p - [details here](https://tests.cardano.intersectmbo.org/test_results/nightly_system_tests.html)
- some optimizations on how our regression tests are scheduled on pytest workers and how cluster instances are assigned to the tests;

`  === 743 passed, 67 skipped, 24 xfailed in 9166.64s (2:32:46) ===
  to
  === 753 passed, 67 skipped, 14 xfailed in 4654.80s (1:17:34) ===`

### Node:
- ran a couple of sanity runs of CLI a& sync tests on a local branch with P2P Single Relay enabled
- started the preparations for testing the next tag - [details here](https://github.com/input-output-hk/cardano-node-tests/blob/tag_test_1.35.5_rc1/src_docs/source/test_results/node/tag_1_35_5_rc1.rst)

### DB-Sync:
- some improvements on db-sync sync tests
