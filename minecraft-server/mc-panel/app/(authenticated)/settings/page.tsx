'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Bold,
  Earth,
  Gamepad2,
  Gauge,
  ImagePlus,
  Italic,
  Package,
  RotateCcw,
  Save,
  Strikethrough,
  TriangleAlert,
  Underline,
  Users,
} from 'lucide-react';
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

// ---------------------------------------------------------------------------
// Minecraft § formatting

const MC_COLORS: Array<{ code: string; name: string; hex: string }> = [
  { code: '0', name: 'Black', hex: '#000000' },
  { code: '1', name: 'Dark Blue', hex: '#0000AA' },
  { code: '2', name: 'Dark Green', hex: '#00AA00' },
  { code: '3', name: 'Dark Aqua', hex: '#00AAAA' },
  { code: '4', name: 'Dark Red', hex: '#AA0000' },
  { code: '5', name: 'Dark Purple', hex: '#AA00AA' },
  { code: '6', name: 'Gold', hex: '#FFAA00' },
  { code: '7', name: 'Gray', hex: '#AAAAAA' },
  { code: '8', name: 'Dark Gray', hex: '#555555' },
  { code: '9', name: 'Blue', hex: '#5555FF' },
  { code: 'a', name: 'Green', hex: '#55FF55' },
  { code: 'b', name: 'Aqua', hex: '#55FFFF' },
  { code: 'c', name: 'Red', hex: '#FF5555' },
  { code: 'd', name: 'Light Purple', hex: '#FF55FF' },
  { code: 'e', name: 'Yellow', hex: '#FFFF55' },
  { code: 'f', name: 'White', hex: '#FFFFFF' },
];

const COLOR_BY_CODE = Object.fromEntries(MC_COLORS.map((c) => [c.code, c.hex]));

interface MotdSpan {
  text: string;
  color: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
}

function parseMotd(text: string): MotdSpan[][] {
  const lines: MotdSpan[][] = [[]];
  let color = '#AAAAAA';
  let bold = false;
  let italic = false;
  let underline = false;
  let strike = false;
  let buffer = '';

  const flush = () => {
    if (buffer) {
      lines[lines.length - 1].push({ text: buffer, color, bold, italic, underline, strike });
      buffer = '';
    }
  };

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '\n') {
      flush();
      if (lines.length < 2) lines.push([]);
      continue;
    }
    if (ch === '§' && i + 1 < text.length) {
      const code = text[i + 1].toLowerCase();
      i++;
      flush();
      if (COLOR_BY_CODE[code]) {
        color = COLOR_BY_CODE[code];
        bold = italic = underline = strike = false; // colors reset formatting
      } else if (code === 'l') bold = true;
      else if (code === 'o') italic = true;
      else if (code === 'n') underline = true;
      else if (code === 'm') strike = true;
      else if (code === 'r') {
        color = '#AAAAAA';
        bold = italic = underline = strike = false;
      }
      continue;
    }
    buffer += ch;
  }
  flush();
  return lines;
}

// ---------------------------------------------------------------------------
// Field catalog — only fields present in server.properties are rendered

type FieldDef =
  | { key: string; kind: 'switch'; label: string; hint: string }
  | { key: string; kind: 'number'; label: string; hint: string; min: number; max: number }
  | { key: string; kind: 'select'; label: string; hint?: string; options: Array<{ value: string; label: string }> };

