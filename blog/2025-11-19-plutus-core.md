---
title: Plutus Core Team Update
slug: 2025-11-19-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team is finalizing work for the upcoming intra-era hard fork.

Four of the `Value` primitives have now been costed, and the remaining three are currently in progress.
After this, the final step before will be performing end-to-end testing for all new features to be introduced in the hard fork.

We are also preparing a blog post on UPLC 2025, which will be published soon.

In parallel, we continue progressing on other tasks, including support case analysis related to Data.

## Low level summary

### Key Pull Requests Merged

- [Conformance tests for value built-ins taking into account 128-bit integers](https://github.com/IntersectMBO/plutus/pull/7407)
- [Fix Value.Quantity shrinker](https://github.com/IntersectMBO/plutus/pull/7408)
- [Additional conformance tests for insertCoin and valueContains](https://github.com/cardano-foundation/CIPs/pull/7409)
- [Benchmark regular apply vs case apply](https://github.com/IntersectMBO/plutus/pull/7410)

- [Standardize repetition notation in EBNF grammar of plutus](https://github.com/IntersectMBO/plutus/pull/7414)
- [Cost models for LookupCoin, ValueContains, ValueData, UnValueData builtins](https://github.com/IntersectMBO/plutus/pull/7344)

### Issues and Pull Requests In Progress

- End-to-end testing for `dropList`
- End-to-end testing for modular exponentiation
- End-to-end testing for multi-scalar multiplication
- End-to-end testing for `Array` primitives
- End-to-end testing for `Value` primitives
- End-to-end testing for unification of primitives across Plutus V1, V2 and V3
