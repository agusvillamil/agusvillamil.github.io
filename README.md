# agusvilla.dev.ar

Personal portfolio of Agustín Villamil, junior full-stack developer.

Built with React, TypeScript and Vite. No UI framework: styles are plain CSS with tokens in `src/styles.css`, and the scroll reveal uses `IntersectionObserver`.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Every visible string, in English and Spanish, lives in `src/content.ts`. Project screenshots go in `public/projects/` at 1280x800, and the CVs in `public/cv/`.

Add `?lang=es` to the URL to open the Spanish version directly.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
