---
title: Consensus Team Update
slug: 2022-11-16-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High-level summary

During the past two weeks, the consensus team started documenting the
implementation of the UTxO HD feature and continued developing tests for it. As
part of our work on UTxO HD, we improved the Haskell support for LMDB. We also
spent time working on the LSM tree prototype, and designed a parameter tuning
algorithm for it. Regarding our work on Genesis, our investigation of the
"plateaus" pointed at the `TICKF` slowdown on era boundaries as culprit. This
led us to developing a caching strategy that will not only remove the
aforementioned "plateaus", but can help alleviating the growing block production
delay on epoch switch. We also helped reviewing the block forge credential
hotswap feature, which is intended for use in the adoption of P2P.

We also worked on paying technical debt and fostering collaboration. In
particular, we improved the `io-sim` framework, which is crucial for testing and
simulating Cardano components. We also removed thunks that appeared on era
translations, and improved our diffusion pipelining feature. We are working on a
presentation for explaining Praos and Genesis.

## High-level status report

- Finish the UTxO HD prototype: in progress.
  - We added documentation for this feature.
  - We developed the second version of the mempool tests.
  - We fixed benchmarks that were inflating the speedup we observed in the
    anti-diff implementation of sequences of differences. Speedups are now in the
    range of [3.33, 4.75], which remain significant.
  - We continued improving Haskell LMDB support.
  - We finished implementing a "parameter tuning algorithm" for the LSM tree
    prototype. This enables us to run experiments to check the correctness of
    the algorithm.
- Genesis: in progress.
  - Work investigating the "plateaus" in the `ChainSync` jumping prototype
    pointed to the `TICKF` slowdown on era boundaries as culprit.
- Tech debt:
  - We improved the capabilities of our `io-sim` library, which is crucial for
    testing and simulating Cardano components.
  - We removed thunks from epoch translations in the ledger.
  - We added Linux CI support for `lmdb-simple`.
  - We got pending diffusion pipelining improvements merged.
- Fostering collaboration:
  - We are working on a explanation of Praos and Genesis protocols.
- Support:
  - Investigation of CSJ "plateaus" led us to developing a caching strategy for
    `TICKF` that will not only remove these "plateaus", but can help alleviating
    the growing block production delay on epoch switch.
  - We reviewed the block forge credential hotswapping feature which is intended
    for use in the adoption of P2P.

## Workstreams

### Finish the UTxO HD prototype

We merged PR [#4060][pr-4060], which adds a report documenting the UTxO HD
feature, and puts emphasis in explaining how the mempool works in combination
with UTxO HD.

We opened a draft PR with the second iteration of the property tests for the
mempool ([#4076][pr-4076]).

We fixed the `Arbitrary` instances for keys and values in `DiffSeq` benchmarks
([#4143][pr-4143]). The problem was that we were testing with mostly small
values, which artificially boosted the performance gains we saw on benhcmarks.
Speedups are now in the range of [3.33, 4.75] across the different
configurations.

#### Backing store property tests

We focused on incorporating feedback on the monadic cursor API PR ([#1][pr-1]).
This required us to make small tweaks to `quickcheck-lockstep` to test the new
API. We also updated the backing store property tests to use the new version of
the monadic cursor API.

### LSM tree implementation

We worked on the LSM tree prototype. In particular: finished implementing a
"parameter tuning algorithm" that adapts the LSM tree design based on factors
like:
- workload
- machine specs, 
- and characteristics of the data being stored. 

We are now running experiments to gather results and cross-reference them with
existing experimental results from the LSM tree paper to see if the algorithm is
working correctly.

### Benchmarking the CSJ prototype

We focused on investigating the "plateaus" in the `ChainSync` tip, which turned
out to be due to the `TICKF` bug which we previously were only aware of in the
context of the long forging times near epoch boundaries. For the most drastic
patch by @nfrisby to speed up `TICKF`, full sync is speeding up by 7%.

The following plot shows that by caching the `TICKF` the `ChainSync` tip and the
`VolatileDB` tip progress at the same rate.

![](/images/consensus/2022-11-16-removed-stuttering.png)

The plot below shows the speedup observed by caching the `TICKF` rule wrt the
baseline.

![](/images/consensus/2022-11-16-comparing-TICKF-batch.png)

### Technical debt

After addressing the PR comments, we merged PR [#16][pr-16], which implements
the `MonadCatch` instance for `STM`. This extends the capability of our `io-sim`
library, which is crucial for testing and simulating Cardano components PR #16
closed [#1461][issue-1461]. This new feature was published as version `0.4.0.0`
of `io-sim`.

We continued with our work fixing the `NoThunk` errors required for enabling
nightly tests, with the help of `TVarInvariant` checks in `strict-stm` and
`nothunks` libraries. We proposed fixes in `cardano-ledger` that took care of
thunks that appeared in era translations ([#3143][pr-3143]). The fixes will be
integrated back into consensus when `cardano-ledger` approves and publish the
changes introduced in `#3143`.

We added CI support for `lmdb-simple` ([#2][pr-2]). We currently test the build on
a Linux environment only.

We got pending diffusion pipelining PRs ([#3857][pr-3857], [#3860][pr-3860],
[#3856][pr-3856]) merged, after rebasing and addressing feedback.

### Fostering collaboration

@nfrisby finished a visualisation tool and outlined scripts for the Praos and
Genesis explanation presentations. The idea is to produce a video that gives an
overview of these protocols.

### Support 

We started working on caching the computation of the `TICKF` rule
([#4054][issue-4054]), since this was blocking our benchmarking work for
Genesis. In addition, this issue has the Cardano community [quite
concerned][issue-4421], so we are hoping the work done in caching the
computation of the `TICKF` rule can help alleviating the growing block
production delay on epoch switch.

We reviewed the block forge credential hotswapping PR [#3800][pr-3800] from the
networking team, which is intended for use in the adoption of P2P.

[issue-4054]: https://github.com/input-output-hk/ouroboros-network/issues/4054
[issue-4421]: https://github.com/input-output-hk/cardano-node/issues/4421
[issue-1461]: https://github.com/input-output-hk/ouroboros-network/issues/1461

[pr-3800]: https://github.com/input-output-hk/ouroboros-network/pull/3800
[pr-16]:   https://github.com/input-output-hk/io-sim/pull/16
[pr-3143]: https://github.com/input-output-hk/cardano-ledger/pull/3143
[pr-4060]: https://github.com/input-output-hk/ouroboros-network/pull/4060
[pr-4076]: https://github.com/input-output-hk/ouroboros-network/pull/4076
[pr-1]:    https://github.com/input-output-hk/lmdb-simple/pull/1
[pr-4143]: https://github.com/input-output-hk/ouroboros-network/pull/4143
[pr-2]:    https://github.com/input-output-hk/lmdb-simple/pull/2
[pr-3857]: https://github.com/input-output-hk/ouroboros-network/pull/3857
[pr-3860]: https://github.com/input-output-hk/ouroboros-network/pull/3860
[pr-3856]: https://github.com/input-output-hk/ouroboros-network/pull/3856
