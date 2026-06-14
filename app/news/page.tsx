'use client';

import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageHero from '@/components/PageHero';
import NewsTiltCard from '@/components/news/NewsTiltCard';
import { universities } from '@/lib/universities';
import { schools } from '@/lib/schools';

const categories = ['Education', 'Community', 'Achievement', 'Events', 'People', 'Technology', 'Sports', 'Culture'];

interface NewsItem {
  id: number;
  title: string;
  date: string;
  img: string;
  uniId?: number;
  schoolId?: number;
  cat: string;
  video?: boolean;
}

const newsItems: NewsItem[] = [
  { id: 1, title: "Nos étudiants ont reçu un brevet du ministère de l'Économie et du Commerce du Liban", date: 'May 30, 2025', img: '/news/n1.jpg', uniId: 7, cat: 'Education' },
  { id: 2, title: "L'association Bassma lance le festival de la famille — édition 2025", date: 'May 30, 2025', img: '/news/n2.jpg', schoolId: 1, cat: 'Community' },
  { id: 3, title: 'Our super smart students receive national recognition', date: 'May 29, 2025', img: '/news/n3.jpg', uniId: 16, cat: 'Achievement' },
  { id: 4, title: 'La dernière réunion du conseil des étudiants — compte-rendu officiel', date: 'May 29, 2025', img: '/news/n4.jpg', uniId: 13, cat: 'Events', video: true },
  { id: 5, title: 'Congratulations to our dear colleague on this outstanding achievement', date: 'May 28, 2025', img: '/news/n5.jpg', schoolId: 8, cat: 'People' },
  { id: 6, title: "Le début du trimestre d'été — inscriptions ouvertes dans toutes les universités", date: 'May 26, 2025', img: '/news/n6.jpg', uniId: 12, cat: 'Education' },
  { id: 7, title: 'طلابنا يفوزون بجائزة التميّز في مسابقة الابتكار الرقمي الوطنية', date: 'May 18, 2025', img: '/news/n7.jpg', uniId: 9, cat: 'Technology' },
  { id: 8, title: 'Inter-school basketball championship returns to Tripoli this summer', date: 'May 16, 2025', img: '/news/n8.jpg', schoolId: 2, cat: 'Sports' },
  { id: 9, title: 'Little chefs — student culinary programme wins a regional award', date: 'May 14, 2025', img: '/news/n9.jpg', uniId: 11, cat: 'Culture' },
];

export default function NewsPage() {
  const [uni, setUni] = useState('0');
  const [school, setSchool] = useState('0');
  const [cat, setCat] = useState('0');

  const featRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: featRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const filtered = useMemo(
    () =>
      newsItems.filter((n) => {
        if (uni !== '0') return n.uniId === Number(uni);
        if (school !== '0') return n.schoolId === Number(school);
        if (cat !== '0') return n.cat === cat;
        return true;
      }),
    [uni, school, cat]
  );

  const count = (p: (n: NewsItem) => boolean) => newsItems.filter(p).length;
  const [featured, ...rest] = filtered;
  const gridKey = `${uni}-${school}-${cat}`;

  return (
    <>
      <PageHero
        title="Academic News"
        teal
        subtitle="Covering the most explicit academic news of universities, schools and institutions taking place daily — we keep you up-to-date with the latest announcements and stories."
      />

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container">
          {/* Filters */}
          <div className="nw2-bar">
            <span className="lbl">Browse</span>
            <select className="nw2-sel" value={uni} onChange={(e) => { setUni(e.target.value); setSchool('0'); setCat('0'); }}>
              <option value="0">All universities</option>
              {universities.map((u) => <option key={u.id} value={u.id}>{u.name} ({count((n) => n.uniId === u.id)})</option>)}
            </select>
            <select className="nw2-sel" value={school} onChange={(e) => { setSchool(e.target.value); setUni('0'); setCat('0'); }}>
              <option value="0">All schools</option>
              {schools.map((s) => <option key={s.id} value={s.id}>{s.name} ({count((n) => n.schoolId === s.id)})</option>)}
            </select>
            <select className="nw2-sel" value={cat} onChange={(e) => { setCat(e.target.value); setUni('0'); setSchool('0'); }}>
              <option value="0">All topics</option>
              {categories.map((c) => <option key={c} value={c}>{c} ({count((n) => n.cat === c)})</option>)}
            </select>
          </div>

          {/* Featured (parallax) */}
          {featured && (
            <motion.a
              key={`feat-${gridKey}-${featured.id}`}
              ref={featRef}
              href="/news"
              className="nw2-featured"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="img">
                <motion.div style={{ backgroundImage: `url('${featured.img}')`, y: imgY, top: '-8%', bottom: '-8%' }} />
              </div>
              <div className="body">
                <span className="nw2-cat">{featured.cat}</span>
                <h2 className="nw2-ftitle">{featured.title}</h2>
                <span className="nw2-meta"><i className="far fa-calendar-alt" /> {featured.date}</span>
                <span className="nw2-read">Read story <i className="fas fa-arrow-right" /></span>
              </div>
            </motion.a>
          )}

          {/* Grid */}
          <div className="nw2-grid" key={gridKey} style={{ perspective: 1300 }}>
            {rest.map((n, i) => (
              <NewsTiltCard key={n.id} item={n} index={i} />
            ))}
            {filtered.length === 0 && <p className="nw2-empty">No news found for this selection.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
