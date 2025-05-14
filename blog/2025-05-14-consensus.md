---
title: Consensus Team Update
slug: 2025-05-14-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Worked on a Genesis fix for an edge case in chain selection when the node is just caught-up ([#1505](https://github.com/IntersectMBO/ouroboros-consensus/pull/1505)).
- Worked on a Genesis fix to correctly disable `ChainSync` jumping when the node is caught-up ([#1492](https://github.com/IntersectMBO/ouroboros-consensus/pull/1492)).
- Discussed next steps on testing nodes via Antithesis in cooperation with the Cardano Foundation, in particular bespoke tooling (see [this Discord message](https://discord.com/channels/1136727663583698984/1239889178938966016/1369693032957349890)).
- Continued engaging with the Leios research team to help with open questions and decisions that the innovation team is currently handling.
- Made significant progress on the validators for the CDDL specs we are adding for the Cardano Blueprints ([#1422](https://github.com/IntersectMBO/ouroboros-consensus/pull/1422)). We are able to test that some of our golden CBOR files conform to the spec. Work is ongoing to extend the tests for the remaining golden files.
- Opened a PR to use an automatic formatter for `ouroboros-consensus`, which will help lower the barrier to entry for new contributors ([#1500](https://github.com/IntersectMBO/ouroboros-consensus/pull/1500)).
