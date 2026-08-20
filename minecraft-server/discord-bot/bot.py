"""
bot.py — Discord front-end for the Minecraft control panel.

WHY this file exists:
    Checking whether the server is up, or starting it for friends, currently
    means opening the web panel and logging in. This puts the same controls in
    the Discord guild, and shows live player count in the bot's presence.

Data source:
    The panel API via panel_client.PanelClient (see that file).

Data flow:
    poll_panel() every 60s -> GET /server/status
                           -> update the bot's presence when the text changed
                           -> announce in a channel when online/offline flipped

    slash command -> defer -> PanelClient call -> followup message
"""

import os
import sys

import discord
from discord import app_commands
from discord.ext import tasks
from dotenv import load_dotenv

from panel_client import PanelClient, PanelError


load_dotenv()

# How often we ask the panel for server state.
# Discord allows roughly 5 presence updates per 20s; one per minute (and only
# when the text actually changed) sits far inside that.
POLL_INTERVAL_SECONDS = 60

# One control command per guild per minute, so nobody can flap start/stop.
CONTROL_COOLDOWN_SECONDS = 60

COLOR_ONLINE = 0x3BA55D   # Discord green
COLOR_OFFLINE = 0xED4245  # Discord red


def read_required(name):
    """Read an env var that the bot cannot run without."""
    value = os.getenv(name, "").strip()
    if not value:
        print(f"Missing required setting {name} — see .env.example", file=sys.stderr)
        sys.exit(1)
    return value


def read_optional_id(name):
    """Read an optional Discord snowflake id. Returns None when unset."""
    value = os.getenv(name, "").strip()
    if not value:
        return None
    return int(value)


class Config:
    """Everything the bot reads from .env, in one place."""

    def __init__(self):
        self.discord_token = read_required("DISCORD_TOKEN")
        self.guild_id = int(read_required("DISCORD_GUILD_ID"))
        self.announce_channel_id = read_optional_id("DISCORD_ANNOUNCE_CHANNEL_ID")
        # Empty means everyone in the guild may run the control commands.
        self.admin_role_id = read_optional_id("MCBOT_ADMIN_ROLE_ID")
        self.panel_url = os.getenv("PANEL_URL", "http://127.0.0.1:8081")
        self.panel_user = read_required("PANEL_USER")
        self.panel_pass = read_required("PANEL_PASS")
        self.public_address = os.getenv("MC_PUBLIC_ADDRESS", "178.17.3.31")
        # Public https base of the panel, used for embed images (server icon)
        # and the live map link. Unlike panel_url this goes through the proxy.
        self.panel_public_url = os.getenv("PANEL_PUBLIC_URL", "https://panel.sebkucera.dev")


def describe_status(status):
    """
    Turn a /server/status body into what the presence should say.

    Returns (presence text, status dot). A bot cannot show as truly offline —
    discord.Status.invisible would make the bot itself look dead — so a stopped
    server is shown as the red "do not disturb" dot instead.
    """
    if not status.get("online"):
        return "server offline", discord.Status.dnd

    players = status.get("players")
    if not players:
        # Port is open but the status query failed — usually still booting.
        return "server online", discord.Status.online

    return f"{players['online']}/{players['max']} players", discord.Status.online


def user_is_allowed(interaction, config):
    """
    True when this user may run a control command.

    With MCBOT_ADMIN_ROLE_ID unset (the default) everyone in the guild may.
    Set it to a role id later and only that role can start/stop the server.
    """
    if config.admin_role_id is None:
        return True

    member_roles = getattr(interaction.user, "roles", [])
    for role in member_roles:
        if role.id == config.admin_role_id:
            return True
    return False


async def respond(interaction, message):
    """
    Send a plain reply, whether or not the interaction was already deferred.

    Control commands defer first (the panel can take 90s), read-only ones may
    not have, and Discord rejects the wrong call for the current state.
    """
    if interaction.response.is_done():
        await interaction.followup.send(message)
        return
    await interaction.response.send_message(message)


