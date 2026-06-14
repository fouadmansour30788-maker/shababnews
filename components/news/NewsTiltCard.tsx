'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export interface NewsCardData {
  title: string;
  date: string;
  img: string;
  cat: string;
  video?: boolean;
}

export default function NewsTiltCard({ item, index }: { item: NewsCardData; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 180, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 180, damping: 15 });

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
    <motion.a
      ref={ref}
      href="/news"
      className="nw2-card"
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nw2-thumb" style={{ transform: 'translateZ(34px)' }}>
        <span className="nw2-chip">{item.cat}</span>
        {item.video && <span className="nw2-play2"><i className="fas fa-play" /></span>}
        <div style={{ backgroundImage: `url('${item.img}')` }} />
        <div className="ov"><span>Read story <i className="fas fa-arrow-right" /></span></div>
      </div>
      <div className="nw2-cbody" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="nw2-ctitle">{item.title}</h3>
        <div className="nw2-cdate"><i className="far fa-calendar-alt" /> {item.date}</div>
      </div>
    </motion.a>
  );
}
