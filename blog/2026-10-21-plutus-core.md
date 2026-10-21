---
title: Plutus Core Team Update
slug: 2026-10-21-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team has enabled `multiIndexArray` (CIP-0156) and the new `Value` builtins `policies`, `assetCount`, `keepPolicies` and `dropPolicies` (CIP-0168) at Dijkstra for all Plutus ledger language versions.
These require the Dijkstra hard fork before they can be used on-chain.
We've also added conformance tests for `multiIndexArray`, brought the specification's versioning section up-to-date, and added casing on `Data` to the Agda metatheory.

The guardrail script now supports optional parameters that governance proposals can set or unset, and the Plinth compiler can report timings for individual compilation stages.
Work in progress includes generating Agda typechecking tests from conformance tests, and CEK machine optimizations.

## Key Pull Requests Merged

- [Enable new builtins at Dijkstra](https://github.com/IntersectMBO/plutus/pull/8006)
- [Publish plutus-executables to CHaP](https://github.com/IntersectMBO/plutus/pull/7969)
- [Ship prebuilt executables for macOS, built by Hydra](https://github.com/IntersectMBO/plutus/pull/7972)
- [Guardrail: support optional parameters](https://github.com/IntersectMBO/plutus/pull/7999)
- [Add plugin option to dump compilation timing](https://github.com/IntersectMBO/plutus/pull/7976)
- [Respect target version when compiling Data casing](https://github.com/IntersectMBO/plutus/pull/7992)
- [Apply script deserialisation bounds unconditionally](https://github.com/IntersectMBO/plutus/pull/7973)
- [Update protocol and ledger language versioning in the specification](https://github.com/IntersectMBO/plutus/pull/7978)
- [Add casing on data to the metatheory](https://github.com/IntersectMBO/plutus/pull/7984)
- [Add multiIndexArray conformance tests](https://github.com/IntersectMBO/plutus/pull/7996)

## Pull Requests In Progress

- [Add tool to generate Agda typechecking tests from conformance tests](https://github.com/IntersectMBO/plutus/pull/7983)
- [Add bytestring to metatheory](https://github.com/IntersectMBO/plutus/pull/7975)
- [Replace Vector with Array in the evaluator](https://github.com/IntersectMBO/plutus/pull/7994)