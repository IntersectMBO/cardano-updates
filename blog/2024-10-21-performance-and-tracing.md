---
title: Performance & Tracing Update
slug: 2024-10-21-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Started release benchmarks for Node `10.0`.
* Development: Governance action workload - alternative tx submission method built, passes tests.
* Tracing: Preparing the bump to `typed-protocols-0.3`.


## Low level overview


### Benchmarking

We've started the benchmarking process for the freshly tagged, fully Chang 2 capable Node version `10.0` pre-release.

### Development

Calibrating a governance action / voting workload within our submission service `tx-generator` is
more involved than anticipated.  

As measurements for performance impact of voting are required very shortly, we have - in parallel - created a
`nix` / `bash` based solution. That one uses `cardano-cli` for creating and submitting proposals and voting transactions, while the generator can run any other known workload simultaneously. Thus, we expect to get a clear performance delta between voting vs. no voting going on. This setup has already been deployed, and is
passing testing - soon to be used for the first real-world voting benchmarks.

The implementation however is less flexible, much less parametrizable, and in its design
tied to the very specific, fixed topology of the Nomad cluster. The workload definition inside
`tx-generator` will thus continue, and eventually be used as the standard for benchmarks targeting voting / governance.

### Tracing

The new tracing system, more specifically, the components that forward metrics and traces to `cardano-tracer`,
contain well-defined peers in the sense of the `typed-protocols` package. The upcoming bump to recently
released version `0.3` contains breaking changes in the package API. We've begun necessary downstream adjustments in our packages, re-defining aforementioned peers using the new API.