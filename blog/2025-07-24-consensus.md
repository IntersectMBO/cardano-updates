---
title: Consensus Team Update
slug: 2025-07-24-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Drafted Linear Leios in the Haskell simulator ([#466](https://github.com/input-output-hk/ouroboros-leios/pull/466)).
- Introduced refactorings and optimizations to prepare the code base for weighted chain optimizations, required for Peras ([#1591](https://github.com/IntersectMBO/ouroboros-consensus/pull/1591),
[#1598](https://github.com/IntersectMBO/ouroboros-consensus/pull/1598)).
- Merged a labeling feature into `async` ([#164](https://github.com/simonmar/async/pull/164)) to enable auto-labeling of threads based on a Cabal flag. This is required to ensure thread labeling in `cardano-node` ([#6086](https://github.com/IntersectMBO/cardano-node/issues/6086)), which, in turn, will help debug issues during development.
- Fixed a snapshot deserialization error in Byron
([#1577](https://github.com/IntersectMBO/ouroboros-consensus/pull/1577)).
- Updated `quick-check-state-machine` and `fs-sim` for `QuickCheck 2.16` ([#53](https://github.com/stevana/quickcheck-state-machine/pull/53), [#54](https://github.com/stevana/quickcheck-state-machine/pull/54), [#105](https://github.com/input-output-hk/fs-sim/pull/105)).
- Make `lsm-trees` buildable with IOG's `contra-tracer` ([#776](https://github.com/IntersectMBO/lsm-tree/pull/776)).
- Started integrating LSM trees into `ouroboros-consensus`, aiming at version 10.7 of `cardano-node` ([#1572](https://github.com/IntersectMBO/ouroboros-consensus/pull/1572)).
- Integrated the **stubbed** Dijkstra era into `ouroboros-consensus` ([#1567](https://github.com/IntersectMBO/ouroboros-consensus/pull/1567)).
- Updated the storage tests to the new version of `quickcheck-lockstep` ([#1585](https://github.com/IntersectMBO/ouroboros-consensus/pull/1585)).
- Enabled by [#1585](https://github.com/IntersectMBO/ouroboros-consensus/pull/1585), the Genesis State Machine Tests now use `quickcheck-dynamic` ([#1413](https://github.com/IntersectMBO/ouroboros-consensus/pull/1413)).
