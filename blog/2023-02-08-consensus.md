---
title: Consensus Team Update
slug: 2023-02-08-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

We continue refactoring the UTxO HD prototype while we wait for the system level
benchmarks. We have created a new repository that contains the `anti-diff`
packages used in this prototype.

On the Genesis front, we are preparing another meeting with the researchers to
audit the implementation design, and we continued working on basic tests and
simplifications.

During the past two weeks we also introduced two new tools. One for dumping CBOR
encoded blocks to JSON, and another to serve a local immutable DB.

## Workstreams 

### UTxO HD Prototype 

We are in the process of refactoring the UTxO HD prototype, while we wait for
the system level benchmarks to confirm if the performance of the prototype is
satisfactory.

We also set up a repository for the [`anti-diff`][anti-diff] package, which
required us to refactor the code, write documentation, and prepare a release to
[CHaP][chap].

### Genesis

We worked on [basic tests][issue-4347] for the _Limit on Eagerness_ property of
Genesis. We also introduced further robustness and simplifications in the
Genesis Density governor. Finally, we developed a presentation to engage again
with the researchers on our Genesis implementation design.

### Technical debt

### Fostering collaboration 

We are in the process of [polishing][pull-6] the `ouroboros-consensus`
documentation site, which we will use a the entry point for Consensus related
documentation. The first version will not be complete, but we plan on
systematically improving it.

### Support

We [added a tool][pull-4335] to `ouroboros-consensus-cardano-tools` which allows
to dump the Chain DB blocks or any given CBOR encoded blocks as JSON.

We also added [another tool][pull-4339] that serves an existing immutable DB via
BlockFetch and ChainSync. This tool can help in assisting our local benchmarking
efforts (for instance Genesis' ChainSync jumping prototype).


[pull-6]: https://github.com/input-output-hk/ouroboros-consensus/pull/6
[pull-4335]: https://github.com/input-output-hk/ouroboros-network/pull/4335
[pull-4339]: https://github.com/input-output-hk/ouroboros-network/pull/4339 
[issue-4347]: https://github.com/input-output-hk/ouroboros-network/issues/4347
[anti-diff]: https://github.com/input-output-hk/anti-diffs
[chap]: https://github.com/input-output-hk/cardano-haskell-packages
