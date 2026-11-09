# FeelCam website

Landing page and privacy policy for [feelcam.emfeld.com](https://feelcam.emfeld.com).
Plain HTML, CSS and a little vanilla JS: no framework and no build step.

| Path | What it is |
|---|---|
| `index.html` | Landing page (structured data for the app, FAQ) |
| `privacy/index.html` | Privacy policy, served at `/privacy/` |
| `assets/css/style.css` | All styles; colors match the App Store art |
| `assets/js/main.js` | Footer year, header line, scroll fade-ins, TelemetryDeck |
| `assets/img/` | Screenshots and photos (WebP), icons, share image |
| `CNAME`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `404.html` | Hosting and SEO |

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Paths are absolute (`/assets/...`), so open it through the server, not as a file.

## Before launch

- **App Store link:** https://apps.apple.com/app/id6826568990 (also the Smart App Banner
  `app-id` in `index.html`).
- **TelemetryDeck:** create an app for the website in TelemetryDeck (set it to "Show Data for a
  blog or static website"), then paste its App ID into `TELEMETRYDECK_APP_ID` in `assets/js/main.js`.
- **App Store badge:** the buttons are plain text. To use Apple's official badge, download it from
  https://tools.applemarketingtools.com and put it inside the `.store-badge` links.

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository, for example `femmerling/feelcam-web`.
2. Repository → Settings → Pages → Build and deployment: Deploy from a branch, `main`, `/ (root)`.
3. Custom domain: `feelcam.emfeld.com` (already in `CNAME`), then tick Enforce HTTPS once it's offered.
4. At your DNS provider for emfeld.com, add a CNAME record: `feelcam` → `femmerling.github.io`.

After it's live, add the site to Google Search Console and Bing Webmaster Tools and submit
`https://feelcam.emfeld.com/sitemap.xml`.
