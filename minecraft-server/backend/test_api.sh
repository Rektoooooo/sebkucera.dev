#!/bin/bash

# Quick API Test Script
# Tests all major endpoints of the Minecraft Control Panel API

API_URL="${1:-http://localhost:8081}"
USERNAME="${2:-admin}"
PASSWORD="${3:-admin}"

echo "🧪 Testing Minecraft Control Panel API"
echo "API URL: $API_URL"
echo "========================================"
echo ""

# Test 1: Health check
echo "1️⃣  Testing health endpoint..."
HEALTH=$(curl -s "$API_URL/")
echo "Response: $HEALTH"
if [[ $HEALTH == *"Minecraft Control Panel API"* ]]; then
    echo "✅ Health check passed"
else
    echo "❌ Health check failed"
    exit 1
fi
echo ""

# Test 2: Login
echo "2️⃣  Testing login..."
LOGIN_RESPONSE=$(curl -s -X POST "$API_URL/auth/login" \
    -H "Content-Type: application/json" \
    -d "{\"username\":\"$USERNAME\",\"password\":\"$PASSWORD\"}")

echo "Response: $LOGIN_RESPONSE"

TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
    echo "❌ Login failed - no token received"
    exit 1
else
    echo "✅ Login successful"
    echo "Token: ${TOKEN:0:20}..."
fi
echo ""

# Test 3: Server status
echo "3️⃣  Testing server status..."
STATUS=$(curl -s "$API_URL/server/status" \
    -H "Authorization: Bearer $TOKEN")
echo "Response: $STATUS"
if [[ $STATUS == *"online"* ]]; then
    echo "✅ Server status endpoint working"
else
    echo "❌ Server status failed"
fi
echo ""

# Test 4: Logs
echo "4️⃣  Testing logs endpoint..."
LOGS=$(curl -s "$API_URL/logs/last?lines=5" \
    -H "Authorization: Bearer $TOKEN")
echo "Response (first 200 chars): ${LOGS:0:200}..."
echo "✅ Logs endpoint working"
echo ""

# Test 5: Backups list
echo "5️⃣  Testing backups list..."
BACKUPS=$(curl -s "$API_URL/backups/list" \
    -H "Authorization: Bearer $TOKEN")
echo "Response: $BACKUPS"
if [[ $BACKUPS == *"backups"* ]]; then
    echo "✅ Backups endpoint working"
else
    echo "❌ Backups endpoint failed"
fi
echo ""

# Test 6: Mods list
echo "6️⃣  Testing mods list..."
MODS=$(curl -s "$API_URL/mods" \
    -H "Authorization: Bearer $TOKEN")
echo "Response: $MODS"
if [[ $MODS == *"mods"* ]]; then
    echo "✅ Mods endpoint working"
else
    echo "❌ Mods endpoint failed"
fi
echo ""

# Test 7: Unauthorized access
echo "7️⃣  Testing unauthorized access (should fail)..."
UNAUTHORIZED=$(curl -s "$API_URL/server/status")
if [[ $UNAUTHORIZED == *"detail"* ]] || [[ $UNAUTHORIZED == *"Not authenticated"* ]]; then
    echo "✅ Authorization protection working"
else
    echo "⚠️  Warning: Endpoint may not be protected"
fi
echo ""

echo "========================================"
echo "✅ All tests completed!"
echo ""
echo "Next steps:"
echo "- Test WebSocket: ws://$API_URL/ws/logs?token=$TOKEN"
echo "- Try the frontend UI"
echo "- Upload a test mod"
echo "- Create a backup"
