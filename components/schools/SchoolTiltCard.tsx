'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { School } from '@/lib/schools';

/* eslint-disable @next/next/no-img-element */
export default function SchoolTiltCard({
  school,
  index,
  onOpen,
}: {
  school: School;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 15 });

  function move(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function leave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.button
      ref={ref}
      className="sc-card"
      onClick={onOpen}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 44, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sc-banner" style={{ backgroundImage: `url('${school.image}')`, transform: 'translateZ(30px)' }}>
        <span className="sc-logo"><img src={school.logo} alt={school.name} /></span>
        <span className="sc-rating"><i className="fas fa-star" /> {school.rating}</span>
      </div>
      <div className="sc-body" style={{ transform: 'translateZ(18px)' }}>
        <h3 className="sc-name">{school.name}</h3>
        <p className="sc-motto">{school.motto}</p>
        <div className="sc-meta">
          <span><i className="fas fa-map-marker-alt" /> {school.location}</span>
          <span><i className="fas fa-graduation-cap" /> {school.grades}</span>
          <span><i className="fas fa-language" /> {school.languages.join(', ')}</span>
        </div>
        <span className="sc-view">View profile <i className="fas fa-arrow-right" /></span>
      </div>
    </motion.button>
  );
}
