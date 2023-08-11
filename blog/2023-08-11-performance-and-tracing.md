---
title: Performance & tracing update
slug: 2023-08-11-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've concluded benchmarking node version `8.2.0`.
* Tracing: Optimization of the new tracing system has been merged; we're currently working on self-documenting tracing configuration.
* Nomad backend: A PR that makes our backend take advantage of added flexibility of the new hardware cluster has been merged.


## Low level overview

### Benchmarking

As part of our release benchmarking cycle, we've completed and analysed the runs for the `8.2.0` version of `cardano-node`. In addition to the adjustment of sanity checks in our automation, we had to implement small changes in the analysis pipeline as well to accomodate the new version.

### Tracing

A significant amount of optimizations for the new tracing system has finally been merged to `master`. At the moment,
we're working on having a trace message self-document the final tracing configuration of a running node. Apart from adding
insight into the system, this feature also aims at making future hot reloading of tracing configuration explicit and straightforward.  

Furthermore, we're setting up a final round of system integration level benchmarks comparing new against legacy tracing.

### Nomad backend

The new hardware cluster permits greater flexibility as far as SSH access is concerned. By using nomad for a consistent
and reliable deployment, but taking advantage of direct connections for healthchecks and data transfer we believe we were
able to reduce overall network latency in the nomad cluster. This improves confidence when capturing all network related measurements during our benchmarks.  

A PR that adds these capabalities to our nomad backend - along with very many quality-of-life improvements - has been merged to `master`.