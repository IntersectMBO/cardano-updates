---
title: Consensus Team Update
slug: 2026-06-16-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Mithril integration (Treasury Funding Initiative 8: Mithril):
    - A node running on an on-disk backend can now also write a snapshot in the portable in-memory format when given an export path. Mithril signers need a single agreed format to sign, and this lets them get it straight from the node instead of running a separate conversion tool. This is the first part of [#1574](https://github.com/IntersectMBO/ouroboros-consensus/issues/1574); the export format is not fully complete yet, as it still needs some fixes on the LSM-trees side ([#2053](https://github.com/IntersectMBO/ouroboros-consensus/pull/2053)).
    - Added a snapshot policy for Mithril that makes the timing of ledger-state snapshots predictable, using cadence values agreed with the Mithril team. Predictable snapshots let signers agree on the same state to sign ([#2063](https://github.com/IntersectMBO/ouroboros-consensus/pull/2063)).
- Maintenance and tooling (Treasury Funding Initiative 17: Maintenance and Support):
    - `db-analyser` can now start an analysis from a snapshot at a chosen slot. Given `--analyse-from`, it picks the newest snapshot at or before that slot and replays only the blocks needed to reach it, instead of always replaying from genesis ([#2061](https://github.com/IntersectMBO/ouroboros-consensus/pull/2061)).
    - Fixed a rare corner case where a snapshot taken at the same slot as the immutable database tip, on an epoch boundary block, triggered an error. The node now discards the snapshot in that situation ([#2070](https://github.com/IntersectMBO/ouroboros-consensus/pull/2070)).
- Documentation (Treasury Funding Initiative 17: Maintenance and Support):
    - Full-text search is now available on the consensus documentation website. The search index is built into the site as static files, so it needs no external service ([#2059](https://github.com/IntersectMBO/ouroboros-consensus/pull/2059)).
