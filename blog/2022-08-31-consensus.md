---
title: Consensus Team Update
slug: 2022-08-31-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

# Executive summary

- We did most of the heavy lifting required to integrate the Conway era.
- We have property tests for the UTxO HD backing store API implementations. A
  possible bug was identified. Work is ongoing to make sure the property-tests
  cover all the relevant cases.
- We implemented and benchmarked the "anti-diff" prototype to speed up the UTxO
  HD functionality. Results show a rough speedup of `4x` to `5.5x` across
  several scenarios. Note that: ["Data reported by `tasty-bench` is only of
  indicative and comparative significance."](https://hackage.haskell.org/package/tasty-bench-0.3.2/docs/Test-Tasty-Bench.html).
  We are investigating additional performance improvements. The "anti-diff"
  prototype and benchmarks are still pending code review.
- We elaborated a draft specification for the Genesis implementation and
  `ChainSync` jumping optimization.

# Workstreams

## Conway

 - Integration PR of the minimal Conway era ([Issue #3963][issue-3962], [PR
   #3971][pull-3971]).
 - Discussions with Ledger revealed possible sources of confusion about which
   data should be changed in the Conway era. As a result, a new technical debt
   issue was raised, which does not block the integration of the Conway era
   ([Issue #3976][issue-3976]).

## UTxO HD

- [Issue #3954][issue-3954], [branch][branch-3954]: The functionality of a
  backing store, which is the interface to the on-disk part of ledger state in
  UTxO-HD, is tested at a high level through the `OnDisk` tests. However, some
  functionalities remain untested, e.g., reads of ranges of keys. As such, we
  have implemented `quickcheck-state-machine` tests that exercise backing stores
  directly. The tests are reusable for different backing store implementations
  because the tests are implementation-agnostic: Any backing store that conforms
  to the backing store interface can be plugged into the tests. Work is still
  ongoing to label/monitor the tests, such that we can verify that interesting
  cases are being tested. Furthermore, a possible bug has been identified in the
  LMDB backing store with respect to range reads, though the bug has not been
  resolved yet.
- [Issue #3946][issue-3946], [branch][branch-4199], [PR #3882][pull-3882]: The
  "anti-diff" prototype proposes an alternative approach to keeping track of
  sequences (more specifically, `FingerTree`s) of diffs. These diff sequences
  are a component of the in-memory parts of the ledger state in UTxO-HD. Since
  the consensus code often requires the cumulative diff of a sequence of diffs,
  the current implementation "caches" cumulative diffs of each subtree in the
  diff sequence. This caching allows relatively fast reconstruction of the total
  cumulative diff, but this caching proved to incur a non-negligible cost: when
  we manipulate diff sequences through splits and appends, we force re-computing
  a logarithmic number of caches. This is problematic, since we often split and
  append in consensus: we split when we flush diffs to a backing store or when
  we roll back blocks, and we append when pushing blocks. The new approach
  should reduce the overhead of this caching.

  We implemented micro-benchmarks for the "anti-diff" prototype: we
  first generate a sequence of commands (`Forward`, `Push`, `Flush`, or
  `Rollback`) through a simulation, after which we measure the performance of
  applying the commands to a diff sequence. In this context, `Forward` means
  forwarding of values through a diff, whereas `Rollback` means switching to
  a different fork by rolling back diffs/blocks and pushing new ones.
  Moreover, we compare the performance for the two implementations: the
  "legacy" approach, and the anti-diff approach.

  Some preliminary results were positive, but we needed to revisit the
  benchmark's configuration to obtain more definitive results. After a
  discussion with @dcoutts and the consensus team about this configuration
  (e.g., number of commands generated, choice of the security parameter `k`),
  the benchmarks should now be closer to the realistic setting. The following
  configuration specifies the default configuration that is used in the
  benchmarking code:
  * Number of commands generated: `10_000`
  * Security parameter `k`: `2160`
  * Number of initial backing values: `100`
  * Number of key-value pairs deleted by a push: `50`
  * Number of key-value pairs inserted by a push: `50`
  * Number of key-value pairs forwarded by a forward: `50`
  * Probability of a large (in the range `[1000, 2000]`) rollback: `0.05`
  * Probability of a small (in the range `[1, 10]`) rollback: `0.95`
  * Order of commands:
    * An equal number of forward and pushes.
    * `1` flush every `10` pushes.
    * `1` rollback every `100` pushes

  Moreover, we run four benchmark scenarios:
  * Default configuration
  * Without rollbacks
  * With only small rollbacks
  * Without rollbacks, larger flushes (`1` flush every `100` pushes)

  ### How to read results

  Note: this section uses documentation from the
  [tasty-bench](https://hackage.haskell.org/package/tasty-bench) package to
  explain how to read the results of running our benchmarks.

  Running a benchmark scenario gives us the following (curated) output:
  ```text
  ...
  AntiDiff:                               OK (18.27s)
    2.527 s ±  47 ms, 2.1 GB allocated, 544 MB copied, 2.2 GB peak memory, 0.23x
  LegacyDiff:                             OK (32.73s)
    10.829 s ± 148 ms, 6.8 GB allocated, 2.3 GB copied, 2.2 GB peak memory
  ...
  ```

  The output says that the first benchmark, which exercises the anti-diff
  prototype, was repeatedly executed for `18.27` seconds (wall-clock time),
  its predicted mean CPU time was `2.527` seconds and means of individual
  samples do not often diverge from it further than `± 47` milliseconds
  (double standard deviation). We also configure the RTS to collect GC
  statistics, which enables `tasty-bench` to estimate and report memory usage.
  This data is reported as per `RTSStats` fields: `allocated_bytes`,
  `copied_bytes` and `max_mem_in_use_bytes`. So, the output of the first
  benchmark says that a total of `2.1 GB` of memory was allocated, that a
  total of `544 MB` of memory were copied, and that the peak memory in usage
  was `2.2 GB`. We read the output for the second benchmark in the same way.

  Furthermore, the benchmark compares the mean CPU times for
  both the anti-diff and legacy approaches: In this case, the mean CPU time
  for the anti-diff approach is `~0.23x` the mean CPU time for the legacy
  approach. Conversely, the mean CPU time for the legacy approach is
  `1 / 0.23 ~= 4.35x` the mean CPU time for the anti-diff approach. We will
  call `0.23x` the *improvement factor*. We will call `4.35x` the *speedup*.

  Note that these improvement factors (and reported results) are subject to
  noise, randomness, the specific configuration parameters, and the whims
  of statistics. Data reported by `tasty-bench` is only of indicative and
  comparative significance.

  ### Results

  For each of the 4 scenarios, we list the results of running the anti-diff and
  legacy approaches 5 times. We run the benchmarks 5 times to get an indication
  of whether the results are similar across multiple runs. Furthermore, we
  calculate the accompanying *ranges* (if applicable) of improvement factors and
  speedups.

  Note also the decrease in total bytes allocated and total bytes copied for
  the anti-diff approach compared to the legacy approach.

  #### Default configuration

  |Name|Mean CPU time|2*Stdev (CPU time)|Total bytes allocated|Total bytes copied|Peak memory|
  |-|-|-|-|-|-|
  |Run 1: AntiDiff|2.533 s (0.23x)|4.7 ms|2.1 GB|557 MB|2.4 GB|
  |Run 1: LegacyDiff|10.792 s|162 ms|6.8 GB|2.3 GB|2.4 GB|
  |Run 2: AntiDiff|2.508 s (0.23x)|245 ms|2.1 GB|515 MB|2.2 GB|
  |Run 2: LegacyDiff|10.850 s| 30 ms|6.9 GB|2.3 GB|2.2 GB|
  |Run 3: AntiDiff|2.562 s (0.23x)|5.0 ms|2.1 GB|552 MB|2.2 GB|
  |Run 3: LegacyDiff|10.993 s|149 ms|6.9 GB|2.3 GB|2.2 GB|
  |Run 4: AntiDiff|2.168 s (0.22x)|5.3 ms|1.8 GB|434 MB|2.0 GB|
  |Run 4: LegacyDiff|9.976 s| 39 ms|6.3 GB|2.0 GB|2.0 GB|
  |Run 5: AntiDiff|2.527 s (0.23x)| 47 ms|2.1 GB|544 MB|2.2 GB|
  |Run 5: LegacyDiff|10.829 s|148 ms|6.8 GB|2.3 GB|2.2 GB|

  * Improvement factor: `[0.22, 0.23]`
  * Speedup : `[1 / 0.23 ~= 4.35, 1 / 0.22 ~= 4.55]`

  #### No rollbacks

  |Name|Mean CPU time|2*Stdev (CPU time)|Total bytes allocated|Total bytes copied|Peak memory|
  |-|-|-|-|-|-|
  |Run 1: AntiDiff|1.638 s (0.19x)| 36 ms|1.4 GB|181 MB|2.4 GB|
  |Run 1: LegacyDiff|8.656 s|207 ms|5.7 GB|1.5 GB|2.4 GB|
  |Run 2: AntiDiff|1.638 s (0.19x)| 75 ms|1.4 GB|181 MB|2.2 GB|
  |Run 2: LegacyDiff|8.654 s|322 ms|5.7 GB|1.5 GB|2.2 GB|
  |Run 3: AntiDiff|1.663 s (0.19x)| 74 ms|1.4 GB|181 MB|2.2 GB|
  |Run 3: LegacyDiff|8.799 s|216 ms|5.7 GB|1.5 GB|2.2 GB|
  |Run 4: AntiDiff|1.645 s (0.19x)| 51 ms|1.4 GB|181 MB|2.0 GB|
  |Run 4: LegacyDiff|8.732 s|261 ms|5.7 GB|1.5 GB|2.0 GB|
  |Run 5: AntiDiff|1.639 s (0.19x)| 19 ms|1.4 GB|181 MB|2.2 GB|
  |Run 5: LegacyDiff|8.653 s|234 ms|5.7 GB|1.5 GB|2.2 GB|

  * Improvement factor: `0.19`
  * Speedup : `1 / 0.19 ~= 5.25`


  #### Only small rollbacks

  |Name|Mean CPU time|2*Stdev (CPU time)|Total bytes allocated|Total bytes copied|Peak memory|
  |-|-|-|-|-|-|
  |Run 1: AntiDiff|1.833 s (0.18x)| 36 ms|1.5 GB|185 MB|2.4 GB|
  |Run 1: LegacyDiff|10.362 s|867 ms|5.8 GB|1.6 GB|2.4 GB|
  |Run 2: AntiDiff|1.696 s (0.19x)| 30 ms|1.5 GB|185 MB|2.2 GB|
  |Run 2: LegacyDiff|8.822 s|106 ms|5.8 GB|1.5 GB|2.2 GB|
  |Run 3: AntiDiff|1.702 s (0.19x)| 44 ms|1.5 GB|186 MB|2.2 GB|
  |Run 3: LegacyDiff|8.906 s|147 ms|5.8 GB|1.5 GB|2.2 GB|
  |Run 4: AntiDiff|1.701 s (0.19x)| 47 ms|1.5 GB|185 MB|2.0 GB|
  |Run 4: LegacyDiff|8.949 s|197 ms|5.8 GB|1.5 GB|2.0 GB|
  |Run 5: AntiDiff|1.677 s (0.19x)| 55 ms|1.5 GB|186 MB|2.2 GB|
  |Run 5: LegacyDiff|8.856 s|177 ms|5.8 GB|1.5 GB|2.2 GB|

  * Improvement factor: `[0.18, 0.19]`
  * Speedup : `[1 / 0.19 ~= 5.25, 1 / 0.18 ~= 5.55]`

  #### No rollbacks, larger flushes (every 100 pushes)

  |Name|Mean CPU time|2*Stdev (CPU time)|Total bytes allocated|Total bytes copied|Peak memory|
  |-|-|-|-|-|-|
  |Run 1: AntiDiff|1.643 s (0.25x)| 21 ms|1.5 GB|196 MB|2.4 GB|
  |Run 1: LegacyDiff|6.591 s|351 ms|4.0 GB|1.4 GB|2.4 GB|
  |Run 2: AntiDiff|1.616 s (0.25x)| 47 ms|1.5 GB|196 MB|2.2 GB|
  |Run 2: LegacyDiff|6.520 s|232 ms|4.0 GB|1.4 GB|2.2 GB|
  |Run 3: AntiDiff|1.640 s (0.25x)| 34 ms|1.5 GB|196 MB|2.2 GB|
  |Run 3: LegacyDiff|6.540 s|150 ms|4.0 GB|1.4 GB|2.2 GB|
  |Run 4: AntiDiff|1.635 s (0.25x)| 76 ms|1.5 GB|196 MB|2.0 GB|
  |Run 4: LegacyDiff|6.589 s|131 ms|4.0 GB|1.4 GB|2.0 GB|
  |Run 5: AntiDiff|1.628 s (0.25x)| 19 ms|1.5 GB|196 MB|2.2 GB|
  |Run 5: LegacyDiff|6.490 s|5.9 ms|4.0 GB|1.4 GB|2.2 GB|

  * Improvement factor: `0.25`
  * Speedup : `1 / 0.25 ~= 4`

## Genesis

 - We elaborated a draft of the specification of the Genesis implementation and
   the ChainSync Jumping optimization. In particular, this includes a proof
   sketch that the latter preserves liveness and safety in all cases ([Issue
   3964][issue-3964]).
      - @nfrisby's main realization during this sprint was that he had been
        focusing so far on the case where the selected chain is an extension of
        the intersection of our peers' ChainSync candidates.
      - This is the main case, ie an "absorbing" state, but it's not the only
        case.
      - The new proof sketch begins by case splitting on that predicate, and
        that made the sketch quite a bit easier to follow.
 - We continued working on the "happy path" `ChainSync` Jumping prototype ([Issue
   3960][issue-3960]).

## Technical debt

 - We started working on the issues required to re-enable nightly CI runs..
   Nightly CI runs have far more lax time constraints, which gives the option to
   run significantly more property tests than in our regular CI. To this end, we
   merged a PR to easily adapt the number of tests globally ([PR
   #3947][pull-3947]).

[issue-3954]: https://github.com/input-output-hk/ouroboros-network/issues/3954
[branch-3954]: https://github.com/input-output-hk/ouroboros-network/tree/jdral/3954-backingstore-property-tests
[issue-3946]: https://github.com/input-output-hk/ouroboros-network/issues/3946
[branch-4199]: https://github.com/input-output-hk/ouroboros-network/tree/jdral/CAD-4199-prototype-anti-diffs
[pull-3882]: https://github.com/input-output-hk/ouroboros-network/pull/3882
[pull-3947]: https://github.com/input-output-hk/ouroboros-network/pull/3947
[issue-3960]: https://github.com/input-output-hk/ouroboros-network/issues/3960
[issue-3962]: https://github.com/input-output-hk/ouroboros-network/issues/3962
[issue-3964]: https://github.com/input-output-hk/ouroboros-network/issues/3964
[pull-3971]: https://github.com/input-output-hk/ouroboros-network/pull/3971
[issue-3976]: https://github.com/input-output-hk/ouroboros-network/issues/3976
