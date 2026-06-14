'use client';

import { motion } from 'framer-motion';

/** Modern page header: pill kicker, big bold heading, optional subtitle. */
export default function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="bg-bg-soft">
      <div className="mx-auto max-w-[1200px] px-5 py-16 text-center md:px-8 md:py-20">
        {kicker && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-line bg-bg px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-teal-bright shadow-sm"
          >
            {kicker}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display mx-auto mt-5 max-w-4xl text-4xl text-text sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
}
