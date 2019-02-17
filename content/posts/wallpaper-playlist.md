---
title: Wallpaper Playlist for pywal
date: 2019-02-16T11:42:33-05:00
draft: false
---
{{< highlight sh >}}
#!/bin/bash

shuffle_cache="shuffle.txt"
regen_flag=0
dir=""

function usage_msg() {
	# echo "usage: shuffler [-r] [dir_name]"
	cat <<-EOF
	Usage: shuffler [-r] [dir_name]
    -r: regenerate the shuffle cache
	EOF
}

while getopts ":r" opt; do
  case $opt in
	r)
	  echo "-r was triggered!" >&2
	  regen_flag=1
	  ;;
	\?)
	  echo "Invalid flag: -$OPTARG" >&2
	  usage_msg
	  exit 1
	  ;;
  esac
done

shift $((OPTIND-1))
# if no dir, use pwd
if [[ "$#" -eq 0 ]]; then
	dir=$(pwd)
elif [[ "$#" -gt 1 ]] || [[ ! -d "$1" ]]; then
	usage_msg
	exit 1
else
	dir="$1"
fi

# rebuild shuffle cache if regen_flag, doesn't exist or file empty
if [[ "$regen_flag" -eq 1 ]] || [[ ! -f "$dir"/"$shuffle_cache" ]] || \
  [[ $(wc -l "$dir"/"$shuffle_cache" | awk '{print $1}') -eq 0 ]]; then
  find "$dir"/* ! -name "$shuffle_cache" -type f | shuf > \
  "$dir"/"$shuffle_cache"
fi
head -n 1 "$dir"/"$shuffle_cache"
printf '%s\n\n' "$(sed '1d' "$dir"/"$shuffle_cache")" > "$dir"/"$shuffle_cache"
{{< /highlight >}}
