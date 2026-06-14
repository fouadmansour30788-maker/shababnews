import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import type { EventItem } from '@/lib/types';
import { FALLBACK_IMG } from '@/lib/content';
import Countdown from './Countdown';

export default function EventCard({ item }: { item: EventItem }) {
  return (
    <Link
      href="/events"
      className="group relative block aspect-[4/5] overflow-hidden rounded-[20px] border border-line shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(13,18,24,0.22)]"
    >
      <Image
        src={item.image || FALLBACK_IMG}
        alt={item.title}
        fill
        sizes="(max-width:768px) 80vw, 30vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <span
        className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
        style={{ background: item.color || 'var(--teal)' }}
      >
        {item.badge}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="font-display text-xl font-semibold leading-tight">{item.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/80">
          <MapPin className="h-3.5 w-3.5" strokeWidth={2} /> {item.location}
        </p>
        <div className="mt-4">
          <Countdown date={item.date} />
        </div>
      </div>
    </Link>
  );
}
