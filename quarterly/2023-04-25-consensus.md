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
  of additional data from memory to disk. The result of the audit was positive.
- We ran ad-hoc benchmarks for reading keys and flushing values to disk. No
  unexpected costs found.
- We ran the first system level benchmarks. The performance regressions reported
  were due to an unrealistic snapshotting rate. We need to re-run them again
  AFTER ... CONDITION?
  
TODO: we might want to show a plot and-or table with latest ad-hoc benchmarks
(https://github.com/input-output-hk/ouroboros-network/pull/4295)

#### Genesis

- We elaborated a roadmap of the remaining work for Genesis.
- We audited the Genesis design with researchers. The design was well received. We
  updated the Genesis design with the researcher's feedback.
- We developed quick check property tests for validating the design. 
- We continued benchmarking CSJ, we found RESULTS? 

#### Support

- We created two new tools. One for dumping CBOR encoded blocks to JSON. Ahother
  to serve a local immutable DB.

#### Conway era

- We integrated the Conway era into consensus.

#### Technical debt

- We fixed a bug with followers, which was discovered by property tests. 
- We developed a DSL for specifying and running ChainDB test cases.
- We fixed failing tests with iterators.
- We created miro-benchmarks for adding transactions to the mempool.

#### Fostering collaboration 

- We released a new technical documentation site for consensus.
- We factored out several packages to external repositories. Some of this work
  originated in the UTxO HD workstream.

### Next steps

#### Fostering collaboration 

- Onboard a new team member.
