---
title: Consensus Team Update
slug: 2022-10-05-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

During the past two weeks, the consensus team worked on improving the
performance of the ChainSync jumping logic, which is needed for Genesis. We also
rewrote the implementation of the mempool in the UTxO HD prototype which solved
the issues that prevented us from running system level benchmarks. Also on the
UTxO HD front, we have an improved implementation of the sequence-of-differences
(a crucial piece of UTxO HD), and we also elaborated a test sign-off list for
the UTxO HD feature.

## Executive summary

- With the latest implementation of ChainSync jumping we are closer to the
  baseline performance. In particular, the prototype seems to benefit from the
  extra concurrency provided by additional capabilities.
- We rewrote the implementation of the mempool in the UTxO HD prototype. This
  rewrite was required due to performance problems we observed when running the
  [workbench](https://github.com/input-output-hk/cardano-node/blob/master/Makefile#L51).
  These performance problems prevented us from running system level benchmarks.
  The rewrite solved these issues. After the [UTxO-HD: mempool
  rewrite](https://github.com/input-output-hk/ouroboros-network/pull/4049) PR is
  merged, we will contact the Benchmarking team so that they run the system
  level benchmarks.
- The implementation of sequences of differences based on anti-diffs was
  integrated into the UTxO HD prototype. It is pending
  [review](https://github.com/input-output-hk/ouroboros-network/pull/4036) and
  we also need to run replay and syncing benchmarks to confirm that this will
  deliver a performance improvement, as observed in our micro-benchmarks.
- [The UTxO HD prototype
  inspection](https://github.com/input-output-hk/ouroboros-network/issues/3944)
  resulted in a [list of
  tests](https://github.com/input-output-hk/ouroboros-network/issues/4045)
  needed for consensus to consider the UTxO HD prototype as fully tested.

## Additional information

### Genesis

Benchmarking setup: 50MBit/s, 50ms latency

 - Red: baseline
 - Green: Current CSJ prototype, 10 peers, jumps every 3000/f slots.

As ChainSync Jumping involves many concurrent network operations at every jump,
we tried to run the node with 6 instead of the default 2 capabilties.

 - Orange: baseline with 6 capabilities
 - Blue: CSJ prototype with 6 capabilities

This diagram shows the respective syncing progress, starting at Genesis and
continuing a good part into Shelley (with the dashed line indicating the
Byron-to-Shelley transition).

![](/images/happy-path-csj-prototype-bench-1.svg)

Further work includes whether we can tune the prototype to better handle few
capabilities, or to adapt the default number of capabilities (potentially just
while syncing).
