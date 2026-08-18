"""
panel_client.py — async HTTP client for the Minecraft control panel API.

WHY this file exists:
    The Discord bot must never touch screen/java/systemd itself. Every action
    goes through the panel's FastAPI backend, which already owns the hardened
    lifecycle logic (session.lock wait, pkill fallback, KillMode=process).
    This file is the only place in the bot that knows how to talk to it.

Data source:
    The panel API — normally http://127.0.0.1:8081 on the same box as the bot.

Data flow:
    login() -> JWT held in memory -> request() sends it as a Bearer token
             -> a 401 triggers one re-login and one retry.
"""

import asyncio
import aiohttp


# How long we allow each kind of call to take, in seconds.
# These must be LARGER than the backend's own waits, or we would time out on a
# call that is actually still succeeding. Backend worst cases (backend/app.py):
#   start_server()   waits up to 90s for the port to open
#   stop_server()    up to 30s stop + 2s kill + 15s session.lock wait
#   restart          stop + 3s pause + start
READ_TIMEOUT_SECONDS = 10
START_TIMEOUT_SECONDS = 120
STOP_TIMEOUT_SECONDS = 90
RESTART_TIMEOUT_SECONDS = 180


class PanelError(Exception):
    """A panel call failed. The message is safe to show in Discord."""


class PanelClient:
    """Talks to the panel API and keeps a login token alive."""

    def __init__(self, base_url, username, password):
        self.base_url = base_url.rstrip("/")
        self.username = username
        self.password = password
        self.token = None
        self.session = None

    async def connect(self):
        """Open the HTTP session. Call once, after the event loop is running."""
        self.session = aiohttp.ClientSession()

    async def close(self):
        """Close the HTTP session on shutdown."""
        if self.session is not None:
            await self.session.close()
            self.session = None

    async def login(self):
        """
        Exchange the panel username/password for a JWT and cache it.

        The token lasts 7 days (backend/app.py JWT_EXPIRATION_DAYS), so this
        runs on startup and then only when a call comes back 401.
        """
        url = f"{self.base_url}/auth/login"
        credentials = {"username": self.username, "password": self.password}
        timeout = aiohttp.ClientTimeout(total=READ_TIMEOUT_SECONDS)

        try:
            async with self.session.post(url, json=credentials, timeout=timeout) as response:
                if response.status == 401:
                    raise PanelError("Panel rejected the bot's username/password.")
                if response.status == 429:
                    raise PanelError("Too many login attempts — try again in a minute.")
                if response.status != 200:
                    raise PanelError(f"Login failed (HTTP {response.status}).")
                body = await response.json()
        except asyncio.TimeoutError:
            raise PanelError("Panel did not answer the login request in time.")
        except aiohttp.ClientError:
            raise PanelError("Cannot reach the panel API.")

        self.token = body["token"]

    async def request(self, method, path, timeout_seconds):
        """
        Send one authenticated request and return the decoded JSON body.

        Retries exactly once after a 401, because the cached token expires every
        7 days and we would otherwise need a restart to recover.
        """
        if self.token is None:
            await self.login()

        response_status, body = await self.send(method, path, timeout_seconds)

        if response_status == 401:
            await self.login()
            response_status, body = await self.send(method, path, timeout_seconds)

        if response_status != 200:
            raise PanelError(self.describe_failure(response_status, body))

        return body

    async def send(self, method, path, timeout_seconds):
        """
        One raw attempt. Returns (status_code, decoded_body).

        Split out from request() so the 401 retry above reads as two plain
        attempts rather than a loop.
        """
        url = f"{self.base_url}{path}"
        headers = {"Authorization": f"Bearer {self.token}"}
        timeout = aiohttp.ClientTimeout(total=timeout_seconds)

        try:
            async with self.session.request(method, url, headers=headers, timeout=timeout) as response:
                body = await self.decode_body(response)
                return response.status, body
        except asyncio.TimeoutError:
            raise PanelError(f"Panel did not answer within {timeout_seconds}s.")
        except aiohttp.ClientError:
            raise PanelError("Cannot reach the panel API.")

    async def decode_body(self, response):
        """Return the JSON body, or the raw text when the panel sends an error page."""
        try:
            return await response.json()
        except Exception:
            return await response.text()

    def describe_failure(self, status, body):
        """Turn a failed response into a sentence worth showing in Discord."""
        if isinstance(body, dict) and "detail" in body:
            return str(body["detail"])
        return f"Panel returned HTTP {status}."

    # ---- The calls the bot actually makes -------------------------------

    async def get_status(self):
        """Server state: {"online": bool, "players": {"online": n, "max": n} | None, ...}"""
        return await self.request("GET", "/server/status", READ_TIMEOUT_SECONDS)

    async def get_players(self):
        """Online sample plus the whitelist / ops / banned lists."""
        return await self.request("GET", "/players", READ_TIMEOUT_SECONDS)

    async def start_server(self):
        return await self.request("POST", "/server/start", START_TIMEOUT_SECONDS)

    async def stop_server(self):
        return await self.request("POST", "/server/stop", STOP_TIMEOUT_SECONDS)

    async def restart_server(self):
        return await self.request("POST", "/server/restart", RESTART_TIMEOUT_SECONDS)
