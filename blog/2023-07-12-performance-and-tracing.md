---
title: Performance & tracing update
slug: 2023-07-12-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: The peformance investigation into the compiler switch to GHC9 is ongoing. Additionally, a roadmap for implementing Consensus QTAs has been developed.
* Infrastructure: Our workbench has undergone some refactoring to seamlessly integrate its profiles into all available backends.
* Tracing: Optimization of the new tracing system is ongoing and yielding good performance results.
* Nomad backend: We developed a new feature for the nomad backend which allows pinning deployments to specific machines.


## Low level overview

### Benchmarking

Our analysis of the GHC9 build of `cardano-node` has produced several locations in the code base where the new compiler seems to miss opportunities for optimization. Our hypothesis is, that those can account for the difference in resource usage we observe when benchmarking with a full cluster run. Instructing the compiler on how to perform the optimizations which GHC8 apparently applied out of the box requires further investigation.  
  
In an effort to define Quantitative Timeliness Agreements (QTAs) on a per-component basis, we have coordinated with the Consensus team and developed a roadmap for providing those on consensus level. Making use of the insight that system-level benchmarks allow, we intend to set up and calibrate a benchmark that can reliably predict a regression or optimization for select metrics before needing full integration into `cardano-node`. This will help tremendously in various ways: catching regressions much earlier, localizing them much easier, avoiding repeated component integration and much shorter feedback cycle.

### Infrastructure

We have worked on seamless integration of our benchmarking profiles into the many available backends that the workbench provides. The goal was to be backend-agnostic, to guarantee that all benchmarking run artifacts be structurally identical as far as their file name, format and location are concerned. This lead to refactoring work and has already landed in `master`.

### Tracing

Much effort went into further optimization of the new tracing system. After working on configuration to align both new and legacy tracing system with regard to their trace frequencies, we could uncover some increase in resource usage. This occurred for corner cases under very heavy load. These cases have been addressed already, and do now surpass the legacy tracing system in terms of performance.

### Nomad backend

For reliable benchmarking results it is vital to introduce as few confounding factors as possible when performing runs. This includes hardware and network topology. The nomad backend has been outfitted with a mechanism to pin the nomad job for some node in our benhcmarking cluster to a specific machine instance. This greatly increases confidence in the metrics observed from a run.  

Furthermore this feature will detect any change in the underlying hardware or topology so it can be taken into account. The new feature has been merged to `master`.
