---
title: Consensus Team Update
slug: 2026-04-21-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation):
    - Fixed an "impossible!" crash in the Leios prototype's fetch decision logic ([#1996](https://github.com/IntersectMBO/ouroboros-consensus/pull/1996)).
    - Added cumulative transaction bytes to the ledger state and exposed them as a Prometheus metric, giving operators a direct measure of throughput on the proto-devnet ([#1988](https://github.com/IntersectMBO/ouroboros-consensus/pull/1988), [cardano-node#6536](https://github.com/IntersectMBO/cardano-node/pull/6536)).
    - Added a confirmed-transaction throughput panel to the proto-devnet dashboard ([ouroboros-leios#859](https://github.com/input-output-hk/ouroboros-leios/pull/859)).
    - Hardened the prototype's test suite around endorser-block inclusion, making it easier to extend to upcoming features such as voting ([#1971](https://github.com/IntersectMBO/ouroboros-consensus/pull/1971)).
    - Started aligning the prototype with the original Leios design by migrating the endorser-block announcement and certification flag from the Ledger Block into the Praos Header ([ouroboros-leios#837](https://github.com/input-output-hk/ouroboros-leios/issues/837)).
    - Investigating a performance bug observed during the March demo, where the time between forging and storing an endorser block can stretch to minutes and disrupt protocol operation ([ouroboros-leios#844](https://github.com/input-output-hk/ouroboros-leios/issues/844)).
    - Nick Frisby shared a work-in-progress snapshot of his SQLite latency investigation from March, which informs Leios-related storage work ([ouroboros-leios#863](https://github.com/input-output-hk/ouroboros-leios/pull/863)).
    - Posted the logbook update from the 2026-04-09 Consensus Office Hours ([ouroboros-leios#854](https://github.com/input-output-hk/ouroboros-leios/pull/854)).
- Peras protocol development (Treasury Funding Initiative 17: Maintenance and Support):
    - Defined sensible default values for `PerasParams`, simplifying configuration for downstream users ([#1998](https://github.com/IntersectMBO/ouroboros-consensus/pull/1998)).
- Documentation (Treasury Funding Initiative 17: Maintenance and Support):
    - Added an explanation page describing the data flow between consensus components ([#1955](https://github.com/IntersectMBO/ouroboros-consensus/pull/1955)).
    - Published a first iteration of an explanation page covering the Ouroboros Praos consensus protocol ([#1960](https://github.com/IntersectMBO/ouroboros-consensus/pull/1960)).
    - Removed leftover documentation stubs and cleaned up the sidebar on the consensus website ([#1956](https://github.com/IntersectMBO/ouroboros-consensus/pull/1956)).
- Releases and integration (Treasury Funding Initiative 17: Maintenance and Support):
    - Released `ouroboros-consensus-3.0.1.0` ([#1987](https://github.com/IntersectMBO/ouroboros-consensus/pull/1987)).
    - Bumped the node's consensus dependency to 3.0.1, propagating recent consensus improvements to `cardano-node` ([cardano-node#6533](https://github.com/IntersectMBO/cardano-node/pull/6533)).
    - Re-landed the rework of `snapshotFromIS`, part of ongoing improvements to ledger snapshotting ([#1992](https://github.com/IntersectMBO/ouroboros-consensus/pull/1992)).
