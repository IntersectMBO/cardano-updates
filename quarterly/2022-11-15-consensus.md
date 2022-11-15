---
title: Consensus Quarterly Update
slug: 2022-11-15-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## Consensus Quarterly Update
## 2022-09 - 2022-11

### Main achievements

#### UTxO HD

- As a consequence of the errors observed when running distributed mempool
  benchmarks, we re-designed the UTxO HD mempool integration, which fixed these
  errors and lead to a simpler and more maintainable design.

- We focused on increasing test coverage for the UTxO-HD prototype. In
  particular, we added property tests for:
  - Backing store (work ongoing)
  - Era transitions

- The property tests we added uncovered several bugs, which is a great result
  given the exponential increase in the cost of finding bugs as they are closer
  to deployment.

- One of the errors found by our tests required us to work on improvements in
  the Haskell bindings for LMDB. This work is ongoing.

- We started working on the mempool property tests that will exercise the new
  code paths that UTxO HD introduced.

- We developed, benchmarked and tested an implementation of sequences of
  differences based on "anti-diffs". Performance results of diff sequence
  operations show that we achieved a speedup of about `4x` across several
  scenarios. Note: this speedup is taking into account diff sequence operations
  only, so the consensus-wide speedup is less than `4x`.

- We integrated the "anti-diff" prototype into the UTxO HD feature branch.

#### Genesis

- We wrote a simulator that demonstrates soundness of an abstract implementation
  of the new chain selection rule.
- We elaborated a draft specification for the Genesis implementation (currently
  awaiting feedback from other architects).
- We elaborated a draft specification for the ChainSync Jumping optimization. In
  particular, this includes a proof sketch that the latter preserves liveness
  and safety in all cases.
- With the Networking team, we co-designed the eclipse avoidance mechanism,
  specifically its coherence with the Genesis implementation plan's security
  and its dependence on the new ChainSync Jumping optimization.
- We implemented a prototype for ChainSync Jumping. Initial benchmarks showed a
  performance degradation wrt the baseline. Our optimization attempts so far
  have brought the performance closer to the baseline, but not yet to parity.

#### Conway era

- We did most of the heavy lifting required to integrate the Conway era into the
  Consensus layer.

#### Technical debt

- We started working on enabling CI nightly tests, which revealed several test
  failures due to thunks being found it data structures used by the ledger and
  consensus. We made a lot of progress fixing those thunk errors, but some
  errors still remain.

- We elaborated a `db-analyser` benchmark for the ledger operations. This led us
  to the identification of high processing time at epoch boundaries, and we
  could not observe any performance degradation that can be attributed to era
  changes.

- We fixed a source of flakiness in the ChainDB QSM test.

- We clarified a common source of confusion around VRF tie-breaking and
  cross-era chain selection.

- We fixed a bug in the maximum-allowed ledger major protocol version.

#### Fostering collaboration

- We spent time making `cardano-updates` the central source of information for
  the core teams stakeholders.
- We went through the Galois gap analysis and extracted actionable points to
  take on next.
- Bart and Yogesh continued with their onboarding and stated making substantial
  contributions to consensus.

### Next steps

#### UTxO HD

- Finish the mempool property tests.
- Benchmark the latest version of the prototype.
- Elaborate a document that describes new integration test scenarios and pass it
  to the SDET team.
- Bring query UTxO by address command performance on par with the baseline
  version.

#### Genesis

- Receive and incorporate Duncan's feedback on the first draft specification for
  the Genesis implementation.
- Begin prototyping the first genesis implementation, unless the first draft
  needs major changes.
- Draft a second revision of the Genesis report.
- Review the second revision with a wider audience, which includes at least
  Alexander Russell. That feedback will drive a third and hopefully final
  revision.
- Investigate how to mitigate the ~30% slowdown we have observed so far in the
  ChainSync jumping prototype, and try to mitigate it. In particular, we might
  need to optimize the existing BlockFetch logic.

#### Tech debt

- Enabling nightly CI tests.

#### Fostering collaboration

- Merge the tutorial document Galois wrote; requires CI integration.
- Come up with our own documentation improvements, many of which were suggested
  in the Galois gap analysis.
- Try to hire a new team member.

