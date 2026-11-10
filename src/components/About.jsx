import React from 'react';
import { GraduationCap, Landmark, Sparkles, UserCheck, BookOpen, HeartHandshake } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section-wrapper section-alt" aria-labelledby="about-heading">
      <div className="ambient-glow-left" aria-hidden="true" />
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Introduction</span>
          </div>
          <h2 id="about-heading" className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">A little about my journey</p>
        </div>

        <div className="about-grid">
          {/* Main Biography Card */}
          <div className="about-bio-card card-base">
            <div className="bio-card-header">
              <div className="bio-icon-badge">
                <UserCheck size={24} className="bio-icon" />
              </div>
              <div>
                <h3 className="bio-card-title">{personalInfo.name}</h3>
                <p className="bio-card-role">B.Tech Artificial Intelligence & Data Science</p>
              </div>
            </div>

            <div className="bio-card-body">
              <p className="bio-text">
                {personalInfo.bio}
              </p>
            </div>

            <div className="bio-footer-highlight">
              <HeartHandshake size={20} className="highlight-icon" />
              <span>Dedicated to building ethical, accessible, and high-impact AI technology.</span>
            </div>
          </div>

          {/* Three Key Info Cards */}
          <div className="about-cards-column">
            {/* 1. Education Card */}
            <div className="info-stat-card card-base">
              <div className="info-stat-icon-wrap">
                <GraduationCap size={26} className="info-stat-icon" />
              </div>
              <div className="info-stat-content">
                <span className="info-stat-label">Education</span>
                <h4 className="info-stat-value">{personalInfo.education.degree}</h4>
              </div>
            </div>

            {/* 2. College Card */}
            <div className="info-stat-card card-base">
              <div className="info-stat-icon-wrap">
                <Landmark size={26} className="info-stat-icon" />
              </div>
              <div className="info-stat-content">
                <span className="info-stat-label">College</span>
                <h4 className="info-stat-value">{personalInfo.education.institution}</h4>
              </div>
            </div>

            {/* 3. Interests Card */}
            <div className="info-stat-card card-base">
              <div className="info-stat-icon-wrap">
                <Sparkles size={26} className="info-stat-icon" />
              </div>
              <div className="info-stat-content">
                <span className="info-stat-label">Interests</span>
                <h4 className="info-stat-value">
                  {personalInfo.interests.join(', ')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
