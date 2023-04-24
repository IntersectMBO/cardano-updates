#!/usr/bin/env bash

set -euo pipefail

mkdir -p merged-prs/detail

for dir in $(cat merged-prs/filtered.yaml | yq -o json | jq -r 'map(.files[]) | flatten | sort | unique | map(split("/") | select(length > 1) | .[0]) | sort | unique | .[]'); do
  cat merged-prs/filtered.yaml | yq -o json | jq '
    map
    ( select
      ( .files
      | map
        ( split("/")
        | .[0]
        )
      | sort
      | unique
      | map(select(. == "'$dir'"))
      | (length > 0)
      )
    )' | yq -P > merged-prs/detail/$dir.yaml
done

cat merged-prs/filtered.yaml | yq -o json | jq '
    map
    ( select
      ( .files
      | map
        ( split("/")
        | select
          ( length == 1
          )
        | .[0]
        )
      | (length > 0)
      )
    )
    ' | yq -P > merged-prs/detail/top.yaml
