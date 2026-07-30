---
title: Consensus Team Update
slug: 2026-07-28-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype and testnet (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Cut a new prototype release, `prototype-2026w29`, carrying this fortnight's work across the node and the Leios repository ([#6621](https://github.com/IntersectMBO/cardano-node/pull/6621), [#996](https://github.com/input-output-hk/ouroboros-leios/pull/996)).
    - Landed the change that lets the node certify and announce endorser blocks inside the forging loop, so it no longer misses chances to certify. This is expected to raise the certification rate and throughput ([#2105](https://github.com/IntersectMBO/ouroboros-consensus/pull/2105)).
    - Added CallTrace instrumentation to the Forge thread, making it easier to trace and profile block production in the prototype ([#2126](https://github.com/IntersectMBO/ouroboros-consensus/pull/2126)).
    - Taught the LeiosNotify mini protocol to accept but ignore the proper `MsgLeiosBlockAnnouncement` message, a step towards the full block-announcement flow ([#2142](https://github.com/IntersectMBO/ouroboros-consensus/pull/2142), integrated into the node in [#6624](https://github.com/IntersectMBO/cardano-node/pull/6624)).
    - Enriched `typed-protocols` to give more precise back pressure for pipelined mini protocols, motivated by the new LeiosNotify protocol ([#93](https://github.com/IntersectMBO/typed-protocols/pull/93)).
    - Improved testnet stability by stopping the node from mangling some Dijkstra blocks, a quick workaround while a ledger issue is fixed ([#2140](https://github.com/IntersectMBO/ouroboros-consensus/pull/2140), for [cardano-ledger#5937](https://github.com/IntersectMBO/cardano-ledger/issues/5937)).
    - Updated the prototype dashboards and added a graph of recent endorser-block events, making the testnet easier to observe ([#990](https://github.com/input-output-hk/ouroboros-leios/pull/990), [#992](https://github.com/input-output-hk/ouroboros-leios/pull/992)).
- Mempool design for Leios (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Wrote up Mempool design considerations for Leios ([#997](https://github.com/input-output-hk/ouroboros-leios/pull/997)).
    - Took part in discussions on how the Mempool should work: its current requirements, a "high-throughput mempool", and a "tiered-pricing mempool" in which transactions that pay more can queue ahead of normal-paying ones when they do not conflict.
- Storage and snapshots (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Set the node's default snapshot policy to match Mithril's snapshot policy, so the two stay aligned ([#2149](https://github.com/IntersectMBO/ouroboros-consensus/pull/2149)).
    - Added a new `LSMExportPath` configuration option, letting operators control where LSM data is exported ([#6629](https://github.com/IntersectMBO/cardano-node/pull/6629)).
