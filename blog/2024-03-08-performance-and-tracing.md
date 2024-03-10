---
title: Performance & Tracing Update
slug: 2024-03-08-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've performed release benchmarks for Node `8.9.0`. Additionally, we benchmarked different GC settings for `cardano-node`.
* Development: Ongoing work on the reporting pipeline and high-level profile definitions.
* Workbench: In conjunction with `DRep` delegations in genesis, we're working on adjustments to a new `cardano-cli` command.
* Tracing: Test coverage for the new handle registry feature in `cardano-tracer` is complete.
* UTxO Growth: Currently, we're developing a series of benchmarks targeting performance implications of increased UTxO set size.
* Nomad cluster: Disk storage safety net; better admin access to Nomad nodes; basic backend support for more than 1 cluster; new latency service.

## Low level overview


### Benchmarking

We've performed a full set of release benchmarks for Node `8.9.0`. Initially, we identified a performance regression in connection to ledger snapshots. This has been addressed very swiftly.
Having re-run the fixed version, we could detect no performance risks in comparison with `8.7.2` / `8.7.3`.  

In an additional set of benchmarks, we targeted the garbage collector (GC) settings that `cardano-node` is built with by default. Specifically, we compared these (copying, sequential GC) as a baseline
to using the parallel GC, the compacting GC and the non-moving GC - all of which are supported by GHC's runtime system. As GC always is a trade-off between space and time (and as a consequence, responsiveness);
we could measure the parallel GC offering a slight increase in responsiveness at the cost of delaying some evaluations - which is suboptimal for a block forger. The compacting GC could clearly
achieve a smaller RAM footprint, but only at the cost of increased CPU usage - and clearly worsened responsiveness. The non-moving GC could greatly enhance responsiveness - but increased the RAM footprint tremendously, as
well as introduced delays in the forging loop. In conclusion: the existing default is still the best choice by far for `cardano-node` - validated both on GHC8.10.7 and GHC9.6.3.

### Development


The work on moving benchmark profile, and genesis, definitions out of the `bash` scripting / JSON data transformation space is still ongoing. Type safety and a test suite for those tasks
will allow for a much more principled approach.  

The implementation of additional rendering formats and report templates for our reporting pipeline has been completed; it is currently in testing and validation phase.

### Workbench

We're working on integrating new `cardano-cli` functionality in our automations. Injecting `DRep` delegations into genesis - for Conway ledger benchmarks - will require us
to use a new CLI command, which differs in in output structure and options provided from the one we're using to inject stake pool delegations. This requires us to
implement and additional post-processing step for backends to find everything as expected.

Furthermore, a PR has been merged which refactors and cleans up benchmarking profiles, with a focus on fine-tuning solo-node benchmarks which scrutinize a single `cardano-node` process.

### Tracing

The test suite for `cardano-tracer`'s new handle registry feature is complete, and the new feature passes all tests. At the moment, we're
preparing it for merging into `master`.

### UTxO Growth

We're developing a series of benchmarks that will provide insight into possible changes to the Node's performance characteristics given different UTxO set sizes and numbers of delegated wallets.
What we aim to capture in these benchmarks is the system's capability to scale with UTxO growth - while simultaneously evaluating hardware requirements. The workloads will be based on existing release benchmarks, but allow for flexibility regarding UTxO set and delegations. They will target the existing in-memory solution, and at the same time permit feasability testing UTxO-HD's on-disk
flavour - which does not keep the entire UTxO set in RAM permanently.

### Nomad cluster

Implementation of cluster machine disk space checking and garbage collection is complete. A requirement was that no
monitoring process interferes with a running benchmark, so a non-synchronous approach was chosen to guarantee enough disk space. This prevents failing
runs, and thus the necessity to repeat them.  

In the process, the workbench backend was equipped with a wider range of cluster commands and abstractions, which makes administrating cluster
machines more flexible. This includes a new service to create a network latency matrix for deployed cluster hardware - generalizing the approach
chosen during the Nomad cluster's initial validation phase. This can guarantee the validity of existing baselines in case of hardware reboots, or changes
in topology.  

Last not least, the backend is currently receiving an additional feature: supporting more than 1 hardware cluster. This will enable us,
in the future, to benchmark on ephemeral clusters - without interfering with the hard requirements, or the schedule, of release benchmarking
on our default deployment. The motivation is being able to benchmark different hardware configurations, along with varying `cardano-node` options and
initial ledger states on a parallel schedule - also, without having to keep those clusters running at all times.
