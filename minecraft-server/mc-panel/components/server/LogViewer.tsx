'use client';

import { useEffect, useRef, useState } from 'react';
import { WS_BASE_URL, api } from '@/lib/api';

interface LogViewerProps {
  className?: string;
}

export function LogViewer({ className = '' }: LogViewerProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  const [autoscroll, setAutoscroll] = useState(true);
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [sendingCommand, setSendingCommand] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const logsContainerRef = useRef<HTMLDivElement>(null);
  const commandInputRef = useRef<HTMLInputElement>(null);
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

  const handleSendCommand = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!command.trim() || sendingCommand) return;

    setSendingCommand(true);
    try {
      // Add command to history
      setCommandHistory((prev) => [...prev, command]);
      setHistoryIndex(-1);

      // Send command to backend
      await api.post('/server/command', { command: command.trim() });

      // Clear input
      setCommand('');

      // Add visual feedback in logs
      setLogs((prev) => [...prev, `> ${command}`]);
    } catch (error: any) {
      console.error('Failed to send command:', error);
      setLogs((prev) => [...prev, `Error: Failed to send command - ${error.message}`]);
    } finally {
      setSendingCommand(false);
      commandInputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow up - previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setCommand(commandHistory[newIndex]);
    }

    // Arrow down - next command
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCommand('');
      } else {
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      }
    }
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
        className="bg-black border border-zinc-800 rounded-t-lg p-4 h-96 overflow-y-auto font-mono text-sm"
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

      {/* Command Input */}
      <form onSubmit={handleSendCommand} className="bg-zinc-900 border border-t-0 border-zinc-800 rounded-b-lg p-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-green-500 font-mono text-sm font-semibold">
            <span>$</span>
          </div>
          <input
            ref={commandInputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter server command... (e.g., say Hello, list, stop)"
            disabled={!connected || sendingCommand}
            className="flex-1 bg-black border border-zinc-800 rounded px-3 py-2 text-sm font-mono text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!connected || sendingCommand || !command.trim()}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {sendingCommand ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending
              </div>
            ) : (
              'Send'
            )}
          </button>
        </div>
        <p className="text-xs text-zinc-500 mt-2">
          Use ↑/↓ arrow keys to navigate command history
        </p>
      </form>
    </div>
  );
}
