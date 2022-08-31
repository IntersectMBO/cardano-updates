# Executive summary 

## Conway

 - Integration PR of the minimal Conway era ([Issue #3963][issue-3962], [PR #3971][pull-3971]).
 - Discussions with Ledger revealed possible sources of confusion about which data should be changed in the Conway era ([Issue #3976][issue-3976]).

## UTxO HD 

## Genesis

 - Draft of the specification of the Genesis implementation and the ChainSync Jumping optimization. In particular, this includes a proof sketch that the latter preserves liveness and safety in all cases ([Issue 3964][issue-3964]).
 - Continued work on the "happy path" ChainSync Jumping prototype ([Issue 3960][issue-3960]).

## Other

 - Preliminary work to (re)enable nightly CI tests: PR adding new options to control the number of QuickCheck property tests to run ([PR #3947][pull-3947]).

[pull-3947]: https://github.com/input-output-hk/ouroboros-network/pull/3947
[issue-3960]: https://github.com/input-output-hk/ouroboros-network/issues/3960
[issue-3962]: https://github.com/input-output-hk/ouroboros-network/issues/3962
[issue-3964]: https://github.com/input-output-hk/ouroboros-network/issues/3964
[pull-3971]: https://github.com/input-output-hk/ouroboros-network/pull/3971
[issue-3976]: https://github.com/input-output-hk/ouroboros-network/issues/3976
