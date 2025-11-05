# Minecraft Server Panel - Quick Setup Guide

## What You Have

A complete, production-ready Minecraft server control panel with:

✅ Modern dark UI inspired by Vercel/Discord/Pterodactyl
✅ Secure JWT authentication
✅ Real-time server monitoring
✅ Live log streaming via WebSocket
✅ Full backup management
✅ Mod upload and management
✅ Responsive design

## Quick Start

### 1. Navigate to the project
```bash
cd minecraft-server/mc-panel
```

### 2. Install dependencies (if not already installed)
```bash
npm install
```

### 3. Configure your backend API URL
Edit `.env.local` and set your backend API URL:
```env
NEXT_PUBLIC_API_URL=http://your-backend:8080
NEXT_PUBLIC_WS_URL=ws://your-backend:8080
```

### 4. Start the development server
```bash
npm run dev
```

### 5. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Pages Available

- **`/`** - Home (redirects to dashboard or login)
- **`/login`** - Login page
- **`/dashboard`** - Server control and live logs
- **`/backups`** - Backup management
- **`/mods`** - Mod management

## Backend Requirements

Your backend API needs to implement these endpoints:

### Auth
- `POST /auth/login` → `{ token: string }`

### Server
- `GET /server/status` → `{ status: 'online'|'offline', players?: { online: number, max: number } }`
- `POST /server/start`
- `POST /server/stop`
- `POST /server/restart`

### Logs
- `WS /ws/logs` - WebSocket stream

### Backups
- `GET /backups/list` → `{ backups: [{ id, name, size, created }] }`
- `POST /backups/create`
- `GET /backups/download/{id}`
- `POST /backups/restore/{id}`

### Mods
- `GET /mods` → `{ mods: [{ file, size?, enabled }] }`
- `POST /mods/upload` (multipart/form-data)
- `POST /mods/enable` with `{ file }`
- `POST /mods/disable` with `{ file }`
- `POST /mods/delete` with `{ file }`

All authenticated requests include: `Authorization: Bearer <token>`

## Build for Production

```bash
npm run build
npm start
```

## Next Steps

1. **Connect to your backend**: Update the `.env.local` file
2. **Test the login**: Use your backend credentials
3. **Customize styling**: Edit `app/globals.css` for colors
4. **Add features**: All code is well-organized and easy to extend

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- React Context for auth
- WebSocket for real-time logs

## Folder Structure

```
mc-panel/
├── app/
│   ├── (authenticated)/     # Protected routes
│   │   ├── dashboard/
│   │   ├── backups/
│   │   └── mods/
│   └── login/
├── components/
│   ├── ui/                  # Reusable UI components
│   └── server/              # Server components
└── lib/
    ├── api.ts               # API client
    └── auth-context.tsx     # Auth state
```

Enjoy your new Minecraft server control panel! 🎮
