---
title: Consensus Team Update
slug: 2022-10-18-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---


# High-level summary

During the past two weeks, the consensus team worked on adding property test for
different aspects of the UTxO HD prototype: era transitions, mempool, and
backing store. Thanks to these tests we were able to uncover a bug in the
prototype. On the Genesis front, we benchmarked a different version of the
ChainSync jumping prototype to try to improve its performance, but this did not
result in any noticeable speedup.

# High-level status report

- Finish the UTxO HD prototype: on track.
  - We focused on increasing test coverage for the UTxO-HD prototype:
    - We started implementing Cadano-eras transition property-tests.
    - We started implementing state-machine property-tests for the mempool.
    - We merged the mempool rewrite.
    - We started working on state-machine tests for the backing store. This
      uncovered a bug in the range-read implementation of the LMDB backing
      store.
- Genesis: on track.
  - We benchmarked a version of the Genesis ChainSync Jumping prototype that
    spreads out the ChainSync updates over a longer period of time. This did not
    result in any noticeable speedup.
  - We investigated the overhead introduced by non-ChainSync components, but no
    conclusions could be drawn from the benchmarks we ran.

# Workstreams

## Finish the UTxO HD prototype

During the past two weeks, we focused on increasing test coverage for the
UTxO-HD prototype. We also merged the [mempool
rewrite](https://github.com/input-output-hk/ouroboros-network/pull/4049).

### Era transition property tests

We started implementing [Cardano era transition property
tests](https://github.com/input-output-hk/ouroboros-network/issues/4043),
which are needed for making sure that the ledger tables get updated in the
right way when we move from one era to the next. There are at the moment two
important transitions.
- Byron to Shelley: where all the UTxO is transferred from in-memory Byron
  state (which has no tables) to the ledger tables of the Shelley state.
- Shelley to Allegra: where the AVVM addresses must be deleted.

We have tests for the Byron to Shelley transitions. We are working on adding
the remaining ones.

### Mempool state-machine tests

We started implementing [state-machine property tests for the
mempool](https://github.com/input-output-hk/ouroboros-network/issues/4044).
The mempool is currently tested via pure property tests, and use a ledger
state without tables. With the introduction of UTxO HD, testing the concurrent
behavior of the mempool became of crucial importance (eg now we have to
acquire locks to flush the backing store). In addition, we need to test a
ledger state with tables. These needs led to the creation of a new set of
property tests. In particular we aim to run parallel state-machine tests that
exercise the mempool in a way similar to how the node would make use of it.

### Backing store property tests

We started working on [state-machine tests for the backing
store](https://github.com/input-output-hk/ouroboros-network/pull/4081) that UTxO
HD uses. The property tests uncovered errors in the range-reads implementation
of the LMDB backing store. To facilitate fixing this bug, we made
[changes](https://github.com/input-output-hk/lmdb-simple/pull/1) to the Haskell
LMDB bindings.

## Benchmarking the CSJ prototype

Prompted by previous benchmarks showing significant improvements in sync time by
using more capabilities, we implemented a way to spread out the ChainSync
updates over a larger period instead of firing them all at the same time. This
didn't result in a noticeable speedup.

We also benchmarked the prototype with CSJ disabled (such that just the dynamo
peer is running ChainSync, but e.g. BlockFetch still sees all peers) to rule
out/confirm overhead by non-ChainSync (mainly BlockFetch) related components.
This results in era-specific behavior (speed is like the prototype in Byron, but
like the baseline in Shelley). This deserves a closer look in the future.

This diagram shows the respective syncing progress, starting at Genesis and
continuing a good part into Shelley (with the dashed line indicating the
Byron-to-Shelley transition).

 - Red: baseline
 - Green: CSJ prototype, 10 peers, jumps every 3000/f slots, jumps in clumps.
 - Blue: like Green, jumps are spread out.
 - Orange: variant with no jumping, to measure unrelated overhead.

![](/images/happy-path-csj-prototype-bench-2.svg)
