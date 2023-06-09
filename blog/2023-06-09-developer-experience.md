---
title: Developer Experience Update
slug: 2023-06-09-developer-experience
authors: angerman
tags: [devx]
hide_table_of_contents: false
---

## High level summary

The Developer Experience team has been devoted to day-to-day troubleshooting and support of various elements including build failures, compiler upgrades, the maintaince of our cardano-haskell-packages (CHaP), and infrastructure like GitHub Actions, iohk-nix, haskell.nix, and devx. Furthermore, we have also contributed to upstream tooling improvements.

## Lower level summary

### build support & maintainance

Our DevX team has been instrumental in troubleshooting and fixing a wide range of issues, from broken windows builds and obscure `LoadDLL` errors to `blst` integration across Nix and Github CI. We've also initiated automatic uploads for release assets. Our efforts in streamlining complex CI setups have paid off, with some repositories like [cardano-base](https://github.com/input-output-hk/cardano-base) experiencing significant reductions in CI complexity.

### compiler upgrades
After the support for 9.2 across our libraries, we have started working on 9.6 compabilitiy as well. This move brings us closer to the upstream compiler, facilitating the contribution of patches and enabling early detection of regressions. In addition, we're prioritizing compaining even stronger for better backwards compatibility.

### CHaP (cardano-haskell-packages)
We relocated the underlying tooling, ([foliage](https://github.com/input-output-hk/foliage)), for [CHaP](https://github.com/input-output-hk/cardano-haskell-packages) into the IOG organization. Furthermore, we have introduced [improved tooling to quickly add constraints to packages](https://github.com/input-output-hk/cardano-haskell-packages/pull/260), [better error reporting for add-revision](https://github.com/input-output-hk/cardano-haskell-packages/issues/285) and [better hackage url compatibility](https://github.com/input-output-hk/foliage/pull/63) to facilitate easer usage of CHaP.

### GitHub Actions
Our repository, [input-output-hk/actions](https://github.com/input-output-hk/actions), now houses the necessary actions for installing pre-requisites to build Cardano projects using GitHub Actions. Leveraging the `base` and `haskell` install actions has allowed us to simplify workflows in the repos, focusing primarily on invoking `cabal`.


### iohk-nix
The [iohk-nix](https://github.com/input-output-hk/iohk-nix) repository has undergone a major revamp and now provides pre-built packages of the cryptographic libraries IOG utilizes for GitHub Runners. The key components we use, `sodium`, `blst`, and `secp256k1`, are also fixed to certain revisions within the `iohk-nix` repository.

### haskell.nix
[Haskell.nix](https://github.com/input-output-hk/haskell.nix) has been maintained and updated with the addition of GHC 9.6.2 and GHC 8.2.8. After discovering performance regression in the native bignum backend, we switched the default bignum backend to `gmp`.


### devx

The relatively new [devx](https://github.com/input-output-hk/devx) repository is where we experiment with a single nix development shell that aims to suffice for most use-cases at IOG. This initiative is expected to eliminate a number of CI failures related to project-build and shell interaction problems. The `devx` repository's readme has been updated to reflect its purpose and usage guidelines.

### upstream tooling

Our team remains committed to enhancing upstream tooling, with ongoing contributions to GHC, Cabal, and Nix.