# Executive summary

- With the latest implementation of ChainSync jumping we are closer to the
  baseline performance.
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

# Additional information

## Genesis

