# Hook Lab — Cloudflare caching and missing thumbnails repair

The screenshot shows the page's new Hook Lab HTML without its carousel styling. Your GitHub `_headers` instructs browsers to cache all `/css/*` and `/js/*` files for one year as `immutable`. This update makes HTML request versioned CSS/JS, and changes their future cache policy to `must-revalidate`.

We also confirmed that `assets/hooks/S10.mp4` exists in GitHub while its expected `assets/hooks/S10.jpg` does not. Run the included Git Bash script to create any missing matching JPG thumbnails locally. The script will not replace existing images.

## Installation
1. Back up `D:\Karl Portfolio`.
2. Extract ZIP and copy `index.html`, `css/style.css`, `js/main.js`, `_headers`, `_redirects` and `make_hook_thumbnails.sh` into `D:\Karl Portfolio`, maintaining folders. Keep your `assets/` folder unchanged.
3. Open Git Bash in `D:\Karl Portfolio` and run `bash make_hook_thumbnails.sh`.
4. Review generated JPGs in `assets/hooks/`; check that MP4 filenames and JPG filenames match.
5. Run `git status` then `git add index.html css/style.css js/main.js _headers _redirects make_hook_thumbnails.sh assets/hooks/*.jpg` then `git commit -m "Fix Hook Lab caching and thumbnails"` and `git push origin main`.
6. After a successful Cloudflare deployment, refresh your portfolio with Ctrl+Shift+R or open an incognito tab.

The ZIP does not contain your hook MP4 files. Cloudflare Pages individual files are limited to 25 MiB. If your thumbnails aren't present in the repository, ensure you've committed the generated JPG files.
