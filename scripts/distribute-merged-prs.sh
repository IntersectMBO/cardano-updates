#!/usr/bin/env bash

set -euo pipefail

(yq --version | grep https://github.com/mikefarah/yq/ > /dev/null) || {
  echo "Please install yq from https://github.com/mikefarah/yq/" > /dev/stderr
  exit 1
}

if [ "$#" -ne 4 ]; then
  echo "Usage: $0 repository sub_dir start_date end_date" >&2
  echo "Example: $0 IntersectMBO/cardano-node v8.0.0 2023-02-22 '2023-02-22 +14 days'" >&2
  exit 1
fi

if [[ "$(uname -s)" == "Darwin" ]]; then
  date_cmd=gdate
else
  date_cmd=date
fi

repository_url="$1"
subdir="$2"
start_date="$("$date_cmd" -u -d "$3" +"%Y-%m-%dT%H:%M:%SZ")"
end_date="$("$date_cmd" -u -d "$4" +"%Y-%m-%dT%H:%M:%SZ")"
repository_name="$(basename "$repository_url" ".git")"

echo "Start date: $start_date"
echo "End date: $end_date"


work_dir="gen/$repository_name"
work_subdir="$work_dir/$subdir"
download_file="$work_dir/download.yaml"
filtered_file="$work_subdir/filtered.yaml"

mkdir -p "$work_dir"
mkdir -p "$work_subdir"
mkdir -p "$work_subdir/detail"

cat "$download_file" | yq -o json | jq -r "$(
cat <<EOF
  map
  ( select(
      (.baseRefName == "master" and .mergedAt >= "$start_date" and .mergedAt <= "$end_date") or
      (.baseRefName == "main" and .mergedAt >= "$start_date" and .mergedAt <= "$end_date")
    )
    | { "title": .title
      , "author": .author.name
      , "url": .url
      , "number": .number
      , "mergedAt": .mergedAt
      , "include": "undecided"
      , "files": .files | map(.path)
    }
  )
EOF
  )" \
  | yq -P > "$filtered_file"

for dir in $(
    cat "$filtered_file" \
      | yq -o json \
      | jq -r '
            map (.files[])
          | flatten
          | sort
          | unique
          | map
            ( split("/")
            | select(length > 1)
            | .[0]
            )
          | sort
          | unique
          | .[]'); do
  cat "$filtered_file" | yq -o json | jq '
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
    )' | yq -P > "$work_subdir/detail/$dir.yaml"
done

cat "$filtered_file" | yq -o json | jq '
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
    ' | yq -P > "$work_subdir/detail/top.yaml"

echo "Output generated in $work_subdir/detail"
