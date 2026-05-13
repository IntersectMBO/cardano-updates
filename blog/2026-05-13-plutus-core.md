---
title: Plutus Core Team Update
slug: 2026-05-13-plutus-core
authors: zliu41
tags: [plutus-core]
hide_table_of_contents: false
---

## High level summary

The Plutus team recently published a blog [blog post](https://www.iog.io/news/uplc-command-line-tool) about the improved `uplc` command-line tool.

Among other things, the tool can optimize Plutus scripts.
Experiments on recent mainnet scripts indicate execution-cost savings of more than 10% on average.
So, if you are not already using it, it is worth checking what you may be leaving on the table.

Feedback, bug reports, and ideas for further improvements are very welcome.
Please share them by opening issues in the Plutus repository on GitHub.

Further improvements to UPLC optimization have been made in recent weeks and are now integrated into the `uplc` tool.
These include a new `--inline-unconditional-growth` flag for tuning the aggressiveness of the inliner, Agda certifiers for several optimization passes, a new UPLC constant-folding pass, and a pass that hoists polymorphic builtins to reduce the use of force.
Common subexpression elimination (CSE) has also been improved.


## Low level summary

### Key Pull Requests Merged

- [Make CSE see through bindings](https://github.com/IntersectMBO/plutus/pull/7720)
- [Add `inline-unconditional-growth` flag, controlling aggressiveness of unconditional inlining](https://github.com/IntersectMBO/plutus/pull/7729)
- [Remove `PlutusTx.Plugin` and `plc`; make `injectAnchors` optional for `plinthc`](https://github.com/IntersectMBO/plutus/pull/7725)
- [Certifier: fix the CSE translation relation and re-enable it](https://github.com/IntersectMBO/plutus/pull/7733)
- [Certifier for case-reduce](https://github.com/IntersectMBO/plutus/pull/7739)
- [Add uplc command line tool user guide](https://github.com/IntersectMBO/plutus/pull/7745)
- [Certifier for LetFloatOut pass](https://github.com/IntersectMBO/plutus/pull/7753)
- [Add detailed error message for unsupported casing on Integer](https://github.com/IntersectMBO/plutus/pull/7766)
- [Improve error reporting for a few unsupported types](https://github.com/IntersectMBO/plutus/pull/7767)
- [Add a constant folding pass to UPLC](https://github.com/IntersectMBO/plutus/pull/7764)
- [Add uplc command line tool user guide](https://github.com/IntersectMBO/plutus/pull/7745)
- [Print optimization report in `uplc optimize`](https://github.com/IntersectMBO/plutus/pull/7765)
- [[uplc] Use typical key order in optimized blueprint](https://github.com/IntersectMBO/plutus/pull/7769)
- [UPLC optimization pass: hoist polymorphic builtins](https://github.com/IntersectMBO/plutus/pull/7779)
