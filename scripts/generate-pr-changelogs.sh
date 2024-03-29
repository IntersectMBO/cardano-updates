#!/usr/bin/env bash

repository="$1"
subdir="$2"
commit_range="$3"

work_dir="gen/$repository"
work_subdir="$work_dir/$subdir"
download_file="$work_dir/download.yaml"

trim() {
    local trimmed=$1
    # Remove leading whitespace
    trimmed=${trimmed##+([[:space:]])}
    # Remove trailing whitespace
    trimmed=${trimmed%%+([[:space:]])}
    printf '%s' "$trimmed"
}

extract_changelog() {
  local in_changelog=false

  # Read from stdin
  while IFS= read -r line; do
    trimmed_line=$(trim "$line")

    echo ">>>> $line ]"

    if [[ $trimmed_line == "# Changelog" ]]; then
      in_changelog=true
    elif [[ $trimmed_line == "# "* ]]; then
      in_changelog=false
    fi

    if [ "$in_changelog" = true ]; then
      echo "$line"
    fi
  done
}

select_notable() {
  yq -o json \
    | jq -r '
          ["feature", "bugfix"] as $notable
        | if length == 0 then
            true
          elif .[0] | [.type] | flatten | any([.] | inside($notable)) then
            true
          else
            halt_error(1)
          end
      ' \
    > /dev/null 2> /dev/null
}

temp_changelog_yaml="$(mktemp)"

for pr_number in $(
      git log --merges --oneline "$commit_range" \
    | sed 's|^[0-9a-z]\+ Merge pull request #\([0-9]\+\) .*$|\1|g'
    ); do
  cat "$download_file" | yq -o json | jq -r "$(
    cat <<-JQ
      .[] | select(.number == $pr_number) | .body
JQ
    )" \
      | awk '/# Changelog/{flag=1;next}/^#/{flag=0}flag' \
      | awk '/^```yaml/{flag=1;next}/^```/{flag=0}flag' \
      > "$temp_changelog_yaml"

  if cat "$temp_changelog_yaml" | select_notable; then
    if [ -s "$temp_changelog_yaml" ]; then
      cat "$temp_changelog_yaml" \
          | yq -o json \
          | jq -r "$(
              cat <<-JQ
                  .[]
                | ([.type] | flatten | join(", ")) as \$type_string
                | "- \(.description | gsub("^[[:space:]]+|[[:space:]]+$"; "") | gsub("\n"; "\n  "))\n  (\(\$type_string); \(.compatibility))"
JQ
          )"
    else
      echo "- <missing changelog>"
    fi

    cat "$download_file" | yq -o json | jq -r "$(
      cat <<-JQ
        .[] | select(.number == $pr_number) | "  [PR \(.number)](\(.url))"
JQ
    )"

    echo
  fi
done
