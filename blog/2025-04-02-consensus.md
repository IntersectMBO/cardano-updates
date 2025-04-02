---
title: Consensus Team Update
slug: 2025-04-02-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Well-Typed has presented the penultimate milestone for the `lsm-tree` library. Table unions are now fully supported, tests include IO-error injection, and compatibility across Linux, Windows, and macOS has been demonstrated.
    - The next milestone will finalize the library's development, enabling its integration as a persistent backend for storing ledger state.
- Several Consensus team members attended the Peras workshop. There is a brief presentation that can be accessed by following [this link](https://moduscreate.zoom.us/rec/share/a9wMSF373RrN0-UFMPZec02YQTRA_AQotaC7r3kD4GnEA8yeyUAkOfQ0lzcioxpn.dcXTAW8BXwdRH3d4) (password is `GDdL*6M%`). A [design and implementation plan](https://tweag.github.io/cardano-peras/peras-design.pdf) has been drafted. The next steps for Peras involve a decision by relevant stakeholders (Intersect Technical Steering Committee, involving SPOs and users) regarding the [tradeoffs](https://tweag.github.io/cardano-peras/peras-design.pdf#chapter.6) inherent to the protocol, such as additional operational costs, rewards and protocol parameterization regarding settlement times.
- We held our technical working group meeting ([recording](https://drive.google.com/file/d/1hQW6QmivgzJtUk6OUZMyT0uD0QVCwNFA/view)), where we discussed:
    - The possibility of incorporating batch VRF support into `ouroboros-consensus`.
    - CDDL definition for Consensus: [draft PR](https://github.com/IntersectMBO/ouroboros-consensus/pull/1422) and next steps.
	  - Should we support for NTC for older eras? ([#1429](https://github.com/IntersectMBO/ouroboros-consensus/issues/1429)).
- Exposed a function that asks Consensus for the versions in which a particular query is supported, offloading this logic from cardano-api ([#1437](https://github.com/IntersectMBO/ouroboros-consensus/pull/1437)).
- Exposed Byron cddls to be used from Consensus ([#4965](https://github.com/IntersectMBO/cardano-ledger/pull/4965)).
- Added `QueryStakePoolDefaultVote` for 10.3 ([#1434](https://github.com/IntersectMBO/ouroboros-consensus/pull/1434 release consensus for node 10.3)).
