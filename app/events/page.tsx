'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';

const TEAL = '#15b3b8';

interface Ev {
  id: number;
  title: string;
  date: string; // ISO yyyy-mm-dd
  time: string;
  loc: string;
  cat: string;
  who: string;
  desc: string;
  img: string;
  cta: string;
}

// Curated upcoming events (the live site pulls these from its events table).
const events: Ev[] = [
  { id: 1, title: 'Annual Student Talent Show — Open Stage', date: '2026-06-20', time: '6:00 PM – 10:00 PM', loc: 'Tripoli Cultural Centre', cat: 'Workshop', who: 'Open to all students', desc: 'Showcase your talent on stage — singing, dancing, comedy, poetry and more. All schools and universities welcome.', img: '/news/n4.jpg', cta: 'Register' },
  { id: 2, title: 'Youth Leadership Summit — North Lebanon Edition', date: '2026-06-27', time: '9:00 AM – 5:00 PM', loc: 'Azm University, Tripoli', cat: 'Conference', who: '200 seats available', desc: 'A full-day summit bringing together young leaders, mentors and entrepreneurs for workshops, panels and networking.', img: '/news/n3.jpg', cta: 'Register' },
  { id: 3, title: 'Student Art & Innovation Exhibition', date: '2026-07-05', time: '10:00 AM – 8:00 PM', loc: 'Rashid Karami Fair, Tripoli', cat: 'Exhibition', who: 'Free entry', desc: 'Three days of student creativity — art installations, science projects and entrepreneurship pitches from 50+ schools.', img: '/news/n9.jpg', cta: 'Learn more' },
  { id: 4, title: 'University Open Day — Joint Admissions Fair', date: '2026-07-18', time: '10:00 AM – 6:00 PM', loc: 'Tripoli City Centre', cat: 'Academic', who: 'Free registration', desc: "Meet admissions teams from North Lebanon's universities. Explore programs, scholarships and career opportunities.", img: '/news/n1.jpg', cta: 'Register' },
  { id: 5, title: 'Inter-School Basketball Tournament', date: '2026-07-25', time: 'All weekend', loc: 'Al-Nour Sports Hall, Tripoli', cat: 'Sports', who: '16 school teams', desc: 'The annual inter-school basketball tournament returns with 16 teams competing for the North Lebanon championship cup.', img: '/news/n8.jpg', cta: 'Register team' },
  { id: 6, title: 'Tripoli Youth Cultural Festival', date: '2026-08-10', time: '3-day event', loc: 'Old City, Tripoli', cat: 'Cultural', who: 'Open to all', desc: 'A 3-day festival celebrating Lebanese youth culture through music, art, food and performances in historic Old Tripoli.', img: '/news/n2.jpg', cta: 'Learn more' },
];

const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function daysLeft(iso: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(iso + 'T00:00:00');
  return Math.round((d.getTime() - today.getTime()) / 86400000);
}

export default function EventsPage() {
  const first = new Date(events[0].date + 'T00:00:00');
  const [year, setYear] = useState(first.getFullYear());
  const [month, setMonth] = useState(first.getMonth());
  const [selected, setSelected] = useState<string | null>(null);

  const eventDates = useMemo(() => new Set(events.map((e) => e.date)), []);

  const cells = useMemo(() => {
    const lead = new Date(year, month, 1).getDay();
    const total = new Date(year, month + 1, 0).getDate();
    const arr: (number | null)[] = Array(lead).fill(null);
    for (let d = 1; d <= total; d++) arr.push(d);
    return arr;
  }, [year, month]);

  const iso = (d: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  const list = useMemo(
    () => events.filter((e) => (selected ? e.date === selected : true)).sort((a, b) => a.date.localeCompare(b.date)),
    [selected]
  );

  function shift(delta: number) {
    let m = month + delta, y = year;
    if (m < 0) { m = 11; y--; } else if (m > 11) { m = 0; y++; }
    setMonth(m); setYear(y); setSelected(null);
  }

  return (
    <>
      <PageHero
        title="& Activities"
        highlight="Events"
        highlightLast
        teal
        subtitle="Get involved with your community. We cover academic programs, sports, workshops, networking and concerts — check the calendar for what's coming up."
      />

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container">
          <div className="ev-layout">
            {/* Calendar */}
            <aside className="ev-cal">
              <div className="ev-cal-head">
                <button onClick={() => shift(-1)} aria-label="Previous month"><i className="fas fa-chevron-left" /></button>
                <span>{MONTHS[month]} {year}</span>
                <button onClick={() => shift(1)} aria-label="Next month"><i className="fas fa-chevron-right" /></button>
              </div>
              <div className="ev-cal-grid ev-cal-wd">
                {WD.map((d) => <span key={d}>{d}</span>)}
              </div>
              <div className="ev-cal-grid">
                {cells.map((d, i) => {
                  if (d === null) return <span key={`e${i}`} className="ev-cell empty" />;
                  const k = iso(d);
                  const has = eventDates.has(k);
                  const on = selected === k;
                  return (
                    <button
                      key={k}
                      className={`ev-cell${has ? ' has' : ''}${on ? ' on' : ''}`}
                      onClick={() => has && setSelected(on ? null : k)}
                      disabled={!has}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
              <div className="ev-cal-legend"><span className="dot" /> Event day</div>
              {selected && (
                <button className="ev-clear" onClick={() => setSelected(null)}><i className="fas fa-times" /> Clear filter</button>
              )}
            </aside>

            {/* Upcoming list */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="sc-grid-head" style={{ marginBottom: 18 }}>
                <h2>{selected ? 'Events on this day' : 'Upcoming events'}</h2>
                <span>{list.length} {list.length === 1 ? 'event' : 'events'}</span>
              </div>

              <div className="ev-list">
                {list.map((e, i) => {
                  const dl = daysLeft(e.date);
                  const d = new Date(e.date + 'T00:00:00');
                  return (
                    <motion.article
                      key={e.id}
                      className="ev-card"
                      initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="ev-thumb" style={{ backgroundImage: `url('${e.img}')` }}>
                        <span className="ev-date"><b>{d.getDate()}</b><span>{MONTHS[d.getMonth()].slice(0, 3)}</span></span>
                        <span className="ev-cat">{e.cat}</span>
                      </div>
                      <div className="ev-body">
                        <h3 className="ev-title">{e.title}</h3>
                        <div className="ev-meta">
                          <span><i className="fas fa-map-marker-alt" /> {e.loc}</span>
                          <span><i className="far fa-clock" /> {e.time}</span>
                          <span><i className="fas fa-users" /> {e.who}</span>
                        </div>
                        <p className="ev-desc">{e.desc}</p>
                        <div className="ev-foot">
                          <span className={`ev-left${dl >= 0 && dl <= 7 ? ' soon' : ''}`}>
                            {dl > 0 ? `${dl} day${dl === 1 ? '' : 's'} left` : dl === 0 ? 'Today' : 'Past'}
                          </span>
                          <button className="ev-cta" style={{ background: TEAL }}>{e.cta} <i className="fas fa-arrow-right" /></button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
                {list.length === 0 && <p className="sc-empty">No events on this day.</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
