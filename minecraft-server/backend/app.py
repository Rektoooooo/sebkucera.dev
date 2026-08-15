import os
import re
import json
import time
import hmac
import asyncio
import hashlib
import zipfile
import shutil
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Optional

import jwt
import psutil
from fastapi import (
    FastAPI, HTTPException, Depends, WebSocket, WebSocketDisconnect,
    UploadFile, File, Query, Request,
)
from fastapi.responses import FileResponse, PlainTextResponse, RedirectResponse, Response
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from mcstatus import JavaServer

# =====================================================================
# Configuration
# =====================================================================

load_dotenv()

JWT_SECRET = os.getenv("PANEL_JWT_SECRET", "change-this")
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_DAYS = 7
PANEL_USER = os.getenv("PANEL_USER", "admin")
PANEL_PASS = os.getenv("PANEL_PASS", "admin")
MC_DIR = Path(os.getenv("MC_DIR", "/minecraft"))
MC_SCREEN = os.getenv("MC_SCREEN", "mc")
MC_JAR = os.getenv("MC_JAR", "server.jar")
MC_ADDR = os.getenv("MC_ADDR", "178.17.3.31:25565")
MC_JAVA = os.getenv("MC_JAVA", "java")
MC_JAVA_ARGS = os.getenv("MC_JAVA_ARGS", "-Xms6G -Xmx8G")
MC_VERSION = os.getenv("PANEL_MC_VERSION", "26.2")
MC_PORT = int(os.getenv("MC_PORT", "25565"))
PANEL_DATA_DIR = Path(os.getenv("PANEL_DATA_DIR", "/srv/panel"))

SCHEDULE_FILE = PANEL_DATA_DIR / "schedule.json"
MAX_UPLOAD_BYTES = 300 * 1024 * 1024  # 300 MB

app = FastAPI(title="Minecraft Server Control Panel API")

# CORS: the panel UI is served from sebkucera.dev (GitHub Pages).
# localhost entries allow local testing against the live API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://sebkucera.dev",
        "https://www.sebkucera.dev",
        "http://localhost:3000",
        "http://localhost:4321",
        "http://localhost:8080",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

security = HTTPBearer()

# =====================================================================
# Models
# =====================================================================

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    token: str

class ServerStatus(BaseModel):
    online: bool
    players: Optional[dict] = None
    port: int = MC_PORT

class GenericResponse(BaseModel):
    ok: bool
    message: Optional[str] = None

class ModAction(BaseModel):
    file: str

class CommandRequest(BaseModel):
    command: str

class PlayerAction(BaseModel):
    name: str
    reason: Optional[str] = None

class PropertiesUpdate(BaseModel):
    properties: dict

class ModInstall(BaseModel):
    url: str
    filename: str

class ScheduleUpdate(BaseModel):
    enabled: bool
    time: str
    retention: int

# =====================================================================
# Auth helpers
# =====================================================================

def create_token(username: str) -> str:
    expiration = datetime.now(timezone.utc) + timedelta(days=JWT_EXPIRATION_DAYS)
    payload = {"sub": username, "exp": expiration}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def decode_token(token: str) -> Optional[str]:
    """Return the username for a valid token, else None."""
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return payload.get("sub")
    except jwt.PyJWTError:
        return None

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    username = decode_token(credentials.credentials)
    if username is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    return username

# Simple in-memory login rate limiter (single uvicorn worker).
_login_attempts: dict = {}

def check_login_rate_limit(request: Request) -> None:
    forwarded = request.headers.get("x-forwarded-for", "")
    ip = forwarded.split(",")[0].strip() if forwarded else (
        request.client.host if request.client else "unknown"
    )
    now = time.monotonic()
    attempts = [t for t in _login_attempts.get(ip, []) if now - t < 60]
    if len(attempts) >= 5:
        _login_attempts[ip] = attempts
        raise HTTPException(status_code=429, detail="Too many login attempts. Try again in a minute.")
    attempts.append(now)
    _login_attempts[ip] = attempts
    if len(_login_attempts) > 1000:  # bound memory
        _login_attempts.clear()
        _login_attempts[ip] = attempts

# =====================================================================
# Path-safety helpers
# =====================================================================

SAFE_NAME_RE = re.compile(r'^[A-Za-z0-9][A-Za-z0-9 ._+\[\]()-]{0,127}$')

def safe_name(name: str, suffix: Optional[str] = None) -> str:
    """Reject anything that is not a plain file name in the expected format."""
    if not name or Path(name).name != name or not SAFE_NAME_RE.match(name):
        raise HTTPException(status_code=400, detail="Invalid file name")
    if suffix and not name.endswith(suffix):
        raise HTTPException(status_code=400, detail=f"File name must end with {suffix}")
    return name

def resolve_in(directory: Path, name: str) -> Path:
    """Resolve directory/name and require the result to stay inside directory."""
    resolved = (directory / name).resolve()
    if resolved.parent != directory.resolve():
        raise HTTPException(status_code=400, detail="Invalid file name")
    return resolved

def validate_zip_members(zip_ref: zipfile.ZipFile, dest: Path) -> None:
    """Reject archives whose members would escape dest (zip-slip)."""
    dest_resolved = dest.resolve()
    for member in zip_ref.infolist():
        name = member.filename
        if name.startswith("/") or ".." in Path(name).parts:
            raise HTTPException(status_code=400, detail="Backup archive contains unsafe paths")
        if not (dest / name).resolve().is_relative_to(dest_resolved):
            raise HTTPException(status_code=400, detail="Backup archive contains unsafe paths")

