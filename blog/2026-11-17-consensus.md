---
title: Consensus Team Update
slug: 2026-11-17-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios implementation on `main` (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - The LeiosDB now stores each endorser block as one row per point, with its body and transactions as stored bytes. Before, it wrote two rows per transaction, so a full endorser block touched tens of thousands of rows ([#2424](https://github.com/IntersectMBO/ouroboros-consensus/pull/2424)).
    - The LeiosFetch server now sends an endorser block as the bytes that it stored, without a decode. This changes the wire format of `MsgLeiosBlock` ([#2495](https://github.com/IntersectMBO/ouroboros-consensus/pull/2495)).
    - The port of the fetch logic from the prototype continues. We added the pure decision logic of LeiosFetch ([#2491](https://github.com/IntersectMBO/ouroboros-consensus/pull/2491)) and the interface that tells other node components when an endorser block arrives ([#2521](https://github.com/IntersectMBO/ouroboros-consensus/pull/2521)).
    - The limits on the age of the announcements that a node relays or accepts are now configurable. Test networks need smaller limits, because their immutable tip is only minutes old ([#2489](https://github.com/IntersectMBO/ouroboros-consensus/pull/2489)).
    - The node now aggregates the votes that it relays into a certificate when they reach quorum. It traces each announcement that misses quorum by its deadline ([#2459](https://github.com/IntersectMBO/ouroboros-consensus/pull/2459)).
    - The mempool reserves room for an endorser block only when the Leios committee has enough stake with registered voting keys. Until then, the mempool behaves as it does in Praos ([#2482](https://github.com/IntersectMBO/ouroboros-consensus/pull/2482), and [#2481](https://github.com/IntersectMBO/ouroboros-consensus/pull/2481) for the prototype).
- Leios prototype (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - A second version of adaptive endorsements. If an endorser block misses its quorum, block producers make the next ones smaller. Each endorser block that reaches its quorum adds a small amount of capacity back ([#2480](https://github.com/IntersectMBO/ouroboros-consensus/pull/2480)).
    - The fetch client now writes to the LeiosDB synchronously, which removes a class of race conditions. Block producers no longer fetch their own endorser blocks from peers ([#2477](https://github.com/IntersectMBO/ouroboros-consensus/pull/2477)).
    - We fixed a memory spike in the LeiosNotify server ([#2500](https://github.com/IntersectMBO/ouroboros-consensus/pull/2500)).
- Maintenance and support (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus` 5.4.0.0 with support for the new ledger release ([#2487](https://github.com/IntersectMBO/ouroboros-consensus/pull/2487)).
    - Released `ouroboros-consensus` 5.4.0.1. In this release, the LSM backend no longer counts its wait time as IOWAIT, so node metrics show the real disk wait ([#2518](https://github.com/IntersectMBO/ouroboros-consensus/pull/2518), [#2519](https://github.com/IntersectMBO/ouroboros-consensus/pull/2519)).
