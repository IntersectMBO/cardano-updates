---
title: Plutus Core Team Update
slug: 2025-05-14-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

Over the past two weeks, we’ve been working on the Plutus section of the Cardano blueprint, adding documentation to make it easier for developers to implement alternative Plutus Core evaluators.

We’ve also continued improving the Plutus language itself, completing the costing and property-based testing for the modular exponentiation primitive, and thte costing for new built-in array primitives.

For case analysis on Bool, we’re currently evaluating different approaches to ensure we choose the most robust and forward-compatible solution.

On the formal methods side, we made further progress toward the initial release of the certifier.
This includes integrating it with the Plinth compiler and exposing plutus-metatheory as a reusable library.

In our most recent Plutus working group meeting - which we've begun publishing publicly - we presented overviews and demos of both the certifier and the built-in arrays.
Feel free to check it out.

## Low level summary

### Key Pull Requests Merged

- [Costing of BuiltinArray functions](https://github.com/IntersectMBO/plutus/pull/6950)
- [Fix expModInteger bug](https://github.com/IntersectMBO/plutus/pull/7064)
- [Fix Haskell version of certifier builtinEq](https://github.com/IntersectMBO/plutus/pull/7059)
- [Property tests for expModInteger](https://github.com/IntersectMBO/plutus/pull/7066)
- [Move certifier to plutus-metatheory and expose it as a library](https://github.com/IntersectMBO/plutus/pull/7067)
- [Costing for expModIntger](https://github.com/IntersectMBO/plutus/pull/7080)
- [Certifier produces certificate as Agda project; optimise certificate](https://github.com/IntersectMBO/plutus/pull/7081)
- [Add the certifier to plutus-tx-plugin](https://github.com/IntersectMBO/plutus/pull/7069)

### Issues and Pull Requests In Progress

- [Allow casing on booleans](https://github.com/IntersectMBO/plutus/pull/7029)
- Review the [Builtin Values CIP](https://github.com/cardano-foundation/CIPs/pull/1011)
- Conformance tests for the modular exponentation primitive (in plutus-private)
- Fix the certifier for two UPLC forceDelay tests (in plutus-private)
- Write a landing page and a page about serialization/deserialization for the Cardano blueprint (in plutus-private)
- Add MSM primitive to Plutus (in plutus-private)
