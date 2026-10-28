# How to edit sebthe.dev

(The repo is still called `sebkucera.dev`; the site moved to **sebthe.dev** on 2026-10-28.
The domain is set by the `CNAME` file in the repo root.)

The root site is a React + Vite app that lives in **`site/`**. Plain CSS, no UI libraries.
(The previous version's source is archived in `react-src/` — no longer used.)

## The idea

You land on a Mac lock screen ("Sebastian" is the clock). Scrolling types the password and
unlocks it into an App Store window. Every app has its own App Store–style page at
`#/app/<id>`; the real link (App Store, GitHub, website) only sits behind its blue button.
Phones get the iPhone version: Face ID padlock, "Swipe up to open", App Store Today and a tab bar.
The site is always light mode.

## Edit content

Everything you'd want to change lives in one file: **`site/src/content.js`**.

- `APPS` — one entry per app: name, subtitle, icon, the blue button (`action`), the facts
  strip, screenshots, description, highlights and the Information table.
- `DISCOVER` — which apps go where on the Discover page (featured, App Store, Mac, More).
- `NOTIFICATIONS` — the three lock-screen notifications.
- `DOCK` — the apps in the Mac Dock (`null` draws a divider).
- `ME`, `ABOUT`, `FACTS`, `STACK`, `LINKS` — your name, pitch, bio, quick facts, tools and links.
- `SERVICES`, `HIRE` — "What I do" and the "Need an app or a website for your business?" card.
- `WHATS_NEW` — the sidebar's "What's new" card (point it at an app id).
- `SYSTEM_INFO`, `SPOTLIGHT_JOKES` — the easter eggs below.

To add an app: put a 256×256 icon in `site/public/img/apps/<id>.webp`, screenshots in
`site/public/img/shots/<id>-<n>.webp` (phones ~560px wide, Mac shots ~1400px wide), then add
an entry to `APPS` and list its id in `DISCOVER`.

Layouts live in `site/src/components/`, the unlock animation in `site/src/hooks/useUnlock.js`
plus the `--p` variables at the top of `site/src/index.css`. How much scrolling the unlock takes is
`--unlock-extra` there (one screen plus this; 100vh on a Mac, 80vh on phones).

The lock screen's weather widget is live: visitors' browsers ask Open-Meteo (free, no key) for
Prague's current weather, cached for 15 minutes. If it can't be reached the widget just stays hidden.

## Live data (refreshed on every deploy)

`npm run data` (also run by `npm run deploy`) takes two snapshots into `site/src/data/`. If a source
can't be reached, the previous snapshot is kept, so a deploy never fails because of it.

- `releases.json` — each app's latest version, date and release summary for the "What's New"
  sections and the About timeline. Apps with `repo` in `content.js` use their GitHub releases;
  apps with `appStoreId` use Apple's public lookup API.
- `github.json` — the contribution grid (see below).

## GitHub activity card

The contribution grid and stats come from `site/src/data/github.json`, a snapshot taken by
`site/scripts/github-activity.mjs`. The grid is read from your public GitHub profile, so it shows
exactly what visitors see there — work in private repos only counts if **Contribution settings →
Private contributions** is switched on (on your GitHub profile). Repo stats use the GitHub CLI
(`gh auth login`). `npm run deploy`
refreshes it automatically; `npm run data` refreshes it on its own. If `gh` isn't available the
old snapshot is kept, so a deploy never fails because of it.

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
Every other top-level folder (`/habitowl`, `/trefa`, `/studio`, `/minecraft-server`, old demos…)
is a separate page and is never touched.

## Easter eggs (yes, they're intentional)

- Click the logo in the menu bar → About This Developer (a draggable "About This Mac"), Sleep, Lock Screen
- ⌘K (or /) → Spotlight: jump to any app or section; try "coffee", "password", "sudo hire"
- The Battery and Wi-Fi menus in the menu bar
- Click your avatar (header, About card or sidebar) → About This Developer
- Konami code (↑ ↑ ↓ ↓ ← → ← → B A) → confetti and a Mac notification
- The footer's "Lock Screen" button scrolls back up and locks the Mac again
- Open the browser console for a greeting
