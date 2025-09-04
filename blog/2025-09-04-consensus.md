---
title: Consensus Team Update
slug: 2025-09-04-consensus
authors: fraser-iohk
tags: [consensus]
hide_table_of_contents: false
---

## High-level summary

Over the last two weeks, the team has been working on the first public draft of the Leios CIP, LSM-tree support, and the KES agent integration and audit.

- Contributed text and review to the first public draft of the Leios CIP: https://github.com/cardano-scaling/CIPs/pull/11
- Released cardano-lmdb-simple 0.8.1.0 with features to support range reading keys from LMDB in which the Haskell order does not match the Serialized order: https://chap.intersectmbo.org/package/cardano-lmdb-simple-0.8.1.0/
- Fixed leaking handles in uncommitted forkers. This should in particular help with queries, which were presumably leaving behind open handles: https://github.com/IntersectMBO/ouroboros-consensus/pull/
1640
- Refactored consensus-internal code to group snapshot-related functions into a `SnapshotManager` in preparation for LSM-trees: https://github.com/IntersectMBO/ouroboros-consensus/pull/1643
