'use client';

import React, { createContext, useContext } from 'react';
import { api } from '@/lib/api';
import { usePoll } from '@/lib/use-poll';
import type { ServerStatus } from '@/lib/types';

interface ServerStatusContextType {
  status: ServerStatus | null;
  loading: boolean;
  refetch: () => Promise<void>;
}

const ServerStatusContext = createContext<ServerStatusContextType | undefined>(undefined);

/** One 5s status poll shared by the whole authenticated app. */
export function ServerStatusProvider({ children }: { children: React.ReactNode }) {
  const { data, loading, refetch } = usePoll<ServerStatus>(
    () => api.get<ServerStatus>('/server/status'),
    5000
  );

  return (
    <ServerStatusContext.Provider value={{ status: data, loading, refetch }}>
      {children}
    </ServerStatusContext.Provider>
  );
}

export function useServerStatus() {
  const context = useContext(ServerStatusContext);
  if (context === undefined) {
    throw new Error('useServerStatus must be used within a ServerStatusProvider');
  }
  return context;
}
