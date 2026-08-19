# MC Panel Redesign + Full Admin Panel (2026-08-14)

Plan: ~/.claude/plans/ancient-conjuring-tome.md
Context: fixed the login outage (container 106 stopped) + basePath 404 bug earlier today.
Now: shadcn/ui redesign + players/metrics/properties/scheduled-backups + backend hardening.

## Todo
- [x] 1. Backend rewrite (app.py): hardening + players/metrics/properties/schedule endpoints
- [x] 2. Frontend foundation: shadcn/ui scaffolding, tokens, vendored components
- [x] 3. Shared infra: api client (put/download/progress), use-poll, status context, sidebar
- [x] 4. LogViewer rewrite: ring buffer, reconnect, first-message WS auth
- [x] 5. Pages: dashboard, players (new), settings (new), backups, mods, login
- [x] 6. Deploy backend to container 106 (panel.service KillMode FIRST) + curl smoke
- [x] 7. Build frontend, Playwright verify, deploy to GitHub Pages

## Review (2026-08-14)
Shipped end to end, verified live at sebkucera.dev/minecraft-server + panel.sebkucera.dev (API v2.0).
- Backend: app.py 535→~900 lines, 32 routes. 36/36 local TestClient tests. Live security
  probes: injection/traversal/CORS all reject correctly. python-jose→PyJWT, psutil added.
  Fresh venv rebuilt on server (old one was a copied macOS venv — Mach-O binaries!).
  panel.service: KillMode=process (panel restarts no longer kill the MC server).
- Frontend: real shadcn/ui (17 vendored components), 2 new pages (players, settings),
  everything client-verified in Playwright against the live API.
- Scheduler proven live: armed for +2min, produced auto_2026-08-14_12-01-01.zip (210MB),
  then set to daily 03:30, retention 7.
- MC server started via the new panel Start button; console `list` round-trip confirmed.
- Deploy gotchas hit: venv built at venv.new then renamed → shebangs broke (venvs are
  not relocatable; rebuild at final path). Old uvicorn hung 90s on SIGTERM (open WS).
- Left on server: /srv/panel/app.py.broken and a junk file "udo lsof -i :25565" (pre-existing).

## Follow-up round (same day)
- [x] Offline player management: deop/whitelist/ban edits write the JSON files directly when
  the server is down (root cause of "deop button doesn't work" — server was stopped).
  Dedupe of double UUID entries (online-mode switch legacy). 18 new tests.
- [x] Server icon upload in Settings (client-side 64×64 canvas resize, backend PNG validation).
- [x] Mods: filter box, checkbox multi-select + bulk enable/disable/delete.
- [x] Browse Modrinth dialog: search fabric/1.21.1 mods, one-click server-side install
  (cdn.modrinth.com allowlist, SSRF-guarded). Verified live: installed Chunky-Fabric-1.4.23.
- [x] (2026-08-15) Modrinth dialog: browse-on-open (popular + category chips); fixed
  Install button invisible in WebKit (Radix ScrollArea display:table viewport → plain div).
