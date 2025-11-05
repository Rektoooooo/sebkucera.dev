# Minecraft Server Control Panel

A complete, modern web-based control panel for managing your Minecraft (Fabric) server. Features a sleek dark UI, real-time monitoring, and full server management capabilities.

![Stack](https://img.shields.io/badge/Frontend-Next.js_14-black)
![Stack](https://img.shields.io/badge/Backend-FastAPI-009688)
![Stack](https://img.shields.io/badge/Database-None-lightgrey)
![Status](https://img.shields.io/badge/Status-Production_Ready-success)

## 🎮 Features

### Server Management
- ▶️ Start / Stop / Restart server with one click
- 📊 Real-time server status and player count
- 📜 Live log streaming via WebSocket
- 🎯 Accurate status detection via port monitoring

### Backups
- 💾 Create full world backups (zipped)
- ⬇️ Download backups to local machine
- 🔄 Restore from any backup with confirmation
- 📋 List all backups with size info

### Mods Management
- ⬆️ Upload `.jar` mods directly from browser
- ✅ Enable/disable mods without deletion
- 🗑️ Delete unwanted mods
- 📁 Separate enabled/disabled mod directories

### Security
- 🔐 JWT-based authentication
- 🛡️ Password-protected API
- 🔒 HTTPS/WSS support
- ⚠️ Confirmation dialogs for destructive actions

### UI/UX
- 🌙 Modern dark theme (Vercel/Discord style)
- 📱 Fully responsive design
- ⚡ Fast, smooth interactions
- 🎨 Clean, minimal interface

## 📁 Project Structure

```
minecraft-server/
├── backend/              # FastAPI backend
│   ├── app.py           # Main API application
│   ├── requirements.txt # Python dependencies
│   ├── .env.example     # Environment template
│   ├── panel.service    # systemd service
│   ├── nginx-panel.conf # nginx config
│   ├── install.sh       # Auto-installer
│   └── DEPLOYMENT.md    # Deployment guide
│
├── mc-panel/            # Next.js frontend
│   ├── app/             # Pages and routes
│   ├── components/      # React components
│   ├── lib/             # API client & auth
│   ├── .env.example     # Frontend config
│   └── README_PANEL.md  # Frontend docs
│
├── SETUP.md             # Quick start guide
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

**Server (Backend):**
- Ubuntu/Debian Linux
- Python 3.11+
- Minecraft server at `/minecraft`
- Screen installed
- Domain pointed to server (e.g., `panel.sebkucera.dev`)

**Local (Frontend):**
- Node.js 18+
- npm or yarn

### Backend Deployment (5 minutes)

1. **Upload backend files to server:**
```bash
scp -r backend/ user@your-server:/srv/panel/
```

2. **Run installer on server:**
```bash
ssh user@your-server
cd /srv/panel
sudo bash install.sh
```

3. **Configure SSL:**
```bash
sudo certbot --nginx -d panel.sebkucera.dev
```

4. **Test:**
```bash
curl https://panel.sebkucera.dev/
```

See [`backend/DEPLOYMENT.md`](backend/DEPLOYMENT.md) for detailed instructions.

### Frontend Setup (Local Development)

1. **Navigate to frontend:**
```bash
cd mc-panel
npm install
```

2. **Configure API URL:**
```bash
cp .env.example .env.local
# Edit .env.local and set:
# NEXT_PUBLIC_API_URL=https://panel.sebkucera.dev
# NEXT_PUBLIC_WS_URL=wss://panel.sebkucera.dev
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
```
http://localhost:3000
```

See [`mc-panel/README_PANEL.md`](mc-panel/README_PANEL.md) for more details.

## 🔧 Configuration

### Backend Environment Variables

Create `/srv/panel/.env`:
```env
PANEL_JWT_SECRET=your-random-secret-min-32-chars
PANEL_USER=admin
PANEL_PASS=your-strong-password
MC_DIR=/minecraft
MC_SCREEN=mc
MC_JAR=server.jar
MC_ADDR=178.17.3.31:25565
```

### Frontend Environment Variables

Create `mc-panel/.env.local`:
```env
NEXT_PUBLIC_API_URL=https://panel.sebkucera.dev
NEXT_PUBLIC_WS_URL=wss://panel.sebkucera.dev
```

## 🌐 Architecture

### Request Flow

```
Browser → Next.js (Port 3000)
   ↓
   ↓ HTTPS
   ↓
Nginx (Port 80/443) → FastAPI (Port 8081)
   ↓
   ↓ Commands
   ↓
Screen Session → Minecraft Server (Port 25565)
```

### Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- React Context for state

**Backend:**
- FastAPI (Python)
- JWT authentication
- WebSocket support
- mcstatus for player count

**Infrastructure:**
- systemd for process management
- nginx as reverse proxy
- Let's Encrypt SSL
- Screen for Minecraft process

## 📡 API Endpoints

### Authentication
```http
POST /auth/login
Body: { "username": "admin", "password": "password" }
Response: { "token": "jwt-token" }
```

### Server Control
```http
GET  /server/status         # Get status & players
POST /server/start          # Start server
POST /server/stop           # Stop server
POST /server/restart        # Restart server
```

### Logs
```http
GET /logs/last?lines=200    # Get last N lines
WS  /ws/logs?token=jwt      # Live stream
```

### Backups
```http
GET  /backups/list          # List all backups
POST /backups/create        # Create new backup
GET  /backups/download/{id} # Download backup
POST /backups/restore/{id}  # Restore backup
```

### Mods
```http
GET  /mods                  # List all mods
POST /mods/upload           # Upload mod (multipart)
POST /mods/enable           # Enable mod
POST /mods/disable          # Disable mod
POST /mods/delete           # Delete mod
```

All endpoints except `/auth/login` require:
```
Authorization: Bearer <jwt-token>
```

## 🔒 Security Notes

1. **Change default credentials** immediately
2. **Use strong JWT secret** (32+ characters)
3. **Enable firewall** (ufw)
4. **Keep system updated**
5. **Use HTTPS** (Let's Encrypt)
6. **Monitor logs** regularly
7. **Backup regularly**

## 📊 Server Requirements

### Minimum
- 2GB RAM (for backend + small MC server)
- 2 CPU cores
- 10GB disk space

### Recommended
- 8GB+ RAM (for large modpacks)
- 4+ CPU cores
- 50GB+ SSD storage

## 🐛 Troubleshooting

### Backend won't start
```bash
sudo journalctl -u panel -f
cd /srv/panel && source venv/bin/activate && python3 app.py
```

### Frontend can't connect
- Check CORS settings in `backend/app.py`
- Verify API URL in `.env.local`
- Check nginx logs: `sudo tail -f /var/log/nginx/error.log`

### Minecraft won't start
- Check screen: `screen -list`
- Test manually: `cd /minecraft && java -Xms6G -Xmx8G -jar server.jar nogui`
- Check port: `ss -ltnp | grep 25565`

### WebSocket disconnects
- Increase nginx timeout in `nginx-panel.conf`
- Check SSL certificate covers your domain
- Verify token is valid

## 📈 Future Enhancements

- [ ] Send console commands from UI
- [ ] Scheduled backups (cron)
- [ ] Discord webhook notifications
- [ ] Multi-user support with roles
- [ ] Server resource monitoring (CPU/RAM)
- [ ] Plugin management (Bukkit/Spigot)
- [ ] BlueMap/Dynmap integration
- [ ] Whitelist/banlist management

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome!

## 📧 Support

For issues or questions:
1. Check the deployment documentation
2. Review logs: `sudo journalctl -u panel -f`
3. Test API manually: `curl https://panel.sebkucera.dev/`

---

**Built with ❤️ for Minecraft server administrators**

Deployed at: `https://panel.sebkucera.dev`
Server: `178.17.3.31:25565`
