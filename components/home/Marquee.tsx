'use client';

import { motion } from 'framer-motion';

export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg py-5">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-xl font-semibold text-muted/70">
            {item}
            <span className="text-teal">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
