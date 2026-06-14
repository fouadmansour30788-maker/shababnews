import type { NewsItem, EventItem, JobItem, OfferItem } from './types';

/**
 * Static content ported from the Shabab News mobile app. Used as the
 * fallback whenever the Firestore collections are empty, so the site is
 * never blank during development.
 */

// Used whenever a Firestore item is missing an image.
export const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop';

export const newsCategories = ['All', 'University', 'Schools', 'Companies', 'Events', 'Sports'];

export const universityStories = [
  { id: 1, name: 'AUB', image: 'https://images.unsplash.com/photo-1596608860675-b3dfa094d157?w=400&h=400&fit=crop' },
  { id: 2, name: 'LAU', image: 'https://images.unsplash.com/photo-1647435364245-97c362bf441c?w=400&h=400&fit=crop' },
  { id: 3, name: 'NDU', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop' },
  { id: 5, name: 'BAU', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=400&fit=crop' },
  { id: 6, name: 'USJ', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop' },
  { id: 7, name: 'USEK', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop' },
  { id: 8, name: 'LIU', image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=400&fit=crop' },
  { id: 9, name: 'Balamand', image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=400&fit=crop' },
  { id: 10, name: 'ALBA', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop' },
];

export const fallbackNews: NewsItem[] = [
  { id: 1, cat: 'University', title: 'AUB Launches New AI Research Center in Beirut', time: '1h ago', image: 'https://images.unsplash.com/photo-1596608860675-b3dfa094d157?w=900&h=600&fit=crop', hot: true, trending: 1, description: 'The American University of Beirut unveils a flagship artificial-intelligence research center, positioning Lebanon at the frontier of regional innovation.' },
  { id: 2, cat: 'Schools', title: 'North Lebanon Schools Rank Top in National Exams 2026', time: '3h ago', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&h=600&fit=crop', hot: false, trending: 0, description: 'Schools across the north dominate this year’s national results, reflecting the dedication of teachers, students and families.' },
  { id: 3, cat: 'University', title: 'LAU Opens Applications for Scholarship Program 2026', time: '5h ago', image: 'https://images.unsplash.com/photo-1647435364245-97c362bf441c?w=900&h=600&fit=crop', hot: true, trending: 2, description: 'The Lebanese American University announces a major scholarship round for high-achieving students nationwide.' },
  { id: 4, cat: 'Companies', title: 'Tech Startups in Lebanon Create 500 New Jobs for Graduates', time: '7h ago', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=600&fit=crop', hot: false, trending: 0, description: 'Lebanon’s growing startup scene opens hundreds of new roles for fresh graduates and young professionals.' },
  { id: 5, cat: 'Events', title: 'Annual Youth Leadership Conference Coming to Tripoli', time: '9h ago', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop', hot: false, trending: 3, description: 'A flagship gathering for the next generation of Lebanese leaders heads to the north this season.' },
  { id: 6, cat: 'Sports', title: 'Lebanese University Basketball Team Wins Regional Championship', time: '11h ago', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&h=600&fit=crop', hot: true, trending: 0, description: 'A commanding final performance brings the regional trophy home to Lebanon.' },
  { id: 7, cat: 'Schools', title: 'International College Tripoli Opens New STEM Lab', time: '12h ago', image: 'https://images.unsplash.com/photo-1628495041345-192d4fbabe78?w=900&h=600&fit=crop', hot: false, trending: 0, description: 'A state-of-the-art STEM facility opens its doors to students in the north.' },
  { id: 8, cat: 'Companies', title: 'Google Lebanon Partners with AUB for Tech Training Program', time: '14h ago', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=600&fit=crop', hot: true, trending: 0, description: 'A new partnership brings world-class technical training to Lebanese students.' },
];

export const fallbackEvents: EventItem[] = [
  { id: 1, title: 'Annual Tech Innovation Summit 2026', location: 'Tripoli, Lebanon', date: '2026-09-15', badge: 'Technology', color: '#0ba0a2', image: 'https://images.unsplash.com/photo-1709085783594-666111a690d0?w=900&h=560&fit=crop', description: "Join Lebanon's biggest tech event! Network with industry leaders, attend workshops on AI, blockchain, and cybersecurity." },
  { id: 2, title: 'Spring Music Festival & Concert', location: 'Beirut, Lebanon', date: '2026-08-18', badge: 'Entertainment', color: '#e0408a', image: 'https://images.unsplash.com/photo-1692438554564-899322c28dcb?w=900&h=560&fit=crop', description: 'Experience the best of Lebanese music! Featuring top local artists, food trucks, and an unforgettable atmosphere.' },
  { id: 3, title: 'Career Fair & Networking Event', location: 'LAU Campus', date: '2026-07-22', badge: 'Career', color: '#8b5cf6', image: 'https://images.unsplash.com/photo-1570937943653-7de35201f04b?w=900&h=560&fit=crop', description: 'Meet with top employers, submit your CV, and find internships and job opportunities.' },
  { id: 4, title: 'Lebanese Schools Science Fair', location: 'Tripoli Exhibition Center', date: '2026-07-01', badge: 'Education', color: '#f5a524', image: 'https://images.unsplash.com/photo-1628495041345-192d4fbabe78?w=900&h=560&fit=crop', description: 'Showcase of student science projects from schools across Lebanon.' },
];

export const fallbackJobs: JobItem[] = [
  { id: 1, title: 'Junior Software Engineer', company: 'Murex', location: 'Beirut', type: 'Full-time', salary: '$1,200–1,800/mo', tags: ['React', 'Node.js', 'Graduate'], posted: '2d ago', description: 'Join one of Lebanon’s flagship fintech companies building trading platforms used worldwide.' },
  { id: 2, title: 'Marketing Intern', company: 'Anghami', location: 'Beirut / Remote', type: 'Internship', salary: 'Paid', tags: ['Social', 'Content', 'Internship'], posted: '4d ago', description: 'Help shape the voice of the region’s leading music streaming brand.' },
  { id: 3, title: 'Data Analyst', company: 'Bank Audi', location: 'Beirut', type: 'Full-time', salary: 'Competitive', tags: ['SQL', 'Python', 'Finance'], posted: '1w ago', description: 'Turn financial data into insight at one of Lebanon’s largest banks.' },
  { id: 4, title: 'UX/UI Designer', company: 'PaTech', location: 'Tripoli', type: 'Full-time', salary: '$900–1,400/mo', tags: ['Figma', 'Design', 'Mobile'], posted: '1w ago', description: 'Craft delightful product experiences for regional clients.' },
  { id: 5, title: 'Mechanical Engineer', company: 'CME Offshore', location: 'Beirut', type: 'Full-time', salary: 'Competitive', tags: ['CAD', 'Graduate'], posted: '2w ago', description: 'Engineering opportunities for recent graduates with strong fundamentals.' },
  { id: 6, title: 'Pharmacist', company: 'Mephico', location: 'Saida', type: 'Full-time', salary: 'Competitive', tags: ['Healthcare', 'Licensed'], posted: '3w ago', description: 'Patient-facing pharmacy role with growth into management.' },
];

export const fallbackOffers: OfferItem[] = [
  { id: 1, company: 'Whish Money', title: 'Zero fees for students', desc: 'Send money instantly across Lebanon with no transfer fees for verified students.', discount: 'FREE', category: 'Finance', color: '#e31e24', url: 'https://www.whish.money', code: 'SHABAB' },
  { id: 2, company: 'Fahitas Tripoli', title: 'Authentic Mexican, 20% off', desc: 'Show your student ID for 20% off your order at Fahitas Tripoli.', discount: '20%', category: 'Food', color: '#d35400', url: 'https://www.instagram.com/fahitas.tripoli/', code: 'STUDENT20' },
  { id: 3, company: 'Virgin Megastore', title: 'Student tech discounts', desc: 'Exclusive discounts on laptops, headphones and study gear.', discount: '15%', category: 'Tech', color: '#e0408a', url: '#', code: 'SHBTECH' },
  { id: 4, company: 'Spinneys', title: 'Weekly grocery cashback', desc: 'Cashback on essentials for students living away from home.', discount: '10%', category: 'Lifestyle', color: '#0ba0a2', url: '#', code: 'SPIN10' },
];

// YouTube institution spotlight used in the immersive video section.
export const videoCategories = [
  { id: 'talented', label: 'Talented Students' },
  { id: 'success', label: 'Success Story' },
  { id: 'campus', label: 'Campus Life' },
  { id: 'president', label: "President's Message" },
  { id: 'alumni', label: 'Alumni' },
];

export const institutionVideos: Record<string, Record<string, { youtubeId: string; title: string }>> = {
  AUB: {
    talented: { youtubeId: 'mvREaTJmnDI', title: "Tomorrow's Leaders at AUB" },
    success: { youtubeId: 'Fk-I2Jq572Q', title: 'Welcome to AUB!' },
    campus: { youtubeId: 'cCXHL5eDLto', title: 'AUB 360 Virtual Campus Tour' },
    president: { youtubeId: 'WlsQT_FUxU8', title: "AUB President's Message" },
    alumni: { youtubeId: 'NH6SqR6HjC8', title: 'AUB Alumni Stories' },
  },
};
