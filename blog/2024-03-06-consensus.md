---
title: Consensus Team Update
slug: 2024-03-06-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Completed the rebase of the production libraries for UTXO-HD on 8.9, both in `ouroboros-consensus`, `cardano-api` and `cardano-node`.
- Measured sync and replay times and memory in UTXO-HD. The latest result are reported [here](https://github.com/IntersectMBO/cardano-node/issues/5495).
- [Bugfixed](https://github.com/IntersectMBO/ouroboros-consensus/pull/985) the snapshot interval.
- [Added](https://github.com/IntersectMBO/ouroboros-consensus/pull/983) an extra case to `isIncorrectClaimedFlag` for `Babbage` and `Conway` eras.
- [Added](https://github.com/IntersectMBO/ouroboros-consensus/pull/970) a `db-analyser` analysis to get the UTXO size per slot. The result of the analysis is illustrated [here](https://github.com/IntersectMBO/ouroboros-consensus/pull/970#issuecomment-1981052455).
- Started integration work for Node release 8.10.
- Reviewed the Genesis pull-requests submitted by Tweag. They are pending a final round of review.
- Helped the current release engineer prepare the 8.9 release candidate.
- The Consensus Team has also been helping troubleshoot known issues with 8.9 (eg snapshots causing missed leadership schedules, unexpected snapshot interval, integration tests, etc).
