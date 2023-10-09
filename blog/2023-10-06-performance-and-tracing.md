---
title: Performance & tracing update
slug: 2023-10-06-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Continued benchmarking of UTxO-HD and performed benchmarks for the new tracing system.
* Consensus QTAs: Our protoype approach is applied to potential regression fixes with GHC 9.2.7.
* Development: We've developed strategies for future benchmarks of PlutusV3 and UTxO-HD's on-disk backing store.
* Tracing: The machine-readable tracer configuration has been merged. Optimization of `cardano-tracer` started.
* Nomad backend: Ongoing variance analysis and refined cluster topology.


## Low level overview

### Benchmarking

Performing and analyzing benchmarks for the UTxO-HD feature is an ongoing effort; we can reliably assess the
performance of the in-memory backing store and evaluate possible optimizations (or regressions) for it.  

Furthermore, benchmarks of our new tracing system after several rounds of optimization have been performed. The results
show all key metrics now being unaffected by the choice of tracing system (legacy or new) - with the new system being able to provide more features and flexibility in comparison. The benchmarks also highlighted further points for optimization, with the focus now on the `cardano-tracer` service.

### Consensus QTAs

The Quantitative Timeliness Agreements (QTA) prototype is being used in coordination with Consensus and DevX to validate a series of patches that address optmization opportunities which GHC8.10 seizes, but GHC9.2 misses. The
feedback from this approach is much more immediate than running benchmarks at system integration level. But once we eventually do, we expect to reproduce the relevant observations - which would mean a big step towards maturing the prototype.

### Development

Benchmarking UTxO-HD's on-disk backing store needs special attention: in virtualized environments, disk I/O is not a reliable metric as it passes several layers of indirection. As this is the very metric which will influence overall performance of this UTxO-HD flavour, we developed a plan to monitor such nodes, connected to a running network, on dedicated hardware - having direct SSD access. Replicating this setup for an entire benchmarking cluster of such nodes will be a future effort.  

PlutusV3 will come with new builtins and a new cost model. It will take a specialized benchmark to ascertain the soundness of that model running a full cluster of nodes, possibly stressing expensive builtins. At the same time,
we'd like to validate the many improvements that have gone into the Plutus evaluator.

### Tracing

The focus for further optimization of the new tracing system has shifted to `cardano-tracer` - the service
receiving and processing traces from one (or more) nodes. Whilst undisputed that the code living in `cardano-node` is
more performance critical, the receiving service must still minimize its resource footprint. Moreover, it can
generate load for a running node when querying data points from it - which calls for tight control of that mechanism and its possible configurations.

### Nomad backend

Variance analysis of new nomad backend has revealed a necessary adjustment of the cluster's topology. We repeated
the same analysis and now see even better confidence in the measurements taken with nomad. This concludes the work on the backend proper for the time being. The last steps before production use will focus on the interface between backend and our workbench, which provides all high-level benchmark definitions and analysis machinery.