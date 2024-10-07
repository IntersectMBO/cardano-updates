---
title: Performance & Tracing Update
slug: 2024-10-07-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: New GHC9 benchmarks for Node `9.2`.
* Development: Progress on Governance action workload.
* Workbench: Switch to Haskell-based profile content generation is imminent, along with significant code cleanup.
* Tracing: New major release: `cardano-tracer-0.3`; metrics alignment is ongoing.
* Consensus QTAs: Automation setup and implementation for `beacon` is complete, entering testing.


## Low level overview


### Benchmarking

The GHC team has been busy investigating the optimization behaviour of GHC9 vs GHC8 on the Cardano code base. It appears that speculative evaluation (a feature absent from GHC8) can, in some cases, lead to overeager evaluation - and hence to
an unnecessary performance impact on the system. We've created a build of the Node with a patched version of GHC9.6 which disables speculative evaluation for these cases only - and then we've run our release benchmark workloads on
a cluster of those nodes. The raw data is still under analysis, but initial results look promising.

### Development

The new governance action / voting workload for cluster-wide benchmarks is still under works. Our submission service `tx-generator` is now able to assume the identity of all registered DReps to sign votes. Currently, we're working
on defining (and correctly throttling) a stream of those votes, such that a constant number of open proposals keep receiving votes throughout the entire benchmarking run.


### Workbench
 
The Haskell service to create benchmarking profile content, `cardano-profile`, has been in beta use for some time now. It has proven to be much more maintainable, and its approach to declare profile content is much more principled than the
existing implementation with `jq` / `bash`. We've decided to switch to that service for good, including a final validation of all possible profiles between implementations. In the same go, we'll take the opportunity to remove some
bulky parts of `workbench` which were motivated by the `jq` implementation, as well as simplify the corresponding nix evaluations (and redundant shell invocations).

### Tracing

Further adjustments to the metrics naming schema in the new tracing system is ongoing.    

For `cardano-tracer`, several PRs have successfully landed. EKG monitoring is now capable of serving many metrics stores from just one process. Prometheus exposition has been made OpenMetrics compliant. The space leaks in the forwarding
backend have been verifiably closed, and the log rotation issue has been resolved. Thus, `cardano-tracer` will see (alongside the next Node release) a new major release `0.3`. This release is considered to be 100% production-ready.

### Consensus QTAs

`beacon` - a first step in building a benchmarking framework based on Delta-Q system design - has received a fully functional automation. According to the design we settled on 3 months ago, it's now possible to test, manage, and deploy
a nix service for a self-hosted GitHub runner which performs `beacon` benchmarks on pre-defined workload fragments. The runner can be triggered automatically or manually. As the nix service will likely share a host with other, potentially
resource intensive tasks, a locking mechanism is implemented to prevent distortion of the measurements. The automation is now entering testing phase.