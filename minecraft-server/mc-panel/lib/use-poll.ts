'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Poll a fetcher on an interval. `loading` is true only until the FIRST
 * result arrives — refresh ticks update `data` without flashing loading
 * states (which is what used to remount half the dashboard).
 */
export function usePoll<T>(fetcher: () => Promise<T>, intervalMs: number) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const refetch = useCallback(async () => {
    try {
      const result = await fetcherRef.current();
      setData(result);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      if (!cancelled) await refetch();
    };
    tick();
    const id = setInterval(tick, intervalMs);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [refetch, intervalMs]);

  return { data, loading, error, refetch };
}
