# Node-Api-Cli Update
# 2022-11-01 - 2022-11-15

## High level summary
- Documentation improvments
- Merged community contributions
- Exposing types from cardano-api requested by the community/other teamss
- Test output has been improved so diagnosing failures is now easier
- Enabling stale bot to close stale issues and PRs (reduces clutter on the node repo)
- Refactoring of cardano-testnet making it more useable as a library (ongoing)
- Release 1.35.4 was merged & released

## Completed

### cardano-cli
- [Community contributions - doc fixes and spelling errors](https://github.com/input-output-hk/cardano-node/pull/4567)

### cardano-api
- [Reduce exposed modules in cardano-api](https://github.com/input-output-hk/cardano-node/pull/4546)
- [Add Ord instance for AddressInEra](https://github.com/input-output-hk/cardano-node/pull/4587)
- [Export TxTotalAndReturnCollateralSupportedInEra from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4496)
- [Expose TextEnvelopeCddl from Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4635)
- [Expose txScriptValidityToScriptValidity in Cardano.Api](https://github.com/input-output-hk/cardano-node/pull/4628)
- [export RawBytesHexError](https://github.com/input-output-hk/cardano-node/pull/4599)

### cardano-node
- [Add Plutus minting script doc](https://github.com/input-output-hk/cardano-node/pull/2883)
- [Improve test output](https://github.com/input-output-hk/cardano-node/pull/4575/files)
- [Enable stale bot](https://github.com/input-output-hk/cardano-node/pull/4586)
- [Add link to troubleshooting page in the wiki](https://github.com/input-output-hk/cardano-node/pull/4557)
- [Use environment files in Github Actions](https://github.com/input-output-hk/cardano-node/pull/4550)


### cardano-testnet
- [Add single entrypoint for starting testnets](https://github.com/input-output-hk/cardano-node/pull/4544)
- [Improve cardano-testnet test output](https://github.com/input-output-hk/cardano-node/pull/4575)
- [Reorder module hierarchy](https://github.com/input-output-hk/cardano-node/pull/4595)

## In Progress

### cardano-cli
- [BUGFIX]- [Stop the cli from changing the bytes in user-supplied data](https://github.com/input-output-hk/cardano-node/pull/4537)
- [Infer protocol params in transaction build](https://github.com/input-output-hk/cardano-node/pull/4431)
- [Allow assembling transactions with no witnesses](https://github.com/input-output-hk/cardano-node/pull/4408)
- [Multiple pools support in query stake snapshot](https://github.com/input-output-hk/cardano-node/pull/4279)
- [Optimise query leadership schedule command](https://github.com/input-output-hk/cardano-node/pull/4250)
- [Optimise query stake snapshot command](https://github.com/input-output-hk/cardano-node/pull/4179)
- [Debug output for transaction submit](https://github.com/input-output-hk/cardano-node/pull/3819)

### cardano-api
- [Make TxBodyContent an instance of Monoid](https://github.com/input-output-hk/cardano-node/pull/4458)
- [Auto-balance multiasset transactions](https://github.com/input-output-hk/cardano-node/pull/4450)

### cardano-node
- [Stop running CI when the only changes are to docs](https://github.com/input-output-hk/cardano-node/pull/4263)
- [Rename TestEnableDevelopmentHardForkEras](https://github.com/input-output-hk/cardano-node/pull/4341)

