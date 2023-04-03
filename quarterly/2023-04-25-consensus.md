---
title: Consensus Quarterly Update
slug: 2023-04-25-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## Consensus Quarterly Update
## 2023-01 - 2023-03

### Main achievements

#### UTxO HD

- We finished the testing activities for the prototype, which involved adding
  new tests, and fixing and enabling temporarily disabled tests.
- We spent a substantial amount of effort refactoring and cleaning the
  prototype.
- We audited the UTxO HD prototype to make sure it can accommodate the migration
  of other tables (eg stake-keys registration) from memory to disk. The result
  of the audit was positive.
- We ran ad-hoc benchmarks for reading keys and flushing values to disk. No
  unexpected costs found.
- We ran the first system level benchmarks. The performance regressions reported
  were due to an unrealistic snapshotting rate. We need to re-run them again
  after we design a more fine grained locking mechanism.

#### Genesis

- We elaborated a roadmap of the remaining work for Genesis.
- We presented the design to the IOG Researchers and PNSol on February 20. The
  design was well received. We updated the Genesis design with the researcher's
  feedback.
    - We plugged the new DoS vector identified during the aforementioned
      presentation.
- We developed a generator for adversarial leader schedules that satisfy key
  Ouroboros properties, which will be used to test the Genesis design.
    - The generator enables use of smaller Ouroboros parameters, which makes
      extrema more likely and counterxamples easier interpret.
- We wrote up the latest design iteration.
- We continued benchmarking the Chain Sync Jumping prototype. In particular:
    - We debugged the prototype's performance regression, and unmasked the
      actual cause by patching our initial theory (bad queuing behavior)
    - We identified and validated the actual cause (a pathological case in
      BlockFetch tiebreaker).

#### Support

- We created two new tools. One for dumping CBOR encoded blocks to JSON. Ahother
  to serve a local immutable DB.

#### Conway era

- We integrated the Conway era into consensus.

#### Technical debt

- We fixed a bug with followers, which was discovered by property tests.
- We developed a DSL for specifying and running ChainDB test cases.
- We fixed failing tests with iterators.
- We created micro-benchmarks for adding transactions to the mempool.

#### Fostering collaboration

- We released a new technical documentation site for consensus.
- We factored out several packages to external repositories. Some of this work
  originated in the UTxO HD workstream.

### Next steps

#### UTxO HD

- We aim at producing a UTxO-HD enabled node that meets the performance
  requirements of all the stakeholders, and that passes the system-level tests.
  Successfully achieving this means we will have a version ready to be tested on
  a production environment (testnet and mainnet).
  - Risks:
    - System-level tests not passing.
    - System-level benchmarks showing poor performance.

#### Support

- Design Consensus side of hardfork-enactment in the Voltaire phase
  ([#4180](https://github.com/input-output-hk/ouroboros-network/issues/4180)).
- TODO Anything we need to plan for new crypto integration?

#### Tech debt

- Check absence of thunks during nightly CI tests
  ([#3001](https://github.com/input-output-hk/ouroboros-network/issues/3001) and
  [#4006](https://github.com/input-output-hk/ouroboros-network/issues/4006))
- Keep backwards compatibility with previous ledger snapshot versions
  [#4434](https://github.com/input-output-hk/ouroboros-network/issues/4434).
- Estimate the number of file descriptors Consensus needs
  [#20](https://github.com/input-output-hk/ouroboros-consensus/issues/20).

#### Fostering collaboration

- Onboard a new team member.
