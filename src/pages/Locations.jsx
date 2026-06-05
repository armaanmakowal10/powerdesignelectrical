import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import { SurveyOverlay } from '../components/SurveyOverlay';
import '../locations-scoped.css';

// ─── Pollen background ───
function Pollen({ count = 45 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    const color = '#ffffff';
    const ease = 50; const staticity = 50;

    const resize = () => {
      const r = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { w: r.width, h: r.height };
      canvas.width = r.width * dpr; canvas.height = r.height * dpr;
      canvas.style.width = r.width + 'px'; canvas.style.height = r.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = Array.from({ length: count }, () => spawn());
    };
    const spawn = () => {
      const { w, h } = sizeRef.current;
      const size = Math.random() * 1.6 + 0.6;
      return { x: Math.random() * w, y: Math.random() * h, translateX: 0, translateY: 0, size, alpha: 0, targetAlpha: Math.random() * 0.5 + 0.15, dx: (Math.random() - 0.5) * 0.18, dy: (Math.random() - 0.5) * 0.18 - 0.04, magnetism: 0.1 + Math.random() * 4 };
    };
    const onMouse = (e) => { const r = container.getBoundingClientRect(); mouseRef.current.x = e.clientX - r.left - r.width / 2; mouseRef.current.y = e.clientY - r.top - r.height / 2; };
    const draw = () => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);
      cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) / ease;
      cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) / ease;
      const ps = particlesRef.current;
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (p.alpha < p.targetAlpha) p.alpha += 0.015;
        p.x += p.dx; p.y += p.dy;
        const edgeX = Math.min(p.x, w - p.x); const edgeY = Math.min(p.y, h - p.y);
        const edgeAlpha = Math.max(0, Math.min(1, Math.min(edgeX, edgeY) / 70));
        p.translateX += (cursorRef.current.x / (staticity / p.magnetism) - p.translateX) / ease;
        p.translateY += (cursorRef.current.y / (staticity / p.magnetism) - p.translateY) / ease;
        const drawX = p.x + p.translateX; const drawY = p.y + p.translateY;
        ctx.save();
        ctx.globalAlpha = p.alpha * edgeAlpha;
        const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, p.size * 6);
        grad.addColorStop(0, color); grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(drawX, drawY, p.size * 6, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = Math.min(1, p.alpha * edgeAlpha * 1.6);
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        if (p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) { ps[i] = spawn(); ps[i].alpha = 0; }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    resize(); draw();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    window.addEventListener('mousemove', onMouse);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); window.removeEventListener('mousemove', onMouse); };
  }, [count]);

  return <div ref={containerRef} className="pollen-bg" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}

// ─── Animated counter ───
function AnimCounter({ end, duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * end));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val}</span>;
}

// ─── Live electrician dot indicator ───
function ElecDots({ count }) {
  return (
    <div className="loc-elec-dots">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="loc-elec-dot" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
    </div>
  );
}

