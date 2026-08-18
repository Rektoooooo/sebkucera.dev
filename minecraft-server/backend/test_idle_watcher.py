"""
test_idle_watcher.py — checks the idle auto-stop decision logic.

Run:  ./venv/bin/python test_idle_watcher.py

WHY this file exists:
    In production the watcher only acts after an hour of an empty server, so
    its guards are almost impossible to exercise by hand. These stubs replace
    the clock, the sleep and the three helpers it calls, so every branch runs
    in milliseconds.

What it covers:
    - an empty server past the limit does get stopped
    - a server with players never gets stopped
    - "status query returned nothing" is NOT treated as zero players
    - a running backup suspends the watcher
    - a stopped server never gets stopped again
"""

import asyncio
import sys

import app


# Real sleep, captured before we replace app's copy — the fake one calls it.
real_sleep = asyncio.sleep

IDLE_LIMIT_MINUTES = 2
TICKS_TO_RUN = 6  # comfortably past the limit above


class FakeClock:
    """A monotonic clock the test moves forward by hand."""

    def __init__(self):
        self.now = 0.0

    def monotonic(self):
        return self.now

    def advance(self, seconds):
        self.now += seconds


class WatcherHarness:
    """Runs idle_stop_watcher against stubbed helpers and records what it did."""

    def __init__(self, port_open, player_count):
        self.port_open = port_open
        self.player_count = player_count
        self.stop_calls = []
        self.clock = FakeClock()

    async def fake_is_port_open(self):
        return self.port_open

    async def fake_get_player_count(self):
        return self.player_count

    async def fake_stop_server(self, reason="manual"):
        self.stop_calls.append(reason)
        # A real stop closes the port; reflect that so the next tick sees it.
        self.port_open = False
        return True

    async def run(self):
        """Tick the watcher TICKS_TO_RUN times, then stop it."""
        ticks = {"count": 0}

        async def fake_sleep(seconds):
            ticks["count"] += 1
            self.clock.advance(seconds)
            if ticks["count"] > TICKS_TO_RUN:
                raise asyncio.CancelledError
            await real_sleep(0)  # let the loop yield

        app.time.monotonic = self.clock.monotonic
        app.asyncio.sleep = fake_sleep
        app.is_port_open = self.fake_is_port_open
        app.get_player_count = self.fake_get_player_count
        app.stop_server = self.fake_stop_server
        app.IDLE_STOP_MINUTES = IDLE_LIMIT_MINUTES
        app.idle_since = None

        try:
            await app.idle_stop_watcher()
        except asyncio.CancelledError:
            pass


async def empty_server_gets_stopped():
    harness = WatcherHarness(port_open=True, player_count={"online": 0, "max": 20})
    await harness.run()
    return harness.stop_calls == ["idle"]


async def busy_server_is_left_alone():
    harness = WatcherHarness(port_open=True, player_count={"online": 3, "max": 20})
    await harness.run()
    return harness.stop_calls == []


async def unknown_player_count_does_not_count_as_empty():
    # Port open but no status answer — the JVM is still booting. Treating this
    # as zero players would shut down a server somebody just started.
    harness = WatcherHarness(port_open=True, player_count=None)
    await harness.run()
    return harness.stop_calls == []


async def running_backup_suspends_the_watcher():
    # A backup stops and restarts the server; the watcher must not race it.
    harness = WatcherHarness(port_open=True, player_count={"online": 0, "max": 20})
    await app.backup_lock.acquire()
    try:
        await harness.run()
    finally:
        app.backup_lock.release()
    return harness.stop_calls == []


async def stopped_server_is_not_stopped_again():
    harness = WatcherHarness(port_open=False, player_count=None)
    await harness.run()
    return harness.stop_calls == []


async def main():
    checks = [
        ("empty server past the limit gets stopped", empty_server_gets_stopped),
        ("server with players is left alone", busy_server_is_left_alone),
        ("unknown player count is not treated as empty", unknown_player_count_does_not_count_as_empty),
        ("running backup suspends the watcher", running_backup_suspends_the_watcher),
        ("already-stopped server is not stopped again", stopped_server_is_not_stopped_again),
    ]

    failures = 0
    for description, check in checks:
        passed = await check()
        if passed:
            print(f"  PASS  {description}")
        else:
            print(f"  FAIL  {description}")
            failures += 1

    print()
    if failures:
        print(f"{failures} of {len(checks)} checks failed")
        sys.exit(1)
    print(f"All {len(checks)} checks passed")


if __name__ == "__main__":
    asyncio.run(main())
