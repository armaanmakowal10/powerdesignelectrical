import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import { BLOG_POSTS } from '../lib/blogPosts';
import Seo from '../components/Seo';
import '../blog-scoped.css';

// ─── Circuit trace animation ───
function CircuitBg() {
  const canvasRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const rafRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Each trace: a path of horizontal/vertical segments that crawls forward
    const TRACE_COUNT = 10;
    const COLOR = '99, 149, 255';

    const makeTrace = (w, h) => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x, y,
        segments: [],
        maxLen: 60 + Math.random() * 120,
        curLen: 0,
        dir: Math.random() < 0.5 ? 0 : 1, // 0=horiz, 1=vert
        speed: 0.4 + Math.random() * 0.8,
        alpha: 0,
        fadeIn: true,
        life: 0,
        maxLife: 180 + Math.random() * 200,
        dotX: x, dotY: y,
      };
    };

    resize();
    const w = () => canvas.width / (window.devicePixelRatio || 1);
    const h = () => canvas.height / (window.devicePixelRatio || 1);

    let traces = Array.from({ length: TRACE_COUNT }, () => makeTrace(w(), h()));

    const draw = () => {
      const cw = w(); const ch = h();
      ctx.clearRect(0, 0, cw, ch);

      traces = traces.map((t) => {
        // Fade
        if (t.fadeIn) {
          t.alpha = Math.min(1, t.alpha + 0.025);
          if (t.alpha >= 1) t.fadeIn = false;
        }
        t.life++;
        if (t.life > t.maxLife) t.alpha = Math.max(0, t.alpha - 0.03);
        if (t.alpha <= 0 && t.life > t.maxLife) return makeTrace(cw, ch);

        // Grow dot along direction
        const spd = t.speed;
        if (t.dir === 0) t.dotX += spd;
        else t.dotY += spd;
        t.curLen += spd;

        // Occasionally turn
        if (t.curLen >= t.maxLen) {
          t.segments.push({ x: t.dotX, y: t.dotY });
          t.curLen = 0;
          t.maxLen = 40 + Math.random() * 80;
          t.dir = t.dir === 0 ? 1 : 0;
          // Trim old segments to avoid infinite memory
          if (t.segments.length > 12) t.segments.shift();
        }

        // Draw trace path
        const allPoints = [{ x: t.x, y: t.y }, ...t.segments, { x: t.dotX, y: t.dotY }];
        if (allPoints.length < 2) return t;

        ctx.save();
        ctx.globalAlpha = t.alpha * 0.55;
        ctx.strokeStyle = `rgba(${COLOR}, 1)`;
        ctx.lineWidth = 1;
        ctx.shadowColor = `rgba(${COLOR}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(allPoints[0].x, allPoints[0].y);
        for (let i = 1; i < allPoints.length; i++) ctx.lineTo(allPoints[i].x, allPoints[i].y);
        ctx.stroke();

        // Leading dot
        ctx.globalAlpha = t.alpha * 0.9;
        ctx.fillStyle = `rgba(${COLOR}, 1)`;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(t.dotX, t.dotY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return t;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return (
    <div ref={containerRef} className="blog-circuit-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default function Blog() {
  const [aboutOpen, setAboutOpen] = useState(false);
  // Default false so this renders during the static (SSR) build where `window`
  // is undefined; the real value is read on mount to avoid a hydration mismatch.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.classList.add('page-blog');
    return () => document.body.classList.remove('page-blog');
  }, []);

  useEffect(() => {
    const callBar = document.getElementById('callBar');
    if (!callBar) return undefined;
    const onScroll = () => callBar.classList.toggle('visible', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <Seo
        title="Calgary Electrical Tips &amp; Guides | Power Design Electrical Blog"
        description="Practical electrical advice for Calgary homeowners — panel upgrades, EV chargers, breaker problems, hot tub wiring, smart lighting and electrical safety in older homes."
        path="/blog"
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
              <button
                type="button"
                className="nav-hamburger"
                onClick={(e) => {
                  e.stopPropagation();
                  setAboutOpen(true);
                }}
                aria-label="Open menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <NavDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

      <section className="blog-hero">
        {!isMobile && <CircuitBg />}
        <div className="blog-hero-veil" />
        <div className="blog-hero-content">
          <span className="blog-hero-eyebrow">— Field notes &amp; guides</span>
          <h1 className="blog-hero-title">Calgary Electrical Tips &amp; Guides</h1>
          <p className="blog-hero-sub">
            Practical writing on electrical work: panel upgrades, EV chargers, hot tub installs, safety in older homes. Written by master electrician Piero Mantero, for homeowners who want to know what is going on behind the drywall.
          </p>
        </div>
      </section>

      <main className="blog-body">
        <section className="blog-section">
          <div className="blog-section-inner">
            <Link to={`/blog/${featured.slug}`} className="blog-featured" aria-label={featured.title}>
              <div className="blog-featured-image" aria-hidden="true" style={featured.image ? { backgroundImage: `url(${mediaUrl(featured.image)})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} />
              <div className="blog-featured-content">
                <span className="blog-card-meta">
                  <span className="blog-card-category">{featured.category}</span>
                  <span className="blog-card-dot" aria-hidden="true">·</span>
                  <span>{featured.readTime}</span>
                </span>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <span className="blog-card-cta">
                  Read article
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                    <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="blog-section blog-section--grid">
          <div className="blog-section-inner">
            <div className="blog-grid">
              {rest.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-image" aria-hidden="true" style={post.image ? { backgroundImage: `url(${mediaUrl(post.image)})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} />
                  <div className="blog-card-body">
                    <span className="blog-card-meta">
                      <span className="blog-card-category">{post.category}</span>
                      <span className="blog-card-dot" aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <span className="blog-card-cta">
                      Read article
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                        <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
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
              <p className="footer-tag">
                Calgary&apos;s master electrician for homes that need <em>power that just works.</em>
              </p>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><a href="/#hero">EV chargers</a></li>
                <li><a href="/#hero">Panel upgrades</a></li>
                <li><a href="/#hero">Hot tub wiring</a></li>
                <li><a href="/#hero">Renovations</a></li>
                <li><a href="/#hero">Emergency service</a></li>
              </ul>
            </div>
            <div>
              <h5>Service area</h5>
              <ul>
                <li><a href="#">Calgary</a></li>
                <li><a href="#">Airdrie</a></li>
                <li><a href="#">Cochrane</a></li>
                <li><a href="#">Chestermere</a></li>
                <li><a href="#">Okotoks</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:14037712553">(403) 771-2553</a></li>
                <li>
                  <a href="mailto:powerdesignelectricalltd@gmail.com" className="footer-email">
                    <span className="footer-email-local">powerdesignelectricalltd</span>
                    <span className="footer-email-domain">@gmail.com</span>
                  </a>
                </li>
                <li style={{ color: 'var(--ink-faint)' }}>Mon – Sat · 7am – 7pm</li>
                <li style={{ color: 'var(--ink-faint)' }}>EN · ES · FR</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Power Design Electrical LTD · All rights reserved · <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span>
            <span>Licensed Master Electrician · Alberta · Insured to $2 million</span>
          </div>
        </div>
      </footer>

      <div className="call-bar" id="callBar" role="region" aria-label="Quick contact">
        <span className="call-bar-text">Need power back on?</span>
        <span className="call-bar-num">(403) 771-2553</span>
        <Link to="/" className="btn-primary">BOOK NOW!</Link>
      </div>
    </>
  );
}
