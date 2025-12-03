---
title: System Test Team Update
slug: 2025-12-03-system-test
authors: mkoura
tags: [system-test]
hide_table_of_contents: false
---

## High-level summary

* **Release testing**: Node 10.5.2, 10.5.3, 10.6.0, and 10.6.1.
* **Development**: Ongoing testing framework improvements.
* **Maintenance**: Analysis and fixes for nightly job failures.

## Low-level overview

### Release testing

We tested the 10.5 point releases. These contained only bug fixes, so previous test coverage largely applied. We focused on regression testing on local testnets and found no issues.

We also tested the 10.6.0 and 10.6.1 releases and produced a [test report](https://tests.cardano.intersectmbo.org/test_results/node/tag_10_6_1.html). During testing we found and reported two issues:

* **BUG** – `cardano-cli` queries hang indefinitely with the V1LMDB backend: [issue #1787](https://github.com/IntersectMBO/ouroboros-consensus/issues/1787)
* **BUG** – `ObsoleteNode` and no blocks forged on PV11: [issue #6382](https://github.com/IntersectMBO/cardano-node/issues/6382)

Our Node build test also uncovered an issue in the build documentation, and we submitted a [fix PR](https://github.com/cardano-foundation/developer-portal/pull/1685).

### Development

Over the past two weeks, we enabled testing for Node 10.6. We updated our testnet setup for the new Dijkstra genesis file and disabled legacy and mixed topologies, as legacy topology is no longer supported in 10.6.

We also improved our test framework by adding timeouts for key operations:

* Obtaining a testnet cluster instance
* Calling `cardano-cli`
* Entire test run
* Network requests

Issue [#1787](https://github.com/IntersectMBO/ouroboros-consensus/issues/1787) caused tests to hang indefinitely on `cardano-cli` commands, so adding these timeouts was essential.

### Maintenance

We continued analyzing and fixing nightly job failures. We are currently maintaining a 100% success rate with no flaky tests.
