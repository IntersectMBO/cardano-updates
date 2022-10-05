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

## Workflow

Each team is welcome to use whatever workflow that they prefer.
The options include:

* Pushing directly to the `main` branch.
* Using pull requests as a way to involve the whole team before publishing.
* Using pull requests to incrementally add to the report each day,
  and then merging at the end of a two week period.

Regardless of the workflow chosen, it is important that we strive to keep the git history clean.
This means never force pushing on main, and usually having one commit per new post.
