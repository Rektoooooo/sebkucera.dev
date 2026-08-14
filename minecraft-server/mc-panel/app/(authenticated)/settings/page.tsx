'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ImagePlus, RotateCcw, Save, TriangleAlert } from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import type { PropertiesResponse } from '@/lib/types';
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
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ENUM_OPTIONS: Record<string, string[]> = {
  difficulty: ['peaceful', 'easy', 'normal', 'hard'],
  gamemode: ['survival', 'creative', 'adventure', 'spectator'],
};

const NUMBER_FIELDS: Record<string, { min: number; max: number; label: string; hint: string }> = {
  'max-players': { min: 1, max: 200, label: 'Max players', hint: 'Maximum simultaneous players' },
  'view-distance': { min: 3, max: 32, label: 'View distance', hint: 'Chunks sent to each player' },
  'simulation-distance': { min: 3, max: 32, label: 'Simulation distance', hint: 'Chunks with active ticking' },
  'spawn-protection': { min: 0, max: 100, label: 'Spawn protection', hint: 'Protected radius around spawn (blocks)' },
};

const SWITCH_FIELDS: Record<string, { label: string; hint: string }> = {
  pvp: { label: 'PvP', hint: 'Players can damage each other' },
  'white-list': { label: 'Whitelist', hint: 'Only whitelisted players can join' },
  'enforce-whitelist': { label: 'Enforce whitelist', hint: 'Kick non-whitelisted players on reload' },
  'allow-flight': { label: 'Allow flight', hint: 'Permit flying in survival (anti-cheat off)' },
  hardcore: { label: 'Hardcore', hint: 'Players are banned on death' },
};

/** Cover-crop any image to the 64×64 PNG Minecraft requires. */
async function resizeToServerIcon(file: File): Promise<Blob> {
  const img = document.createElement('img');
  const url = URL.createObjectURL(file);
  try {
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('Could not read that image'));
      img.src = url;
    });
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingQuality = 'high';
    const side = Math.min(img.width, img.height);
    ctx.drawImage(
      img,
      (img.width - side) / 2,
      (img.height - side) / 2,
      side,
      side,
      0,
      0,
      64,
      64
    );
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('Failed to process image'))),
        'image/png'
      )
    );
  } finally {
    URL.revokeObjectURL(url);
  }
}

