---
title: Plutus Core Team Update
slug: 2025-04-16-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

We made significant improves to Plinth (formerly Plutus Tx) in the past few weeks:

- Plinth compiler improvements
  - Added compiler flag `inline-callsite-growth`, for setting the inlining threshold for callsites.
    0 disables inlining a binding at a callsite if it increases the AST size; `n` allows inlining if the AST size grows by no more than `n`.
    Keep in mind that oing so does not mean the final program will be bigger, since inlining can often unlock further optimizations.
  - PlutusTx.Lift.liftCode and related functions now apply the default PIR and UPLC optimizations during code lifting.
    This could lead to significantly more efficient scripts when using lifting.
- Plinth library improvements
  - Added module `PlutusTx.BuiltinList`, containing functions for operating on `BuiltinList`.
  - Augmented module `PlutusTx.Data.List`, adding more functions for operating on Data encoded `List`.
    This includes, among others, `PlutusTx.Data.List.destructList`, which takes a list along with a list of desired indices, and generates variables bound to the elements at those indices, as well as `PlutusTx.Data.List.caseList` and `caseList'`, for matching on `List`s.
  - Augmented module `PlutusTx.Data.AssocMap`, adding more functions for operating on Data encoded `Map`.

Additionally, we added two new pages to the Plinth user guide:
- [Lifting Values into CompiledCode](https://plutus.cardano.intersectmbo.org/docs/using-plinth/lifting)
- [Compile Time Evaluation](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/compile-time-evaluation)

On the Plutus Core side, we made progress on features targeting the next Hard Fork.
This includes
- costing, conformance testing and metatheory for the `dropList` primitive
- costing and metatheory of builtin arrays
- costing for the modular exponentiation primitive
- reviewing the CIP on builtin `Value`
- investigating approaches for enabling casing on builtin types

Regarding certified compilation, we worked on adding more tests to the certifier and resolving the issues it uncovered

## Low level summary

### Key Pull Requests Merged
- [Add PlutusTx.BuiltinList module](https://github.com/IntersectMBO/plutus/pull/7031)
- [Metatheory for dropList](https://github.com/IntersectMBO/plutus/pull/7017)
- [Proper purity check for unsaturated builtins](https://github.com/IntersectMBO/plutus/pull/6974)
- [Introduce the inline-callsite-growth flag for setting inliner aggressiveness](https://github.com/IntersectMBO/plutus/pull/6982)
- [Add PlutusTx.Data.List.caseList and caseList'](https://github.com/IntersectMBO/plutus/pull/6997)
- [Add nil and singleton to PlutusTx.Data.List](https://github.com/IntersectMBO/plutus/pull/6992)
- [Run default PIR/UPLC optimizations during code lifting](https://github.com/IntersectMBO/plutus/pull/6978)
- [Add PlutusTx.Data.List.destructList](https://github.com/IntersectMBO/plutus/pull/6945)

### Issues In Progress

- [Caseing on values of built-in types](https://github.com/IntersectMBO/plutus/issues/6602)
- Costing for modular exponentiation (in plutus-private)
- Costing of builtin functions operating on builtin arrays (in plutus-private)
- Add negative certifier tests (in plutus-private)
