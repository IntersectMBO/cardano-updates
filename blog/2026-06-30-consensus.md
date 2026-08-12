---
title: Consensus Team Update
slug: 2026-06-30-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Chain selection and the volatile database now handle ranking blocks and Endorser Blocks that arrive out of order. A certifying ranking block that arrives before the Endorser Block it certifies is stored but held back from chain selection until the Endorser Block shows up. A new header bit also lets a syncing node fetch Endorser Blocks that were certified on the historical chain ([#2076](https://github.com/IntersectMBO/ouroboros-consensus/pull/2076)).
    - Fixed a bug where the LeiosFetch budget leaked when a peer disconnected. Requests in flight at the time of the disconnect were never cleared, so their share of the budget was never returned, and a node could eventually stop fetching altogether. This is a plausible cause of the forks seen recently on the testnet ([#2083](https://github.com/IntersectMBO/ouroboros-consensus/pull/2083)).
    - Corrected Endorser Block application to take the slot from the provided ledger state ([#2085](https://github.com/IntersectMBO/ouroboros-consensus/pull/2085)).
    - Voting and certification now happen over the announcing ranking block hash ([#2086](https://github.com/IntersectMBO/ouroboros-consensus/pull/2086)).
    - The `db-synthesizer` config parser now honors `ExperimentalHardForksEnabled`, so experimental hard forks can be enabled when generating synthetic chains ([#2077](https://github.com/IntersectMBO/ouroboros-consensus/pull/2077)).
    - Made the proto-devnet demo start up more reliably by holding back the transaction generator until the nodes are ready, and reduced the tip-observation frequency for the secondary nodes ([ouroboros-leios#942](https://github.com/input-output-hk/ouroboros-leios/pull/942), [ouroboros-leios#943](https://github.com/input-output-hk/ouroboros-leios/pull/943)).
- LSM-trees and UTxO-HD (Treasury Funding Initiative 10: LSM including UTXO-HD):
    - Reworked the snapshot-converter into a command tree. It now offers a daemon mode that watches a node's snapshot directory and converts each exported LSM snapshot into the portable in-memory format as it is produced, a one-shot conversion in either direction, and commands to move snapshots in and out of an offline LSM database. This supports the Mithril workflow, where signers need snapshots in a single agreed format ([#2064](https://github.com/IntersectMBO/ouroboros-consensus/pull/2064)).
- Documentation (Treasury Funding Initiative 17: Maintenance and Support):
    - Added configuration documentation to the consensus website ([#2065](https://github.com/IntersectMBO/ouroboros-consensus/pull/2065)).
    - Minor improvements to the Genesis documentation ([#1916](https://github.com/IntersectMBO/ouroboros-consensus/pull/1916)).
