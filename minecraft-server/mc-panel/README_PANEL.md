# Minecraft Server Control Panel

A modern, clean web-based control panel for managing your Minecraft server. Built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **Authentication**: Secure login with JWT token-based authentication
- **Dashboard**: Real-time server status, player count, and live log streaming
- **Server Control**: Start, stop, and restart your server with one click
- **Backups**: Create, download, and restore server backups
- **Mods Management**: Upload, enable, disable, and delete mods

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **Real-time**: WebSocket for live logs

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A running backend API (the backend must implement the endpoints below)

### Installation

1. Clone or navigate to this directory:
```bash
cd minecraft-server/mc-panel
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your backend API URL:
```env
NEXT_PUBLIC_API_URL=http://your-backend-url:8080
NEXT_PUBLIC_WS_URL=ws://your-backend-url:8080
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Backend API Requirements

The frontend expects the following API endpoints to be available:

### Authentication
- `POST /auth/login` - Login with `{ username, password }`, returns `{ token }`

### Server Control
- `GET /server/status` - Get server status
- `POST /server/start` - Start the server
- `POST /server/stop` - Stop the server
- `POST /server/restart` - Restart the server

### Logs
- `GET /logs/last?lines=200` - Get recent logs
- `WS /ws/logs` - WebSocket for live log streaming

### Backups
- `GET /backups/list` - List all backups
- `POST /backups/create` - Create a new backup
- `GET /backups/download/{id}` - Download a backup
- `POST /backups/restore/{id}` - Restore a backup

### Mods
- `GET /mods` - List all mods
- `POST /mods/upload` - Upload a mod (multipart/form-data)
- `POST /mods/enable` - Enable a mod with `{ file }`
- `POST /mods/disable` - Disable a mod with `{ file }`
- `POST /mods/delete` - Delete a mod with `{ file }`

All authenticated endpoints require an `Authorization: Bearer <token>` header.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mc-panel/
├── app/
│   ├── (authenticated)/    # Protected routes with sidebar
│   │   ├── dashboard/      # Dashboard page
│   │   ├── backups/        # Backups page
│   │   └── mods/           # Mods page
│   ├── login/              # Login page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (redirects)
├── components/
│   ├── ui/                 # UI components (Button, Card, Input, etc.)
│   └── server/             # Server-specific components (LogViewer)
├── lib/
│   ├── api.ts              # API client with auth
│   └── auth-context.tsx    # Authentication context
└── ...
```

## Customization

### Changing Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #09090b;
  --foreground: #fafafa;
  --primary: #3b82f6;
  --success: #22c55e;
  --danger: #ef4444;
  /* ... */
}
```

### Adding Features

- All pages are in the `app/(authenticated)/` directory
- UI components are in `components/ui/`
- API calls are centralized in `lib/api.ts`

## License

MIT
