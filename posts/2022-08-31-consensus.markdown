# Executive summary 

- We did most of the heavy lifting required to integrate the Conway era.
- We have property tests for the UTxO HD backing store API implementations. A
  possible bug was identified. Work is ongoing to make sure the property-tests
  cover all the relevant cases.
- We implemented and benchmarked the "anti-diff" prototype to speed up the UTxO
  HD functionality. Preliminary results show a `5x` speedup when we do not
  perform rollbacks, and a `1.5x` speedup when rollbacks are applied during the
  benchmarks. The `5x` speed up is particularly interesting since during replay
  (which is what will happen when Daedalus users start using UTxO HD) rollbacks
  do not take place. We are investigating additional performance improvements.
  The "anti-diff" prototype and benchmarks are still pending code review.
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
  applying the commands to a diff sequence. Moreover, we compare the performance
  for the two implementations: the "legacy" approach, and the anti-diff
  approach.
  
  The preliminary results are positive, but we need to revisiit the benchmark's
  configuration. After a discussion with Duncan and the consensus team about
  this configuration (e.g., number of commands generated, choice of the security
  parameter `k`), the new benchmarks should be closer to the realistic setting.
  Consequently, the benchmarks show a close to `5x` improvement of the anti-diff
  approach over the "legacy" approach when we do not apply rollbacks. The
  benchmarks show a close to `1.5x` improvement when we do apply rollbacks.
  Note that these improvement factors are subject to noise and randomness. In
  particular: large rollbacks can have a large influence in performance.

  ```text
  All
    Ouroboros
      Consensus
        Storage
          LedgerDB
            HD
              DiffSeq/Diff operations
                Configuration: no rollbacks
                  Comparative performance analysis
                    AntiDiff
                      Benchmark interpret:                  OK (12.44s)
                        3.963 s ± 333 ms, 0.21x
                      Sanity check:                         OK (4.84s)
                        +++ OK, passed 1 test.
                    LegacyDiff
                      Benchmark interpret:                  OK (57.32s)
                        19.015 s ± 816 ms
                      Sanity check:                         OK (18.67s)
                        +++ OK, passed 1 test.
                    Interpretations match:                  OK (22.45s)
                      +++ OK, passed 1 test.
                Configuration: with rollbacks
                  Comparative performance analysis
                    AntiDiff
                      Benchmark interpret:                  OK (3.58s)
                        1.060 s ±  85 ms, 0.56x
                      Sanity check:                         OK (1.17s)
                        +++ OK, passed 1 test.
                    LegacyDiff
                      Benchmark interpret:                  OK (5.86s)
                        1.889 s ±  67 ms
                      Sanity check:                         OK (2.02s)
                        +++ OK, passed 1 test.
                    Interpretations match:                  OK (3.16s)
                      +++ OK, passed 1 test.
                interpret AntiDiff == interpret LegacyDiff: OK (1.25s)
                  +++ OK, passed 100 tests.

  All 11 tests passed (525.94s)
  ```

  The specific configuration that was used to obtain the results listed above:
  * Number of commands generated: `20_000`
  * Security parameter `k`: `2160`
  * Number of initial backing values: `100`
  * Number of key-value pairs deleted by a push: `50`
  * Number of key-value pairs inserted by a push: `50`
  * Number of key-value pairs forwarded by a forward: `50`
  * Probability of a large (`.95 * k`) rollback: `0.05`
  * Probability of a small (`.05 * k`) rollback: `0.95`
  * Order of commands: 
    * An equal number of forward and pushes.
    * `1` flush every `10` pushes.
    * `1` rollback every `100` pushes

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
