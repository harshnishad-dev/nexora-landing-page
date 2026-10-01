import React from 'react';
import { Leaf } from 'lucide-react';
import { footerData } from '../data/homeData';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top-row">
          <a href="#home" className="footer-brand" onClick={scrollToTop}>
            <div className="brand-logo-icon footer-leaf-wrap">
              <Leaf size={20} className="leaf-svg" />
            </div>
            <span className="footer-brand-name">{footerData.brand}</span>
          </a>

          <nav className="footer-nav">
            <ul className="footer-nav-list">
              {footerData.links.map((link) => (
                <li key={link} className="footer-nav-item">
                  <a href={`#${link.toLowerCase()}`} className="footer-nav-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link-btn"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link-btn"
              aria-label="Twitter"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link-btn"
              aria-label="Facebook"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.779 0-1.332.149-1.658.447-.326.299-.489.789-.489 1.47v2.063h4.354l-.568 3.667h-3.786v7.98H9.101z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link-btn"
              aria-label="Instagram"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="social-link-btn"
              aria-label="YouTube"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">{footerData.copyright}</p>
          <div className="footer-legal-links">
            {footerData.legal.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="footer-legal-link">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