const GAMEPLAY_FIELDS: FieldDef[] = [
  {
    key: 'difficulty',
    kind: 'select',
    label: 'Difficulty',
    options: ['peaceful', 'easy', 'normal', 'hard'].map((v) => ({ value: v, label: v })),
  },
  {
    key: 'gamemode',
    kind: 'select',
    label: 'Default gamemode',
    options: ['survival', 'creative', 'adventure', 'spectator'].map((v) => ({ value: v, label: v })),
  },
  { key: 'force-gamemode', kind: 'switch', label: 'Force gamemode', hint: 'Players always rejoin in the default gamemode' },
  { key: 'hardcore', kind: 'switch', label: 'Hardcore', hint: 'Players are banned on death' },
  { key: 'pvp', kind: 'switch', label: 'PvP', hint: 'Players can damage each other' },
  { key: 'spawn-monsters', kind: 'switch', label: 'Spawn monsters', hint: 'Hostile mobs spawn naturally' },
  { key: 'allow-nether', kind: 'switch', label: 'Allow Nether', hint: 'Nether portals work' },
  { key: 'generate-structures', kind: 'switch', label: 'Generate structures', hint: 'Villages, temples etc. in new chunks' },
  { key: 'enable-command-block', kind: 'switch', label: 'Command blocks', hint: 'Command blocks can be used' },
];

const PLAYERS_FIELDS: FieldDef[] = [
  { key: 'max-players', kind: 'number', label: 'Max players', hint: 'Maximum simultaneous players', min: 1, max: 200 },
  { key: 'white-list', kind: 'switch', label: 'Whitelist', hint: 'Only whitelisted players can join' },
  { key: 'enforce-whitelist', kind: 'switch', label: 'Enforce whitelist', hint: 'Kick non-whitelisted players on reload' },
  { key: 'hide-online-players', kind: 'switch', label: 'Hide online players', hint: "Server list won't show who's playing" },
  { key: 'player-idle-timeout', kind: 'number', label: 'AFK kick (minutes)', hint: 'Kick idle players after this many minutes — 0 disables it', min: 0, max: 1440 },
  {
    key: 'op-permission-level',
    kind: 'select',
    label: 'OP permission level',
    hint: 'What /op grants: 4 = full admin including /stop',
    options: [
      { value: '1', label: '1 — bypass spawn protection' },
      { value: '2', label: '2 — cheat commands + command blocks' },
      { value: '3', label: '3 — player management (kick, ban…)' },
      { value: '4', label: '4 — everything incl. /stop' },
    ],
  },
];

const WORLD_FIELDS: FieldDef[] = [
  { key: 'view-distance', kind: 'number', label: 'View distance', hint: 'Chunks sent to each player', min: 3, max: 32 },
  { key: 'simulation-distance', kind: 'number', label: 'Simulation distance', hint: 'Chunks with active ticking', min: 3, max: 32 },
  { key: 'spawn-protection', kind: 'number', label: 'Spawn protection', hint: 'Radius around spawn only ops can edit (blocks)', min: 0, max: 100 },
  { key: 'entity-broadcast-range-percentage', kind: 'number', label: 'Entity visibility (%)', hint: 'How far away entities are shown to players', min: 10, max: 1000 },
  { key: 'max-world-size', kind: 'number', label: 'World border radius', hint: 'Maximum world size in blocks', min: 1, max: 29999984 },
  { key: 'pause-when-empty-seconds', kind: 'number', label: 'Pause when empty (s)', hint: 'Pause the world when nobody is online — saves CPU. -1 disables', min: -1, max: 86400 },
  { key: 'allow-flight', kind: 'switch', label: 'Allow flight', hint: 'Permit survival flying (disables the anti-cheat kick)' },
];

