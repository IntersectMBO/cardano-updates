---
title: Performance & tracing update
slug: 2023-01-11-performance-and-tracing
authors: deepfire
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

Since our last update, we focused on infrastructure work:  benchmark enablement, tracing system, benchmark environment merge and open source support:

1. SECP benchmarking enablement is underway:  enabling SECP runs in our cardano-ops benchmarking environment is still in progress.
2. The new tracing system:  the improved API of the new tracing system was implemented, and we're now porting the tracing integration layer over.
3. Infrastructure:  the mainnet protocol parameter history is now encoded in the workbench profile machinery at epoch-level granularity, which gives us a systematic approach towards description of past and future benchmarks.
4. New benchmark deployment infrastructure:  we've made some progress on Nomad deployment backend, shared by both of the data publishing and benchmarking needs.
5. Legacy benchmarking:  we've started merging the legacy benchmark deployment infrastructure into the workbench.
6. Open sourcing:  the benchmarking data publishing tool was adapted to the Nomad execution environment provided by SRE, pending final deployment.

## Performance

The AWS cluster infrastructure necessary for SECP benchmarking is still being worked on.

## Tracing

The improved tracing internals were implemented, and we're now into the phase of updating the tracing integration, which is also mostly done.

## Infrastructure

Thanks to collaboration with the DevX team, we have identified and pursued a design that would enable our Nomad workbench backend to execute deployments of both the benchmarking cluster and our data publishing components.

On the benchmark parametrisation front, we have eliminated a long-standing weakness in the way we were specifying the protocol parameters.
We now have a very clear and granular method to keep track of protocol parameter evolution -- e.g. the mainnet history changes are now tracked at epoch granularity, while also allowing for systematically described change overlays.  This makes the benchmark profile definition much more clear and robust against mistakes.

We also started a merge of the legacy benchmarking environment (based on cardano-ops) into the workbench.  The separation between environments was too costly, causing us to reimplement any benchmarking change twice -- first, during development, in the workbench, then in cardano-ops.  In addition, maintenance of compatibility code was incurring additional costs, slowing benchmark data analysis development.
Once this merge is complete, this will allow us to sharply cut the benchmark development cycle and overheads.
