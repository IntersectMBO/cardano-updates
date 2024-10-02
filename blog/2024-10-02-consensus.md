---
title: Consensus Team Update
slug: 2024-10-02-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

Over the past two weeks, we worked on establishing a first baseline for the Consensus QTA ([#1256](https://github.com/IntersectMBO/ouroboros-consensus/issues/1256)).
This work is also helping inform discussions with the Networking team about sync performance goals in general and for specific improvements, such as Genesis.

UTXO-HD was rebased atop `main` and the [tests are passing](https://tests.cardano.intersectmbo.org/test_results/node/utxo_hd_9_1_1.html).

Finally, the team has also worked to improve the Consensus layer's robustness and security.
