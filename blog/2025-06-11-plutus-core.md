---
title: Plutus Core Team Update
slug: 2025-06-11-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

Over the past two weeks, the Plutus Core team has completed the implementation of case analysis for booleans and integers.
The PR is currently pending merge.

On the Plinth side, we've made several improvements:
- Added support for evaluating `CompiledCode` using the CEK machine.
  A new [user guide page](https://plutus.cardano.intersectmbo.org/docs/using-plinth/evaluating-plinth) explains how to use this functionality.
- Enhanced `ToData` and `FromData` instance generation: product types can now use the `List` constructor of `Data` instead of `Constr`, resulting in improved efficiency.
- Expanded the API for builtin lists with additional utility functions.

We’ve completed the Plutus section of the blueprint, which we hope will be helpful for those implementing alternative Plutus evaluators.
We invite the community to give it a read and share feedback.

Finally, we’ve begun releasing `plutus-metatheory` on CHaP, paving the way for integrating the certifier into the Plinth compiler.

## Low level summary

### Key Pull Requests Merged

- [Add support for evaluating CompiledCode using the CEK machine](https://github.com/IntersectMBO/plutus/pull/7072)
- [Add makeIsDataAsList for generating IsData instances that uses List internally](https://github.com/IntersectMBO/plutus/pull/7121)
- [Add plutus-metatheory to CHaP release](https://github.com/IntersectMBO/plutus/pull/7122)
- [PlutusTx.Data.List & PlutusTx.BuiltinList - Feature Parity](https://github.com/IntersectMBO/plutus/pull/7055)
- [Write about Plutus script serialization](https://github.com/cardano-scaling/cardano-blueprint/pull/46)

### Issues and Pull Requests In Progress

- [Case analysis on booleans and integers](https://github.com/IntersectMBO/plutus/pull/7029)
- [Add builtin arrays to Plutus metatheory](https://github.com/IntersectMBO/plutus/pull/7127)
- [Add MSM builtin](https://github.com/IntersectMBO/plutus/pull/7074)
