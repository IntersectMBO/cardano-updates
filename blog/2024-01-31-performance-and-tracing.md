---
title: Performance & Tracing Update
slug: 2024-01-31-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: GHC 9.6.3 benchmarks for node `8.7.2` have been performed.
* Development: Additional features for our reporting pipeline, while simultaneously reducing dependency footpring.
* Tracing: Implementation for `cardano-tracer` to work on handles instead of files; work on New Tracing Quickstart document has begun.
* Nomad cluster: We're preparing an upgrade to the latest Nomad version.


## Low level overview

### Benchmarking

We've performed a full set of GHC 9.6.3 benchmarks for node `8.7.2`. For recommending GHC9.6 as a default build platform for `cardano-node` - from a performance perspective - we observe only one residual issue. As a way to
address this, we've decided to create a reproduction benchmark targetet to the affected component.

### Development

Our reporting pipeline will be expanded to support a wider range of rendering formats, as well as report templates. As the pipeline is part of our workbench - and thus gets downloaded and built when entering the workbench shell - it's 
good practice to keep a small dependency footprint. When reworking the pipeline, we aim to simultaneously reduce dependencies.

### Tracing

So far, `cardano-tracer` has internally been using files, or file names, for the purpose of logging trace messages it receives via forwarding. This is simple, but induces quite some overhead at runtime: files have to be opened and closed for each message.
Using and managing open file handles inside `cardano-tracer` does remove that overhead, but unsurprisingly introduces some complexity into the application code. Currently, we're working on implementing that change.  

Furthermore, we're working on a Quickstart document for the new tracing system, with end users as its intended audience. It will contain recommended production use setup(s), and how to efficiently configure and run them step by step. Additionally, it
will provide a brief, but comprehensive overview over the features at the user's disposal.

### Nomad backend

On the Nomad cluster, we've experienced undesired system behaviour when the heartbeat between the Nomad server and a client is interrupted temporarily - although the Nomad job itself is still 100% functional. A Nomad
upgrade to the latest version promises to fix that, but it turn comes with other issues. We're currently working on adapting our automation and deployment around those known issues, before we can eventually
apply the upgrade. 
