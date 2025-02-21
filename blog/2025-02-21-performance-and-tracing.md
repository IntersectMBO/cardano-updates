---
title: Performance & Tracing Update
slug: 2025-02-21-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: Plutus memory budget scaling benchmarks; UTxO-HD benchmarks, leading to a fixed regression; Genesis benchmarks.
* Development: Ouroboros Genesis and UTxO-HD adjustments in workbench; Maintenance tasks.
* Infrastructure: Removing outdated deployments; Haskell profile definition merged; workbench simplification ongoing.
* Tracing: C library development ongoing; Feature implementation according to community feedback; test removeal of old system.

## Low level overview


### Benchmarking

We've run and analyzed scaling benchmarks of Plutus execution budgets. In this series of benchmarks, we measured the performance impact of changes to the memory budgets (both transaction and block). We observed
an expected, and reasonable, increase in certain metrics only. Furthermore, we've shown this increase to be linearly correlated to the budget raise. This means that when exploring the headroom of those budgets,
the performance cost for the network is alawys predictable. The benchmarks serve as a base for discussing potential changes to those budgets in Mainnet protocol parameters.  

When building a performance baseline for UTxO-HD, we were able to locate a regression in its new in-memory backing store, LedgerDB V2. We created a local reproduction of that for the Consensus team,
who was able to successfully adress the regression. A corresponding benchmarking report will be published on [Cardano Updates].  

Furthermore, we've performed benchmarks with the Ouroboros Genesis feature enabled and compared them to the release benchmark baseline. We could not detect any performance risk to the network during
"normal operations", i.e. when all nodes are caught up with the chain tip.


### Development

During the course of building performance baselines for Ouroboros Genesis and UTxO-HD, we've developed various updates to the performance workbench to correctly handle the new Genesis consensus mode, as well
as adjustments to the latest changes in the UTxO-HD node.  

Additionally, we built several small quality-of-life improvements for the workbench, as well as investigated and fixed an inconsistent metric ([Node Issue #6113]).

### Infrastructure

The recent maintenance work also extended to the infrastructure: We've removed the dependency on deprecated environment definitions in `iohk-nix` by porting the relevant configurations over to the workbench. This
facilitates a thorough cleanup of `iohk-nix` by the SRE team.  

As the Haskell package defining benchmarking profiles has been merged, and all code replaced by it successfully removed, we're now working very hard on simplifying the interaction between the workbench
and `nix`. This mostly covers removing redundancies that have lost their motivation, applying to both how workbench calls itself recursively multiple times, as well as how (and how many) corresponding `nix` store paths
are created when evaluating derivations. This will both enhance maintainability, and result in much lighter workbench builds locally - but especially on CI runners.

### Tracing

Work on the self-contained C library implementing trace forwarding is ongoing. As forwarding is defined in terms of an `OuroborosApplication`, it's non-trivial to re-implement the feautures of the latter in C as well - 
such as handshake, version negotiation, and multiplexing. However, for the intended purpose of said library, it is unavoidable.  

We've also started working on a new release of `cardano-tracer`, the trace / metrics consuming service in the new tracing system. This release is geared towards feature or change requests we've received from the community
and found very valuable feedback. Having a seperate service to process all trace output enables us to react much quicker to this feedback, and decouple delivery from the Node's release cycle.

Last not least, we're doing an experimental run on creating a build of Node with the legacy tracing system removed. As the system is deeply woven into the code base, and some of the new system's components 
keep compatibility with the old one, untangling and removing these dependencies is a large endeavour. This build serves as a prototype to identify potential blockers, or decisions to be made, and eventually
as a blueprint for removing the legacy system in some future Node release.


[Node Issue #6113]: https://github.com/IntersectMBO/cardano-node/issues/6113
[Cardano Updates]: https://updates.cardano.intersectmbo.org/reports