// ─── Location data ───
const LOCATIONS = [
  {
    city: 'Calgary',
    slug: 'calgary',
    tagline: "Home base. 200+ neighbourhoods covered.",
    blurb: "From Inglewood to Evanston — panel upgrades, EV chargers, hot tub wiring, and emergency repairs across all of Calgary.",
    responseTime: '1.5 hr',
    electricians: 3,
    services: ['Panel Upgrades', 'EV Chargers', 'Hot Tub Wiring', 'Pot Lights'],
    keywords: 'Electrician Calgary · Calgary Electrical Contractor · Panel Upgrade Calgary',
    image: '/media/image-dc6914e9.png',
    mapQ: 'Calgary,Alberta,Canada',
    mapZoom: 11,
  },
  {
    city: 'Airdrie',
    slug: 'airdrie',
    tagline: "Our headquarters. Fastest response.",
    blurb: "We are based here. Same-day availability, no travel surcharges, deep knowledge of every new subdivision.",
    responseTime: '1 hr',
    electricians: 2,
    services: ['Panel Upgrades', 'EV Chargers', 'New Construction', 'Dedicated Circuits'],
    keywords: 'Electrician Airdrie · Airdrie Electrical · Panel Upgrade Airdrie',
    image: '/media/pasted-1778541354183-0.png',
    mapQ: 'Airdrie,Alberta,Canada',
    mapZoom: 12,
  },
  {
    city: 'Cochrane',
    slug: 'cochrane',
    tagline: "New builds and heritage homes both.",
    blurb: "30 minutes from our shop. Same-day urgent calls welcome. Licensed, permitted, inspected — every time.",
    responseTime: '2 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Hot Tub Wiring', 'Service Repairs'],
    keywords: 'Electrician Cochrane · Cochrane AB Electrical · Panel Upgrade Cochrane',
    image: '/media/pasted-1778541390284-0.png',
    mapQ: 'Cochrane,Alberta,Canada',
    mapZoom: 13,
  },
  {
    city: 'Chestermere',
    slug: 'chestermere',
    tagline: "Lakeside homes, growing fast.",
    blurb: "EV chargers, hot tub wiring, and panel upgrades for Chestermere's mix of new builds and established properties.",
    responseTime: '1.5 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Hot Tub Wiring', 'Dedicated Circuits'],
    keywords: 'Electrician Chestermere · Chestermere Electrical · EV Charger Chestermere',
    image: '/media/pasted-1778541413458-0.png',
    mapQ: 'Chestermere,Alberta,Canada',
    mapZoom: 13,
  },
  {
    city: 'Okotoks',
    slug: 'okotoks',
    tagline: "One of Alberta's fastest-growing towns.",
    blurb: "Full residential electrical services — all permitted, all inspected, master electrician on every job.",
    responseTime: '2 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Smoke Detectors', 'Service Repairs'],
    keywords: 'Electrician Okotoks · Okotoks AB Electrical · Panel Upgrade Okotoks',
    image: '/media/pasted-1778541446197-3.png',
    mapQ: 'Okotoks,Alberta,Canada',
    mapZoom: 13,
  },
  {
    city: 'Surrounding Areas',
    slug: 'surrounding',
    tagline: "Within an hour of Airdrie? We come out.",
    blurb: "Crossfield, Carstairs, High River, Strathmore, Rocky View County. Call us — if we can get there, we will.",
    responseTime: '2.5 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Emergency Repairs', 'Acreage Wiring'],
    keywords: 'Electrician Rocky View · Crossfield Electrician · Rural Alberta Electrical',
    image: '/media/pasted-1778541354183-0.png',
    mapQ: 'Rocky+View+County,Alberta,Canada',
    mapZoom: 9,
  },
];

