import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact Us — Shababnews' };

const MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.525194841767!2d35.835361019985115!3d34.4388137805979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f6abd495eb4f%3A0x2d80fd6b8e4e10be!2sShabab%20News!5e0!3m2!1sar!2slb!4v1584354933859!5m2!1sar!2slb';

const faqs = [
  { q: 'How do I submit a news story to Shababnews?', a: 'Send your story tip, press release, or article to article@shababnews.net with the subject line “News Submission”. Include the headline, summary, and any supporting photos. Our editorial team reviews all submissions and will contact you within 2–3 business days.' },
  { q: 'Can I list my school or university on Shababnews?', a: "Yes! Schools and universities in North Lebanon can apply to be listed in our directory. Contact us via email or phone with your institution's basic details and we'll guide you through the listing process." },
  { q: 'How can I advertise with Shababnews?', a: 'We offer advertising packages for institutions and organizations that want to reach Lebanese students and youth — banner ads, sponsored content, social posts and video features. Email us for our media kit and pricing.' },
  { q: 'Is the magazine available in Arabic?', a: 'Yes — Shababnews publishes content in Arabic, French and English. The printed and digital magazine includes articles in all three languages.' },
  { q: 'How do I submit an event for the calendar?', a: 'Email the event details (name, date, time, location, description and registration link) to Info@shababnews.net. Events must be relevant to students or youth in North Lebanon to qualify for a free listing.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        highlight="Get in"
        title="touch"
        highlightLast
        teal
        subtitle="Stay connected & get published! Here's your chance to get connected with us — and with all our readers across North Lebanon."
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 className="section-title" style={{ color: '#15b3b8' }}>
              We&apos;d <i className="fas fa-heart" style={{ color: '#ef5b6b', fontSize: 24 }} /> to help!
            </h2>
            <p style={{ fontSize: 14.5, color: 'var(--text-2)', marginTop: 8 }}>
              Reach us by email, phone, or the form below — we usually reply within 24 hours.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-envelope" /></div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:Info@shababnews.net" style={{ color: 'var(--accent)' }}>Info@shababnews.net</a></p>
                  <p><a href="mailto:firas@shababnews.net" style={{ color: 'var(--accent)' }}>firas@shababnews.net</a></p>
                  <p><a href="mailto:article@shababnews.net" style={{ color: 'var(--accent)' }}>article@shababnews.net</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-phone" /></div>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:06625004" style={{ color: 'inherit' }}>06 625 004</a></p>
                  <p><a href="tel:03901029" style={{ color: 'inherit' }}>03 901 029</a> &nbsp;|&nbsp; <a href="tel:76901029" style={{ color: 'inherit' }}>76 901 029</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-map-marker-alt" /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Lebanon, Tripoli</p>
                  <p>Marmaroun Street, facing Trust</p>
                  <p>Ground Floor</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon" style={{ background: 'linear-gradient(135deg,#15b3b8,#0b7d81)' }}><i className="fas fa-share-nodes" /></div>
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

      {/* Office / map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: 22 }}>
            <div className="section-tag">Our office</div>
            <h2 className="section-title" style={{ color: '#15b3b8' }}>Don&apos;t hesitate to visit us</h2>
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
            <iframe
              src={MAP}
              style={{ width: '100%', height: 460, border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              title="Shabab News — Tripoli, Lebanon"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--primary-alt)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left' }}>
            <div className="section-tag">FAQ</div>
            <h2 className="section-title" style={{ color: '#15b3b8' }}>Frequently asked questions</h2>
          </div>
          <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
