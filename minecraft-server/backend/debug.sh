#!/bin/bash

echo "🔍 Debugging Minecraft Control Panel Backend"
echo "============================================"
echo ""

# Check if service is running
echo "1️⃣ Service Status:"
sudo systemctl status panel --no-pager -l | head -20
echo ""

# Check if port 8081 is listening
echo "2️⃣ Port 8081 Status:"
sudo lsof -i :8081 || echo "❌ Port 8081 is not open"
echo ""

# Check recent logs
echo "3️⃣ Recent Service Logs:"
sudo journalctl -u panel -n 50 --no-pager
echo ""

# Test local connection
echo "4️⃣ Testing Local Connection:"
curl -s http://localhost:8081/ || echo "❌ Cannot connect to localhost:8081"
echo ""

# Check if Python process is running
echo "5️⃣ Python Processes:"
ps aux | grep "uvicorn app:app" | grep -v grep || echo "❌ No uvicorn process found"
echo ""

echo "============================================"
echo "✅ Debug complete"
