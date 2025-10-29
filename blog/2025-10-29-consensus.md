---
title: Consensus Team Update
slug: 2025-10-29-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- The team showed the prototype described in [#1701](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701) during the Leios monthly Demo.
- For Peras, [#1678](https://github.com/IntersectMBO/ouroboros-consensus/pull/1678) was merged after review with the Consensus team. The [October demo](https://github.com/tweag/cardano-peras/blob/main/demo/README.md#2025-10-27) was also completed.
- Consensus patched versions for node 10.6 were released ([#1729](https://github.com/IntersectMBO/ouroboros-consensus/pull/1729)), which include making Dijkstra genesis optional ([#1725](https://github.com/IntersectMBO/ouroboros-consensus/pull/1725)) and streaming ledger tables in the snapshot converter ([#1728](https://github.com/IntersectMBO/ouroboros-consensus/pull/1728)).
- Resource-registry 0.2.0.0 was released ([io-classes-extra#11](https://github.com/IntersectMBO/io-classes-extra/pull/11)), which adds transferRegistry ([io-classes-extra#9](https://github.com/IntersectMBO/io-classes-extra/pull/9)) and releases threads before closing ([io-classes-extra#10](https://github.com/IntersectMBO/io-classes-extra/pull/10)).
- CHaP's update ensures in-future packages cannot be released ([cardano-haskell-packages#1159](https://github.com/IntersectMBO/cardano-haskell-packages/pull/1159)).
- Work is ongoing to enable randomized snapshot delays.
