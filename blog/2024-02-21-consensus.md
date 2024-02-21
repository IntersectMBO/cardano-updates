---
title: Consensus Team Update
slug: 2024-02-21-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Triaged an [issue](https://github.com/IntersectMBO/ouroboros-consensus/issues/952) where blocks were unnecessarily downloaded, and coded a prototype for a partial solution.
- Discovered an [io-sim](https://github.com/input-output-hk/io-sim) bug while developing the [Genesis state machine tests](https://github.com/IntersectMBO/ouroboros-consensus/pull/808). The bug was already fixed upstream.
- Added support for making the number of ledger state snapshots to be kept [configurable](https://github.com/IntersectMBO/ouroboros-consensus/pull/943). This needs to be integrated in the node.
