import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import { SurveyOverlay } from '../components/SurveyOverlay';
import Seo from '../components/Seo';
import '../locations-scoped.css';

// ─── Interactive Service Area Map ───
function ServiceMap({ locations, onPinClick }) {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !window.L) return;
    if (instanceRef.current) return; // already initialised

    const L = window.L;

    const map = L.map(mapRef.current, {
      center: [51.05, -114.15],
      zoom: 9,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    instanceRef.current = map;

    // Force Leaflet to recalculate size after DOM paint
    setTimeout(() => { map.invalidateSize(); }, 100);
    window.addEventListener('resize', () => map.invalidateSize());

    // CartoDB Dark Matter tiles — dark, minimal, matches site
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 16,
    }).addTo(map);

    // Custom pin icon
    const makeIcon = (active = false) => L.divIcon({
      className: '',
      iconSize: [64, 64],
      iconAnchor: [32, 64],
      popupAnchor: [0, -64],
      html: `
        <div style="width:64px;height:64px;display:flex;align-items:center;justify-content:center;position:relative;">
          ${!active ? `<div class="loc-pin-ring"></div>` : ''}
          <div class="${active ? 'loc-pin-dot loc-pin-dot--active' : 'loc-pin-dot'}"></div>
          <div style="position:absolute;bottom:0px;left:50%;transform:translateX(-50%);width:3px;height:14px;background:rgba(99,149,255,0.7);border-radius:2px;"></div>
        </div>`,
    });

    locations.forEach((loc) => {
      const marker = L.marker(loc.coords, { icon: makeIcon(false) }).addTo(map);

      // Label
      const label = L.tooltip({
        permanent: true,
        direction: 'top',
        offset: [0, -46],
        className: 'loc-map-label',
      }).setContent(loc.city);
      marker.bindTooltip(label);

      marker.on('click', () => {
        // Swap all markers back
        map.eachLayer((layer) => {
          if (layer instanceof L.Marker) layer.setIcon(makeIcon(false));
        });
        marker.setIcon(makeIcon(true));
        onPinClick(loc.slug);
      });
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="loc-map-canvas" />;
}

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
// OSM embed: bbox = west,south,east,north — marker = lat,lon
const LOCATIONS = [
  {
    city: 'Calgary',
    slug: 'calgary',
    tagline: "Home base. 200+ neighbourhoods covered.",
    blurb: "From Inglewood to Evanston — panel upgrades, EV chargers, hot tub wiring, and emergency repairs across all of Calgary.",
    responseTime: '1 hr',
    electricians: 3,
    services: ['Panel Upgrades', 'EV Chargers', 'Hot Tub Wiring', 'Pot Lights'],
    keywords: 'Electrician Calgary · Calgary Electrical Contractor · Panel Upgrade Calgary',
    image: '/media/image-dc6914e9.png',
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-114.35%2C50.92%2C-113.80%2C51.18&layer=mapnik&marker=51.0447%2C-114.0719',
    coords: [51.08, -114.14],
  },
  {
    city: 'Airdrie',
    slug: 'airdrie',
    tagline: "Our headquarters. Fastest response.",
    blurb: "We are based here. Same-day availability, no travel surcharges, deep knowledge of every new subdivision.",
    responseTime: '45 min',
    electricians: 2,
    services: ['Panel Upgrades', 'EV Chargers', 'New Construction', 'Dedicated Circuits'],
    keywords: 'Electrician Airdrie · Airdrie Electrical · Panel Upgrade Airdrie',
    image: '/media/pasted-1778541354183-0.png',
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-114.10%2C51.23%2C-113.90%2C51.35&layer=mapnik&marker=51.2917%2C-114.0144',
    coords: [51.30, -114.02],
  },
  {
    city: 'Cochrane',
    slug: 'cochrane',
    tagline: "New builds and heritage homes both.",
    blurb: "30 minutes from our shop. Same-day urgent calls welcome. Licensed, permitted, inspected — every time.",
    responseTime: '1 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Hot Tub Wiring', 'Service Repairs'],
    keywords: 'Electrician Cochrane · Cochrane AB Electrical · Panel Upgrade Cochrane',
    image: '/media/pasted-1778541390284-0.png',
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-114.55%2C51.12%2C-114.35%2C51.25&layer=mapnik&marker=51.1872%2C-114.4692',
    coords: [51.1872, -114.4692],
  },
  {
    city: 'Chestermere',
    slug: 'chestermere',
    tagline: "Lakeside homes, growing fast.",
    blurb: "EV chargers, hot tub wiring, and panel upgrades for Chestermere's mix of new builds and established properties.",
    responseTime: '1 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Hot Tub Wiring', 'Dedicated Circuits'],
    keywords: 'Electrician Chestermere · Chestermere Electrical · EV Charger Chestermere',
    image: '/media/pasted-1778541413458-0.png',
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-113.95%2C51.00%2C-113.72%2C51.10&layer=mapnik&marker=51.0523%2C-113.8229',
    coords: [51.03, -113.78],
  },
  {
    city: 'Okotoks',
    slug: 'okotoks',
    tagline: "One of Alberta's fastest-growing towns.",
    blurb: "Full residential electrical services — all permitted, all inspected, master electrician on every job.",
    responseTime: '1.5 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Smoke Detectors', 'Service Repairs'],
    keywords: 'Electrician Okotoks · Okotoks AB Electrical · Panel Upgrade Okotoks',
    image: '/media/pasted-1778541446197-3.png',
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-114.05%2C50.68%2C-113.88%2C50.78&layer=mapnik&marker=50.7283%2C-113.9751',
    coords: [50.7283, -113.9751],
  },
  {
    city: 'Surrounding Areas',
    slug: 'surrounding',
    tagline: "Within an hour of Airdrie? We come out.",
    blurb: "Crossfield, Carstairs, High River, Strathmore, Rocky View County. Call us — if we can get there, we will.",
    responseTime: '1.5 hr',
    electricians: 1,
    services: ['Panel Upgrades', 'EV Chargers', 'Emergency Repairs', 'Acreage Wiring'],
    keywords: 'Electrician Rocky View · Crossfield Electrician · Rural Alberta Electrical',
    image: '/media/pasted-1778541354183-0.png',
    mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-113.60%2C50.90%2C-113.10%2C51.20&layer=mapnik&marker=51.0353%2C-113.3773',
    coords: [51.0353, -112.95],
  },
];

