# How to edit sebkucera.dev

The root site is a React + Vite + Tailwind v4 app that lives in **`site/`**.
(The previous version's source is archived in `react-src/` — no longer used.)

## Edit content

Almost everything you'd want to change (projects, skills, links, services,
contact info, stats) lives in one file: **`site/src/content.js`**.

Section layouts live in `site/src/components/`. Images go in `site/public/img/`.

## Preview locally

```bash
cd site
npm install     # first time only
npm run dev     # open http://localhost:5173
```

## Publish

```bash
cd site
npm run deploy   # builds and copies the output to the repo root
cd ..
git add . && git commit -m "Update site" && git push
```

GitHub Pages serves the repo root directly — `deploy` copies `index.html`,
`assets/`, `img/`, and `favicon.svg` there and prunes old hashed bundles.
Legacy folders (`/studio`, `/trefa`, old demos) are never touched.

## 3D hero (Spline)

The hero can show an interactive Spline scene instead of the floating cards:

1. In Spline, **Remix** the scene you like into your workspace.
2. (Optional) Edit the key labels; set the scene background to transparent.
3. **Export → Code**, copy the URL ending in `scene.splinecode`.
4. Paste it into `SPLINE.scene` in `site/src/content.js`.

Clicks on scene objects are mapped in `SPLINE.actions` (object name → `#section`,
`mailto:`, `party` for confetti, `toast:…`). `SPLINE.zoom` sets the camera zoom
(0.4 fits the keyboard; it's absolute, smaller = further out). The cursor-follow
is damped in code (`FOLLOW_DAMP` in `SplineScene.jsx`, 0–1). Falls back to the
floating cards on mobile, reduced-motion, and while loading.

Removing the "Built with Spline" badge requires a paid Spline plan — enable
"hide logo" there and re-publish; the same scene URL updates in place.

## Easter eggs (yes, they're intentional)

- Konami code (↑ ↑ ↓ ↓ ← → ← → B A) → confetti party mode
- Clicking the name in the nav 5× → Czech mode
- An owl peeks from the corner when you reach the footer
- Open the browser console for a greeting
