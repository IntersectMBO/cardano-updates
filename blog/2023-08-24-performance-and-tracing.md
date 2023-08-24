---
title: Performance & tracing update
slug: 2023-08-24-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Benchmarking node version `8.2.1` has concluded. Additionally we're developing benchmarking setups for GHC9.6 and UTxO-HD.
* Infrastructure: Our analysis pipeline has received improvements reducing memory footprint.
* Tracing: Another batch of optimizations for the new tracing system has been merged; work on namespace consistency guarantees is ongoing.
* Nomad backend: We're performing and analysing various runs for validation purposes on the new hardware cluster.


## Low level overview

### Benchmarking

We've performed and analysed the benchmarks for the `8.2.1` version of `cardano-node` as part of our release benchmarking cycle.  

Setting up cluster benchmarks requires completing full system integration. This applies to both supporting a new build platform, as is GHC9.6, as well as targeting a specific feature, like a UTxO-HD enabled node. Currently, we're working on respective integrations on both those paths.

### Infrastructure

As cluster runs increase in duration, more and more data is accumulated for analysis. Batch analysis mode needs all data to be held
in memory, which wouldn't fit anymore even on a 64GB RAM machine. Changes to the in-memory data representation improving on compactness were able to reduce the RAM requirements of our analysis pipeline.

### Tracing

The next portion of optimizations has been completed and merged to `master`, getting rid of Haskell's native `String` representation on critical code paths. This concludes the optimization phase of the new tracing system for all its components used by `cardano-node`.  

The implementation for validation of consistent naming and configuration is ongoing. We're splitting out everything that's verifiable at compile time into a seperate test case which we hope to integrate into CI - leaving only configuration constraints to be verified at or before node startup.

### Nomad backend

The verification phase of the nomad cloud backend is ongoing. We're able to perform full runs on the new hardware cluster
and porting profiles and configurations from the legacy one. The goal is to reproduce with confidence known regressions, or improvements, between runs performed on the legacy cluster and runs performed with the new backend.