---
title: Mapping consensus
slug: mapping-consensus
authors: abailly-iohk dnadales
tags: [consensus]
hide_table_of_contents: false
---

## On the need for improving consensus documentation  

<!-- Where were we and what were the problems -->

Consensus was developed trying to meet strict deadlines: first IOG had to
release the Byron rewrite as soon as possible, and later on, the release of
Shelley became the next urgent thing. In spite of working under such high
pressure, the consensus team did its best not to compromise on assurance,
architecture, and documentation. A proof of the latter, is the [consensus
report][consensus-report] which, in spite of still needing to be completed, it
provides a great description of the consensus layer. However, there are certain
aspects of the consensus documentation that can be improved.

### Consensus was not listed in the Cardano documentation

Consensus did not appear neither in `docs.cardano.org` nor in
`developers.cardano.org`. 
<!-- TODO: why is this a problem? -->

In addition, `ouroboros-consensus` was not listed in the top [level haddock
documentation][top-level-haddock] of the repository in which it lives. This top
level documentation provides the entry point for exploring the documentation of
the modules that are contained in `ouroboros-network`.

### Some documentation did not live in the code itself 

<!-- TODO why is this a problem -->

<!-- TODO... eg docs/Testing.md--> 

### We had an "onboarding" document that mixed several aspects

Our onboarding documentation did not seem to be organized by topic or in some
sort of logical order as an aid to understanding.

## The consensus map

<!-- TODO describe the improvements we made -->

## The path forward

<!-- TODO describe the strategy for introducing gradual improvements in the documentation -->

[consensus-report]: https://hydra.iohk.io/job/Cardano/ouroboros-network/native.consensus-docs.x86_64-linux/latest/download/1)
[top-level-haddock]: https://input-output-hk.github.io/ouroboros-network/
