---
title: System Test Team Update
slug: 2023-06-08-system-test
authors: mkoura
tags: [system-test]
hide_table_of_contents: false
---

## High level summary
Since the last update (2023-03-26) we did more improvements on our Test Framework, added more automated tests, kept analyzing and fixing nightly jobs failures, tested the _1.35.7_ and _8.0.0_ releases.

## Workstreams

[Full list of closed PRs](https://github.com/input-output-hk/cardano-node-tests/pulls?page=1&q=is%3Apr+is%3Aclosed+updated%3A2023-03-26..2023-06-08)

### Framework improvements:
- Make cardano-submit-api REST API service available and run corresponding regression tests by default
- Update cabal build testing for 8.0.0
- Add support for testing governance SPO poll
- Use Poetry for Python dependency management
- Check status of known GH issues during tests runtime and finish the test accordingly
- Generate topology files with both IP addresses and DNS names
- Log issues like failure to start a cluster instance and report errors during tests runtime

### Testing improvements
- Add rollback testing:
    1. global consensus is reached after rollback, in situation where less than `securityParam` blocks were produced since cluster split
    1. global consensus is not reached when more than `securityParam` blocks were produced, and the result is permanent fork
- Add tests to governance SPO poll commands

### Node:
- tested the [1.35.7](https://tests.cardano.intersectmbo.org/test_results/node/tag_1_35_7.html) release
- tested the [8.0.0](https://tests.cardano.intersectmbo.org/test_results/node/tag_8_0_0.html) release

### DB-Sync:
- improvements in db-sync sync tests
- improvements in db-sync functional tests
