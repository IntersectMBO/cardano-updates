---
title: Performance & Tracing Update
slug: 2024-07-23-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for Node `9.0`; Plutus execution budget scaling benchmarks.
* Development: Improved shutdown behaviour for `tx-generator` merged to `master`. Work on governance action benchmarking workload is ongoing.
* Workbench: Haskell profile content definition merged to `master`.
* Tracing: Factoring out RTView was merged to `master`. Work on metrics naming ongoing, minimizing migration effort.
* Consensus QTAs: Design for automating and data warehousing `beacon` measurements is complete.


## Low level overview


### Benchmarking

Runs and analyses for a full set of release benchmarks have been performed - and published - for Node version `9.0.0`. Comparing with the latest mainnet release `8.12.1`, we could not observe any performance regression. `9.0.0` exhibits
an improvement in Block Fetch duration, which results in slightly better overall network performance.  

Additionally, we've performed scaling benchmarks of Plutus execution budgets. In these series of benchmarks, we measure the performance impact of changes to those budgets in the protocol parameters. Steps (CPU) and memory budgets
are scaled independently of each other, and performance testing takes place using Plutus scripts that either are heavy on allocations but light on CPU, or vice versa. These performance tests are meant to explore the headroom of those budgets, taking
into account cost model changes, and recent optimization capabilites of the Plutus compiler.

### Development

Our workload submission service `tx-generator` has been equipped with the ability to handle POSIX signals for graceful shutdown scenarios. Furthermore, as it is highly concurrent, error reporting on a per-thread basis has been added, enhancing feedback from the service.
Along with some quality-of-life improvements, these changes have landed in `master`.  
 
The Conway governance action workloads for benchmarking have completed design phase, and we've settled on an implementation plan. Implementation work itself has started.

### Workbench

Generating the contents for any benchmarking profile has now become a dedicated Haskell tool, `cardano-profile`, which has landed in `master`. Adding type safety and a test suite to profile definitions is a major improvement over
shell code that directly manipulates JSON objects. Furthermore, it makes reliably modifying, or creating, benchmarking profiles much more accessible to engineers outside of our team.

### Tracing

With factoring out RTView, and making it an opt-in component of the `cardano-tracer` build, we've reduced the service's dependency graph significantly. Furthermore, the service has become more lightweight on resources. We'll continue to maintain
RTView, and guarantee it will remain buildable and usable in the future.  

Aligning metrics naming and semantics of new and legacy tracing is ongoing work. This task is part of a larger endeavour to minimize the effort necessary for users to migrate to the new system.

### Consensus QTAs

`beacon`, which currently measures performance of certain ledger operations on actual workload fragments, is a first step in building a benchmarking framework based on Delta-Q system design and quantitative timeliness agreements. We've finished the
design of how to automate those measurements at sensible points in time, and provide a storage schema which will enable access and analysis that fits with the framwork. 