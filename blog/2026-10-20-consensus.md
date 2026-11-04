---
title: Consensus Team Update
slug: 2026-10-20-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios implementation on `main` (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Merged the Praos2 protocol into `main`. Praos2 is Praos plus the Leios overlay. One definition, `PolyPraos`, now has all the Praos rules, and both Praos and Praos2 are variants of it. When a later Praos variant comes, it will extend `PolyPraos` instead of adding a new protocol next to it ([#2386](https://github.com/IntersectMBO/ouroboros-consensus/pull/2386)). A follow-up fixes the translation of the `LedgerView` from Conway to Dijkstra, a defect that #2386 kept from the old code ([#2399](https://github.com/IntersectMBO/ouroboros-consensus/pull/2399)).
    - An Endorser Block can no longer get its certificate in a later era or a later epoch than the block that announced it. The era rule avoids open design questions about a block that crosses an era boundary. The epoch rule keeps the interface between consensus and the ledger simpler ([#2409](https://github.com/IntersectMBO/ouroboros-consensus/pull/2409)).
    - Moved the LeiosNotify clients from the `leios-prototype` branch to `main`. A client disconnects from a peer that sends a message that an honest node would not send. A new test suite runs the real node against peers that can send any message ([#2403](https://github.com/IntersectMBO/ouroboros-consensus/pull/2403)).
    - Moved the LeiosFetch servers from the `leios-prototype` branch to `main` ([#2416](https://github.com/IntersectMBO/ouroboros-consensus/pull/2416)). The next step is the logic that decides which Endorser Blocks to fetch, and the clients that fetch them.
    - Fixed a defect in the LeiosDB garbage collection. If an exception stopped a collection pass, the rows that the pass marked for deletion stayed in the database. The next pass now finds and deletes them ([#2401](https://github.com/IntersectMBO/ouroboros-consensus/pull/2401)).
    - The Leios design document now has a detailed section on Endorser Block diffusion. It gives the plan that came out of the LeiosFetch design work, and how the node keeps its memory use bounded ([ouroboros-leios#1005](https://github.com/input-output-hk/ouroboros-leios/pull/1005)).
- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Merged a large change that makes Endorser Block diffusion in the prototype close to the production design ([#2282](https://github.com/IntersectMBO/ouroboros-consensus/pull/2282)). Some examples:
        - The node fetches an Endorser Block only when an election or a certificate justifies it, never because a peer offers it.
        - A peer can offer only an Endorser Block that it announced, and each part only once. If a peer breaks a rule, the node disconnects from it.
        - If an announcement gives the wrong size for an Endorser Block, the node does not relay that block and does not vote for it.
        - The node checks the certificate in a ranking block when the block arrives, before chain selection.
    - Before #2282, the prototype used the Leios header format in all eras. It now uses the Leios format from Dijkstra only, and the unchanged Praos format before. The testnet starts before Dijkstra, so we must restart its chain from genesis, and every node must update.
    - LeiosNotify has two new messages, `MsgQuit` and `MsgCanceled`, so the node can stop a session while it waits for a reply. Before, this was not possible. So when the peer governor moved a peer from hot to warm, the node closed the whole connection ([#2344](https://github.com/IntersectMBO/ouroboros-consensus/pull/2344)).
    - Backported the epoch rule from #2409 to the prototype ([#2415](https://github.com/IntersectMBO/ouroboros-consensus/pull/2415)).
- Maintenance and support (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus` 5.1.0.1. The tool `db-truncater` has a new flag, `--leios`. Without the flag, the tool does not need the LeiosDB files and does not change them ([#2393](https://github.com/IntersectMBO/ouroboros-consensus/pull/2393)).
    - Tracing now shows the Dijkstra ledger predicate failures. Before, the log formatting for these failures called `error`, so a Dijkstra block that failed validation crashed the thread that wrote the trace ([#2406](https://github.com/IntersectMBO/ouroboros-consensus/pull/2406), ported to `main` in [#2407](https://github.com/IntersectMBO/ouroboros-consensus/pull/2407)).
    - Added the local state query `GetStakePoolState`, which the ledger defines in [cardano-ledger#6162](https://github.com/IntersectMBO/cardano-ledger/pull/6162) ([#2412](https://github.com/IntersectMBO/ouroboros-consensus/pull/2412), for [#2405](https://github.com/IntersectMBO/ouroboros-consensus/issues/2405)).
    - Added golden tests for the ledger queries. They catch a change to the encoding of a query or its result, which would break client tools. Queries that the ledger already defines, such as `NonMyopicMemberRewards`, now come from the ledger ([#2348](https://github.com/IntersectMBO/ouroboros-consensus/pull/2348)).
    - A ledger snapshot now has one version number at the top level, instead of one number for each part. New tests check the golden snapshot files against the CDDL specification, which catches an encoding that does not match the specification. This change also fixes the Peras CDDL ([#2395](https://github.com/IntersectMBO/ouroboros-consensus/pull/2395)).
    - `db-synthesizer` now uses the `forge` function and the mempool of the node, instead of its own copy of the forging logic. One visible change: every slot leader now forges a block, so the synthesized chain can have forks ([#2284](https://github.com/IntersectMBO/ouroboros-consensus/pull/2284)).
