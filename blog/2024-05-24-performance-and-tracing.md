---
title: Performance & Tracing Update
slug: 2024-05-24-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Node versions `8.9.3` and `8.11.0`; new `PlutusV3` plus addtional `DRep` benchmarks; re-evaluation of network latency.
* Development: BLST workload for PlutusV3 was implemented; improved error/shutdown behaviour for `tx-generator` is in testing phase.
* Workbench: UTxO-HD tracer configs harmonized. New `plutusv3` profiles supporting experimental budgets. Work on Haskell profile definition is in validation phase.
* Tracing: New metrics and handle registry feature merged to `master`. Work on metrics naming ongoing. Factoring out RTView component has begun.


## Low level overview


### Benchmarking

Runs and analyses of full sets of release benchmarks have been performed for Node versions `8.9.3` and `8.11.0`.  

For comparison of how the Conway ledger performs when injecting large amounts of `DRep`s and delegations versus one with zero `DReps` we've run additional configurations with existing workloads from release benchmarking. So far we've found
that the number of `DReps` in ledger scales well and does not lead to notable performance penalties.  

Additionally, we've successfully run the baseline for the upcoming `PlutusV3` benchmarks on our Nomad cluster. Those will, given the new V3 cost model, serve to determine headroom, or constraint, regarding resource usage and network metrics when
operating under various execution budgets.  

Last not least, with much appreciated support and feedback from the network team, we performed a re-evaluation of the network the latency matrix for our benchmarking cluster. The cluster stretches over three regions globally. Due to unknown changes in the underlying
hardware infrastructure, a slight delay between Europe and Asia/Pacific regions could be measured. We needed to adjust some existing baselines accordingly - otherwise, this delay could be falsely attributed to a software regression.

### Development

We have implemented a benchmarking workload using `PlutusV3`'s new BLST internals. As those do little memory allocation, but require more CPU steps, this workload will allow us to focus on that particular aspect of block and transaction budgets.
 

The `tx-generator` service will now label each submission thread with its submission target. Additionally, it has been equipped with custom signal handlers. This will improve both how gracefully shutdowns can be performed, and how
precise error reporting is done when losing connection to a submission target. Last not least, the service now supports a configurable `KeepAlive` timeout for the `NodeToNode` mini-protocol - accounting for very long major GC pauses on
submission targets under very specific benchmarking workloads. Those features have entered testing phase.   

### Workbench

Thanks to feedback from the consensus team, we've harmonized tracing configurations for our benchmarks between regular and UTxO-HD node. As the latter is more verbose by default, this is a confounding factor for our metrics: We're analysing north
of 90 traces per second per cluster node, so all node flavours are required to be equally verbose.  

The benchmarks based on the BLST workload now additionally support scaling budget components up or down at will. This means we can run a given cost model against custom execution budgets, controlling the point where the workload will exhaust it. This enables comparison
of performance impact of potential changes to those budgets.  

Porting our performance workbench's profile definitions to Haskell has been nearly completed, and an adequate test suite been implemented. This new component has now entered validation phase to make sure it correctly replicates all existing profile content.

### Tracing

Two new metrics for `cardano-node` have landed in `master` - both for new and legacy tracing systems. They provide detailed build info, and indicate wether the node is a block producer or not.  

We're now working on closing the gap in the metric naming schema between new and legacy tracing. The aim is to allow for a seamless interchange, without additional configuration required, so that all existing monitoring services can rely on identical metric
names with identical semantics.  

Furthermore, work has begun to factor out the RTView ("real-time view") component of `cardano-tracer` in the new tracing system. Unfortunately, the component has remained in prototype stage for over a year, and has revealed some design shortcomings. It's aim
is to provide an interactive, real-time dashboard based on metrics from all nodes connected to `cardano-tracer`. The current design has all front-end side code baked into the backend service, requiring to rebuild the entire service in Haskell even for simple changes in the
dashboard. We decided to isolate the component in the current code base, which still allows for optionally enabling it for a build. The long term goal however is to convert it into a downstream service: It will ingest metrics by reforwarding, or querying a REST API, and will provide
a clear separation of frontend facing code. Thus we, and anybody, can use their favourite web technology for visualization of metrics.
