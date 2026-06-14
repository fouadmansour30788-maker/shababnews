'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainNav, toolNav, socials } from '@/lib/nav';
import { useAuth } from '@/lib/auth';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Shababnews" />
          </Link>

          <ul className="navbar-links">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <div className="navbar-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
            <Link href={user ? '/profile' : '/login'} className="lang-toggle">
              {user ? user.displayName?.split(' ')[0] || 'Profile' : 'Sign in'}
            </Link>
            <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)} style={{ display: 'flex' }}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <button className="close-menu" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <p style={{ margin: '20px 0 6px', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Student Tools
          </p>
          {toolNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={user ? '/profile' : '/login'}>{user ? 'My Profile' : 'Sign in'}</Link>
        </div>
        <div className="mobile-menu-social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              <i className={`fab ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
