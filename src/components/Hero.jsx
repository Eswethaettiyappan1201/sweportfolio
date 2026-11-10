import React from 'react';
import { ArrowRight, Mail, ChevronDown, Sparkles, Brain, Code, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, contactConfig } from '../data/portfolioData';

export const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      {/* Subtle Ambient Background Gradients */}
      <div className="hero-glow-orb hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-orb hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Text Content Column */}
          <div className="hero-content">
            {/* Status Pill Badge */}
            <div className="hero-status-pill">
              <span className="pulsing-dot" />
              <span>{personalInfo.introLabel}</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="hero-title">
              <span className="hero-title-highlight">{personalInfo.name}</span>
            </h1>

            {/* Professional Headline */}
            <p className="hero-headline">
              {personalInfo.headline}
            </p>

            {/* Introduction Paragraph */}
            <p className="hero-intro">
              {personalInfo.introParagraph}
            </p>

            {/* Supporting Line */}
            <div className="hero-tagline-wrap">
              <Sparkles size={18} className="hero-tagline-icon" />
              <p className="hero-tagline">{personalInfo.tagline}</p>
            </div>

            {/* Call to Action Buttons */}
            <div className="hero-actions">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-primary"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-secondary"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="hero-socials">
              <span className="hero-social-label">Connect:</span>
              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={contactConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="hero-social-link"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase (Pure CSS / SVG Minimalist Geometric AI Art - No Photos) */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-art-card">
              {/* Decorative Concentric Rings */}
              <div className="art-ring art-ring-outer" />
              <div className="art-ring art-ring-middle" />
              <div className="art-ring art-ring-inner" />

              {/* Central Geometric Badge */}
              <div className="art-center-emblem">
                <div className="art-icon-glow">
                  <Brain size={48} className="art-icon-pink" />
                </div>
                <div className="art-emblem-text">AI & DATA</div>
              </div>

              {/* Floating Tech Chips / Geometric Nodes */}
              <div className="floating-chip chip-1">
                <Cpu size={16} />
                <span>Natural Language Processing</span>
              </div>
              <div className="floating-chip chip-2">
                <Code size={16} />
                <span>Python & Analytics</span>
              </div>
              <div className="floating-chip chip-3">
                <Sparkles size={16} />
                <span>Cloud & LLMs</span>
              </div>

              {/* Subtle Linear Accents */}
              <div className="art-decor-line line-horizontal" />
              <div className="art-decor-line line-vertical" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="scroll-indicator-link"
            aria-label="Scroll to About Me section"
          >
            <span className="scroll-text">Scroll Down</span>
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
            <ChevronDown size={18} className="scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};
