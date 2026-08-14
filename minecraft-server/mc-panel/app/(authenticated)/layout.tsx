'use client';

import { useRequireAuth } from '@/lib/auth-context';
import { ServerStatusProvider } from '@/lib/server-status-context';
import { Sidebar } from '@/components/layout/sidebar';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ready = useRequireAuth();

  if (!ready) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <ServerStatusProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </ServerStatusProvider>
  );
}
