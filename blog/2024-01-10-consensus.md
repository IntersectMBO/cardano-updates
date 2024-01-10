---
title: Consensus Team Update
slug: 2024-01-10-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

For the past two weeks the Consensus team:

- [Resumed work on implementing](https://github.com/IntersectMBO/ouroboros-consensus/pull/858) the initialization and internals of the second iteration of the in-memory ledger database.
- [Resumed work on integrating](https://github.com/IntersectMBO/ouroboros-consensus/pull/815) the new ledger database API for UTxO HD.
- Simplified query versioning for downstream users ([863](https://github.com/IntersectMBO/ouroboros-consensus/pull/863) and [403](https://github.com/IntersectMBO/cardano-api/pull/403)).
- Confirmed the cause of missed leadership checks due to ledger snapshots ([868](https://github.com/IntersectMBO/ouroboros-consensus/issues/868)).
- Derived principles for the versioning/declaration of queries, since Conway complicates it ([864](https://github.com/IntersectMBO/ouroboros-consensus/issues/864) and [866](https://github.com/IntersectMBO/ouroboros-consensus/issues/866)).
- Unblocked the Node Team in the work on rollback-insensitive leadership schedule queries ([4765](https://github.com/IntersectMBO/ouroboros-network/pull/4765)).
- Drafted the (Pre-Genesis) Bootstrap State Machine ([808](https://github.com/IntersectMBO/ouroboros-consensus/pull/808)).
