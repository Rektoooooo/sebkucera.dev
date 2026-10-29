# Root site redesign: Mac lock screen → App Store (2026-10-28)

Direction (approved by Seb): A+B combo. Mac lock screen hero ("Sebastian" as the clock,
notifications, password dots) unlocks on scroll into a Mac App Store window (B layout).
Phones get the iPhone version (Face ID padlock, swipe up, App Store Today + tab bar).
Prototype: session scratch `mockups/ab-unlock.html`.

Seb's change requests: always light mode · cleaner Dock/tab bar with better animation ·
more GitHub projects · clicking an app opens an in-site App Store product page (real link
only behind its button).

## Todo
- [x] 1. Assets: real icons + screenshots → `site/public/img/{apps,shots}` (WebP, sized)
- [x] 2. `content.js`: every app's product-page data (facts only from READMEs / App Store)
- [x] 3. Components: Wallpaper, MenuBar, LockScreen, Window(Sidebar, Discover, AppPage), Dock, TabBar
- [x] 4. Hooks: scroll unlock (--p), hash routes `#/app/<id>`, Prague clock, scroll spy, Konami
- [x] 5. Dock: cursor magnification, launch bounce, tooltips, autohide; tab bar sliding pill
- [x] 6. Drop Spline + Tailwind deps and old components; update HOW-TO-EDIT.md
- [x] 7. Verify: build, bundle size, desktop + phone screenshots, no overflow, reduced motion
- [ ] 8. Confirm other top-level folders untouched; ask Seb before commit/deploy

## Review (2026-10-28)
- Built in `site/`: lock screen → App Store window, 10 app pages (6 featured + 4 from GitHub:
  MealPrepAI, MyCarTally, ApplyTailor, Computational Redstone), Dock with cursor magnification,
  launch bounce, tooltips, autohide, GitHub + Mail tiles; iPhone tab bar with a sliding pill.
- Weight: first load 174 KB / 15 requests (was ~4.5 MB with Spline). JS 73 KB gz, CSS 7 KB gz.
  Screenshots (1.5 MB total) only load when their app page opens.
