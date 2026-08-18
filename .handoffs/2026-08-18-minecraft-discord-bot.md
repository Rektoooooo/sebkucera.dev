# 2026-08-18 — Minecraft Discord bot + idle auto-stop

## What was done

Built a Discord bot front-end for the Minecraft control panel, plus an idle auto-stop in the
panel backend. All new code is uncommitted on `main` (repo was cloned fresh 2026-08-17, pulled
to `e9752ce` today).

### New — `minecraft-server/discord-bot/`

| File | Purpose |
|---|---|
| `bot.py` | discord.py client, 5 slash commands, 60s presence + announce loop |
| `panel_client.py` | async HTTP client for the panel API, JWT cache, re-login on 401 |
| `requirements.txt` | discord.py 2.7.1, aiohttp, python-dotenv |
| `.env.example` | token, guild/channel ids, panel creds, optional admin role |
| `mcbot.service` | systemd unit — runs as unprivileged `mcbot` user |
| `install.sh` | creates the user, venv, `.env`, installs + starts the service |
| `README.md` | Discord Developer Portal setup, install, troubleshooting |

Commands: `/status` `/players` `/start` `/stop` `/restart`.
Presence: `Watching 1/20 players` (green) / `Watching server offline` (red/dnd).

### Modified — `minecraft-server/backend/app.py`

- `IDLE_STOP_MINUTES` env var (default 60, 0 disables).
- `idle_stop_watcher()` background task registered next to `backup_scheduler()`.
- `stop_server(reason="manual")` now records why it stopped.
- `ServerStatus` gained `idleSeconds` + `lastStopReason` (both optional; existing UI unaffected).

### New — `minecraft-server/backend/test_idle_watcher.py`

Runnable without pytest (`./venv/bin/python test_idle_watcher.py`), matching the existing
`test_api.sh` convention.

## Key decisions

- **Bot is a thin front-end over the panel API** — no new endpoints were needed; everything
  already existed. It never touches screen/java itself.
- **Bot talks to `http://127.0.0.1:8081`**, not the public domain — skips TLS/openresty and
  keeps working while `panel.sebkucera.dev` is down.
- **Idle auto-stop lives in the backend, not the bot**, so it keeps working when the bot is off.
- **Announcements are driven by state-change detection in the poll loop**, not by the command
  handlers — so a start from the web panel gets announced too.
- **Access is open to everyone in the guild** (user's choice). Mitigations built in: 60s
  per-guild cooldown on control commands, and `MCBOT_ADMIN_ROLE_ID` (empty = everyone) to lock
  it down later without a code change.

## Verified

Ran a real backend on port 8099 against a fake MC dir:

- `/server/status` returns the two new fields correctly.
- `test_idle_watcher.py` — 5/5 pass, incl. the two guards that matter: a `None` player count
  (JVM booting) is not treated as zero, and a held `backup_lock` suspends the watcher.
- `panel_client` integration — 7/7 pass, incl. the 401 re-login retry, bad credentials, and
  unreachable panel.
- `describe_status` presence logic — 4/4 cases.

## Gotcha found and fixed

`discord.py` 2.4.0 **fails to import on Python 3.13+** — it imports the stdlib `audioop`
module, removed by PEP 594. Pinned 2.7.1, verified on Python 3.14. Worth remembering: the
Ubuntu box's Python version decides whether the old pin would have looked fine.

## Blocker — nothing is deployed

`panel.sebkucera.dev` returns **502** and port 25565 is closed. Neither `panel.service` nor
Minecraft is running on the Proxmox box, and `/srv/panel` is **older than this repo** (the
2026-08-17 pull changed `app.py`, `panel.service`, `requirements.txt`).

## Next steps

1. SSH to 178.17.3.31, run `sudo bash /srv/panel/debug.sh`, read `journalctl -u panel -n 50`,
   get `panel.service` up.
2. Redeploy `backend/` to `/srv/panel` (local is ahead), add `IDLE_STOP_MINUTES` to
   `/srv/panel/.env`, restart the panel.
3. Create the Discord application + bot, get the token (README has the click-path).
4. `scp -r discord-bot/ root@178.17.3.31:/srv/mcbot`, `sudo bash install.sh`.
5. End-to-end check: `/status` → `/start` → watch presence flip green + the channel post →
   `/stop`. Then start from the **web panel** and confirm Discord still announces it — that
   proves the state-change detection rather than just the command path.
6. Optional idle-watcher smoke test on the box: set `IDLE_STOP_MINUTES=2`, watch the journal.

## Not committed / not pushed

Nothing has been committed. Uncommitted: `backend/app.py` (M), `backend/test_idle_watcher.py`,
`discord-bot/` (all untracked).
