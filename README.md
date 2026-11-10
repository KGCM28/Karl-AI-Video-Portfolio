# Karl — AI Video Editor Portfolio

A modern, minimal portfolio website for an AI Video Editor showcasing work in generative video, AI-powered editing, and creative video production.

## Features

- 🎨 **Minimal Dark Blue Theme** — Clean, professional aesthetic inspired by modern creative portfolios
- 🌓 **Dark/Light Mode** — System-aware with manual toggle, persisted in localStorage
- 📱 **Fully Responsive** — Mobile-first design, works beautifully on all devices
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, focus management
- ⚡ **Lightweight** — Vanilla HTML/CSS/JS, no frameworks, fast loading
- 🎬 **Project Showcase** — Filterable portfolio grid with modal detail views
- 🔧 **Services & Process** — Clear service offerings and workflow explanation
- 🛠 **Tech Stack Display** — Organized tool categories

## Quick Start

### Local Development

```bash
# Install dependencies (optional, for local server)
npm install

# Start development server
npm run dev
# or
npx serve .
```

Open http://localhost:3000 in your browser.

### Project Structure

```
karl-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (CSS custom properties, responsive)
├── js/
│   └── main.js         # All JavaScript (theme, filtering, modals, animations)
├── assets/
│   └── thumbnails/     # Project thumbnail images (add your own)
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment
├── package.json
└── README.md
```

## Customization

### Update Portfolio Data

Edit the `portfolioData` array in `js/main.js`:

```javascript
const portfolioData = [
  {
    id: 1,
    title: "Your Project Title",
    category: "ai-generated", // ai-generated | edited | commercial | social
    description: "Project description...",
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    thumbnail: "assets/thumbnails/your-image.jpg",
    videoUrl: "https://your-video-url.com",
    year: 2024
  },
  // Add more projects...
];
```

### Add Thumbnail Images

Place your project thumbnails in `assets/thumbnails/` (recommended: 16:9 aspect ratio, ~680x382px).

### Update Personal Info

Edit `index.html` to customize:
- Name/logo in header and footer
- Hero section copy and stats
- About section content
- Contact information and links
- Social media links in footer

### Colors & Theme

Modify CSS custom properties in `css/style.css`:

```css
:root {
  --accent-primary: #2563eb;    // Primary blue
  --accent-secondary: #06b6d4;  // Accent cyan
  --bg-primary: #0a0e17;        // Dark background
  /* ... more variables */
}
```

## Deployment

### GitHub Pages (Free)

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Source: "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will auto-deploy on push to main

Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)

1. Connect your GitHub repo to Netlify
2. Build command: `echo 'Static site'`
3. Publish directory: `.` (root)
4. Deploy!

### Vercel (Free)

```bash
npx vercel
# Follow prompts, select current directory as root
```

Or connect via Vercel dashboard.

### Cloudflare Pages (Free)

1. Connect GitHub repo in Cloudflare Pages
2. Build command: (leave empty)
3. Build output directory: `.`
4. Deploy!

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **No build step** — pure static files
- **Minimal JS** — ~8KB gzipped
- **CSS custom properties** for efficient theming
- **Intersection Observer** for scroll animations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 landmarks
- ARIA labels and roles
- Focus management in modals
- Keyboard navigation
- Reduced motion support
- High contrast mode friendly

## License

MIT License — feel free to use this as a template for your own portfolio.

---

Built with vanilla HTML, CSS & JS. Inspired by modern creative portfolios.