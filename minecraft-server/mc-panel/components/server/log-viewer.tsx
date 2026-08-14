'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, Eraser, SendHorizonal } from 'lucide-react';
import { toast } from 'sonner';

import { api, WS_BASE_URL } from '@/lib/api';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const MAX_LINES = 1000;
const MAX_RECONNECT_DELAY_MS = 30_000;

type ConnState = 'connecting' | 'connected' | 'reconnecting';

export function LogViewer({ className }: { className?: string }) {
  const [lines, setLines] = useState<string[]>([]);
  const [connState, setConnState] = useState<ConnState>('connecting');
  const [autoScroll, setAutoScroll] = useState(true);
  const [command, setCommand] = useState('');
  const [sending, setSending] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reconnectAttempts = useRef(0);
  const unmounted = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef(true);
  const historyRef = useRef<string[]>([]);
  const historyIndex = useRef(-1);

  const appendChunk = useCallback((chunk: string) => {
    const newLines = chunk.split('\n').filter((l) => l.length > 0);
    if (!newLines.length) return;
    setLines((prev) => [...prev, ...newLines].slice(-MAX_LINES));
  }, []);

  // Initial backfill so the pane isn't empty until something happens.
  useEffect(() => {
    let cancelled = false;
    api
      .request<Response>('/logs/last?lines=200')
      .then(async (res) => {
        const text = await (res as Response).text();
        if (!cancelled && text) {
          setLines(text.split('\n').filter((l) => l.length > 0).slice(-MAX_LINES));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const connect = useCallback(() => {
    const token = localStorage.getItem('token');
    if (!token || unmounted.current) return;

    const ws = new WebSocket(`${WS_BASE_URL}/ws/logs`);
    wsRef.current = ws;
    let authed = false;

    ws.onopen = () => {
      // Auth handshake: first frame is the JWT, server replies "__ok__".
      ws.send(token);
    };

    ws.onmessage = (event) => {
      if (!authed) {
        if (event.data === '__ok__') {
          authed = true;
          reconnectAttempts.current = 0;
          setConnState('connected');
        }
        return;
      }
      if (event.data) appendChunk(event.data); // empty frames are keepalives
    };

    ws.onclose = (event) => {
      wsRef.current = null;
      if (unmounted.current) return;
      if (event.code === 1008) {
        // Auth rejected — token is stale.
        localStorage.removeItem('token');
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/login`;
        return;
      }
      setConnState('reconnecting');
      const delay = Math.min(
        1000 * 2 ** reconnectAttempts.current,
        MAX_RECONNECT_DELAY_MS
      );
      reconnectAttempts.current += 1;
      reconnectTimer.current = setTimeout(connect, delay);
    };

    ws.onerror = () => {
      ws.close();
    };
  }, [appendChunk]);

  useEffect(() => {
    unmounted.current = false;
    connect();
    return () => {
      unmounted.current = true;
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
      wsRef.current?.close();
    };
  }, [connect]);

  // Autoscroll on new lines
  useEffect(() => {
    if (autoScrollRef.current && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
    autoScrollRef.current = nearBottom;
    setAutoScroll(nearBottom);
  };

  const toggleAutoScroll = () => {
    const next = !autoScroll;
    autoScrollRef.current = next;
    setAutoScroll(next);
    if (next && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const sendCommand = async () => {
    const cmd = command.trim();
    if (!cmd || sending) return;
    setSending(true);
    try {
      await api.post('/server/command', { command: cmd });
      appendChunk(`> ${cmd}`);
      historyRef.current = [...historyRef.current.slice(-49), cmd];
      historyIndex.current = -1;
      setCommand('');
    } catch (err: any) {
      toast.error(err?.message || 'Failed to send command');
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendCommand();
      return;
    }
    const history = historyRef.current;
    if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      const next =
        historyIndex.current === -1
          ? history.length - 1
          : Math.max(0, historyIndex.current - 1);
      historyIndex.current = next;
      setCommand(history[next]);
    } else if (e.key === 'ArrowDown' && historyIndex.current !== -1) {
      e.preventDefault();
      const next = historyIndex.current + 1;
      if (next >= history.length) {
        historyIndex.current = -1;
        setCommand('');
      } else {
        historyIndex.current = next;
        setCommand(history[next]);
      }
    }
  };

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Live Console</span>
          {connState === 'connected' ? (
            <Badge variant="success">Connected</Badge>
          ) : connState === 'reconnecting' ? (
            <Badge variant="warning">Reconnecting…</Badge>
          ) : (
            <Badge variant="secondary">Connecting…</Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={autoScroll ? 'secondary' : 'ghost'}
            size="sm"
            onClick={toggleAutoScroll}
          >
            <ArrowDownToLine />
            Auto-scroll
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setLines([])}>
            <Eraser />
            Clear
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="h-[380px] overflow-y-auto rounded-md border bg-black/60 p-3 font-mono text-xs leading-5"
      >
        {lines.length === 0 ? (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No logs yet. Waiting for server output…
          </div>
        ) : (
          lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                'whitespace-pre-wrap break-all',
                line.startsWith('> ')
                  ? 'text-primary'
                  : line.includes('WARN')
                    ? 'text-[hsl(var(--warning))]'
                    : line.includes('ERROR') || line.includes('Exception')
                      ? 'text-red-400'
                      : 'text-zinc-300'
              )}
            >
              {line}
            </div>
          ))
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="font-mono text-sm text-[hsl(var(--success))]">$</span>
        <Input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter server command… (e.g. say Hello, list, time set day)"
          className="font-mono"
          disabled={connState !== 'connected'}
        />
        <Button onClick={sendCommand} loading={sending} disabled={connState !== 'connected'}>
          <SendHorizonal />
          Send
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Use ↑/↓ to navigate command history
      </p>
    </div>
  );
}
