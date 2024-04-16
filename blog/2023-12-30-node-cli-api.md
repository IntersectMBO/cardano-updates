---
title: Node API & CLI Team Update
slug: 2023-12-30-node-cli-api
authors: carlos
tags: [cli-api]
hide_table_of_contents: false
---

# Node-Api-Cli Update
# 2023-12-09 - 2023-12-30

## High level summary

- Migrated reposotiries to IntersectMBO.
- Improved era handling on cardano-api. Instead of enumerating every possible era, we use two constructors:
'CurrentEra' and 'UpcomingEra'. This design simplifies the handling of eras, especially for `cardano-api` consumers who are primarily concerned with the current mainnet era and the next era for an upcoming hardfork.
- Cleaning-up the `cardano-cli`, in particular to the babbage era commands where some Conway options had spilled.  

### cardano-cli

- [Use AnyShelleyBasedEra in ScriptWitnessErrorReferenceScriptsNotSupportedInEra](https://github.com/IntersectMBO/cardano-cli/pull/535)
- [[--output-format json|--output-format json] format becomes [--output-yaml|--output-json]](https://github.com/IntersectMBO/cardano-cli/pull/523)
- [governance vote view: use `--output-format`, like other commands, instead of `--yaml`](https://github.com/IntersectMBO/cardano-cli/pull/521)
- [fix: invalid options on cardano-cli babbage transaction build and build-raw](https://github.com/IntersectMBO/cardano-cli/pull/520)
- [legacy query: remove constitution-hash option](https://github.com/IntersectMBO/cardano-cli/pull/515)
- [Make `query pool-state` default to returning information on all pools](https://github.com/IntersectMBO/cardano-cli/pull/514)

### cardano-api

- [Expose CurrentEra and UpcomingEra pattern synonyms](https://github.com/IntersectMBO/cardano-api/pull/414)
- [update cname for github pages](https://github.com/IntersectMBO/cardano-api/pull/412)
- [Fix links killed by GitHub migration](https://github.com/IntersectMBO/cardano-api/pull/411)
- [Move renderSafeHashAsHex from cardano-node](https://github.com/IntersectMBO/cardano-api/pull/410)
- [Upgrade hedgehog extras](https://github.com/IntersectMBO/cardano-api/pull/409)
- [chap: migrate to chap.intersectmbo.org](https://github.com/IntersectMBO/cardano-api/pull/405)
- [Era handling](https://github.com/IntersectMBO/cardano-api/pull/402)

### cardano-node

- [chap: migrate to intersectmbo.org](https://github.com/IntersectMBO/cardano-node/pull/5581)

### cardano-testnet

- [cardano-testnet 8.7.2](https://github.com/IntersectMBO/cardano-node/pull/5583)
- [chap: migrate to intersectmbo.org](https://github.com/IntersectMBO/cardano-node/pull/5581)

### docs

### CI & project maintenance
