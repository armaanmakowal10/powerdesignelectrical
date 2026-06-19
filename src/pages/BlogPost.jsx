import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import { BLOG_POSTS, getPostBySlug } from '../lib/blogPosts';
import { SurveyOverlay } from '../components/SurveyOverlay';
import Seo from '../components/Seo';
import '../blog-scoped.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [prefill, setPrefill] = useState(null);
  const openBooking = (pre) => { setPrefill(pre || null); setBookingOpen(true); };

  useEffect(() => {
    document.body.classList.add('page-blog');
    return () => document.body.classList.remove('page-blog');
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  useEffect(() => {
    const callBar = document.getElementById('callBar');
    if (!callBar) return undefined;
    const onScroll = () => callBar.classList.toggle('visible', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Seo
        title={`${post.title} | Power Design Electrical`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
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

      <article className="blog-post">
        <header className="blog-post-hero">
          <div
            className={`blog-post-hero-image${post.image ? ' blog-post-hero-image--photo' : ''}`}
            aria-hidden="true"
            style={post.image ? { backgroundImage: `url(${mediaUrl(post.image)})` } : undefined}
          />
          <div className="blog-post-hero-veil" />
          <div className="blog-post-hero-content">
            <Link to="/blog" className="blog-post-back">
              <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M15 6H1M1 6l4-4M1 6l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
            <span className="blog-post-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span className="blog-post-meta-dot" aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="blog-post-body">
          <div className="blog-post-inner">
            <p className="blog-post-lede">{post.excerpt}</p>

            {post.sections.map((section, idx) => (
              <section key={idx} className="blog-post-section">
                <h2>{section.heading}</h2>
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.image && (
                  <figure className="blog-post-figure">
                    <img
                      src={mediaUrl(section.image)}
                      alt={section.imageAlt || section.heading}
                      loading="lazy"
                    />
                  </figure>
                )}
              </section>
            ))}

            <div className="blog-post-cta">
              <span className="blog-post-cta-label">— Get in touch</span>
              <h3>Have a job you want done <em>properly</em>?</h3>
              <p>Free on-site quote on every booking · 10% off your first service · Calgary &amp; Airdrie · Licensed, insured, and master-electrician-led.</p>
              <div className="blog-post-cta-actions">
                <button className="btn-primary" onClick={() => openBooking({ service: 'general' })}>Book a service</button>
                <a href="tel:14037712553" className="btn-ghost">Call (403) 771-2553</a>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="blog-related">
            <div className="blog-related-inner">
              <span className="blog-related-label">— Keep reading</span>
              <div className="blog-related-grid">
                {related.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card blog-card--compact">
                    <div className="blog-card-image" aria-hidden="true" style={p.image ? { backgroundImage: `url(${mediaUrl(p.image)})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} />
                    <div className="blog-card-body">
                      <span className="blog-card-meta">
                        <span className="blog-card-category">{p.category}</span>
                        <span className="blog-card-dot" aria-hidden="true">·</span>
                        <span>{p.readTime}</span>
                      </span>
                      <h3 className="blog-card-title">{p.title}</h3>
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
        )}
      </article>

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
        <a className="btn btn-primary btn-sm call-bar-cta" href="tel:14037712553">CALL NOW!</a>
      </div>

      <SurveyOverlay
        open={bookingOpen}
        prefill={prefill}
        onClose={() => setBookingOpen(false)}
        onComplete={() => setBookingOpen(false)}
      />
    </>
  );
}
