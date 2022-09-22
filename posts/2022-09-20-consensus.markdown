# Executive summary

- We proposed a fix for the performance degradation observed when running
  distributed multi-node benchmarks in the UTxO HD feature branch. We have to
  validate this fix by running said benchmarks. This requires rebasing the
  feature branch on top of `cardano-node@master` which is ongoing.
- We did several rounds of code review on the alternative implementation of
  diff-sequences required by the UTxO HD feature based on the idea of
  anti-diffs. This alternative implementation is close to being merged, and the
  next step is to integrate this to the UTxO HD branch, so that we can run
  ad-hoc replaying and syncing from scratch benchmarks and compare these with
  the baseline. The micro-benchmarks we elaborated for the alternative
  implementation show speedups of up to 4x, so we are optimistic about the
  performance of replaying and syncing from scratch benchmarks, however it is
  important to notice that *due to the nature of UTxO HD* we will still be
  slower than the baseline.
- The final draft of the Genesis implementation specification is ready for
  review.
- We implemented a prototype for the happy path of Genesis' ChainSync Jumping
  (CSJ). The prototype is slower than the baseline, however it is not the latest
  version of the prototype and the jump interval is very small.
- Work on integrating Conway has [stopped][nicks-comment-conway] since
  priorities have changed.

# Workstreams

## UTxO HD

 - Spent quite some time investigating the root cause of the degradation in
   performance observed in the benchmarks. We run the `make forge-stress`
   benchmarks locally in order to debug this behavior.

    - Transaction batching doesn't make a notable difference in the outcome
      (considering we are using the in-memory backend).

    - The mempool batching implementation required asynchronous transaction
      validation which is a violation of the `LocalTxSubmission` protocol
      contract and therefore if we continued on that route, the impact would
      have been quite big.

    - The STM logic we implemented by using a `TMVar` for the mempool internal
      state was buggy and under certain circumstances it seemed to lock.
      Reverting the mempool internal state to be stored in a `TVar` seems to
      solve this problem.

    - The results we get after this change look almost identical to the ones
      from the baseline.

  - [The anti-diff prototype (PR
    #3997)](https://github.com/input-output-hk/ouroboros-network/pull/3997) has
    been reviewed and is close to being merged.

    - A follow-up issue ([issue
      #4010](https://github.com/input-output-hk/ouroboros-network/issues/4010))
      to integrate the anti-diff prototype in the various `consensus` packages
      was created. A first version of the integration exists, and all tests
      pass. A next step is to get some indication of the "real" performance gain
      by profiling `db-analyser` (or `cardano-node`).

## Genesis

 - Final draft of the Genesis implementation specification, now up for review.

 - Local benchmark setup for parameter tuning via the happy path ChainSync
   Jumping (CSJ) prototype ([Issue 3987][issue-3987]).

    - Context: Our Genesis design requires us to check in with a large (~20)
      number of servers periodically while syncing. These servers are offered
      jump requests via the ChainSync protocol (hence the name), which they can
      accept or decline. If a peer declines, the Genesis rule allows us to
      determine whether a node actually has a better chain.

    - The "happy path" is when no peer declines a jump. We want this to have
      close to no overhead compared to status quo, i.e. syncing without Genesis.

    - We implemented a prototype for this happy path, and are now starting to
      test in various configurations (number of peers, latency, bandwidth) to
      tune the performance of ChainSync jumping, i.e. how complicated our logic
      of choosing when to jump needs to be.

    **Example:**

     - Simulated connection: 50 MBit/s, 50ms latency

     - Jump interval: 3000 slots (on the low end, could be increased to up to
       `3k/f`)

     - Red: baseline (1.35.3), one peer in topology file

     - Blue: Preliminary version of our prototype, with 10 peers.

    ![](/images/happy-path-csj-prototype-prelim.svg)

    It is slower by about ~30%, but it is not the latest version of the
    prototype, and the jump interval is very small, making CSJ more of a
    bottleneck.

## Technical debt

- Fix flakiness in ChainDB QSM tests

[issue-3987]: https://github.com/input-output-hk/ouroboros-network/issues/3987
[nicks-comment-conway]: https://github.com/input-output-hk/ouroboros-network/pull/3971#issuecomment-1252524031
