---
title: Consensus Team Update
slug: 2024-11-13-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Reviewed the [UTxO HD PR](https://github.com/IntersectMBO/ouroboros-consensus/pull/1267), and started addressing Review comments.
- Engaged with Researchers about to discuss the HFC simplification proposal.
- Reverted the `Babbage->Conway` era transition workaround, clarifying the semantics around stake from pointer addresses (see [#1297](https://github.com/IntersectMBO/ouroboros-consensus/pull/1297)).
- Well-Typed worked on two features for lsm-tree:
    - snapshots (for persisting ledger snapshots)
    - table union (for storing more parts of the ledger state on disk)
- Addressed minor tech debt issues ([#1269](https://github.com/IntersectMBO/ouroboros-consensus/pull/1269)).
