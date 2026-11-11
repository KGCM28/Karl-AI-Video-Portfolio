#!/usr/bin/env bash
# Git Bash: create missing JPG thumbnails from existing hook MP4s.
set -euo pipefail
cd "$(dirname "$0")"
command -v ffmpeg >/dev/null || { echo 'FFmpeg is required.' >&2; exit 1; }
shopt -s nullglob
videos=(assets/hooks/*.mp4)
(( ${#videos[@]} > 0 )) || { echo 'No files in assets/hooks/' >&2; exit 1; }
created=0
for video in "${videos[@]}"; do
  jpg="${video%.mp4}.jpg"
  if [[ -f "$jpg" ]]; then echo "Exists: $jpg"; continue; fi
  echo "Creating: $jpg"
  if ffmpeg -hide_banner -loglevel error -y -ss 0.15 -i "$video" \
    -frames:v 1 -vf "scale=w='min(540,iw)':h=-2:flags=lanczos" -q:v 4 "$jpg"; then
    ((created+=1))
  else
    echo "Could not create thumbnail for $video" >&2
  fi
done
echo "Done: $created thumbnails created."
