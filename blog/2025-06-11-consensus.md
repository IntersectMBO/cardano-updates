---
title: Consensus Team Update
slug: 2025-06-11-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Posed various clarifying "low-level" questions to the rest of the Leios Team after catching up on the Leios protocol and ledger designs. For the Consensus Team, the next step is to add transactions to the Haskell Leios simulator.
- Fixed Ledger CDDLs ([#5085](https://github.com/IntersectMBO/cardano-ledger/issues/5085), [#5109](https://github.com/IntersectMBO/cardano-ledger/issues/5109)).
- Fixed encoding of `WithOrigin` in the `TPraos` ledger state snapshot ([#1535](https://github.com/IntersectMBO/ouroboros-consensus/issues/1535)).
- Implemented a `cddl` validator in Cuddle ([#68](https://github.com/input-output-hk/cuddle/issues/68)) and released `cuddle` [`0.5.0.0`](https://chap.intersectmbo.org/package/cuddle-0.5.0.0/).
- Prevented a race condition when snapshotting LedgerDB.V2 ([#1555](https://github.com/IntersectMBO/ouroboros-consensus/pull/1555)).
- Assessed the proposed VRF tiebreaker change ([#1548](https://github.com/IntersectMBO/ouroboros-consensus/pull/1548)). An analysis of the effects of using the leader VRF as the tiebreak VRF can be found [here](https://hackmd.io/hX7q5s8JSKSP-j3525J0bA). We encourage community members who wish to discuss this change to join our next Technical Working Group meeting on Thursday, June 19, at 14:30 UTC.
