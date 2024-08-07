---
title: Consensus Team Update
slug: 2024-08-07-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The Consensus team started working on the goals for the third quarter of 2024, which can be found [here](https://github.com/IntersectMBO/ouroboros-consensus/milestone/4).


- Improved behavior of `db-truncater` ([#1203](https://github.com/IntersectMBO/ouroboros-consensus/pull/1203)).
- Exposed more information on `EmptySlot` error ([#1196](https://github.com/IntersectMBO/ouroboros-consensus/pull/1196)).
- Added a trace message when the Consensus database is not clean ([#1198](https://github.com/IntersectMBO/ouroboros-consensus/pull/1198)).
- Added support for storing immutable and volatile databases in different paths ([#1199](https://github.com/IntersectMBO/ouroboros-consensus/pull/1199)).

We're also working on rebasing the UTXO-HD feature branch atop 9.1. The benchmarks of the in-memory showed an increase in heap size ([#1192](https://github.com/IntersectMBO/ouroboros-consensus/issues/1192)) and exposed a race condition ([#1193](https://github.com/IntersectMBO/ouroboros-consensus/issues/1193)). There are proposed fixes which will be benchmarked once they are integrated into the feature branch:
- Heap size increase mitigation: [#1194](https://github.com/IntersectMBO/ouroboros-consensus/pull/1194).
- Forkers race condition fix: [#1208](https://github.com/IntersectMBO/ouroboros-consensus/pull/1208).