# =====================================================================
# Server process helpers (all async — never block the event loop)
# =====================================================================

async def is_port_open() -> bool:
    try:
        _, writer = await asyncio.wait_for(
            asyncio.open_connection("127.0.0.1", MC_PORT), timeout=1.0
        )
        writer.close()
        try:
            await writer.wait_closed()
        except Exception:
            pass
        return True
    except Exception:
        return False

async def is_screen_running() -> bool:
    try:
        proc = await asyncio.create_subprocess_exec(
            "screen", "-list",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.STDOUT,
        )
        out, _ = await proc.communicate()
        text = out.decode(errors="replace")
        # screen -list lines look like "\t12345.mc\t(Detached)" — match the
        # session name exactly, not as a substring.
        return re.search(rf'\.{re.escape(MC_SCREEN)}[\s(]', text) is not None
    except Exception:
        return False

async def get_player_count() -> Optional[dict]:
    try:
        server = await JavaServer.async_lookup(MC_ADDR)
        status = await asyncio.wait_for(server.async_status(), timeout=5)
        return {"online": status.players.online, "max": status.players.max}
    except Exception:
        return None

async def start_server() -> bool:
    if await is_port_open():
        return True
    try:
        # Built entirely from server-side config — no request data reaches this.
        launch = f"cd {MC_DIR} && exec {MC_JAVA} {MC_JAVA_ARGS} -jar {MC_JAR} nogui"
        proc = await asyncio.create_subprocess_exec(
            "/usr/bin/screen", "-S", MC_SCREEN, "-dm", "bash", "-lc", launch
        )
        await proc.wait()

        for _ in range(90):
            await asyncio.sleep(1)
            if await is_port_open():
                return True
        return False
    except Exception as e:
        print(f"Error starting server: {e}")
        return False

async def stop_server() -> bool:
    if not await is_port_open():
        return True
    try:
        await send_console_raw("stop")

        for _ in range(30):
            await asyncio.sleep(1)
            if not await is_port_open():
                break

        if await is_port_open():
            proc = await asyncio.create_subprocess_exec(
                "pkill", "-f", f"java.*{MC_JAR}"
            )
            await proc.wait()
            await asyncio.sleep(2)

        if await is_screen_running():
            proc = await asyncio.create_subprocess_exec(
                "screen", "-S", MC_SCREEN, "-X", "quit"
            )
            await proc.wait()

        # The JVM holds world/session.lock for a few seconds after the port
        # closes; starting again too early fails with "already locked".
        for _ in range(15):
            proc = await asyncio.create_subprocess_exec(
                "pgrep", "-f", f"java.*{MC_JAR}",
                stdout=asyncio.subprocess.DEVNULL,
            )
            if await proc.wait() != 0:
                break  # java is fully gone
            await asyncio.sleep(1)

        return not await is_port_open()
    except Exception as e:
        print(f"Error stopping server: {e}")
        return False

async def send_console_raw(command: str) -> None:
    """Inject a command into the server console via screen. Caller sanitizes."""
    proc = await asyncio.create_subprocess_exec(
        "screen", "-S", MC_SCREEN, "-X", "stuff", command + "\n"
    )
    rc = await proc.wait()
    if rc != 0:
        raise HTTPException(status_code=500, detail="Failed to send command to server console")

async def require_console() -> None:
    if not await is_screen_running():
        raise HTTPException(status_code=409, detail="Server is not running")

PLAYER_NAME_RE = re.compile(r'^[A-Za-z0-9_]{1,16}$')

def valid_player_name(name: str) -> str:
    """Strict allowlist — this is the console-injection guard."""
    if not PLAYER_NAME_RE.match(name):
        raise HTTPException(status_code=400, detail="Invalid player name")
    return name

def clean_reason(reason: Optional[str]) -> Optional[str]:
    if not reason:
        return None
    cleaned = "".join(c for c in reason if 32 <= ord(c) < 127).strip()[:100]
    return cleaned or None

# =====================================================================
# Backup helpers + scheduler
# =====================================================================

backup_lock = asyncio.Lock()

DEFAULT_SCHEDULE = {
    "enabled": False,
    "time": "03:30",
    "retention": 7,
    "lastRunDate": None,
    "lastRunAt": None,
    "lastRunResult": None,
}

def load_schedule() -> dict:
    try:
        data = json.loads(SCHEDULE_FILE.read_text())
        return {**DEFAULT_SCHEDULE, **data}
    except Exception:
        return dict(DEFAULT_SCHEDULE)

def save_schedule(config: dict) -> None:
    tmp = SCHEDULE_FILE.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(config, indent=2))
    os.replace(tmp, SCHEDULE_FILE)

def build_backup_zip(dest: Path) -> None:
    """Zip world dirs + server.properties. Runs in a thread."""
    tmp = Path(str(dest) + ".part")
    try:
        with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zf:
            for dirname in ("world", "world_nether", "world_the_end"):
                d = MC_DIR / dirname
                if not d.is_dir():
                    continue
                for path in sorted(d.rglob("*")):
                    if path.is_file():
                        zf.write(path, path.relative_to(MC_DIR))
            props = MC_DIR / "server.properties"
            if props.is_file():
                zf.write(props, "server.properties")
        os.replace(tmp, dest)
    except BaseException:
        tmp.unlink(missing_ok=True)
        raise

