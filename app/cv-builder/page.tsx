'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

interface Entry {
  id: number;
  title: string;
  org: string;
  period: string;
  detail: string;
}

let eid = 100;

export default function CvBuilder() {
  const [name, setName] = useState('Your Name');
  const [role, setRole] = useState('Computer Science Student');
  const [email, setEmail] = useState('you@email.com');
  const [phone, setPhone] = useState('+961 ...');
  const [location, setLocation] = useState('Beirut, Lebanon');
  const [summary, setSummary] = useState(
    'Motivated student passionate about technology and innovation, seeking opportunities to grow and contribute.'
  );
  const [skills, setSkills] = useState('JavaScript, React, Teamwork, English, French');
  const [experience, setExperience] = useState<Entry[]>([
    { id: 1, title: 'Intern', org: 'Company', period: '2025', detail: 'What you did and achieved.' },
  ]);
  const [education, setEducation] = useState<Entry[]>([
    { id: 2, title: 'BS in Computer Science', org: 'University', period: '2023 – 2027', detail: 'Relevant coursework.' },
  ]);

  const field =
    'w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-text outline-none focus:border-teal-bright';

  const entryEditor = (list: Entry[], set: (v: Entry[]) => void, label: string) => (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-bright">{label}</p>
        <button
          onClick={() => set([...list, { id: eid++, title: '', org: '', period: '', detail: '' }])}
          className="text-xs text-muted hover:text-teal-bright"
        >
          + Add
        </button>
      </div>
      <div className="space-y-3">
        {list.map((e) => (
          <div key={e.id} className="space-y-2 rounded-xl border border-line p-3">
            <div className="grid grid-cols-2 gap-2">
              <input value={e.title} placeholder="Title" onChange={(ev) => set(list.map((x) => (x.id === e.id ? { ...x, title: ev.target.value } : x)))} className={field} />
              <input value={e.org} placeholder="Organization" onChange={(ev) => set(list.map((x) => (x.id === e.id ? { ...x, org: ev.target.value } : x)))} className={field} />
            </div>
            <input value={e.period} placeholder="Period" onChange={(ev) => set(list.map((x) => (x.id === e.id ? { ...x, period: ev.target.value } : x)))} className={field} />
            <textarea value={e.detail} placeholder="Details" rows={2} onChange={(ev) => set(list.map((x) => (x.id === e.id ? { ...x, detail: ev.target.value } : x)))} className={field} />
            <button onClick={() => set(list.filter((x) => x.id !== e.id))} className="text-xs text-muted hover:text-magenta">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <PageHeader kicker="Tool" title="CV builder" subtitle="Fill in your details and watch your CV build live. Print or save as PDF when you’re done." />

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-2 md:px-8">
        {/* Form */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className={field} />
            <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Headline" className={field} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={field} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className={field} />
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className={`${field} col-span-2`} />
          </div>
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={3} placeholder="Professional summary" className={field} />
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-bright">Skills (comma separated)</p>
            <input value={skills} onChange={(e) => setSkills(e.target.value)} className={field} />
          </div>
          {entryEditor(experience, setExperience, 'Experience')}
          {entryEditor(education, setEducation, 'Education')}
          <button onClick={() => window.print()} className="w-full rounded-full bg-teal-bright py-3 text-sm font-semibold text-[#02110f] transition hover:bg-teal">
            Print / Save as PDF
          </button>
        </div>

        {/* Live preview */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="printable mx-auto max-w-[640px] rounded-2xl bg-white p-10 text-[#1a1a1a] shadow-2xl">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="mt-1 text-lg text-[#0ba0a2]">{role}</p>
            <p className="mt-2 text-xs text-gray-500">{[email, phone, location].filter(Boolean).join('  ·  ')}</p>

            {summary && (
              <>
                <h2 className="mt-6 border-b-2 border-[#0ba0a2] pb-1 text-sm font-bold uppercase tracking-wider text-[#0ba0a2]">Summary</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{summary}</p>
              </>
            )}

            {experience.some((e) => e.title || e.org) && (
              <>
                <h2 className="mt-6 border-b-2 border-[#0ba0a2] pb-1 text-sm font-bold uppercase tracking-wider text-[#0ba0a2]">Experience</h2>
                {experience.map((e) => (
                  <div key={e.id} className="mt-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">{e.title}{e.org && ` · ${e.org}`}</p>
                      <p className="text-xs text-gray-500">{e.period}</p>
                    </div>
                    <p className="text-sm text-gray-700">{e.detail}</p>
                  </div>
                ))}
              </>
            )}

            {education.some((e) => e.title || e.org) && (
              <>
                <h2 className="mt-6 border-b-2 border-[#0ba0a2] pb-1 text-sm font-bold uppercase tracking-wider text-[#0ba0a2]">Education</h2>
                {education.map((e) => (
                  <div key={e.id} className="mt-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">{e.title}{e.org && ` · ${e.org}`}</p>
                      <p className="text-xs text-gray-500">{e.period}</p>
                    </div>
                    <p className="text-sm text-gray-700">{e.detail}</p>
                  </div>
                ))}
              </>
            )}

            {skills && (
              <>
                <h2 className="mt-6 border-b-2 border-[#0ba0a2] pb-1 text-sm font-bold uppercase tracking-wider text-[#0ba0a2]">Skills</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.split(',').map((s) => s.trim()).filter(Boolean).map((s) => (
                    <span key={s} className="rounded bg-[#0ba0a2]/10 px-2.5 py-1 text-xs font-medium text-[#0ba0a2]">{s}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
