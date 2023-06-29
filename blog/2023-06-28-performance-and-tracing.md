---
title: Performance & tracing update
slug: 2023-06-28-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've performed several new benchmarks and a performance investigation in preparation of switching the default compiler to GHC9.
* Infrastructure: The first batch of refactoring and documentation for our `tx-generator` has been merged to `master`.
* Tracing: We've looked into an issue where the tracing system's concurrency could prevent a graceful node shutdown.
* Nomad backend: Our new cloud backend has seen various improvements regarding deployment and monitoring; validation runs for the backend are ongoing.


## Low level overview

### Benchmarking

The compiler switch to GHC9 as the default build platform for `cardano-node` and its components still has noticeable effects on system-wide performance metrics. An investigation into the different resource usage profiles of compiler versions does seem to indicate GHC9's significantly different inlining behaviour may produce those effects. We're currently locating the specific places in component code that have the most extensive effect in that regard.  
  
Using the `forge-stress` approximation we set up, we could determine that above effect is not due to a range of RTS parameters, as for example the number of capabilites used by the node.

### Infrastructure

The `tx-generator` is a crucial part of our tooling responsible for producing very specific workloads for our benchmarking cluster. In an effort to flesh out an API to make it reusable for more general use cases, a first set of refactorings has been merged to `master`. Additionally, this merge contained systematic documentation both for internal and for exposed areas of the code base.

### Tracing

The tracing system's concurrency could under certain conditions prevent a graceful shutdown of the node. This issue did occur only after adding specific new traces on a development branch. We could localize and address that issue.

### Nomad backend

With the data gathered from running the new nomad cloud backend, we've been able to address many, many small and medium-sized improvements. The deployment process has been restructured for better efficiency, and the healthcheck system could be fine-tuned to recognize severity of various conditions that might occur. Optimization of fetching all run data from the cloud for evaluation is in progress.

Additionally, we're continuing the new backend's validation by setting up test runs and looking into comparative analyses with metrics gathered from the current cluster backend.
