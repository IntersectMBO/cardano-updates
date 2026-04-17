---
title: Benchmarking -- Node 10.7.1
slug: 2026-04-performance-10.7.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.6.2` - the current Node 10.6 performance baseline
* `10.7.1` - the latest Node 10.7 release

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each txn consumes 2 inputs and creates 2 outputs, changing the UTxO set. Full blocks (> 80kB) exclusively; high submission pressure (TPS > 10).
2. _Plutus_: Each txn contains a Plutus script exhausting the per-tx execution budget. Small blocks (< 3kB) exclusively; low submission pressure (TPS < 1).

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era using the in-memory LedgerDB backend.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `10.7.1` exhibits a _massive reduction_ in Process CPU usage -- 46% under saturation workload, and 71% under Plutus workload.
2. Allocation rate and Minor GCs _increase moderately_ (by 14% - 16%) under saturation workload; however, GC CPU usage still shows a 4% _improvement_.
3. Under Plutus workload, they both slightly _decrease_ (by 4%), and GC CPU usage _improves_ by 16%.
4. Major GC events _occur less frequently_, by 16% - 18%, depending on workload.
5. Observed CPU 85% spans exhibit a _decrease_ in duration as well -- ~1.3 - ~1.4 slots depending on workload.
6. Average RAM usage exhibits a _slight increase_ by 2% for either workload.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Anomaly control

1. Under saturation, Height & Slot battles on `10.7.1` occur 12% _less frequently_.

### Forging Loop

1. Under saturation workload, there are no significant changes in block production metrics.
2. Under Plutus workload, there are various small improvements in Ledger Ticking (4ms), Self Adoption (2ms) and Forged to Sending (1ms).
3. As a result, a block producer is able to announce a new header 3ms or 13% _earlier_ into a slot (Plutus workload only).

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under saturation workload, Block Fetch duration _decreases_ by 7ms or 2%.
2. Average Adoption times on the peers _improve_ by 2ms / 3ms (3% / 8%), depending on workload.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Cluster adoption metrics on `10.7.1` exhibit a _small but consistent improvement_ by 2% - 3% for either workload in the 80th centile and above.

### Conclusion

1. `10.7.1` contains major optimizations in Ledger and Consensus, as well as various smaller ones such as in the metrics system. The large improvement in CPU usage confirms their effectiveness.
2. The benchmarks are designed to amplify trends. Managing expectations, the observed improvements will be somewhat less prominent on Mainnet; furthermore, some of the optimizations target block producers only.
3. A space leak that was present on `10.7.0` is now provably absent from `10.7.1`.
4. `10.7.1` is a small, but consistent improvement over `10.6.2` as far as block production, diffusion and adoption metrics are concerned.
5. Conversely, not a single performance regression could be observed on `10.7.1`.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.7.1.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-10.7.1.plutus.pdf).  
