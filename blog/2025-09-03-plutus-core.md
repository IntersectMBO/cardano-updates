---
title: Plutus Core Team Update
slug: 2025-09-03-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

### Plutus Core

- We made a number of performance optimizations and refactoring for the Plutus evaluator and deserializer, including [#7272](https://github.com/IntersectMBO/plutus/pull/7272), [#7281](https://github.com/IntersectMBO/plutus/pull/7281), [#7286](https://github.com/IntersectMBO/plutus/pull/7286), [#7287](https://github.com/IntersectMBO/plutus/pull/7287), and [#7296](https://github.com/IntersectMBO/plutus/pull/7296).

- We added support for built-in units and pairs.
  This functionality will be enabled at the upcoming intra-era hard fork.

- We continued developing the [UPLC-CAPE benchmark](https://github.com/IntersectMBO/UPLC-CAPE), aimed to compare the performances of different surface languages targeting UPLC.
  A presentation on this was given in the Plutus working group meeting on September 2nd, 2025.

### Plinth

- We added a Plinth library function, [`caseInteger`](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Builtins-Internal.html#v:caseInteger) that compiles to casing on integers in UPLC, a feature that will be enabled at the upcoming intra-era hard fork.

- We made the compilation fail early with a better error message when an unsupported Haskell language extension is used.

- We added more source code location information to Plinth compiler's compilaton trace (which can be obtained using the `dump-compilation-trace` flag), and the error message when the compilation fails.

## Low level summary

### Key Pull Requests Merged

- [Fix natural number flat encoding on the spec](https://github.com/IntersectMBO/plutus/pull/7263)
- [Add 'CekResult' and improve 'dischargeCekValue'](https://github.com/IntersectMBO/plutus/pull/7272)
- [Make `FrameAwaitFunValue` handle multiple arguments at once](https://github.com/IntersectMBO/plutus/pull/7281)
- [Throw compilation error when unsupported extension is enabled](https://github.com/IntersectMBO/plutus/pull/7252)
- [Add Plinth builtin for integer casing](https://github.com/IntersectMBO/plutus/pull/7271)
- [[OPTIMIZATION] Use specialized `ArgStack`](https://github.com/IntersectMBO/plutus/pull/7286)
- [[OPTIMIZATION] Use spine directly for constant casing](https://github.com/IntersectMBO/plutus/pull/7287)
- [Flat: encode UPLC arrays as lists](https://github.com/IntersectMBO/plutus/pull/7296)
- [Add SrcSpans of Vars in the compilation trace](https://github.com/IntersectMBO/plutus/pull/7299)
- [[Builtins] Add constant casing for builtin unit and pair](https://github.com/IntersectMBO/plutus/pull/7221)
- [[UPLC-CAPE] Define Two-Party Escrow benchmark scenario](https://github.com/IntersectMBO/UPLC-CAPE/pull/26)

### Issues and Pull Requests In Progress

- [Add BuiltinValue type to plutus-core](https://github.com/IntersectMBO/plutus/pull/7225)
- [Add MSM builtin](https://github.com/IntersectMBO/plutus/pull/7074)
