'use client';

import { useEffect, useState } from 'react';

function diff(target: number) {
  const d = target - Date.now();
  if (d < 0) return { days: 0, hours: 0, mins: 0, secs: 0, done: true };
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    mins: Math.floor((d % 3600000) / 60000),
    secs: Math.floor((d % 60000) / 1000),
    done: false,
  };
}

/**
 * Inherits text color from its parent so it reads on both photos
 * (white text) and light surfaces (dark text).
 */
export default function Countdown({ date }: { date: string }) {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(() => diff(new Date(date).getTime()));

  useEffect(() => {
    setMounted(true);
    const target = new Date(date).getTime();
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [date]);

  // Render a stable placeholder on the server / first paint so SSR and the
  // first client render match; live numbers kick in after mount.
  if (!mounted) {
    return (
      <div className="flex gap-3">
        {['Days', 'Hrs', 'Min', 'Sec'].map((l) => (
          <div key={l} className="text-center">
            <span className="block font-display text-xl font-bold leading-none tabular-nums">--</span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-wider opacity-70">{l}</span>
          </div>
        ))}
      </div>
    );
  }

  const blocks = [
    { v: t.days, l: 'Days' },
    { v: t.hours, l: 'Hrs' },
    { v: t.mins, l: 'Min' },
    { v: t.secs, l: 'Sec' },
  ];

  if (t.done) {
    return <span className="text-xs font-bold uppercase tracking-wider">Happening now</span>;
  }

  return (
    <div className="flex gap-3">
      {blocks.map((b) => (
        <div key={b.l} className="text-center">
          <span className="block font-display text-xl font-bold leading-none tabular-nums">
            {String(b.v).padStart(2, '0')}
          </span>
          <span className="mt-1 block text-[9px] font-medium uppercase tracking-wider opacity-70">{b.l}</span>
        </div>
      ))}
    </div>
  );
}
