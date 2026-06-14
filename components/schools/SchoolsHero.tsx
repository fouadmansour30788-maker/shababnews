'use client';

import { motion } from 'framer-motion';

const float = (delay = 0, dist = 12) => ({
  animate: { y: [0, -dist, 0] },
  transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

export default function SchoolsHero({
  count,
  avgRating,
  onBrowse,
}: {
  count: number;
  avgRating: string;
  onBrowse: () => void;
}) {
  return (
    <motion.div
      className="scf"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Left: copy */}
      <div className="scf-body">
        <span className="scf-eyebrow"><i className="fas fa-school" /> School directory</span>
        <h2 className="scf-title">The schools shaping<br />North Lebanon</h2>
        <p className="scf-lead">
          Explore curricula, languages, programs and admissions across the region&apos;s leading schools —
          and find the right fit for your child, all in one place.
        </p>
        <div className="scf-cta-row">
          <button className="scf-btn" onClick={onBrowse}>Browse schools</button>
          <a className="scf-play" href="/news">
            <span className="dot"><i className="fas fa-play" /></span> Watch student stories
          </a>
        </div>
        <div className="scf-mini">
          <span><i className="fas fa-map-marker-alt" /> Tripoli · Koura · Zgharta &amp; more</span>
          <span><i className="fas fa-language" /> French · English · Arabic</span>
        </div>
      </div>

      {/* Right: student emerging from the circle (3D pop-out) */}
      <div className="scf-visual">
        <div className="scf-blob" />
        <div className="scf-circle-wrap">
          <motion.div className="scf-circlevid" {...float(0, 10)}>
            <video src="/schools-hero.mp4" autoPlay muted loop playsInline />
          </motion.div>
        </div>

        <motion.span className="scf-chip c1" {...float(0.6)}><i className="fas fa-graduation-cap" /></motion.span>
        <motion.span className="scf-chip c2" {...float(1.1)}><i className="fas fa-book-open" /></motion.span>

        <motion.div className="scf-pill p-rating" {...float(0.3, 9)}>
          <i className="fas fa-star" /> {avgRating} avg rating
        </motion.div>
        <motion.div className="scf-pill p-students" {...float(0.9, 9)}>
          <i className="fas fa-school" />
          <div><b>{count} schools</b><span>listed in the directory</span></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