export default function Locations() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [prefill, setPrefill] = useState(null);
  const openBooking = (pre) => { setPrefill(pre || null); setBookingOpen(true); };

  useEffect(() => {
    document.body.classList.add('page-locations');
    return () => document.body.classList.remove('page-locations');
  }, []);

  useEffect(() => {
    const callBar = document.getElementById('callBar');
    if (!callBar) return undefined;
    const onScroll = () => callBar.classList.toggle('visible', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Link className="brand" to="/" title="Go to home">
            <img src={mediaUrl(LOGO_SRC)} alt="Power Design Electrical Ltd" className="brand-logo" />
          </Link>
          <div className="nav-right">
            <span className="nav-phone-animated-wrap">
              <a className="nav-phone" href="tel:14037712553" aria-label="Call (403) 771-2553">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3h3l1.5 4-2 1.2a9 9 0 004.3 4.3L11 10.5 15 12v3a1 1 0 01-1 1A12 12 0 012 4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                <span className="nav-phone-num">(403) 771-2553</span>
              </a>
            </span>
            <div className="nav-menu-slot">
              <button type="button" className="nav-hamburger" onClick={(e) => { e.stopPropagation(); setAboutOpen(true); }} aria-label="Open menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <NavDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* ── Hero ── */}
      <section className="loc-hero">
        <Pollen count={45} />
        <div className="loc-hero-veil" />
        <div className="loc-hero-content">
          <span className="loc-hero-eyebrow">— Service Areas</span>
          <h1 className="loc-hero-title">Our Areas of Service <span className="loc-hero-accent">in Calgary</span></h1>
          <p className="loc-hero-sub">
            Licensed master electricians serving Calgary, Airdrie, Cochrane, Chestermere, Okotoks, and surrounding communities. Permitted work, fixed-price quotes, and a master electrician on every job.
          </p>
          <div className="loc-hero-stats">
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num"><AnimCounter end={6} /></span>
              <span className="loc-hero-stat-label">Service Areas</span>
            </div>
            <div className="loc-hero-stat-divider" />
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num"><AnimCounter end={16} />+</span>
              <span className="loc-hero-stat-label">Years Serving Calgary</span>
            </div>
            <div className="loc-hero-stat-divider" />
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num"><AnimCounter end={1000} />+</span>
              <span className="loc-hero-stat-label">Homes Wired</span>
            </div>
            <div className="loc-hero-stat-divider" />
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num"><AnimCounter end={4} /></span>
              <span className="loc-hero-stat-label">Electricians On Call</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Cards ── */}
      <main className="loc-main">
        <div className="loc-grid">
          {LOCATIONS.map((loc) => (
            <article key={loc.slug} id={loc.slug} className="loc-card">

              {/* Map */}
              <div className="loc-card-map">
                <iframe
                  title={`Map of ${loc.city}`}
                  src={`https://maps.google.com/maps?q=${loc.mapQ}&z=${loc.mapZoom}&output=embed&hl=en`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  tabIndex="-1"
                />
                <div className="loc-card-map-veil" />
                <div className="loc-card-map-label">{loc.city}</div>
              </div>

              {/* Content */}
              <div className="loc-card-body">
                <div className="loc-card-top">
                  <div className="loc-card-meta">
                    <div className="loc-response-badge">
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {loc.responseTime} avg
                    </div>
                    <div className="loc-elec-row">
                      <ElecDots count={loc.electricians} />
                      <span className="loc-elec-label"><span className="loc-elec-num">{loc.electricians}</span> available</span>
                    </div>
                  </div>
                  <p className="loc-card-tagline">{loc.tagline}</p>
                  <p className="loc-card-blurb">{loc.blurb}</p>
                </div>

                <div className="loc-services">
                  {loc.services.map((s) => (
                    <span key={s} className="loc-service-chip">{s}</span>
                  ))}
                </div>

                <button className="loc-card-cta" onClick={() => openBooking({ location: loc.slug })}>
                  Book in {loc.city === 'Surrounding Areas' ? 'My Area' : loc.city}
                  <svg width="13" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                    <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="loc-keywords">{loc.keywords}</div>
            </article>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <section className="loc-cta">
          <Pollen count={35} />
          <div className="loc-cta-inner">
            <span className="loc-cta-eyebrow">Ready when you are</span>
            <h2 className="loc-cta-title">Not sure if we cover your area?</h2>
            <p className="loc-cta-sub">Give us a call. If you are within an hour of Airdrie, there is a good chance we can help — and the assessment is always free.</p>
            <div className="loc-cta-actions">
              <button className="btn-primary btn-primary--large" onClick={() => openBooking({ service: 'general' })}>
                Book a Free Assessment
                <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a href="tel:14037712553" className="btn-ghost">Call (403) 771-2553</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div>
              <Link className="brand" to="/" style={{ marginBottom: 18 }}>
                <img src={mediaUrl(LOGO_SRC)} alt="Power Design Electrical Ltd" className="brand-logo" />
              </Link>
              <p className="footer-tag">Calgary's master electrician for homes that need <em>power that just works.</em></p>
            </div>
            <div>
              <h5>Service Areas</h5>
              <ul>
                {LOCATIONS.slice(0, 5).map((l) => (
                  <li key={l.slug}><a href={`#${l.slug}`}>{l.city}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><Link to="/services#electrical-panel-upgrades">Panel Upgrades</Link></li>
                <li><Link to="/services#ev-charger-installation">EV Chargers</Link></li>
                <li><Link to="/services#hot-tub-wiring">Hot Tub Wiring</Link></li>
                <li><Link to="/services#smoke-carbon-monoxide-detectors">Smoke Detectors</Link></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:14037712553">(403) 771-2553</a></li>
                <li><a href="mailto:powerdesignelectricalltd@gmail.com">powerdesignelectricalltd@gmail.com</a></li>
                <li style={{ color: 'var(--ink-faint)' }}>Mon – Sat · 7am – 7pm</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Power Design Electrical LTD · All rights reserved</span>
            <span>Licensed Master Electrician · Alberta · Insured to $2 million</span>
          </div>
        </div>
      </footer>

      <div className="call-bar" id="callBar" role="region" aria-label="Quick contact">
        <span className="call-bar-text">Need power back on?</span>
        <span className="call-bar-num">(403) 771-2553</span>
        <button className="btn-primary" onClick={() => openBooking({ service: 'general' })}>BOOK NOW!</button>
      </div>

      <SurveyOverlay open={bookingOpen} prefill={prefill} onClose={() => setBookingOpen(false)} onComplete={() => setBookingOpen(false)} />
    </>
  );
}