export default function SettingsPage() {
  const [data, setData] = useState<PropertiesResponse | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [restartNeeded, setRestartNeeded] = useState(false);
  const [restarting, setRestarting] = useState(false);
  const [iconUrl, setIconUrl] = useState<string | null>(null);
  const [iconUploading, setIconUploading] = useState(false);
  const iconInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api.fetchBlobUrl('/server/icon').then(setIconUrl).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIconUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setIconUploading(true);
    try {
      const blob = await resizeToServerIcon(file);
      await api.upload(
        '/server/icon',
        new File([blob], 'server-icon.png', { type: 'image/png' })
      );
      if (iconUrl) URL.revokeObjectURL(iconUrl);
      setIconUrl(URL.createObjectURL(blob));
      setRestartNeeded(true);
      toast.success('Server icon updated');
    } catch (err: any) {
      toast.error(err?.message || 'Failed to update icon');
    } finally {
      setIconUploading(false);
    }
  };

  const load = async () => {
    try {
      const res = await api.get<PropertiesResponse>('/server/properties');
      setData(res);
      const initial: Record<string, string> = {};
      for (const key of res.editable) {
        if (key in res.properties) initial[key] = res.properties[key];
      }
      setValues(initial);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to load server.properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dirty = useMemo(() => {
    if (!data) return {};
    const changed: Record<string, string> = {};
    for (const [key, value] of Object.entries(values)) {
      if ((data.properties[key] ?? '') !== value) changed[key] = value;
    }
    return changed;
  }, [data, values]);

  const isDirty = Object.keys(dirty).length > 0;

  const set = (key: string, value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const save = async () => {
    setSaving(true);
    try {
      await api.put('/server/properties', { properties: dirty });
      toast.success('Settings saved');
      setRestartNeeded(true);
      await load();
    } catch (err: any) {
      toast.error(err?.message || 'Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const restart = async () => {
    setRestarting(true);
    try {
      await api.post('/server/restart');
      toast.success('Server restarted — new settings are live');
      setRestartNeeded(false);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to restart server');
    } finally {
      setRestarting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Edit server.properties — changes apply after a restart
          </p>
        </div>
        <Button onClick={save} disabled={!isDirty} loading={saving}>
          <Save />
          Save Changes
        </Button>
      </div>

      {restartNeeded && (
        <div className="flex items-center justify-between rounded-md border border-[hsl(var(--warning))]/40 bg-[hsl(var(--warning))]/10 px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--warning))]">
            <TriangleAlert className="h-4 w-4" />
            Saved. Restart the server for the changes to take effect.
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="outline" loading={restarting}>
                <RotateCcw />
                Restart Now
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Restart the server?</AlertDialogTitle>
                <AlertDialogDescription>
                  All players will be disconnected while the server restarts.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={restart}>Restart</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}

      <Tabs defaultValue="form">
        <TabsList>
          <TabsTrigger value="form">Settings</TabsTrigger>
          <TabsTrigger value="raw">Raw file</TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          {loading ? (
            <Card>
              <CardContent className="space-y-4 pt-6">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-2/3" />
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Server Identity</CardTitle>
                  <CardDescription>How your server appears in the multiplayer list</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label>Server icon</Label>
                    <div className="flex items-center gap-4">
                      {iconUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={iconUrl}
                          alt="Server icon"
                          className="h-16 w-16 rounded-md border"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border border-dashed text-muted-foreground">
                          <ImagePlus className="h-6 w-6" />
                        </div>
                      )}
                      <div className="space-y-1">
                        <input
                          ref={iconInputRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleIconUpload}
                        />
                        <Button
                          variant="secondary"
                          size="sm"
                          loading={iconUploading}
                          onClick={() => iconInputRef.current?.click()}
                        >
                          <ImagePlus />
                          {iconUrl ? 'Change Icon' : 'Upload Icon'}
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Any image works — it&apos;s cropped and resized to 64×64 automatically.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motd">MOTD (description)</Label>
                    <Input
                      id="motd"
                      value={values['motd'] ?? ''}
                      onChange={(e) => set('motd', e.target.value)}
                      placeholder="A Minecraft Server"
                    />
                    <p className="text-xs text-muted-foreground">
                      Shown in the server list. Supports § color codes.
                    </p>
                  </div>

                  {Object.entries(ENUM_OPTIONS).map(([key, options]) =>
                    key in values ? (
                      <div key={key} className="space-y-2">
                        <Label className="capitalize">{key}</Label>
                        <Select value={values[key]} onValueChange={(v) => set(key, v)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {options.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ) : null
                  )}

                  {Object.entries(NUMBER_FIELDS).map(([key, field]) =>
                    key in values ? (
                      <div key={key} className="space-y-2">
                        <Label htmlFor={key}>{field.label}</Label>
                        <Input
                          id={key}
                          type="number"
                          min={field.min}
                          max={field.max}
                          value={values[key] ?? ''}
                          onChange={(e) => set(key, e.target.value)}
                          className="max-w-[140px]"
                        />
                        <p className="text-xs text-muted-foreground">{field.hint}</p>
                      </div>
                    ) : null
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Toggles</CardTitle>
                  <CardDescription>Feature switches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {Object.entries(SWITCH_FIELDS).map(([key, field], index, arr) =>
                      key in values ? (
                        <div key={key}>
                          <div className="flex items-center justify-between py-3">
                            <div className="space-y-0.5 pr-4">
                              <Label htmlFor={key}>{field.label}</Label>
                              <p className="text-xs text-muted-foreground">{field.hint}</p>
                            </div>
                            <Switch
                              id={key}
                              checked={values[key] === 'true'}
                              onCheckedChange={(checked) =>
                                set(key, checked ? 'true' : 'false')
                              }
                            />
                          </div>
                          {index < arr.length - 1 && <Separator />}
                        </div>
                      ) : null
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="raw">
          <Card>
            <CardHeader>
              <CardTitle>server.properties</CardTitle>
              <CardDescription>Read-only view of the full file</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[480px] rounded-md border bg-black/40">
                <pre className="p-4 font-mono text-xs leading-5 text-zinc-300">
                  {data?.raw ?? 'Loading…'}
                </pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
