---
title: Consensus Team Update
slug: 2023-03-08-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

The Consensus team continued working on refactoring and improving the UTxO-HD
prototype, and introducing improvements to the `lmdb` related packages. In
particular we identified an opportunity to gain performance by handling locks in
a more optimal way.

On the Genesis front, we sketched a mitigation for an issue that `PNSol` and
Researchers caught. We also came op with a road map for not only testing the
Genesis prototypes, but also for enriching the tests we already have.

Regarding technical debt, next to some minor improvements, we created
component-level micro-benchmarks for adding transactions to the mempool. The
results of these benchmarks will be published in the `ouroboros-consensus` [web
page][oc-web-page].

We also finished moving the Consensus documentation to the `ouroboros-consensus`
repository, released `ouroboros-consensus` `0.3.0.0`, and reduced the time
GitHub actions take in `ouroboros-network`.

## Workstreams

### UTxO HD Prototype

We continued working on refactoring and improving the UTxO-HD prototype. As a
result of the first round of sytem-level benchmarks, we identified an
opportunity to optimise the way we handle locks to improve performance
([#4393][issue-4393]).

Also, we introduced several improvements to the `lmdb` related packages:
- [New tests][pull-19] for read-only transaction handles.
- [New functions][pull-18] and [data types][pull-13].
- [Updates][pull-11] to support improved type safety and smaller constraints in
  the UTxO HD prototype.
- Windows and MacOS [CI support][pull-8].

### Genesis

We sketched out a mitigation of the issue that `PNSol` and Researchers caught in
the Genesis design.

We came up with a road map for testing the Genesis prototypes, including early
milestones that are applicable to today's master branch, ie tests that are
useful before Genesis, and that will be nicely enriched when we do add Genesis.

We developed the aforementioned tests, specifically a `QuickCheck` generator for
the Honest leader schedule and one as-aggressive-as-possible Adversarial
leader schedule that together satisfy the Praos properties that the Consensus
design takes as invariants.

We investigated why the improved `ChainDB` queueing implementation behaves
differently in the baseline compared to the prototype, and we are close to
having a full picture of how the Consensus components interact during bulk sync.

### Technical debt

We [created][pull-4400] component-level micro-benchmarks for adding transactions
to the mempool. We plan on extending this to more mempool actions and different
types of blocks. We [store][pull-4422] the benchmark data to make it available
to the GitHub action that [publishes][pull-12] the benchmarks results.

Other minor improvements include:

- [Removal][pull-4429] of `Test.Util.Classify` in favour of `Test.StateMachine.Labelling`.
- [Addition][pull-4423] of `-Wunused-packages` to the default `ghc-options` for Consensus
  packages.

### Fostering collaboration

We finished moving the Consensus documentation [from][pull-4374]
`ouroboros-network` [to][pull-8] `ouroboros-consensus`, in preparation for
migrating the code to the latter repository.

### Support

We [released][pull-4412] ouroboros-consensus 0.3.0.0.

We [reduced][pull-4421] the load in the `ouroboros-network` GitHub actions,
thereby reducing the time CI jobs take.

[issue-4393]: https://github.com/input-output-hk/ouroboros-network/issues/4393
[pull-19]: https://github.com/input-output-hk/lmdb-simple/pull/19
[pull-18]: https://github.com/input-output-hk/lmdb-simple/pull/18
[pull-13]: https://github.com/input-output-hk/lmdb-simple/pull/13
[pull-11]: https://github.com/input-output-hk/lmdb-simple/pull/11
[pull-8]: https://github.com/input-output-hk/haskell-lmdb/pull/8
[pull-4400]: https://github.com/input-output-hk/ouroboros-network/pull/4400
[pull-4422]: https://github.com/input-output-hk/ouroboros-network/pull/4422
[pull-12]: https://github.com/input-output-hk/ouroboros-consensus/pull/12
[pull-4429]: https://github.com/input-output-hk/ouroboros-network/pull/4429
[pull-4423]: https://github.com/input-output-hk/ouroboros-network/pull/4423
[pull-4374]: https://github.com/input-output-hk/ouroboros-network/pull/4374
[pull-8]: https://github.com/input-output-hk/ouroboros-consensus/pull/8
[pull-4412]: https://github.com/input-output-hk/ouroboros-network/pull/4412
[pull-4421]: https://github.com/input-output-hk/ouroboros-network/pull/4421
[oc-web-page]: https://input-output-hk.github.io/ouroboros-consensus/
