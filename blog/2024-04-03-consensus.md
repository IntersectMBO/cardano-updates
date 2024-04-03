---
title: Consensus Team Update
slug: 2024-04-03-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- [Made](https://github.com/IntersectMBO/ouroboros-consensus/issues/1009) the `LocalTxMonitor` `HasTx` cross-era behavior less surprising.
- Finalized the tests in `ouroboros-consensus` for the UTXO-HD branch, except the mempool-parallel test which is still failing sometimes.
- [Fixed](https://github.com/stevana/quickcheck-state-machine/pull/43) an upstream complication in `quickcheck-state-machine` related to Parallel state machines which should allow us for an easier and more understandable setup of the parallel mempool tests.
- [Drafted](https://github.com/input-output-hk/quickcheck-dynamic/pull/72) parallel state machine testing infrastructure for `quickcheck-dynamic`. Eventually could be used to replace the QSM infra for mempool parallel tests.
- [Cleaned](https://github.com/IntersectMBO/cardano-api/pull/503) up the `Cardano.API.LedgerState` module, required for UTXO-HD integration.
- We have been working on Node release 8.10. The changes upstream are integrated all the way to Node. Tests and benchmarks are pending. The versions of Consensus, Ledger, and Networking are released, and we will focus next on releasing CLI, API, and finally Node.
