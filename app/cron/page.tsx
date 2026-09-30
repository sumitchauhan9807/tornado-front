import { headers } from 'next/headers';
import { production } from '@/env';
const API_URL = production ? 'https://next.tornadodialer.net/api/schedule' : 'http://localhost:3000/api/schedule'

type LogType = 'scheduled' | 'skipped' | 'running' | 'completed' | 'success' | 'error' | 'info';

type LogEntry = {
  raw: string;
  timestamp?: string;
  category?: string;
  message: string;
  type: LogType;
};

function parseLogs(logs: string): LogEntry[] {
  return logs
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const timestamp = line.match(/^\[?(\d{4}-\d{2}-\d{2}T[\d:.]+Z)\]?/)?.[1];

      const category = line.match(/\[(Scheduler|close|open)\]/)?.[1];

      const lower = line.toLowerCase();

      let type: LogType = 'info';

      if (lower.includes('error') || lower.includes('failed')) {
        type = 'error';
      } else if (lower.includes('skipping')) {
        type = 'skipped';
      } else if (lower.includes('scheduled')) {
        type = 'scheduled';
      } else if (lower.includes('running')) {
        type = 'running';
      } else if (lower.includes('removed completed') || lower.includes('completed')) {
        type = 'completed';
      } else if (lower.includes('successfully') || lower.includes('setup complete')) {
        type = 'success';
      }

      return {
        raw: line,
        timestamp,
        category,
        message: line.replace(/^\[?\d{4}-\d{2}-\d{2}T[\d:.]+Z\]?\s*/, '').trim(),
        type,
      };
    });
}

function formatTime(timestamp?: string) {
  if (!timestamp) return '';

  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

function typeStyle(type: LogType) {
  switch (type) {
    case 'scheduled':
      return {
        dot: 'bg-blue-400',
        badge: 'border-blue-400/20 bg-blue-400/10 text-blue-400',
        label: 'Scheduled',
      };

    case 'skipped':
      return {
        dot: 'bg-amber-400',
        badge: 'border-amber-400/20 bg-amber-400/10 text-amber-400',
        label: 'Skipped',
      };

    case 'running':
      return {
        dot: 'animate-pulse bg-violet-400',
        badge: 'border-violet-400/20 bg-violet-400/10 text-violet-400',
        label: 'Running',
      };

    case 'completed':
      return {
        dot: 'bg-emerald-400',
        badge: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-400',
        label: 'Completed',
      };

    case 'success':
      return {
        dot: 'bg-emerald-400',
        badge: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-400',
        label: 'Success',
      };

    case 'error':
      return {
        dot: 'bg-red-400',
        badge: 'border-red-400/20 bg-red-400/10 text-red-400',
        label: 'Error',
      };

    default:
      return {
        dot: 'bg-slate-500',
        badge: 'border-slate-500/20 bg-slate-500/10 text-slate-400',
        label: 'Info',
      };
  }
}

function Stat({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">{title}</span>

        <span className="text-slate-500">{icon}</span>
      </div>

      <div className="mt-3 text-3xl font-bold text-white">{value}</div>
    </div>
  );
}

async function getSchedule() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'x-api-token': 'V7#qL9!mR2@xK8$pN4&z',
    },

    // Always get fresh scheduler data.
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Scheduler API returned ${response.status}`);
  }

  return response.text();
}

export default async function SchedulePage() {
  let logs = '';
  let error = '';

  try {
    logs = await getSchedule();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unable to load scheduler';
  }

  const entries = parseLogs(logs);
  const requestHeaders = await headers();

  const generatedAt = new Date();

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-8">
        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">!</div>

              <div>
                <h2 className="font-semibold text-red-400">Unable to load scheduler</h2>

                <p className="mt-1 text-sm text-red-400/70">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Activity */}
        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-2 border-b border-slate-800 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-white">Scheduler Activity Tornado Dialer</h2>

              <p style={{ color: 'white' }} className="mt-1 text-xs text-slate-500">
                {entries.length} log entries
              </p>
            </div>

            <div style={{ color: 'white' }} className="text-xs text-slate-600">
              Server time: {generatedAt.toLocaleTimeString()}
            </div>
          </div>

          {entries.length === 0 ? (
            <div className="px-5 py-20 text-center">
              <div className="text-3xl text-slate-700">◌</div>

              <p className="mt-3 text-sm text-slate-500">No scheduler logs available</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-800/70">
              {entries.map((entry, index) => {
                const style = typeStyle(entry.type);

                return (
                  <div key={`${entry.raw}-${index}`} className="px-5 py-4 transition hover:bg-slate-800/30">
                    <div className="flex gap-4">
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${style.dot}`} />

                        {index < entries.length - 1 && <span className="mt-2 h-full w-px bg-slate-800" />}
                      </div>

                      {/* Log */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {entry.timestamp && (
                            <span style={{ color: 'white' }} className="font-mono text-xs text-slate-900">
                              {formatTime(entry.timestamp)}
                            </span>
                          )}

                          {entry.category && <span className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">{entry.category}</span>}

                          <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.badge}`}>{style.label}</span>
                        </div>

                        <p className="mt-2 break-words font-mono text-sm leading-6 text-slate-300">{entry.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Raw logs */}
        {logs && (
          <details className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
            <summary style={{ color: 'white' }} className="cursor-pointer px-5 py-4 text-sm font-medium text-slate-900 transition hover:text-white">
              View raw logs
            </summary>

            <pre style={{ color: 'white' }} className="max-h-[500px] overflow-auto border-t border-slate-800 bg-black/30 p-5  leading-6 text-slate-900">
              {logs}
            </pre>
          </details>
        )}

        {/* Footer */}
        <footer style={{ color: 'white' }} className="mt-6 flex flex-col gap-2 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <span>Scheduler Monitor</span>

          <span>Server-rendered • {requestHeaders.get('host') || 'localhost'}</span>
        </footer>
      </div>
    </main>
  );
}
