---
title: Consensus Q4 2023 Update
slug: 2023-Q4-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## Areas of focus

| Issue                                                                 | Status  |
|-----------------------------------------------------------------------|---------|
| [Implement legacy mode for UTxO-HD to keep baseline performance][429] | ✅ Done |
| [Assist mainnet node release with initial Conway capabilities][423]   | ✅ Done |
| [Assist with test, benchmark, and improvements to CIP 1694][424]      | ✅ Done |
| [Assist with P2P IOG relay network shut down][414]                    | ✅ Done |
| [Assist with repo transfer to Intersect][425]                         | ✅ Done |
| [Support vendors to deliver contracts][427]                           | ✅ Done |
| [Operation serenity Q4 2023][415]                                     | ✅ Done |


## Highlights

### Implement legacy mode for UTxO-HD to keep baseline performance

- We managed to run a UTxO-HD capable node in legacy mode, which maintains the baseline memory usage while keeping all the ledger state in memory.
- Legacy mode is not production ready: it requires further integration and testing.
- TOOD: mention work on redesign of the backing store API and integration, and relevance for an in-memory mode that keeps baseline performance.

### Assist mainnet node release with initial Conway capabilities

- High-level highlight 1
- ...

### Assist with test, benchmark, and improvements to CIP 1694

(We could merge this section with the one above)

- High-level highlight 1
- ...

### Assist with P2P IOG relay network shut down

### Assist with repo transfer to Intersect

### Support vendors to deliver contracts

- TODO: highlight collaboration between Tweag, Nick and Alex
- TODO: highlight collaboration between Javier and Joris.

### Operation serenity Q4 2023

- ...
- We added a test to check Consensus emits valid CBOR, which prevents the generation of invalid binary encoding.
- We established and implemented an interface between Consensus tooling and P&T tooling, which constitutes a step towards incorporating component level benchmarks in our development process.

[429]: https://github.com/IntersectMBO/ouroboros-consensus/issues/429
[423]: https://github.com/IntersectMBO/ouroboros-consensus/issues/423
[424]: https://github.com/IntersectMBO/ouroboros-consensus/issues/424
[414]: https://github.com/IntersectMBO/ouroboros-consensus/issues/414
[425]: https://github.com/IntersectMBO/ouroboros-consensus/issues/425
[427]: https://github.com/IntersectMBO/ouroboros-consensus/issues/427
[415]: https://github.com/IntersectMBO/ouroboros-consensus/issues/415
