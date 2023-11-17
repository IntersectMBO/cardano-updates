---
title: Performance & Tracing Update
slug: 2023-11-17-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarking for node `8.6.0` as well as benchmarks scrutinizing GHC versions and the new tracing system.
* Development: PlutusV3 capability of our workload generator has been implemented.
* Tracing: First round of optimization of the `cardano-tracer` service has completed, awaiting validation.
* Nomad backend: A significant PR has landed addressing automation features and debugging capabilites.
* Workbench: Configurable remote environments and improvements to run documentation have been merged to `master`.


## Low level overview

### Benchmarking

We've performed and analyzed a full set of benchmarks for node `8.6.0`, both in comparison to recent release tags
and mainnet version `8.1.2`. A lot of development work has entered the system since then, so it is crucial
we can rule out any potential performance risks for the next mainnet release.   

Additionally, we've been benchmarking GHC9.6.3 builds of `cardano-node`. Overall, we've observed reliable optimization behaviour by that compiler version - which is much more in line with expectations than what we've seen on GHC9.2.7. Getting evidence on how predictable (and malleable, by code annotations) performance is when building with a certain compiler version is essential for settling on a version as supported release platform. 

A last set of benchmarks was dedicated to the new tracing system with node `8.6.0`. We were able to show that
there is no performance risk to enabling the new system, even when forwarding all trace messages to a `cardano-tracer`
service on the receiving end. Key metrics for block forging, as well as block diffusion, did not exhibit any regression.

### Development

For future benchmarks to be built around PlutusV3, we've equipped our transaction generator with basic integration and tests for the upcoming Plutus version. This enables us to target the new cost model and potential changes
to the execution budgets by developing specialized workloads.

### Tracing

The `cardano-tracer` service has received its first batch of optimizations. Profiling output is promising; to measure
performance for a long service run time, we're currently equipping the service binary with the same capability to
emit regular resource traces as `cardano-node`. Analysis of those will be the basis for validating this and possible future optimization efforts.

### Nomad backend

Many improvements for the nomad backend have been implemented and merged to `master`. This encompasses a unified naming schema for all nomad profiles, improved internal management of cluster topology, a more fine-grained healthcheck service,
more detailed automated documentation of underlying hardware, as well as lazy resource release. The latter enables
our team to investigate and debug interrupted runs for the exact moment and in the exact cluster state a potential failure occurred.

### Workbench

Our performance workbench has seen upgrades in documenting and reporting `cardano-node` builds. This ranges from capturing package versions and commit ids of key dependencies, to querying a deployed node for its build compiler.
When alternating between compiler versions and benchmarking custom built branches, automating such documentation is essential.  

Furthermore, the workbench is now able to access several remote deployments on all active clusters. This allows for fetching data, analyzing, comparing and reporting on all benchmarks from just one centralized workbench instance.
