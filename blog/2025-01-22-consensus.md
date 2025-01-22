---
title: Consensus Team Update
slug: 2025-01-22-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

Our quarterly objectives are now drafted and can be accessed [here](https://github.com/IntersectMBO/ouroboros-consensus/milestone/6).

The team continued working on documentation improvements, enhancing the security of the Consensus layer, and being involved in the early stages of the Peras workstream.

We are updating the UTXO-HD branch to make use of the forward-deserializability of transaction outputs (`TxOut`s) (see [#1360](https://github.com/IntersectMBO/ouroboros-consensus/pull/1360), [#1361](https://github.com/IntersectMBO/ouroboros-consensus/pull/1361), and [#1362](https://github.com/IntersectMBO/ouroboros-consensus/pull/1362)).
We performed a local chain sync with a the latest version of an UTXO-HD enabled node, using the in-memory backend.
