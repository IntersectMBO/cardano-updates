---
title: Performance & tracing update
slug: 2023-06-14-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've continued release benchmarking and established a new baseline for `8.0.0`.
* New tracing: Our benchmarking profile for measuring new vs. legacy tracing performance has been refined.
* Nomad backend: The healthcheck system for the the nomad cloud has been completed. We've performed the first full runs on the new backend.


## Low level overview

### Benchmarking

In our release benchmarking cycle, we established a new performance baseline for `8.0.0`. Additionally, we've measured
performance under various workloads for `8.1.1-pre`; the results look promising and validate the optimization efforts
done on several system components.  
  
In the meantime, we've finalized a build plan with GHC9.2 that matches the current one with GHC8.10; a requirement for
benchmarking as a large amount of differences in the dependency graph can confound the results for the application code proper.


### Tracing

The legacy and the new tracing system differ fundamentally in design, implementation and handling. So for metrics to be
meaningful in a comparison, benchmarking profiles have to be tuned such that not only log line frequency but frequency of specific
trace messages are closely aligned. We've found that higher granularity in this regard was necessary, and done additional work on our dedicated profiles.  

Additionally, we've had a first glance of what additional traces could be valuable in the context of benchmarking UTxO-HD.


### Nomad backend

As the new backend's healthcheck system in its first iteration can now serve as a guardrail to ensure sanity of a full-length run, we've performed our first 52-node cluster runs on nomad cloud. We're currently smoothing the edges around cluster deployment, and analysing the metrics gathered from those runs.  

This means the backend is entering validation phase, where we systematically compare all metrics taken from the new
infrastructure to the existing ones, including determining reproducibility and variance.
