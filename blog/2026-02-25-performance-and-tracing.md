---
title: Performance & Tracing Update
slug: 2026-02-25-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Release benchmarks for `10.5.4` and `10.6.2`; Parallel GC benchmarks.
* **Development**: Preparation of new `PlutusV3` baseline.
* **Infrastructure**: Performance cluster gets custom, isolated Nix cache - safe benchmarks for security-critical changes.
* **Tracing**: Improving robustness by forcing lazy values in controlled sections of code.
* **Leios**: LTL Trace Verifier completed, waiting integration.
* **Node Diversity**: Formal trace schema definition entering validation phase; Trace forwarding in native Rust entering testing.

## Low level overview


### Benchmarking

We've performed, analysed and published relase benchmarks for both Node versions `10.5.4` and `10.6.2`. We could determine both to be free of performance regressions. The `10.6.2` release contains the new 'Defensive Mempool' feature, which
is therefore also covered by our benchmark. The `10.6.2` release has shown to be somewhat more efficient in its use of CPU time, but exhibited a slightly higher tendency to perform Major GC cycles.  

To that end, we've reopened an old PR which changes the default / recommended GC settings for the Node process to a parallel, load-balanced GC ([cardano-node PR#6222]). The motivation is to update the current recommended settings (which are still tuned to GHC8.10) such
that the ocurrence of Major GC cycles is greatly reduced (as they may temporarily halt the Node process to complete). We found in our benchmark that, apart from being even slightly more efficient regarding CPU time, the occurrence of Major GCs could
be reduced by almost factor 30.

### Development

We're performing an overhaul of the `plutus-scripts-bench` package, a library of benchmarkable Plutus scripts targeting various aspects of the Plutus interpreter, the respective cost model and the execution budgets. The aim is
to create up-to-date performance baselines by using exclusively `PlutusV3` scripts that have been built with a recent version of the compiler - thus factoring in potential performance improvements in generated code.
Currently, the PR [cardano-node PR#6440] is work in progress.

### Infrastructure

Up to now, a benchmarking deployment required the target commit to be a public item on GitHub; the `nix` build (or cache retrieval from our CI) would be decentralized, with each cluster instance creating the benchmarking artifact independently.
When there's a requirement to benchmark security-critical changes in an isolated, opaque fashion, this approach would reach its limits promptly. Together with SRE, we devised a way to achieve just that: An artifact can be built from a local commit on one
cluster instance into its `nix` store, which in turn will serve as a substituter (i.e. cache) in a centralized manner for all other instances ([cardano-node PR#6450]).


### Tracing

The new tracing system highly encourages trace values to be lazy. Thus, the emitting thread has the lowest possible overhead when doing so - which is highly relevant when you're on a hot code path. Furthermore, this overhead is assumed
to be a constant factor - regardless of whether those traces are consumed by any subscriber or not. We're currently exploring an approach to increase robustness, guarding against shaky implementations of trace values themselves. The burden
of evaluating a lazy trace still remains with a subscriber, however, this is now decoupled from handing over the trace result (such as a log line, a metric, etc.). By forcing a lazy trace value in a controlled section of code, immediately prior
to handover, the system will reliably handle even blatant implementation errors in lazy traces.

### Leios

The Linear Temporal Logic (LTL) Trace Verifier [Cardano Trace LTL] has reached production readiness. It is able to ingest multiple streams of trace evidence, basically multiple Node log files as they're being produced, and
continuously evaluate a set of LTL propositions against them. While performant, real-time evaluation is a valuable thing to have, it required some of the LTL operators to be bounded to be able to operate in constant space over a long time.
We've discussed our fragment of LTL with Formal Methods to start building a collection of properties worth checking, and to ensure there's provably no disjoint semantics introduced by the bounded operators.  

The service is currently being integrated with the existing tooling in the `cardano-node` project, and will form a regular part of Leios setups / deployments in the future.

### Node Diversity

We've reached basic viability of the comprehensive formal schema definition of all the Node's existing trace messages. We're building an automated verification suite that will ensure all definitions are fully compliant
with existing JSON schema, as well as the observables implemented in (and the trace messages logged by) the Haskell Node conform to the defined schema. Further manual refinement of types in the schema will be the next step; eventually,
this will serve as a basis to automatically derive parsers, and to render a human-readable reference documentation.    

The implementation of our trace / metrics forwarding mini-protocol in Rust has completed and is now in testing phase. After cleanup and merge, this allows Rust projects to emit Cardano-style structured traces directly, and forward them to a running
`cardano-tracer` for logging, processing and metrics exposition.


[cardano-node PR#6222]: https://github.com/IntersectMBO/cardano-node/pull/6222
[cardano-node PR#6440]: https://github.com/IntersectMBO/cardano-node/pull/6440
[cardano-node PR#6450]: https://github.com/IntersectMBO/cardano-node/pull/6450
[Cardano Trace LTL]: https://github.com/jutaro/cardano-trace-ltl



