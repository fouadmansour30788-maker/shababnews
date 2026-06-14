import Image from 'next/image';
import Link from 'next/link';
import { Flame } from 'lucide-react';
import type { NewsItem } from '@/lib/types';
import { FALLBACK_IMG } from '@/lib/content';

const catColor: Record<string, string> = {
  University: 'var(--teal)',
  Schools: 'var(--amber)',
  Companies: 'var(--violet)',
  Events: 'var(--magenta)',
  Sports: '#10b981',
};

export default function NewsCard({
  item,
  priority,
  hideBadge,
}: {
  item: NewsItem;
  priority?: boolean;
  hideBadge?: boolean;
}) {
  const accent = catColor[item.cat] ?? 'var(--teal)';
  return (
    <Link
      href={`/news/${item.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(13,18,24,0.22)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image || FALLBACK_IMG}
          alt={item.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!hideBadge && (
          <>
            <span
              className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ background: accent }}
            >
              {item.cat}
            </span>
            {item.hot && (
              <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-magenta shadow-sm">
                <Flame className="h-3 w-3" strokeWidth={2.5} /> Hot
              </span>
            )}
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-text transition-colors group-hover:text-teal">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{item.description}</p>
        )}
        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">{item.time}</p>
      </div>
    </Link>
  );
}
