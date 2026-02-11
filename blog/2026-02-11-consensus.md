---
title: Consensus Team Update
slug: 2026-02-11-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

- Continued work on Node 10.7 integration (Treasury Funding Initiative 17: Maintenance and Support):
    - Integrated network packages up to `ouroboros-network-0.22.6` ([#1819](https://github.com/IntersectMBO/ouroboros-consensus/pull/1819), [#1865](https://github.com/IntersectMBO/ouroboros-consensus/pull/1865)).
    - Integrated latest ledger changes ([#1762](https://github.com/IntersectMBO/ouroboros-consensus/pull/1762)).
    - Integrated `kes-agent-1.1` ([#1819](https://github.com/IntersectMBO/ouroboros-consensus/pull/1819)) (Treasury Funding Initiative 9: KES Agent).
- Node improvements (Treasury Funding Initiative 17: Maintenance and Support):
    - Enhanced observability by exposing the reason for chain switches in the ChainSel tracer ([#1826](https://github.com/IntersectMBO/ouroboros-consensus/pull/1826)).
    - Added support for the new `GetDRepDelegations` ledger state query in NodeToClientV_23 ([#1794](https://github.com/IntersectMBO/ouroboros-consensus/pull/1794)).
    - Fixed an exception due to a mix-up of resources in the V2 LedgerDB ([#1842](https://github.com/IntersectMBO/ouroboros-consensus/pull/1842)).
    - Minor: code cleanup ([#1854](https://github.com/IntersectMBO/ouroboros-consensus/pull/1854)).
    - Added documentation for the Consensus-Ledger interaction ([#1830](https://github.com/IntersectMBO/ouroboros-consensus/pull/1830)).
- Continued Leios prototype development (Treasury Funding Initiative 4: Ouroboros Leios Implementation, MS4.6):
    - Refactored to use `EbHash` instead of `EbId` for cleaner design ([#1859](https://github.com/IntersectMBO/ouroboros-consensus/pull/1859)).
    - Simplified to monomorphic types for more rapid iteration ([#1846](https://github.com/IntersectMBO/ouroboros-consensus/pull/1846)).
    - Implemented in-memory LeiosDb for ThreadNet tests ([#1837](https://github.com/IntersectMBO/ouroboros-consensus/pull/1837)).
