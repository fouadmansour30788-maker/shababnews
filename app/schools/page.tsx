'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import SchoolTiltCard from '@/components/schools/SchoolTiltCard';
import SchoolsHero from '@/components/schools/SchoolsHero';
import { schools, schoolLanguages, type School } from '@/lib/schools';

const TEAL = '#15b3b8';

/* Map the existing dataset onto the real single_school fields. */
function info(s: School) {
  const specialNeeds = s.highlights.find((h) => /inclus|special needs|learning support|support department|special programs/i.test(h));
  return {
    programs: s.specialPrograms,
    mainLanguage: s.languages.join(' · '),
    entryLevel: s.gradeLevels[0] ?? '—',
    specialNeeds: specialNeeds ? 'Available — dedicated support' : 'Available on request',
    grades: s.grades,
  };
}

function mapSrc(s: School) {
  return `https://www.google.com/maps?q=${encodeURIComponent(`${s.name}, ${s.location}, Lebanon`)}&output=embed`;
}

/* eslint-disable @next/next/no-img-element */
export default function SchoolsPage() {
  const [lang, setLang] = useState('All');
  const [q, setQ] = useState('');
  const [active, setActive] = useState<School | null>(null);

  const filtered = useMemo(
    () =>
      schools.filter((s) => {
        const okLang = lang === 'All' || s.languages.includes(lang);
        const okQ =
          q.trim() === '' ||
          `${s.name} ${s.location} ${s.motto}`.toLowerCase().includes(q.toLowerCase());
        return okLang && okQ;
      }),
    [lang, q]
  );

  const avgRating = useMemo(
    () => (schools.reduce((s, x) => s + x.rating, 0) / schools.length).toFixed(1),
    []
  );
  const gridKey = `${lang}-${q}`;

  return (
    <>
      <PageHero
        title="Directory"
        highlight="Schools"
        teal
        subtitle="Explore the leading schools of North Lebanon — their programs, languages and admissions, all in one place. Tap any school to view its full profile."
      />

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container">
          {/* Search + language filter */}
          <div className="sc-toolbar">
            <div className="sc-search">
              <i className="fas fa-search" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by school, region or motto…"
              />
            </div>
            <div className="sc-langs">
              {schoolLanguages.map((l) => (
                <button
                  key={l}
                  className={`sc-lang${lang === l ? ' on' : ''}`}
                  onClick={() => setLang(l)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Intro hero */}
          <SchoolsHero
            count={schools.length}
            avgRating={avgRating}
            onBrowse={() => document.getElementById('sc-grid-top')?.scrollIntoView({ behavior: 'smooth' })}
          />

          {/* Section label */}
          {filtered.length > 0 && (
            <div className="sc-grid-head" id="sc-grid-top">
              <h2>{`${filtered.length} ${filtered.length === 1 ? 'school' : 'schools'}`}</h2>
              <span>North Lebanon directory</span>
            </div>
          )}

          {/* Grid */}
          <div className="sc-grid" key={gridKey} style={{ perspective: 1300 }}>
            {filtered.map((s, i) => (
              <SchoolTiltCard key={s.id} school={s} index={i} onOpen={() => setActive(s)} />
            ))}
            {filtered.length === 0 && <p className="sc-empty">No schools match your search.</p>}
          </div>
        </div>
      </section>

      {/* Detail modal — single_school structure */}
      <AnimatePresence>
        {active && <SchoolModal school={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function SchoolModal({ school, onClose }: { school: School; onClose: () => void }) {
  const [more, setMore] = useState(false);
  const meta = info(school);
  const short = school.description.length > 240 && !more
    ? school.description.slice(0, 240) + '…'
    : school.description;

  return (
    <motion.div
      className="sc-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="sc-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="sc-close" onClick={onClose} aria-label="Close"><i className="fas fa-times" /></button>

        {/* Banner */}
        <div className="sc-mbanner" style={{ backgroundImage: `url('${school.image}')` }} />

        <div className="sc-mhead">
          <span className="sc-mlogo"><img src={school.logo} alt={school.name} /></span>
          <div>
            <h2 className="sc-mtitle">{school.name}</h2>
            <div className="sc-msub">{school.motto}</div>
            <div className="sc-mtags">
              <span><i className="fas fa-calendar" /> Est. {school.founded}</span>
              <span><i className="fas fa-users" /> {school.students}</span>
              <span><i className="fas fa-star" style={{ color: TEAL }} /> {school.rating}</span>
            </div>
          </div>
        </div>

        <div className="sc-mgrid">
          {/* Left: description + contact */}
          <div>
            <p className="sc-desc">{short}</p>
            {school.description.length > 240 && (
              <button className="sc-readmore" onClick={() => setMore((m) => !m)}>
                {more ? '…Read Less' : 'Read More…'}
              </button>
            )}

            {/* Contact table */}
            <table className="sc-table">
              <thead>
                <tr><th>Address</th><th>Phone</th><th>Email</th><th>Website</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>{school.location}</td>
                  <td>{school.contact.phone ? <a href={`tel:${school.contact.phone}`}>{school.contact.phone}</a> : '—'}</td>
                  <td>{school.contact.email ? <a href={`mailto:${school.contact.email}`}>{school.contact.email}</a> : '—'}</td>
                  <td>{school.contact.website ? <a href={school.contact.website} target="_blank" rel="noreferrer">Visit</a> : '—'}</td>
                </tr>
              </tbody>
            </table>

            {school.accreditations.length > 0 && (
              <div className="sc-accr">
                <span className="sc-accr-lbl">Accreditations</span>
                <div className="sc-chips">
                  {school.accreditations.map((a) => <span key={a} className="sc-chip">{a}</span>)}
                </div>
              </div>
            )}
          </div>

          {/* Right: School Information panel */}
          <aside className="sc-panel">
            <div className="sc-panel-head">School Information</div>
            <div className="sc-panel-body">
              <SchoolField label="Programs">
                <div className="sc-chips">
                  {meta.programs.map((p) => <span key={p} className="sc-chip soft">{p}</span>)}
                </div>
              </SchoolField>
              <SchoolField label="Main Language">{meta.mainLanguage}</SchoolField>
              <SchoolField label="Entry Level">{meta.entryLevel}</SchoolField>
              <SchoolField label="Special Needs Classes">{meta.specialNeeds}</SchoolField>
              <SchoolField label="Grades">{meta.grades}</SchoolField>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div className="sc-map">
          <iframe src={mapSrc(school)} title={`${school.name} map`} loading="lazy" />
        </div>

        {school.contact.website && (
          <div className="sc-mfoot">
            <a className="btn btn-accent" style={{ background: TEAL }} href={school.contact.website} target="_blank" rel="noreferrer">
              <i className="fas fa-globe" /> Visit website
            </a>
            {school.contact.phone && (
              <a className="btn btn-ghost" href={`tel:${school.contact.phone}`}>
                <i className="fas fa-phone" /> Call
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function SchoolField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="sc-field">
      <div className="sc-field-lbl">{label}</div>
      <div className="sc-field-val">{children}</div>
    </div>
  );
}
