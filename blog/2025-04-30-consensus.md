---
title: Consensus Team Update
slug: 2025-04-30-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Updated the centralized chain-sync-jumping model to allow using it as a substitute for the real model, which will make it easier to troubleshot potential test failures found in our property tests ([#1466](https://github.com/IntersectMBO/ouroboros-consensus/pull/1466)).
- Engaged with Cardano Foundation on the [Antithesis workstream](https://cardano-foundation.github.io/antithesis/kick-off-antithesis/), which will help us widen the test coverage and robustness of the Cardano node.
- Enriched `db-immutaliser` to inspect a VolatileDB ([1482](https://github.com/IntersectMBO/ouroboros-consensus/pull/1482)).
- Released Node 10.4.1, which incorporates the [UTXO-HD feature](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/utxo-hd/Overview/). The default backend will be the in memory one. The LMDB backed is not recommended for block producers, but we encourage users to experiment with it and report their experience.
  - Our [benchmarks](https://updates.cardano.intersectmbo.org/reports/2025-05-performance-10.4.1) show no significant performance degradation, rating it production ready.
    - A small 2% / 5% (169MiB / 389MiB) increase in heap size could be expected.
    - However, this is mitigated by the fact that going from 10.2 to 10.3, we saw a significant reduction in heap size - namely 6% / 14% (579MiB / 1267MiB).
    - 10.4 reduces CPU usage slightly again
    - There is no impact on network performance.
