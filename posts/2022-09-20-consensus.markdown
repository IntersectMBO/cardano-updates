# Executive summary


# Workstreams

## Conway

## UTxO HD

## Genesis

 - Final draft of the Genesis implementation specification, now up for review.

 - Local benchmark setup for parameter tuning via the happy path ChainSync
   Jumping (CSJ) prototype ([Issue 3987][issue-3987]).

    - Context: Our Genesis design requires us to check in with a large (~20)
      number of servers periodically while syncing. These servers are offered
      jump requests via the ChainSync protocol (hence the name), which they can
      accept or decline. If a peer declines, the Genesis rule allows us to
      determine whether a node actually has a better chain.

    - The "happy path" is when no peer declines a jump. We want this to have
      close to no overhead compared to status quo, i.e. syncing without Genesis.

    - We implemented a prototype for this happy path, and are now starting to
      test in various configurations (number of peers, latency, bandwidth) to
      tune the performance of ChainSync jumping, i.e. how complicated our logic
      of choosing when to jump needs to be.

    **Example:**

     - Simulated connection: 50 MBit/s, 50ms latency

     - Jump interval: 3000 slots (on the low end, could be increased to up to
       `3k/f`)

     - Red: baseline (1.35.3), one peer in topology file

     - Blue: Preliminary version of our prototype, with 10 peers.

    ![](/images/happy-path-csj-prototype-prelim.svg)

    It is slower by about ~30%, but it is not the latest version of the
    prototype, and the jump interval is very small, making CSJ more of a
    bottleneck.

## Technical debt

- Fix flakiness in ChainDB QSM tests

[issue-3987]: https://github.com/input-output-hk/ouroboros-network/issues/3987
