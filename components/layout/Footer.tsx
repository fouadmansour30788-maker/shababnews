import Link from 'next/link';
import { mainNav, toolNav, socials } from '@/lib/nav';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo12.png" alt="Shababnews" style={{ height: 48, marginBottom: 14 }} />
            <div className="footer-brand-text">Shababnews</div>
            <p className="footer-desc">
              Lebanon&apos;s leading youth news magazine — empowering students and youth across North
              Lebanon since 2001 with free educational content.
            </p>
            <div className="footer-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
              <a href="mailto:Info@shababnews.net">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          <div>
            <div className="footer-h">Quick Links</div>
            <ul className="footer-links">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-h">Student Tools</div>
            <ul className="footer-links">
              {toolNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-h">Contact</div>
            <div className="footer-contact-row">
              <span className="ico"><i className="fas fa-envelope" /></span>
              <a href="mailto:Info@shababnews.net" style={{ color: 'inherit' }}>Info@shababnews.net</a>
            </div>
            <div className="footer-contact-row">
              <span className="ico"><i className="fas fa-phone" /></span>
              06 625 004 &nbsp;/&nbsp; 03 901 029
            </div>
            <div className="footer-contact-row">
              <span className="ico"><i className="fas fa-map-marker-alt" /></span>
              Tripoli, Marmaroun St., Ground Floor
            </div>
            <div className="footer-h" style={{ marginTop: 20 }}>Newsletter</div>
            <p style={{ fontSize: 12.5, color: 'var(--text-3)', marginBottom: 10 }}>Get updates in your inbox</p>
            <div className="newsletter-form">
              <input className="newsletter-inp" type="email" placeholder="your@email.com" />
              <button className="newsletter-btn" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Shababnews. All rights reserved.</span>
        <span>Lebanon · Tripoli · Est. 2001</span>
      </div>
    </footer>
  );
}
