---
title: Developer Experience Update
slug: 2023-07-06-developer-experience
authors: angerman
tags: [devx]
hide_table_of_contents: false
---

## High level summary

The Developer Experience team has been dealing with day-to-day troubleshooting and support of various elements including build failures, compiler upgrades, CI migration from Cicero to Hydra, and Buildkite to GitHub Actions. iohk-nix, haskell.nix, and devx have seen improvements.

## Lower level summary

### build support & maintainance

The DevX team has helped troubleshoot a few CI issues, and focused on helping to migrate from Cicero to Hydra, as well as from Buildkite to GitHub Actions.

### compiler upgrades

Compatibility with 9.6 has been continued and most of our lirbariesa are not 9.6 compatible. Only a few are not, we hope to have this done by the end of the month. We've also started preliminarily adding GHC 9.8 to our infrastructure for early compiler regression tests.


### Hydra Tools
Our repository, [input-output-hk/actions](https://github.com/input-output-hk/hydra-tools), has seen quite some improvements to facility the hydra <-> github integration.


### haskell.nix
[Haskell.nix](https://github.com/input-output-hk/haskell.nix) has been maintained and updated with the addition of preliminary GHC 9.8 support.

### devx

The [devx](https://github.com/input-output-hk/devx) repository has seen significant improvements, including the addition of GitHub Codespaces, and DevContainers. Integrated with our [actions/devx](https://github.com/input-output-hk/actions) GitHub Actions, we have a consistent set of tooling for
- nix develop shells
- GitHub CodeSpaces integration
- VSCode DevContainer support
- GitHub Actions integration

### upstream tooling

Our team remains committed to enhancing upstream tooling, with ongoing contributions to GHC, Cabal, and Nix.