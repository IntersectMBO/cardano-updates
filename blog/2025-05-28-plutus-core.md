---
title: Plutus Core Team Update
slug: 2025-05-28-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

Over the past two weeks, the Plutus Core team made a range of improvements across Plutus, Plinth, and supporting documentation.

On the Plutus side, we completed conformance tests for the modular exponentiation primitive and added builtin arrays to the Plutus Core specification. We also enhanced error reporting in the CEK machine, making evaluation failures easier to diagnose.

On the Plinth side, we added support for integer equality using `(==)` from `base`, which allows for more idiomatic pattern matching on integer literals, such as `f 5 = ...`.

We also made several documentation updates.
The Haddock documentation for builtin functions was expanded in [PlutusTx.Builtins.Internal](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Builtins-Internal.html).
We contributed a new [landing page for Plutus](https://cardano-scaling.github.io/cardano-blueprint/plutus/index.html) to the Cardano Blueprint site to help external teams get started.
Lastly, we updated the [Builtins Overview](https://github.com/IntersectMBO/plutus/blob/master/plutus-core/docs/BuiltinsOverview.md) to reflect recent changes.

## Low level summary

### Key Pull Requests Merged

- [Conformance Tests for Modular Exponentiation](https://github.com/IntersectMBO/plutus/pull/7090)
- [Add Haddock in PlutusTx.Builtins.Internal](https://github.com/IntersectMBO/plutus/pull/7096)
- [Add Builtin Arrays to the Plutus Core Spec](https://github.com/IntersectMBO/plutus/pull/7054)
- [Add BuiltinResult to BuiltinsOverview.md](https://github.com/IntersectMBO/plutus/pull/7085)
- [Improve CEK Machine Error Reporting](https://github.com/IntersectMBO/plutus/pull/7106)
- [Support Integer Equality using == from base](https://github.com/IntersectMBO/plutus/pull/7108)
- [Cardano Blueprint: Plutus landing page](https://github.com/cardano-scaling/cardano-blueprint/pull/43)

### Issues and Pull Requests In Progress

- [Case analysis on booleans and integers](https://github.com/IntersectMBO/plutus/pull/7029)
- [Add support for evaluating CompiledCode using the CEK machine](https://github.com/IntersectMBO/plutus/pull/7072)
- Write about script serialization for the Cardano blueprint (in plutus-private)
- Add MSM primitive to Plutus (in plutus-private)
