---
title: Performance & Tracing Update
slug: 2025-11-25-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Node 10.6 (pre-)release benchmarks; compiler benchmarks: GHC9.12.
* **Development**: Ongoing work on queryable timeseries prototype and message-based `cardano-tracer` library API.
* **Infrastructure**: Optimitazation of trace forwarding.
* **Tracing**: New quality-of-life features like Prometheus service discovery; significant tech debt removal.
* **Leios**: Process specification for Leios conformance and performance testing / benchmarks; simulation result re-evaluation.
* **Node diversity**: New framework for system conformance testing based on linear temporal logic.

## Low level overview


### Benchmarking

We've performed and analysed (pre-)release benchmarks for Node `10.6.0`. Our benchmarks exhibited a clear increase in RAM usage (~15%) for a block producer. We're currently investigating the underlying cause, and whether it's reproducible outside of the benchmark,
without the constant, artificial stress we subject the system to. The published final results can be found in the [Performance report for 10.6.0-pre].

Furthermore, we've performed compiler benchmarks for the Node built with `GHC9.12` instead of our current default `GHC9.6`. After getting both the `10.5` and the `10.6` branches to build with the new version, we performed cluster benchmarks for both, resulting
in a cross-comparison to their respective baselines. We could determine that the `GHC9.12` build is on par with the `GHC9.6` one for Node 10.5, and even slightly better for Node `10.6` as far as block production, diffusion and adoption metrics are concerned. However, it exhibits unexplained increases in CPU time used (~9%) and Allocations + Minor GCs (~6%). We also found that by disabling a particular optimization on `GHC9.12` called 'speculative evaluation of dictionary functions', the increase in CPU time is roughly halved. So while the code base seems to be ready overall to switch to the more recent compiler version, that increase, though not dramatic, is still being investigated.

### Development

Our prototype for aggregating timeseries of Node metrics, and evaluating `PromQL`-like queries on them, has made significant progress. The query language is nearly complete, and is evaluated with reasonable speed. Our current work focuses on an efficient
in-memory representation of timeseries - before considering any on-disk or database backed solution. To that end, we've created a microbenchmark tracking space usage, and will use real-life scraped metrics data from nodes deployed and monitored by SRE.  

The clean separation of `cardano-tracer` into a library and an application part has entered testing. As it is built for highly concurrent operations, we chose a message-passing API where messages are always typed, and guaranteed to be consumed in the
order they were emitted. Custom applications will be able to implement handlers in a composable manner that react to certain message types (or values); at the same time, they can emit messages that won't interfere with the library's internal messaging - which is assured by Haskell's type system.

### Infrastructure

We've simplified the `trace-forward` implementation (a non-breaking change). When forwarding traces, the host application buffers those objects in a bounded queue until they're requested. The implementation used to switch between queue sizes based on
congestion, and to mitigate short, temporary service interruptions. After taking a look into the specifics of the queue implementation (in a dependency), we found that there's no overhead for the unused capacity of any queue - meaning switching the queue size
to the shorter variant does not yield any advantage. We were able to simplify the implementation based on that insight - which also turned out to be an optimization. Merged: [cardano-node PR#6361].


### Tracing

The new tracing system is now the default since Node 10.6 (pre-)release. Based on SRE's internal deployments and feedback, we've been adding several quality-of-life features as well as addressing some tech debt, as to enhance the new system's user experience.
This includes a Prometheus HTTP service discovery feature for `cardano-tracer`, which allows for dynamically registering and scraping connected nodes, a CBOR formatting for trace messages which can be used to implement a binlog in the future (for space efficiency),
and a basic Haskell type with parser instances for machine-readable logs (JSON or CBOR), which greatly simplifies building any tooling that consumes trace output / log files.  

Additionally, there are many small changes that improve robustness, or code quality; such as safe garbage collection of threaded writers, simplification of the `LogFormatting` typeclass which is an interface of how traces can be rendered, properly tracing
forwarding service interruptions, and fixing delay increments in the retry policy for re-establishing a forwarding connection.  

The correspoding [cardano-node PR#6377] is currently in draft state.


### Leios

We're finalizing the Leios performance testing plan. This substantiates our approach based on the impact analysis, and formulates concrete steps regarding formal specification of system traces, generalisation of how benchmarking workloads are defined declaratively (and generated), taking advantage of common cases in performance and conformance testing (reducing the necessity for domain-specific tooling), and setting up dedicated microbenchmarks for key components (like e.g. crypto) which are designed to provide comparability over long time.


### Node diversity

For conformance testing across diverse node implementations, we've designed a framework based on linear temporal logic (LTL). This allows for system or protocol properties to be expressed as logical propositions; it does not require
any executable specification or similar, and is thus language independent. Evaluation of LTL tends to be very fast and can potentially scale up to routine verifications as part of CI. Even though Haskell was chosen as a language for the project,
it can consume trace evidence from Cardano implementations in any language.  

The project [Cardano Trace LTL] is still in prototype stage; it's able to verify a few very basic Praos properties, expressed as LTL propositions, based on our benchmarking environment's trace evidence.



[Performance report for 10.6.0-pre]: https://updates.cardano.intersectmbo.org/reports/2025-11-performance-10.6.0-pre
[cardano-node PR#6361]: https://github.com/IntersectMBO/cardano-node/pull/6361
[cardano-node PR#6377]: https://github.com/IntersectMBO/cardano-node/pull/6377
[Cardano Trace LTL]: https://github.com/jutaro/cardano-trace-ltl
