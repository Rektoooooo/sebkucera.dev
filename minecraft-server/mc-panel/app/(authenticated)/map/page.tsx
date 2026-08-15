'use client';

import { ExternalLink, Map as MapIcon } from 'lucide-react';

import { API_BASE_URL } from '@/lib/api';
import { useServerStatus } from '@/lib/server-status-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MAP_URL = `${API_BASE_URL}/map/`;

export default function MapPage() {
  const { status } = useServerStatus();

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col gap-4">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Live Map</h1>
          <p className="text-sm text-muted-foreground">
            BlueMap — explore the world in 3D and see who&apos;s online where
          </p>
        </div>
        <Button variant="secondary" onClick={() => window.open(MAP_URL, '_blank')}>
          <ExternalLink />
          Open Full Screen
        </Button>
      </div>

      {status !== null && !status.online ? (
        <Card className="flex-1">
          <CardContent className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <MapIcon className="h-10 w-10 text-muted-foreground/50" />
            <p className="text-sm font-medium">The map runs inside the Minecraft server</p>
            <p className="text-sm text-muted-foreground">
              Start the server from the dashboard and the map will appear here.
            </p>
          </CardContent>
        </Card>
      ) : (
        <iframe
          src={MAP_URL}
          title="BlueMap"
          className="w-full flex-1 rounded-xl border bg-black/40"
        />
      )}
    </div>
  );
}
