---
title: Open-Source Update
slug: 2023-01-13-open-source
authors: coot
tags: [open-source]
hide_table_of_contents: false
---

## Open Source Quarterly Update
## 2022-11 - 2023-01

### Summary

In the last quarter the open-source initiative delivered a comprehensive report
on the state of our repositories.  As part of this work stream we
identified the key open-source repositories for the cardano project across all
the projects  From a list of more than 500 repositories (some of which are
forks) we identified key repositories which constitute the core of Cardano.
20 of them were identified as to be transferred to the future MBO which will
govern Cardano development.  Some where excluded (like [`io-sim`] and
[`typed-protocols`]), to be govern by IOG, since they have a much broader
application than Cardano itself, and thus we think their open-source future
will be better outside of the Cardano umbrella.

Christian Taylor identified a number of ways we can improve our repositories to
make them more attractive for open-source contributions by analysing each of
them.  This includes adding or improving various documentation files, like
`CONTRIBUTING` files, adding code of conduct, improving readme files, issue
& pull request templates etc.  Christian also computed various interesting
metrics which gives a very good insight into the development practices: e.g.
average merge ratio, average number of reviews, comments and many more!  The
presentation is available [here][open-source-presentation].

We followed with work on the [Cardano Engineering Handbook][CEH].  We included
a standard code of conduct which is now used by most important projects in the
Cardano space.  We included `cardano-node`'s security policy and added
a responsible disclosure policy.  We also described how roles and
responsibilities should be clarified.  This progress was made by
a collaborative effort of the Cardano Core, Plutus and Architecture teams, and
it wouldn't be possible without Michael Peyton Jones, Arnaud Bailly, Kevin
Hammond, Jared Corduan and Marcin Szamotulski.

We also improved the documentation of key repositories, by adding description,
improving their `README` file & `CONTRIBUTING` files, adding code of conducts
following the [Cardano Engineering Handbook][CEH].  This includes improvements to:

* [`ouroboros-network`] (both `network` & `consensus`)
* [`cardano-ledger`]
* [`cardano-node`]

And also

* [`io-sim`]
* [`typed-protocols`]
* [`cardano-prelude`] (work in progress)

The work was carried by Marcin Szamotulski, Addie Girouard and  Jared Corduan. 


In this quarter we also identified a number of projects which can be published to
`Hackage` (Haskell's package repository) or `crate` (Rust package repository).
The list contains 21 packages, 2 of which ([`hedgehog-extras`] and
[`quickcheck-dynamic`]) are already published on Hackage and another 5 (from
the [`io-sim`] repository) are close to be published.


### Detailed log

The progress of the open-source project is tracked in [this project][open-source-project].

[CEH]: https://input-output-hk.github.io/cardano-engineering-handbook/
[open-source-project]: https://github.com/orgs/input-output-hk/projects/60/views/1
[`cardano-ledger`]: https://github.com/input-output-hk/cardano-ledger
[`cardano-node`]: https://github.com/input-output-hk/cardano-node
[`cardano-prelude`]: https://github.com/input-output-hk/cardano-prelude
[`hedgehog-extras`]: https://hackage.haskell.org/package/hedgehog-extras
[`io-sim`]: https://github.com/input-output-hk/io-sim
[`ouroboros-network`]: https://github.com/input-output-hk/ouroboros-network
[`quickcheck-dynamic`]: https://hackage.haskell.org/package/quickcheck-dynamic
[`typed-protocols`]: https://github.com/input-output-hk/typed-protocols
[open-source-presentation]: https://docs.google.com/presentation/d/127IFEavlrZeeoFrVXFYWzSt0ugOkSL7isxjyM1vmMzQ
