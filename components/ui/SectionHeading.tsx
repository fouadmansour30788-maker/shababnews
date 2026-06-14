import Link from 'next/link';
import Reveal from '@/components/motion/Reveal';

export default function SectionHeading({
  kicker,
  title,
  href,
  hrefLabel = 'See all',
}: {
  kicker?: string;
  title: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <Reveal className="mb-10 flex items-end justify-between gap-6">
      <div>
        {kicker && <p className="kicker mb-2.5">{kicker}</p>}
        <h2 className="display text-3xl text-text sm:text-4xl">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="group hidden shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text shadow-sm transition hover:border-teal hover:text-teal sm:flex"
        >
          {hrefLabel}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      )}
    </Reveal>
  );
}
