---
title: Node API & CLI Team Update
slug: 2024-11-20-node-cli-api
authors: Jimbo4350
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-10-29T00:00:00Z - 2024-11-20T00:00:00Z

## High level summary

### Major Enhancements
- Added anchor hash checks to transaction build to validate transaction data integrity
- Introduced a new check-node-configuration command to verify genesis file hashes
- Implemented checks to ensure stake addresses in proposals are registered on-chain, preventing potential deposit losses
- Added options to create constitutional committee members in testnet data generation
- Released cardano-cli-10.1.1.0 and updated to cardano-api-10.2.0.0

### Code Quality and Architecture
- Removed direct dependencies from ouroboros-* packages, improving module separation
- Restored stable query commands at the top level for better user experience
- Refactored various components and removed unused code elements
- Enhanced transaction submission to print transaction hash for better traceability

### API Improvements
- Added functionality to extract anchor data from certificates
- Improved Value parser parameterization based on transaction role
- Exposed necessary functions and types from underlying libraries
- Restored aarch64 architecture support
- Updated error handling for Plutus script failures

### Testing Enhancements
- Added supplemental datum Plutus test
- Added verification checks for stake registration/deregistration
- Improved test infrastructure for proposal anchors and constitution


### cardano-cli
- [Add anchor hash checks to `transaction build`](https://github.com/IntersectMBO/cardano-cli/pull/951)
- [Add check-node-configuration command](https://github.com/IntersectMBO/cardano-cli/pull/923)
- [Check if stake addresses in proposals are registered onchain](https://github.com/IntersectMBO/cardano-cli/pull/963)
- [create-testnet-data: add option to create constitutional committee members](https://github.com/IntersectMBO/cardano-cli/pull/961)
- [Parsers: avoid double usage of flip on a single line](https://github.com/IntersectMBO/cardano-cli/pull/964)
- [Refactor](https://github.com/IntersectMBO/cardano-cli/pull/950)
- [Release cardano-cli-10.1.1.0](https://github.com/IntersectMBO/cardano-cli/pull/956)
- [Remove direct dependencies from `ouroboros-*`](https://github.com/IntersectMBO/cardano-cli/pull/957)
- [Remove unused envCliSomeEra](https://github.com/IntersectMBO/cardano-cli/pull/966)
- [Restore stable query cmds](https://github.com/IntersectMBO/cardano-cli/pull/955)
- [transaction submit: print transaction hash](https://github.com/IntersectMBO/cardano-cli/pull/925)
- [Update cardano-api to 10.2.0.0](https://github.com/IntersectMBO/cardano-cli/pull/967)

### cardano-api
- [Add function to extract anchor data from certificate](https://github.com/IntersectMBO/cardano-api/pull/664)
- [Add Inject instances for Eons. Deprecate old eons conversion functions.](https://github.com/IntersectMBO/cardano-api/pull/636)
- [Export the Committee record from the ledger, for use in the CLI](https://github.com/IntersectMBO/cardano-api/pull/669)
- [Expose functions and types from `ouroboros-*` required by `cardano-cli`](https://github.com/IntersectMBO/cardano-api/pull/667)
- [Parameterize Value parser on role of the Value being parsed: transaction output or minting policy](https://github.com/IntersectMBO/cardano-api/pull/666)
- [Release cardano-api-10.2.0.0](https://github.com/IntersectMBO/cardano-api/pull/676)
- [Remove `Show (Some a)` and `Eq (Some a)`. Add `Show (Some Era)` and `Eq (Some Era)`.](https://github.com/IntersectMBO/cardano-api/pull/665)
- [Remove experimental code leak in Cardano.Api non-experimental modules](https://github.com/IntersectMBO/cardano-api/pull/681)
- [Restore `aarch64` support](https://github.com/IntersectMBO/cardano-api/pull/679)
- [Update ScriptErrorEvaluationFailed with DebugPlutusFailure](https://github.com/IntersectMBO/cardano-api/pull/672)
- [ValueParser: rename publicly exposed function names to indicate they are parsers](https://github.com/IntersectMBO/cardano-api/pull/674)


### cardano-node
- [cardano-cli: update to 10.1.1](https://github.com/IntersectMBO/cardano-node/pull/6029)

### cardano-testnet
- [Add supplemental datum plutus test](https://github.com/IntersectMBO/cardano-node/pull/6025)
- [cardano-testnet | Add correct contents for proposal anchor and constitution](https://github.com/IntersectMBO/cardano-node/pull/6037)
- [cardano-testnet | Add verification check in stake registration/deregistration test](https://github.com/IntersectMBO/cardano-node/pull/6026)
- [Update supplemental datum script to use `findDatum`](https://github.com/IntersectMBO/cardano-node/pull/6027)

### docs
- None

### CI & project maintenance
- [Update `main` references in GHA](https://github.com/IntersectMBO/cardano-api/pull/670)
- [Update `main` references in GHA](https://github.com/IntersectMBO/cardano-cli/pull/960)

