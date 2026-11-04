---
title: Plutus Core Team Update
slug: 2026-11-04-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team has continued work on the Dijkstra builtins and conformance testing.
In particular we've finalized the cost models of the `keepPolicies` and `dropPolicies` builtins (CIP-0168).
We've also added 65 conformance cases for the new `Value` builtins, and specified these builtins and `multiIndexArray` in the Plutus Core specification.

On the metatheory front, a new tool generates Agda typechecking tests from the conformance suite.
We've also added the new builtins to the metatheory as postulates, and added support for casing on `Data` to the certifier's case-reduce pass.

Other than these, we've fixed the PIR and UPLC constant folding passes so they no longer fold builtin applications with impure arguments, which could incorrectly discard computations that fail.
We've also fixed compilation of Plutus V4 context types and aligned the `lookupCoin` and `valueContains` memory models with the existing cost-model parameters.

Work in progress includes implementing arrays and bytestrings in the metatheory, fixing certification of the case-of-case pass, and further CEK machine optimizations.

## Key Pull Requests Merged

- [Limit the policy list of `keepPolicies` and `dropPolicies` to 256 ids](https://github.com/IntersectMBO/plutus/pull/8013)
- [Conformance tests for CIP-0168 Value builtins](https://github.com/IntersectMBO/plutus/pull/8018)
- [Specify batch 7 builtins](https://github.com/IntersectMBO/plutus/pull/8025)
- [Add tool to generate Agda typechecking tests from conformance tests](https://github.com/IntersectMBO/plutus/pull/7983)
- [Add batch 7 builtins to the metatheory and Data casing to the case-reduce certifier](https://github.com/IntersectMBO/plutus/pull/8021)
- [Fix PIR's and UPLC's constant folding passes](https://github.com/IntersectMBO/plutus/pull/8022)
- [Expose all unfoldings for PlutusLedgerApi.V4.Contexts](https://github.com/IntersectMBO/plutus/pull/8019)
- [Fix `lookupCoin` and `valueContains` memory models to match the committed JSON](https://github.com/IntersectMBO/plutus/pull/7941)
- [Deploy to gh-pages without checking out the whole branch](https://github.com/IntersectMBO/plutus/pull/8011)

## Pull Requests In Progress

- [Metatheory: implement BuiltinArray](https://github.com/IntersectMBO/plutus/pull/8026)
- [Add bytestring to metatheory](https://github.com/IntersectMBO/plutus/pull/7975)
- [Certifier: case-of-case pass](https://github.com/IntersectMBO/plutus/pull/8023)
- [Replace Vector with Array in the evaluator](https://github.com/IntersectMBO/plutus/pull/7994)