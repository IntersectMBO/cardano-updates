---
title: Consensus Team Update
slug: 2025-10-14-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- The scope for the first Consensus Leios demo has been defined and can be accessed via [this link](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701). The team has started prototyping the mini-protocols, new components and demo infrastructure, using the actual node as the base for the prototype.
- The ThreadNet tests have been updated in preparation for upcoming work on Peras tests, as well as testing that the node can fork into the next Dijkstra era ([#1689](https://github.com/IntersectMBO/ouroboros-consensus/pull/1689)).
- Most of the work integrating LSM trees into consensus has been merged into our repository ([#1700](https://github.com/IntersectMBO/ouroboros-consensus/pull/1700), [#1653](https://github.com/IntersectMBO/ouroboros-consensus/pull/1653), [#1652](https://github.com/IntersectMBO/ouroboros-consensus/pull/1652), [#1603](https://github.com/IntersectMBO/ouroboros-consensus/pull/1603), [#1572](https://github.com/IntersectMBO/ouroboros-consensus/pull/1572)). The integration of LSM trees into the node will require only minor consensus modifications, such as exposing new symbols.
- The second Peras PR has been merged ([#1674](https://github.com/IntersectMBO/ouroboros-consensus/pull/1674)). A new one is now ready for review by the Consensus team ([#1678](https://github.com/IntersectMBO/ouroboros-consensus/pull/1678)).
