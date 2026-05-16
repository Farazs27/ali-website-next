# Samen Mondzorg — Dental clinic site

Multi-page website for **Samen Mondzorg**, a dental clinic in Amsterdam-Noord.
Sage-green / cream brand palette, Fraunces serif + Inter sans, fully responsive
and optimized for mobile + in-app webviews.

Built with **Next.js 15** (App Router, React 19, JavaScript) — fully prerendered
static pages, optimized images via `next/image`, and `next/font` for Fraunces +
Inter.

## Pages
- `/` — Home
- `/over-ons` — Over ons (about)
- `/behandelingen` — Behandelingen (treatments)
- `/contact` — Route & contact
- `/afspraak` — Afspraak maken (booking)

Shared design system: `app/globals.css`. Shared chrome:
`components/Header.jsx`, `components/Footer.jsx`, `components/Logo.jsx`.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000/
```

Production build:

```bash
npm run build
npm run start
```

## Brand imagery

The hero, treatment-room and waiting-corner photos in `public/images/` were
generated with [KIE](https://kie.ai/) `gpt-image-2-text-to-image`. To regenerate:

1. Copy `.env.example` to `.env` and set `kie_api_key=...`
2. `zsh generate_images.sh`
3. Move new PNGs from `images/` into `public/images/`.

Prompts and aspect ratios live in `generate_images.sh`.

## Deploy

Deployed via Vercel (project `ali-website`). Push to `main` triggers a
production deploy. To deploy manually:

```bash
vercel --prod
```
