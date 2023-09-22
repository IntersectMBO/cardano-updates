---
title: Performance & tracing update
slug: 2023-09-22-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've performed both low-level network and high-level variance analysis of our benchmarking clusters.
* Infrastructure: Our reporting pipeline was adjusted to classify various workloads easily reducing rework time.
* Tracing: Work on machine-readable tracing of tracer configuration is ongoing.
* Nomad backend: We've been able to eliminate several possible confounders on the nomad cluster.
* Team: We're currently onboarding a new team member: Welcome to Cardano Performance & Tracing, Baldur Blöndal!


## Low level overview

### Benchmarking

As part of the effort to bring the Nomad backend into production use, we've been equipping both that and the existing benchmarking
backend with means to measure and document network latency for each run. Furthermore we've implemented means to
capture TCP packets for a limited time window during a benchmarking run - which will allow us to spot differences
in the behaviour of the underlying networking stack at OS level.  

Additionally, we're running variance analysis in parallel on both backends to ascertain confidence in metrics originating from either. We've concluded that baseline profile runs aren't directly comparable between the two, so we decided
to compare standard deviations instead to validate the measurements from nomad.

### Infrastructure

Reporting on benchmarks does require human time and effort to rework the final document. Improvements to the reporting pipeline
have been merged to `master`. They reduce the time necessary to do so by various changes to the template and the workload classification logic in analysis.  

Beyond that, we've looked into issues where services would quit with an unjustified exit failure upon shutdown - under rare circumstances. By reworking shutdown logic for `trace-dispatcher` and `tx-generator` we were able to address those issues.

### Tracing

After various steps in constructing a configuration upon node startup, it is vital to document
which runtime configuration the node arrived eventually. We're working on providing a machine-readable JSON/YAML
trace message for that purpose.  

This will facilitate hot-reloading a node's tracer configuration in the future: users will be able to take such a trace message, apply their intended change and hot-reload it immediately into the node. 

### Nomad backend

As with the existing benchmarking cluster, nomad is currently under scrutiny with regard to the reliability of metrics it
produces, as well as the behaviour of its OS-level network stack. For instance, differing kernel versions can have an
impact on our measurements, as we'd be basically using two different instruments to take them.  

Along the way we've already been successful in eliminating some possible confounders that had been introduced by the nomad service
or the slightly different system architecture of the new cluster.

### New team member

Baldur Blöndal is an extremely capable and experienced Haskell developer. Also, he's an excellent fit for our existing team.
So I'm very pleased to welcome him onboard with IOG, and with Performance & Tracing. He will be working on `cardano-tracer`, the component receiving, processing and making available node traces and metrics.