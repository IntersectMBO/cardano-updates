---
title: Consensus Team Update
slug: 2024-10-16-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary


- Released `diff-containers-1.3.0.0`, `fingertree-rm-1.0.0.3`, `cardano-lmdb-0.4.0.2`, and `cardano-lmdb-simple-0.7.0.1`.
- Improved `IOSim`:
    - Added `MonadLabelledMVar` ([176](https://github.com/input-output-hk/io-sim/pull/176)).
    - Improved the `Show` instance of `ScheduleMod` ([175](https://github.com/input-output-hk/io-sim/pull/175)).
    - Ensure labels are printed where possible in `IOSimPOR` ([174](https://github.com/input-output-hk/io-sim/pull/174)).
- Released Consensus packages for `Node 10.0`.
- Simplified Cardano hard fork triggers ([1282](https://github.com/IntersectMBO/ouroboros-consensus/pull/1282).
- Decreased max permissible clock skew for headers from the future from 5s to 2s ([1279](https://github.com/IntersectMBO/ouroboros-consensus/pull/1279)).
