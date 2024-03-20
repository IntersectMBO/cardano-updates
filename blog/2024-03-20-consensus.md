---
title: Consensus Team Update
slug: 2024-03-20-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- [Merged](https://github.com/input-output-hk/fs-sim/pull/46) the alternative `fs-api` interface for I/O using user-supplied buffers. This feature is important because it defines lower-level primitives for the filesystem API, which opens op avenues for more use cases and more efficient I/O operations (for instance when implementing `lsm-tree`, which is part of our efforts to move the ledger state to disk).  This feature has not been released yet.
- [Implemented](https://github.com/IntersectMBO/ouroboros-consensus/pull/955) new diffusion pipelining criterion .
- Released Consensus packages containing backports for Node `8.9.1`.
- Focused on fixing the tests for `ouroboros-consensus` in the UTXO-HD branch. Work is ongoing.
