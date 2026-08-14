'use client';

import { useEffect, useRef, useState } from 'react';
import { Package, Trash2, Upload } from 'lucide-react';
import { toast } from 'sonner';

import { api } from '@/lib/api';
import { formatBytes, type Mod } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
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
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ModsPage() {
  const [mods, setMods] = useState<Mod[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    try {
      const res = await api.get<{ mods: Mod[] }>('/mods');
      setMods(res.mods);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to load mods');
      setMods([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

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

  const enabledCount = mods?.filter((m) => m.enabled).length ?? 0;

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mods</h1>
          <p className="text-sm text-muted-foreground">
            {mods ? `${enabledCount} enabled · ${mods.length} total` : 'Manage server mods'}
          </p>
        </div>
        <div>
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
        <CardHeader>
          <CardTitle>Installed Mods</CardTitle>
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
                Upload a .jar file to get started.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">Status</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="w-40 text-right">Enabled</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mods.map((mod) => (
                  <TableRow key={`${mod.file}-${mod.enabled}`} className={mod.enabled ? '' : 'opacity-60'}>
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
                          disabled={busy !== null}
                          onCheckedChange={(checked) => toggleMod(mod, checked)}
                        />
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-400 hover:text-red-400"
                              disabled={busy !== null}
                            >
                              <Trash2 />
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
