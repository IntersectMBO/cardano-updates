---
title: Performance & Tracing Update
slug: 2025-04-15-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: `10.3.1` release benchmarks.
* **Development**: Plutus script calibration tool and profile maintenance updates about to be merged.
* **Infrastructure**: Workbench simplification about to be merged.
* **New Tracing**: System dependencies untangled; preparing 'Periodic tracer' feature for production.
* **Node Diversity**: Participation in Conformance Testing workshop in Paris.

## Low level overview


### Benchmarking

We're currently running release benchmarks for the upcoming Node `10.3.1` version - a candidate for Mainnet release. Having taken previous measurements on the release integration branch, we expect the results to be closely aligned with these.  

Node `10.3.1` will support two compiler versions, namely GHC8.10.7 and GHC9.6.5. As a consequence, we benchmark both Node builds and compare against the previous performance baseline `10.2`. So far, the release benchmarks confirm
performance improvements in both resource usage and block production metrics seen on the integration branch - for both compiler versions. A final report will be published on [Cardano Updates].


### Development

The first version of our new tool `calibrate-script` is about to be merged. It is part of the `tx-generator` project, and calibrates Plutus benchmarking scripts according to a range of constraints on the expected workload. The tool
documents the result and all intermediate steps in a developer-friendly way. A CSV report is generated which shows all properties of some calibration at a glance: How much execution budget was given, and how much of each execution budget was used,
was memory or CPU steps the limiting factor for the script, how large will the resulting transaction be and what will it cost and more. Apart from greatly speeding up development of Plutus benchmarks for our team, this tool can also be used to assess
changes to Plutus cost models, or efficiency of different Plutus compiler outputs - without running a full benchmark.  

Furthermore, the benchmarking profiles defined in `cardano-profile` have undergone a large maintenance cycle. Besides a cleanup, several profiles were fixed wrt. transaction fees or duration, others now run on a more appropriate performance baseline. 
There era-dependency of a profile requiring a minimum protocol version has been solved such that it's now impossible to construct incompatible profiles by definition - e.g. a `PlutusV3` benchmark in any era prior to Conway. The correspondig PR is about to be merged
shortly.

### Infrastructure

A large PR simplifying the build of our performance workbench has been finalized and passed testing. The nix code has been greatly optimized to avoid redundant derivations and creating an abundance of nix store paths. This not only makes the workbench
better maintainable, it greatly reduces time and size requirements for CI jobs. In testing, we could observe a speedup of 40% - 50% for CI. Additionally, this PR prepares for the future removal of GHC8.10 as a release compiler - which will reduce CI
cost even more. The PR is currently under review and to be merged soon.


### New Tracing

The work on untangling dependencies in the new tracing system has entered testing phase. The `cardano-tracer` service no longer depends on the Node - with common data types and typeclass instances having been refactored to a more basic package of the
tracing system. Once merged, this will allow for the service to be built, released and operated independently of `cardano-node`, widening its range of use cases.  

On Node 10.1, we've built a prototype of the 'Periodic tracer' feature. It decorrelates tracing ledger metrics from the start of a block producer's forging loop, thus removing competition on certain synchronization primitives. We've already shown
in past benchmarks it had a positive impact on block production performance. This prototype is now being developed for production release, complete with configuration options, and we aim to land it in Node 10.4.

### Node Diversity

We've contributed to the recent Conformance Testing workshop in Paris. The topic was how to approach detection and documentation of system behaviour across diverse Cardano Node implementations: Where is the behaviour conforming to some blueprint, where
does it deviate - intentionally or accidentally. Our tracing system is the prime provider of observability - and all evidence of program execution could in theory be checked against a machine-readable model of the blueprint. This of course assumes
observables are implemented uniformly across diverse Node projects, i.e. without changing semantics. Thankfully, our tracing system lead engineer Jürgen Nicklisch was able to join that workshop and add to the discussions around that approach.



[Cardano Updates]: https://updates.cardano.intersectmbo.org/reports