---
title: Consensus Team Update
slug: 2023-11-29-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The Consensus team implemented and tested a [patch](https://github.com/input-output-hk/ouroboros-consensus/pull/525) that does not propagate future headers.
It is under review, and we expect it can be released in the next Cardano node version.
On the UTxO-HD front, we [finished](https://github.com/input-output-hk/ouroboros-consensus/issues/510) prototyping the `LedgerDB` and `BackingStore` redesign, which is required for the LSM-tree integration and might help us implement a more resource efficient in-memory backend.
With this prototype finished we can start integrating the rest of the code.
We [investigated](https://github.com/input-output-hk/ouroboros-consensus/pull/513) the unexpected performance degradation observed when acquiring the block context.
