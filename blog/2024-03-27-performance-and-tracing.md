---
title: Performance & Tracing Update
slug: 2024-03-27-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for `8.9.1` have been performed and analysed.
* Development: We've implemented a benchmarking setup for UTxO-HD's LMDB (on-disk) backend.
* Workbench: The now modular, `nix`-based genesis creation has been merged to `master`; `DRep` delegation and integration of a new `cardano-cli` command are ongoing.
* Tracing: Benchmarking the new handle registry feature in `cardano-tracer` is complete; quality-of-life improvements to Prometheus output.
* UTxO Growth: We've adjusted our framework to support running UTxO scaling benchmarks on both a single node and a cluster.
* Nomad cluster: new multi-cluster support with the capability to quickly adjust to changes in deployed hardware

## Low level overview


### Benchmarking

We've performed a full set of release benchmarks for Node `8.9.1`. Comparing with release `8.9.0`, we could not detect any performance risks for that version. 

### Development

In context of UTxO scaling, we want to assess the feasability of the current on-disk solution (which is LMDB) of a UTxO-HD enabled node. Using that, the UTxO set will be kept 
in live tables and snapshots on disk, significantly reducing memory requirements.  

We've implemented a benchmark setting, and a node service configuration, supporting direct disk access to a dedicated device which can be initialized with optimized
file system and mount settings. It's purpose is to serve as storage for the highly performance-critical disk I/O of the LMDB component.

### Workbench

Our automation for creating all flavours of geneses has seen cleanup and refactoring - which has been merged to `master`. It can now use a more principled, and rigorously checked, modular approach
to define, create and cache the desired genesis files.  

Working on integrating new `cardano-cli` functionality in our automation is ongoing. The performance workbench will support a different, and updated, CLI command which will allow injection of `DRep` delegations into genesis.

### Tracing

Benchmarking `cardano-tracer`'s new handle registry feature has been performed and evaluated. We're satisfied with seeing clear performance improvements along with cleaner code, and much better test coverage.
Especially allocation rate and number of garbage collections (GC) could be significantly reduced, along with the CPU time required for performing GCs. This will allow for higher trace message throughput given
identiacal system resources - plus less system calls issued to the OS in the process.  

Furthermore, the new tracing system is getting improvements for its Prometheus output - like providing version numbers as metrics, or annotating metrics with their type - enhancing the output's overall utility.

### UTxO Growth

The performance workbench now supports profiles aimed at simulating UTxO growth both for a single node and an entire cluster. Additionally, simulating different
RAM sizes in combination with specific UTxO set sizes is supported. For a single block producing node, the focus is on quick turnaround when running
a benchmark, gaining insight into the node's RAM usage and possible impact on the forging loop.  

The cluster profiles enable capturing block diffusion metrics as well, however they require a much longer runtime. We can now successfully benchmark the node's behaviour
when dealing with UTxO set sizes 4x - 5x of current mainnet, as well as a possible change in behaviour when operating close to phsyical RAM limit due to that.

### Nomad cluster

Our backend now supports allocating and deploying Nomad jobs for multiple clusters simultaneously - all while keeping existing automations operational. We've taken special precautions
a cluster, as seen by the backend, can be efficiently and easily modified to reflect newly deployed, or changed, hardware. Additionally, we've added support for host volumes inside a Nomad
allocation - which will be needed for benchmarking UTxO-HD's on-disk solution.

