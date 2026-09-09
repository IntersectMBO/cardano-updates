---
title: Consensus Team Update
slug: 2026-09-08-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Rewrote the logic that decides which Leios data to download from which peer. A node now bounds both the time it spends on each decision and the memory it holds for pending downloads. It also prioritises the newest Endorser Blocks, and randomises the order in which it asks for missing transactions, so that several requests do not saturate the same limits at once ([#2237](https://github.com/IntersectMBO/ouroboros-consensus/pull/2237), for [ouroboros-leios#1021](https://github.com/input-output-hk/ouroboros-leios/issues/1021)).
    - Added a cache that holds the transactions of recent Endorser Blocks. A node that already saw a transaction does not need to download it again. The download logic reads from this cache and from the mempool ([#2188](https://github.com/IntersectMBO/ouroboros-consensus/pull/2188), for [ouroboros-leios#1021](https://github.com/input-output-hk/ouroboros-leios/issues/1021)).
    - Fixed a second cause of unwanted disconnects between honest nodes. A syncing node has a chain tip that is too old to check young Leios messages. Such a node now stops asking for those messages until it catches up, instead of rejecting the replies ([#2255](https://github.com/IntersectMBO/ouroboros-consensus/pull/2255), [cardano-node#6673](https://github.com/IntersectMBO/cardano-node/pull/6673)).
    - Capped the time the mempool spends to read a ledger state from disk. A block producer that waits on disk no longer delays the forging of its own block past its slot ([#2217](https://github.com/IntersectMBO/ouroboros-consensus/pull/2217), for [ouroboros-leios#911](https://github.com/input-output-hk/ouroboros-leios/issues/911)).
    - Extended the call tracing of the block forging and chain selection threads, and improved the dashboard that shows the results. This tells us where a prototype node spends its time on the Leios devnet ([#2183](https://github.com/IntersectMBO/ouroboros-consensus/pull/2183), [ouroboros-leios#1088](https://github.com/input-output-hk/ouroboros-leios/pull/1088), for [ouroboros-leios#911](https://github.com/input-output-hk/ouroboros-leios/issues/911)).
    - Moved the classification and rendering of Leios trace messages from `cardano-node` into the consensus layer. We can now add or change a Leios trace message without a matching change in `cardano-node` ([#2263](https://github.com/IntersectMBO/ouroboros-consensus/pull/2263)).
    - Integrated the two changes above into the prototype node used on the devnet ([cardano-node#6681](https://github.com/IntersectMBO/cardano-node/pull/6681)).
- Storage layer (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Ledger state garbage collection now runs in its own thread. Before this change, the delay before a snapshot also blocked garbage collection, so a node kept every ledger state in memory until the snapshot completed ([#2227](https://github.com/IntersectMBO/ouroboros-consensus/pull/2227)).
    - Turned off IO wait accounting on the LSM storage backend. The accounting itself was a source of measurement error, see [well-typed/blockio-uring#55](https://github.com/well-typed/blockio-uring/issues/55) ([#2247](https://github.com/IntersectMBO/ouroboros-consensus/pull/2247)).
- Maintenance and support (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus` 4.2.0.0 ([#2242](https://github.com/IntersectMBO/ouroboros-consensus/pull/2242)).
    - Fixed a silent failure in the `GetGenesisConfig` query. Version 1.19.0.0 of `cardano-ledger-shelley` added a field to the Shelley genesis record without a change to the node-to-client protocol version. A client that linked the new ledger then waited forever for bytes that a node with the old ledger never sends. `cardano-wallet` hit this against node 11.0.1 and stopped following the chain. The query now sends the original 15 fields again, and the decoder accepts a reply from an already deployed node, so a client needs no node upgrade. The fix shipped in `ouroboros-consensus` 4.2.1.0 ([#2251](https://github.com/IntersectMBO/ouroboros-consensus/pull/2251), [#2257](https://github.com/IntersectMBO/ouroboros-consensus/pull/2257), [#2258](https://github.com/IntersectMBO/ouroboros-consensus/pull/2258)).