const RESOURCE_FIELDS: FieldDef[] = [
  { key: 'require-resource-pack', kind: 'switch', label: 'Require resource pack', hint: 'Players who decline the pack are disconnected' },
];

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
    ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, 64, 64);
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('Failed to process image'))), 'image/png')
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
  const motdRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    api.fetchBlobUrl('/server/icon').then(setIconUrl).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const set = (key: string, value: string) => setValues((prev) => ({ ...prev, [key]: value }));

  const insertMotdCode = (code: string) => {
    const textarea = motdRef.current;
    const current = values['motd'] ?? '';
    const pos = textarea?.selectionStart ?? current.length;
    const next = current.slice(0, pos) + '§' + code + current.slice(pos);
    set('motd', next);
    requestAnimationFrame(() => {
      textarea?.focus();
      textarea?.setSelectionRange(pos + 2, pos + 2);
    });
  };

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

  const handleIconUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setIconUploading(true);
    try {
      const blob = await resizeToServerIcon(file);
      await api.upload('/server/icon', new File([blob], 'server-icon.png', { type: 'image/png' }));
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

  const renderField = (field: FieldDef) => {
    if (!(field.key in values)) return null;
    if (field.kind === 'switch') {
      return (
        <div key={field.key} className="flex items-center justify-between py-2.5">
          <div className="space-y-0.5 pr-4">
            <Label htmlFor={field.key}>{field.label}</Label>
            <p className="text-xs text-muted-foreground">{field.hint}</p>
          </div>
          <Switch
            id={field.key}
            checked={values[field.key] === 'true'}
            onCheckedChange={(checked) => set(field.key, checked ? 'true' : 'false')}
          />
        </div>
      );
    }
    if (field.kind === 'number') {
      return (
        <div key={field.key} className="flex items-center justify-between gap-4 py-2.5">
          <div className="space-y-0.5 pr-4">
            <Label htmlFor={field.key}>{field.label}</Label>
            <p className="text-xs text-muted-foreground">{field.hint}</p>
          </div>
          <Input
            id={field.key}
            type="number"
            min={field.min}
            max={field.max}
            value={values[field.key] ?? ''}
            onChange={(e) => set(field.key, e.target.value)}
            className="w-28 shrink-0"
          />
        </div>
      );
    }
    return (
      <div key={field.key} className="flex items-center justify-between gap-4 py-2.5">
        <div className="space-y-0.5 pr-4">
          <Label>{field.label}</Label>
          {field.hint && <p className="text-xs text-muted-foreground">{field.hint}</p>}
        </div>
        <Select value={values[field.key]} onValueChange={(v) => set(field.key, v)}>
          <SelectTrigger className="w-56 shrink-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {field.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  const renderSection = (
    title: string,
    Icon: React.ComponentType<{ className?: string }>,
    description: string,
    fields: FieldDef[],
    extra?: React.ReactNode
  ) => {
    const rendered = fields.map(renderField).filter(Boolean);
    if (!rendered.length && !extra) return null;
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="divide-y divide-border/60">
          {extra}
          {rendered}
        </CardContent>
      </Card>
    );
  };

  const motdLines = parseMotd(values['motd'] ?? '');

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

        <TabsContent value="form" className="space-y-4">
          {loading ? (
            <Card>
              <CardContent className="space-y-4 pt-6">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-2/3" />
              </CardContent>
            </Card>
          ) : (
            <>
              {/* ---- Identity: icon + colored MOTD with live preview ---- */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Earth className="h-4 w-4 text-muted-foreground" />
                    <CardTitle>Server Identity</CardTitle>
                  </div>
                  <CardDescription>
                    How your server appears in the multiplayer list
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
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
                              Any image — cropped and resized to 64×64 automatically.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motd">MOTD</Label>
                        <div className="flex flex-wrap items-center gap-1">
                          {MC_COLORS.map((color) => (
                            <button
                              key={color.code}
                              type="button"
                              title={color.name}
                              onClick={() => insertMotdCode(color.code)}
                              className="h-5 w-5 rounded-sm border border-white/20 transition-transform hover:scale-125"
                              style={{ backgroundColor: color.hex }}
                            />
                          ))}
                          <Separator orientation="vertical" className="mx-1 h-5" />
                          <Button variant="ghost" size="icon" className="h-6 w-6" title="Bold" onClick={() => insertMotdCode('l')}>
                            <Bold className="h-3.5 w-3.5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6" title="Italic" onClick={() => insertMotdCode('o')}>
                            <Italic className="h-3.5 w-3.5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6" title="Underline" onClick={() => insertMotdCode('n')}>
                            <Underline className="h-3.5 w-3.5" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-6 w-6" title="Strikethrough" onClick={() => insertMotdCode('m')}>
                            <Strikethrough className="h-3.5 w-3.5" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 px-1.5 text-[10px]" title="Reset formatting" onClick={() => insertMotdCode('r')}>
                            reset
                          </Button>
                        </div>
                        <textarea
                          id="motd"
                          ref={motdRef}
                          rows={2}
                          value={values['motd'] ?? ''}
                          onChange={(e) => set('motd', e.target.value)}
                          placeholder="A Minecraft Server"
                          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 font-mono text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                        <p className="text-xs text-muted-foreground">
                          Click a color to insert its § code at the cursor. Two lines max —
                          press Enter for the second line.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Preview</Label>
                      <div className="rounded-md border bg-[#1e1e1e] p-3">
                        <div className="flex items-start gap-3 rounded-sm bg-black/40 p-2">
                          {iconUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={iconUrl}
                              alt=""
                              className="h-10 w-10 shrink-0"
                              style={{ imageRendering: 'pixelated' }}
                            />
                          ) : (
                            <div className="h-10 w-10 shrink-0 bg-zinc-800" />
                          )}
                          <div className="min-w-0 font-mono text-[13px] leading-[1.35]">
                            <div className="flex items-center justify-between gap-6">
                              <span className="text-white">Sebastian&apos;s Server</span>
                              <span className="text-[10px] text-[#55FF55]">0/20 ▮▮▮▮▮</span>
                            </div>
                            {motdLines.map((line, li) => (
                              <div key={li} className="truncate">
                                {line.length === 0 ? (
                                  <span>&nbsp;</span>
                                ) : (
                                  line.map((span, si) => (
                                    <span
                                      key={si}
                                      style={{
                                        color: span.color,
                                        fontWeight: span.bold ? 700 : 400,
                                        fontStyle: span.italic ? 'italic' : undefined,
                                        textDecoration:
                                          [
                                            span.underline ? 'underline' : '',
                                            span.strike ? 'line-through' : '',
                                          ]
                                            .filter(Boolean)
                                            .join(' ') || undefined,
                                      }}
                                    >
                                      {span.text}
                                    </span>
                                  ))
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-[10px] text-muted-foreground">
                          Roughly how it looks in the multiplayer server list
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 lg:grid-cols-2">
                {renderSection('Gameplay', Gamepad2, 'Rules of the game', GAMEPLAY_FIELDS)}
                {renderSection('Players & Access', Users, 'Who can join and what ops can do', PLAYERS_FIELDS)}
                {renderSection('World & Performance', Gauge, 'Distances, borders and pause behavior', WORLD_FIELDS)}
                {renderSection(
                  'Resource Pack',
                  Package,
                  'Offer a resource pack to joining players',
                  RESOURCE_FIELDS,
                  'resource-pack' in values ? (
                    <div className="space-y-2 py-2.5">
                      <Label htmlFor="resource-pack">Resource pack URL</Label>
                      <Input
                        id="resource-pack"
                        value={values['resource-pack'] ?? ''}
                        onChange={(e) => set('resource-pack', e.target.value)}
                        placeholder="https://example.com/pack.zip"
                      />
                      <p className="text-xs text-muted-foreground">
                        Direct download link to a .zip — leave empty for none
                      </p>
                    </div>
                  ) : undefined
                )}
              </div>

              {data && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">World Info</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-x-10 gap-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">World folder: </span>
                      <span className="font-mono">{data.properties['level-name'] ?? 'world'}</span>
                    </div>
                    {data.properties['level-seed'] !== undefined && (
                      <div>
                        <span className="text-muted-foreground">Seed: </span>
                        <span className="font-mono">
                          {data.properties['level-seed'] || '(random — set at world creation)'}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">Online mode: </span>
                      <span className="font-mono">{data.properties['online-mode'] ?? '?'}</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="raw">
          <Card>
            <CardHeader>
              <CardTitle>server.properties</CardTitle>
              <CardDescription>Read-only view of the full file</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[480px] overflow-auto rounded-md border bg-black/40">
                <pre className="p-4 font-mono text-xs leading-5 text-zinc-300">
                  {data?.raw ?? 'Loading…'}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
