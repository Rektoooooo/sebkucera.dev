# Minecraft Control Panel - Backend Deployment Guide

## Overview

This is the FastAPI backend for the Minecraft server control panel. It provides REST API endpoints and WebSocket support for managing your Minecraft server.

## Server Requirements

- Ubuntu/Debian Linux
- Python 3.11+
- systemd
- nginx
- screen (for Minecraft server management)
- Minecraft server already installed at `/minecraft`

## Quick Deployment Steps

### 1. Prepare the Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y python3 python3-pip python3-venv nginx screen

# Install certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Create Project Directory

```bash
# Create directory
sudo mkdir -p /srv/panel
cd /srv/panel

# Copy files
# Upload: app.py, requirements.txt, .env.example, panel.service, nginx-panel.conf
```

### 3. Set Up Python Environment

```bash
cd /srv/panel

# Create virtual environment
python3 -m venv venv

# Activate venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 4. Configure Environment

```bash
# Copy and edit environment file
cp .env.example .env
nano .env
```

Edit `.env` with your settings:
```env
PANEL_JWT_SECRET=your-random-secret-here-min-32-chars
PANEL_USER=admin
PANEL_PASS=your-strong-password
MC_DIR=/minecraft
MC_SCREEN=mc
MC_JAR=server.jar
MC_ADDR=178.17.3.31:25565
```

**Important**: Generate a strong JWT secret:
```bash
python3 -c "import secrets; print(secrets.token_urlsafe(32))"
```

### 5. Test the API Manually

```bash
# Activate venv
source /srv/panel/venv/bin/activate

# Run the API
python3 app.py
```

Open another terminal and test:
```bash
curl http://localhost:8081/
```

You should see: `{"status":"Minecraft Control Panel API","version":"1.0"}`

Press `Ctrl+C` to stop the test server.

### 6. Set Up systemd Service

```bash
# Copy service file
sudo cp /srv/panel/panel.service /etc/systemd/system/

# Reload systemd
sudo systemctl daemon-reload

# Enable and start service
sudo systemctl enable panel
sudo systemctl start panel

# Check status
sudo systemctl status panel
```

### 7. Configure Nginx

```bash
# Copy nginx config
sudo cp /srv/panel/nginx-panel.conf /etc/nginx/sites-available/panel

# Create symlink
sudo ln -s /etc/nginx/sites-available/panel /etc/nginx/sites-enabled/

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 8. Set Up SSL with Let's Encrypt

```bash
# Get SSL certificate
sudo certbot --nginx -d panel.sebkucera.dev

# Follow prompts and select "2" to redirect HTTP to HTTPS
```

### 9. Configure Firewall (if needed)

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Minecraft port (if not already open)
sudo ufw allow 25565/tcp
```

### 10. Verify Everything Works

```bash
# Check API is running
sudo systemctl status panel

# Check nginx
sudo systemctl status nginx

# Test API health
curl https://panel.sebkucera.dev/

# Test login
curl -X POST https://panel.sebkucera.dev/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your-password"}'
```

## Frontend Integration

Update your Next.js frontend `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://panel.sebkucera.dev
NEXT_PUBLIC_WS_URL=wss://panel.sebkucera.dev
```

## Maintenance Commands

### View Logs

```bash
# API logs
sudo journalctl -u panel -f

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Restart Services

```bash
# Restart API
sudo systemctl restart panel

# Restart nginx
sudo systemctl restart nginx
```

### Update Code

```bash
cd /srv/panel

# Pull new code or edit files
nano app.py

# Restart service
sudo systemctl restart panel
```

### Check Minecraft Server

```bash
# List screen sessions
screen -list

# Attach to Minecraft console
screen -r mc

# Detach: Press Ctrl+A then D
```

## Troubleshooting

### API won't start

```bash
# Check logs
sudo journalctl -u panel -n 50

# Check if port is in use
sudo lsof -i :8081

# Test manually
cd /srv/panel
source venv/bin/activate
python3 app.py
```

### WebSocket not working

- Make sure nginx is properly configured with `proxy_upgrade` headers
- Check that SSL certificate covers your domain
- Verify CORS settings in `app.py`

### Permission errors

```bash
# Make sure panel service runs as root or user with access to /minecraft
sudo chown -R root:root /srv/panel

# Ensure .env is readable
sudo chmod 600 /srv/panel/.env
```

### Minecraft server won't start/stop

```bash
# Check if screen is installed
screen --version

# Test screen session manually
screen -S mc -dm bash -lc 'cd /minecraft && java -Xms6G -Xmx8G -jar server.jar nogui'

# Check if port 25565 is open
ss -ltnp | grep 25565
```

## API Endpoints Reference

### Authentication
- `POST /auth/login` - Get JWT token

### Server Control
- `GET /server/status` - Server status and player count
- `POST /server/start` - Start server
- `POST /server/stop` - Stop server
- `POST /server/restart` - Restart server

### Logs
- `GET /logs/last?lines=200` - Get recent logs
- `WS /ws/logs?token=<jwt>` - Live log stream

### Backups
- `GET /backups/list` - List backups
- `POST /backups/create` - Create backup
- `GET /backups/download/{id}` - Download backup
- `POST /backups/restore/{id}` - Restore backup

### Mods
- `GET /mods` - List mods
- `POST /mods/upload` - Upload mod
- `POST /mods/enable` - Enable mod
- `POST /mods/disable` - Disable mod
- `POST /mods/delete` - Delete mod

All endpoints except `/auth/login` require:
```
Authorization: Bearer <jwt-token>
```

## Security Recommendations

1. **Change default credentials** immediately after first login
2. **Use a strong JWT secret** (min 32 characters)
3. **Restrict CORS** in production (edit `app.py`)
4. **Keep system updated**: `sudo apt update && sudo apt upgrade`
5. **Monitor logs** regularly for suspicious activity
6. **Backup regularly** using the panel or external scripts

## File Structure

```
/srv/panel/
├── app.py                  # Main FastAPI application
├── requirements.txt        # Python dependencies
├── .env                    # Environment configuration (SECRET!)
├── .env.example           # Example env file
├── venv/                  # Python virtual environment
├── panel.service          # systemd service file
└── nginx-panel.conf       # nginx configuration

/minecraft/
├── server.jar            # Minecraft server
├── mods/                 # Enabled mods
├── mods_disabled/        # Disabled mods
├── world/                # Server world
├── backups/              # Backup archives
└── logs/
    └── latest.log        # Current log file
```

## Support

If you encounter issues:
1. Check the logs: `sudo journalctl -u panel -f`
2. Verify environment variables in `/srv/panel/.env`
3. Test API manually: `cd /srv/panel && source venv/bin/activate && python3 app.py`
4. Check Minecraft server: `screen -r mc`

---

**Status**: ✅ Backend complete and ready to deploy
**Frontend**: Located in `../mc-panel/`
**Next**: Deploy both frontend and backend, configure DNS
