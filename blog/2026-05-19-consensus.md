---
title: Consensus Team Update
slug: 2026-05-19-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Landed the first voting capability in the Leios prototype: nodes now diffuse votes over a dedicated mini-protocol and a voting thread casts votes on completed endorser-block closures. This is the foundation for committee-based endorsement and is exercised by new threadnet property tests ([#1963](https://github.com/IntersectMBO/ouroboros-consensus/pull/1963)).
    - Ongoing: reworking the prototype branch ("Leios prototype remake") to target the same `ouroboros-consensus-3.0.1.0` release that ships in `cardano-node` 11.0.1, so downstream consumers building against that node release can pick up Leios without a separate consensus branch ([#2041](https://github.com/IntersectMBO/ouroboros-consensus/pull/2041)).
    - Ongoing: adding *late-join* support, so a node that joins the network after an endorser block was produced can still resolve the resulting certified blocks ([#2040](https://github.com/IntersectMBO/ouroboros-consensus/pull/2040)).
    - Ongoing: replacing the placeholder voting from [#1963](https://github.com/IntersectMBO/ouroboros-consensus/pull/1963) with stake-based committee selection and real BLS signatures, so votes are individually validated before being relayed ([#2039](https://github.com/IntersectMBO/ouroboros-consensus/pull/2039)).
    - Ongoing: performance work on the in-memory Leios database to remove contention and laziness issues that were causing nodes to time out under load ([#2032](https://github.com/IntersectMBO/ouroboros-consensus/pull/2032)).
- LedgerDB cleanup (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Retired the V1 LedgerDB implementation and the LMDB backing store. V2 has been the default for some time; removing V1 deletes a large amount of now-unreachable code, drops the LMDB dependency, and simplifies the LedgerDB API (for example, snapshots no longer block the caller, and the `tryFlush` no-op is gone) ([#2030](https://github.com/IntersectMBO/ouroboros-consensus/pull/2030)). This paves the way for adding more tables to the ledger state, enabling them to be stored on disk.