export default function Locations() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [prefill, setPrefill] = useState(null);
  const [activePin, setActivePin] = useState(null);
  const navigate = useNavigate();
  const openBooking = (pre) => { setPrefill(pre || null); setBookingOpen(true); };
  const goToHomeBooking = () => {
    window.location.href = '/#hero';
  };
  const activeLocation = LOCATIONS.find((l) => l.slug === activePin);

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
      <Seo
        title="Service Areas — Calgary, Airdrie, Cochrane &amp; Okotoks | Power Design Electrical"
        description="Power Design Electrical serves Calgary, Airdrie, Cochrane, Chestermere, Okotoks and surrounding communities with licensed residential and commercial electrical work."
        path="/locations"
      />
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
          <span className="loc-hero-eyebrow">Service Locations</span>
          <h1 className="loc-hero-title">Areas of Service <span className="loc-hero-accent">in Calgary</span></h1>
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
          </div>
        </div>
      </section>

      {/* ── Interactive Map ── */}
      <section className="loc-map-section">
        <div className="loc-map-wrap">
          <ServiceMap locations={LOCATIONS} onPinClick={setActivePin} />

          {/* Popup card on pin click */}
          {activeLocation && (
            <div className="loc-map-popup-wrap" onClick={(e) => e.stopPropagation()}>
            <div className="loc-map-popup">
              <button className="loc-map-popup-close" onClick={() => setActivePin(null)} aria-label="Close">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
              <div className="loc-map-popup-header">
                <h3 className="loc-map-popup-city">{activeLocation.city}</h3>
                <p className="loc-map-popup-tagline">{activeLocation.tagline}</p>
              </div>
              <div className="loc-map-popup-meta">
                <div className="loc-map-popup-stat">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 4.5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <span className="loc-map-popup-val">{activeLocation.responseTime}</span>
                    <span className="loc-map-popup-lbl">avg response</span>
                  </div>
                </div>
                <div className="loc-map-popup-divider" />
                <div className="loc-map-popup-stat">
                  <div className="loc-map-popup-elec-block">
                    <div className="loc-map-popup-elec-row">
                      <span className="loc-map-popup-val loc-map-popup-val--green">{activeLocation.electricians}</span>
                      {activeLocation.electricians > 1 && <ElecDots count={activeLocation.electricians} />}
                    </div>
                    <span className="loc-map-popup-val loc-map-popup-val--green loc-map-popup-elec-label">electrician{activeLocation.electricians > 1 ? 's' : ''}</span>
                    <span className="loc-map-popup-lbl">available now</span>
                  </div>
                </div>
              </div>
              <p className="loc-map-popup-blurb">{activeLocation.blurb}</p>
              <div className="loc-map-popup-chips">
                {activeLocation.services.map((s) => (
                  <span key={s} className="loc-service-chip">{s}</span>
                ))}
              </div>
              <button className="loc-map-popup-cta" onClick={goToHomeBooking}>
                Book in {activeLocation.city === 'Surrounding Areas' ? 'My Area' : activeLocation.city}
                <svg width="13" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            </div>
          )}

          {!activePin && (
            <div className="loc-map-hint">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Click a pin to see service details
            </div>
          )}
        </div>
      </section>


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
        <button className="btn btn-primary btn-sm call-bar-cta" onClick={() => openBooking({ service: 'general' })}>BOOK NOW!</button>
      </div>

      <SurveyOverlay open={bookingOpen} prefill={prefill} onClose={() => setBookingOpen(false)} onComplete={() => setBookingOpen(false)} />
    </>
  );
}
