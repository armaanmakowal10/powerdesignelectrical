import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import '../about-scoped.css';

export default function About() {
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('page-about');
    return () => document.body.classList.remove('page-about');
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

      <section className="about-hero">
        <div
          className="about-hero-img"
          style={{
            backgroundImage: `url(${mediaUrl('/media/IMG_8759.jpg')})`,
          }}
        />
        <div className="about-hero-veil" />
        <div className="about-hero-content">
          <span className="about-hero-eyebrow">— Power Design Electrical Ltd</span>
          <h1 className="about-hero-title">About <em>Us</em></h1>
        </div>
      </section>

      <div className="about-body">
        <section className="about-section">
          <div className="about-section-inner">
            <span className="about-section-label">Our Mission</span>
            <div className="about-section-body">
              <h2>Doing the Job <em>Right</em>, Every Time</h2>
              <p>
                Our mission is to deliver dependable, high‑quality electrical solutions tailored to the unique needs of residential and commercial clients. Through professionalism, safety, clear communication, and a commitment to doing the job right the first time, we build lasting relationships and ensure every project is completed with excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-inner">
            <span className="about-section-label">Credentials</span>
            <div className="about-section-body">
              <h2>Licensed, Insured &amp; <em>Accredited</em></h2>
              <p>
                We are fully licensed and insured, and members of the Electrical Contractors Association of Alberta — the organization that upholds professional standards across Alberta&apos;s electrical industry. Our Certified Master Electrician (CME) designation is an additional, voluntary level of professional recognition, meaning our work meets higher standards for safety, education, ethics, and accountability.
              </p>
              <p>
                We are also proud members of the Better Business Bureau, holding an <strong>A+ rating</strong>, reflecting our commitment to trust, transparency, and customer satisfaction.
              </p>
              <div className="cred-grid">
                <div className="cred-card">
                  <a
                    className="cred-card-link"
                    href="https://www.ecaa.ab.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={mediaUrl('/media/ecaa-transparent.png')} alt="ECAA — Electrical Contractors Association of Alberta" />
                  </a>
                </div>
                <div className="cred-card">
                  <a
                    className="cred-card-link"
                    href="https://www.bbb.org/ca/ab/airdrie/profile/electrician/power-design-electrical-ltd-0017-271626"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={mediaUrl('/media/Accredited-Seals-Canada_PMS7469-HorizontalABSeal1-e1777068062725-rmhxr6g52z827iga5v359t1zxbjd3eat5847ukq47s.png')} alt="BBB Accredited A+" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-section-inner">
            <span className="about-section-label">Company Founder</span>
            <div className="about-section-body">
              <h2>Master Electrician, <em>From the Ground Up</em></h2>
              <p>
                Power Design Electrical was built on a simple belief: electrical work should be done right, by someone who takes pride in every job. Our founder is a licensed master electrician with over 15 years of hands-on experience in residential and commercial electrical services across Calgary and the surrounding communities.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div>
              <Link to="/" style={{ display: 'inline-block', marginBottom: '18px' }}>
                <img src={mediaUrl(LOGO_SRC)} alt="Power Design Electrical Ltd" className="brand-logo" />
              </Link>
              <p className="footer-tag">
                Calgary&apos;s master electrician for homes that need <em>power that just works.</em>
              </p>
            </div>
            <div>
              <h5>Services</h5>
              <ul>
                <li><a href="/#services">EV chargers</a></li>
                <li><a href="/#services">Panel upgrades</a></li>
                <li><a href="/#services">Hot tub wiring</a></li>
                <li><a href="/#services">Renovations</a></li>
                <li><a href="/#services">Emergency service</a></li>
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
            <span>© 2026 Power Design Electrical LTD · All rights reserved</span>
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