class MinecraftBot(discord.Client):
    """Holds the panel client, the poll loop, and the last state we saw."""

    def __init__(self, config):
        # Slash commands need no privileged intents.
        super().__init__(intents=discord.Intents.default())
        self.config = config
        self.tree = app_commands.CommandTree(self)
        self.panel = PanelClient(config.panel_url, config.panel_user, config.panel_pass)
        self.last_online = None
        self.last_presence_text = None

    async def setup_hook(self):
        """Runs once before the bot connects: open HTTP, register commands."""
        await self.panel.connect()

        register_commands(self)

        # Sync to the one guild so commands appear immediately.
        # A global sync can take up to an hour to propagate.
        guild = discord.Object(id=self.config.guild_id)
        self.tree.copy_global_to(guild=guild)
        await self.tree.sync(guild=guild)

        self.poll_panel.start()

    async def close(self):
        await self.panel.close()
        await super().close()

    @tasks.loop(seconds=POLL_INTERVAL_SECONDS)
    async def poll_panel(self):
        """Refresh presence, and announce when the server went up or down."""
        try:
            status = await self.panel.get_status()
        except PanelError as error:
            # The panel being down is not the same as the server being down,
            # so say that rather than claiming the server is offline.
            await self.set_presence("panel unreachable", discord.Status.idle)
            print(f"Poll failed: {error}", file=sys.stderr)
            return

        presence_text, status_dot = describe_status(status)
        await self.set_presence(presence_text, status_dot)
        await self.announce_state_change(status)

    @poll_panel.before_loop
    async def before_poll_panel(self):
        await self.wait_until_ready()

    async def set_presence(self, text, status_dot):
        """Update presence only when the text changed, to stay off the rate limit."""
        if text == self.last_presence_text:
            return
        self.last_presence_text = text

        activity = discord.Activity(type=discord.ActivityType.watching, name=text)
        await self.change_presence(status=status_dot, activity=activity)

    async def announce_state_change(self, status):
        """
        Post to the announce channel when online/offline flipped.

        Driven by the poll rather than by the commands, so a start from the web
        panel — or the backend's idle auto-stop — gets announced too. Command
        handlers set last_online themselves after a successful start/stop, so a
        change the bot itself caused (already visible as the command's reply in
        the channel) is NOT announced a second time.
        """
        if self.config.announce_channel_id is None:
            return

        online = bool(status.get("online"))

        if self.last_online is None:
            # First poll after a bot restart. Remember the state, stay quiet:
            # otherwise every restart would announce.
            self.last_online = online
            return

        if online == self.last_online:
            return

        self.last_online = online

        channel = self.get_channel(self.config.announce_channel_id)
        if channel is None:
            print("Announce channel id not found", file=sys.stderr)
            return

        await channel.send(self.build_announcement(online, status))

    def build_announcement(self, online, status):
        """Wording for the state-change post."""
        if online:
            return f"🟢 **Server is online** — join at `{self.config.public_address}`"

        if status.get("lastStopReason") == "idle":
            return "💤 **Server stopped automatically** — nobody online for an hour."

        return "🔴 **Server stopped.**"


