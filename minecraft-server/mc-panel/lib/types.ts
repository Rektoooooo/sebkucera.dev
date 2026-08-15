export interface ServerStatus {
  online: boolean;
  players: { online: number; max: number } | null;
  port: number;
}

export interface Mod {
  file: string;
  enabled: boolean;
  sizeBytes: number;
  sha512?: string;
}

export interface ModMeta {
  title: string;
  description: string;
  icon_url: string | null;
  slug: string;
}

export interface Backup {
  id: string;
  sizeBytes: number;
}

export interface Metrics {
  cpuPercent: number;
  memory: { usedBytes: number; totalBytes: number; percent: number };
  disk: { usedBytes: number; totalBytes: number; percent: number };
  java: { rssBytes: number; cpuPercent: number; uptimeSeconds: number } | null;
}

export interface OnlinePlayer {
  name: string;
  uuid: string;
}

export interface WhitelistEntry {
  uuid: string;
  name: string;
}

export interface OpEntry {
  uuid: string;
  name: string;
  level?: number;
}

export interface BanEntry {
  uuid: string;
  name: string;
  created?: string;
  source?: string;
  expires?: string;
  reason?: string;
}

export interface PlayersData {
  serverRunning: boolean;
  playerCount: { online: number; max: number } | null;
  online: OnlinePlayer[];
  whitelist: WhitelistEntry[];
  ops: OpEntry[];
  banned: BanEntry[];
}

export interface SessionEvent {
  name: string;
  action: 'joined' | 'left';
  at: string;
}

export interface PropertiesResponse {
  properties: Record<string, string>;
  raw: string;
  editable: string[];
}

export interface ScheduleConfig {
  enabled: boolean;
  time: string;
  retention: number;
  lastRunDate: string | null;
  lastRunAt: string | null;
  lastRunResult: string | null;
}

export function formatBytes(bytes: number): string {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** i).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export function formatUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
