'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { campuses, regions, type Campus } from '@/lib/campuses';

export default function MapPage() {
  const [region, setRegion] = useState('All');
  const [q, setQ] = useState('');
  const [active, setActive] = useState<Campus | null>(null);

  const filtered = useMemo(
    () =>
      campuses.filter(
        (c) =>
          (region === 'All' || c.region === region) &&
          (q === '' ||
            c.uni.toLowerCase().includes(q.toLowerCase()) ||
            c.short.toLowerCase().includes(q.toLowerCase()) ||
            c.campus.toLowerCase().includes(q.toLowerCase()))
      ),
    [region, q]
  );

  const focus = active || filtered[0] || campuses[0];
  const mapSrc = `https://www.google.com/maps?q=${focus.lat},${focus.lng}&z=11&output=embed`;

  return (
    <>
      <PageHeader
        kicker="Explore"
        title="Campus map"
        subtitle="Every university campus across Lebanon, with exact locations and directions."
      />

      <div className="sticky top-16 z-30 border-y border-line bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  region === r ? 'bg-teal-bright text-[#02110f]' : 'border border-line text-muted hover:text-text'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search campuses…"
            className="w-full rounded-full border border-line bg-surface px-4 py-2 text-sm text-text outline-none transition focus:border-teal-bright md:w-64"
          />
        </div>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-6 px-5 py-12 lg:grid-cols-[1fr_1.3fr] md:px-8">
        {/* Campus list */}
        <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.button
                layout
                key={`${c.short}-${c.campus}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.2) }}
                onClick={() => setActive(c)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                  focus === c ? 'border-teal-bright bg-teal/10' : 'border-line bg-surface hover:border-teal/40'
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-deep to-violet text-xs font-bold text-white">
                  {c.short}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-text">{c.campus}</p>
                  <p className="truncate text-xs text-muted">{c.uni}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 rounded-full border border-line px-3 py-1.5 text-xs text-text transition hover:border-teal-bright"
                >
                  Directions
                </a>
              </motion.button>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && <p className="py-10 text-center text-muted">No campuses match.</p>}
        </div>

        {/* Map */}
        <div className="sticky top-28 h-[70vh] overflow-hidden rounded-3xl border border-line">
          <iframe
            key={`${focus.lat}-${focus.lng}`}
            src={mapSrc}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            title={`${focus.uni} — ${focus.campus}`}
          />
        </div>
      </section>
    </>
  );
}
