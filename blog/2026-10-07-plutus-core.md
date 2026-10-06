---
title: Plutus Core Team Update
slug: 2026-10-07-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team has published release 1.71.0.0, which includes the full Plutus V4 script context and will be integrated into node release 11.2.
The release also adds Plutus Core language version 1.2.0 and the cost models for `keepPolicies` and `dropPolicies` (CIP-0168).

We've opened [CIP-0205](https://github.com/cardano-foundation/CIPs/pull/1278), which proposes to remove scope checking for Plutus scripts.
As usual, we encourage everyone to read it and leave comments - we would like as much feedback as possible.

Other than these, casing on built-in types is now specified in the Plutus Core specification, and the guardrail script has been made smaller and cheaper by using `BuiltinList` and `BuiltinPair`.
Work in progress includes making the `uplc` and `plc` executables easier to obtain (publishing them to CHaP, and shipping prebuilt macOS binaries built by Hydra), and bringing the specification further up-to-date.

## Key Pull Requests Merged

- [Add Plutus Core version 1.2.0](https://github.com/IntersectMBO/plutus/pull/7964)
- [Cost models for `keepPolicies` and `dropPolicies` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7954)
- [Add semvar F and G for Dijkstra](https://github.com/IntersectMBO/plutus/pull/7966)
- [Specify casing on built-in types](https://github.com/IntersectMBO/plutus/pull/7933)
- [Change ttisScriptPurposes to ttisRedeemerHashes](https://github.com/IntersectMBO/plutus/pull/7963)
- [Add property tests for V4 script context helpers](https://github.com/IntersectMBO/plutus/pull/7962)
- [Fix scope check](https://github.com/IntersectMBO/plutus/pull/7968)
- [Guardrail: improve cost/size using BuiltinList/BuiltinPair](https://github.com/IntersectMBO/plutus/pull/7977)
- [Fix plugin unable to resolve variable reference when parsing list](https://github.com/IntersectMBO/plutus/pull/7971)

## Pull Requests In Progress

- [Publish plutus-executables to CHaP](https://github.com/IntersectMBO/plutus/pull/7969)
- [Ship prebuilt executables for macOS, built by Hydra](https://github.com/IntersectMBO/plutus/pull/7972)
- [Apply script deserialisation bounds unconditionally](https://github.com/IntersectMBO/plutus/pull/7973)
- [Add plugin option to dump compilation timing](https://github.com/IntersectMBO/plutus/pull/7976)
