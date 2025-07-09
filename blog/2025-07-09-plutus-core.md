---
title: Plutus Core Team Update
slug: 2025-07-09-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

### Plutus Core

- We merged the PR adding support for case analysis on booleans and integers.
  Our current focus is extending this support to built-in lists.

- Several improvements have also been made to the Plutus Core specification.

- A new tool was merged and released to dump cost model parameters in the format expected by the node.
  It supports multiple output formats and can be particularly useful when adding new primitives or updating cost model parameters for other reasons.

### Plinth

- We implemented and merged a compiler optimization that pushes `force` nodes into `case` branches.
  This often enables subsequent optimizations by eliminating adjacent `force` and `delay` pairs.

- To benchmark the Plinth compiler and identify further optimization opportunities, we reimplemented in `plutus-benchmarks` the linear vesting script (originally written in Plutarch) in Plinth.

### Formal Methods

- We are now releasing plutus-metatheory on CHaP, which is a prerequisite for releasing the compiler certifier alongside the Plinth compiler.

## Low level summary

### Key Pull Requests Merged

- [Case analysis on booleans and integers](https://github.com/IntersectMBO/plutus/pull/7029)
- [Add plutus-metatheory to CHaP release process](https://github.com/IntersectMBO/plutus/pull/7144)
- [spec: Make case and constr indexes start from 1](https://github.com/IntersectMBO/plutus/pull/7141)
- [Correct the specification of the flat encoding of constr tags](https://github.com/IntersectMBO/plutus/pull/7154)
- [Implement force-case-delay optimisation](https://github.com/IntersectMBO/plutus/pull/7161)
- [Extra Modular Exponentiation property tests](https://github.com/IntersectMBO/plutus/pull/7134)
- [Add Linear Vesting script to the benchmark](https://github.com/IntersectMBO/plutus/pull/7166)
- [Tool to dump cost model parameters in order expected by ledger](https://github.com/IntersectMBO/plutus/pull/7171/files)

### Issues and Pull Requests In Progress

- [Case analysis on built-in lists](https://github.com/IntersectMBO/plutus/pull/7188)
- [Push 'force' into 'chooseList' and 'chooseData'](https://github.com/IntersectMBO/plutus/pull/7196)
- [Call trace for failing evaluation via new emitter mode](https://github.com/IntersectMBO/plutus/pull/7178)
- [Add builtin arrays to Plutus metatheory](https://github.com/IntersectMBO/plutus/pull/7127)
- [Add MSM builtin](https://github.com/IntersectMBO/plutus/pull/7074)
