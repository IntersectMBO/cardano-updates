---
title: Plutus Core Team Update
slug: 2026-08-12-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team has recently opened two CIPs and one CPS for review.
We encourage everyone to read them and leave comments - we would like as much feedback as possible.

- [CIP-0194](https://github.com/cardano-foundation/CIPs/pull/1236) adds a `Match` node to UPLC for matching on builtin constants (primarily `Data`).
  This will make consuming script contexts in validators much cheaper than the status quo.
- [CIP-0195](https://github.com/cardano-foundation/CIPs/pull/1238) specifies the `Data` encoding of the Plutus V4 ledger types.
- [A new CPS](https://github.com/cardano-foundation/CIPs/pull/1244) aims to build community consensus on how to expose our property tests, and tests for older protocol and language versions, to alternative node and UPLC evaluator implementers with minimal integration effort.

Other than these, we've merged the `CollapseCase` pass, which rewrites list casing into `dropList` whenever applicable; the `uplc` tool now deduces input and output formats from file extensions; and the Plutus V4 ledger API types have been released in 1.67.0.0.

## Key Pull Requests Merged

- [Add CollapseCase pass, rewriting list casing into dropList](https://github.com/IntersectMBO/plutus/pull/7872)
- [Deduce `uplc` input type from file extension](https://github.com/IntersectMBO/plutus/pull/7873)
- [Add Plutus V4 Address type](https://github.com/IntersectMBO/plutus/pull/7876)
- [Remove the `deriving-aeson` dependency](https://github.com/IntersectMBO/plutus/pull/7871)
- [Fix Constr cost using wrong accessor in Agda metatheory](https://github.com/IntersectMBO/plutus/pull/7880)
- [Improve NEAT coverage](https://github.com/IntersectMBO/plutus/pull/7883)
- [Add missing off-diagonal data for EqualsString and EqualsByteString](https://github.com/IntersectMBO/plutus/pull/7884)
- [Add valueOf golden coverage in Spec.Data.Budget](https://github.com/IntersectMBO/plutus/pull/7800)

## Pull Requests In Progress

- [Builtin Pattern Matching (CIP-0194)](https://github.com/IntersectMBO/plutus/pull/7852)
- [Cost model for `multiIndexArray` (CIP-0156)](https://github.com/IntersectMBO/plutus/pull/7869)
- [Formalize integer division and CIntegers in the metatheory](https://github.com/IntersectMBO/plutus/pull/7864)
- [Compile BuiltinData transparently in the plugin](https://github.com/IntersectMBO/plutus/pull/7863)
- [Certifier: Add decision procedure for hoist-builtins pass](https://github.com/IntersectMBO/plutus/pull/7822)
