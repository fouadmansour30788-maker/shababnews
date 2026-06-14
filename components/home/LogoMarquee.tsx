const logos = [
  { src: '/logos/bau.jpg', alt: 'Beirut Arab University' },
  { src: '/logos/ndu.jpg', alt: 'Notre Dame University' },
  { src: '/logos/balamand.jpg', alt: 'University of Balamand' },
  { src: '/logos/usek.jpg', alt: 'USEK' },
  { src: '/logos/liu.jpg', alt: 'Lebanese International University' },
  { src: '/logos/usj.jpg', alt: 'Université Saint-Joseph' },
  { src: '/logos/jinan.jpg', alt: 'Jinan University' },
  { src: '/logos/aou.png', alt: 'Arab Open University' },
  { src: '/logos/aul.jpg', alt: 'AUL' },
  { src: '/logos/antonine.jpg', alt: 'Antonine University' },
  { src: '/logos/ulf.jpg', alt: 'Université Libano-Française' },
  { src: '/logos/cityu.jpg', alt: 'City University' },
  { src: '/logos/usf.jpg', alt: 'Université Sainte Famille' },
  { src: '/logos/azm-school.png', alt: 'Azm School' },
  { src: '/logos/david-karam.jpg', alt: 'David Karam School' },
  { src: '/logos/international-school.jpg', alt: 'International School Al Koura' },
];

/* eslint-disable @next/next/no-img-element */
export default function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <div className="logo-strip" aria-label="Universities and schools featured on Shababnews">
      <div className="logo-track">
        {row.map((l, i) => (
          <div className="logo-chip" key={i}>
            <img src={l.src} alt={l.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
