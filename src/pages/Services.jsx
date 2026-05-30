import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import { SERVICES } from '../lib/services';
import '../services-scoped.css';

function Checkmark() {
  return (
    <svg className="svc-check" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3 3L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceSection({ service }) {
  const textBlock = (
    <>
      <span className="svc-eyebrow">{service.eyebrow}</span>
      <h2 className="svc-title">{service.title}</h2>

      <div className="svc-intro">
        {service.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="svc-cta-row">
        <Link to="/" className="btn-primary">
          {service.cta}
          <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </>
  );

  return (
    <section className="svc-section" id={service.slug}>
      <div className={`svc-section-inner${service.image ? ' svc-section-inner--split' : ''}`}>
        {service.image ? (
          <div className="svc-section-split">
            <div className="svc-section-text">{textBlock}</div>
            <figure className="svc-figure">
              <img
                src={mediaUrl(service.image)}
                alt={service.imageAlt || service.title}
                loading="lazy"
              />
            </figure>
          </div>
        ) : (
          textBlock
        )}

        <div className="svc-subsections">
          {service.subsections.map((sub, i) => (
            <div key={i} className="svc-subsection">
              <h3 className="svc-subheading">{sub.heading}</h3>
              {sub.body.map((p, j) => (
                <p key={j} className="svc-body">{p}</p>
              ))}
              {sub.checklist && sub.checklist.length > 0 && (
                <>
                  {sub.checklistLabel && (
                    <p className="svc-checklist-label">{sub.checklistLabel}</p>
                  )}
                  <ul className="svc-checklist">
                    {sub.checklist.map((item, k) => (
                      <li key={k}>
                        <Checkmark />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {sub.outro && sub.outro.map((p, j) => (
                <p key={`o-${j}`} className="svc-body">{p}</p>
              ))}
              {sub.cta && (
                <div className="svc-cta-row">
                  <Link to="/" className="btn-primary">
                    {sub.cta}
                    <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                      <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_HIRE_REASONS = [
  'Fully Licensed & Insured',
  'Local Calgary Electricians',
  'Code-Compliant Installations',
  'Transparent Pricing',
  'Quality Workmanship',
  'Fast Response Times',
  'Safety-First Approach',
  'Residential & Commercial Experience',
  'Professional Electrical Troubleshooting',
  'Long-Term Electrical Solutions',
];

const PROCESS_STEPS = [
  {
    title: 'Request a Quote',
    body: "Contact our team to discuss your project. We'll answer your questions, gather the necessary information, and schedule a convenient time to assess your electrical needs.",
  },
  {
    title: 'On-Site Assessment',
    body: 'One of our licensed Calgary electricians will inspect your electrical system, evaluate the project requirements, and identify any upgrades or recommendations needed to ensure a safe installation.',
  },
  {
    title: 'Transparent Recommendation',
    body: "We'll explain the recommended solution, discuss available options, and provide a clear quote before any work begins so there are no surprises.",
  },
  {
    title: 'Professional Installation',
    body: 'Our electricians complete the work safely, efficiently, and according to current Alberta electrical code requirements.',
  },
  {
    title: 'Testing & Inspection',
    body: 'Every installation, repair, or upgrade is thoroughly tested to verify proper operation, performance, and safety.',
  },
  {
    title: 'Project Completion',
    body: "Once the work is complete, we'll walk you through the finished installation, answer any questions, and ensure you're fully satisfied with the results.",
  },
];

function WhyHireSection() {
  return (
    <section className="svc-extra svc-why" aria-labelledby="svc-why-title">
      <div className="svc-extra-inner">
        <span className="svc-eyebrow">— Why hire a pro</span>
        <h2 id="svc-why-title" className="svc-extra-title">
          Why Hire a <em>Licensed Electrician?</em>
        </h2>
        <div className="svc-why-grid">
          <div className="svc-why-text">
            <p>
              Electrical work is one of the most important systems in your home. Improper installations, repairs, or upgrades can create safety hazards, damage equipment, and lead to costly problems in the future. Working with a licensed electrician helps ensure your project is completed safely, efficiently, and according to current electrical codes and industry standards.
            </p>
            <p>
              Whether you&apos;re installing new equipment, upgrading an existing electrical system, or searching for electrical repairs near me, our experienced electricians in Calgary provide dependable solutions tailored to your needs.
            </p>
            <p className="svc-why-aside">
              For information regarding Alberta&apos;s electrical requirements and safety standards, homeowners can review the{' '}
              <a
                href="https://www.alberta.ca/electrical-codes-and-standards"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alberta Electrical Codes &amp; Standards
              </a>
              .
            </p>
          </div>
          <aside className="svc-why-card">
            <span className="svc-why-card-eyebrow">— Why homeowners choose us</span>
            <h3 className="svc-why-card-title">Trusted on every job.</h3>
            <ul className="svc-why-list">
              {WHY_HIRE_REASONS.map((reason) => (
                <li key={reason}>
                  <Checkmark />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="svc-extra svc-process" aria-labelledby="svc-process-title">
      <div className="svc-extra-inner">
        <span className="svc-eyebrow">— How we work</span>
        <h2 id="svc-process-title" className="svc-extra-title">Our Process</h2>
        <ol className="svc-process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title} className="svc-process-step">
              <div className="svc-process-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="svc-process-body">
                <h3 className="svc-process-step-title">
                  <span className="svc-process-step-label">Step {i + 1}</span>
                  {step.title}
                </h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="svc-final-cta" aria-labelledby="svc-final-cta-title">
      <div className="svc-final-cta-inner">
        <span className="svc-eyebrow">— Ready when you are</span>
        <h2 id="svc-final-cta-title" className="svc-final-cta-title">
          Get Professional Electrical Services From <em>Trusted Calgary Electricians.</em>
        </h2>
        <p className="svc-final-cta-sub">
          Licensed master electricians, transparent pricing, and code-compliant work — every time.
        </p>
        <Link to="/" className="btn-primary btn-primary--large">
          Claim Your 10% Discount Today
          <svg width="14" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default function Services() {
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('page-services');
    return () => document.body.classList.remove('page-services');
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

      <section className="svc-hero">
        <div className="svc-hero-veil" />
        <div className="svc-hero-content">
          <span className="svc-hero-eyebrow">— Services</span>
          <h1 className="svc-hero-title">Electrical Services <em>Calgary Trusts</em></h1>
          <p className="svc-hero-sub">
            Licensed master electricians delivering safe, code-compliant electrical work to homes and businesses across Calgary and Airdrie. Pick a service below — or call us anytime.
          </p>
          <nav className="svc-hero-jump" aria-label="Jump to service">
            {SERVICES.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="svc-jump-chip">
                {s.title.replace(/ in Calgary$/, '')}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <main className="svc-main">
        {SERVICES.map((service) => (
          <ServiceSection key={service.slug} service={service} />
        ))}
        <WhyHireSection />
        <ProcessSection />
        <FinalCtaSection />
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
                <li><a href="#electrical-panel-upgrades">Panel upgrades</a></li>
                <li><a href="#ev-charger-installation">EV chargers</a></li>
                <li><a href="#smoke-carbon-monoxide-detectors">Detectors</a></li>
                <li><a href="#generac-generator-installation">Generators</a></li>
                <li><a href="#hot-tub-sauna-wiring">Hot tubs & saunas</a></li>
                <li><a href="#commercial-electrical-services">Commercial</a></li>
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
