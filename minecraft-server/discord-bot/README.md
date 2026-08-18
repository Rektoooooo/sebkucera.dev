# Minecraft Discord Bot

A Discord front-end for the Minecraft control panel. Shows live server state in the bot's
presence and exposes the server controls as slash commands.

```
🟢 Minecraft Server  [BOT]
   Watching 1/20 players
```

## What it does

| Command | What it does |
|---|---|
| `/status` | Online/offline, address, player count |
| `/players` | Who is online, plus whitelist and op counts |
| `/start` | Starts the server (takes up to a minute) |
| `/stop` | Stops the server |
| `/restart` | Stop, wait, start (takes a couple of minutes) |

Plus two things that happen on their own:

- **Presence** updates every 60s — green dot with `1/20 players`, red dot with `server offline`.
- **Announcements** in a channel when the server goes up or down — *including* when it was
  started from the web panel or stopped by the idle watcher, because the bot detects the state
  change rather than only reporting its own commands.

## How it fits together

```
Discord  ──gateway──▶  mcbot.service     (/srv/mcbot)
                            │
                            │ HTTP http://127.0.0.1:8081
                            ▼
                       panel.service     (/srv/panel)
                            │
                            ▼
                       screen "mc" ──▶ Minecraft
```

The bot never touches `screen`, `java` or the Minecraft files. Everything goes through the
panel API, so all the hardened lifecycle logic stays in one place. It talks to the panel over
**localhost**, which skips TLS and the public proxy entirely — the bot keeps working even when
`panel.sebkucera.dev` is down.

## Creating the bot in Discord

1. Go to <https://discord.com/developers/applications> → **New Application**, name it
   `Minecraft Server`.
2. **Bot** tab → **Reset Token** → copy it. This is `DISCORD_TOKEN`.
   You cannot view it again later, only reset it.
3. Still on the **Bot** tab, leave all three Privileged Gateway Intents **off** — slash commands
   do not need them.
4. **OAuth2 → URL Generator**: tick scopes `bot` and `applications.commands`, then permissions
   **View Channel**, **Send Messages**, **Embed Links**. Open the generated URL and add the bot
   to your server.
5. Turn on Discord **Developer Mode** (Settings → Advanced) so you can right-click → Copy ID for
   the server (`DISCORD_GUILD_ID`) and the announcement channel
   (`DISCORD_ANNOUNCE_CHANNEL_ID`).

## Install on the server

```bash
scp -r discord-bot/ root@178.17.3.31:/srv/mcbot
ssh root@178.17.3.31
cd /srv/mcbot
sudo bash install.sh
```

The installer creates an unprivileged `mcbot` user, builds the venv, prompts you to fill in
`.env`, and installs + starts the systemd service.

```bash
sudo journalctl -u mcbot -f     # watch it connect
```

Commands are synced to your one guild on startup, so they appear in Discord immediately (a
global sync would take up to an hour).

## Configuration

See `.env.example` for the full list. The two worth calling out:

- **`MCBOT_ADMIN_ROLE_ID`** — empty by default, meaning *everyone in the guild* can run
  `/start` `/stop` `/restart`. Set it to a role id if that ever becomes a problem; no code
  change needed. There is also a 60-second per-guild cooldown on those three commands so nobody
  can flap the server up and down.
- **`PANEL_USER` / `PANEL_PASS`** — the same credentials as `/srv/panel/.env`. The bot logs in
  once, caches the JWT for its 7-day lifetime, and re-logs in automatically when it expires.

## Idle auto-stop

This lives in the **panel backend**, not the bot, so it keeps working when the bot is down.

`IDLE_STOP_MINUTES` in `/srv/panel/.env` (default `60`, `0` disables) — after that many minutes
with nobody online, the panel stops the server itself. The bot then announces
*"Server stopped automatically"*.

The watcher deliberately does **not** count a minute when:

- a backup is running (a backup stops and restarts the server), or
- the server answers on its port but returns no status — that means the JVM is still booting,
  and treating "unknown" as "zero players" could shut down a server someone just started.

## Troubleshooting

**Commands do not appear in Discord** — check `DISCORD_GUILD_ID` is the server id, and that you
invited the bot with the `applications.commands` scope. Re-invite with the URL Generator if not.

**Every command says "Cannot reach the panel API"** — the panel is down, not the bot.
`curl localhost:8081/` and `sudo systemctl status panel`.

**Bot shows an orange dot and "panel unreachable"** — same thing: the bot is fine, the panel
is not answering. This is deliberately distinct from the red "server offline" dot.

**`/start` reports a failure but the server did come up** — the panel waits up to 90s for the
port and the bot allows 120s. If your server takes longer than that to boot (large modpack),
raise `START_TIMEOUT_SECONDS` in `panel_client.py` and the loop count in `start_server()` in
`backend/app.py`.
