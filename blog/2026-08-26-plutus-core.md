---
title: Plutus Core Team Update
slug: 2026-08-26-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team has published release 1.68.0.0, which includes the Plutus V4 ledger API types.
Note that Plutus V4 remains under development, and these types may still change before Dijkstra.

Getting started with Plinth is now much easier: the new [install script](https://github.com/IntersectMBO/plinth-template/pull/85) in `plinth-template` sets up a Plinth project with a single command, taking care of installing the required tooling.
See the updated [documentation](https://plutus.cardano.intersectmbo.org/docs/using-plinth/environment-setup) for details.

Work on Plutus V4 language features continues.
Casing on `Data` has been implemented: `case` on a `Data.Constr` value can now dispatch directly on the constructor tag, which, combined with the recently added `dropList`, yields a decent performance boost.
We've also added the `assetCount` builtin (CIP-0168) along with its cost model, merged the cost model for `multiIndexArray` (CIP-0156), and continued formalizing builtins in the Agda metatheory.

We also continue to welcome feedback on [CPS-0034 - Extending Plutus Core conformance testing](https://github.com/cardano-foundation/CIPs/pull/1244).

## Key Pull Requests Merged

- [Add `assetCount` builtin (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7912)
- [Cost model for `assetCount` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7918)
- [Cost model for `multiIndexArray` (CIP-0156)](https://github.com/IntersectMBO/plutus/pull/7869)
- [Plutus V4 and dijkstraPV](https://github.com/IntersectMBO/plutus/pull/7898)
- [Use a new `POSIXTimeRange` datatype for Plutus V4](https://github.com/IntersectMBO/plutus/pull/7907)
- [Compile Haskell unit to built-in unit](https://github.com/IntersectMBO/plutus/pull/7897)
- [PIR inliner: exclude type/kind nodes when calculating term size](https://github.com/IntersectMBO/plutus/pull/7892)
- [Add casing on builtins to the metatheory](https://github.com/IntersectMBO/plutus/pull/7895)
- [Formalize integer division and CIntegers in the metatheory](https://github.com/IntersectMBO/plutus/pull/7864)
- [Implement TRACE concretely in the metatheory](https://github.com/IntersectMBO/plutus/pull/7922)
- [More precise error location for out-of-bounds `constr` tag](https://github.com/IntersectMBO/plutus/pull/7901)
- [Add an easy-to-use Plinth install script](https://github.com/IntersectMBO/plinth-template/pull/85) (in `plinth-template`)

## Pull Requests In Progress

- [Add `Data.Constr` casing to `Case`](https://github.com/IntersectMBO/plutus/pull/7914)
- [Builtin Pattern Matching (CIP-0194)](https://github.com/IntersectMBO/plutus/pull/7852)
- [Cost model for `policies` (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7921)
- [Add `keepPolicies` and `dropPolicies` builtins (CIP-0168)](https://github.com/IntersectMBO/plutus/pull/7926)
- [Compile BuiltinData transparently in the plugin](https://github.com/IntersectMBO/plutus/pull/7863)
