---
title: Plutus Core Team Update
slug: 2026-07-29-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary
In the past weeks the Plutus team has added new built-in functions, improved `Value` support in the ledger API, broadened the conformance test suite, and continued working on Plutus V4 script context and Plutus V4 language features like casing on `Data`.

Two built-ins from recent CIPs have landed: `multiIndexArray` (CIP-0156), which reads several elements of an array in one call, and `policies` (CIP-0168), which returns the currency symbols in a `Value`.
Both are gated behind a future protocol version and not yet costed, so they cannot be used on-chain until Dijkstra.

The conformance test suite now ships `.flat` files alongside the textual test cases, making it much easier to consume for implementations that do not parse the textual format.
The `asData` pattern synonyms now use built-in list casing.
The `Value` built-in type has been added to the metatheory as postulates, along with a fix to `decEq` that removed a normalization blowup consuming over 128GB of memory when checking certificates.

We've merged the Plutus V4 script context definition (though it is subject to change), and recently discussed its `Data` encoding during a Plutus Working Group meeting.
You can find the meeting notes [here](https://github.com/IntersectMBO/plutus/issues/7342#issuecomment-5039899895).
Implementers of alternative node clients, UPLC interpreters, and compilers targeting UPLC are encouraged to review the notes and contribute to the discussion.

## Key Pull Requests Merged

- [Add multiIndexArray builtin (CIP-0156)](https://github.com/IntersectMBO/plutus/pull/7844)
- [Expose multiIndexArray to Plinth (CIP-0156)](https://github.com/IntersectMBO/plutus/pull/7845)
- [Add `policies` builtin (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7858)
- [Add `unsafeLovelaceValueOf`: a positional lovelace accessor for ledger `Value`s](https://github.com/IntersectMBO/plutus/pull/7838)
- [Re-export the full `Value` API from V2/V3 and the `Data.*` modules](https://github.com/IntersectMBO/plutus/pull/7839)
- [Fix Integer narrowing in the PlutusTx.Builtins.Internal wrappers](https://github.com/IntersectMBO/plutus/pull/7851)
- [Range-check shift/rotate amounts in the bytestring wrappers](https://github.com/IntersectMBO/plutus/pull/7854)
- [Use list casing in asData pattern synonyms](https://github.com/IntersectMBO/plutus/pull/7866)
- [Remove BuiltinCasing option for the datatypes flag](https://github.com/IntersectMBO/plutus/pull/7859)
- [Plutus V4 ledger api types](https://github.com/IntersectMBO/plutus/pull/7846)
- [Add flat files to conformance tests](https://github.com/IntersectMBO/plutus/pull/7853)
- [Refactor BLS12_381 conformance tests to remove literal curve points](https://github.com/IntersectMBO/plutus/pull/7837)
- [Initial improvements to UPLC executable](https://github.com/IntersectMBO/plutus/pull/7830)
- [Optimize Flat integer decoding](https://github.com/IntersectMBO/plutus/pull/7856)
- [Metatheory: add Value built-in type with postulated functions](https://github.com/IntersectMBO/plutus/pull/7832)
- [Fix termination and performance issues with DecEq](https://github.com/IntersectMBO/plutus/pull/7840)
- [Agda conformance: re-enable valueData/unValueData tests](https://github.com/IntersectMBO/plutus/pull/7855)

## Notable Pull Requests In Progress

- [Cost model for `multiIndexArray` (CIP-0156)](https://github.com/IntersectMBO/plutus/pull/7869)
- [Add CollapseCase pass, rewriting list casing into dropList](https://github.com/IntersectMBO/plutus/pull/7872)
- [Compile BuiltinData transparently in the plugin](https://github.com/IntersectMBO/plutus/pull/7863)
- [Formalize integer division and CIntegers in the metatheory](https://github.com/IntersectMBO/plutus/pull/7864)
- [Deduce `uplc` input type from file extension](https://github.com/IntersectMBO/plutus/pull/7873)
