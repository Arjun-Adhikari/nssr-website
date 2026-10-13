"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

/**
 * Port of `buildFooterHTML` in `assets/js/main.js`. The newsletter form is
 * still a front-end-only demo, exactly as before: it validates, then reveals
 * the success line instead of posting anywhere.
 */
export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      {/* Left Panel: Blue */}
      <div className="footer-left">
        <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
          <div className="footer-left-grid">
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/bluelogonobg.png"
                alt="NSSR Logo"
                className="footer-logo"
              />
              <address className="footer-address">
                Kathmandu, Nepal
                <br />
                info@nssrnepal.org
              </address>
              <div className="footer-socials" aria-label="Social media links">
                <a
                  href="https://www.linkedin.com/company/nssrnepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/nssrnepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/nssrnepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/nssrnepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            <nav className="footer-nav" aria-label="Footer navigation">
              <div className="footer-nav-group">
                <h3 className="footer-nav-title">Our Actions</h3>
                <ul className="footer-nav-list">
                  <li>
                    <Link href="/research">Research</Link>
                  </li>
                  <li>
                    <Link href="/nsrf">Summer Research Fellowship</Link>
                  </li>
                  <li>
                    <Link href="/research-pathways">Research Pathways</Link>
                  </li>
                  <li>
                    <Link href="/membership">Participation Pathways</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-group">
                <h3 className="footer-nav-title">News</h3>
                <ul className="footer-nav-list">
                  <li>
                    <Link href="/blog">The Dispatch</Link>
                  </li>
                  <li>
                    <Link href="/events">Events Archive</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-group">
                <h3 className="footer-nav-title">Events</h3>
                <ul className="footer-nav-list">
                  <li>
                    <Link href="/science-beyond-classroom">
                      Science Beyond the Classroom
                    </Link>
                  </li>
                  <li>
                    <Link href="/student-empowerment">
                      Student Empowerment Initiative
                    </Link>
                  </li>
                  <li>
                    <Link href="/outreach">Outreach Programs</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Right Panel: White with Curve */}
      <div className="footer-right">
        <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
          <div className="footer-right-content">
            <h2 className="footer-newsletter-title">Academic Dispatch</h2>
            <p className="footer-newsletter-description">
              Stay up-to-date with the latest research opportunities, events,
              and insights from NSSR.
            </p>
            <form
              id="newsletter-form"
              className="footer-newsletter-form"
              noValidate
              onSubmit={onSubmit}
            >
              <div className="footer-form-row">
                <div className="footer-form-group">
                  <label htmlFor="first-name" className="footer-form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    className="footer-form-input"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="last-name" className="footer-form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last_name"
                    className="footer-form-input"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              <div className="footer-form-group footer-form-group--full">
                <label htmlFor="email-address" className="footer-form-label">
                  E-mail address
                </label>
                <input
                  type="email"
                  id="email-address"
                  name="email"
                  className="footer-form-input"
                  placeholder="E-mail address"
                  required
                />
              </div>
              <div className="footer-form-consent">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  name="privacy_consent"
                  className="footer-form-checkbox"
                  required
                />
                <label
                  htmlFor="privacy-consent"
                  className="footer-form-consent-label"
                >
                  By submitting this form I agree with the privacy terms and
                  conditions.
                </label>
              </div>
              <button
                type="submit"
                className="footer-form-submit"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            </form>
            <p
              id="newsletter-success"
              className={`footer-form-success${subscribed ? "" : " hidden"}`}
              role="status"
            >
              Successfully subscribed to our newsletter!
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; 2026 Nepalese Society of Student Researchers. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}