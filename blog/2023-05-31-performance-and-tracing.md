---
title: Performance & tracing update
slug: 2023-05-31-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've performed and analysed first benchmarks with GHC9.2 builds. Additionally we have developed an early indicator for how build config changes might reflect on metrics from our model cluster.
* New tracing: Collaboration with Galois led to the new tracing system to be equipped with a re-forwarding mechanism.
* Nomad backend: Porting the 52 node model cluster to nomad cloud is ongoing, with the focus on deployment and health checks.


## Low level overview

### Benchmarking

The first set of runs with GHC9.2 as a build platform are in. We've discovered a significant difference in resource profile usage compared to GHC8.10. Further investigation uncovered the need for benchmarking another parameter change in the build
configuration: As it stands, the `ghc-bignum` package is using the Haskell `native-backend` as a default. We strive
to benchmark a build with the `gmp-backend` next.  

A variant of our `forge-stress` local benchmark has been set up to serve as an early indicator for the resource usage profile
we'd expect to observe on the model cluster. This provides us with a much tighter feedback loop, as local run duration is way
shorter. This indicator is specific to changes in the configuration of build and the runtime systems, and will be of great
support when evaluating different compiler versions or RTS flags incrementally.

### Tracing

The hub of the new tracing system `cardano-tracer` is designed with a fixed output behaviour, which is limited to various
logging options. Thanks to the contribution from Galois, that design is now extended to be able to re-forward all, or a pre-filtered portion, of traces from the node in a configurable manner. This will enable downstream applications to 
directly receive the set of trace values relevant to their logic, without any additional cost for the node itself at all.


### Nomad backend
We're currently working out the details of efficiently deploying and monitoring a fleet of 50+ nodes, along with
job definitions for tracing and transaction generation. Scaling up to those many instances, and monitoring an ongoing
benchmarking run required us to fine-tune communications with the nomad server.  

Related to that, the new cloud backend will provide a monitoring and health-checking mechanism which is far more flexible
and offers more detailed insight than the previous iteration in `cardano-ops`. The backend will enable you to formulate
very specific conditions for an ongoing run to be considered healthy, and offer automation of certain actions should these conditions not be met.
