---
title: Plutus Core Team Update
slug: 2025-04-30-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

On the Plinth side, we added strictness analysis in both UPLC and PIR.
This is used by two compiler optimizations: inlining, and the strictification of bindings
For example, if a non-strict binding is guaranteed to be evaluated, it can be safely converted to a strict binding.
These optimizations reduce both the computational cost and the size of the resulting Plutus scripts, sometimes significantly.

In preparation for the next hard fork, development on UPLC has progressed steadily.
We completed the specification for the `dropList` primitive and conformance testing for builtin arrays.
Additionally, we advanced work on casing on booleans and the costing of the modular exponentiation primitive - both challenging tasks that we expect to complete in the coming weeks.

On the certified compilation front, we expanded our test coverage, addressed several issues in the decision procedures, and are actively working to resolve the remaining recently identified problems.

## Low level summary

### Key Pull Requests Merged
- [UPLC Optimization: force-ifThenElse-delay](https://github.com/IntersectMBO/plutus/pull/7042)
- [Specification of dropList](https://github.com/IntersectMBO/plutus/pull/7033)
- [Reduction semantics for Untyped Plutus Core](https://github.com/IntersectMBO/plutus/pull/7008)
- [Add certifier tests for UPLC simplifier test inputs](https://github.com/IntersectMBO/plutus/pull/7034)
- [Restructure certifier test modules; add unit testing capability](https://github.com/IntersectMBO/plutus/pull/7051)
- [Conformance tests for builtin arrays](https://github.com/IntersectMBO/plutus/pull/7045)
- [Improve the UPLC inliner to perform more inlining when it's safe](https://github.com/IntersectMBO/plutus/pull/7022)
- [[Costing](Fix memory usage for polymorphic types)](https://github.com/IntersectMBO/plutus/pull/7049)
- [Enhance the StrictifyBindings pass with strictness analysis](https://github.com/IntersectMBO/plutus/pull/7056)

### Issues and Pull Requests In Progress

- [Allow casing on booleans](https://github.com/IntersectMBO/plutus/pull/7029)
- Costing of builtin functions operating on builtin arrays (in plutus-private)
- Costing of the modular exponentation primitive (in plutus-private)
- Conformance tests for the modular exponentation primitive (in plutus-private)
