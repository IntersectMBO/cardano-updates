---
title: Plutus Core Team Update
slug: 2026-01-21-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary
The Plutus team has finished implementing and costing the `Value` primitives, as well as completing all other development required for the upcoming intra-era hard fork.

We've recently published a blog post recapping the recent UPLC 2025 event: https://www.iog.io/news/uplc-2025-conference-recap

In collaboration with Koz Ross from MLabs, we've implemented optimized `byteStringToInteger` and `integerToByteString` primitives.
Both primitives will now take linear time instead of quadratic time.
These improvements leverage the `ghc-bignum` library, which was made possible by dropping support for GHC 8.

In parallel, we continue to make progress across several other areas, including the initial work on Plutus V4, ongoing discussions around formally verifying the UPLC inliner in collaboration with Professor Philip Wadler, further optimization of UPLC runtime performance, and continued improvements to the usability of Plinth.

## Low level summary

### Key Pull Requests Merged

- [Plinth user guide: more details on versions](https://github.com/IntersectMBO/plutus/pull/7523)
- [Add valueData and unValueData conformance tests](https://github.com/IntersectMBO/plutus/pull/7521)
- [Finalise cost models for valueData and unValueData](https://github.com/IntersectMBO/plutus/pull/7522)
- [Make Builtins.unsafeUncons use builtin list casing](https://github.com/IntersectMBO/plutus/pull/7519)
- [Improve UPLC parser error messages](https://github.com/IntersectMBO/plutus/pull/7489)
- [Value costing: insertCoin, unionValue, scaleValue](https://github.com/IntersectMBO/plutus/pull/7435)
- [Add casing on constants to the Plinth user guide](https://github.com/IntersectMBO/plutus/pull/7481)
- [Optimize VConstr bounds check in CEK machine](https://github.com/IntersectMBO/plutus/pull/7479)
- [Optimize Integer <-> ByteString conversions](https://github.com/IntersectMBO/plutus/pull/7439)
- [Make Enum PlutusTx.Rational plc compilable](https://github.com/IntersectMBO/plutus/pull/7474)
- [Fix the spec of CEK rules for constr and case](https://github.com/IntersectMBO/plutus/pull/7419)
- [Add deriveEnum for Plinth](https://github.com/IntersectMBO/plutus/pull/7456)
- [perf(builtins): optimize listToArray implementation and costing](https://github.com/IntersectMBO/plutus/pull/7468)
- [(Optimization) Combine Either Text (HeadSpine ...) into HeadSpine](https://github.com/IntersectMBO/plutus/pull/7452)
- [Support mkNil for any builtin types](https://github.com/IntersectMBO/plutus/pull/7438)

### Issues and Pull Requests In Progress

- Formally verifying the UPLC inliner
- Adding a new `Array` constructor for UPLC, which can be accessed in Plutus V4
- End-to-end testing for intra-era Hard Fork features
