# Executive summary 

## Conway

 - Integration PR of the minimal Conway era ([Issue #3963][issue-3962], [PR #3971][pull-3971]).
 - Discussions with Ledger revealed possible sources of confusion about which data should be changed in the Conway era ([Issue #3976][issue-3976]).

## UTxO HD 

- [Issue #3954](https://github.com/input-output-hk/ouroboros-network/issues/3954), [branch](https://github.com/input-output-hk/ouroboros-network/tree/jdral/3954-backingstore-property-tests): The functionality of a backing store, which is the interface to the on-disk part of ledger state in UTxO-HD, is tested at a high level through the `OnDisk` tests. However, some functionalities remain untested, e.g., reads of ranges of keys. As such, we have implemented `quickcheck-state-machine` tests that exercise backing stores directly. The tests are reusable for different backing store implementations because the tests are implementation-agnostic: Any backing store that conforms to the backing store interface can be plugged into the tests. Work is still ongoing to label/monitor the tests, such that we can verify that interesting cases are being tested. Furthermore, a possible bug has been identified in the LMDB backing store with respect to range reads, though the bug has not been resolved yet.
- [Issue #3946](https://github.com/input-output-hk/ouroboros-network/issues/3946), [branch](https://github.com/input-output-hk/ouroboros-network/tree/jdral/CAD-4199-prototype-anti-diffs), [PR #3882](https://github.com/input-output-hk/ouroboros-network/pull/3882): The "anti-diff" prototype proposes an alternative approach to keeping track of sequences (more specifically, `FingerTree`s) of diffs. These diff sequences are a component of the in-memory parts of the ledger state in UTxO-HD. Since the consensus code often requires the cumulative diff of a sequence of diffs, the current implementation "caches" cumulative diffs of each subtree in the diff sequence. This caching allows relatively fast reconstruction of the total cumulative diff, but this caching proved to incur a non-negligible cost: when we manipulate diff sequences through splits and appends, we force re-computing a logarithmic number of caches. This is problematic, since we often split and append in consensus: we split when we flush diffs to a backing store or when we roll back blocks, and we append when pushing blocks. The new approach should reduce the overhead of this caching.

  Preliminary results were obtained by micro-benchmarking the prototype. In these micro-benchmarks, we first generate a sequence of commands (`Forward`, `Push`, `Flush`, or `Rollback`) through a simulation, after which we measure the performance of applying the commands to a diff sequence. Moreover, we compare the performance for the two implementations: the "legacy" approach, and the anti-diff approach.
  
  The preliminary results were positive, but caution was advised because of doubts about the benchmark's configuration. After a discussion with Duncan and the consensus team about this configuration (e.g., number of commands generated, choice of the security parameter `k`), the new benchmarks should be closer to the realistic setting. Consequently, the benchmarks show a close to `5x` improvement of the anti-diff approach over the "legacy" approach when we do not apply rollbacks. The benchmarks show a close to `1.66x` improvement when we do apply rollbacks. Note that these improvement factors are subject to noise and randomness. In particular: large rollbacks can have a large influence in performance.

  ```bash
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

 - Draft of the specification of the Genesis implementation and the ChainSync Jumping optimization. In particular, this includes a proof sketch that the latter preserves liveness and safety in all cases ([Issue 3964][issue-3964]).
 - Continued work on the "happy path" ChainSync Jumping prototype ([Issue 3960][issue-3960]).

## Other

 - Preliminary work to (re)enable nightly CI tests: PR adding new options to control the number of QuickCheck property tests to run ([PR #3947][pull-3947]).
