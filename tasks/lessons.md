# Lessons

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
