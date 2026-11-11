# Sankofa Royale Award — sankofaroyaleaward.ca

React 19 + Vite + Tailwind site (originally generated with Readdy). Client: CAWAP (parent org).
Hosting: HostGator shared, cPanel user `irineashu`, server `gator3095.hostgator.com`,
site folder `/home3/irineashu/sankofaroyaleaward.ca`.

## Deploy
- `.github/workflows/deploy.yml`: push to `main` → `npm ci && npm run build` → FTPS upload → live check.
- Target set by repo variable `DEPLOY_TARGET`: `preview` (default, `/preview/`, noindex) or `production` (root).
- Build output is `out/` (not committed). `public/.htaccess` handles SPA routing, https and caching;
  the workflow rewrites it for `/preview/`.
- Never use absolute `/...` paths for local files: the router and assets follow `BASE_PATH`.
- Full owner steps: `docs/DEPLOY.md`.

## Status (10 Nov 2026)
- Live domain still serves the OLD WordPress/Elementor site. This React site goes live only when
  `DEPLOY_TARGET=production` is set (after a cPanel backup).
- Content is stale: gala date 2026-08-09 (`src/pages/home/components/HeroSection.tsx`) has passed, so the countdown shows 00.
- Content is still hard-coded in components/mocks; not yet converted to editable `src/content/` JSON
  (CAWAP pattern: Pages CMS + Sveltia at /admin).
- Stripe checkout depends on Supabase Edge Functions that are not set up.
- brand-dna.md not written yet.
