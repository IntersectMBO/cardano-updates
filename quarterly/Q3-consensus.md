---
title: Consensus Quarterly Update
slug: Q3-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## Consensus Quarterly Update
## 2023-04 -- 2023-06

### Main achievements

#### UTxO HD

- We finished a major prototype refactoring, which includes:
    - A better and finer grained DB lock mechanism.
    - Elimination of race conditions.
    - Support for configuring batch query size and flushing rate. This is crucial to allow node users to tweak performance.
    - Architectural simplifications and performance improvements.
- We implemented a new package to support db-sync integration with UTxO-HD.
- We ran another set of ad-hoc benchmarks:
    - We uncovered a performance regression on the Network component when using `GHC-9.2/9.4`.
    - The synchronization and replay speed are as expected.
    - However, we uncovered memory consumption issues (see figure below).
        - The in-memory backend is consuming more memory than the baseline.
        - The LMDB backend shows an unexpected memory usage peak.
        - Investigation on these issues is ongoing.
- We integrated the latest changes in `main` branch.
    - This required a re-design of the mempool to include the mempool fairness
      improvement.

![](/images/consensus/2023-Q2-utxo-hd-sync-ad-hoc-benchmarks.png)

#### Genesis

- How did we do against ..?:
    - https://github.com/input-output-hk/ouroboros-consensus/issues/33
    - https://github.com/input-output-hk/ouroboros-consensus/issues/32
    - https://github.com/input-output-hk/ouroboros-consensus/issues/31

- Genesis design document completed?
   - Feedback genesis document (researchers + Networking team)
   - Any other delta worth mentioning?
       - Eg simplifications in correctness argument for historical genesis windows.
   - Expected performance impact?
   - No need for checkpointing `Byron` and `TPraos`.
   - Any important remaining questions?
   - Any improvements worth mentioning?
       - Genesis selection rule.
       - Candidate rules.
       - Root peers usage.
       - Caught-up detection?

- Chain generators?

- Chain sync jumping performance?

- Genesis attack vector calculations?

#### Support
- We performed an analysis on number of file descriptors used by Consensus, this
  information can be used by the node operators to check if the number of file
  descriptors they want to support are enough, thus improving the user (eg node
  operator) experience.
- We implemented a mempool fairness improvement, by which transactions are
  guaranteed to be processed irrespective of their size.

#### Technical debt

- We fixed a bug in followers logic, which was discovered by our `QuickCheck`
property tests.
- We created an [immutable DB
  server](https://github.com/input-output-hk/ouroboros-consensus/pull/68). This tool allows to serve blocks from the immutable DB to a node that connects to it. This has a remarkable value for testing and benchmarking purposes. For instance, by using this component, we can benchmark the performance of different aspects of Consensus, such as syncing from scratch, without adding Network interference in the performance results.
- We created a [`db-truncater`](https://github.com/input-output-hk/ouroboros-consensus/pull/70) tool, which can be used in disaster recovery and benchmarking scenarios.
- We created a [benchmarks comparison tool](https://github.com/input-output-hk/ouroboros-consensus/pull/161) that we plan on using for comparing the performance of two Consensus releases. This will allow us to catch performance regressions early on in the process, before they make it to the node (and show in the system level benchmark tests), thus greatly saving development costs. As an example, the graph below shows the performance *improvements* introduced by the Ledger team in version `0.6.0.0` of Consensus wrt version `0.5.0.0`.

![](/images/consensus/2023-Q2-beacon-graph.png)

#### Fostering collaboration

- We released `fs-sim` as open-source repository. This lowers the barrier to entry for external contributors, which will indirectly benefit the Cardano project.
- We migrated the consensus code to a [new repository](https://github.com/input-output-hk/ouroboros-consensus), splitting
it from the `ouroboros-network` repository. This will save development effort for both the Network and the Consensus teams, since there will be less interference (for instance when making releases).
- We made several improvements to our release processes, which will translate in time savings. As an example, we went from 16 to 4 packages, which makes the release process simpler and smother. Our release process now makes it easier to align versions and make releases (both for us and for our downstream users).
- We added an explanation of the hardfork-combinator forecast horizon, that will benefit not only our team, but future external contributors.

### Next steps

#### UTxO HD

- We will [get UTxO-HD ready for handover](https://github.com/input-output-hk/ouroboros-consensus/issues/28).

#### Genesis
