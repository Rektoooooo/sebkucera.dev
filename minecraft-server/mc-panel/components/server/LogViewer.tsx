'use client';

import { useEffect, useRef, useState } from 'react';
import { WS_BASE_URL } from '@/lib/api';

interface LogViewerProps {
  className?: string;
}

export function LogViewer({ className = '' }: LogViewerProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  const [autoscroll, setAutoscroll] = useState(true);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const logsContainerRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const ws = new WebSocket(`${WS_BASE_URL}/ws/logs?token=${token}`);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
    };

    ws.onmessage = (event) => {
      const logLine = event.data;
      setLogs((prev) => [...prev, logLine]);
    };

    ws.onerror = () => {
      setConnected(false);
    };

    ws.onclose = () => {
      setConnected(false);
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (autoscroll && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, autoscroll]);

  const handleScroll = () => {
    if (logsContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = logsContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
      setAutoscroll(isAtBottom);
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">Live Logs</h3>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                connected ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></div>
            <span className="text-xs text-zinc-500">
              {connected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoscroll(!autoscroll)}
            className={`text-xs px-3 py-1 rounded ${
              autoscroll
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            Auto-scroll {autoscroll ? 'ON' : 'OFF'}
          </button>
          <button
            onClick={clearLogs}
            className="text-xs px-3 py-1 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          >
            Clear
          </button>
        </div>
      </div>
      <div
        ref={logsContainerRef}
        onScroll={handleScroll}
        className="bg-black border border-zinc-800 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm"
      >
        {logs.length === 0 ? (
          <div className="text-zinc-600 text-center py-8">
            No logs yet. Waiting for server output...
          </div>
        ) : (
          <>
            {logs.map((log, index) => (
              <div key={index} className="text-zinc-300 mb-1 whitespace-pre-wrap">
                {log}
              </div>
            ))}
            <div ref={logsEndRef} />
          </>
        )}
      </div>
    </div>
  );
}
