'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Archive,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  Package,
  Server,
  Settings2,
  Users,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth-context';
import { useServerStatus } from '@/lib/server-status-context';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/map', label: 'Map', icon: Map },
  { href: '/players', label: 'Players', icon: Users },
  { href: '/mods', label: 'Mods', icon: Package },
  { href: '/backups', label: 'Backups', icon: Archive },
  { href: '/settings', label: 'Settings', icon: Settings2 },
];

function StatusPill() {
  const { status } = useServerStatus();
  return (
    <div className="flex items-center gap-2 rounded-md border px-3 py-2 text-xs">
      <span
        className={cn(
          'h-2 w-2 shrink-0 rounded-full',
          status?.online
            ? 'bg-[hsl(var(--success))] shadow-[0_0_6px_hsl(var(--success))]'
            : 'bg-destructive'
        )}
      />
      {status === null ? (
        <span className="text-muted-foreground">Checking…</span>
      ) : status.online ? (
        <span>
          Online
          {status.players && (
            <span className="text-muted-foreground">
              {' '}
              · {status.players.online}/{status.players.max} players
            </span>
          )}
        </span>
      ) : (
        <span className="text-muted-foreground">Offline</span>
      )}
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <Server className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">MC Panel</div>
        <div className="text-xs text-muted-foreground">Server Control</div>
      </div>
    </div>
  );
}

/** Shared nav content used by the desktop sidebar and the mobile drawer. */
function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 py-5">
        <Brand />
      </div>

      <div className="mx-5 mb-4">
        <StatusPill />
      </div>

      <Separator />

      <nav className="flex-1 space-y-1 p-3">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-3">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}

/** Desktop sidebar — hidden on small screens. */
export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 border-r bg-card lg:block">
      <SidebarNav />
    </aside>
  );
}

/** Mobile top bar with a hamburger that opens the nav in a drawer. */
export function MobileTopbar() {
  const [open, setOpen] = useState(false);
  const { status } = useServerStatus();

  return (
    <header className="sticky top-0 z-40 flex items-center gap-3 border-b bg-card/95 px-4 py-3 backdrop-blur lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarNav onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <Brand />

      <span
        className={cn(
          'ml-auto flex items-center gap-1.5 text-xs',
          status?.online ? 'text-[hsl(var(--success))]' : 'text-muted-foreground'
        )}
      >
        <span
          className={cn(
            'h-2 w-2 rounded-full',
            status?.online ? 'bg-[hsl(var(--success))]' : 'bg-destructive'
          )}
        />
        {status === null ? '…' : status.online ? (status.players ? `${status.players.online}/${status.players.max}` : 'Online') : 'Offline'}
      </span>
    </header>
  );
}
