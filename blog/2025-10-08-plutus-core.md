---
title: Plutus Core Team Update
slug: 2025-10-08-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

We’ve completed the implementation of CIP-0153, introducing the Value built-in type and its associated functions.
Our current focus is on finalizing the costing for these built-ins.
Once this is complete, Plutus will be ready for the intra-era hard fork.
All other features scheduled for the hard fork are already finished.

We’ve improved the Flat decoding of built-in lists, which has noticeably sped up Plutus script deserialization.
In our benchmarks, some scripts' deserialization now runs with double-digit performance gains.

We’ve updated the Plutus Core specification and the Agda formalization to include the multi-scalar multiplication primitives (CIP-0133).
Additional property and conformance tests have also been added for these primitives.

The team is also gearing up for [UPLC 2025](https://services.iohk.io/uplc), a UPLC event scheduled to take place in approximately three weeks.

## Low level summary

### Key Pull Requests Merged

- [Spec: serialise arrays as lists; miscellaneous updates](https://github.com/IntersectMBO/plutus/pull/7313)
- [Implement ValueData and UnValueData](https://github.com/IntersectMBO/plutus/pull/7338)
- [Add BLS12-381 MSM builtins to specification](https://github.com/IntersectMBO/plutus/pull/7341)
- [Benchmarks for flat list/array decoding](https://github.com/IntersectMBO/plutus/pull/7345)
- [Keep track of currency/token lengths in builtin Value](https://github.com/IntersectMBO/plutus/pull/7349)
- [Property tests for BLS12-381 multi-scalar multiplication](https://github.com/IntersectMBO/plutus/pull/7343)
- [Optimise list decoder](https://github.com/IntersectMBO/plutus/pull/7358)
- [Add BLS12-381 MSM builtins to metatheory](https://github.com/IntersectMBO/plutus/pull/7339)
- [Conformance tests for BLS12_381 multiScalarMul operations (2)](https://github.com/IntersectMBO/plutus/pull/7369)
- [Value decoding/parsing: reject currencies/tokens longer than 32 bytes](https://github.com/IntersectMBO/plutus/pull/7371)
- [Enforce currency and token lengths in insertCoin and unValueData](https://github.com/IntersectMBO/plutus/pull/7372)
- [Cover some missing cases in the connformance tests for wrteiBits](https://github.com/IntersectMBO/plutus/pull/7374)
- [Enable the Agda conformance tests for the array builtins](https://github.com/IntersectMBO/plutus/pull/7375)
- [valueContains: enforce no negative amounts in either Value](https://github.com/IntersectMBO/plutus/pull/7376)
- [Enable BLS12-381 MSM builtins at PV11](https://github.com/IntersectMBO/plutus/pull/7378)
- [Conformance tests for built-in functions on Value](https://github.com/IntersectMBO/plutus/pull/7359)

### Issues and Pull Requests In Progress

- Built-in Value: costing (in plutus-private)
