export interface NewsItem {
  id: string | number;
  cat: string;
  title: string;
  time: string;
  image: string;
  infographic?: string;
  description?: string;
  body?: string;
  stats?: Record<string, string>;
  hot?: boolean;
  trending?: number;
}

export interface EventItem {
  id: string | number;
  title: string;
  location: string;
  date: string;
  time?: string;
  badge: string;
  color?: string;
  image: string;
  description?: string;
  fullDescription?: string;
  agenda?: string[];
  lat?: number;
  lng?: number;
}

export interface JobItem {
  id: string | number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  logo?: string;
  tags?: string[];
  description?: string;
  posted?: string;
}

export interface OfferItem {
  id: string | number;
  company: string;
  title: string;
  desc: string;
  discount?: string;
  category?: string;
  image?: string;
  color?: string;
  url?: string;
  code?: string;
}
