'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { v: '16+', l: 'Universities' },
  { v: '8+', l: 'Schools' },
  { v: '40+', l: 'Campuses' },
  { v: '24/7', l: 'AI assistant' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-soft">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[480px] w-[700px] rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-2">
        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-bright shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Lebanon · for students
          </motion.span>

          <motion.h1 {...fade(0.08)} className="display mt-6 text-5xl text-text sm:text-6xl">
            Everything for your <span className="text-teal">student journey</span>, in one place.
          </motion.h1>

          <motion.p {...fade(0.16)} className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted lg:mx-0">
            Campus news, every university and school, events, jobs and free tools — built to help
            Lebanese students plan what comes next.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="/news" className="rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90">
              Explore the news
            </Link>
            <Link
              href="/universities"
              className="rounded-full border border-line bg-bg px-6 py-3 text-sm font-semibold text-text shadow-sm transition hover:border-teal hover:text-teal"
            >
              Find your university
            </Link>
          </motion.div>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-[24px] border border-line bg-bg shadow-[0_40px_90px_-30px_rgba(13,18,24,0.4)]"
        >
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=675&fit=crop"
            className="aspect-[4/5] w-full object-cover sm:aspect-square"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-[1200px] px-5 pb-16 md:px-8">
        <motion.div {...fade(0.36)} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-line bg-bg p-5 text-center shadow-sm">
              <p className="font-display text-3xl font-bold text-text">{s.v}</p>
              <p className="mt-1 text-xs text-muted">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
