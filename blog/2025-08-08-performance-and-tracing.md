---
title: Performance & Tracing Update
slug: 2025-08-08-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Release benchmarks for `10.5`; LMDB (UTxOs on-disk) benchmarks.
* **Development**: New memory-constrained benchmark families, targeting UTxOs on-disk.
* **Infrastructure**: Migration of bench cluster completed.
* **Tracing**: Deprecation of legacy system; TCP forwarding merged; improved self-documentation.
* **Meetup**: Performance & Tracing meetup held in Cardiff, Wales.

## Low level overview


### Benchmarking

We've performed and analysed release benchmarks for Node `10.5`. The pre-release turned on peer sharing by default; our benchmarks indicated a negative performance impact when enabling this on block producers. The current release `10.5.1` does not enable peer sharing
for block producers; the published final results can be found in the [Performance report for 10.5].  

Additionally, we've achieved meaningful benchmarks for UTxOs-on-disk, which use the LMDB backend. Our new profiles support seamless scaling of RAM pressure on the backend, forcing disk I/O to a varying degree. We're currently analysing the observations made, and
gathering more data using different scaling factors if needed; the goal is a reliable assessmemt of LMDB's viability for block producing nodes.

### Development

Developing RAM-constrained benchmarks that would put tunable pressure on an UTxOs-on-disk backend posed a unique challenge.  

First and foremost, limiting memory for past in-memory benchmarks has never been a requirement at all. A consistent approach to do so given the existing deployment had to be built, along with pertinent diagnostic tooling. Second, the LMDB backend
is not managed by Haskell's GHC runtime, but comes with its own memory management - which required us to develop a double-pronged approach to selectively apply RAM limits. Lastly, other parts of the Node's code didn't support executing in tightly limited, constant
space and would lead to the OS terminating the Node for running out of memory.  

The interaction of various `cgroup` limits on Linux kernels, memory settings in our Nomad deployment and GHC RTS options let us create a stable runtime behavior over the course of the benchmark - a hard requirement, as system metrics taken at the
beginning of a run must be comparable to those towards the end. A blocker for initializing the Node for benchmarks was resolved in [cardano-node PR#6295]: Using `mmap` allowed us to use the OS's virtual memory subsystem for on-demand loading instead of it being
managed by the Haskell runtime - which significantly brought down the heap size required for the task.

### Infrastructure

The migration to the new benchmarking cluster is finalized. For representative performance measurements of UTxOs-on-disk, we require direct SSD storage on each cloud machine instance. Along with deploying the new hardware came a full upgrade of OS and `nixpgks` software.
Validating the migration was extra effort: A seemingly innocent cloud provider service (which was newly added to their `NixOS` image) did nothing more than a heartbeat request every 5 min to some central infrastructure server. Yet, it caused the
standard deviation of some of our network related metrics to double - thus reducing confidence in those metrics.  

After validation, we performed a complete re-run of existing performance baselines on the new hardware.

### Tracing

Work on the new tracing system has yielded various improvements. Trace forwarding over TCP is now fully functional and merged to `master`. This will make setting up forwarding to remote hosts much easier than by using UNIX domain sockets / Windows named pipes.
However, it's recommended for secure and isolated environments only ([cardano-node PR#6241]).  

The auto-documentation feature of the new system has improved user experience; the generated documents are now structed in a more accessible way, and contain necessary metadata as to which Node version / commit is being documented by them ([cardano-node PR#6283]).  

Another refactoring targeted the new system's core library, `trace-dispatcher`. It now comes with a minimal dependency footprint and fully equipped with all necessary type definitions to be built using Haskell's community packages (Hackage) exclusively. This greatly
enhances the ease to use it for other applications than the Node as well - Cardano or non-Cardano ([cardano-node PR#6268]). Increasing the dependency footprint is only required for additional features, like trace forwarding.  

With the upcoming Node `10.6` release, we plan to officially deprecate the legacy tracing system. This means it will enter a grace period of ~3 months, where both systems coexist in the same Node build; then, it will be decommissioned and actively removed from the code base.

### Meetup

We organized 2025's in-person team meetup in Cardiff, Wales. We had highly insightful and productive days - I would like to thank all team members who contributed, and extend my special thanks to guests from outside of the team: Your 
presence and contributions were greatly appreciated, Can Huzmeli and Neil Davies.


[Performance report for 10.5]: https://updates.cardano.intersectmbo.org/reports/2025-07-performance-10.5.0
[cardano-node PR#6295]: https://github.com/IntersectMBO/cardano-node/pull/6295
[cardano-node PR#6241]: https://github.com/IntersectMBO/cardano-node/pull/6241
[cardano-node PR#6283]: https://github.com/IntersectMBO/cardano-node/pull/6283
[cardano-node PR#6268]: https://github.com/IntersectMBO/cardano-node/pull/6268
