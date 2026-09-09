---
title: Plutus Core Team Update
slug: 2026-09-09-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

Casing on `Data` has been merged: `case` on a `Data.Constr` value now dispatches directly on the constructor tag, which, combined with the recently added `dropList`, significantly reduces the cost of consuming `Data`-encoded values.
This is a Plutus V4 feature, and we are also working on specifying casing on built-in types in the Plutus Core specification.

Work on the `Value` builtins (CIP-0168) continues: the `keepPolicies` and `dropPolicies` builtins have been added, the cost model for `policies` has been merged, and the cost models for `keepPolicies` and `dropPolicies` are in progress.
Like the other new builtins, these are gated behind a future protocol version and cannot be used on-chain until Dijkstra.

On the Plutus V4 `ScriptContext` front, we are implementing a different encoding for product types using `List` instead of `Constr`, which makes them cheaper to decode.
We are also improving the usability of the certifier in the `uplc` and `plc` tools.

## Key Pull Requests Merged

- [Add `Data.Constr` casing to `Case`](https://github.com/IntersectMBO/plutus/pull/7914)
- [Add `keepPolicies` and `dropPolicies` builtins (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7926)
- [Cost model for `policies` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7921)
- [Remove deferred builtin applications from the specification](https://github.com/IntersectMBO/plutus/pull/7928)

## Pull Requests In Progress

- [Builtin Pattern Matching (CIP-0194)](https://github.com/IntersectMBO/plutus/pull/7852)
- [Specify casing on built-in types](https://github.com/IntersectMBO/plutus/pull/7933)
- [Cost model for `keepPolicies` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7930)
- [Cost model for `dropPolicies` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7937)
- [Encode single constructor ledger types using Data.List](https://github.com/IntersectMBO/plutus/pull/7939)
- [Improve uplc/plc certifier usability](https://github.com/IntersectMBO/plutus/pull/7940)
- [Compile BuiltinData transparently in the plugin](https://github.com/IntersectMBO/plutus/pull/7863)
