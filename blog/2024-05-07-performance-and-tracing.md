---
title: Performance & Tracing Update
slug: 2024-05-07-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* Benchmarking: We've performed and analysed benchmarks in the Conway era, with `DRep`s injected.
* Development: Tracing `DRep` data has been implemented; improved error reporting in `tx-generator` and analysis quick queries are ongoing work.
* Workbench: We now fully supports the new CLI `create-testnet-data` command and `DRep` injection into Conway genesis. Haskell profile definition work is ongoing.
* Tracing: Various additions to Node metrics are being worked on, such as build info and block producer role. Metrics naming will be further harmonized.
* UTxO Growth: We've finalized analysis and reports of all benchmarks targeting UTxO scaling scenarios.
* UTxO-HD / LMDB: We've performed multiple runs benchmarking the LMDB (on-disk) backend of UTxO-HD.

## Low level overview


### Benchmarking

We've run and analyzed a full set of benchmarks comparing the Conway ledger against the Babbage one, on Node `8.10.1-pre`. For Conway, our additional goal was to measure a vanilla ledger state against one with a large amount of `DRep`s - and delegations to those `DRep`s - present. The
benchmarks used our existing value and Plutus workloads to remain comparable to each other.

### Development

Additional ledger queries for the tracing system have been implemented and merged to `master`. Those capture the amount of, and the number
of existing delegations to, `DRep`s as trace output - and thus enable creating a metric on top of it, which can then be monitored.

The (in our case) non-deterministic nature of shutting down different cluster setups - both local and cloud-based - carries the possibility
that our transaction generation service occasionally misclassifies a regular shutdown as an error. Furthermore, in the case of network malfunctions, the service's errors are too unspecific. By implementing thread labels for submission threads, corresponding to each
submission target, and by adding custom smart signal handlers, we'll improve the generator's error reporting significantly.

The initial tests for quick queries are being developed further. We're moving towards a principled, and generalized, syntax that supports both
prepared, parametrizable queries from the application code, as well as ad-hoc queries stated e.g. on the command line.

### Workbench

The performance workbench now fully supports the new `cardano-cli` command `create-test-data`. We use it to inject both stake
delegated to stake pools into genesis, and - recently added - stake delegated to `DRep`s as well. It has been proven very useful
and versatile so far, and will eventually replace the current `create-staked` command.  

Work on porting our performance workbench's profile definitions to Haskell, and providing them with an appropriate test suite, is still ongoing; currently, we're integrating all new profile families that came out of the UTxO growth scenarios.

### Tracing

New metrics are being implemented for the tracing system. They will also be part of Prometheus output and as such accessible to
monitoring services. There'll be `cardano-node`'s detailed build info, as well as a node's block producer status, meaning the presence of forger credentials. Those new metrics are being backported to the legacy tracing system, too.  

Furthermore, we've determined the need to revisit metrics naming. There's still a divergence between naming in the legacy
and the new system. While this could be mitigated by passing in extra config options, we think that a transition to the new system
should not impose any unnecessary effort for node operators. A design to fully harmonize the existing naming schemata is currently being
set up.

### UTxO Growth

The UTxO Growth benchmarking series has been finalized. We've finished analyses and reports for all scenarios that
were tested and explored.   

The overarching questions were, given a network of 32GB host systems, how large can the UTxO set grow in general, 
how large can it grow before the nodes have to operate close to the RAM limit over extended periods of time, and how does scaling the UTxO set size affect network metrics, such as block diffusion. 

A dedicated "UTxO Scaling Squad" was set up, who was driving the entire process, and we enjoyed a very focused and productive collaboration with them.

### UTxO-HD / LMDB

Last not least, we were able to benchmark UTxO-HD's on-disk backend on a network of block producing nodes, on a recent `8.9.1` version
of `cardano-node`. The setup allowed of using a direct access SSD device for performance critical disk I/O, whereas the bulk of ChainDB and ledger snapshots remained on a standard AWS EBS volume.  

The benchmarks comprised both optimistic and pessimistic RAM assumptions for the host OS to further optimize I/O via page cache, as well as medium and large UTxO set sizes - the latter almost tripling current mainnet's size. The results were promising; the LMDB backend has proven to be able to accomodate large UTxO sets using significantly less RAM than the default all-in-memory node - and with a more than reasonable trade-off performance-wise. Furthermore, running with pessimistic assumptions, the performance impact on LMDB was very moderate only.