- [x] (2026-08-15) Dynmap: installed 3.7-beta-8 fabric via panel, /map proxy in backend
  (dynmap web on 127.0.0.1:8123 isn't NAT-forwarded), Map tab with iframe. Fullrender
  triggered. NOTE: /map is intentionally unauthenticated (iframe + read-only).
- [x] (2026-08-15) Server migrated to Minecraft 26.2: fresh world, no modpack.
  Better MC preserved at /minecraft/old-bettermc-2026-08-15 + zip backup.
  Temurin 25 (/opt/java25, MC_JAVA env), Fabric 0.19.3, fabric-api + BlueMap 5.23
  (Dynmap has no 26.2 build; map proxy now → 8100). Heap 2-6G. Modrinth browser
  reads MC version from backend (PANEL_MC_VERSION). MOTD queued for next restart.

---

# Fresh Portfolio Rebuild — sebkucera.dev

## Context
Sebastian wants a completely new root site: minimal, clean, premium, **light mode**,
with tasteful easter eggs. Stack decision: **React + Tailwind** (Vite), one-page,
legacy folders (incl. /studio, /trefa, old demos) left untouched.

Current setup discovered:
- Root site = Vite React app in `react-src/` (dark purple design, Tailwind 3, GSAP/three).
- Deploy model: build → copy `index.html` + hashed `assets/` to repo root; GitHub Pages
  serves the branch directly (CNAME, .nojekyll). Root `assets/` holds only stale Vite
  bundles (safe to prune), images live in `site public/images`.
- Contact form posts to Formspree `https://formspree.io/f/xgoaydbn` — reuse.

## Content inventory (reused from old site)
- Sebastian Kučera — Swift & React developer, SW Eng student @ Unicorn University, Prague.
- Stats: 5+ yrs coding, 3 apps on App Store, 10+ projects shipped. Available for work.
- Projects: ShadowLift, Habit Owl, MealPrepAI, CC Settings, ApplyTailor, Autoškola Trefa,
  Claude Code for iOS, Real Estate Demo, Restaurant Demo, Local Coder (links + images in
  `react-src/public/images/`).
- Skills: Swift, SwiftUI, React, TypeScript, JS, Tailwind, Java, SQL, AI-assisted dev, Git.
- Services: iOS apps / Web / Consulting + 4-step process.
- Contact: sebastian.kucera@icloud.com · GitHub Rektoooooo · LinkedIn sebastian-kucera ·
  Instagram seb.kuc.

## Design direction
Light editorial minimalism: warm off-white paper background, near-black ink text,
one accent color, big display typography, hairline rules, numbered sections,
generous whitespace, subtle scroll reveals. No three.js/GSAP — small hooks + CSS only.
Respect `prefers-reduced-motion`.

Easter eggs (tasteful): console ASCII greeting, Konami-code party mode,
click-the-name surprise ("Ahoj! 🇨🇿"), Habit Owl peeking at the footer.

## Todo
- [x] Scaffold new Vite + React + Tailwind v4 app in `site/` (fresh source, react-src stays as archive)
- [x] Copy needed images from `react-src/public/` into `site/public/` (downscaled 5.5 MB → 1.7 MB via sips)
- [x] Build sections: Nav, Hero, Selected Work, About, Skills, Services + contact form, Footer
- [x] Easter eggs: console art, Konami mode, name click, owl peek
- [x] `npm run build` + deploy script: copy dist → repo root, prune stale `assets/index-*`
- [x] Verify with Playwright: desktop + mobile screenshots, click-through, console clean
- [x] Update HOW-TO-EDIT.md to point at `site/`
- [x] Review section below

## Review (v3 — Claude Design import, 2026-08-07)
User supplied a claude.ai/design project ("Sebastian Kucera - Site Directions").
Implemented it faithfully in the existing React app: dotted-grid #F6F7F9 bg,
Space Grotesk + JetBrains Mono, cobalt #1D4ED8 + marker-yellow #FFE14D,
black-border cards with 6px offset hover shadow, floating hero cards over blue
arch, outlined giant "About Me", black "Let's talk." contact band.
Content swapped from design placeholders to real: 6 real projects (ShadowLift,
Habit Owl, MealPrepAI, CC Settings, DrivePass, ApplyTailor), real email,
fake testimonials replaced with "how I work" value cards, "BOOK A CALL" →
"SAY HELLO" mailto, "SHIPPING SINCE 2024" → "SHIPPING FROM PRAGUE" (year unverifiable).
Eggs + Prague clock kept, recolored. Verified desktop/mobile, 0 console errors,
deployed to root, legacy paths intact.

## Review (v2 — bento redesign, 2026-08-04)
User rejected the editorial-serif v1 and supplied a reference (friendly bento style).
Rebuilt visual layer in place:
- Gabarito font, cool light-gray bg, orange accent, white rounded cards with floating
  chip labels, inline avatar in the "Hi, I'm Sebastian!" headline, "Open to work" pill.
- Content trimmed per user: hero + 6 bento cards (journey timeline, apps, stack,
  Prague clock, more projects incl. drivepass.cz + StayAwake + CC Settings, how I work)
  + big footer CTA. Dropped services columns, process, contact form (email copy button
  instead), archive table, marquee.
- Easter eggs kept: Konami confetti (re-palettized), 5×-click logo Czech mode, owl
  peek, console art. Live Prague clock now a bento card.
- Verified desktop + mobile in Playwright, all images load, no console errors; root
  deploy re-verified (assets pruned/replaced, legacy paths untouched).

## Review (v1 — editorial serif, superseded)
Shipped a complete light-mode rebuild ("editorial paper" direction):
- New app in `site/` — React 19 + Vite 7 + Tailwind v4, no heavy deps (dropped
  three.js/GSAP/lenis). Bundle: 69 KB gzip JS + 7 KB CSS.
- All content centralized in `site/src/content.js`.
- Design: Instrument Serif display + Instrument Sans + JetBrains Mono micro-labels,
  warm paper bg + ink + persimmon accent, numbered sections, hairline rules, grain
  overlay, skills marquee, inverted-ink contact panel (Formspree wired), live Prague
  clock. `prefers-reduced-motion` respected.
- Easter eggs: console ASCII greeting, Konami confetti party mode, 5× name click →
  "Ahoj! 🇨🇿", Habit Owl peeking at the footer with App Store link.
- Deploy: `site/deploy.sh` (via `npm run deploy`) copies build to repo root and prunes
  old hashed bundles. Verified with a local server: root 200 + zero console errors,
  /studio, /trefa, and all legacy demo paths still serve.
- Verified in Playwright at 1440px and 390px; all images load; eggs tested.
- Not committed — awaiting user go-ahead.
