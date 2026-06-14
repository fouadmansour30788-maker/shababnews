'use client';

import Link from 'next/link';
import { useState } from 'react';

const TEAL = 'var(--accent)';
const ORANGE = '#f3681f';

const items = [
  { src: '/news/n1.jpg', cat: 'Education', color: TEAL, h: "Nos étudiants ont reçu un brevet du ministère de l'Économie et du Commerce du Liban", ex: "Une reconnaissance officielle pour l'excellence académique et entrepreneuriale de nos étudiants du nord du Liban.", d: 'May 30, 2025' },
  { src: '/news/n2.jpg', cat: 'Community', color: ORANGE, h: "L'association Bassma lance le festival de la famille — édition 2025", ex: 'A community celebration bringing families and schools together across Tripoli.', d: 'May 30, 2025' },
  { src: '/news/n3.jpg', cat: 'Achievement', color: TEAL, h: 'Our super smart students receive national recognition', ex: 'Students from North Lebanon honoured at the national excellence awards.', d: 'May 29, 2025' },
  { src: '/news/n4.jpg', cat: 'Events', color: ORANGE, h: 'La dernière réunion du conseil des étudiants — compte-rendu officiel', ex: 'Resolutions and projects set for the 2025 academic year.', d: 'May 29, 2025' },
  { src: '/news/n5.jpg', cat: 'People', color: TEAL, h: 'Congratulations to our dear colleague on this outstanding achievement', ex: 'A milestone moment celebrated by the whole Shababnews family.', d: 'May 28, 2025' },
  { src: '/news/n6.jpg', cat: 'Education', color: ORANGE, h: "Le début du trimestre d'été — inscriptions ouvertes dans toutes les universités", ex: 'Summer term registration is now open across North Lebanon universities.', d: 'May 26, 2025' },
];

/* eslint-disable @next/next/no-img-element */
export default function NewsAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="acc">
      {items.map((n, i) => {
        const isActive = i === active;
        return (
          <div
            key={n.src}
            className={`acc-item${isActive ? ' active' : ''}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
          >
            <img src={n.src} alt={n.h} loading="lazy" />
            <div className="acc-ov">
              <div className="acc-content">
                <span className="acc-cat" style={{ color: n.color }}>{n.cat}</span>
                <h3 className="acc-h">{n.h}</h3>
                <p className="acc-ex">{n.ex}</p>
                <div className="acc-meta">
                  <span><i className="far fa-calendar-alt" /> {n.d}</span>
                  <Link href="/news" className="acc-read" onClick={(e) => e.stopPropagation()}>
                    Read story <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
