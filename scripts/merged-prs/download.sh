#!/bin/bash

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 repository start_date end_date" >&2
  echo "Example: $0 input-output-hk/cardano-node newhoggy 2023-02-22 '2023-02-22 +14 days'" >&2
  exit 1
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  date_cmd=gdate
else
  date_cmd=date
fi

repository="$1"
start_date="$("$date_cmd" -u -d "$2" +"%Y-%m-%dT%H:%M:%SZ")"
end_date="$("$date_cmd" -u -d "$3" +"%Y-%m-%dT%H:%M:%SZ")"

mkdir -p merged-prs

gh pr list --repo "$repository" \
  -L 1000 \
  --state all \
  --json number,title,author,createdAt,closedAt,files,mergedAt,baseRefName,url \
  > merged-prs/download.json

cat merged-prs/download.json | yq -P > merged-prs/download.yaml

cat merged-prs/download.json | jq -r "$(
cat <<EOF
  map
  ( select
    ( true
      and (.baseRefName = "master")
      and (.mergedAt >= "$start_date")
      and (.mergedAt < "$end_date")
    )
  | { "title": .title
    , "author": .author.name
    , "url": .url
    , "number": .number
    , "files": .files | map(.path)
    }
  )
EOF
)" > merged-prs/filtered.json

cat merged-prs/filtered.json | yq -P > merged-prs/filtered.yaml
