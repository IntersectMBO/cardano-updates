---
title: Consensus Team Update
slug: 2024-10-30-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Investigated performance improvements in mempool snapshotting in recent node benchmarks and [discussed potential further improvements](https://github.com/IntersectMBO/ouroboros-consensus/issues/568#issuecomment-2432329822).
- Started the review of the UTXO-HD [feature branch](https://github.com/IntersectMBO/ouroboros-consensus/pull/1267) after all the issues have been resolved.
- Published [`io-classes-extra`](https://github.com/IntersectMBO/io-classes-extra), which hosts concurrency utilities that were extracted from the consensus repository.
- Elaborated the [plan](https://github.com/IntersectMBO/ouroboros-consensus/milestone/5) for the last quarter of 2024. You can reach out to our [Discord channel](https://discord.com/channels/1136727663583698984/1239889178938966016) for any comments or suggestions.
- In the context of UTXO-HD, Well-typed presented another LSM-tree milestone. The implementation includes incremental merges, which prevents substantial spikes in resource usage (CPU, disk, memory), and duplicating table handles, which is crucial for efficiently representing sequences of ledger states. The test coverage of the LSM-tree library was improved as well.
