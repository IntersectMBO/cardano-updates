---
title: Consensus Team Update
slug: 2023-04-19-consensus
authors: dnadales
tags: [consensus]
hide_table_of_contents: false
---

## High level summary

This week the consensus team continued working on the improved DB lock mechanism
for UTxO-HD, and modifications to the mempool benchmarks that this prototype
requires.

On the Genesis front we validated that the fragment size calculation in
`BlockFetch` is a major performance sink for ChainSync Jumping. By removing it
we will get performance that is acceptably close to that of the baseline. We
also started investigating a performance fix that does not alter the existing
baseline behavior too much. In addition we reviewed our Genesis attack vector
calculations.

On the support front we released Consensus 0.4, and we are working on improving
our release process, to support the Cardano-wide efforts in this area. We also
performed an analysis on the number of file descriptors that consensus use. This
information can be used by the node operators to check if the number of file
descriptors they want to support are enough.
