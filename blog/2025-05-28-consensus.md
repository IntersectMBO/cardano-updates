---
title: Consensus Team Update
slug: 2025-05-28-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Continuing onboarding to the Leios simulator and participating in the Leios working sessions to provide feedback and ask questions to the research team.
- Fixed two bugs in the V2 `LedgerDB` in preparation for LSM tree integration ([#1515](https://github.com/IntersectMBO/ouroboros-consensus/issues/1515), [#1516](https://github.com/IntersectMBO/ouroboros-consensus/pull/1516)).
- Fixed bugs in `db-analyser --store-ledger` ([#1512](https://github.com/IntersectMBO/ouroboros-consensus/pull/1512)).
- Fixed Ledger CDDL specifications ([#5079](https://github.com/IntersectMBO/cardano-ledger/pull/5079), [#5073](https://github.com/IntersectMBO/cardano-ledger/pull/5073), [#5066](https://github.com/IntersectMBO/cardano-ledger/pull/5066), [#5057](https://github.com/IntersectMBO/cardano-ledger/pull/5057)) as a result of our work on providing CDDLs for Consensus.
- Started integration work in preparation for the `lsm-tree` backing, as detailed in [#1526](https://github.com/IntersectMBO/ouroboros-consensus/issues/1526).
