---
title: Benchmarking -- Node 11.0.1
slug: 2026-05-performance-11.0.1
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `10.7.1` - the current Node 10.7 performance baseline, running **Protocol Version 10**.
* `11.0.1` - the latest Node 11.0 release, running **Protocol Version 11**.

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each txn consumes 2 inputs and creates 2 outputs, changing the UTxO set. Full blocks (> 80kB) exclusively; high submission pressure (TPS > 10).
2. _Plutus_: Each txn contains a Plutus script exhausting the per-tx execution budget. Small blocks (< 3kB) exclusively; low submission pressure (TPS < 1).

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs
were performed in the Conway era using the in-memory LedgerDB backend.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.  

### Resource Usage

1. `11.0.1` exhibits a _small increase_ in Process CPU usage by 6% under saturation (and by a negligible 0.4% under Plutus) workload.
2. Additionally, Allocation rate and Minor GCs _increase slightly_ by 6% each under saturation (and a negligible 0.5% under Plutus) workload.
3. Observed CPU 85% span durations show a minor fluctuation, with a 1% _decrease_ under saturation, and a 3% _increase_ under Plutus workload.
4. Average RAM usage is unchanged, as are Major GC occurrences.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Anomaly control

1. Under saturation workload only, Height & Slot battles on `11.0.1` occur roughly 2.5x _more frequently_; however, the sample size of the benchmark is rather limited, which leads to some variance in that metric.

### Forging Loop

1. There is a small fluctuation in leadership checks -- starting 1ms _later_ under saturation, and 1ms _earlier_ under Plutus workload.
2. Under Plutus workload, the observed minor changes to block production timings are not significant.
3. Under saturation workload, there's a minor 1ms _improvement_ in time to Header Announcement, mostly due to a 16% _improvement_ in Ledger Ticking time.

The metric _'Slot start to announced'_ (see in attachments) is cumulative, and demonstrates how far into a slot the block producing node first announces the new header.

### Peer propagation

1. Under saturation workload only, Block Fetch duration _improves_ by 8ms or 2%.
2. Beyond that, there are no significant changes to block diffusion metrics.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. Cluster adoption metrics on `11.0.1` exhibit a _minor improvement_ by 1% - 2% across all centiles under saturation workload.
2. Under Plutus workload, there's a 2% _improvement_ in the 100th centile only.

### Conclusion

1. `11.0.1` does not contain major component changes compared to `10.7.1` - hence, the performance characteristics of those Node versions are expectedly close.
2. This implies, the conclusions from the [previous report] (`10.7.1` vs. `10.6.2`) largely extend to the `11.0.1` release.
3. The small increase in CPU time has to be relativized in that larger persepective: There was a massive 46% - 71% reduction in that metric going from `10.6` to `10.7.1`.
4. Thus, `11.0.1` did not exhibit any performance regressions.
5. Protocol Version 11 can be run without performance penalties.
6. An eye would have to be kept on Height & Slot battles - as stated before often, the benchmarks are designed to greatly amplify trends (and don't provide a large enough sample size to guarantee very high confidence in that particular metric).

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.0.1.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.0.1.plutus.pdf).  

[previous report]: https://updates.cardano.intersectmbo.org/reports/2026-04-performance-10.7.1