'use client';

import { useState } from 'react';
import {
  Activity,
  Cpu,
  HardDrive,
  MemoryStick,
  Play,
  RotateCcw,
  Square,
} from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import { usePoll } from '@/lib/use-poll';
import { useServerStatus } from '@/lib/server-status-context';
import { formatBytes, formatUptime, type Metrics } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { LogViewer } from '@/components/server/log-viewer';

type Action = 'start' | 'stop' | 'restart';

function StatCard({
  title,
  icon: Icon,
  loading,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-2 w-full" />
          </div>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const { status, loading: statusLoading, refetch: refetchStatus } = useServerStatus();
  const { data: metrics, loading: metricsLoading } = usePoll<Metrics>(
    () => api.get<Metrics>('/system/metrics'),
    5000
  );
  const [actionLoading, setActionLoading] = useState<Action | null>(null);

  const runAction = async (action: Action) => {
    setActionLoading(action);
    try {
      await api.post(`/server/${action}`);
      toast.success(
        action === 'start'
          ? 'Server started'
          : action === 'stop'
            ? 'Server stopped'
            : 'Server restarted'
      );
      await refetchStatus();
    } catch (err: any) {
      toast.error(err?.message || `Failed to ${action} server`);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Monitor and control your Minecraft server
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Server Status" icon={Activity} loading={statusLoading}>
          <div className="flex items-center gap-2">
            {status?.online ? (
              <Badge variant="success">● Online</Badge>
            ) : (
              <Badge variant="danger">● Offline</Badge>
            )}
            {status?.online && status.players && (
              <span className="text-sm text-muted-foreground">
                {status.players.online}/{status.players.max} players
              </span>
            )}
          </div>
          {metrics?.java && (
            <p className="mt-2 text-xs text-muted-foreground">
              Uptime {formatUptime(metrics.java.uptimeSeconds)} · Java RSS{' '}
              {formatBytes(metrics.java.rssBytes)}
            </p>
          )}
        </StatCard>

        <StatCard title="CPU" icon={Cpu} loading={metricsLoading}>
          <div className="text-2xl font-bold">
            {metrics ? `${metrics.cpuPercent.toFixed(0)}%` : '—'}
          </div>
          <Progress value={metrics?.cpuPercent ?? 0} className="mt-2" />
        </StatCard>

        <StatCard title="Memory" icon={MemoryStick} loading={metricsLoading}>
          <div className="text-2xl font-bold">
            {metrics ? `${metrics.memory.percent.toFixed(0)}%` : '—'}
          </div>
          <Progress value={metrics?.memory.percent ?? 0} className="mt-2" />
          {metrics && (
            <p className="mt-2 text-xs text-muted-foreground">
              {formatBytes(metrics.memory.usedBytes)} of{' '}
              {formatBytes(metrics.memory.totalBytes)}
            </p>
          )}
        </StatCard>

        <StatCard title="Disk" icon={HardDrive} loading={metricsLoading}>
          <div className="text-2xl font-bold">
            {metrics ? `${metrics.disk.percent.toFixed(0)}%` : '—'}
          </div>
          <Progress value={metrics?.disk.percent ?? 0} className="mt-2" />
          {metrics && (
            <p className="mt-2 text-xs text-muted-foreground">
              {formatBytes(metrics.disk.usedBytes)} of{' '}
              {formatBytes(metrics.disk.totalBytes)}
            </p>
          )}
        </StatCard>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Start and stop can take a minute or two while the world loads or saves.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            variant="success"
            onClick={() => runAction('start')}
            loading={actionLoading === 'start'}
            disabled={actionLoading !== null || status?.online === true}
          >
            <Play />
            Start Server
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                loading={actionLoading === 'stop'}
                disabled={actionLoading !== null || status?.online === false}
              >
                <Square />
                Stop Server
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Stop the server?</AlertDialogTitle>
                <AlertDialogDescription>
                  All players will be disconnected and the world will be saved.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  variant="destructive"
                  onClick={() => runAction('stop')}
                >
                  Stop Server
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="secondary"
                loading={actionLoading === 'restart'}
                disabled={actionLoading !== null || status?.online === false}
              >
                <RotateCcw />
                Restart Server
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Restart the server?</AlertDialogTitle>
                <AlertDialogDescription>
                  All players will be disconnected. The server comes back up
                  automatically — this can take a minute or two.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => runAction('restart')}>
                  Restart Server
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      {/* Deliberately outside any loading conditional so the WebSocket
          connection survives status refreshes. */}
      <Card>
        <CardContent className="pt-6">
          <LogViewer />
        </CardContent>
      </Card>
    </div>
  );
}
