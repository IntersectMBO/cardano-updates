---
title: Performance & tracing update
slug: 2023-05-03-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

# High level summary

* Benchmarking: The benchmarks and performance investigations for the new `8.0` release branch are ongoing.
* New tracing: Performance optimization of the new tracing system is paying off and we could notably shrink its resource footprint.
* Analysis pipeline: An exhaustive documentation and dataflow diagram for our analyses is being worked on.
* Infrastructure: The `plutus-apps` flake input for `cardano-node` has finally been removed.
* Nomad backend: A PR implementing placement of benchmarking clusters has been merged.
  
# Benchmarking

The performance investigations on the `8.0` release branch have lead to pinpointing and addressing incosistent behaviour. For that,
we created yet another local reproduction with the workbench's `forge-stress` benchmark.  

Currently we're working on scaling up the dataset size (UTxO and delegations) on the AWS cluster to gain further insight into `8.0` and
subsequent releases.  

Additionally, we've refined the `trace-bench` family of profiles that target benchmarking our own new tracing system. 

# Tracing

Optimization of the tracing system has identified several locations where inefficient serializations were used; those were not originally
intended to run on a performance-critical codepath. We've worked on improving those, as well as eliminating cases of redundant
conversion between different serialization formats. This has brought down both memory and CPU impact of the tracing system.

# Infrastructure & Analysis

### Dataflow documentation
The LogObject CLI `locli` is at the heart of our analysis and reporting pipeline. To increase its accessibility and facilitate
further development, we're creating a detailed and illustrated documentation of all dataflows that happen during analysis and reporting. 

### Remove redundant Plutus flake input
This step is the conclusion of porting Plutus benchmarking scripts to our own library. By finally removing the now unnecessary flake input,
we simplify the dependency graph for `cardano-node`, as well as enable immediate feedback when developing Plutus benchmarks.

### Nomad backend
Sophisticated placement of nodes across various regions of the globe is a cornerstone of the model cluster we use for benchmarking.
This capability has now been added to the Nomad backend and can be controlled with Nomad job descriptions. A PR with this, along
with various quality-of-life improvements, has been merged to `master`.
