---
title: Performance & Tracing Update
slug: 2025-09-23-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Feature benchmarks for a new tx submission logic; generalized on-disk benchmark profiles.
* **Development**: New tracing system for `cardano-submit-api`; Node conformance testing groundwork, being applied to metrics.
* **Infrastructure**: Dijkstra era being incorporated into benchmark tooling.
* **Tracing**: Creating a library package and API from `cardano-tracer`, facilitating dedicated trace consumer applications.
* **Team**: Ruslan joins Performance & Tracing, will be aimed at Leios.

## Low level overview


### Benchmarking

We've performed and analysed feature benchmarks of `TxSubmission` protocol, version 2. It's designed to reduce redundant exchange of transactions between network nodes. To that end we've created a dedicated benchmark
which is able to locally reproduce performance observations on the cloud cluster - and hence be executed with GHC profiling for tracking time and space usage.  

The on-disk (`LMDB`) benchmarks for the cluster have been generalized into full-fledged benchmarking profiles that can be scaled for available RAM (and thus the pressure on the on-disk backing store to perform disk I/O) - and be applied
to other backing store implementations as well. This will allow for direct performance comparisons with the `lsm-trees` solution, once it is integrated into the Node.


### Development

There's a microservice, `cardano-submit-api`, which is run independently from the Node (if desired). It allows for Cardano transactions to be submitted via HTTP POST, instead of Cardano native protocols. It's still using
the legacy tracing system, which is why we're currently porting its logging and metrics to the new one.  

We're also laying groundwork for (multi-)node conformance testing. This entails creating a specification document for semantics of existing traces. These traces can then be emitted accordingly across diverse node implementations. Given the unified semantics,
these points of evidence can then be evaluated against each other, against our Haskell reference implementation, or against a model of specified / expected behaviour, resulting in a quantifiable way to assess conformance across individual implementations.
Currently, we're implementing a playground version of this in the tracing system's own test suite, where we assess whether the metrics a node exposes conforms to the trace evidence in its logs, and to the metrics it forwards to `cardano-tracer`.

### Infrastructure

As a maintenance task, we're integrating the new Dijkstra ledger era into our performance workbench and all benchmarking tools. This will allow us to specify existing profiles in the new era (allowing us to comparatively benchmark its implementation against previous eras)
as well as create new benchmarks making use of any Dijkstra-specific feature.


### Tracing

The trace consuming / processing service `cardano-tracer` had been built as a monolithic application. We're currently redesigning it as a more modular one, splitting it up into a library and an application proper (which hosts all its current high-level functionality).
The underlying library will be equipped with an API that meets community standards in the future. For now, we're focusing on making all library components safely restartable and reconfigurable, as well as providing abstract, clean intra-process communications (`cardano-tracer` is a highly multi-threaded app). These capabilities are also verified in the test suite.  

This will facilitate rapid development of custom, specialized applications for trace consumption and processing: The library package will provide all mid-level abstractions, as well as the Cardano native multiplexed forwarding protocol. It will allow any application
to focus exclusively on implementing the high-level features it aims to.



### Team

Ruslan joined Performance & Tracing as a Software Engineer. He has a ton of functional programming experience under his belt, in Idris, in Haskell and in Scala. Additionally, he used to work as a perfomance engineer for a large, distributed commercial system. This all
makes him an ideal candidate for Cardano performance engineering, and perspectively for all new Leios benchmarks and performance tests. Welcome, Ruslan!


[Performance report for 10.5]: https://updates.cardano.intersectmbo.org/reports/2025-07-performance-10.5.0
[cardano-node PR#6295]: https://github.com/IntersectMBO/cardano-node/pull/6295
[cardano-node PR#6241]: https://github.com/IntersectMBO/cardano-node/pull/6241
[cardano-node PR#6283]: https://github.com/IntersectMBO/cardano-node/pull/6283
[cardano-node PR#6268]: https://github.com/IntersectMBO/cardano-node/pull/6268
