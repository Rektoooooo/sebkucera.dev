#!/bin/bash

# Minecraft Discord Bot - Installation Script
# Copy this folder to /srv/mcbot on the server, then run: sudo bash install.sh

set -e

echo "🤖 Minecraft Discord Bot - Installation"
echo "======================================="
echo ""

if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (sudo bash install.sh)"
    exit 1
fi

cd /srv/mcbot

if [ ! -f "requirements.txt" ]; then
    echo "❌ requirements.txt not found. Copy all files to /srv/mcbot first."
    exit 1
fi

# The bot makes HTTP calls and nothing else, so it runs as its own unprivileged
# user rather than root like the panel does.
if ! id mcbot &>/dev/null; then
    echo "👤 Creating mcbot system user..."
    useradd --system --no-create-home --shell /usr/sbin/nologin mcbot
fi

echo "🐍 Setting up Python virtual environment..."
python3 -m venv venv
./venv/bin/pip install --upgrade pip
./venv/bin/pip install -r requirements.txt

if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cp .env.example .env
    echo ""
    echo "⚠️  Edit /srv/mcbot/.env and set at least:"
    echo "   - DISCORD_TOKEN"
    echo "   - DISCORD_GUILD_ID"
    echo "   - PANEL_USER / PANEL_PASS  (same as /srv/panel/.env)"
    echo ""
    read -p "Press Enter to edit .env now, or Ctrl+C to do it later..."
    nano .env
fi

# .env holds the bot token and the panel password.
chmod 600 .env
chown -R mcbot:mcbot /srv/mcbot

echo "🔧 Installing systemd service..."
cp mcbot.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable mcbot
systemctl restart mcbot

echo ""
echo "✅ Installation complete!"
echo ""
systemctl status mcbot --no-pager -l
echo ""
echo "Next steps:"
echo "1. Watch the logs:  sudo journalctl -u mcbot -f"
echo "2. In Discord, type / and check the commands appear"
echo "3. Try /status"
