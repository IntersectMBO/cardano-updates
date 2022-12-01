---
title: System Test Team Update
slug: 2022-12-01-system-test
authors: dorin100
tags: [system-test]
hide_table_of_contents: false
---

## High level summary
During the last 2 weeks we did more improvements on our Test Framework, planned the testing of the _P2P Single 
Relay_ functionality, and also tested some DB-Sync tags.

## Workstreams

### Framework improvements:
- moved the System Test CLI Pipelines from BuildKite to Github Actions
- improved the reporting tools to support the rerun of the failled tests and update of the reports 
- added support for Github API in [report-aggregator](https://github.com/mkoura/report-aggregator), so reports will be generated from the GitHub nightly jobs from now on
- added support for mixed topology - P2P, legacy, mixed topologies
- planned the P2P Single Relay system test activities 
- added support to start regression tests with PV8 + better selection of tests

### DB-Sync:
- confirmed that DB-Sync release 13.0.5 is compatible with Node release 1.35.4 + Protocol Version 8 (on the Preview environment)
- tested a couple db-sync tags - 13.1.0.0-rc1, 13.1.0.0-rc2