async def perform_backup(prefix: str = "") -> str:
    """Shared by manual create and the scheduler. Stops/starts the server around the zip."""
    if backup_lock.locked():
        raise HTTPException(status_code=409, detail="Backup already in progress")
    async with backup_lock:
        world_dir = MC_DIR / "world"
        if not world_dir.exists():
            raise HTTPException(status_code=404, detail="World directory not found")

        backup_dir = MC_DIR / "backups"
        backup_dir.mkdir(exist_ok=True)

        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        backup_name = f"{prefix}{timestamp}.zip"
        backup_path = backup_dir / backup_name

        was_running = await is_port_open()
        if was_running and not await stop_server():
            raise HTTPException(status_code=500, detail="Failed to stop server for backup")
        try:
            await asyncio.to_thread(build_backup_zip, backup_path)
        finally:
            if was_running:
                await start_server()
        return backup_name

def prune_auto_backups(retention: int) -> None:
    backup_dir = MC_DIR / "backups"
    auto = sorted(backup_dir.glob("auto_*.zip"), key=lambda p: p.name, reverse=True)
    for old in auto[max(retention, 1):]:
        old.unlink(missing_ok=True)

async def backup_scheduler() -> None:
    """Daily scheduled backup. One attempt per day (success or failure)."""
    while True:
        try:
            await asyncio.sleep(30)
            config = load_schedule()
            if not config.get("enabled"):
                continue
            now = datetime.now()
            today = now.strftime("%Y-%m-%d")
            if config.get("lastRunDate") == today:
                continue
            try:
                hour, minute = (int(x) for x in config["time"].split(":"))
            except Exception:
                continue
            if now < now.replace(hour=hour, minute=minute, second=0, microsecond=0):
                continue

            try:
                name = await perform_backup(prefix="auto_")
                result = f"ok: {name}"
                prune_auto_backups(int(config.get("retention", 7)))
            except Exception as e:
                detail = getattr(e, "detail", None) or str(e)
                result = f"failed: {detail}"

            config = load_schedule()
            config.update({
                "lastRunDate": today,
                "lastRunAt": datetime.now().isoformat(timespec="seconds"),
                "lastRunResult": result,
            })
            save_schedule(config)
        except asyncio.CancelledError:
            raise
        except Exception as e:
            print(f"Scheduler error: {e}")

@app.on_event("startup")
async def on_startup() -> None:
    psutil.cpu_percent(interval=None)  # prime; first call always returns 0.0
    asyncio.create_task(backup_scheduler())

# =====================================================================
# Auth endpoints
# =====================================================================

@app.post("/auth/login", response_model=LoginResponse)
async def login(request: LoginRequest, http_request: Request):
    check_login_rate_limit(http_request)
    user_ok = hmac.compare_digest(request.username.encode(), PANEL_USER.encode())
    pass_ok = hmac.compare_digest(request.password.encode(), PANEL_PASS.encode())
    if user_ok & pass_ok:
        return LoginResponse(token=create_token(request.username))
    raise HTTPException(status_code=401, detail="Invalid credentials")

# =====================================================================
# Server endpoints
# =====================================================================

@app.get("/server/status", response_model=ServerStatus)
async def get_status(username: str = Depends(verify_token)):
    online = await is_port_open()
    players = await get_player_count() if online else None
    return ServerStatus(online=online, players=players, port=MC_PORT)

@app.post("/server/start", response_model=GenericResponse)
async def server_start(username: str = Depends(verify_token)):
    if not await start_server():
        raise HTTPException(status_code=500, detail="Failed to start server")
    return GenericResponse(ok=True, message="Server started")

@app.post("/server/stop", response_model=GenericResponse)
async def server_stop(username: str = Depends(verify_token)):
    if not await stop_server():
        raise HTTPException(status_code=500, detail="Failed to stop server")
    return GenericResponse(ok=True, message="Server stopped")

@app.post("/server/restart", response_model=GenericResponse)
async def server_restart(username: str = Depends(verify_token)):
    if not await stop_server():
        raise HTTPException(status_code=500, detail="Failed to stop server")
    await asyncio.sleep(3)
    if not await start_server():
        raise HTTPException(status_code=500, detail="Failed to start server")
    return GenericResponse(ok=True, message="Server restarted")

@app.post("/server/command", response_model=GenericResponse)
async def server_command(req: CommandRequest, username: str = Depends(verify_token)):
    command = req.command.strip()
    if not command:
        raise HTTPException(status_code=400, detail="Empty command")
    if len(command) > 256:
        raise HTTPException(status_code=400, detail="Command too long")
    if any(ord(c) < 32 for c in command):
        raise HTTPException(status_code=400, detail="Invalid characters in command")
    await require_console()
    await send_console_raw(command)
    return GenericResponse(ok=True, message="Command sent")

# =====================================================================
# Logs
# =====================================================================

@app.get("/logs/last")
async def get_logs(
    lines: int = Query(200, ge=1, le=1000),
    username: str = Depends(verify_token),
):
    log_file = MC_DIR / "logs" / "latest.log"
    if not log_file.exists():
        return PlainTextResponse("No log file yet.")

    def tail() -> str:
        with open(log_file, "r", errors="replace") as f:
            return "".join(f.readlines()[-lines:])

    try:
        return PlainTextResponse(await asyncio.to_thread(tail))
    except Exception as e:
        return PlainTextResponse(f"Error reading logs: {e}")

