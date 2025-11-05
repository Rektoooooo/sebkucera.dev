import os
import time
import subprocess
import asyncio
import zipfile
import shutil
from datetime import datetime, timedelta
from pathlib import Path
from typing import Optional, List
import socket

from fastapi import FastAPI, HTTPException, Depends, WebSocket, WebSocketDisconnect, UploadFile, File, Query
from fastapi.responses import FileResponse, PlainTextResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from jose import JWTError, jwt
from dotenv import load_dotenv
from mcstatus import JavaServer

# Load environment variables
load_dotenv()

# Configuration
JWT_SECRET = os.getenv("PANEL_JWT_SECRET", "change-this")
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_DAYS = 7
PANEL_USER = os.getenv("PANEL_USER", "admin")
PANEL_PASS = os.getenv("PANEL_PASS", "admin")
MC_DIR = Path(os.getenv("MC_DIR", "/minecraft"))
MC_SCREEN = os.getenv("MC_SCREEN", "mc")
MC_JAR = os.getenv("MC_JAR", "server.jar")
MC_ADDR = os.getenv("MC_ADDR", "178.17.3.31:25565")
MC_PORT = 25565

# Initialize FastAPI
app = FastAPI(title="Minecraft Server Control Panel API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

# Models
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

class BackupInfo(BaseModel):
    id: str
    sizeBytes: int

class ModInfo(BaseModel):
    file: str
    enabled: bool
    sizeBytes: int

class ModAction(BaseModel):
    file: str

class BackupAction(BaseModel):
    id: Optional[str] = None

# Helper Functions

def create_token(username: str) -> str:
    """Create JWT token"""
    expiration = datetime.utcnow() + timedelta(days=JWT_EXPIRATION_DAYS)
    payload = {
        "sub": username,
        "exp": expiration
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    """Verify JWT token"""
    try:
        payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return username
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

def is_port_open(port: int = MC_PORT) -> bool:
    """Check if Minecraft port is open"""
    try:
        result = subprocess.run(
            ["ss", "-ltnp"],
            capture_output=True,
            text=True,
            timeout=5
        )
        return f":{port}" in result.stdout
    except Exception:
        return False

def get_player_count() -> Optional[dict]:
    """Get player count from Minecraft server"""
    try:
        server = JavaServer.lookup(MC_ADDR)
        status = server.status()
        return {
            "online": status.players.online,
            "max": status.players.max
        }
    except Exception:
        return None

def is_screen_running() -> bool:
    """Check if screen session exists"""
    try:
        result = subprocess.run(
            ["screen", "-list"],
            capture_output=True,
            text=True
        )
        return MC_SCREEN in result.stdout
    except Exception:
        return False

def start_server() -> bool:
    """Start Minecraft server in screen session"""
    if is_port_open():
        return True  # Already running

    try:
        # Start server in screen
        cmd = f"screen -S {MC_SCREEN} -dm bash -lc 'cd {MC_DIR} && exec java -Xms6G -Xmx8G -jar {MC_JAR} nogui'"
        subprocess.run(cmd, shell=True, check=True)

        # Wait for port to open (up to 90 seconds)
        for _ in range(90):
            time.sleep(1)
            if is_port_open():
                return True

        return False
    except Exception as e:
        print(f"Error starting server: {e}")
        return False

def stop_server() -> bool:
    """Stop Minecraft server gracefully"""
    if not is_port_open():
        return True  # Already stopped

    try:
        # Send stop command to screen
        subprocess.run(
            ["screen", "-S", MC_SCREEN, "-X", "stuff", "stop\n"],
            check=True
        )

        # Wait for server to stop (up to 30 seconds)
        for _ in range(30):
            time.sleep(1)
            if not is_port_open():
                break

        # Fallback: force kill if still running
        if is_port_open():
            subprocess.run(
                ["pkill", "-f", f"java.*{MC_JAR}"],
                check=False
            )
            time.sleep(2)

        # Clean up screen session
        if is_screen_running():
            subprocess.run(
                ["screen", "-S", MC_SCREEN, "-X", "quit"],
                check=False
            )

        return not is_port_open()
    except Exception as e:
        print(f"Error stopping server: {e}")
        return False

# API Endpoints

@app.post("/auth/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    """Authenticate and get JWT token"""
    if request.username == PANEL_USER and request.password == PANEL_PASS:
        token = create_token(request.username)
        return LoginResponse(token=token)
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/server/status", response_model=ServerStatus)
async def get_status(username: str = Depends(verify_token)):
    """Get server status"""
    online = is_port_open()
    players = get_player_count() if online else None

    return ServerStatus(
        online=online,
        players=players,
        port=MC_PORT
    )

@app.post("/server/start", response_model=GenericResponse)
async def server_start(username: str = Depends(verify_token)):
    """Start the Minecraft server"""
    success = start_server()
    if not success:
        raise HTTPException(status_code=500, detail="Failed to start server")
    return GenericResponse(ok=True, message="Server started")

@app.post("/server/stop", response_model=GenericResponse)
async def server_stop(username: str = Depends(verify_token)):
    """Stop the Minecraft server"""
    success = stop_server()
    if not success:
        raise HTTPException(status_code=500, detail="Failed to stop server")
    return GenericResponse(ok=True, message="Server stopped")

@app.post("/server/restart", response_model=GenericResponse)
async def server_restart(username: str = Depends(verify_token)):
    """Restart the Minecraft server"""
    # Stop first
    if not stop_server():
        raise HTTPException(status_code=500, detail="Failed to stop server")

    # Wait a moment
    time.sleep(3)

    # Start again
    if not start_server():
        raise HTTPException(status_code=500, detail="Failed to start server")

    return GenericResponse(ok=True, message="Server restarted")

@app.get("/logs/last")
async def get_logs(
    lines: int = Query(200, ge=1, le=1000),
    username: str = Depends(verify_token)
):
    """Get last N lines of server log"""
    log_file = MC_DIR / "logs" / "latest.log"

    if not log_file.exists():
        return PlainTextResponse("No log file yet.")

    try:
        result = subprocess.run(
            ["tail", "-n", str(lines), str(log_file)],
            capture_output=True,
            text=True
        )
        return PlainTextResponse(result.stdout)
    except Exception as e:
        return PlainTextResponse(f"Error reading logs: {e}")

@app.websocket("/ws/logs")
async def websocket_logs(websocket: WebSocket, token: Optional[str] = Query(None)):
    """WebSocket endpoint for live log streaming"""
    # Verify token
    if not token:
        await websocket.close(code=1008)
        return

    try:
        jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except JWTError:
        await websocket.close(code=1008)
        return

    await websocket.accept()

    log_file = MC_DIR / "logs" / "latest.log"

    try:
        # Start from end of file
        if log_file.exists():
            with open(log_file, 'r') as f:
                f.seek(0, 2)  # Seek to end
                file_pos = f.tell()
        else:
            file_pos = 0

        while True:
            if log_file.exists():
                with open(log_file, 'r') as f:
                    f.seek(file_pos)
                    new_lines = f.read()
                    if new_lines:
                        await websocket.send_text(new_lines)
                    file_pos = f.tell()

            await asyncio.sleep(1)
    except WebSocketDisconnect:
        pass
    except Exception as e:
        print(f"WebSocket error: {e}")

@app.get("/backups/list")
async def list_backups(username: str = Depends(verify_token)):
    """List all backups"""
    backup_dir = MC_DIR / "backups"
    backup_dir.mkdir(exist_ok=True)

    backups = []
    for backup_file in backup_dir.glob("*.zip"):
        backups.append({
            "id": backup_file.name,
            "sizeBytes": backup_file.stat().st_size
        })

    return {"backups": sorted(backups, key=lambda x: x["id"], reverse=True)}

@app.post("/backups/create")
async def create_backup(username: str = Depends(verify_token)):
    """Create a new backup"""
    world_dir = MC_DIR / "world"

    if not world_dir.exists():
        raise HTTPException(status_code=404, detail="World directory not found")

    backup_dir = MC_DIR / "backups"
    backup_dir.mkdir(exist_ok=True)

    # Generate backup filename
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M")
    backup_name = f"{timestamp}.zip"
    backup_path = backup_dir / backup_name

    try:
        # Stop server for backup
        was_running = is_port_open()
        if was_running:
            stop_server()

        # Create zip archive
        shutil.make_archive(
            str(backup_path.with_suffix('')),
            'zip',
            world_dir
        )

        # Restart if it was running
        if was_running:
            start_server()

        return {"id": backup_name, "ok": True}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Backup failed: {str(e)}")

@app.get("/backups/download/{backup_id}")
async def download_backup(backup_id: str, username: str = Depends(verify_token)):
    """Download a backup"""
    backup_file = MC_DIR / "backups" / backup_id

    if not backup_file.exists() or not backup_file.name.endswith('.zip'):
        raise HTTPException(status_code=404, detail="Backup not found")

    return FileResponse(
        backup_file,
        media_type="application/zip",
        filename=backup_id
    )

@app.post("/backups/restore/{backup_id}")
async def restore_backup(backup_id: str, username: str = Depends(verify_token)):
    """Restore a backup"""
    backup_file = MC_DIR / "backups" / backup_id

    if not backup_file.exists():
        raise HTTPException(status_code=404, detail="Backup not found")

    world_dir = MC_DIR / "world"

    try:
        # Stop server
        was_running = is_port_open()
        if was_running:
            stop_server()

        # Backup current world (just in case)
        if world_dir.exists():
            backup_old = MC_DIR / f"world_backup_{int(time.time())}"
            shutil.move(str(world_dir), str(backup_old))

        # Extract backup
        world_dir.mkdir(exist_ok=True)
        with zipfile.ZipFile(backup_file, 'r') as zip_ref:
            zip_ref.extractall(world_dir)

        # Restart server
        if was_running:
            start_server()

        return GenericResponse(ok=True, message="Backup restored")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Restore failed: {str(e)}")

@app.get("/mods")
async def list_mods(username: str = Depends(verify_token)):
    """List all mods (enabled and disabled)"""
    mods_dir = MC_DIR / "mods"
    mods_disabled_dir = MC_DIR / "mods_disabled"

    mods_dir.mkdir(exist_ok=True)
    mods_disabled_dir.mkdir(exist_ok=True)

    mods = []

    # Enabled mods
    for mod_file in mods_dir.glob("*.jar"):
        mods.append({
            "file": mod_file.name,
            "enabled": True,
            "sizeBytes": mod_file.stat().st_size
        })

    # Disabled mods
    for mod_file in mods_disabled_dir.glob("*.jar"):
        mods.append({
            "file": mod_file.name,
            "enabled": False,
            "sizeBytes": mod_file.stat().st_size
        })

    return {"mods": sorted(mods, key=lambda x: x["file"])}

@app.post("/mods/upload")
async def upload_mod(
    file: UploadFile = File(...),
    username: str = Depends(verify_token)
):
    """Upload a new mod"""
    if not file.filename.endswith('.jar'):
        raise HTTPException(status_code=400, detail="Only .jar files are allowed")

    mods_dir = MC_DIR / "mods"
    mods_dir.mkdir(exist_ok=True)

    mod_path = mods_dir / file.filename

    try:
        with open(mod_path, 'wb') as f:
            content = await file.read()
            f.write(content)

        return {"ok": True, "file": file.filename}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

@app.post("/mods/disable")
async def disable_mod(action: ModAction, username: str = Depends(verify_token)):
    """Disable a mod (move to mods_disabled)"""
    mods_dir = MC_DIR / "mods"
    mods_disabled_dir = MC_DIR / "mods_disabled"
    mods_disabled_dir.mkdir(exist_ok=True)

    source = mods_dir / action.file
    dest = mods_disabled_dir / action.file

    if not source.exists():
        raise HTTPException(status_code=404, detail="Mod not found")

    try:
        shutil.move(str(source), str(dest))
        return GenericResponse(ok=True, message="Mod disabled")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to disable mod: {str(e)}")

@app.post("/mods/enable")
async def enable_mod(action: ModAction, username: str = Depends(verify_token)):
    """Enable a mod (move to mods)"""
    mods_dir = MC_DIR / "mods"
    mods_disabled_dir = MC_DIR / "mods_disabled"

    source = mods_disabled_dir / action.file
    dest = mods_dir / action.file

    if not source.exists():
        raise HTTPException(status_code=404, detail="Mod not found")

    try:
        shutil.move(str(source), str(dest))
        return GenericResponse(ok=True, message="Mod enabled")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to enable mod: {str(e)}")

@app.post("/mods/delete")
async def delete_mod(action: ModAction, username: str = Depends(verify_token)):
    """Delete a mod"""
    mods_dir = MC_DIR / "mods"
    mods_disabled_dir = MC_DIR / "mods_disabled"

    # Try both directories
    mod_path = mods_dir / action.file
    if not mod_path.exists():
        mod_path = mods_disabled_dir / action.file

    if not mod_path.exists():
        raise HTTPException(status_code=404, detail="Mod not found")

    try:
        mod_path.unlink()
        return GenericResponse(ok=True, message="Mod deleted")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete mod: {str(e)}")

# Health check
@app.get("/")
async def root():
    return {"status": "Minecraft Control Panel API", "version": "1.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8081)
