---
title: Consensus Team Update
slug: 2022-10-02-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High-level summary

During the past two weeks, the consensus team continued its work on testing the
UTxO HD prototype. We completed the era-transition and backing store tests, and
the mempool tests are advancing at a steady pace. Regarding our work in the
Genesis design, we continued our collaboration with the research and networking
teams, and we continue investigating strategies for making the chain-sync
jumping prototype faster.

## High-level status report

- Finish the UTxO HD prototype: on track.
  - We worked on state-machine tests for the mempool, and spotted potential bugs
    in the implementation. Investigation is ongoing.
  - We have a set of property tests for the backing store. We still need to
    incorporate the improvements to the LMDB cursor API that these tests
    made possible.
  - We merged the era-transition tests PR.
- Genesis: on track.
  - Design work around Genesis continues in collaboration with researchers and
    the networking team.
  - We continued trying to improve the performance of the chain-sync jumping
    prototype. We gained additional insight on which parameters to tweak next.
    In spite of the baseline still being faster, the current prototype already
    achieves a significant speedup when compared to the naive approach of simply
    running full chain-sync with all peers.
- Tech debt: on track.
  - We clarified a common source of confusion around VRF tie-breaking and
    cross-era chain selection.

## Workstreams

### Finish the UTxO HD prototype

We continued working on property-tests for the UTxO HD prototype. In particular
we merged the [era-transition tests
PR](https://github.com/input-output-hk/ouroboros-network/pull/4073).

#### Backing store property tests

The [backing store property tests
PR](https://github.com/input-output-hk/ouroboros-network/pull/4081) has been
reviewed. The next steps are:

- Improve error handling and command generation.
- Add coverage testing to check that we are not failing to cover interesting
  test cases.

The [monadic cursor API](https://github.com/input-output-hk/lmdb-simple/pull/1)
went through its first review round. The API is in a relatively stable state.
This PR also unifies the `cborg` and `serialise`-based interfaces to LMDB
operations. The next steps are:

- Write
  [`quickcheck-dynamic`](https://hackage.haskell.org/package/quickcheck-dynamic)
  state-machine tests for this API.
- Adapt the changes in the serialisation interface in the backing store property
  tests. This will involve adding boilerplate code in consensus to make up for
  the removal of the `cborg`-based interface.

## LSM tree implementation

We worked on the [LSM tree
prototype](https://github.com/input-output-hk/ouroboros-network/issues/4121). In
particular, we focused on tuning the LSM tree design to the different workloads
that consensus has (eg syncing, normal node operation, etc).

### Benchmarking the CSJ prototype

Work on improving the chain-sync jumping performance is ongoing. In particular
we compared the performance of different jump intervals, which, somewhat
surprisingly, do not make a significant difference. In particular, we are seeing
periodic "plateaus" where the chain-sync tip does not progress, but they are
much longer for the prototype. Our hypothesis is that this seem to be due to a
combination of the garbage collector (GC) pauses, and the actual time it takes
the non-dynamo chain-sync peers to jump to the tip of the slot of the dynamo
fragment.

In the coming weeks we will try to shorten these plateaus via a combination of
tweaking GC options and less synchronisation in the CSJ governor.

The following plot shows the performance of the chain-sync jumping prototype
using different jumping intervals. It compares the syncing progress by plotting
the slots of adopted blocks against time. The baseline is still faster, however
it is worth noting that the current prototype already achieves a significant
speedup when compared to the naive approach of simply running full chain-sync
with all peers.

![](/images/consensus/2022-11-02-csj-vs-baseline.svg)

The second plot shows the syncing progress sliced to a chosen ~5min interval,
and includes, in addition to the slots of adopted blocks, the slots of the tip
of the ChainSync fragment. This allows us to see how far ahead of the selected
tip the CS dynamo is, i.e. how much room we have for BlockFetch not to get
stalled. It shows periodic behaviour (due to the forecasting limit), and shows
that the CS fragment tip is not progressing for significant periods
("plateaus").

![](/images/consensus/2022-11-02-csj-vs-baseline-sliced.svg)

## Technical debt

We [clarified](https://github.com/input-output-hk/ouroboros-network/pull/4098) a
common source of confusion around VRF tie-breaking and cross-era chain
selection. This PR involved correcting potentially misleading names of
VRF-related functions, and providing context for rhy a particular VRF value is
used for tie-breaking.
