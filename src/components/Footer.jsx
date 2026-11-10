import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo, navLinks, contactConfig } from '../data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper" role="contentinfo">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="footer-logo">
              <span className="logo-symbol">S</span>
              <span className="logo-text">{personalInfo.logoText}</span>
            </a>
            <p className="footer-tagline">
              B.Tech Artificial Intelligence & Data Science Student | Aspiring AI Developer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Footer Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <p className="footer-credit">
            Designed & Developed by <span>{personalInfo.name}</span>
          </p>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
