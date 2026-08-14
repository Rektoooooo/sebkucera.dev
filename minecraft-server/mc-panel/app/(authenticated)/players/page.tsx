'use client';

import { useState } from 'react';
import { Ban, Gavel, ShieldCheck, UserMinus, UserPlus, Users } from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import { usePoll } from '@/lib/use-poll';
import type { PlayersData } from '@/lib/types';
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
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NAME_RE = /^[A-Za-z0-9_]{1,16}$/;

export default function PlayersPage() {
  const { data, loading, refetch } = usePoll<PlayersData>(
    () => api.get<PlayersData>('/players'),
    10000
  );
  const [busy, setBusy] = useState<string | null>(null);
  const [addName, setAddName] = useState('');
  const [banReason, setBanReason] = useState('');

  // Minecraft flushes whitelist/ops/ban files shortly after the command runs;
  // refetch after a beat so the UI reflects it.
  const delayedRefetch = () => setTimeout(refetch, 800);

  const runPlayerAction = async (
    endpoint: string,
    name: string,
    successMessage: string,
    reason?: string
  ) => {
    setBusy(`${endpoint}:${name}`);
    try {
      await api.post(endpoint, reason ? { name, reason } : { name });
      toast.success(successMessage);
      delayedRefetch();
    } catch (err: any) {
      toast.error(err?.message || 'Action failed');
    } finally {
      setBusy(null);
    }
  };

  const handleAdd = async (endpoint: string, successMessage: string) => {
    const name = addName.trim();
    if (!NAME_RE.test(name)) {
      toast.error('Invalid player name (1–16 letters, numbers, underscores)');
      return;
    }
    await runPlayerAction(endpoint, name, successMessage);
    setAddName('');
  };

  const serverDown = data ? !data.serverRunning : false;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Players</h1>
        <p className="text-sm text-muted-foreground">
          Online players, whitelist, operators and bans
        </p>
      </div>

      {serverDown && (
        <div className="rounded-md border border-[hsl(var(--warning))]/40 bg-[hsl(var(--warning))]/10 px-4 py-3 text-sm text-[hsl(var(--warning))]">
          The server is offline — player management commands are unavailable until it starts.
        </div>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <CardTitle>
              Online
              {data?.playerCount && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  {data.playerCount.online}/{data.playerCount.max}
                </span>
              )}
            </CardTitle>
          </div>
          <CardDescription>Players currently connected to the server</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          ) : !data?.serverRunning ? (
            <p className="text-sm text-muted-foreground">Server is offline.</p>
          ) : data.online.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              {data.playerCount && data.playerCount.online > 0
                ? `${data.playerCount.online} player(s) online — the server did not share the name list.`
                : 'Nobody is online right now.'}
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-56 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.online.map((player) => (
                  <TableRow key={player.uuid || player.name}>
                    <TableCell className="font-medium">{player.name}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" disabled={busy !== null}>
                              <Gavel />
                              Kick
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Kick {player.name}?</AlertDialogTitle>
                              <AlertDialogDescription>
                                They can rejoin immediately.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() =>
                                  runPlayerAction('/players/kick', player.name, `Kicked ${player.name}`)
                                }
                              >
                                Kick
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog onOpenChange={(open) => !open && setBanReason('')}>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" disabled={busy !== null}>
                              <Ban />
                              Ban
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Ban {player.name}?</AlertDialogTitle>
                              <AlertDialogDescription>
                                They will be disconnected and unable to rejoin until pardoned.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <Input
                              placeholder="Reason (optional)"
                              value={banReason}
                              onChange={(e) => setBanReason(e.target.value)}
                            />
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                variant="destructive"
                                onClick={() =>
                                  runPlayerAction(
                                    '/players/ban',
                                    player.name,
                                    `Banned ${player.name}`,
                                    banReason.trim() || undefined
                                  )
                                }
                              >
                                Ban Player
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

      <Tabs defaultValue="whitelist">
        <TabsList>
          <TabsTrigger value="whitelist">
            Whitelist{data ? ` (${data.whitelist.length})` : ''}
          </TabsTrigger>
          <TabsTrigger value="ops">
            Operators{data ? ` (${data.ops.length})` : ''}
          </TabsTrigger>
          <TabsTrigger value="banned">
            Banned{data ? ` (${data.banned.length})` : ''}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="whitelist">
          <Card>
            <CardHeader>
              <CardTitle>Whitelist</CardTitle>
              <CardDescription>
                Players allowed to join when the whitelist is enforced
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Player name"
                  value={addName}
                  onChange={(e) => setAddName(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && handleAdd('/players/whitelist/add', 'Added to whitelist')
                  }
                  className="max-w-xs"
                  disabled={serverDown}
                />
                <Button
                  onClick={() => handleAdd('/players/whitelist/add', 'Added to whitelist')}
                  disabled={serverDown || busy !== null}
                >
                  <UserPlus />
                  Add
                </Button>
              </div>
              {data && data.whitelist.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.whitelist.map((entry) => (
                      <TableRow key={entry.uuid || entry.name}>
                        <TableCell className="font-medium">{entry.name}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={serverDown || busy !== null}
                            onClick={() =>
                              runPlayerAction(
                                '/players/whitelist/remove',
                                entry.name,
                                `Removed ${entry.name} from whitelist`
                              )
                            }
                          >
                            <UserMinus />
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-sm text-muted-foreground">The whitelist is empty.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ops">
          <Card>
            <CardHeader>
              <CardTitle>Operators</CardTitle>
              <CardDescription>Players with admin privileges on the server</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Player name"
                  value={addName}
                  onChange={(e) => setAddName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd('/players/op', 'Player opped')}
                  className="max-w-xs"
                  disabled={serverDown}
                />
                <Button
                  onClick={() => handleAdd('/players/op', 'Player opped')}
                  disabled={serverDown || busy !== null}
                >
                  <ShieldCheck />
                  Make OP
                </Button>
              </div>
              {data && data.ops.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.ops.map((entry) => (
                      <TableRow key={entry.uuid || entry.name}>
                        <TableCell className="font-medium">{entry.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{entry.level ?? '—'}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={serverDown || busy !== null}
                            onClick={() =>
                              runPlayerAction('/players/deop', entry.name, `De-opped ${entry.name}`)
                            }
                          >
                            <UserMinus />
                            De-op
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-sm text-muted-foreground">No operators configured.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banned">
          <Card>
            <CardHeader>
              <CardTitle>Banned Players</CardTitle>
              <CardDescription>Players blocked from joining the server</CardDescription>
            </CardHeader>
            <CardContent>
              {data && data.banned.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.banned.map((entry) => (
                      <TableRow key={entry.uuid || entry.name}>
                        <TableCell className="font-medium">{entry.name}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {entry.reason || '—'}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {entry.source || '—'}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={serverDown || busy !== null}
                            onClick={() =>
                              runPlayerAction('/players/pardon', entry.name, `Pardoned ${entry.name}`)
                            }
                          >
                            Pardon
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-sm text-muted-foreground">No banned players.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
