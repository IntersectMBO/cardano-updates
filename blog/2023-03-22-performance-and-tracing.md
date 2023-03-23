---
title: Performance & tracing update
slug: 2023-03-22-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

# High level summary

* Benchmarking: We performed benchmarks for the new tracing system, and started benchmarking for varying GHC RTS configurations.
* New tracing: Backwards compatibility with legacy tracer nomenclature has been merged; we're currently improving documentation and creating setup guidelines for end users.
* Analysis pipeline: Our refined metrics PR has been merged. We're working on including variance analysis to our reporting machinery.
* Infrastructure: Support for Conway genesis in our workbench has been merged. At the moment, we're laying the groundwork for enabling GHC 9.2 in our benchmarks.
* Open Sourcing: The API demo has reached prototype phase; work on documenting the API and providing exemplifying use cases is ongoing.
* Nomad backend: The nomad-exec based task driver has been merged. The backend has been equipped with the capability for genesis distribution via S3 bucket.

# Performance

### New tracing
The new tracing system has undergone various benchmarking runs with variance analysis, and comparison to a baseline using legacy tracing. We could observe
a slight shift in the resource usage profile from memory to CPU, but no regressions in block propagation metrics. Variance was observed to be notably smaller, which gives the new system a much better predictability. From this angle, we consider the new system fit for production use.

### GHC RTS parametrization
We're currently prerforming various runs on the cluster to explore the space of different GHC RTS settings for running nodes. The main focus lies
on different configurations for the garbage collector, as well as increasing the number of CPU cores the node may use.

### Open Sourcing
Our API demo has reached prototype stage, and operates on live data from the production database. Making use of the experience gained, we're refining version 1 of the API to provide optimized usability, and creating documentation that both is descriptive of the API endpoints, and focuses on practical, exemplary use cases.

# Tracing
For the new tracing system we're currently undertaking an effort to multi-layered documentation: a condensed version, as well
as a setup guide with pragmatical focus, will be provided alongside the in-depth documentation. This effort should cater to different audiences, and provide distinct entry points
for users of the new system, depending on their wants and needs. 

# Infrastructure & Analysis

### General
Having included Conway genesis in the workbench, as a next step in future-proofing out benchmarking infrastructure, we're laying the foundation for a switch in compiler version to GHC 9.2. Additionally, we considered variance analysis of our runs to merit inclusion into our reporting pipeling - which will
increase confidence in specific metrics.

### Nomad backend
We have implemented an appropriate mechanism for genesis distribution: Only after a benchmarking cluster has been deployed successfully, genesis
is patched and uploaded to an AWS S3 bucket for the nodes to retrieve - as a final step before initiating the actual run. We're confident that this deferred approach will provide clearer evidence for genesis patches, as well as minimize startup time for all runs by factoring in deployment re-tries.
