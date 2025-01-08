---
title: Consensus Team Update
slug: 2025-01-08-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- The augmentation of headers with time, which helps simplify the way consensus handles time, is now ready for review ([#1288](https://github.com/IntersectMBO/ouroboros-consensus/pull/1288)).
- Fixed a bug with the mempool being overly strict in rejecting certain large transactions ([1352](https://github.com/IntersectMBO/ouroboros-consensus/pull/1352)).
- Incorporated the full rework of the block-fetch logic for bulk sync mode ([#1179](https://github.com/IntersectMBO/ouroboros-consensus/pull/1179)).
- Released Consensus packages needed for Cardano Node 10.2 (`ouroboros-consensus-protocol-0.10.0.0`,  `release-ouroboros-consensus-diffusion-0.19.0.0`, `release-ouroboros-consensus-cardano-0.21.0.0`, `release-ouroboros-consensus-0.22.0.0`).
