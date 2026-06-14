'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/motion/Reveal';
import { useJobs } from '@/lib/useData';

const types = ['All', 'Full-time', 'Internship', 'Part-time'];

export default function JobsPage() {
  const { data: jobs } = useJobs();
  const [type, setType] = useState('All');
  const [q, setQ] = useState('');

  const filtered = useMemo(
    () =>
      jobs.filter(
        (j) =>
          (type === 'All' || j.type === type) &&
          (q === '' ||
            j.title.toLowerCase().includes(q.toLowerCase()) ||
            j.company.toLowerCase().includes(q.toLowerCase()))
      ),
    [jobs, type, q]
  );

  return (
    <>
      <PageHeader
        kicker="Careers"
        title="Jobs & internships"
        subtitle="Opportunities for students and fresh graduates across Lebanon’s top employers."
      />

      <div className="sticky top-16 z-30 border-y border-line bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  type === t ? 'bg-teal-bright text-[#02110f]' : 'border border-line text-muted hover:text-text'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search jobs or companies…"
            className="w-full rounded-full border border-line bg-surface px-4 py-2 text-sm text-text outline-none transition focus:border-teal-bright md:w-72"
          />
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="space-y-4">
            {filtered.map((j, i) => (
              <motion.div
                layout
                key={j.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
              >
                <div className="group flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-teal/40 sm:flex-row sm:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-deep to-violet font-display text-xl font-bold text-white">
                    {j.company.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-teal-bright">
                      {j.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {j.company} · {j.location} · {j.type}
                    </p>
                    {j.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {j.tags.map((t) => (
                          <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                    {j.salary && <span className="text-sm font-semibold text-teal-bright">{j.salary}</span>}
                    <span className="text-xs text-muted">{j.posted}</span>
                    <button className="mt-1 rounded-full bg-teal-bright px-5 py-2 text-sm font-semibold text-[#02110f] transition hover:bg-teal">
                      Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {filtered.length === 0 && <p className="py-20 text-center text-muted">No jobs match your search.</p>}
      </section>
    </>
  );
}
