---
title: Consensus Team Update
slug: 2023-06-14-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The Consensus team had a very productive meeting with IOG Researchers. We now seem to be in alignment in regards to a strong argument that the `Byron` and `TPraos` eras do not need to be checkpointed. 
There is one remaining question (which applies also to the `Praos` era): how to assess the threat that short forks pose against historical windows that underperformed? We are currently collaborating on that. We also drafted an argument that the updated "Limit on Patience" timeout sufficiently bounds how long the adversary can inflate a victim's overall sync time.

On the UTxO-HD front, the prototype branch was rebased on top of the latest `cardano-node` `master` branch. As a result, the mempool fairness fix that was released recently is now integrated into UTxO-HD.
We managed to run a node again with UTxO-HD enabled. 
We also identified a race condition in the UTxO-HD prototype and fixed it. In addition, we started performing UTxO-HD ad-hoc benchmarks for `cardano-node`, which uncovered a performance regression on the Network component when using `GHC-9.2/9.4`. This is being addressed.

Regarding our support activities, we Released `fs-sim-0.2.0.0` and are in the process of preparing the 8.2 release of `cardano-node`. We also identified and started fixing incorrectly-unevaluated thunks in preparation for enabling CI NoThunks tests.
