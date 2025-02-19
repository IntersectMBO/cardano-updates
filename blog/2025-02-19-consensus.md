---
title: Consensus Team Update
slug: 2025-02-19-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Added a document that discuses ticking and how its used within the Consensus layer ([#1385](https://github.com/IntersectMBO/ouroboros-consensus/pull/138)). The rendered version of this document can be accessed in our [documentation page](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/Ticking).
- The benchmarks for the UTXO-HD version of Node with the in-memory backend confirmed that its resource usage is on par-with the baseline version of the Node. There is a slight decrease in CPU usage (-9%), and a slight increase in memory consumption (+3%).
- Fixed the mempool snapshotting regression in the UTXO-HD branch (from +185% to -21%) ([#1382](https://github.com/IntersectMBO/ouroboros-consensus/pull/1382)).
- Added a Consensus section to the Cardano Blueprints ([#7](https://github.com/cardano-scaling/cardano-blueprint/pull/7)).
- Held the technical-working group meeting. The recording can be accessed using [this link](https://drive.google.com/file/d/1z1of19KJJD92Gv7Xt9ybC53vC_OqskcM/view). In particular, the importance of the KES agent and its roadmap were discussed during this meeting.
