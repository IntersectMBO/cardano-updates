# Cardano Development Updates

This repository will host updates from the
[cardano](https://github.com/input-output-hk/cardano-node) development teams.
The generated website containing the updates can be found
[here](https://input-output-hk.github.io/cardano-updates/).

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

## Usage

To add an update create a file under `posts` directory which name is:
`yyyy-mm-dd-TEAM.md`. Commit and push.  The site will be built and deployed by a
[github-action](https://github.com/input-output-hk/cardano-updates/actions).

The format of the posts is up to each team, but it should include a header
section that looks like:

```
---
title: Networking Team Update
slug: 2022-10-04-db-sync
authors: coot
tags: [network]
hide_table_of_contents: false
---
```

Each post should also start with a `## High level summary` section that will be
used by technical writers to share information with the general public.  The
better suited this section is for the technical writers, the less chance there
is for misinformation. It should ideally be one short paragraph.

Note that docusourus accepts headers of level `>= 2`, otherwise the initial
header is lost.

Avoid using links which are not publicly accessible.

### Authors

As per the [docusaurus blog](https://docusaurus.io/docs/blog#blog-post-authors) documentation, authors for a given blog post are provided as a YAML structure defining various properties. This can become cumbersome over time so there's a builtin mechanism to have an author's properties been defined once and then reused everywhere. Check the [blog/authors.yml](./blog/authors.yml) for examples.

## Workflow

Each team is welcome to use whatever workflow that they prefer.  The options
include:

* Pushing directly to the `main` branch.
* Using pull requests as a way to involve the whole team before publishing.
* Using pull requests to incrementally add to the report each day, and then
  merging at the end of a two week period.

Regardless of the workflow chosen, it is important that we strive to keep the
git history clean.  This means never force pushing on main, and usually having
one commit per new post.

## Local Development

One needs to install `yarn` and `nodejs`.  A basic `shell.nix` is provided so
it's straightforward to enter `nix-shell` and use the provided `yarn`
executable.

:warning: The `yarn` package from Debian has nothing to do with the yarn we use
here!

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser
window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

This is normally handled automatically through the [CI
Workflow](.github/workflows/pages.yml) by pushing changes to `gh-pages` branch
but should one need to deploy those pages manually, for example for testing
purpose, follow these instructions:

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
