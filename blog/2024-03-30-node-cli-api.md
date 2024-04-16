---
title: Node API & CLI Team Update
slug: 2024-03-30-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2024-03-16 - 2024-03-30

## High level summary

Adding support for script based committee and dreps. This includes queries and using script as arguments instead of keys on various command.

### cardano-cli

- [Fix issues in `MonadWarning` Haddock](https://github.com/IntersectMBO/cardano-cli/pull/684)
- [Follow-ups of merged PRs](https://github.com/IntersectMBO/cardano-cli/pull/683)
- [Comments and indentation](https://github.com/IntersectMBO/cardano-cli/pull/682)
- [Throw an error on identical action-ids in votes of one voter](https://github.com/IntersectMBO/cardano-cli/pull/681)
- [Add `--drep-script-hash` parameter to `conway governance drep retirement-certificate`](https://github.com/IntersectMBO/cardano-cli/pull/678)
- [Update index-state and set cardano-git-rev ^>= 0.2.2](https://github.com/IntersectMBO/cardano-cli/pull/677)
- [Update index-state and set cardano-git-rev ^>= 0.2.2](https://github.com/IntersectMBO/cardano-cli/pull/675)
- [drep: registration-certificate, update-certificate: test anchors URLs of length > 64 and <= 128](https://github.com/IntersectMBO/cardano-cli/pull/671)
- [Update ouroboros-consensus-cardano-0.14.2](https://github.com/IntersectMBO/cardano-cli/pull/670)
- [proposal: disambiguate binary data from text data](https://github.com/IntersectMBO/cardano-cli/pull/669)
- [Release cardano-cli-8.21.0.0](https://github.com/IntersectMBO/cardano-cli/pull/668)
- [Support querying drep-state by script hash](https://github.com/IntersectMBO/cardano-cli/pull/666)
- [vote create: support DRep and CC script hash](https://github.com/IntersectMBO/cardano-cli/pull/665)
- [Display redeemers in `transaction view`](https://github.com/IntersectMBO/cardano-cli/pull/664)
- [    Add Plutus script hash support in `update-committee`, `overnance committee create-cold-key-resignation-certificate` and `query committee-state` commands.](https://github.com/IntersectMBO/cardano-cli/pull/658)
- [Add semaphore for vote view JSON test cases](https://github.com/IntersectMBO/cardano-cli/pull/655)
- [verification-key: support DRep keys as well as committee keys, extended or not](https://github.com/IntersectMBO/cardano-cli/pull/652)

### cardano-api

- [Replace unsafeMergeVotingProcedures by mergeVotingProcedures](https://github.com/IntersectMBO/cardano-api/pull/498)
- [Undeprecate `evaluateTransactionFee`](https://github.com/IntersectMBO/cardano-api/pull/493)
- [New version `cardano-api-8.43.0.0`](https://github.com/IntersectMBO/cardano-api/pull/492)
- [Release cardano-api-8.42.0.0](https://github.com/IntersectMBO/cardano-api/pull/491)
- [Tidy up "New calculateMinTxFee function"](https://github.com/IntersectMBO/cardano-api/pull/490)
- [Add support for script-based CC members](https://github.com/IntersectMBO/cardano-api/pull/489)
- [Bump ouroboros-consensus-diffusion](https://github.com/IntersectMBO/cardano-api/pull/488)

### cardano-testnet

- [Bump cardano-api to 8.39.3.0 and ouroboros-* and ekg-forward as a consequence](https://github.com/IntersectMBO/cardano-node/pull/5724)
- [testnet: fix that custom genesis files were not passed to create-testnet-data](https://github.com/IntersectMBO/cardano-node/pull/5722)

### docs

### CI & project maintenance
