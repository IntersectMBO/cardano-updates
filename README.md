# Cardano Development Updates

This repository will host updates from the
[cardano](https://github.com/input-output-hk/cardano-node) development teams.
The generated website containing the updates can be found
[here](https://input-output-hk.github.io/cardano-updates/).

## Setup

You need to install [git-lfs extension](https://git-lfs.github.com/). If you
want to add a large file to the repository please consider using `git-lfs`.

## Add an update

To add an update create a file under `posts` directory which name is:
`yyyy-mm-dd-TEAM.markdown`. Commit and push.  The site will be built and
deployed by a [github-action](https://github.com/input-output-hk/cardano-updates/actions).

## Serve the website locally

If you wish to preview changes before publishing them, you can serve the site
locally with:

```bash
cabal run site -- watch
```

The site can then be previewed in a browser at http://127.0.0.1:8000.
