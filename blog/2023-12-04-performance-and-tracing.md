---
title: Performance & Tracing Update
slug: 2023-12-04-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Release benchmarking for node `8.7.0`. Also, we performed the first-ever Conway benchmarks.
* Development: Conway capability of our workload generator has been implemented and merged to `master`.
* Infrastructure: Changes to our workbench facilitating easy access and archiving of raw benchmarking data.
* Tracing: Quality-of-life improvements to tracing output and addition of a test suite.
* Nomad cluster: Expand the list of benchmarking profiles that can be run on Nomad; generalize cluster topology generation.


## Low level overview

### Benchmarking

A full set of benchmarks for node `8.7.0` has been performed, with the focus of enabling the next mainnet release. We've measured slight performance improvements of `8.7.0` over `8.6.0`, and can confirm no regressions have been introduced.

Furthermore, we've run system integration level benchmarks in the Conway era for the first time, on the same node version.
Only Babbage-compatible workloads have entered comparison as to ascertain performance consequences of only changing the ledger version, and nothing else. The results are very promising, as we could show that switching ledger versions for existing workloads does not come with a performance penalty.

### Development

Our transaction generator has been extended to be able to submit all present benchmarking workflows in the Conway era.
Currently, we're looking into adding Conway-exclusive features, such as `DRep` registration. Those would be submitted at the very beginning of a run, as we're interested in seeing potential performance implications of maintaining `DRep` sets of varying size in ledger. Furthermore, this will serve as the basis for future development Conway-exclusive workloads, such as governance actions or vote tallying.

### Infrastructure

As our workbench will be pivotal in orchestrating and organizing benchmarking runs on the Nomad cloud backend, we've
improved how raw benchmark data is tagged, which metadata is documented in an automated manner. This enhances both access to existing run sets, as well as maintaining an archive for benchmarking data.

### Tracing

The new tracing system is currently receiving usability improvements as we're reworking the output of several trace messages.
Additionally, we're setting up a rigorous test suite to provide safety for future development of and component integration inte the system.

### Nomad backend

We've been working on adapting various benchmarking workloads, which are defined by our workbench's profiles, to running on the new infrastructure. This mainly concerns a workload utilizing Plutus, as well as peer-to-peer flavoured workloads. Furthermore, we're implementing a solution to create all possible cluster topologies algorithmically, instead of still using fixed literal definitions for some cases.
