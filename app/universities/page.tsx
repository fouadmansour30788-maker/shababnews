'use client';

import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { universities, uniTypes, type University } from '@/lib/universities';

const TEAL = '#15b3b8';

// Real logos available in /public/logos (others fall back to initials).
const LOGOS: Record<number, string> = {
  1: 'jinan.jpg', 3: 'aou.png', 4: 'aul.jpg', 5: 'auce.png', 7: 'bau.jpg', 8: 'cityu.jpg',
  9: 'usek.jpg', 10: 'antonine.jpg', 11: 'usj.jpg', 12: 'liu.jpg', 13: 'ndu.jpg',
  14: 'ulf.jpg', 15: 'usf.jpg', 16: 'balamand.jpg',
};
const logoOf = (u: University) => (LOGOS[u.id] ? `/logos/${LOGOS[u.id]}` : '');

const float = (delay = 0, dist = 12) => ({
  animate: { y: [0, -dist, 0] },
  transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

function mapSrc(u: University) {
  return `https://www.google.com/maps?q=${encodeURIComponent(`${u.name}, ${u.location}, Lebanon`)}&output=embed`;
}

/* eslint-disable @next/next/no-img-element */
export default function UniversitiesPage() {
  const [type, setType] = useState('All');
  const [q, setQ] = useState('');
  const [active, setActive] = useState<University | null>(null);

  const filtered = useMemo(
    () =>
      universities.filter((u) => {
        const okType = type === 'All' || u.type === type;
        const okQ =
          q.trim() === '' ||
          `${u.name} ${u.short} ${u.location} ${u.majors.join(' ')}`.toLowerCase().includes(q.toLowerCase());
        return okType && okQ;
      }),
    [type, q]
  );

  const totalMajors = useMemo(() => universities.reduce((s, u) => s + u.majors.length, 0), []);
  const gridKey = `${type}-${q}`;

  return (
    <>
      <PageHero
        title="Directory"
        highlight="Universities"
        teal
        subtitle="The complete guide to North Lebanon's universities — faculties, majors, admissions and contacts, sourced from the Shabab News university guide. Tap any university for its full profile."
      />

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container">
          {/* Hero */}
          <UniHero
            count={universities.length}
            majors={totalMajors}
            onBrowse={() => document.getElementById('uni-grid-top')?.scrollIntoView({ behavior: 'smooth' })}
          />

          {/* Search + type filter */}
          <div className="sc-toolbar">
            <div className="sc-search">
              <i className="fas fa-search" />
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by university, city or major…" />
            </div>
            <div className="sc-langs">
              {uniTypes.map((t) => (
                <button key={t} className={`sc-lang${type === t ? ' on' : ''}`} onClick={() => setType(t)}>{t}</button>
              ))}
            </div>
          </div>

          {filtered.length > 0 && (
            <div className="sc-grid-head" id="uni-grid-top">
              <h2>{`${filtered.length} ${filtered.length === 1 ? 'university' : 'universities'}`}</h2>
              <span>North Lebanon directory</span>
            </div>
          )}

          <div className="sc-grid" key={gridKey} style={{ perspective: 1300 }}>
            {filtered.map((u, i) => (
              <UniTiltCard key={u.id} uni={u} index={i} onOpen={() => setActive(u)} />
            ))}
            {filtered.length === 0 && <p className="sc-empty">No universities match your search.</p>}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <UniModal uni={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function UniHero({ count, majors, onBrowse }: { count: number; majors: number; onBrowse: () => void }) {
  return (
    <motion.div className="scf" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <div className="scf-body">
        <span className="scf-eyebrow"><i className="fas fa-graduation-cap" /> University guide</span>
        <h2 className="scf-title">Your path to<br />higher education</h2>
        <p className="scf-lead">
          From engineering to medicine, business to fine arts — compare faculties, majors and admissions
          across North Lebanon&apos;s universities, all in one trusted guide.
        </p>
        <div className="scf-cta-row">
          <button className="scf-btn" onClick={onBrowse}>Browse universities</button>
          <a className="scf-play" href="/news"><span className="dot"><i className="fas fa-play" /></span> Watch campus tours</a>
        </div>
        <div className="scf-mini">
          <span><i className="fas fa-map-marker-alt" /> Tripoli · Koura · Zgharta · Batroun</span>
          <span><i className="fas fa-book" /> {majors}+ majors</span>
        </div>
      </div>

      <div className="scf-visual">
        <div className="scf-blob" />
        <div className="scf-circle-wrap">
          <motion.div className="scf-circlevid" {...float(0, 10)}>
            <video src="/uni-hero.mp4" autoPlay muted loop playsInline />
          </motion.div>
        </div>
        <motion.span className="scf-chip c1" {...float(0.6)}><i className="fas fa-graduation-cap" /></motion.span>
        <motion.span className="scf-chip c2" {...float(1.1)}><i className="fas fa-university" /></motion.span>
        <motion.div className="scf-pill p-rating" {...float(0.3, 9)}><i className="fas fa-university" /> {count} universities</motion.div>
        <motion.div className="scf-pill p-students" {...float(0.9, 9)}>
          <i className="fas fa-book" />
          <div><b>{majors}+ majors</b><span>across every faculty</span></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function UniTiltCard({ uni, index, onOpen }: { uni: University; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 15 });
  const logo = logoOf(uni);

  function move(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <motion.button
      ref={ref}
      className="sc-card"
      onClick={onOpen}
      onMouseMove={move}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 44, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sc-banner" style={{ backgroundImage: `url('${uni.image}')`, transform: 'translateZ(30px)' }}>
        <span className="sc-logo">{logo ? <img src={logo} alt={uni.name} /> : <span className="sc-logo-txt">{uni.short}</span>}</span>
        <span className="sc-rating" style={{ color: TEAL }}>{uni.type}</span>
      </div>
      <div className="sc-body" style={{ transform: 'translateZ(18px)' }}>
        <h3 className="sc-name">{uni.name}</h3>
        <p className="sc-motto">{uni.short}{uni.founded ? ` · Est. ${uni.founded}` : ''}</p>
        <div className="sc-meta">
          <span><i className="fas fa-map-marker-alt" /> {uni.location}</span>
          <span><i className="fas fa-book" /> {uni.majors.length ? `${uni.majors.length} majors listed` : 'Multiple faculties'}</span>
          {uni.programs && <span><i className="fas fa-layer-group" /> {uni.programs} programs</span>}
        </div>
        <span className="sc-view">View profile <i className="fas fa-arrow-right" /></span>
      </div>
    </motion.button>
  );
}

function MajorRow({ major }: { major: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`uni-major${open ? ' open' : ''}`}>
      <button className="uni-major-head" onClick={() => setOpen((o) => !o)}>
        <span>{major}</span>
        <i className={`fas fa-${open ? 'minus' : 'plus'}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="uni-major-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="uni-major-inner">
              <div><strong>Degree</strong><span>Bachelor&apos;s (BA / BS)</span></div>
              <div><strong>Language</strong><span>English · French · Arabic</span></div>
              <div><strong>Credits &amp; fees</strong><span>Available from admissions</span></div>
              <div><strong>Entrance exam</strong><span>Subject &amp; date set by faculty</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function UniModal({ uni, onClose }: { uni: University; onClose: () => void }) {
  const [more, setMore] = useState(false);
  const logo = logoOf(uni);
  const short = uni.description.length > 240 && !more ? uni.description.slice(0, 240) + '…' : uni.description;

  return (
    <motion.div className="sc-overlay" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="sc-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="sc-close" onClick={onClose} aria-label="Close"><i className="fas fa-times" /></button>
        <div className="sc-mbanner" style={{ backgroundImage: `url('${uni.image}')` }} />

        <div className="sc-mhead">
          <span className="sc-mlogo">{logo ? <img src={logo} alt={uni.name} /> : <span className="sc-logo-txt big">{uni.short}</span>}</span>
          <div>
            <h2 className="sc-mtitle">{uni.name}</h2>
            <div className="sc-msub">{uni.short} University · {uni.type}</div>
            <div className="sc-mtags">
              {uni.founded && <span><i className="fas fa-calendar" /> Est. {uni.founded}</span>}
              {uni.programs && <span><i className="fas fa-layer-group" /> {uni.programs} programs</span>}
              <span><i className="fas fa-book" /> {uni.majors.length || '—'} majors</span>
            </div>
          </div>
        </div>

        <div className="sc-mgrid">
          <div>
            <p className="sc-desc">{short}</p>
            {uni.description.length > 240 && (
              <button className="sc-readmore" onClick={() => setMore((m) => !m)}>{more ? '…Read Less' : 'Read More…'}</button>
            )}

            <table className="sc-table">
              <thead><tr><th>Address</th><th>Phone</th><th>Email</th><th>Website</th></tr></thead>
              <tbody>
                <tr>
                  <td>{uni.location}</td>
                  <td>{uni.phone ? <a href={`tel:${uni.phone}`}>{uni.phone}</a> : '—'}</td>
                  <td>{uni.email ? <a href={`mailto:${uni.email}`}>{uni.email}</a> : '—'}</td>
                  <td>{uni.website ? <a href={uni.website} target="_blank" rel="noreferrer">Visit</a> : '—'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside className="sc-panel">
            <div className="sc-panel-head">Majors &amp; Faculties {uni.majors.length ? `(${uni.majors.length})` : ''}</div>
            <div className="uni-majors">
              {uni.majors.length ? (
                uni.majors.map((m) => <MajorRow key={m} major={m} />)
              ) : (
                <p className="sc-field-val" style={{ padding: 14 }}>Programs available across multiple faculties — contact the university for the full list of majors.</p>
              )}
            </div>
          </aside>
        </div>

        <div className="sc-map">
          <iframe src={mapSrc(uni)} title={`${uni.name} map`} loading="lazy" />
        </div>

        {uni.website && (
          <div className="sc-mfoot">
            <a className="btn btn-accent" style={{ background: TEAL }} href={uni.website} target="_blank" rel="noreferrer"><i className="fas fa-globe" /> Visit website</a>
            {uni.phone && <a className="btn btn-ghost" href={`tel:${uni.phone}`}><i className="fas fa-phone" /> Call</a>}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
