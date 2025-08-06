---
title: Plutus Core Team Update
slug: 2025-08-06-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

### Plutus Core

- Following the support for case analysis on booleans, integers and lists, we are now working on supporting case analysis for unit, pairs, and Data.

- The required changes to enable all built-in functions, as well as sums-of-products, in all Plutus ledger languages (Plutus V1, V2 and V3) have been implemented in preparation for the upcoming intra-era hard fork.

- We started developing a [surface language benchmark for UPLC](https://github.com/IntersectMBO/UPLC-CAPE), aimed to compare the performances of different surface languages targeting UPLC.
  We have introduced the first scenario for comparison - computing Fibonacci numbers.
  More scenarios will be added in the near future.

### Plinth

- The Plinth compiler now compiles Haskell `Bool` into UPLC's built-in boolean type, instead of sums-of-products or Scott encoded boolean.
  This makes many scripts smaller and faster.

- We are planning additional performance and usability improvements, such as inlining recursive bindings, and showing line numbers in compilation errors.

## Low level summary

### Key Pull Requests Merged

- [Enable SoPs and all builtins in PlutusV1/V2 at PV11](https://github.com/IntersectMBO/plutus/pull/7223)
- [Compile Haskell Bool to UPLC Built-in Bool](https://github.com/IntersectMBO/plutus/pull/7231)
- [UPLC-CAPE benchmarking framework, and the Fibonacci scenario](https://github.com/IntersectMBO/UPLC-CAPE/pull/2)

### Issues and Pull Requests In Progress

- [Add constant casing for builtin unit and pair](https://github.com/IntersectMBO/plutus/pull/7221)
- [Add BuiltinValue type to plutus-core](https://github.com/IntersectMBO/plutus/pull/7225)
- [Add MSM builtin](https://github.com/IntersectMBO/plutus/pull/7074)
- Improve the efficiency of checking whether a built-in function is available in a given Protocol Version and ledger language version (in plutus-private)
- Retrieve validator inputs from a network for testing (in plutus-private)
- Define a two-party escrow scenario for the surface language benchmark for UPLC (in plutus-private)
