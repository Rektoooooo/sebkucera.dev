'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Archive,
  LayoutDashboard,
  LogOut,
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

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/players', label: 'Players', icon: Users },
  { href: '/mods', label: 'Mods', icon: Package },
  { href: '/backups', label: 'Backups', icon: Archive },
  { href: '/settings', label: 'Settings', icon: Settings2 },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { status } = useServerStatus();

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r bg-card sticky top-0">
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Server className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">MC Panel</div>
          <div className="text-xs text-muted-foreground">Server Control</div>
        </div>
      </div>

      <div className="mx-5 mb-4 flex items-center gap-2 rounded-md border px-3 py-2 text-xs">
        <span
          className={cn(
            'h-2 w-2 rounded-full',
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

      <Separator />

      <nav className="flex-1 space-y-1 p-3">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
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
    </aside>
  );
}
