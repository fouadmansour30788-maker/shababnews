'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const vids = [
  { id: 'cCXHL5eDLto', cat: 'AUB', title: 'AUB — Virtual Campus Tour' },
  { id: 'p6aolj7Z-dM', cat: 'LAU', title: 'LAU School of Engineering' },
  { id: 'YM5bVRky_J0', cat: 'NDU', title: 'NDU Robotics Competition' },
  { id: 'MSBIk6lghP8', cat: 'Balamand', title: 'University of Balamand — Student Documentary' },
  { id: '9lrqlQMumKk', cat: 'BAU', title: 'Life at Beirut Arab University' },
  { id: 'OQUrVNyIJ-o', cat: 'USEK', title: 'We Are Happy — from USEK' },
];

export default function VideoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.35, 1]);

  return (
    <div ref={ref} className="vshow">
      <motion.div className="vshow-grid" style={{ rotateX, scale, opacity, transformStyle: 'preserve-3d' }}>
        {vids.map((v) => (
          <div className="vshow-card" key={v.id}>
            {active === v.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <button className="vshow-thumb" onClick={() => setActive(v.id)} aria-label={`Play ${v.title}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
                  <span className="pbtn"><span className="pdot"><i className="fas fa-play" /></span></span>
                </button>
                <div className="vshow-info">
                  <div className="vshow-cat">{v.cat}</div>
                  <div className="vshow-title">{v.title}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
