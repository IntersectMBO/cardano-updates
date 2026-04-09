---
title: Plutus Core Team Update
slug: 2026-04-08-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary
The Plutus team has recently made a number of significant improvements to Plinth, including:

- Compiler improvements:
  - Added a type checker plugin that preserves source locations, resulting in significantly clearer error messages ([#7640](https://github.com/IntersectMBO/plutus/pull/7640)).
  - Added a second type checker plugin to detect unsupported Haskell features, further improving error reporting ([#7659](https://github.com/IntersectMBO/plutus/pull/7659)).
  - Added a driver plugin that automatically sets the required compiler flags and enables the Strict extension ([#7687](https://github.com/IntersectMBO/plutus/pull/7687)).
- Language improvements:
  - `AsData` now generates a destructor function for the data type ([#7664](https://github.com/IntersectMBO/plutus/pull/7664)).
    For matching on sum types, the destructor function is more efficient than the pattern synonyms.

The Plinth user guide will be updated soon. In the meantime, please refer to the linked PR descriptions for further details.

Additionally, a new UPLC optimization has been implemented: applications with three or more arguments are now transformed into `case-constr` form.

## Low level summary

### Key Pull Requests Merged

- [Improve compile errors, and add Plinth.Plugin that preserves more source locations](https://github.com/IntersectMBO/plutus/pull/7640)
- [Plinth: improve error reporting for unsupported Haskell features](https://github.com/IntersectMBO/plutus/pull/7659)
- [Generate a destructor function from AsData](https://github.com/IntersectMBO/plutus/pull/7664)
- [Drop redundant unsafeCaseList calls produced by AsData](https://github.com/IntersectMBO/plutus/pull/7679)
- [Automatically set required flags and Strict extension in the plugin](https://github.com/IntersectMBO/plutus/pull/7687)
