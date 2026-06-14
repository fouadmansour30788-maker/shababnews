'use client';

import { motion } from 'framer-motion';

const TEAL = '#15b3b8'; // Shabab News logo teal

const cards = [
  { color: TEAL, label: 'Reach', num: '50K+', desc: 'Students and youth read Shababnews every month across Lebanon.' },
  { color: TEAL, label: 'Heritage', num: '2001', desc: 'Empowering Lebanese youth and the educational system for over two decades.' },
  { color: TEAL, label: 'Articles', num: '500+', desc: 'Life-awareness stories, interviews and guides published — and counting.' },
  { color: TEAL, label: 'Institutions', num: '200+', desc: 'Schools and universities featured in our directory across the country.' },
];

const fade = (d: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
});

export default function CharityHero() {
  return (
    <>
      <section className="charity-hero">
        <div className="ch-bg">
          <video src="/hero-video.mp4" autoPlay muted loop playsInline />
        </div>
        <div className="ch-inner">
          <motion.h1 {...fade(0.05)} className="ch-title">
            Youth &amp; Stories
          </motion.h1>
          <motion.p {...fade(0.15)} className="ch-sub">
            Every story carries the power to inspire a generation — from classrooms and campuses
            across North Lebanon, since 2001.
          </motion.p>
        </div>
      </section>

      <div className="stat-cards-row">
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, rotateX: 8, rotateY: -4, scale: 1.04 }}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="cc"
            style={{ background: c.color, color: '#fff', transformPerspective: 1000 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="cc-label">{c.label}</div>
              <div className="cc-num">{c.num}</div>
              <div className="cc-desc">{c.desc}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
