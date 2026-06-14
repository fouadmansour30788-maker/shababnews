'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { useEvents } from '@/lib/useData';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function CalendarPage() {
  const { data: events } = useEvents();
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });

  const eventsByDate = useMemo(() => {
    const map = new Map<string, typeof events>();
    events.forEach((e) => {
      const key = new Date(e.date).toDateString();
      map.set(key, [...(map.get(key) || []), e]);
    });
    return map;
  }, [events]);

  const cells = useMemo(() => {
    const first = new Date(view.y, view.m, 1).getDay();
    const days = new Date(view.y, view.m + 1, 0).getDate();
    const arr: (number | null)[] = Array(first).fill(null);
    for (let d = 1; d <= days; d++) arr.push(d);
    return arr;
  }, [view]);

  const move = (delta: number) => {
    setView((v) => {
      const m = v.m + delta;
      if (m < 0) return { y: v.y - 1, m: 11 };
      if (m > 11) return { y: v.y + 1, m: 0 };
      return { ...v, m };
    });
  };

  const monthEvents = events
    .filter((e) => {
      const d = new Date(e.date);
      return d.getFullYear() === view.y && d.getMonth() === view.m;
    })
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

  return (
    <>
      <PageHeader kicker="Plan" title="Calendar" subtitle="See every Shabab News event on one calendar and never miss a date." />

      <section className="mx-auto grid max-w-5xl gap-8 px-5 pb-20 md:grid-cols-[1.5fr_1fr] md:px-8">
        <div className="rounded-3xl border border-line bg-surface p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-text">
              {MONTHS[view.m]} {view.y}
            </h2>
            <div className="flex gap-2">
              <button onClick={() => move(-1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text transition hover:border-teal-bright">‹</button>
              <button onClick={() => move(1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text transition hover:border-teal-bright">›</button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {DAYS.map((d) => (
              <span key={d} className="py-2 text-xs font-bold uppercase tracking-wider text-muted">{d}</span>
            ))}
            {cells.map((d, i) => {
              if (d === null) return <span key={i} />;
              const date = new Date(view.y, view.m, d);
              const isToday = date.toDateString() === today.toDateString();
              const dayEvents = eventsByDate.get(date.toDateString());
              return (
                <div
                  key={i}
                  className={`relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition ${
                    isToday ? 'bg-teal-bright font-bold text-[#02110f]' : dayEvents ? 'bg-teal/10 text-text' : 'text-muted'
                  }`}
                >
                  {d}
                  {dayEvents && !isToday && (
                    <span className="absolute bottom-1.5 h-1.5 w-1.5 rounded-full bg-teal-bright" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-text">
            {monthEvents.length} event{monthEvents.length !== 1 ? 's' : ''} this month
          </h3>
          <AnimatePresence mode="popLayout">
            <div className="space-y-3">
              {monthEvents.map((e) => (
                <motion.div
                  layout
                  key={e.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-4 rounded-2xl border border-line bg-surface p-4"
                >
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl" style={{ background: e.color || 'var(--teal)' }}>
                    <span className="text-xs font-medium text-white/80">{MONTHS[new Date(e.date).getMonth()].slice(0, 3)}</span>
                    <span className="font-display text-lg font-bold text-white">{new Date(e.date).getDate()}</span>
                  </div>
                  <div>
                    <p className="font-medium text-text">{e.title}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-3 w-3" strokeWidth={2} /> {e.location}
                    </p>
                  </div>
                </motion.div>
              ))}
              {monthEvents.length === 0 && <p className="text-sm text-muted">No events this month.</p>}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
