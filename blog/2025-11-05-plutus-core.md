---
title: Plutus Core Team Update
slug: 2025-11-05-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team organized and attended [UPLC 2025](https://services.iohk.io/uplc), an event dedicated to the UPLC language, held in Edinburgh last week.
Session recordings will be available soon.

Based on community feedback, we have added a new `Value` primitive, `scaleValue`, to the upcoming intra-era hard fork, along with several minor refinements to other `Value` primitives.

We have also continued improving the performance of the UPLC evaluator, specifically by optimizing the inlining of the `geq` function.

Finally, we are progressing with costing for all `Value` primitives.

## Low level summary

### Key Pull Requests Merged

- [Add ScaleValue primitive](https://github.com/IntersectMBO/plutus/pull/7398)
- [Restrict Value quantities to signed 128-bit integer range](https://github.com/IntersectMBO/plutus/pull/7389)
- [Add an inlinable version of 'geq'](https://github.com/IntersectMBO/plutus/pull/7323)
- [CIP-0153 | Add range limits to amounts in builtin Value](https://github.com/cardano-foundation/CIPs/pull/1095)
- [Add ECD (Euclidean Common Divisor) synthetic benchmark scenario](https://github.com/IntersectMBO/UPLC-CAPE/pull/135)
- [Add support for multiple input arguments in test framework](https://github.com/IntersectMBO/UPLC-CAPE/pull/134)

### Issues and Pull Requests In Progress

- Costing for `Value` primitives (in plutus-private)
