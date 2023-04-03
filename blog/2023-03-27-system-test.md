---
title: System Test Team Update
slug: 2023-03-27-system-test
authors: mkoura
tags: [system-test]
hide_table_of_contents: false
---

## High level summary
Since the last update (2023-1-13) we did more improvements on our Test Framework, added more automated tests, kept analyzing and fixing nightly jobs failures, tested the _1.35.5_ and _1.35.6_ releases (and their predecessing release candidates) and ran tests on branch with the _UTxO-HD_ functionality.

## Workstreams

### Framework improvements:
- improvements in searching for unexpected error messages in log files during test run
- added support for UTxO-HD testing
- added support for the new P2P topology format
- added local cluster variant that has the same properties as mainnet (epoch length, fees, etc.)
- added preliminary support for the Conway era
- added support for running tests on the _Preview_ testnet

[Full list of closed PRs](https://github.com/input-output-hk/cardano-node-tests/pulls?q=is%3Apr+is%3Aclosed+updated%3A2023-01-13..2023-03-26)

### Node:
- ran tests on node branch with the UTxO-HD functionality
- tested the [1.35.5](https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_5.html) release
- tested the [1.35.6](https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_6.html) release

### DB-Sync:
- improvements in db-sync sync tests
- improvements in db-sync functional tests

