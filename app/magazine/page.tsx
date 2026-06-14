'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageHero from '@/components/PageHero';

const TEAL = '#15b3b8';

interface Issue {
  month: string;
  year: number;
  theme: string;
  pages: number;
  desc: string;
}

// Issues from the Shabab News magazine archive.
const issues: Issue[] = [
  { month: 'December', year: 2019, theme: 'Year-End Special', pages: 52, desc: 'Our biggest issue of the year — a look back at the students, schools and milestones that defined the year across North Lebanon.' },
  { month: 'November', year: 2019, theme: 'Careers & Future', pages: 44, desc: 'Guidance on majors, internships and the paths from classroom to career, with interviews from young professionals.' },
  { month: 'October', year: 2019, theme: 'Campus Life', pages: 40, desc: 'Inside university life — clubs, friendships, events and everything that makes the campus experience unforgettable.' },
  { month: 'September', year: 2019, theme: 'Back to School', pages: 48, desc: 'A fresh start — study tips, new beginnings and the energy of a brand-new academic year for every student.' },
  { month: 'December', year: 2018, theme: 'Winter Edition', pages: 40, desc: 'Life-awareness stories, student achievements and the interviews that empower a flourishing generation.' },
];

const featured = issues[0];

export default function MagazinePage() {
  const [open, setOpen] = useState<Issue | null>(null);

  return (
    <>
      <PageHero
        title="Magazine"
        highlight="The"
        teal
        subtitle="Check out our latest issue. Each month, Shabab News brings Lebanon's students life-awareness articles, interviews and academic guidance — thousands of free copies, in print and online since 2001."
      />

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container">
          {/* Featured latest issue */}
          <motion.div
            className="mag-feat"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mag-feat-cover" onClick={() => setOpen(featured)}>
              <Cover issue={featured} index={0} big />
            </div>
            <div className="mag-feat-body">
              <span className="scf-eyebrow"><i className="fas fa-star" /> Latest issue</span>
              <h2 className="mag-feat-title">{featured.month} {featured.year} — {featured.theme}</h2>
              <p className="mag-feat-desc">{featured.desc}</p>
              <div className="mag-feat-meta">
                <span><i className="far fa-calendar-alt" /> {featured.month} {featured.year}</span>
                <span><i className="far fa-file" /> {featured.pages} pages</span>
                <span><i className="fas fa-language" /> Arabic · French · English</span>
                <span><i className="fas fa-download" /> Free</span>
              </div>
              <button className="scf-btn" onClick={() => setOpen(featured)}>Read this issue</button>
            </div>
          </motion.div>

          <div className="sc-grid-head"><h2>All issues</h2><span>{issues.length} in the archive</span></div>

          <div className="mag-grid">
            {issues.map((iss, i) => (
              <motion.button
                key={`${iss.month}${iss.year}`}
                className="mag-card"
                onClick={() => setOpen(iss)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Cover issue={iss} index={i} />
                <div className="mag-card-cap">
                  <b>{iss.month} {iss.year}</b>
                  <span>{iss.theme}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div className="sc-overlay" onClick={() => setOpen(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="mag-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="sc-close" onClick={() => setOpen(null)} aria-label="Close"><i className="fas fa-times" /></button>

              {/* Book that opens */}
              <div className="mag-book" key={`${open.month}${open.year}`}>
                <div className="mag-book-page">
                  <span className="mag-book-page-lbl">In this issue</span>
                  <div className="mag-book-page-month">{open.month}<br />{open.year}</div>
                  <span className="mag-book-page-foot">{open.pages} pages · Free</span>
                </div>
                <motion.div
                  className="mag-book-cover"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -162 }}
                  transition={{ duration: 0.95, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
                >
                  <Cover issue={open} index={0} big />
                </motion.div>
              </div>

              {/* Info appears after the book opens */}
              <motion.div
                className="mag-modal-body"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="scf-eyebrow"><i className="far fa-calendar-alt" /> {open.month} {open.year}</span>
                <h2 className="mag-feat-title" style={{ fontSize: 24 }}>{open.theme}</h2>
                <p className="mag-feat-desc">{open.desc}</p>
                <div className="mag-feat-meta">
                  <span><i className="far fa-file" /> {open.pages} pages</span>
                  <span><i className="fas fa-language" /> Arabic · French · English</span>
                </div>
                <div className="sc-mfoot" style={{ padding: 0, marginTop: 8 }}>
                  <button className="btn btn-accent" style={{ background: TEAL }}><i className="fas fa-book-open" /> Read online</button>
                  <button className="btn btn-ghost"><i className="fas fa-download" /> Download PDF</button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Cover({ issue, index, big }: { issue: Issue; index: number; big?: boolean }) {
  const hues = ['#15b3b8', '#0e8f93', '#1ac4ca', '#0b7d81', '#19a9ae'];
  const base = hues[index % hues.length];
  return (
    <div className={`mag-cover${big ? ' big' : ''}`} style={{ background: `linear-gradient(155deg, ${base}, #0b5e61)` }}>
      <div className="mag-cover-top">
        <span className="mag-cover-brand">SHABAB NEWS</span>
        <span className="mag-cover-free">FREE</span>
      </div>
      <div className="mag-cover-mid">
        <div className="mag-cover-month">{issue.month}</div>
        <div className="mag-cover-year">{issue.year}</div>
      </div>
      <div className="mag-cover-theme">{issue.theme}</div>
      <div className="mag-cover-foot">Youth Magazine · {issue.pages} pages</div>
      <span className="mag-cover-spine" />
    </div>
  );
}
