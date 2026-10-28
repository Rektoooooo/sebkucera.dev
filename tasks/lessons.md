# Lessons

## 2026-10-28 — Images: HTML width/height beat CSS aspect-ratio
Seb: the featured icon was "too big and stretched out like crazy". `<img width="256" height="256">`
with CSS `width: 44%; aspect-ratio: 1` still renders 256px tall — the height attribute is a CSS
height hint and wins over aspect-ratio. **Rule:** whenever CSS sets only one dimension of an
image that has width/height attributes, also set `height: auto` (or width: auto). Check every
`<img>`'s rendered vs natural ratio before showing screenshots.

## 2026-10-28 — Short class names collide across components
`.mac` (a Discover grid) restyled the app page's `gallery mac`; `.discover` (page animation) hit the
Dock's `dock-tile discover`. **Rule:** variant names go in `data-*` attributes or prefixed
classes (`dock-tile home`), never bare words another component already uses.

## 2026-08-14 — Python venvs are not relocatable
Built a venv at /srv/panel/venv.new, renamed it to /srv/panel/venv → every console
script's shebang still pointed at venv.new → systemd 203/EXEC "No such file or
directory" even though the file existed. **Rule:** for zero-downtime venv swaps,
build at the FINAL path (brief stop + rebuild), or symlink-swap a versioned dir
that never moves. Also: a uvicorn with open WebSockets ignores SIGTERM for the
full systemd timeout (90s) — expect stop to be slow when clients are connected.

## 2026-08-04 — Design direction needs a visual reference first
Built a full editorial-serif portfolio; user rejected it and provided a reference
screenshot (friendly bento-grid style, rounded cards, inline avatar headline).
**Rule:** Before implementing a whole visual design, show 2–3 direction options
(described or mocked) or ask for reference sites/screenshots. "Minimal clean premium"
means different things — for Sebastian it means *friendly rounded bento* (Apple-ish,
playful), not editorial magazine serif.

## 2026-08-04 — Less content beats complete content
User: "not everything needs to be there." Don't port 1:1 content when redesigning —
curate down to what sells (apps, stack, personality cards), drop services/process/forms
unless asked.
