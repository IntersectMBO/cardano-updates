---
title: Performance & Tracing Update
slug: 2024-06-25-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for Node `8.12.0`; `DRep` benchmarks with 100k DReps.
* Development: Merged a performance fix on `8.11`; kicked off development of governance action workload.
* Workbench: Adjusted automations to latest `8.12` Conway features and Plutus cost model; implementation of CIP-69 and CIP-117 for our tooling is in validation phase.
* Tracing: Work on metrics naming ongoing. Factoring out RTView component is completed and has entered testing.
* IOI Tech Meetup: Our team contributed two presentations at the meetup in Zurich; worked on community report of UTxO scaling benchmarks.

## Low level overview


### Benchmarking

We've run and analyzed a full set of release benchmarks for Node versions `8.12.0`. In comparison with the latest mainnet release `8.9.3`, we could not observe any regressions. In fact, `8.12.0` was able to deliver equal network
performance at a slightly reduced resource cost - both for CPU and memory.

Another benchmark of the Conway ledger with large amounts of `DRep`s has been performed. This time, 100000 DReps were chosen - this amount aims to simulate a scenario where lots of self-delegation takes place. While a performance
impact is observable in this instance, we can still see that the number of DReps scales well overall, and poses no concern for network peformance.

### Development

We have contributed and merged a performance fix on `8.11` which adresses a regressing metric in the forging loop. The regression was only observable under specific conditions. Benchmarks on `8.12`
have already confirmed the fix to be successful.  
 
We've kicked off governance action workloads for benchmarking. This will be an entirely new workload type for Conway era, targeting performance measurements of its decentralized decision making process. The workload will feature
registering proposals, acting as multiple DReps to vote on active proposals, vote tallying and proposal enactment. We're very grateful for the Ledger team's helpful support so far in creating a workload design for benchmarking - one that evenly stresses 
the network over extended periods of time.

### Workbench

The workbench automations have been upgraded to handle Node `8.12` and the corresponding integrations of Cardano API and CLI.  

Furthermore, we've updated to the latest PlutusV3 costmodel in our benchmarks - as well as implemented CIP-69 and CIP-117 for all our PlutusV3 benchmarking scripts, pending validation by the Plutus team.

### Tracing

The work on aligning of metrics naming and semantics of new and legacy tracing is ongoing. Additionally, we're adding a handful of metrics to the new tracing system which currently exist in legacy tracing only.

Factoring out the RTView ("real-time view") component of `cardano-tracer` in the new tracing system has finished. This includes a considerable refactoring of `cardano-tracer`'s codebase, so that we're currently running test on the new codebase. Isolating
RTView is due to its being in prototype stage for too long, and the design decisions taken. In the short term, this will make several package dependencies optional, which have become troublesome for CI, as well as making `cardano-tracer` more lightweight.
RTView remains as an opt-in.  

### IOI Tech Meetup

Our entire team traveled to Zurich, Switzerland to attend ZuriHac'24 and the IOI Tech Meetup. It was fantastic to meet everyone in person, and we all had an amazing and very productive time. A big Thank You to everyone involved in making that happen, and making it a success.  

We contributed two presentations for the meetup: a thourough introduction of the new tracing system aimed at developers - as it's not tailored exclusively to `cardano-node`, but can be used in other (Haskell) services as well. And secondly, 
an overview over the benchmarking framework based on Quantitative Timeliness Agreements which we're building - as well as a show-and-tell of our prototype, implementing part of said framework. We're grateful for the great interest and feedback from all
the participants.  

Last not least, we worked on creating a community report of the UTxO scaling benchmarks performed during March and April - to be released soon.