- Dropped deps: @splinetool/*, tailwindcss, @tailwindcss/vite.
- Verified in Chromium at 1440×900 and 390×844: no horizontal overflow, every image keeps its
  aspect ratio, routing (card → page → Back restores scroll; Esc; deep links), Konami, reduced motion.
- Bugs caught on the way: class-name clashes (`.mac`, `.discover`) restyling other elements;
  HTML width/height attributes overriding CSS aspect-ratio (stretched icons); the page slide-in
  making phones 32px too wide (fixed with `overflow-x: clip` on `.content`).
- Facts not on the site on purpose: DrivePass has no App Store listing yet; MealPrepAI/MyCarTally
  link to GitHub (no confirmed listing); ApplyTailor's dashboard screenshot shows Seb's email.
- Not deployed. Root `index.html`/`assets/`/`img/` untouched until `npm run deploy`.

## Polish round (Seb, same day)
Asked for: fuller sidebar, an About section (what I do), a "website or app for your business?"
contact, easter eggs, a GitHub card with the contribution grid.
- [x] Sidebar: Spotlight search field, About + Hire me items, What's new (Bow 0.1), availability card
- [x] About section: Meet the developer, GitHub activity card (build-time snapshot), What I do
- [x] Business CTA ("Need an app or a website for your business?") with Email + Copy email
- [x] Menu bar: logo menu (About This Developer window, Spotlight, Sleep, Lock Screen), battery/Wi-Fi menus
- [x] Spotlight (⌘K): search apps, sections, actions, a few joke answers
- [x] `scripts/github-activity.mjs` runs before deploy; keeps the old snapshot if `gh` fails
- [x] Re-verify desktop + phone, overflow, aspect, build size
- Result: first load 182 KB / 15 requests; JS 79 KB gz, CSS 9 KB gz. All checks re-run on the
  production build (unlock frames, 390px width, image aspect, routing, Konami, reduced motion).
- GitHub card now reads the public profile calendar (API fallback) + month/weekday labels. Seb sees
  2,188 when logged in vs 756 public: the rest is private-repo work, hidden unless he enables
  "Private contributions" on GitHub. Wi-Fi glyph redrawn (was missing an arc).
- GitHub card rebuilt as a full-width dark widget (GitHubCard.jsx): whole-pixel squares (15px desktop,
  10px + sideways scroll on phones), GitHub dark greens with glow, custom tooltip, column-by-column
  fill-in, Best day stat. Private contributions now on → 2,203.
- Domain: sebkucera.dev is in redemption ("pending delete"). panel.sebkucera.dev (MC panel API)
  and the MyHabitOwl site at /habitowl depend on it, so recovering it matters more than switching.

## Review + ideas round (Seb: "go through the whole site, find bugs, intro animation, more content")
- [x] Bug hunt: code review (subagent) + runtime audit (keyboard, links, 404s, layout shift, resize)
- [x] Fix confirmed bugs
- [x] Intro animation on first load
- [x] More content (real data only)
- [x] Re-verify + screenshots
- Fixed (11 from code review + 2 from runtime audit): blank hero under reduced motion; "‹ Discover"
  could leave the site / go to the wrong app (history entries now tagged fromDiscover); Esc on an
  app page also closed it when dismissing Spotlight/menus (capture listener); Back lost the scroll
  position; Spotlight/About focus management + selection kept in view; Dock reachable by keyboard
  while auto-hidden; faded lock screen blocked clicks mid-unlock; GitHub tooltip stuck on touch;
  Dock layout thrash; color-mix() removed (Safari < 16.2); invisible menu items in Tab order; "Sept".
- Added: wake-up intro; "What's New" on app pages + "Shipped so far" timeline from a release
  snapshot (scripts/releases.mjs: GitHub releases + Apple lookup API), `npm run data`.
- Verified: 16 scripted regression checks, LCP 2.0–2.5 s on slow 4G + 4× CPU, CLS ≈ 0, 186 KB.

## Weather + slower unlock (Seb)
- [x] Live Prague weather widget on the lock screen (Open-Meteo, client-side, 15-min cache, reserved slot)
- [x] Unlock takes ~2 screens (1.8 on phones); window pinned during the unlock via --wy (useUnlock)
- [x] Scroll spy line 25% → 20% (Today stays active right after unlocking on phones)
- Verified: 16/16 reviewer cases, width/aspect, smoke, perf (LCP 2.2–2.4 s slow 4G, CLS ≈ 0, 188 KB)

## Domain move → sebthe.dev (2026-10-28)
sebkucera.dev expired 2026-09-15; redemption was $91.18 and Seb declined. Bought sebthe.dev at Namecheap
(auto-renew + WHOIS privacy on, renews ~$21/yr).
- [x] Namecheap DNS: 4× A + 4× AAAA (GitHub Pages) + CNAME www → rektoooooo.github.io; parking records removed
- [x] CNAME → sebthe.dev, og:url/og:image/canonical, docs; deploy; commit f5f76a9 pushed to main
- [x] Pages: custom domain sebthe.dev, certificate approved, HTTPS enforced; repo homepage updated
- [x] Live check: https://sebthe.dev 200, www/http → 301, /habitowl /trefa /minecraft-server 200, smoke clean
- [ ] Seb: App Store Connect (MyHabitOwl) URLs → https://sebthe.dev/habitowl/{support,privacy-policy}/
- [ ] Seb: GitHub profile website field → https://sebthe.dev
- [ ] Minecraft panel API lived on panel.sebkucera.dev → needs panel.sebthe.dev A record (server IP),
      backend CORS origin, and a rebuild of minecraft-server/ (separate task)
- [ ] Old absolute "sebkucera.dev" links in studio/, claude-code-for-ios/, rick&morty/ (untouched by request)

## Client work + Bow website (Seb, 2026-10-29)
Clients per Seb: Autoškola Trefa, B24 Studios, LocalCoder. No section for his own app sites; Bow's site is a link only.
- [x] APPS gets trefa / b24 / localcoder with kind: 'client' and site (domain); icons + live screenshots in public/img
- [x] Discover: "Client work" section (#clients), each site in a little Safari window; swipe carousel on phones
- [x] Sidebar + menu bar "Clients" entry; Spotlight labels them "Client"
- [x] App page: "Built by …" for clients, "More client work" stays among clients, optional second button
- [x] Bow: "Website" button + link → https://bowbrowser.sebthe.dev
- [x] Link preview: og:image is now the lock-screen hero (img/og.jpg, 1200×628, 48 KB, 9:41) instead of the
      photo; added og:image size/alt + twitter:card summary_large_image; HOW-TO-EDIT documents clients + preview
- [x] GitHub card was a deploy-time snapshot only (Seb: "today it didn't update"). Added nightly Action
      .github/workflows/refresh-site-data.yml: npm run deploy at 21:40 UTC, commits site/src/data + root build
      output only when changed (as github-actions[bot]), pull --rebase, push (the push starts the Pages build;
      an extra build request only made a duplicate that got cancelled, so it was dropped). Test run 2026-10-29:
      success, snapshot read from the profile grid (2265), bot commit 7b52795 published
- Verified: 16/16 reviewer cases (Dock test now scrolls instantly; smooth scroll made it flaky in Chrome 116),
  width/aspect at 390 + 1440, all three client pages load with no errors or broken images
- Spotted on the client's live Trefa site (separate repo, not touched): at 390px a 320px-wide card row
  (`div.flex h-[260px] w-[320px] shrink-0`) widens the page to 543px, so phones get sideways scroll/zoom
  and the cookie banner buttons end up off screen

---

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
