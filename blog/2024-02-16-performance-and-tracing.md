---
title: Performance & Tracing Update
slug: 2024-02-16-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarks for `8.8.0` have been performed; we created a local repro for a residual issue.
* Performance: We've implemented and benchmarked two candidates investigating residual issues with GHC9.6.
* Development: Work on the reporting pipeline is ongoing; integration of `DRep`s into benchmarking workloads has begun.
* Workbench: Implementation of high-level profile definition is ongoing. 
* Tracing: The handle registry feature for `cardano-tracer` is completed; currently in testing.
* Nomad cluster: Increased robustness of deployment and run monitoring has been merged; work on garbage collection has started.


## Low level overview

### Benchmarking

We've performed a full set of release benchmarks for Node `8.8.0-pre`. Comparing with release `8.7.2`, we could
not detect any performance risks for that version. We even saw a slight improvement in block fetch related metrics, which led to slightly improved block diffusion times.  

Furthermore, we've managed to boil down a complex residual performance issue measured on the cluster to a local reproduction. This enables our DevX team, with highly specialized knowledge of GHC's compiler internals, to 
investigate each step in code generation and optimzation, and independently observe the effects of code changes to the affected component.

### Performance

Work on the remaining performance issue with GHC9.6 led us to produce two candidates based on Node `8.7.2`, benchmarking
the implacations local small changes have for GHC9.6's optimizer. Though those candidates did not uncover the
issue's root cause, they were able to disprove a hypothesis as to its nature, and quantify the performance impact of said small changes.

### Development

Node `8.8.0` comes with capabilities to inject `DRep`s and `DRep` delegations into Conway genesis. We've started work
on integrating those into our automations, and setting sensible values for benchmarking. The aforementioned
delegations representing a new data structure in the Conway ledger, we aim to run
existing workflows extended with varying sizes of that new structure, measuring their pressure on ledger queries and operations.

### Workbench

The performance workbench relies heavily on shell scripting and manipulating JSON data for a great part of its features. This approach
is very effective for quick experimentation, but lacks in verifiable properties as well as accessibility for new users of workbench.

After the successful Haskell port of cluster topology creation, and verification, we're currently applying
the same model in porting the entirety of benchmarking profiles to Haskell. The obvious gains are widening workbench's
audience both for users and developers, as well as implementing a principled approach to all workbench data structures and transformations.  

At the same time, we're porting workbench's many options to create fine-tuned geneses, following the same approach.

### Tracing

We've outfitted `cardano-tracer` with a handle registry feature that lets the service work on file handles internally, rather than opening and closing files for each operation. The feature is completed; at the moment we're adding
appropriate test cases to the service's test suite for validation of its behaviour, and for safeguarding future development.

### Nomad backend

Several improvements for our cluster backend have been merged to `master`, increasing its overall robustness. We can now safely handle some corner cases where Nomad processes unexpectedly exited, or deployments errored out. Furthermore, an ongoing
run can now reliably survive a temporary loss of heartbeat connection between Nomad client and server, without
the benchmarking metrics being affected.  

Currently, we're working on a reliable automation of garbage collecting old `nix` store entries on the cluster machines, as they fill up disk space. The design has to consider both not interfering with ongoing benchmarks, and
avoiding deployment overhead caused by cleaning the store too frequently.