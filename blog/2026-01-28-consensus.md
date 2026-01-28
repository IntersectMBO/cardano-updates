---
title: Consensus Team Update
slug: 2026-01-28-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Continued work on Node 10.7 integration and release (Treasury Funding Initiative 17: Maintenance and Support).
- Added defensive programming logic to the mempool ([#1831](https://github.com/IntersectMBO/ouroboros-consensus/pull/1831)), backported it via a CHaP release for cardano-node 10.6.2 ([#1216](https://github.com/IntersectMBO/cardano-haskell-packages/pull/1216)), and drafted corresponding EKG counters for the 10.6.2 release engineer to use ([#6420](https://github.com/IntersectMBO/cardano-node/pull/6420)) (Treasury Funding Initiative 17: Maintenance and Support).
- Prototyped Leios EB (Endorsement Block) production, advancing the implementation of the Leios protocol ([#690](https://github.com/input-output-hk/ouroboros-leios/issues/690)). Successfully forged EBs and integrated them with the [proto-devnet](https://github.com/input-output-hk/ouroboros-leios/tree/main/demo/proto-devnet), complete with Grafana dashboards (Treasury Funding Initiative 4: Ouroboros Leios Implementation, MS4.6).
- Working on optimizations for the centralized TxSubmission logic ([#1444](https://github.com/IntersectMBO/ouroboros-consensus/issues/1444)) (Treasury Funding Initiative 17: Maintenance and Support).
- Released `kes-agent` and `kes-agent-crypto` version 1.0 (Treasury Funding Initiative 9: KES Agent, MS9.7).
