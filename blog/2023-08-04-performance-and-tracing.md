---
title: Performance & tracing update
slug: 2023-08-04-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We're adjusting the benchmarking cluster to handle runs for node version `8.2.0`.
* Tracing: We've finished optimization of the new tracing system and added extra robustness with regard to namespacing.
* Infrastructure: We've been working on making all benchmarking code compliant with the latest GHC9.6.
* Nomad backend: The new backend has seen adjustments due to a change of underlying hardware. Additionally, we've successfully performed various benchmarking runs on it.


## Low level overview

### Benchmarking

The `8.2.0` version of `cardano-node` required adjustment of some of the sanity checks that are part of our benchmarking
cluster automation. We've pinpointed the necessary changes and are currently setting up the cluster for the new node version.

### Tracing

The optimization efforts for the new tracing system have been completed and have significantly reduced the resource footprint
when using it as default for a running node.  

A linchpin of the new system is the organization of traces into a namespace hierarchy. This affects configuration, self-documentation as well as rendering of desired trace messages. The new system is now equipped to detect any
inconsistency in the whole set of tracers, defined across all components, even if they are never turned on in a running node.
This feature adds another layer of robustness to the whole system.

### Infrastructure

A potential switch to GHC9.6 (or higher) required some work on our code bases to make it compliant with recent compiler
versions. We've future-proofed our benchmarking code.

### Nomad backend

The hardware cluster that our nomad backend was accessing has been changed, and we were able to adjust our backend
accordingly without touching its higher level abstractions and functionality. Moreover, with the new hardware and cluster setup, certain tasks such as retrieving run artifacts or healthcheck monitoring have become more performant.  

The validation phase is ongoing. We were able to perform successful runs and analyses for various `8.x` node versions, including `8.2.0-pre`. With parallel runs on the current cluster, we hope to measure the same effects we've observed with the
nomad backend - which will be a big step towards production use.