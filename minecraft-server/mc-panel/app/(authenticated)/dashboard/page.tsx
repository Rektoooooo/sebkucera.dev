'use client';

import { useEffect, useState, useCallback } from 'react';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LogViewer } from '@/components/server/LogViewer';

interface ServerStatus {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  port: number;
}

export default function DashboardPage() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const data = await api.get<ServerStatus>('/server/status');
      setStatus(data);

      // Clear loading state when status changes as expected
      setActionLoading((currentAction) => {
        if (currentAction === 'start' && data.online) return null;
        if (currentAction === 'stop' && !data.online) return null;
        if (currentAction === 'restart' && data.online) return null;
        return currentAction;
      });
    } catch (error) {
      console.error('Failed to fetch status:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleServerAction = async (action: 'start' | 'stop' | 'restart') => {
    setActionLoading(action);
    try {
      await api.post(`/server/${action}`);
      // Don't clear loading state - let it clear when status changes
      // The status poll will update and buttons will re-enable automatically
    } catch (error: any) {
      alert(`Failed to ${action} server: ${error.message}`);
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const isOnline = status?.online === true;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-zinc-400">Monitor and control your Minecraft server</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Server Status">
          <div className="space-y-4">
            <div>
              <Badge variant={isOnline ? 'success' : 'danger'} className="text-lg px-4 py-2">
                {isOnline ? '● Online' : '● Offline'}
              </Badge>
            </div>
            {isOnline && status?.players && (
              <div>
                <p className="text-zinc-400 text-sm mb-1">Players Online</p>
                <p className="text-2xl font-bold text-white">
                  {status.players.online} / {status.players.max}
                </p>
              </div>
            )}
          </div>
        </Card>

        <Card title="Quick Actions" className="lg:col-span-2">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="success"
              onClick={() => handleServerAction('start')}
              loading={actionLoading === 'start'}
              disabled={isOnline || actionLoading !== null}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Start Server
            </Button>
            <Button
              variant="danger"
              onClick={() => handleServerAction('stop')}
              loading={actionLoading === 'stop'}
              disabled={!isOnline || actionLoading !== null}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                />
              </svg>
              Stop Server
            </Button>
            <Button
              variant="warning"
              onClick={() => handleServerAction('restart')}
              loading={actionLoading === 'restart'}
              disabled={!isOnline || actionLoading !== null}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Restart Server
            </Button>
          </div>
        </Card>
      </div>

      <Card>
        <LogViewer />
      </Card>
    </div>
  );
}
