'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';

interface Project {
  id: number;
  title: string;
  desc: string;
  link: string;
}

let pid = 100;

export default function PortfolioBuilder() {
  const [name, setName] = useState('Your Name');
  const [tagline, setTagline] = useState('Designer · Developer · Student');
  const [about, setAbout] = useState('I build things I care about. Here is a selection of my recent work.');
  const [accent, setAccent] = useState('#1fd6d8');
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Project One', desc: 'A short description of what it does and your role.', link: '#' },
    { id: 2, title: 'Project Two', desc: 'Another highlight from your portfolio.', link: '#' },
  ]);

  const field = 'w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-text outline-none focus:border-teal-bright';

  return (
    <>
      <PageHeader kicker="Tool" title="Portfolio builder" subtitle="Showcase your projects in a clean, shareable portfolio. Customize and print it instantly." />

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-2 md:px-8">
        <div className="space-y-5">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className={field} />
          <input value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Tagline" className={field} />
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={3} placeholder="About you" className={field} />
          <div className="flex items-center gap-3">
            <label className="text-sm text-muted">Accent color</label>
            <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} className="h-9 w-12 rounded border border-line bg-surface" />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-bright">Projects</p>
              <button onClick={() => setProjects((p) => [...p, { id: pid++, title: '', desc: '', link: '' }])} className="text-xs text-muted hover:text-teal-bright">+ Add</button>
            </div>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.id} className="space-y-2 rounded-xl border border-line p-3">
                  <input value={p.title} placeholder="Project title" onChange={(e) => setProjects((list) => list.map((x) => (x.id === p.id ? { ...x, title: e.target.value } : x)))} className={field} />
                  <textarea value={p.desc} placeholder="Description" rows={2} onChange={(e) => setProjects((list) => list.map((x) => (x.id === p.id ? { ...x, desc: e.target.value } : x)))} className={field} />
                  <input value={p.link} placeholder="Link (optional)" onChange={(e) => setProjects((list) => list.map((x) => (x.id === p.id ? { ...x, link: e.target.value } : x)))} className={field} />
                  <button onClick={() => setProjects((list) => list.filter((x) => x.id !== p.id))} className="text-xs text-muted hover:text-magenta">Remove</button>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => window.print()} className="w-full rounded-full bg-teal-bright py-3 text-sm font-semibold text-[#02110f] transition hover:bg-teal">
            Print / Save as PDF
          </button>
        </div>

        {/* Preview */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="printable overflow-hidden rounded-2xl bg-white text-[#111] shadow-2xl">
            <div className="relative px-9 py-12" style={{ background: `linear-gradient(135deg, ${accent}, #07686a)` }}>
              <h1 className="text-4xl font-bold text-white">{name}</h1>
              <p className="mt-2 text-white/90">{tagline}</p>
            </div>
            <div className="p-9">
              <p className="text-sm leading-relaxed text-gray-600">{about}</p>
              <h2 className="mt-8 text-sm font-bold uppercase tracking-wider" style={{ color: accent }}>Selected work</h2>
              <div className="mt-4 space-y-4">
                {projects.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{p.title}</p>
                      {p.link && p.link !== '#' && (
                        <a href={p.link} className="text-xs font-medium" style={{ color: accent }}>View →</a>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
