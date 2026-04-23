---
title: Plutus Core Team Update
slug: 2026-04-22-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary
The Plutus team has recently made a number of significant improvements to the UPLC executable, including:

- support for hex-encoded scripts as input ([#7655](https://github.com/IntersectMBO/plutus/pull/7655)).
- support for blueprint JSON as input, with the ability to optimize all scripts it contains ([#7685](https://github.com/IntersectMBO/plutus/pull/7685)).
- the ability to certify optimizations and generate a certifier report for each optimized validator ([#7692](https://github.com/IntersectMBO/plutus/pull/7692)).
- a number of flags to give users control over optimization behavior ([#7682](https://github.com/IntersectMBO/plutus/pull/7682)).
- allow evaluating a script using user-supplied input before and after optimization ([#7695](https://github.com/IntersectMBO/plutus/pull/7695)).

The UPLC executable is included with every [Plutus release](https://github.com/IntersectMBO/plutus/releases).
While it supports a range of use cases, its most immediately useful feature for most developers is script optimization.
Preliminary testing suggests that applying these optimizations to recent mainnet scripts yields, on average, a 10% reduction in execution cost and a 2% reduction in script size.

We are currently working on user documentation for the UPLC executable.

## Low level summary

### Key Pull Requests Merged

- [Allow the uplc executable to take cbor-hex](https://github.com/IntersectMBO/plutus/pull/7655)
- [Allow blueprint as input and output for the uplc executable](https://github.com/IntersectMBO/plutus/pull/7685)
- [Certifier can now report execution costs before/after each pass](https://github.com/IntersectMBO/plutus/pull/7692)
- [Allow optimisation options to be configured in uplc executable](https://github.com/IntersectMBO/plutus/pull/7682)
- [UPLC executable: enable eval during optimisation](https://github.com/IntersectMBO/plutus/pull/7695)
