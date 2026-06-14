import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';
import type { NewsItem, EventItem, JobItem, OfferItem } from './types';

export async function fetchNews(maxItems = 20): Promise<NewsItem[]> {
  try {
    const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'), limit(maxItems));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as NewsItem));
  } catch {
    return [];
  }
}

export async function fetchEvents(maxItems = 20): Promise<EventItem[]> {
  try {
    const q = query(collection(db, 'events'), orderBy('date', 'asc'), limit(maxItems));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as EventItem));
  } catch {
    return [];
  }
}

export async function fetchJobs(maxItems = 30): Promise<JobItem[]> {
  try {
    const q = query(collection(db, 'jobs'), orderBy('createdAt', 'desc'), limit(maxItems));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as JobItem));
  } catch {
    return [];
  }
}

export async function fetchOffers(maxItems = 30): Promise<OfferItem[]> {
  try {
    const q = query(collection(db, 'offers'), orderBy('createdAt', 'desc'), limit(maxItems));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as OfferItem));
  } catch {
    return [];
  }
}
