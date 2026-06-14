import Link from 'next/link';
import CharityHero from '@/components/home/CharityHero';
import NewsAccordion from '@/components/home/NewsAccordion';
import VideoShowcase from '@/components/home/VideoShowcase';
import ContactForm from '@/components/ContactForm';

const Chevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const img = (seed: string, w: number, h: number) => `https://picsum.photos/seed/${seed}/${w}/${h}`;



/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <CharityHero />

      {/* ABOUT */}
      <section id="about-preview" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-header">
                <div className="section-tag">Our Story</div>
                <h2 className="section-title" style={{ color: '#15b3b8' }}>
                  Empowering <span style={{ background: 'none', WebkitTextFillColor: '#15b3b8', color: '#15b3b8' }}>Youth</span>
                  <br />Since 2001
                </h2>
              </div>
              <p className="about-body">
                Shabab News Magazine was born with the aim of empowering young and flourishing youth toward a better and motivational future. Founded by <strong>Firas Mawlawi</strong> in 2001, the publication inspired positive thinking, encouragement, and skill enhancement across academic institutions in North Lebanon.
              </p>
              <p className="about-body">
                With thousands of copies published monthly and distributed free of charge, Shababnews became the leading educational news press and the first of its kind in Lebanon — covering life-awareness articles and interviews that empower students and the educational system.
              </p>
              <div className="about-stats">
                {[['24+', 'Years Active'], ['500+', 'Articles'], ['50K+', 'Readers']].map(([n, l]) => (
                  <div className="stat-box" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-lbl">{l}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-accent">
                <i className="fas fa-arrow-right" /> Learn More About Us
              </Link>
            </div>
            <div className="about-visual">
              <div className="about-img">
                <video src="/about-video.mp4" autoPlay muted loop playsInline />
              </div>
              <div className="about-float-card">
                <div className="num">2001</div>
                <div className="lbl">Year Founded</div>
              </div>
              <div className="about-float-card2">
                <div className="icon"><i className="fas fa-newspaper" /></div>
                <div className="text"><strong>#1</strong>Youth Magazine in North Lebanon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section id="latest-news" className="section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-tag">Latest News</div>
              <h2 className="section-title" style={{ color: '#15b3b8' }}>
                What&apos;s <span style={{ background: 'none', WebkitTextFillColor: '#15b3b8', color: '#15b3b8' }}>Happening</span>
              </h2>
            </div>
            <Link href="/news" className="view-all">View all <Chevron /></Link>
          </div>

          <NewsAccordion />
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <div className="section-tag">Video Gallery</div>
            <h2 className="section-title" style={{ color: '#15b3b8' }}>
              Watch &amp; <span style={{ background: 'none', WebkitTextFillColor: '#15b3b8', color: '#15b3b8' }}>Discover</span>
            </h2>
            <p className="section-desc" style={{ margin: 0 }}>Inspiring interviews, talent shows, campus life, and student success stories from schools and universities across North Lebanon.</p>
          </div>
          <VideoShowcase />
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href="https://www.youtube.com/channel/UCrMNx1UrIb9fPvQarhq6hoA" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              <i className="fab fa-youtube" /> View Full Channel
            </a>
          </div>
        </div>
      </section>



      {/* CONTACT */}
      <section id="contact-preview" className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title" style={{ color: '#15b3b8' }}>
              Contact <span style={{ background: 'none', WebkitTextFillColor: '#15b3b8', color: '#15b3b8' }}>Us</span>
            </h2>
            <p className="section-desc" style={{ margin: 0 }}>Have a story, event, or collaboration in mind? We&apos;d love to hear from you.</p>
          </div>
          <div className="contact-layout">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-envelope" /></div>
                <div><h4>Email</h4><p><a href="mailto:Info@shababnews.net" style={{ color: 'var(--accent)' }}>Info@shababnews.net</a></p></div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-phone" /></div>
                <div><h4>Phone</h4><p>06 625 004 &nbsp;|&nbsp; 03 901 029 &nbsp;|&nbsp; 76 901 029</p></div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-map-marker-alt" /></div>
                <div><h4>Address</h4><p>Lebanon, Tripoli — Marmaroun Street<br />Facing Trust, Ground Floor</p></div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-share-alt" /></div>
                <div>
                  <h4>Follow Us</h4>
                  <div className="contact-socials">
                    <a href="https://www.facebook.com/shababnewslb" target="_blank" rel="noopener noreferrer" className="s-fb"><i className="fab fa-facebook-f" /> Facebook</a>
                    <a href="https://www.instagram.com/shababnews/" target="_blank" rel="noopener noreferrer" className="s-ig"><i className="fab fa-instagram" /> Instagram</a>
                    <a href="https://www.youtube.com/channel/UCrMNx1UrIb9fPvQarhq6hoA" target="_blank" rel="noopener noreferrer" className="s-yt"><i className="fab fa-youtube" /> YouTube</a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
