#!/usr/bin/env bash

set -euo pipefail

(yq --version | grep https://github.com/mikefarah/yq/ > /dev/null) || {
  echo "Please install yq from https://github.com/mikefarah/yq/" > /dev/stderr
  exit 1
}

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 repository" >&2
  echo "Example: $0 input-output-hk/cardano-node" >&2
  exit 1
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  date_cmd=gdate
else
  date_cmd=date
fi

repository="$1"
date="$2"

out_dir="gen/$repository"

mkdir -p "$out_dir"

temp_json_file="$(mktemp).json"

# Find a reasonable number for -L
max_pr_number="$(gh pr list --repo "$repository" --state all --search "created:>=$date" -L 1000 --json number | jq length)"

echo "Downloading up to $max_pr_number PRs"

gh pr list --repo "$repository" \
  -L "$max_pr_number" \
  --state all \
  --json number,title,author,createdAt,closedAt,files,mergedAt,baseRefName,url,body \
  > "$temp_json_file"

cat "$temp_json_file" | yq -P > "$out_dir/download.yaml"
