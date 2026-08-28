---
title: Benchmarking -- Node 11.1.0
slug: 2026-08-performance-11.1.0
authors: fmaste
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

As part of the release benchmarking cycle, we're comparing benchmarking runs for 2 different versions of `cardano-node`:
* `11.0.1` - the current Node 11.0 performance baseline, running **Protocol Version 11**.
* `11.1.0` - the latest Node 11.1 release, running **Protocol Version 11**.

Unlike the [previous release], both Node versions run under the same Protocol Version; however, `11.1.0` carries major component changes over `11.0.1`: Consensus `3.0` to `4.1`, Network `1.1` to `1.2`, Ledger `1.20` to `1.21`, and Plutus `1.63` to `1.65`.

For this benchmark, we're gathering various metrics under 2 different workloads:
1. _value-only_: Each txn consumes 2 inputs and creates 2 outputs, updating the UTxO set. Full blocks (> 80kB) exclusively; high submission pressure (TPS > 10).
2. _Plutus_: Each txn contains a Plutus script exhausting the per-tx execution budget. Small blocks (< 3kB) exclusively; low submission pressure (TPS < 1).

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. All runs were performed in the Conway era using the in-memory LedgerDB backend, on GHC 9.6.7.


## Observations

These benchmarks are about evaluating specific corner cases in a constrained environment that allows for reliable reproduction of results; they're not trying to directly recreate the operational conditions on Mainnet.

### Resource Usage

1. `11.1.0` exhibits a _massive decrease_ in Process CPU usage by 21% under saturation (Mutator -22%, GC CPU -15%); under Plutus workload it is practically unchanged (+0.8%).
2. This CPU reduction co-moves with an equally large drop in tx-submission and mempool activity (protocol turns -21%, unproductive polls -31%, mempool rejections -31%, at unchanged throughput).
3. Allocation-side metrics under saturation fall in step: Minor GCs _decrease_ by 23% and Major GCs by 25% (under Plutus, Minor GCs are unchanged, Major GCs _decrease_ by 24%).
4. Memory footprint _increases considerably_: Kernel RSS by +2.1 GiB or 31% under saturation (+1.8 GiB or 27% under Plutus), and the RTS live GC dataset by 26% (33% under Plutus).
5. Node start spread rises from 5.5s to 21.1s, roughly 4x the baseline.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness. The memory increase is the dominant finding of this cycle and is treated separately in the Conclusion.

### Anomaly control

1. Height & Slot battles occur _less frequently_ on `11.1.0`: -26% under saturation, -67% under Plutus workload; however, the sample size of the benchmark is rather limited, which leads to some variance in that metric.
2. Under saturation workload, the host log line rate -- the volume of trace messages emitted -- _decreases_ by 21% (78.8 to 62.4 Hz).

### Forging Loop

1. Under saturation workload, Ledger ticking _regresses_ by 2.6ms or 16%; other forge-loop stages are unchanged within the measurement floor.
2. Under Plutus workload, forge-loop timings show no significant change.

### Peer propagation

1. Block Fetch duration _regresses_ by 24ms or 7% under saturation, and by 7ms or 5% under Plutus workload.
2. The value-only fetch regression carries a per-byte transfer component that the small Plutus blocks do not exercise; per-run `cardano-cli ping` measurements (TCP connect round-trips) show the cluster network essentially stable across the runs, so this regression is attributable to the component bumps rather than to network drift.

### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.

1. Under saturation workload, cluster adoption _regresses_ by 5% (+44ms) across the 80th centile and above, and by 6% at the median.
2. Under Plutus workload, adoption _regresses_ by 6% across the 80th centile and above, growing towards the tail (+8% or +38ms in the 100th centile).

### Conclusion

1. The 21% CPU reduction under saturation co-moves with the drop in tx-submission and mempool activity and the drop in log volume; it is attributable to the component bumps.
2. The memory footprint increase is the dominant finding: Kernel RSS is up 31% (27% under Plutus) and node start-up spread is roughly 4x the baseline. The start-up processing of our benchmarks' very large Shelley genesis dataset has been identified as the culprit, and we have isolated a local reproduction on a single-node, large-dataset profile; until it is solved, however, we cannot be certain it is the only cause.
3. The Block Fetch and end-to-end propagation regressions (4% - 8%) are attributable to the component bumps, with per-run latency measurements showing the cluster network essentially stable.
4. As the memory increase remains unresolved, no assessment of memory soundness is possible at this time: an offset of this size can obscure other effects underneath. Consequently, and this is rare for these reports, the customary closing statement that a release "did not exhibit any performance regressions" cannot be made for `11.1.0` yet.
5. The upcoming `11.1.1` benchmarks, which will carry the corresponding heap fixes, are expected to bring the data required for a final assessment. As always, it is worth bearing in mind that these benchmarks are designed to amplify trends: at Mainnet's load and connectivity, the observed effects will be less prominent and may well not manifest at all.

## Attachments

Full comparison for _value-only workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.1.0.value-only.pdf).

Full comparison for _Plutus workload_, PDF downloadable [here](../static/pdf/benchmarking/release-11.1.0.plutus.pdf).

[previous release]: /reports/2026-05-performance-11.0.1
