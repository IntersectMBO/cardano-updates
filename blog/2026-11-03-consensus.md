---
title: Consensus Team Update
slug: 2026-11-03-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios implementation on `main` (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - In the Dijkstra era, block producers now forge endorser blocks from the transactions that do not fit in the ranking block, and write them to the LeiosDB ([#2377](https://github.com/IntersectMBO/ouroboros-consensus/pull/2377), [#2442](https://github.com/IntersectMBO/ouroboros-consensus/pull/2442)).
    - The ChainDB now opens the LeiosDB and drives its garbage collection ([#2431](https://github.com/IntersectMBO/ouroboros-consensus/pull/2431)). The LeiosDB no longer de-duplicates transactions, which makes its schema simpler ([#2370](https://github.com/IntersectMBO/ouroboros-consensus/pull/2370)).
    - Chain selection now checks the Leios certificate of a block when the block arrives. It waits to select the block until the node has the certified endorser block ([#2439](https://github.com/IntersectMBO/ouroboros-consensus/pull/2439), [#2433](https://github.com/IntersectMBO/ouroboros-consensus/pull/2433)).
    - The node now relays Leios votes. It checks each vote once and disconnects from a peer that sends an invalid vote ([#2430](https://github.com/IntersectMBO/ouroboros-consensus/pull/2430)).
    - The Leios decoders now reject oversized hashes and endorser blocks. This ports the fix for audit finding LEI-004 from the prototype ([#2440](https://github.com/IntersectMBO/ouroboros-consensus/pull/2440), [#2458](https://github.com/IntersectMBO/ouroboros-consensus/pull/2458)).
    - The LeiosDB benchmark now measures latency under load instead of throughput ([#2422](https://github.com/IntersectMBO/ouroboros-consensus/pull/2422)).
- Leios prototype (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Released [`rc-2026w43`](https://github.com/input-output-hk/ouroboros-leios/releases/tag/rc-2026w43). The LeiosDB writes endorser blocks faster, and block producers forge certifying blocks in milliseconds instead of up to 0.9 s ([#2449](https://github.com/IntersectMBO/ouroboros-consensus/pull/2449), [#2451](https://github.com/IntersectMBO/ouroboros-consensus/pull/2451)).
    - Released [`rc-2026w44`](https://github.com/input-output-hk/ouroboros-leios/releases/tag/rc-2026w44) with adaptive endorsements. If endorser blocks do not get enough votes, block producers forge smaller ones, so throughput goes down step by step instead of falling back to Praos levels ([#2475](https://github.com/IntersectMBO/ouroboros-consensus/pull/2475), [ouroboros-leios#1152](https://github.com/input-output-hk/ouroboros-leios/issues/1152)).
    - The node now traces the time and cost to validate an endorser block, for our performance models ([#2443](https://github.com/IntersectMBO/ouroboros-consensus/pull/2443)).
- Maintenance and support (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus` 5.3.0.0 ([#2470](https://github.com/IntersectMBO/ouroboros-consensus/pull/2470)). It lowers memory use when the node writes ledger snapshots ([#2467](https://github.com/IntersectMBO/ouroboros-consensus/pull/2467), [#2468](https://github.com/IntersectMBO/ouroboros-consensus/pull/2468)). The forging traces no longer count the mempool snapshot time as block forging time ([#2471](https://github.com/IntersectMBO/ouroboros-consensus/pull/2471)).
    - `cardano-node` no longer reports a false configuration difference for the default LSM database path ([cardano-node#6742](https://github.com/IntersectMBO/cardano-node/pull/6742)).
