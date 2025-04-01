---
title: Memory Budget Scaling -- 10.2
slug: 2025-03-execbudget-memory-10.2
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

This report compares benchmarking runs for 3 different settings of the Plutus memory execution budget:
* `loop-memx1` - current mainnet memory execution budget
* `loop-memx1.5` - 1.5 x current mainnet memory execution budget
* `loop-memx2` - 2 x current mainnet memory execution budget

For this comparison, we gather various metrics under the _Plutus_ workload used in release benchmarks: Each block produced during the benchmark contains
4 identical script transactions calibrated to fully exhaust the memory execution budget. Thus, script execution is constrained by the memory budget limit
every case. The workload produces small blocks (< 3kB) exclusively.  

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. Node
version 10.2 was used, built with GHC8.10.7.

## Observations

### Resource Usage

1. Scaling the memory budget impacts Allocation Rate and Minor GCs. 1.5 x the budget results in rises of 5% and 6% respecetively; for doubling the budget the corresponding rises are 10% and 11%.
2. Those increases seem to correlate linearly with raising mem budget.
3. The effect on CPU usage is almost negligible: a 1% (or 3%, for doubling the budget) increase of Process CPU.
4. The Node process RAM footprint is unaffected.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Scaling the memory budget has significant impact on block adoption time only.
2. Scaling by factor 1.5 leads to a 14ms (or 25%) increase, whereas factor 2 leads to 28ms (49%).

### Peer propagation

1. Same as on the block producer, scaling the memory budget has significant impact on block adoption times only.
2. Scaling by factor 1.5 leads to a 15ms (or 26%) increase, whereas factor 2 leads to 28ms (48%).
   
### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. 1.5 x the memory budget results in a slight increase of 19ms - 22ms in cluster adoption times (4% - 5%).
2. 2 x the memory budget results in a moderate 27ms - 34ms increase (5% - 7%, with 9% in the 50th centile).

### Conclusion

These measurements outline the headroom for raising the memory budget, along with the expected performance impact:
1. Block adoption time is the only metric that's affected significantly, increasing both on the forger and the peers by the same extent.
2. These increases seem to correspond linearly with the raising the memory budget. This gives excellent predictability of performance impact.
3. Expectedly, more allocations happen; we can observe the same linear correspondence here as well.
4. It has to be pointed out that block diffusion is only slightly affected by changing the execution budget: Due to pipelining, announcing and (re-)sending a block precedes adoption in most cases.
5. As such, regarding absolute cluster adoption times, measurements taken with either budget adjustment do not exhibit performance risks to the network. They do illustrate, however, the performance cost of those budget adjustments.

## Attachment

Full report PDF downloadable [here](../static/pdf/benchmarking/execbudget-10.2-mem_scaling.pdf).