@app.websocket("/ws/logs")
async def websocket_logs(websocket: WebSocket, token: Optional[str] = Query(None)):
    """Live log stream.

    Auth: preferred — client sends the JWT as the first text frame after
    connecting and receives "__ok__". Legacy ?token= query param still accepted
    (slated for removal; it leaks tokens into access logs).
    """
    await websocket.accept()

    authed = False
    if token and decode_token(token):
        authed = True  # legacy path — no ack, old clients don't expect one
    else:
        try:
            first = await asyncio.wait_for(websocket.receive_text(), timeout=5)
            if decode_token(first):
                authed = True
                await websocket.send_text("__ok__")
        except Exception:
            pass

    if not authed:
        await websocket.close(code=1008)
        return

    log_file = MC_DIR / "logs" / "latest.log"
    try:
        file_pos = log_file.stat().st_size if log_file.exists() else 0
        heartbeat = 0
        while True:
            if log_file.exists():
                size = log_file.stat().st_size
                if size < file_pos:
                    file_pos = 0  # log rotated
                if size > file_pos:
                    with open(log_file, "r", errors="replace") as f:
                        f.seek(file_pos)
                        data = f.read()
                        file_pos = f.tell()
                    if data:
                        await websocket.send_text(data)

            heartbeat += 1
            if heartbeat >= 30:
                heartbeat = 0
                await websocket.send_text("")  # keepalive; surfaces dead peers

            await asyncio.sleep(1)
    except WebSocketDisconnect:
        pass
    except Exception as e:
        print(f"WebSocket error: {e}")

# =====================================================================
# System metrics
# =====================================================================

def collect_metrics() -> dict:
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage(str(MC_DIR))

    java = None
    for proc in psutil.process_iter(["name", "cmdline"]):
        try:
            if proc.info["name"] == "java" and any(
                MC_JAR in (arg or "") for arg in (proc.info["cmdline"] or [])
            ):
                with proc.oneshot():
                    java = {
                        "rssBytes": proc.memory_info().rss,
                        "cpuPercent": proc.cpu_percent(interval=None),
                        "uptimeSeconds": int(time.time() - proc.create_time()),
                    }
                break
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue

    return {
        "cpuPercent": psutil.cpu_percent(interval=None),
        "memory": {
            "usedBytes": memory.used,
            "totalBytes": memory.total,
            "percent": memory.percent,
        },
        "disk": {
            "usedBytes": disk.used,
            "totalBytes": disk.total,
            "percent": disk.percent,
        },
        "java": java,
    }

@app.get("/system/metrics")
async def system_metrics(username: str = Depends(verify_token)):
    return await asyncio.to_thread(collect_metrics)

# =====================================================================
# Players
# =====================================================================

def read_json_list(path: Path) -> list:
    """Read a Minecraft JSON list file, tolerating a transient mid-write state."""
    for attempt in range(2):
        try:
            if not path.exists():
                return []
            data = json.loads(path.read_text())
            return data if isinstance(data, list) else []
        except Exception:
            if attempt == 0:
                time.sleep(0.2)
    return []

def write_json_list(path: Path, data: list) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, indent=2))
    os.replace(tmp, path)

def dedupe_players(entries: list) -> list:
    """Collapse duplicate entries for the same player name.

    A server that switched online-mode ends up with two UUIDs (Mojang + offline)
    per player; the panel operates on names, so show each name once.
    """
    seen = set()
    result = []
    for entry in entries:
        key = str(entry.get("name", "")).lower() or str(entry.get("uuid", "")).lower()
        if key in seen:
            continue
        seen.add(key)
        result.append(entry)
    return result

def uuid_for_name(name: str) -> Optional[str]:
    """Look up a player's UUID from files the server maintains."""
    lower = name.lower()
    for path in (
        MC_DIR / "usercache.json",
        MC_DIR / "whitelist.json",
        MC_DIR / "ops.json",
        MC_DIR / "banned-players.json",
    ):
        for entry in read_json_list(path):
            if str(entry.get("name", "")).lower() == lower and entry.get("uuid"):
                return entry["uuid"]
    return None

def op_permission_level() -> int:
    try:
        for line in properties_path().read_text().splitlines():
            if line.strip().startswith("op-permission-level="):
                return int(line.split("=", 1)[1].strip())
    except Exception:
        pass
    return 4

@app.get("/players")
async def get_players(username: str = Depends(verify_token)):
    running = await is_port_open()

    online = []
    count = None
    if running:
        try:
            server = await JavaServer.async_lookup(MC_ADDR)
            status = await asyncio.wait_for(server.async_status(), timeout=5)
            count = {"online": status.players.online, "max": status.players.max}
            if status.players.sample:
                online = [{"name": p.name, "uuid": p.id} for p in status.players.sample]
        except Exception:
            pass

    whitelist = await asyncio.to_thread(read_json_list, MC_DIR / "whitelist.json")
    ops = await asyncio.to_thread(read_json_list, MC_DIR / "ops.json")
    banned = await asyncio.to_thread(read_json_list, MC_DIR / "banned-players.json")

    return {
        "serverRunning": running,
        "playerCount": count,
        "online": online,
        "whitelist": dedupe_players(whitelist),
        "ops": dedupe_players(ops),
        "banned": dedupe_players(banned),
    }

# Player mutations work in two modes:
#  - server running: inject the real console command (the server owns its files)
#  - server stopped: edit the JSON file directly (the server reads it at boot)

