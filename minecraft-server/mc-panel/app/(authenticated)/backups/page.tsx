'use client';

import { useEffect, useState } from 'react';
import {
  Archive,
  CalendarClock,
  Download,
  History,
  Plus,
  Trash2,
} from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import { formatBytes, type Backup, type ScheduleConfig } from '@/lib/types';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function backupDate(id: string): string {
  // Names look like [auto_]YYYY-MM-DD_HH-MM[-SS].zip
  const match = id.match(/(\d{4}-\d{2}-\d{2})_(\d{2})-(\d{2})/);
  if (!match) return '—';
  return `${match[1]} ${match[2]}:${match[3]}`;
}

export default function BackupsPage() {
  const [backups, setBackups] = useState<Backup[] | null>(null);
  const [schedule, setSchedule] = useState<ScheduleConfig | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [savingSchedule, setSavingSchedule] = useState(false);

  const load = async () => {
    try {
      const [backupsRes, scheduleRes] = await Promise.all([
        api.get<{ backups: Backup[] }>('/backups/list'),
        api.get<ScheduleConfig>('/backups/schedule'),
      ]);
      setBackups(backupsRes.backups);
      setSchedule(scheduleRes);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to load backups');
      setBackups([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const createBackup = async () => {
    setBusy('create');
    try {
      const res = await api.post<{ id: string }>('/backups/create');
      toast.success(`Backup created: ${res.id}`);
      await load();
    } catch (err: any) {
      toast.error(err?.message || 'Backup failed');
    } finally {
      setBusy(null);
    }
  };

  const download = async (id: string) => {
    setBusy(`download:${id}`);
    try {
      await api.download(`/backups/download/${encodeURIComponent(id)}`, id);
    } catch (err: any) {
      toast.error(err?.message || 'Download failed');
    } finally {
      setBusy(null);
    }
  };

  const restore = async (id: string) => {
    setBusy(`restore:${id}`);
    try {
      await api.post(`/backups/restore/${encodeURIComponent(id)}`);
      toast.success('Backup restored');
    } catch (err: any) {
      toast.error(err?.message || 'Restore failed');
    } finally {
      setBusy(null);
    }
  };

  const remove = async (id: string) => {
    setBusy(`delete:${id}`);
    try {
      await api.post(`/backups/delete/${encodeURIComponent(id)}`);
      toast.success('Backup deleted');
      await load();
    } catch (err: any) {
      toast.error(err?.message || 'Delete failed');
    } finally {
      setBusy(null);
    }
  };

  const saveSchedule = async () => {
    if (!schedule) return;
    setSavingSchedule(true);
    try {
      const updated = await api.put<ScheduleConfig>('/backups/schedule', {
        enabled: schedule.enabled,
        time: schedule.time,
        retention: schedule.retention,
      });
      setSchedule(updated);
      toast.success('Schedule saved');
    } catch (err: any) {
      toast.error(err?.message || 'Failed to save schedule');
    } finally {
      setSavingSchedule(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Backups</h1>
          <p className="text-sm text-muted-foreground">
            World snapshots — download, restore or schedule them
          </p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button loading={busy === 'create'} disabled={busy !== null}>
              <Plus />
              Create Backup
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Create a backup now?</AlertDialogTitle>
              <AlertDialogDescription>
                The server will briefly stop while the world is archived, then start
                again. Players will be disconnected.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={createBackup}>Create Backup</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
            <CardTitle>Automatic Backups</CardTitle>
          </div>
          <CardDescription>
            Runs daily at the configured time (server local time). Old automatic backups
            are pruned; manual ones are kept forever.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {schedule === null ? (
            <Skeleton className="h-9 w-full" />
          ) : (
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex items-center gap-3">
                <Switch
                  id="schedule-enabled"
                  checked={schedule.enabled}
                  onCheckedChange={(checked) =>
                    setSchedule({ ...schedule, enabled: checked })
                  }
                />
                <Label htmlFor="schedule-enabled">Enabled</Label>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="schedule-time">Time</Label>
                <Input
                  id="schedule-time"
                  type="time"
                  value={schedule.time}
                  onChange={(e) => setSchedule({ ...schedule, time: e.target.value })}
                  className="w-32"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="schedule-retention">Keep last</Label>
                <Input
                  id="schedule-retention"
                  type="number"
                  min={1}
                  max={30}
                  value={schedule.retention}
                  onChange={(e) =>
                    setSchedule({ ...schedule, retention: Number(e.target.value) })
                  }
                  className="w-24"
                />
              </div>
              <Button onClick={saveSchedule} loading={savingSchedule} variant="secondary">
                Save Schedule
              </Button>
              {schedule.lastRunAt && (
                <p className="text-xs text-muted-foreground">
                  Last run {schedule.lastRunAt.replace('T', ' ')} —{' '}
                  {schedule.lastRunResult ?? 'unknown'}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Backups{backups ? ` (${backups.length})` : ''}</CardTitle>
        </CardHeader>
        <CardContent>
          {backups === null ? (
            <div className="space-y-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          ) : backups.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-10 text-center">
              <Archive className="h-10 w-10 text-muted-foreground/50" />
              <p className="text-sm font-medium">No backups yet</p>
              <p className="text-sm text-muted-foreground">
                Create one now or enable the daily schedule above.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Backup</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backups.map((backup) => (
                  <TableRow key={backup.id}>
                    <TableCell className="font-mono text-xs">{backup.id}</TableCell>
                    <TableCell>
                      {backup.id.startsWith('auto_') ? (
                        <Badge variant="secondary">auto</Badge>
                      ) : (
                        <Badge variant="outline">manual</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {backupDate(backup.id)}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatBytes(backup.sizeBytes)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => download(backup.id)}
                          loading={busy === `download:${backup.id}`}
                          disabled={busy !== null}
                        >
                          <Download />
                          Download
                        </Button>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              loading={busy === `restore:${backup.id}`}
                              disabled={busy !== null}
                            >
                              <History />
                              Restore
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Restore this backup?</AlertDialogTitle>
                              <AlertDialogDescription>
                                The current world will be replaced with{' '}
                                <span className="font-mono text-foreground">{backup.id}</span>.
                                The server stops during the restore and starts again after.
                                A safety copy of the current world is kept on the server.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                variant="destructive"
                                onClick={() => restore(backup.id)}
                              >
                                Restore Backup
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-400 hover:text-red-400"
                              loading={busy === `delete:${backup.id}`}
                              disabled={busy !== null}
                            >
                              <Trash2 />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete this backup?</AlertDialogTitle>
                              <AlertDialogDescription>
                                <span className="font-mono text-foreground">{backup.id}</span>{' '}
                                will be permanently removed. This cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                variant="destructive"
                                onClick={() => remove(backup.id)}
                              >
                                Delete Backup
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
