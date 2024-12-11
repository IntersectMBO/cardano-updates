---
title: Consensus Team Update
slug: 2024-12-11-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Well-Typed held a new milestone presentation, where they showed the progress in two important features:
    - Snapshots (for persisting ledger snapshots)
    - Table union (for storing more parts of the ledger state on disk)
- Finished the UTXO-HD code review work. Since this feature could have a performance impact, we need to run a new set of system-level benchmarks before we can merge it. The next steps are detailed [in this comment](https://github.com/IntersectMBO/cardano-node/issues/5918#issuecomment-2531556742).
- Submitted a request to the Technical Steering Committee on how the node should handle low apparent participation.
- Added support for computing and checking CRCs of ledger state snapshots, which increases robustness when loading this data from disk ([#1319](https://github.com/IntersectMBO/ouroboros-consensus/pull/1319)).
