import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Counter from '@/components/ui/Counter';

export const metadata = { title: 'About Us — Shababnews' };

const milestones = [
  { year: '2001', title: 'A spark in the North', desc: 'Firas Mawlawi founds Shabab News Magazine in North Lebanon — built to inspire positive thinking, encouragement and skill development among youth.' },
  { year: 'The early years', title: 'Free, every month', desc: 'Thousands of free copies are distributed monthly across schools and universities — quality information for every student, no matter their means.' },
  { year: 'Recognition', title: 'The first of its kind', desc: "Shababnews becomes Lebanon's leading educational news press, praised for life-awareness articles and interviews that empower a generation." },
  { year: 'Going digital', title: 'Beyond the page', desc: 'The magazine launches its website and app, carrying the mission far beyond print and into every student’s pocket.' },
  { year: 'Today', title: 'Everywhere youth are', desc: 'Live on YouTube, Facebook, Instagram and the web — Shababnews reaches Lebanese youth wherever they are.' },
];

const teal = { color: '#15b3b8' };
const tealSpan = { background: 'none', WebkitTextFillColor: '#15b3b8', color: '#15b3b8' } as const;

/* eslint-disable @next/next/no-img-element */
export default function AboutPage() {
  return (
    <>
      <PageHero
        highlight="A story of"
        title="youth & belief"
        teal
        subtitle="For more than two decades, Shabab News has stood beside Lebanon's young people — telling their stories and opening doors to their future."
      />

      {/* Manifesto statement */}
      <section className="section">
        <div className="container">
          <p className="story-lead">Why we exist</p>
          <p className="story-statement">
            Since 2001, we&apos;ve held onto one simple belief — that every young person in Lebanon deserves to be{' '}
            <span className="hl">seen, heard, and empowered</span> on the way to their future.
          </p>
        </div>
      </section>

      {/* Founder's story */}
      <section className="section" style={{ background: 'var(--primary-alt)', paddingTop: 56 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-img"><img src="/firas.jpg" alt="Firas Mawlawi, Founder" loading="lazy" /></div>
              <div className="about-float-card"><div className="num">2001</div><div className="lbl">Year Founded</div></div>
            </div>
            <div className="about-text">
              <div className="section-header" style={{ textAlign: 'left' }}>
                <div className="section-tag">The Beginning</div>
                <h2 className="section-title" style={teal}>It started with <span style={tealSpan}>one vision</span></h2>
              </div>
              <p className="about-body">
                Shabab News Magazine was born to empower a flourishing youth toward a better, more motivational future.
                Founded by <strong>Firas Mawlawi</strong> in 2001, it set out to inspire positive thinking,
                encouragement and skill-building across academic institutions in North Lebanon.
              </p>
              <p className="about-body">
                With thousands of free copies published monthly, it grew into the leading educational news press in the
                country — the first of its kind — championing life-awareness stories and interviews that empower students
                and the educational system alike.
              </p>
              <div className="pull-quote">
                <p>
                  &ldquo;Every student deserves a platform that works for them. This is our gift to Lebanon&apos;s next
                  generation.&rdquo;
                </p>
                <div className="by">— Firas Mawlawi, Founder &amp; CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left' }}><div className="section-tag">Our Journey</div><h2 className="section-title" style={teal}>Two decades, <span style={tealSpan}>one mission</span></h2></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {milestones.map((m, i) => (
              <div key={m.title} style={{ display: 'flex', gap: 22, paddingBottom: i < milestones.length - 1 ? 26 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                  <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, boxShadow: '0 0 0 4px rgba(14,165,170,.15)' }} />
                  {i < milestones.length - 1 && <span style={{ width: 2, flex: 1, background: 'var(--glass-border)', marginTop: 6 }} />}
                </div>
                <div className="card" style={{ flex: 1, padding: 20, marginBottom: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{m.year}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-1)', margin: '6px 0' }}>{m.title}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact band */}
      <section className="impact-band" style={{ padding: '72px 0' }}>
        <div className="container">
          <p className="story-lead" style={{ color: '#5ff0f4' }}>Our impact, in numbers</p>
          <div className="impact-grid">
            <div><div className="impact-num"><Counter target={24} suffix="+" /></div><div className="impact-lbl">Years active</div></div>
            <div><div className="impact-num"><Counter target={500} suffix="+" /></div><div className="impact-lbl">Articles</div></div>
            <div><div className="impact-num"><Counter target={50} suffix="K+" /></div><div className="impact-lbl">Readers</div></div>
            <div><div className="impact-num"><Counter target={200} suffix="+" /></div><div className="impact-lbl">Institutions</div></div>
          </div>
        </div>
      </section>

      {/* Team film */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-shadow)' }}>
                <video src="/team.mp4" autoPlay muted loop playsInline style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(255,255,255,.95)', borderRadius: 8, padding: '6px 10px', boxShadow: '0 6px 16px -8px rgba(13,22,40,.4)' }}>
                  <img src="/logo.jpg" alt="Shababnews" style={{ height: 18, display: 'block' }} />
                </span>
              </div>
            </div>
            <div className="about-text">
              <div className="section-header" style={{ textAlign: 'left' }}>
                <div className="section-tag">Meet the Team</div>
                <h2 className="section-title" style={teal}>The people <span style={tealSpan}>behind it all</span></h2>
              </div>
              <p className="about-body">
                A passionate team of Lebanese journalists, developers and creatives — united by a single
                mission: to empower youth. From the newsroom to the design desk, every member helps shape
                the stories that move a generation forward.
              </p>
              <div className="about-stats">
                <div className="stat-box"><div className="stat-num" style={tealSpan}><Counter target={20} suffix="+" /></div><div className="stat-lbl">Team members</div></div>
                <div className="stat-box"><div className="stat-num" style={tealSpan}>3</div><div className="stat-lbl">Languages</div></div>
                <div className="stat-box"><div className="stat-num" style={tealSpan}>1</div><div className="stat-lbl">Mission</div></div>
              </div>
              <Link href="/contact" className="btn btn-accent" style={{ background: '#15b3b8' }}>
                <i className="fas fa-user-plus" /> Join the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
