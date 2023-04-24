#!/usr/bin/env bash

set -euo pipefail

mkdir -p merged-prs/summary

for path in merged-prs/detail/*.yaml; do
  file="$(basename $path)"
  target="${file%.yaml}.md"

  for pr in $(cat "merged-prs/detail/$file" | yq -o json | jq '.[] | .number'); do
    tmp_file="$(mktemp).json"
    cat "merged-prs/detail/$file" | yq -o json | jq '.[] | select(.number == '$pr')' > "$tmp_file"
    cat "$tmp_file" | jq -r '"- [\(.title)](\(.url)) by \(.author)"' >> "merged-prs/summary/$target"
  done
done