async def console_or_offline(command: str, offline_edit) -> GenericResponse:
    if await is_screen_running():
        await send_console_raw(command)
        return GenericResponse(ok=True, message="Command sent")
    await asyncio.to_thread(offline_edit)
    return GenericResponse(ok=True, message="Saved — applies when the server starts")

def remove_by_name(path: Path, name: str) -> None:
    lower = name.lower()
    entries = read_json_list(path)
    remaining = [e for e in entries if str(e.get("name", "")).lower() != lower]
    if len(remaining) == len(entries):
        raise HTTPException(status_code=404, detail=f"{name} not found in {path.name}")
    write_json_list(path, remaining)

def add_entry(path: Path, name: str, extra: Optional[dict] = None) -> None:
    entries = read_json_list(path)
    if any(str(e.get("name", "")).lower() == name.lower() for e in entries):
        return  # already present
    uuid = uuid_for_name(name)
    if not uuid:
        raise HTTPException(
            status_code=409,
            detail=f"Unknown player '{name}' — they must have joined before, or start the server to add them",
        )
    entries.append({"uuid": uuid, "name": name, **(extra or {})})
    write_json_list(path, entries)

@app.post("/players/whitelist/add", response_model=GenericResponse)
async def whitelist_add(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    return await console_or_offline(
        f"whitelist add {name}",
        lambda: add_entry(MC_DIR / "whitelist.json", name),
    )

@app.post("/players/whitelist/remove", response_model=GenericResponse)
async def whitelist_remove(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    return await console_or_offline(
        f"whitelist remove {name}",
        lambda: remove_by_name(MC_DIR / "whitelist.json", name),
    )

@app.post("/players/op", response_model=GenericResponse)
async def op_player(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    return await console_or_offline(
        f"op {name}",
        lambda: add_entry(
            MC_DIR / "ops.json",
            name,
            {"level": op_permission_level(), "bypassesPlayerLimit": False},
        ),
    )

@app.post("/players/deop", response_model=GenericResponse)
async def deop_player(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    return await console_or_offline(
        f"deop {name}",
        lambda: remove_by_name(MC_DIR / "ops.json", name),
    )

@app.post("/players/kick", response_model=GenericResponse)
async def kick_player(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    reason = clean_reason(action.reason)
    # Kick is only meaningful on a running server — no offline equivalent.
    await require_console()
    await send_console_raw(f"kick {name} {reason}" if reason else f"kick {name}")
    return GenericResponse(ok=True, message="Command sent")

@app.post("/players/ban", response_model=GenericResponse)
async def ban_player(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    reason = clean_reason(action.reason)

    def offline_ban() -> None:
        add_entry(
            MC_DIR / "banned-players.json",
            name,
            {
                "created": time.strftime("%Y-%m-%d %H:%M:%S %z"),
                "source": "Server",
                "expires": "forever",
                "reason": reason or "Banned by an operator",
            },
        )

    return await console_or_offline(
        f"ban {name} {reason}" if reason else f"ban {name}",
        offline_ban,
    )

@app.post("/players/pardon", response_model=GenericResponse)
async def pardon_player(action: PlayerAction, username: str = Depends(verify_token)):
    name = valid_player_name(action.name)
    return await console_or_offline(
        f"pardon {name}",
        lambda: remove_by_name(MC_DIR / "banned-players.json", name),
    )

# =====================================================================
# server.properties
# =====================================================================

# key -> (kind, constraint). Deliberately excludes online-mode, server-port, rcon.*.
EDITABLE_PROPERTIES = {
    "motd": ("str", 150),
    "difficulty": ("enum", ["peaceful", "easy", "normal", "hard"]),
    "gamemode": ("enum", ["survival", "creative", "adventure", "spectator"]),
    "max-players": ("int", (1, 200)),
    "view-distance": ("int", (3, 32)),
    "simulation-distance": ("int", (3, 32)),
    "spawn-protection": ("int", (0, 100)),
    "pvp": ("bool", None),
    "white-list": ("bool", None),
    "enforce-whitelist": ("bool", None),
    "allow-flight": ("bool", None),
    "hardcore": ("bool", None),
}

def properties_path() -> Path:
    return MC_DIR / "server.properties"

def validate_property(key: str, value: str) -> str:
    if key not in EDITABLE_PROPERTIES:
        raise HTTPException(status_code=400, detail=f"Property '{key}' is not editable")
    kind, constraint = EDITABLE_PROPERTIES[key]
    value = "".join(c for c in str(value) if ord(c) >= 32).strip()
    if kind == "bool":
        if value not in ("true", "false"):
            raise HTTPException(status_code=400, detail=f"'{key}' must be true or false")
    elif kind == "int":
        try:
            n = int(value)
        except ValueError:
            raise HTTPException(status_code=400, detail=f"'{key}' must be a number")
        lo, hi = constraint
        if not lo <= n <= hi:
            raise HTTPException(status_code=400, detail=f"'{key}' must be between {lo} and {hi}")
    elif kind == "enum":
        if value not in constraint:
            raise HTTPException(status_code=400, detail=f"'{key}' must be one of: {', '.join(constraint)}")
    elif kind == "str":
        if len(value) > constraint:
            raise HTTPException(status_code=400, detail=f"'{key}' too long (max {constraint})")
    return value

@app.get("/server/properties")
async def get_properties(username: str = Depends(verify_token)):
    path = properties_path()
    if not path.exists():
        raise HTTPException(status_code=404, detail="server.properties not found")
    raw = await asyncio.to_thread(path.read_text)

    properties = {}
    for line in raw.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or "=" not in stripped:
            continue
        key, _, value = stripped.partition("=")
        properties[key.strip()] = value.strip()

    return {
        "properties": properties,
        "raw": raw,
        "editable": list(EDITABLE_PROPERTIES.keys()),
    }

@app.put("/server/properties")
async def update_properties(update: PropertiesUpdate, username: str = Depends(verify_token)):
    if not update.properties:
        raise HTTPException(status_code=400, detail="No properties provided")
    validated = {k: validate_property(k, v) for k, v in update.properties.items()}

    path = properties_path()
    if not path.exists():
        raise HTTPException(status_code=404, detail="server.properties not found")

    def write() -> None:
        lines = path.read_text().splitlines(keepends=True)
        remaining = dict(validated)
        out = []
        for line in lines:
            stripped = line.strip()
            if stripped and not stripped.startswith("#") and "=" in stripped:
                key = stripped.partition("=")[0].strip()
                if key in remaining:
                    newline = "\n" if line.endswith("\n") else ""
                    out.append(f"{key}={remaining.pop(key)}{newline}")
                    continue
            out.append(line)
        if remaining:
            if out and not out[-1].endswith("\n"):
                out[-1] += "\n"
            for key, value in remaining.items():
                out.append(f"{key}={value}\n")
        tmp = path.with_suffix(".properties.tmp")
        tmp.write_text("".join(out))
        os.replace(tmp, path)

    await asyncio.to_thread(write)
    return {"ok": True, "restartRequired": True}

# =====================================================================
# Server icon
# =====================================================================

MAX_ICON_BYTES = 256 * 1024

def png_dimensions(data: bytes) -> Optional[tuple]:
    if len(data) < 24 or data[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    return (
        int.from_bytes(data[16:20], "big"),
        int.from_bytes(data[20:24], "big"),
    )

@app.get("/server/icon")
async def get_server_icon(username: str = Depends(verify_token)):
    icon = MC_DIR / "server-icon.png"
    if not icon.exists():
        raise HTTPException(status_code=404, detail="No server icon set")
    return FileResponse(icon, media_type="image/png", filename="server-icon.png")

@app.post("/server/icon")
async def set_server_icon(
    file: UploadFile = File(...),
    username: str = Depends(verify_token),
):
    data = await file.read(MAX_ICON_BYTES + 1)
    if len(data) > MAX_ICON_BYTES:
        raise HTTPException(status_code=413, detail="Icon too large (max 256 KB)")
    dims = png_dimensions(data)
    if dims is None:
        raise HTTPException(status_code=400, detail="Icon must be a PNG file")
    if dims != (64, 64):
        raise HTTPException(status_code=400, detail="Icon must be exactly 64×64 pixels")

    icon = MC_DIR / "server-icon.png"
    tmp = icon.with_suffix(".png.tmp")
    tmp.write_bytes(data)
    os.replace(tmp, icon)
    return {"ok": True, "restartRequired": True}

# =====================================================================
# Backups
# =====================================================================

@app.get("/backups/list")
async def list_backups(username: str = Depends(verify_token)):
    backup_dir = MC_DIR / "backups"
    backup_dir.mkdir(exist_ok=True)
    backups = [
        {"id": f.name, "sizeBytes": f.stat().st_size}
        for f in backup_dir.glob("*.zip")
    ]
    return {"backups": sorted(backups, key=lambda x: x["id"], reverse=True)}

@app.post("/backups/create")
async def create_backup(username: str = Depends(verify_token)):
    name = await perform_backup()
    return {"id": name, "ok": True}

@app.get("/backups/download/{backup_id}")
async def download_backup(backup_id: str, username: str = Depends(verify_token)):
    backup_id = safe_name(backup_id, suffix=".zip")
    backup_file = resolve_in(MC_DIR / "backups", backup_id)
    if not backup_file.exists():
        raise HTTPException(status_code=404, detail="Backup not found")
    return FileResponse(backup_file, media_type="application/zip", filename=backup_id)

@app.post("/backups/delete/{backup_id}", response_model=GenericResponse)
async def delete_backup(backup_id: str, username: str = Depends(verify_token)):
    backup_id = safe_name(backup_id, suffix=".zip")
    backup_file = resolve_in(MC_DIR / "backups", backup_id)
    if not backup_file.exists():
        raise HTTPException(status_code=404, detail="Backup not found")
    backup_file.unlink()
    return GenericResponse(ok=True, message="Backup deleted")

RESTORE_TOP_LEVEL = {"world", "world_nether", "world_the_end", "server.properties"}

@app.post("/backups/restore/{backup_id}", response_model=GenericResponse)
async def restore_backup(backup_id: str, username: str = Depends(verify_token)):
    backup_id = safe_name(backup_id, suffix=".zip")
    backup_file = resolve_in(MC_DIR / "backups", backup_id)
    if not backup_file.exists():
        raise HTTPException(status_code=404, detail="Backup not found")
    if backup_lock.locked():
        raise HTTPException(status_code=409, detail="Backup already in progress")

    async with backup_lock:
        was_running = await is_port_open()
        if was_running and not await stop_server():
            raise HTTPException(status_code=500, detail="Failed to stop server for restore")

        def extract() -> None:
            with zipfile.ZipFile(backup_file, "r") as zip_ref:
                names = zip_ref.namelist()
                new_format = any(n.startswith("world/") for n in names)
                if new_format:
                    # New format: entries prefixed world/, world_nether/, ... extract into MC_DIR
                    for n in names:
                        top = Path(n).parts[0] if Path(n).parts else ""
                        if top not in RESTORE_TOP_LEVEL:
                            raise HTTPException(status_code=400, detail="Backup archive contains unexpected paths")
                    validate_zip_members(zip_ref, MC_DIR)
                    safety = MC_DIR / f"world_backup_{int(time.time())}"
                    safety.mkdir()
                    for dirname in ("world", "world_nether", "world_the_end"):
                        d = MC_DIR / dirname
                        if d.exists():
                            shutil.move(str(d), str(safety / dirname))
                    zip_ref.extractall(MC_DIR)
                else:
                    # Legacy format: world contents at archive root; extract into world/
                    world_dir = MC_DIR / "world"
                    validate_zip_members(zip_ref, world_dir)
                    if world_dir.exists():
                        safety = MC_DIR / f"world_backup_{int(time.time())}"
                        shutil.move(str(world_dir), str(safety))
                    world_dir.mkdir()
                    zip_ref.extractall(world_dir)

            # Keep only the newest safety copy; older piles are pruned.
            safety_dirs = sorted(
                MC_DIR.glob("world_backup_*"),
                key=lambda p: p.name,
                reverse=True,
            )
            for old in safety_dirs[1:]:
                shutil.rmtree(old, ignore_errors=True)

        try:
            await asyncio.to_thread(extract)
        except HTTPException:
            raise
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Restore failed: {e}")
        finally:
            if was_running:
                await start_server()

    return GenericResponse(ok=True, message="Backup restored")

# =====================================================================
# Backup schedule
# =====================================================================

TIME_RE = re.compile(r'^([01]\d|2[0-3]):[0-5]\d$')

@app.get("/backups/schedule")
async def get_schedule(username: str = Depends(verify_token)):
    return load_schedule()

@app.put("/backups/schedule")
async def put_schedule(update: ScheduleUpdate, username: str = Depends(verify_token)):
    if not TIME_RE.match(update.time):
        raise HTTPException(status_code=400, detail="Time must be HH:MM (24h)")
    if not 1 <= update.retention <= 30:
        raise HTTPException(status_code=400, detail="Retention must be between 1 and 30")
    config = load_schedule()
    config.update({
        "enabled": update.enabled,
        "time": update.time,
        "retention": update.retention,
    })
    save_schedule(config)
    return config

# =====================================================================
# Mods
# =====================================================================

# sha512 per jar lets the frontend resolve name/description/icon via
# Modrinth's version_files API. Cached by (name, size, mtime).
_mod_hash_cache: dict = {}

def jar_sha512(path: Path) -> str:
    stat = path.stat()
    key = (path.name, stat.st_size, int(stat.st_mtime))
    cached = _mod_hash_cache.get(key)
    if cached:
        return cached
    digest = hashlib.sha512()
    with open(path, "rb") as f:
        while chunk := f.read(1024 * 1024):
            digest.update(chunk)
    result = digest.hexdigest()
    _mod_hash_cache[key] = result
    return result

@app.get("/mods")
async def list_mods(username: str = Depends(verify_token)):
    mods_dir = MC_DIR / "mods"
    mods_disabled_dir = MC_DIR / "mods_disabled"
    mods_dir.mkdir(exist_ok=True)
    mods_disabled_dir.mkdir(exist_ok=True)

    def build() -> list:
        mods = []
        for directory, enabled in ((mods_dir, True), (mods_disabled_dir, False)):
            for f in directory.glob("*.jar"):
                mods.append({
                    "file": f.name,
                    "enabled": enabled,
                    "sizeBytes": f.stat().st_size,
                    "sha512": jar_sha512(f),
                })
        return sorted(mods, key=lambda x: x["file"].lower())

    return {"mods": await asyncio.to_thread(build)}

@app.post("/mods/upload")
async def upload_mod(
    file: UploadFile = File(...),
    username: str = Depends(verify_token),
):
    filename = safe_name(Path(file.filename or "").name, suffix=".jar")
    mods_dir = MC_DIR / "mods"
    mods_dir.mkdir(exist_ok=True)

    dest = resolve_in(mods_dir, filename)
    tmp_path = mods_dir / (filename + ".part")
    size = 0
    try:
        with open(tmp_path, "wb") as f:
            while chunk := await file.read(1024 * 1024):
                size += len(chunk)
                if size > MAX_UPLOAD_BYTES:
                    raise HTTPException(status_code=413, detail="File too large (max 300 MB)")
                f.write(chunk)
        os.replace(tmp_path, dest)
    except HTTPException:
        tmp_path.unlink(missing_ok=True)
        raise
    except Exception as e:
        tmp_path.unlink(missing_ok=True)
        raise HTTPException(status_code=500, detail=f"Upload failed: {e}")

    return {"ok": True, "file": filename}

# Only Modrinth's CDN — this endpoint downloads server-side, so an open URL
# would be an SSRF hole.
ALLOWED_MOD_HOSTS = {"cdn.modrinth.com"}

@app.post("/mods/install")
async def install_mod(action: ModInstall, username: str = Depends(verify_token)):
    from urllib.parse import urlparse
    from urllib.request import Request as UrlRequest, urlopen

    filename = safe_name(action.filename, suffix=".jar")
    parsed = urlparse(action.url)
    if parsed.scheme != "https" or parsed.hostname not in ALLOWED_MOD_HOSTS:
        raise HTTPException(status_code=400, detail="Only downloads from cdn.modrinth.com are allowed")

    mods_dir = MC_DIR / "mods"
    mods_dir.mkdir(exist_ok=True)
    dest = resolve_in(mods_dir, filename)
    tmp_path = mods_dir / (filename + ".part")

    def download() -> None:
        request = UrlRequest(action.url, headers={"User-Agent": "mc-panel/2.0"})
        size = 0
        try:
            with urlopen(request, timeout=60) as response:
                # urlopen follows redirects; make sure we didn't get bounced off-host
                final_host = urlparse(response.geturl()).hostname
                if final_host not in ALLOWED_MOD_HOSTS:
                    raise HTTPException(status_code=400, detail="Download redirected to a disallowed host")
                with open(tmp_path, "wb") as f:
                    while chunk := response.read(1024 * 1024):
                        size += len(chunk)
                        if size > MAX_UPLOAD_BYTES:
                            raise HTTPException(status_code=413, detail="Mod file too large")
                        f.write(chunk)
            os.replace(tmp_path, dest)
        except HTTPException:
            tmp_path.unlink(missing_ok=True)
            raise
        except Exception as e:
            tmp_path.unlink(missing_ok=True)
            raise HTTPException(status_code=502, detail=f"Download failed: {e}")

    await asyncio.to_thread(download)
    return {"ok": True, "file": filename}

@app.post("/mods/disable", response_model=GenericResponse)
async def disable_mod(action: ModAction, username: str = Depends(verify_token)):
    filename = safe_name(action.file, suffix=".jar")
    mods_disabled_dir = MC_DIR / "mods_disabled"
    mods_disabled_dir.mkdir(exist_ok=True)
    source = resolve_in(MC_DIR / "mods", filename)
    if not source.exists():
        raise HTTPException(status_code=404, detail="Mod not found")
    shutil.move(str(source), str(mods_disabled_dir / filename))
    return GenericResponse(ok=True, message="Mod disabled")

@app.post("/mods/enable", response_model=GenericResponse)
async def enable_mod(action: ModAction, username: str = Depends(verify_token)):
    filename = safe_name(action.file, suffix=".jar")
    mods_dir = MC_DIR / "mods"
    mods_dir.mkdir(exist_ok=True)
    source = resolve_in(MC_DIR / "mods_disabled", filename)
    if not source.exists():
        raise HTTPException(status_code=404, detail="Mod not found")
    shutil.move(str(source), str(mods_dir / filename))
    return GenericResponse(ok=True, message="Mod enabled")

@app.post("/mods/delete", response_model=GenericResponse)
async def delete_mod(action: ModAction, username: str = Depends(verify_token)):
    filename = safe_name(action.file, suffix=".jar")
    mod_path = resolve_in(MC_DIR / "mods", filename)
    if not mod_path.exists():
        mod_path = resolve_in(MC_DIR / "mods_disabled", filename)
    if not mod_path.exists():
        raise HTTPException(status_code=404, detail="Mod not found")
    mod_path.unlink()
    return GenericResponse(ok=True, message="Mod deleted")

# =====================================================================
# Dynmap proxy
# =====================================================================

# The map mod's web server (BlueMap, port 8100) runs inside the Minecraft
# server process on a port that is not forwarded to the internet; the panel
# relays it. Deliberately unauthenticated: it has to load in an <iframe>,
# and the map is read-only.
MAP_URL = os.getenv("MAP_URL", "http://127.0.0.1:8100")

@app.get("/map")
async def map_root():
    # Trailing slash matters: dynmap's index.html uses relative asset paths.
    return RedirectResponse(url="/map/")

@app.get("/map/{path:path}")
async def map_proxy(request: Request, path: str = ""):
    from urllib.error import HTTPError, URLError
    from urllib.request import Request as UrlRequest, urlopen

    query = request.url.query
    target = f"{MAP_URL}/{path}" + (f"?{query}" if query else "")

    # Headers the browser needs for correct caching. Dropping Cache-Control
    # made browsers cache the live player feed — positions froze until reload.
    PASS_HEADERS = ("Cache-Control", "ETag", "Last-Modified", "Expires")

    def fetch():
        req = UrlRequest(target, headers={"User-Agent": "mc-panel-proxy"})
        try:
            with urlopen(req, timeout=30) as resp:
                headers = {h: resp.headers[h] for h in PASS_HEADERS if resp.headers.get(h)}
                return (
                    resp.status,
                    resp.headers.get("Content-Type", "application/octet-stream"),
                    headers,
                    resp.read(),
                )
        except HTTPError as e:
            return e.code, e.headers.get("Content-Type", "text/plain"), {}, e.read()
        except URLError:
            return None

    result = await asyncio.to_thread(fetch)
    if result is None:
        return Response(
            content="Map unavailable — the Minecraft server is not running.",
            status_code=503,
            media_type="text/plain",
        )
    status_code, content_type, headers, body = result
    if "/live/" in path or path.startswith("live/"):
        headers.setdefault("Cache-Control", "no-store")
    return Response(
        content=body,
        status_code=status_code,
        media_type=content_type,
        headers=headers,
    )

# =====================================================================
# Health
# =====================================================================

@app.get("/")
async def root():
    return {
        "status": "Minecraft Control Panel API",
        "version": "2.0",
        "mcVersion": MC_VERSION,
        "loader": "fabric",
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8081)