def register_commands(bot):
    """Define the five slash commands on the bot's command tree."""

    def guild_cooldown_key(interaction):
        """Cooldown is shared per guild, not per user — one server, one queue."""
        return interaction.guild_id

    def head_url(name):
        return f"https://mc-heads.net/avatar/{name}/64"

    @bot.tree.command(name="status", description="Is the Minecraft server up?")
    async def status_command(interaction):
        await interaction.response.defer()
        status = await bot.panel.get_status()

        online = bool(status.get("online"))
        players = status.get("players")

        if online:
            embed = discord.Embed(title="🟢 Server online", color=COLOR_ONLINE)
            embed.add_field(name="Address", value=f"`{bot.config.public_address}`")
            if players:
                embed.add_field(name="Players", value=f"{players['online']}/{players['max']}")
            try:
                info = await bot.panel.get_info()
                if info.get("mcVersion"):
                    embed.add_field(name="Version", value=info["mcVersion"])
            except PanelError:
                pass
            embed.add_field(
                name="Live map",
                value=f"{bot.config.panel_public_url}/map/",
                inline=False,
            )
            embed.set_thumbnail(url=f"{bot.config.panel_public_url}/server/icon")
            embed.set_footer(text="💤 Stops by itself after 1h with nobody on — /start wakes it")
        else:
            embed = discord.Embed(title="🔴 Server offline", color=COLOR_OFFLINE)
            embed.description = "Use `/start` to bring it up — it takes about half a minute."
            if status.get("lastStopReason") == "idle":
                embed.set_footer(text="Went to sleep automatically — nobody was online for an hour")

        await interaction.followup.send(embed=embed)

    @bot.tree.command(name="players", description="Who is online right now")
    async def players_command(interaction):
        await interaction.response.defer()
        data = await bot.panel.get_players()

        if not data.get("serverRunning"):
            embed = discord.Embed(title="🔴 Server offline", color=COLOR_OFFLINE)
            embed.description = "Nobody can be online — use `/start` to bring it up."
            await interaction.followup.send(embed=embed)
            return

        count = data.get("playerCount")
        online_players = data.get("online", [])
        total = count["online"] if count else len(online_players)
        cap = count["max"] if count else "?"

        header = discord.Embed(
            title=f"Players — {total}/{cap} online",
            color=COLOR_ONLINE if total else 0x99AAB5,
        )
        header.set_footer(
            text=f"Whitelisted: {len(data.get('whitelist', []))} · Ops: {len(data.get('ops', []))}"
        )

        if not online_players:
            header.description = "Nobody right now. 💤"
            await interaction.followup.send(embed=header)
            return

        # One mini-embed per player: the author line carries their skin head.
        # Discord allows 10 embeds per message — header + 9 heads, rest as text.
        embeds = [header]
        for player in online_players[:9]:
            card = discord.Embed(color=COLOR_ONLINE)
            card.set_author(name=player["name"], icon_url=head_url(player["name"]))
            embeds.append(card)
        overflow = online_players[9:]
        if overflow:
            header.add_field(
                name="Also online",
                value=", ".join(p["name"] for p in overflow),
                inline=False,
            )

        await interaction.followup.send(embeds=embeds)

    @bot.tree.command(name="start", description="Start the Minecraft server")
    @app_commands.checks.cooldown(1, CONTROL_COOLDOWN_SECONDS, key=guild_cooldown_key)
    async def start_command(interaction):
        if not user_is_allowed(interaction, bot.config):
            await interaction.response.send_message("You are not allowed to do that.", ephemeral=True)
            return

        # Must acknowledge within 3 seconds; the panel can take 90. The
        # deferred "thinking…" message becomes the single final reply.
        await interaction.response.defer()
        await bot.panel.start_server()
        # We caused this state change and are about to say so — the poll
        # loop must not announce it a second time.
        bot.last_online = True
        await interaction.edit_original_response(
            content=f"🟢 **Server is online** — join at `{bot.config.public_address}`"
        )

    @bot.tree.command(name="stop", description="Stop the Minecraft server")
    @app_commands.checks.cooldown(1, CONTROL_COOLDOWN_SECONDS, key=guild_cooldown_key)
    async def stop_command(interaction):
        if not user_is_allowed(interaction, bot.config):
            await interaction.response.send_message("You are not allowed to do that.", ephemeral=True)
            return

        await interaction.response.defer()
        await bot.panel.stop_server()
        bot.last_online = False
        await interaction.edit_original_response(content="🔴 **Server stopped.**")

    @bot.tree.command(name="restart", description="Restart the Minecraft server")
    @app_commands.checks.cooldown(1, CONTROL_COOLDOWN_SECONDS, key=guild_cooldown_key)
    async def restart_command(interaction):
        if not user_is_allowed(interaction, bot.config):
            await interaction.response.send_message("You are not allowed to do that.", ephemeral=True)
            return

        await interaction.response.defer()
        await bot.panel.restart_server()
        bot.last_online = True
        await interaction.edit_original_response(
            content=f"🔄 **Server restarted** — join at `{bot.config.public_address}`"
        )

    @bot.tree.error
    async def on_command_error(interaction, error):
        """One place to turn expected failures into a readable reply."""
        if isinstance(error, app_commands.CommandOnCooldown):
            seconds = int(error.retry_after)
            await respond(interaction, f"⏳ Too soon — try again in {seconds}s.")
            return

        original = getattr(error, "original", error)
        if isinstance(original, PanelError):
            await respond(interaction, f"⚠️ {original}")
            return

        print(f"Unhandled command error: {error!r}", file=sys.stderr)
        await respond(interaction, "⚠️ Something went wrong — check the bot logs.")


def main():
    config = Config()
    bot = MinecraftBot(config)
    bot.run(config.discord_token)


if __name__ == "__main__":
    main()
