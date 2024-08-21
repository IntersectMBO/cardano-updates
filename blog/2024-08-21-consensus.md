---
title: Consensus Team Update
slug: 2024-08-21-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary


During the past week the team:

- Incorporated minor improvements to the `ChainSync` client test ([#529](https://github.com/IntersectMBO/ouroboros-consensus/issues/529)).
- Documented tasks of a caught-up node ([#1215](https://github.com/IntersectMBO/ouroboros-consensus/pull/1215)), which can be useful for SPOs.
- Tweag presented the last Genesis SoW to the Consensus team. The next steps are reviews and phased (opt-in) rollout.

Regarding the two problems found during UTXO-HD benchmarks, namely, increase in heap size ([#1192](https://github.com/IntersectMBO/ouroboros-consensus/issues/1192)) and a newly found race condition ([#1193](https://github.com/IntersectMBO/ouroboros-consensus/issues/1193)), [#1208](https://github.com/IntersectMBO/ouroboros-consensus/pull/1208) fixed the race condition and was merged, however [#1194](https://github.com/IntersectMBO/ouroboros-consensus/pull/1194) showed no improvements so it will not be merged yet.
