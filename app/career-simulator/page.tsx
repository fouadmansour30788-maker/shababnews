'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Stethoscope, Cog, Laptop, TrendingUp, Pill, Ruler, Scale, Music, type LucideIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface Career {
  name: string;
  Icon: LucideIcon;
  years: number;
  salaryMin: number;
  salaryMax: number;
  unis: string[];
  path: string[];
}

const careers: Career[] = [
  { name: 'Medicine', Icon: Stethoscope, years: 7, salaryMin: 3000, salaryMax: 8000, unis: ['AUB', 'BAU', 'USJ', 'UOB'], path: ['Sciences Bacc', 'Pre-med / MD (7 yrs)', 'Residency', 'Specialist / Consultant'] },
  { name: 'Engineering', Icon: Cog, years: 5, salaryMin: 2000, salaryMax: 6000, unis: ['AUB', 'LAU', 'BAU', 'USEK'], path: ['Sciences Bacc', 'BE (5 yrs)', 'Order of Engineers', 'Senior / Lead Engineer'] },
  { name: 'Computer Science', Icon: Laptop, years: 4, salaryMin: 2500, salaryMax: 7000, unis: ['AUB', 'LAU', 'LIU', 'NDU'], path: ['Bacc', 'BS CS (3–4 yrs)', 'Junior Developer', 'Senior / Tech Lead'] },
  { name: 'Business', Icon: TrendingUp, years: 4, salaryMin: 1500, salaryMax: 5000, unis: ['AUB', 'LAU', 'USEK', 'NDU'], path: ['Bacc', 'BBA (3–4 yrs)', 'Analyst', 'Manager / MBA'] },
  { name: 'Pharmacy', Icon: Pill, years: 6, salaryMin: 2000, salaryMax: 4500, unis: ['LAU', 'USJ', 'BAU', 'LIU'], path: ['Sciences Bacc', 'PharmD (5–6 yrs)', 'Colloquium', 'Pharmacist / Owner'] },
  { name: 'Architecture', Icon: Ruler, years: 5, salaryMin: 1800, salaryMax: 4000, unis: ['BAU', 'NDU', 'USEK', 'UOB (ALBA)'], path: ['Arts/Sciences Bacc', 'BArch (5 yrs)', 'Order of Engineers', 'Licensed Architect'] },
  { name: 'Law', Icon: Scale, years: 4, salaryMin: 2000, salaryMax: 6000, unis: ['USJ', 'AUB', 'NDU', 'BAU'], path: ['Bacc', 'LLB (3–4 yrs)', 'Bar Exam', 'Attorney'] },
  { name: 'Music', Icon: Music, years: 4, salaryMin: 1000, salaryMax: 3000, unis: ['USEK', 'UA'], path: ['Bacc', 'BMus (3–4 yrs)', 'Performer / Teacher', 'Director / Composer'] },
];

export default function CareerSimulator() {
  const [selected, setSelected] = useState<Career | null>(null);

  return (
    <>
      <PageHeader
        kicker="Tool"
        title="Career simulator"
        subtitle="Pick a path and see how long it takes, what you could earn in Lebanon, and where to study it."
      />

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {careers.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelected(c)}
              className={`flex flex-col items-center gap-2 rounded-2xl border p-5 transition ${
                selected?.name === c.name
                  ? 'border-teal-bright bg-teal/10'
                  : 'border-line bg-surface hover:border-teal/40'
              }`}
            >
              <c.Icon className="h-7 w-7 text-teal" strokeWidth={1.5} />
              <span className="text-sm font-medium text-text">{c.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                  <selected.Icon className="h-8 w-8" strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="font-display text-3xl font-bold text-text">{selected.name}</h2>
                  <p className="text-sm text-muted">~{selected.years} years to qualify</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-bg-soft p-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Study duration</p>
                  <p className="mt-1 font-display text-3xl font-bold text-text">{selected.years} yrs</p>
                </div>
                <div className="rounded-2xl border border-line bg-bg-soft p-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Monthly salary</p>
                  <p className="mt-1 font-display text-2xl font-bold text-gradient">
                    ${selected.salaryMin.toLocaleString()}–{selected.salaryMax.toLocaleString()}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-bg-soft p-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted">Top universities</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selected.unis.map((u) => (
                      <span key={u} className="rounded-full bg-teal/15 px-2.5 py-0.5 text-xs font-medium text-teal-bright">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-teal-bright">Your journey</p>
                <div className="flex flex-col gap-0 sm:flex-row sm:items-center">
                  {selected.path.map((step, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.12 }}
                      className="flex items-center"
                    >
                      <div className="flex items-center gap-3 rounded-xl border border-line bg-bg-soft px-4 py-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-bright text-xs font-bold text-[#02110f]">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-text">{step}</span>
                      </div>
                      {i < selected.path.length - 1 && (
                        <span className="mx-2 hidden text-teal-bright sm:inline">→</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <p className="mt-10 text-center text-muted">Choose a career above to simulate your path.</p>
        )}
      </section>
    </>
  );
}
