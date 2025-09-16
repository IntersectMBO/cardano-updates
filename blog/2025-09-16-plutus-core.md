---
title: Plutus Core Team Update
slug: 2025-09-16-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

- We are in the process of implementing CIP-0153: the `Value` built-in type, and built-in functions operating on `Value`s.
  The implementation is expected to finish in the coming weeks.
  These primitives will be enabled at the upcoming intra-era hard fork.

- We continued developing the [UPLC-CAPE benchmark](https://github.com/IntersectMBO/UPLC-CAPE), aimed to compare the performances of different surface languages targeting UPLC.
  A third scenario, two party escrow, has been added to the benchmark.

- We have merged the implementation of the multi-scalar multiplication primitives (CIP-0133).
  They will be enabled at the upcoming intra-era hard fork.

- We continued investigating more efficient ways of case analysis on `Data` in UPLC.


## Low level summary

### Key Pull Requests Merged

- [Add BuiltinValue type to plutus-core](https://github.com/IntersectMBO/plutus/pull/7225)
- [Improve documentation of the nix code](https://github.com/IntersectMBO/plutus/pull/7321)
- [CIP-0133: Add BLS12-381 multi scalar](https://github.com/IntersectMBO/plutus/pull/7283)
- [Add insertCoin and unionValue implementations and tests](https://github.com/IntersectMBO/plutus/pull/7322)
- [Add insertCoin and unionValue to DefaultFun and Plinth](https://github.com/IntersectMBO/plutus/pull/7334)

### Issues and Pull Requests In Progress

- [Add deleteCoin, lookupCoin, valueContains](https://github.com/IntersectMBO/plutus/pull/7336)
- Built-in Value: conformance testing (in plutus-private)
- Built-in Value: costing (in plutus-private)
- MSM primitives: conformance testing (in plutus-private)
- MSM primitives: property-based testing (in plutus-private)
