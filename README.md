# GymFactor marketing site

Next.js 15 (App Router, TypeScript) rebuild of the GymFactor marketing site.
Same design language as the iOS app — dark theme, lime accent, Plus Jakarta Sans.

Configured for **static export** (`output: "export"` in `next.config.mjs`), so
`npm run build` produces a plain `out/` folder of HTML/CSS/JS that can be hosted
anywhere: Hostinger, Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3…

## Requirements

- Node.js 18.18+ (20 LTS recommended) — install with `brew install node` or from nodejs.org

## Local development

```bash
cd site
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # -> site/out/   (static files)
npm run serve        # preview the built out/ folder locally
```

## Project layout

```
src/
  app/
    layout.tsx        root layout, <head> metadata, next/font
    page.tsx          landing page
    terms/page.tsx    Terms & Conditions
    privacy/page.tsx  Privacy Policy
    not-found.tsx     404 (exported as out/404.html)
    globals.css       design tokens + all styles (ported 1:1 from the old site)
    icon.svg          favicon (the GymFactor "F" mark)
  components/
    SiteHeader.tsx  SiteFooter.tsx  AppStoreButton.tsx  LegalShell.tsx
  lib/
    config.ts         APP_STORE_URL, CONTACT_EMAIL, SITE_URL  ← edit these here
public/
  assets/mark.svg  assets/logo.svg
  .htaccess         Apache/LiteSpeed rules (HTTPS + www redirect, 404, caching)
```

## Things to update before launch

- **`src/lib/config.ts`** — replace `APP_STORE_URL` (`idXXXXXXXX` placeholder) with
  the real App Store listing URL. It feeds every "Download" button on the site.
- App Store Connect — set the legal URLs to `https://www.gymfactor.app/terms` and
  `/privacy` (the iOS app's `LegalConfig.swift` already points there).

## Deploy

### Option A — Hostinger (static upload, matches the current setup)

```bash
cp site/.deploy.env.example site/.deploy.env   # fill in SSH details
./site/deploy.sh                               # builds, then rsyncs out/ to the server
```

`public/.htaccess` is included in the build output and handles the
`https://www.gymfactor.app` canonical redirect + custom 404 on Hostinger.
No SSH on your plan? Build locally, then upload the **contents of `out/`** into
`public_html` via hPanel File Manager (same as the old static site).

### Option B — Vercel

Import the repo, set **Root Directory = `site`**. Framework preset auto-detected.
`.htaccess` is ignored by Vercel; set the primary domain to `www.gymfactor.app`
in the Vercel dashboard so the apex redirects there.

---

The pre-Next static version still lives in `../web/` — safe to delete once this
site is verified live.
