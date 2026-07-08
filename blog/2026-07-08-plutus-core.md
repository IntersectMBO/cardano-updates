---
title: Plutus Core Team Update
slug: 2026-07-08-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary
In the past weeks, the Plutus team has continued to make improvements across performance, tooling, and assurance.

__Performance and compiler improvements__.
We improved several parts of the Plutus optimization pipeline and ledger API implementation.
This includes making common Value operations more efficient, adding a new compiler optimization for certain recursive functions, and fixing an optimization pass so that it preserves program behavior correctly.

__Better benchmarking and tooling__.
We added lightweight benchmarking support to the uplc executable, making it easier to sanity-check execution-time measurements for UPLC scripts and compare results against existing benchmark infrastructure.

__Specs and formal methods__.
We continued strengthening the foundations of Plutus by updating the UPLC specification for the built-in value type and related functions, and by improving the metatheory and certification infrastructure used to reason about compiler transformations. These changes make the formal-assurance workflow easier to maintain, debug, and scale to larger programs.

## Key Pull Requests Merged

- [Specification of the built-in value type and functions](https://github.com/IntersectMBO/plutus/pull/7810)
- [Rename UPLC scope variable in the metatheory](https://github.com/IntersectMBO/plutus/pull/7829)
- [Mutually recursive PIR function inlining](https://github.com/IntersectMBO/plutus/pull/7688)
- [Lightweight benchmarking in the `uplc` executable](https://github.com/IntersectMBO/plutus/pull/7824)
- [Fuse unionWith and checkBinRel in PlutusLedgerApi.V1.Data.Value](https://github.com/IntersectMBO/plutus/pull/7799)
- [Certifier: Generate one Proof .agda file per certified pass](https://github.com/IntersectMBO/plutus/pull/7814)
- [Optimal non-builtin valueOf in plutus-ledger-api Data.Value](https://github.com/IntersectMBO/plutus/pull/7797)
- [Metatheory: define semantic versions of value and purity](https://github.com/IntersectMBO/plutus/pull/7802)
- [Certifier: deduplicate ASTs in agda certificate](https://github.com/IntersectMBO/plutus/pull/7788)
- [Fix the FloatDelay compiler optimization pass](https://github.com/IntersectMBO/plutus/pull/7789)
