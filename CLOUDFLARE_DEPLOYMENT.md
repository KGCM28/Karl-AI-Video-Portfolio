# Cloudflare Pages Deployment Guide

## ⚠️ Important: Video Hosting Limitation

**Cloudflare Pages has a 25MB file size limit per file.** Your videos are:
- `Flexora_v5_watermark.mp4` - 50.3 MB ❌
- `Velare_Pixar_H3_final.mp4` - 44.7M ❌

**Solution: Host videos externally** and update the video player to use external URLs.

---

## Recommended Video Hosting Options

| Platform | Free Tier | Max File | Notes |
|----------|-----------|----------|-------|
| **Cloudflare Stream** | $5/mo for 1000 min | No limit | Best integration with Cloudflare, adaptive streaming |
| **Vimeo** | 500MB/week | 5GB total | Professional, customizable player |
| **YouTube** | Unlimited | Unlimited | Free, but shows YouTube branding |
| **Bunny Stream** | $1/mo + $0.50/GB | No limit | Cost-effective, fast CDN |
| **Mux** | $0.005/min | No limit | Developer-focused, adaptive streaming |

---

## Quick Setup: Cloudflare Stream (Recommended)

1. **Enable Cloudflare Stream** in your Cloudflare dashboard
2. **Upload videos** to Stream (no size limit)
3. **Get playback URLs** from Stream dashboard
4. **Update video URLs** in `index.html`:

```html
<video class="video-player" id="mainVideoPlayer" controls preload="metadata" poster="assets/video-poster.jpg" playsinline webkit-playsinline>
    <source src="https://customer-xxxxx.cloudflarestream.com/xxx/manifest/video.m3u8" type="application/x-mpegURL">
    <source src="https://customer-xxxxx.cloudflarestream.com/xxx/downloads/default.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

---

## Quick Setup: Vimeo (Alternative)

1. **Upload to Vimeo** (Pro plan recommended for no branding)
2. **Get embed URL** from Vimeo (Settings → Embed)
3. **Update video player** in `index.html`:

```html
<video class="video-player" id="mainVideoPlayer" controls preload="metadata" poster="assets/video-poster.jpg" playsinline webkit-playsinline>
    <source src="https://player.vimeo.com/progressive_redirect/playback/xxx/xxx.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

---

## Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Deploy to Cloudflare Pages"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - **Build command**: `npm run build` (or leave empty for static)
     - **Build output directory**: `.` (root)
     - **Root directory**: `/`

3. **Deploy** - Cloudflare will build and deploy automatically

### Option 2: Direct Upload (Wrangler)

```bash
npm install -g wrangler
wrangler pages deploy . --project-name=karl-portfolio
```

---

## Required Files for Deployment

Ensure these files exist in your repo:
```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── Profile1.png.bak
│   ├── flag-philippines.svg
│   ├── flag-philippines.svg.bak
│   ├── profile-placeholder.svg
│   ├── video-poster.jpg
│   ├── thumbnails/
│   │   ├── flexora.jpg
│   │   └── velare.jpg
│   ├── thumbnails/ (other thumbnails if needed)
├── _headers
├── _redirects (optional)
└── package.json
```

**Important**: Do NOT commit large video files (.mp4) to git. Use `.gitignore`:

```gitignore
# Ignore large video files
*.mp4
*.mov
*.avi
*.mkv
*.webm

# But keep thumbnails
!assets/thumbnails/
```

---

## Post-Deployment Checklist

- [ ] Videos load and play correctly
- [ ] Profile image loads
- [ ] Thumbnails load
- [ ] Navigation works
- [ ] Contact form/links work
- [ ] Mobile responsive
- [ ] Theme toggle works (if kept)
- [ ] Video plays on mobile
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

---

## Custom Domain Setup (Optional)

1. In Cloudflare Pages → Custom domains
2. Add your domain (e.g., `karlghianmercado.com`)
2. Add DNS records in Cloudflare DNS:
   - Type: CNAME
   - Name: `@` (or `www`)
   - Target: `your-project.pages.dev`
   - Proxy: On (orange cloud)

---

## Video Poster Image

Create `assets/video-poster.jpg` (1920x1080) as a fallback thumbnail. This displays before the video loads.

---

## Cost Estimate

| Service | Monthly Cost |
|---------|--------------|
| Cloudflare Pages | Free |
| Cloudflare Stream | $5/mo (1000 min) |
| Custom Domain | Free (with Cloudflare) |
| **Total** | **~$5/mo** |

---

## Support

- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Cloudflare Stream: https://developers.cloudflare.com/stream/
- Vimeo API: https://developer.vimeo.com/