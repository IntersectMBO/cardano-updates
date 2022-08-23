# Cardano Development Updates

This repository will host updates from the
[cardano](https://github.com/input-output-hk/cardano-node) development teams.

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
