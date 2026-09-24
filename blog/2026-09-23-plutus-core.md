---
title: Plutus Core Team Update
slug: 2026-09-23-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team has delivered a number of September milestones, and is putting the finishing touches on the remaining ones.

A new `with-crypto` cabal flag makes it possible to build Plinth and Plutus without the system crypto C libraries.
We've also further improved the usability of the certifier in the `uplc` cli tool.

Work in progress includes the cost models for `keepPolicies` and `dropPolicies` (CIP-0168), and a CIP for removing the scope check during script deserialization.

## Key Pull Requests Merged

- [Encode single constructor ledger types using Data.List](https://github.com/IntersectMBO/plutus/pull/7939)
- [Add some V4 helper functions](https://github.com/IntersectMBO/plutus/pull/7956)
- [Improve efficiency and consistency of Data.AssocMap](https://github.com/IntersectMBO/plutus/pull/7959)
- [Deserialiser optimizations](https://github.com/IntersectMBO/plutus/pull/7957)
- [Add a `with-crypto` cabal flag to build Plinth/Plutus scripts without system crypto C libraries](https://github.com/IntersectMBO/plutus/pull/7827)
- [Improve uplc/plc certifier usability](https://github.com/IntersectMBO/plutus/pull/7940)
- [Emit checkpoints in UPLC inliner](https://github.com/IntersectMBO/plutus/pull/7935)
- [Add more test cases for Plutus Ledger Api V4 types](https://github.com/IntersectMBO/plutus/pull/7944)

## Pull Requests In Progress

- [Cost models for `keepPolicies` and `dropPolicies` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7954)
- [Make Data AssocMap FromData shape-safe](https://github.com/IntersectMBO/plutus/pull/7948)
- [Require exact product arity in generated FromData](https://github.com/IntersectMBO/plutus/pull/7949)
- [Evaluate Scott caseInteger scrutinee once](https://github.com/IntersectMBO/plutus/pull/7951)
- [Specify casing on built-in types](https://github.com/IntersectMBO/plutus/pull/7933)
- [Builtin Pattern Matching (CIP-0194)](https://github.com/IntersectMBO/plutus/pull/7852)
- [Compile BuiltinData transparently in the plugin](https://github.com/IntersectMBO/plutus/pull/7863)
