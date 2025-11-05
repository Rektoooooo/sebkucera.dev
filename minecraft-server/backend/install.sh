#!/bin/bash

# Minecraft Control Panel - Backend Installation Script
# Run this on your Ubuntu server as root

set -e

echo "🎮 Minecraft Control Panel - Backend Installation"
echo "=================================================="
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (sudo bash install.sh)"
    exit 1
fi

# Install system dependencies
echo "📦 Installing system dependencies..."
apt update
apt install -y python3 python3-pip python3-venv nginx screen certbot python3-certbot-nginx

# Create project directory
echo "📁 Creating project directory..."
mkdir -p /srv/panel
cd /srv/panel

# Check if files exist
if [ ! -f "requirements.txt" ]; then
    echo "❌ Error: requirements.txt not found. Please copy all files to /srv/panel first."
    exit 1
fi

# Create Python virtual environment
echo "🐍 Setting up Python virtual environment..."
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

# Set up environment file
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cp .env.example .env

    # Generate JWT secret
    JWT_SECRET=$(python3 -c "import secrets; print(secrets.token_urlsafe(32))")
    sed -i "s/change-this-to-a-random-secret/$JWT_SECRET/" .env

    echo ""
    echo "⚠️  IMPORTANT: Edit /srv/panel/.env and set:"
    echo "   - PANEL_USER (admin username)"
    echo "   - PANEL_PASS (strong password)"
    echo ""
    read -p "Press Enter to edit .env now, or Ctrl+C to do it later..."
    nano .env
fi

# Install systemd service
echo "🔧 Installing systemd service..."
cp panel.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable panel

# Install nginx configuration
echo "🌐 Installing nginx configuration..."
cp nginx-panel.conf /etc/nginx/sites-available/panel
ln -sf /etc/nginx/sites-available/panel /etc/nginx/sites-enabled/
nginx -t

# Start services
echo "🚀 Starting services..."
systemctl start panel
systemctl reload nginx

# Check status
echo ""
echo "✅ Installation complete!"
echo ""
echo "Status:"
systemctl status panel --no-pager -l
echo ""
echo "Next steps:"
echo "1. Configure DNS: Point panel.sebkucera.dev to this server's IP"
echo "2. Set up SSL: sudo certbot --nginx -d panel.sebkucera.dev"
echo "3. Test API: curl http://localhost:8081/"
echo "4. View logs: sudo journalctl -u panel -f"
echo ""
echo "API will be available at: https://panel.sebkucera.dev"
