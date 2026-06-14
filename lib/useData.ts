'use client';

import { useEffect, useState } from 'react';
import { fetchNews, fetchEvents, fetchJobs, fetchOffers } from './newsService';
import { fallbackNews, fallbackEvents, fallbackJobs, fallbackOffers } from './content';
import type { NewsItem, EventItem, JobItem, OfferItem } from './types';

/** Fetches a Firestore collection, falling back to bundled static content. */
function useCollection<T>(fetcher: () => Promise<T[]>, fallback: T[]) {
  const [data, setData] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetcher()
      .then((res) => {
        if (active && res.length) setData(res);
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading };
}

export const useNews = () => useCollection<NewsItem>(() => fetchNews(20), fallbackNews);
export const useEvents = () => useCollection<EventItem>(() => fetchEvents(20), fallbackEvents);
export const useJobs = () => useCollection<JobItem>(() => fetchJobs(30), fallbackJobs);
export const useOffers = () => useCollection<OfferItem>(() => fetchOffers(30), fallbackOffers);
