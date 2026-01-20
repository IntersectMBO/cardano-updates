---
title: Memory Budget Scaling -- 10.6
slug: 2026-01-execbudget-memory-10.6
authors: mgmeier
tags: [benchmarking-reports]
hide_table_of_contents: false
---

## Setup

This report compares benchmarking runs for 3 different settings of the Plutus memory execution budget:
* `10.6.1-jan26` - current mainnet memory execution budget
* `mem-x1.5` - 1.5 x current mainnet memory execution budget
* `mem-x2` - 2 x current mainnet memory execution budget

For this comparison, we gather various metrics under the _Plutus_ workload used in release benchmarks: Each block produced during the benchmark contains
4 identical script transactions calibrated to fully exhaust the memory execution budget. Thus, script execution is constrained by the memory budget limit
every case. The workload produces small blocks (< 3kB) exclusively.  

Benchmarking is performed on a cluster of 52 block producing nodes spread across 3 different AWS regions, interconnected using a static, restricted topology. 

Identical scaling benchmarks were performed in Q1 2025 on [Node 10.2 / GHC8.10] and [Node 10.3 / GHC9.6]. This comparison aims to ascertain the past observations and conclusions still apply,
given the most recent Node version (10.6.1, with patches for 10.6.2 backported) and its recommended compiler version GHC9.6.7.


## Observations

### Resource Usage

1. Scaling the memory budget impacts Allocation Rate and Minor GCs. 1.5 x the budget results in rises of 21% - 22%; for doubling the budget the corresponding rises are 36% - 38%.
2. These increases exhibit a slightly sublinear correlation with raising mem budget; however, in absolute terms they are much steeper (roughly 4x) compared to Node 10.3.
3. The Node process RAM footprint is unaffected by and the effects on Process CPU usage is negligible for either scaling factor.
4. CPU 85% span duration exhibits a slight constant increase (approx. 0.5 slots) when scaling the mem budget, regardless of the factor.

Caveat: Individual metrics can't be evaluated in isolate; the resource usage profile as a whole provides insight into the system's performance and responsiveness.

### Forging Loop

1. Scaling the memory budget has significant impact on self adoption time only.
2. Scaling by factor 1.5 leads to an 11ms (or 25%) increase, whereas factor 2 leads to 22ms (51%); this is fully congruent with the observations on Node 10.3.
3. This increase is linearly correlated with raising the mem budget.
4. With increased memory budget, counterintuitively, the time from slot start until new header announcement *decreases* slightly - by 4ms (factor 1.5) and 2ms (factor 2). This was not observed on Node 10.3.

### Peer propagation

1. Same as on the block producer, scaling the memory budget has significant impact on block adoption times only.
2. Scaling by factor 1.5 leads to an 10ms (or 22%) increase, whereas factor 2 leads to 17ms (37%).
3. Again, these increases exhibit a slightly sublinear correlation with raising the mem budget - largely congruent with the absolute increases seen on Node 10.3.
   
### End-to-end propagation

This metric encompasses block diffusion and adoption across specific percentages of the benchmarking cluster, with 0.80 adoption meaning adoption on 80% of all cluster nodes.  

1. 1.5 x the memory budget results in a minor increase of 2ms - 16ms in cluster adoption times (1% - 3%).
2. 2 x the memory budget results in a slight 10ms - 13ms increase (2% - 3%).
3. These increases are clearly lower (very roughly 2.5x) than those observed on Node 10.3.

### Conclusion

These measurements outline the headroom for raising the memory budget, along with the expected performance impact:
1. Block adoption time is the only network metric that's affected significantly, increasing both on the forger and the peers by the same extent.
2. These increases seem to correspond linearly at worst with raising the memory budget. This gives excellent predictability of performance impact up to a hypothetical 100% raise.
3. Expectedly, more allocations and minor GCs take place; however, CPU and RAM usage remain nearly constant.
4. Block diffusion is only marginally affected by changing the execution budget: Due to header pipelining, announcing and (re-)sending a block precedes adoption in most cases.
5. As such, measurements taken with either budget adjustment *do not indicate performance risks* to the network, but clearly evidence their respective performance cost.
6. With the exception of extra allocations, all measurements point to a recent Node version delivering equal or slightly better performance compared to 10.3 given some memory budget increase.

## Attachment

Full report PDF downloadable [here](../static/pdf/benchmarking/execbudget-10.6-mem_scaling.pdf).

[Node 10.2 / GHC8.10]: https://updates.cardano.intersectmbo.org/reports/2025-03-execbudget-memory-10.2
[Node 10.3 / GHC9.6]: https://updates.cardano.intersectmbo.org/reports/2025-05-execbudget-memory-10.3