---
title: Consensus Team Update
slug: 2025-02-05-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Opened a [Draft PR](https://github.com/cardano-foundation/CIPs/pull/974) for a CIP to remove EBBs from the historical chain.
- Opened a [Draft PR](https://github.com/cardano-foundation/CIPs/pull/982) for a CPS regarding low participation scenarios.
- Identified the threads in Cardano node which were unlabeled ([#6086](https://github.com/IntersectMBO/cardano-node/issues/6086)). We're working to add the missing labels, which will help with debugging and error tracing efforts.
- Got the results for the UTxO-HD V2 InMemory cluster run, which show that there is a regression in mempool snapshotting. Investigation is ongoing.
- Fixed the block replay tracer in the new tracing system ([#6091](https://github.com/IntersectMBO/cardano-node/pull/6091)).
- Adapted UTXO-HD to take advantage of the fact that `TxOut`s are forward deserializable ([#1360](https://github.com/IntersectMBO/ouroboros-consensus/pull/1360)).
- Merge PRs upstream to enable the new `QueryStakePoolDefaultVote` ([#5055](https://github.com/IntersectMBO/ouroboros-network/pull/5055), [#4860](https://github.com/IntersectMBO/cardano-ledger/pull/4860), and [#1373]( https://github.com/IntersectMBO/ouroboros-consensus/pull/1373)).
- Merged `LocalTxMonitor` changes into `network-protocols`, which constitutes a first step towards enabling the `LocalTxMonitor` to report other dimensions of the transaction size.
- Completed first pass at a script cataloguing all of the consensus symbols used in downstream packages, as part of our contributions to the Cardano Blueprint efforts.
