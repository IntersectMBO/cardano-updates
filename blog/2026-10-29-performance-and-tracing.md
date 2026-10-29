---
title: Performance & Tracing Update
slug: 2026-10-29-performance-and-tracing
authors: mgmeier
tags: [performance-tracing]
hide_table_of_contents: false
---

## High level summary

* **Benchmarking**: Preliminary benchmarks on the Leios prototype and the Leios Week42 build; refinement of performance analysis.
* **Development**: In preparation for Node 11.2, we focused on fixing issues and addressing reports from the community.
* **Tracing**: Switch to Hermod Tracing - preparation phase concluded; Optimization pass for trace filtering; Alert manager and Native spans ongoing.
* **Infrastructure**: New Dijkstra-scoped benchmarks such as nested transactions and reference script measurements.
* **Leios**: Tx validation benchmark on SPO hardware analyzed.

## Low level overview

### Benchmarking

The Performance & Tracing team has done several cluster benchmarks on the Leios prototype and the subsequent Leios Week42 build. There were several focus areas we watched out for, such as the ratio of certified EBs (Endorser Blocks). With voting traffic and timing constraints, and
physical bandwidth being known limiting factors, we wanted to measure both high- and low-confidence parameter sets for the protocol in that regard. Additionally, we compared RBs' (Ranking Blocks') performance properties to a Praos-only baseline - how do block production, diffusion and adoption metrics fare? Then,
we quantified mempool fragmentation and potential improvements due to the TxCache. Last but not least, as usual, our eye was on resource usage of a fully integrated build.  

Our surgical windows into Leios performance are still being adjusted, based on the observations we make and asks from the Leios team; we're continuously refining coverage of our performance reports for Leios. All of the findings have
been shared with the Leios team; however, they're not a public item as they do not describe an official release candidate and already contain known bottlenecks that are actively being worked on.  

### Development

In preparation for Node 11.2, the team worked through a handful of community-reported bugs. A counter tracking slots missed while block forging was intentionally disabled used to jump by the whole disabled interval the moment forging resumed, booking time that was never actually missed; this is now fixed ([cardano-node PR#6726]). On Windows - and on Linux under a non-UTF-8 locale - the node could crash outright on a non-ASCII host or node name, or emit trace lines that weren't valid UTF-8; both `cardano-node` and `cardano-tracer` now force UTF-8 console encoding on startup regardless of the host's locale settings ([cardano-node PR#6731]). On the Hermod Tracing side, the Prometheus metrics endpoint now exposes its label sets with full conformance to the Prometheus text format, fixing a parsing issue some scrapers ran into ([hermod-tracing PR#20]).  

### Tracing

As reported in earlier posts, the plan is to replace the node's current tracing system (`trace-dispatcher`) with Hermod Tracing once it's ready, bringing a cleaner API/core split, live reconfiguration of trace filter rules, and a single source of truth for defining tracers used across emission, documentation and consistency checks. Hermod Tracing's packages have now reached version 1.1.0, completing the API rework needed so the node's own dependencies - `ouroboros-network`, `cardano-diffusion` and `ouroboros-consensus` - can build against Hermod's lightweight public interface alone, rather than pulling in the full implementation package ([hermod-tracing PR#21]). With this now tested together with the existing node codebase, the preparation phase for the tracing system switch is concluded.  

Separately, the team has been making the cost of a filtered-out trace message as cheap as possible, since most emitted traces are dropped by a severity or namespace filter before they're ever written anywhere. A series of changes to Hermod's internal configuration and message-combination logic - avoiding repeated allocations, building configured tracers once instead of per message, and specialising hot code paths - cut the cost of discarding such a message by roughly 7x, with a similar drop in memory allocated per message ([hermod-tracing feature branch]). The work isn't in a PR yet, pending full validation.  

The monitoring/alarm system ([cardano-node PR#6664]) as well as library support of tracing spans ([hermod-tracing PR#19]) is ongoing work, with the latter being finalized and under review currently.  


### Infrastructure

In preparation for the Node 11.2 release, the team extended our performance workbench (the benchmarking automation framework) with new Dijkstra-scoped profiles: nested transactions - transactions that themselves carry sub-transactions - and reference-script-based Plutus calls, benchmarked alongside the existing witness-script path ([cardano-node feature branch]). Getting representative results for the nested-transaction profiles also required lowering how long a node waits before requesting transactions from a newly connected peer, from the default 60 seconds down to 1, so the new profiles' load reaches the whole cluster fast enough to produce meaningful numbers.  


### Leios

Validating that Leios's ledger-side assumptions hold up on a real implementation is an effort we've reported on over several past posts: can the ledger keep up with the transaction throughput Leios is designed for, and - since that depends heavily on disk I/O once the UTxO set no longer fits in memory - how much does storage hardware matter ([Leios issue#553])? Last month we turned the resulting transaction-validation benchmark into a standalone executable and shipped it to SPOs so it could be run directly on their own hardware, without a `nix` or Haskell/`cabal` stack.  

We've now collected and analysed submissions from a broad sample of real SPO machines. Raw read latency per transaction varied by about 32x across the field; once that's adjusted for each machine's raw CPU speed (which accounts for much of the spread on its own), the gap narrows to roughly 7-8x, driven mainly by one factor: whether a disk's write cache is write-back or write-through. Write-through disks were close to 6x slower than write-back ones before adjusting for CPU, and still more than 3x slower after - unless they sit behind a battery-backed RAID controller, which closes most of the gap. The full breakdown is available for anyone who wants to dig deeper ([Benchmark results]).  


[References for Development]: # 
[hermod-tracing PR#20]: https://github.com/IntersectMBO/hermod-tracing/pull/20
[cardano-node PR#6726]: https://github.com/IntersectMBO/cardano-node/pull/6726
[cardano-node PR#6731]: https://github.com/IntersectMBO/cardano-node/pull/6731

[References for Tracing]: # 
[hermod-tracing PR#19]: https://github.com/IntersectMBO/hermod-tracing/pull/19
[hermod-tracing PR#21]: https://github.com/IntersectMBO/hermod-tracing/pull/21
[hermod-tracing feature branch]: https://github.com/IntersectMBO/hermod-tracing/tree/mkarg/opt-trace-filtering
[cardano-node PR#6664]: https://github.com/IntersectMBO/cardano-node/pull/6664

[References for Infrastructure]: # 
[cardano-node feature branch]: https://github.com/IntersectMBO/cardano-node/tree/russoul/prepare-11.2-subtx

[References for Leios]: # 
[Benchmark results]: https://claude.ai/artifact/3fA1dgc5ypDEvmy9Zcybgn

[External References]: # 
[Leios issue#553]: https://github.com/input-output-hk/ouroboros-leios/issues/553

