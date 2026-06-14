export interface NavItem {
  label: string;
  href: string;
}

// Main navbar (matches the Shababnews rebuild)
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Schools', href: '/schools' },
  { label: 'Universities', href: '/universities' },
  { label: 'Events', href: '/events' },
  { label: 'Magazine', href: '/magazine' },
  { label: 'Contact', href: '/contact' },
];

// Extra student tools (kept from the earlier build) — surfaced in the menu + footer
export const toolNav: NavItem[] = [
  { label: 'AI Assistant', href: '/chatbot' },
  { label: 'Grade Calculator', href: '/grade-calculator' },
  { label: 'Career Simulator', href: '/career-simulator' },
  { label: 'CV Builder', href: '/cv-builder' },
  { label: 'Portfolio Builder', href: '/portfolio-builder' },
  { label: 'Learning', href: '/learning' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Campus Map', href: '/map' },
  { label: 'Calendar', href: '/calendar' },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/shababnewslb', icon: 'fa-facebook-f' },
  { label: 'Instagram', href: 'https://www.instagram.com/shababnews/', icon: 'fa-instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCrMNx1UrIb9fPvQarhq6hoA', icon: 'fa-youtube' },
];
