import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDrawer } from '../components/NavDrawer';
import Seo from '../components/Seo';
import { mediaUrl, LOGO_SRC } from '../lib/mediaUrl';
import '../legal-scoped.css';

const UPDATED = 'June 16, 2026';

// ── Animated background: slow-drifting "aurora" glows over a faint circuit
// grid. Pure CSS animation — smooth, GPU-friendly, and respects reduced motion.
function LegalBg() {
  return (
    <div className="legal-bg" aria-hidden="true">
      <span className="legal-orb legal-orb--1" />
      <span className="legal-orb legal-orb--2" />
      <span className="legal-orb legal-orb--3" />
      <span className="legal-grid" />
    </div>
  );
}

function Num({ children }) {
  return <span className="legal-num">{children}</span>;
}

function PrivacyContent() {
  return (
    <>
      <p className="legal-intro">
        Power Design Electrical Ltd. (“Power Design Electrical”, “we”, “us”, or “our”) is committed to
        protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        personal information when you visit our website or use our electrical services in Calgary, Airdrie, and
        surrounding areas. We handle personal information in accordance with Canada’s{' '}
        <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong>, Alberta’s{' '}
        <strong>Personal Information Protection Act (PIPA)</strong>, and{' '}
        <strong>Canada’s Anti-Spam Legislation (CASL)</strong>.
      </p>

      <section className="legal-section">
        <h2><Num>01</Num> Information We Collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li>Your name, email address, phone number, and service address</li>
          <li>Details about the electrical work or quote you request</li>
          <li>Any information you include in messages, booking forms, or surveys</li>
        </ul>
        <h3>Information collected automatically</h3>
        <p>
          When you visit our website, we and our service providers may automatically collect technical
          information such as your IP address, browser type, device type, referring pages, and how you interact
          with our site. This is gathered using cookies and similar technologies (see Section 4).
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>02</Num> How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries and provide quotes, scheduling, and electrical services</li>
          <li>To process and confirm bookings and communicate about your service</li>
          <li>To operate, maintain, secure, and improve our website</li>
          <li>To send service updates and, where you have consented, promotional messages</li>
          <li>To measure the performance of our advertising and understand our audience</li>
          <li>To comply with legal obligations and protect our legal rights</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><Num>03</Num> Consent (PIPEDA &amp; CASL)</h2>
        <p>
          We collect, use, and disclose personal information with your consent, which may be express or implied
          depending on the sensitivity of the information and the circumstances. By submitting a form or
          requesting service, you consent to our use of your information for the purposes described above.
        </p>
        <p>
          In accordance with CASL, we only send commercial electronic messages (such as promotional emails)
          where we have your consent. Every such message includes a clear way to unsubscribe, and you may
          withdraw your consent at any time by contacting us or using the unsubscribe link. You may also
          withdraw consent for other uses of your personal information, subject to legal and contractual
          limits, and we will explain the consequences of doing so.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>04</Num> Cookies, Analytics &amp; Advertising</h2>
        <p>
          We use cookies and similar technologies to operate our website, remember your preferences, analyze
          traffic, and measure and serve advertising. Cookies are small files stored on your device. You can
          control or delete cookies through your browser settings, though some features may not function
          properly without them.
        </p>
        <p>We work with the following third-party providers, who may set their own cookies and collect data:</p>
        <ul>
          <li><strong>Google Analytics</strong> — to understand how visitors use our site</li>
          <li><strong>Google Ads</strong> — for conversion measurement and remarketing across the Google network</li>
          <li><strong>Meta (Facebook &amp; Instagram) Pixel</strong> — for conversion measurement and advertising on Meta platforms</li>
        </ul>
        <p>
          These providers may use cookies and device identifiers to show you ads on other websites and apps
          based on your visit to our site. Their handling of data is governed by their own privacy policies:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>{' '}and{' '}
          <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">Meta Privacy Policy</a>.
        </p>
        <div className="legal-callout">
          <p>
            <strong>Your advertising choices.</strong> You can opt out of personalized advertising through{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>,{' '}
            your{' '}
            <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">Meta ad preferences</a>,
            and the Digital Advertising Alliance of Canada’s{' '}
            <a href="https://youradchoices.ca/en/tools" target="_blank" rel="noopener noreferrer">AdChoices opt-out tools</a>.
            You can opt out of Google Analytics with the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <h2><Num>05</Num> Disclosure of Information</h2>
        <p>
          We do <strong>not</strong> sell your personal information. We may share it with trusted service
          providers who perform functions on our behalf (such as hosting, analytics, advertising, and scheduling
          tools), who are required to protect your information and use it only for the services they provide to
          us. We may also disclose information where required by law, to enforce our agreements, or to protect
          the rights, safety, and property of Power Design Electrical, our customers, or others.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>06</Num> Data Storage &amp; Cross-Border Processing</h2>
        <p>
          Some of our service providers may store or process data on servers located outside of Canada,
          including in the United States. Where this occurs, your information may be subject to the laws of those
          jurisdictions. We take reasonable steps to ensure your information is handled by providers that offer a
          comparable level of protection.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>07</Num> Safeguards &amp; Retention</h2>
        <p>
          We use reasonable physical, organizational, and technological safeguards to protect your personal
          information against loss, theft, and unauthorized access or disclosure. We retain personal information
          only as long as necessary to fulfill the purposes for which it was collected or as required by law,
          after which it is securely destroyed or anonymized.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>08</Num> Your Rights</h2>
        <p>
          Under PIPEDA and Alberta’s PIPA, you have the right to access the personal information we hold about
          you, to request corrections to it, and to withdraw consent (subject to legal or contractual limits).
          To exercise these rights, contact our Privacy Officer using the details below. We will respond within
          the timeframes required by applicable law.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>09</Num> Children’s Privacy</h2>
        <p>
          Our website and services are intended for adults. We do not knowingly collect personal information
          from children. If you believe a child has provided us with personal information, please contact us and
          we will take appropriate steps to delete it.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>10</Num> Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page
          reflects the most recent revision. Material changes will be posted on this page.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>11</Num> Contact &amp; Complaints</h2>
        <p>
          If you have questions, requests, or concerns about your privacy or this policy, please contact our
          Privacy Officer:
        </p>
        <div className="legal-contact-card">
          <span><strong>Power Design Electrical Ltd.</strong></span>
          <span>Email: <a href="mailto:powerdesignelectricalltd@gmail.com">powerdesignelectricalltd@gmail.com</a></span>
          <span>Phone: <a href="tel:14037712553">(403) 771-2553</a></span>
          <span>Airdrie, Alberta, Canada</span>
        </div>
        <p style={{ marginTop: 16 }}>
          If you are not satisfied with our response, you may contact the{' '}
          <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">Office of the Privacy Commissioner of Canada</a>{' '}
          or the{' '}
          <a href="https://www.oipc.ab.ca" target="_blank" rel="noopener noreferrer">Office of the Information and Privacy Commissioner of Alberta</a>.
        </p>
      </section>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <p className="legal-intro">
        These Terms &amp; Conditions (“Terms”) govern your use of the Power Design Electrical Ltd. website and
        your engagement of our electrical services. By accessing our website or requesting our services, you
        agree to these Terms. If you do not agree, please do not use our website or services.
      </p>

      <section className="legal-section">
        <h2><Num>01</Num> Our Services</h2>
        <p>
          Power Design Electrical Ltd. provides residential and commercial electrical services in Calgary,
          Airdrie, and surrounding communities, performed by or under the supervision of licensed electricians.
          Information on this website is for general informational purposes and does not replace an on-site
          assessment by a qualified electrician.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>02</Num> Quotes, Bookings &amp; Pricing</h2>
        <ul>
          <li>Quotes and estimates are based on the information available at the time and may change following an on-site assessment.</li>
          <li>A booking is not confirmed until we acknowledge it in writing or by phone.</li>
          <li>Prices, promotions, and availability may change without notice. Promotions (such as discounts for first-time customers) are subject to their stated conditions and cannot be combined unless stated.</li>
          <li>Payment terms will be provided with your quote or invoice and are due as stated.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2><Num>03</Num> Scheduling, Cancellations &amp; Access</h2>
        <p>
          Please provide reasonable notice if you need to reschedule or cancel an appointment. You are
          responsible for providing safe and timely access to the work area. Delays or additional work
          discovered on site may affect timelines and cost, which we will discuss with you before proceeding
          where reasonably possible.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>04</Num> Workmanship &amp; Warranty</h2>
        <p>
          We perform our work in accordance with the Canadian Electrical Code and applicable provincial
          requirements. Any warranty we provide on our workmanship will be described in your quote or invoice.
          Manufacturer warranties on parts and equipment are provided by their respective manufacturers. Warranty
          coverage does not extend to issues caused by misuse, alterations by others, pre-existing conditions, or
          normal wear and tear.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>05</Num> Disclaimers &amp; Limitation of Liability</h2>
        <p>
          Our website is provided “as is” without warranties of any kind, to the fullest extent permitted by
          law. To the maximum extent permitted by applicable law, Power Design Electrical Ltd. will not be liable
          for any indirect, incidental, or consequential damages arising from your use of our website. Nothing in
          these Terms limits liability that cannot be limited under applicable law, including the laws of Alberta.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>06</Num> Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and images — is the property of Power
          Design Electrical Ltd. or its licensors and is protected by applicable intellectual property laws. You
          may not reproduce, distribute, or use our content without our prior written permission.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>07</Num> Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content,
          policies, or practices of those websites. Accessing third-party links is at your own risk.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>08</Num> Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Province of Alberta and the federal laws of Canada
          applicable therein. Any disputes will be subject to the exclusive jurisdiction of the courts of
          Alberta.
        </p>
      </section>

      <section className="legal-section">
        <h2><Num>09</Num> Changes &amp; Contact</h2>
        <p>
          We may update these Terms from time to time; the “Last updated” date reflects the latest version. For
          any questions about these Terms, contact us:
        </p>
        <div className="legal-contact-card">
          <span><strong>Power Design Electrical Ltd.</strong></span>
          <span>Email: <a href="mailto:powerdesignelectricalltd@gmail.com">powerdesignelectricalltd@gmail.com</a></span>
          <span>Phone: <a href="tel:14037712553">(403) 771-2553</a></span>
          <span>Airdrie, Alberta, Canada</span>
        </div>
      </section>
    </>
  );
}

export default function Legal({ tab = 'privacy' }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const isPrivacy = tab !== 'terms';

  useEffect(() => {
    document.body.classList.add('page-legal');
    return () => document.body.classList.remove('page-legal');
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [tab]);

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
        title={isPrivacy
          ? 'Privacy Policy | Power Design Electrical Ltd.'
          : 'Terms & Conditions | Power Design Electrical Ltd.'}
        description={isPrivacy
          ? 'How Power Design Electrical collects, uses and protects your personal information — a PIPEDA and Alberta PIPA compliant privacy policy covering cookies, analytics and advertising.'
          : 'The terms and conditions governing use of the Power Design Electrical website and our licensed electrical services in Calgary, Airdrie and surrounding areas.'}
        path={isPrivacy ? '/privacy' : '/terms'}
      />

      <LegalBg />

      <div className="legal-page">
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
                  onClick={(e) => { e.stopPropagation(); setAboutOpen(true); }}
                  aria-label="Open menu"
                >
                  <span /><span /><span />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <NavDrawer open={aboutOpen} onClose={() => setAboutOpen(false)} />

        <header className="legal-hero">
          <div className="container">
            <h1 className="legal-hero-title">
              {isPrivacy ? <>Privacy <em>Policy</em></> : <>Terms &amp; <em>Conditions</em></>}
            </h1>
            <p className="legal-hero-sub">
              {isPrivacy
                ? 'Your privacy matters. Here is exactly what we collect, why, and the control you have over it.'
                : 'The straightforward terms that apply when you use our website and our electrical services.'}
            </p>
            <div>
              <span className="legal-updated">Last updated · {UPDATED}</span>
            </div>
            <div className="legal-tabs" role="tablist" aria-label="Legal documents">
              <Link to="/privacy" className={`legal-tab${isPrivacy ? ' active' : ''}`} role="tab" aria-selected={isPrivacy}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`legal-tab${!isPrivacy ? ' active' : ''}`} role="tab" aria-selected={!isPrivacy}>
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </header>

        <main className="legal-body">
          <div className="legal-card">
            {isPrivacy ? <PrivacyContent /> : <TermsContent />}
          </div>
        </main>

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <span className="uplabel">— Ready when you are</span>
              <h2 style={{ marginTop: 14 }}>Get Professional Electrical Services From Trusted Calgary Electricians.</h2>
              <p>Licensed master electricians, transparent pricing, and code-compliant work — every time. Plus 10% off your first service.</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                <Link to="/" className="btn btn-primary btn-lg legal-cta-btn">
                  Claim Your 10% Discount Today
                  <svg className="arrow" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 6h14M15 6l-4-4M15 6l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                <h5>Company</h5>
                <ul>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/locations">Locations</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h5>Legal</h5>
                <ul>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms &amp; Conditions</Link></li>
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
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 Power Design Electrical LTD · All rights reserved · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
              <span>Licensed Master Electrician · Alberta · Insured to $2 million</span>
            </div>
          </div>
        </footer>

        <div className="call-bar" id="callBar" role="region" aria-label="Quick contact">
          <span className="call-bar-text">Need power back on?</span>
          <span className="call-bar-num">(403) 771-2553</span>
          <Link to="/" className="btn-primary">BOOK NOW!</Link>
        </div>
      </div>
    </>
  );
}
