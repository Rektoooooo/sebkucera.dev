'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Download,
  Globe,
  Loader2,
  Package,
  Search,
  Trash2,
  Upload,
} from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import { formatBytes, type Mod } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
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

// Fallbacks; the live values come from the backend (GET /) so a server
// version bump doesn't require a frontend rebuild.
const DEFAULT_MC_VERSION = '26.2';
const MOD_LOADER = 'fabric';

interface ModrinthHit {
  project_id: string;
  slug: string;
  title: string;
  description: string;
  icon_url: string | null;
  downloads: number;
}

// Modrinth category facet values worth browsing by
const CATEGORIES: Array<{ label: string; value: string | null }> = [
  { label: 'Popular', value: null },
  { label: 'Optimization', value: 'optimization' },
  { label: 'Utility', value: 'utility' },
  { label: 'World Gen', value: 'worldgen' },
  { label: 'Mobs', value: 'mobs' },
  { label: 'Magic', value: 'magic' },
  { label: 'Tech', value: 'technology' },
  { label: 'Storage', value: 'storage' },
  { label: 'Decoration', value: 'decoration' },
  { label: 'Food', value: 'food' },
];

export default function ModsPage() {
  const [mods, setMods] = useState<Mod[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [bulkRunning, setBulkRunning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Modrinth browser state
  const [browseOpen, setBrowseOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [hits, setHits] = useState<ModrinthHit[] | null>(null);
  const [installing, setInstalling] = useState<string | null>(null);
  const [mcVersion, setMcVersion] = useState(DEFAULT_MC_VERSION);

  useEffect(() => {
    api
      .get<{ mcVersion?: string }>('/')
      .then((info) => info.mcVersion && setMcVersion(info.mcVersion))
      .catch(() => {});
  }, []);

  const load = async () => {
    try {
      const res = await api.get<{ mods: Mod[] }>('/mods');
      setMods(res.mods);
      setSelected((prev) => {
        const names = new Set(res.mods.map((m) => m.file));
        return new Set(Array.from(prev).filter((f) => names.has(f)));
      });
    } catch (err: any) {
      toast.error(err?.message || 'Failed to load mods');
      setMods([]);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (!mods) return [];
    const q = filter.trim().toLowerCase();
    return q ? mods.filter((m) => m.file.toLowerCase().includes(q)) : mods;
  }, [mods, filter]);

  const allFilteredSelected =
    filtered.length > 0 && filtered.every((m) => selected.has(m.file));

  const toggleAll = (checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      for (const m of filtered) {
        if (checked) next.add(m.file);
        else next.delete(m.file);
      }
      return next;
    });
  };

  const toggleOne = (file: string, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (checked) next.add(file);
      else next.delete(file);
      return next;
    });
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (!file.name.endsWith('.jar')) {
      toast.error('Only .jar files can be uploaded');
      return;
    }
    setUploadProgress(0);
    try {
      await api.uploadWithProgress('/mods/upload', file, setUploadProgress);
      toast.success(`Uploaded ${file.name}`);
      await load();
    } catch (err: any) {
      toast.error(err?.message || 'Upload failed');
    } finally {
      setUploadProgress(null);
    }
  };

  const toggleMod = async (mod: Mod, enable: boolean) => {
    setBusy(mod.file);
    try {
      await api.post(enable ? '/mods/enable' : '/mods/disable', { file: mod.file });
      toast.success(`${enable ? 'Enabled' : 'Disabled'} ${mod.file}`, {
        description: 'Restart the server for mod changes to take effect.',
      });
      await load();
    } catch (err: any) {
      toast.error(err?.message || 'Action failed');
    } finally {
      setBusy(null);
    }
  };

  const deleteMod = async (mod: Mod) => {
    setBusy(mod.file);
    try {
      await api.post('/mods/delete', { file: mod.file });
      toast.success(`Deleted ${mod.file}`);
      await load();
    } catch (err: any) {
      toast.error(err?.message || 'Delete failed');
    } finally {
      setBusy(null);
    }
  };

  const runBulk = async (endpoint: string, verb: string) => {
    const files = Array.from(selected);
    if (!files.length) return;
    setBulkRunning(true);
    let done = 0;
    let failed = 0;
    for (const file of files) {
      try {
        await api.post(endpoint, { file });
        done++;
      } catch {
        failed++;
      }
    }
    setBulkRunning(false);
    setSelected(new Set());
    await load();
    if (failed) toast.warning(`${verb} ${done} mods, ${failed} failed`);
    else
      toast.success(`${verb} ${done} mods`, {
        description: 'Restart the server for mod changes to take effect.',
      });
  };

  const runSearch = async (q: string, cat: string | null) => {
    setSearching(true);
    try {
      const facetList = [
        ['project_type:mod'],
        [`categories:${MOD_LOADER}`],
        [`versions:${mcVersion}`],
      ];
      if (cat) facetList.push([`categories:${cat}`]);
      const facets = encodeURIComponent(JSON.stringify(facetList));
      // With no query, sort by downloads so opening the dialog shows the
      // most popular compatible mods right away.
      const index = q ? 'relevance' : 'downloads';
      const res = await fetch(
        `https://api.modrinth.com/v2/search?query=${encodeURIComponent(q)}&facets=${facets}&limit=40&index=${index}`
      );
      if (!res.ok) throw new Error(`Modrinth returned ${res.status}`);
      const data = await res.json();
      setHits(data.hits);
    } catch (err: any) {
      toast.error(err?.message || 'Modrinth search failed');
    } finally {
      setSearching(false);
    }
  };

  const searchModrinth = () => runSearch(query.trim(), category);

  const pickCategory = (cat: string | null) => {
    setCategory(cat);
    runSearch(query.trim(), cat);
  };

  // Load popular mods as soon as the dialog opens — browsing shouldn't
  // require typing a search first.
  useEffect(() => {
    if (browseOpen && hits === null && !searching) {
      runSearch('', category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [browseOpen]);

  const installFromModrinth = async (hit: ModrinthHit) => {
    setInstalling(hit.project_id);
    try {
      const res = await fetch(
        `https://api.modrinth.com/v2/project/${hit.project_id}/version?loaders=${encodeURIComponent(`["${MOD_LOADER}"]`)}&game_versions=${encodeURIComponent(`["${mcVersion}"]`)}`
      );
      if (!res.ok) throw new Error(`Modrinth returned ${res.status}`);
      const versions = await res.json();
      if (!versions.length) {
        toast.error(`No ${MOD_LOADER} ${mcVersion} build available for ${hit.title}`);
        return;
      }
      const files = versions[0].files;
      const file = files.find((f: any) => f.primary) ?? files[0];
      await api.post('/mods/install', { url: file.url, filename: file.filename });
      toast.success(`Installed ${file.filename}`, {
        description: 'Restart the server for mod changes to take effect.',
      });
      await load();
    } catch (err: any) {
      toast.error(err?.message || `Failed to install ${hit.title}`);
    } finally {
      setInstalling(null);
    }
  };

  const enabledCount = mods?.filter((m) => m.enabled).length ?? 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mods</h1>
          <p className="text-sm text-muted-foreground">
            {mods ? `${enabledCount} enabled · ${mods.length} total` : 'Manage server mods'}
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog open={browseOpen} onOpenChange={setBrowseOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Globe />
                Browse Modrinth
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Browse Modrinth</DialogTitle>
                <DialogDescription>
                  {MOD_LOADER} mods for Minecraft {mcVersion} — installed straight onto the server
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-2">
                <Input
                  placeholder="Search mods… (e.g. sodium, jei, waystones)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && searchModrinth()}
                  autoFocus
                />
                <Button onClick={searchModrinth} loading={searching}>
                  <Search />
                  Search
                </Button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => pickCategory(cat.value)}
                    className={
                      category === cat.value
                        ? 'rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground'
                        : 'rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground'
                    }
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              {/* Plain overflow div, NOT Radix ScrollArea — its display:table
                  viewport wrapper lets rows exceed the container width in
                  WebKit, which pushed the Install button out of view. */}
              <div className="h-[420px] overflow-y-auto">
                {searching && hits === null ? (
                  <div className="space-y-2">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                ) : hits === null ? (
                  <p className="py-10 text-center text-sm text-muted-foreground">
                    Loading popular mods…
                  </p>
                ) : hits.length === 0 ? (
                  <p className="py-10 text-center text-sm text-muted-foreground">
                    No compatible mods found.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {hits.map((hit) => {
                      const isInstalling = installing === hit.project_id;
                      return (
                        <div
                          key={hit.project_id}
                          className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-md border p-3"
                        >
                          {hit.icon_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={hit.icon_url}
                              alt=""
                              className="h-10 w-10 rounded-md border bg-muted"
                            />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
                              <Package className="h-5 w-5 text-muted-foreground" />
                            </div>
                          )}
                          <div className="min-w-0 overflow-hidden">
                            <div className="flex items-center gap-2">
                              <span className="truncate text-sm font-medium">{hit.title}</span>
                              <span className="shrink-0 text-xs text-muted-foreground">
                                {Intl.NumberFormat('en', { notation: 'compact' }).format(hit.downloads)}{' '}
                                downloads
                              </span>
                            </div>
                            <p className="truncate text-xs text-muted-foreground">
                              {hit.description}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="secondary"
                            loading={isInstalling}
                            disabled={installing !== null}
                            onClick={() => installFromModrinth(hit)}
                          >
                            {isInstalling ? (
                              'Installing…'
                            ) : (
                              <>
                                <Download />
                                Install
                              </>
                            )}
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
          <input
            ref={fileInputRef}
            type="file"
            accept=".jar"
            className="hidden"
            onChange={handleUpload}
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadProgress !== null}
          >
            <Upload />
            Upload Mod
          </Button>
        </div>
      </div>

      {uploadProgress !== null && (
        <Card>
          <CardContent className="flex items-center gap-4 pt-6">
            <Upload className="h-4 w-4 shrink-0 text-muted-foreground" />
            <Progress value={uploadProgress} className="flex-1" />
            <span className="w-10 text-right text-sm text-muted-foreground">
              {uploadProgress}%
            </span>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle>Installed Mods</CardTitle>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Filter mods…"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          {selected.size > 0 && (
            <div className="flex flex-wrap items-center gap-2 rounded-md border bg-muted/40 px-3 py-2">
              <span className="text-sm font-medium">{selected.size} selected</span>
              <div className="ml-auto flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  loading={bulkRunning}
                  disabled={bulkRunning}
                  onClick={() => runBulk('/mods/enable', 'Enabled')}
                >
                  Enable
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  loading={bulkRunning}
                  disabled={bulkRunning}
                  onClick={() => runBulk('/mods/disable', 'Disabled')}
                >
                  Disable
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="destructive" disabled={bulkRunning}>
                      <Trash2 />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Delete {selected.size} mod{selected.size === 1 ? '' : 's'}?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        The selected mod files will be permanently removed from the
                        server. This cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        variant="destructive"
                        onClick={() => runBulk('/mods/delete', 'Deleted')}
                      >
                        Delete Mods
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {mods === null ? (
            <div className="space-y-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          ) : mods.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-10 text-center">
              <Package className="h-10 w-10 text-muted-foreground/50" />
              <p className="text-sm font-medium">No mods installed</p>
              <p className="text-sm text-muted-foreground">
                Upload a .jar or browse Modrinth to get started.
              </p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10">
                      <Checkbox
                        checked={allFilteredSelected}
                        onCheckedChange={(c) => toggleAll(c === true)}
                        aria-label="Select all"
                      />
                    </TableHead>
                    <TableHead className="w-24">Status</TableHead>
                    <TableHead>File</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead className="w-40 text-right">Enabled</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((mod) => (
                    <TableRow
                      key={`${mod.file}-${mod.enabled}`}
                      className={mod.enabled ? '' : 'opacity-60'}
                    >
                      <TableCell>
                        <Checkbox
                          checked={selected.has(mod.file)}
                          onCheckedChange={(c) => toggleOne(mod.file, c === true)}
                          aria-label={`Select ${mod.file}`}
                        />
                      </TableCell>
                      <TableCell>
                        {mod.enabled ? (
                          <Badge variant="success">enabled</Badge>
                        ) : (
                          <Badge variant="secondary">disabled</Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-mono text-xs">{mod.file}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatBytes(mod.sizeBytes)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-3">
                          <Switch
                            checked={mod.enabled}
                            disabled={busy !== null || bulkRunning}
                            onCheckedChange={(checked) => toggleMod(mod, checked)}
                          />
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-400 hover:text-red-400"
                                disabled={busy !== null || bulkRunning}
                              >
                                {busy === mod.file ? (
                                  <Loader2 className="animate-spin" />
                                ) : (
                                  <Trash2 />
                                )}
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete this mod?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  <span className="font-mono text-foreground">{mod.file}</span>{' '}
                                  will be permanently removed from the server.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  variant="destructive"
                                  onClick={() => deleteMod(mod)}
                                >
                                  Delete Mod
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
              {filter && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Showing {filtered.length} of {mods.length} mods
                </p>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
