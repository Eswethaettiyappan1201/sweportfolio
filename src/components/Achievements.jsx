import React from 'react';
import { Trophy, Medal, Sparkles, Award } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="section-wrapper section-alt" aria-labelledby="achievements-heading">
      <div className="ambient-glow-left" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Honors & Milestones</span>
          </div>
          <h2 id="achievements-heading" className="section-title">
            Achievements <span>& Recognition</span>
          </h2>
          <p className="section-subtitle">
            Competitive milestones and academic recognitions
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-card card-base">
              {/* Background Geometric Watermark */}
              <div className="achievement-watermark" aria-hidden="true">
                {item.rank}
              </div>

              {/* Card Header with Big Rank and Icon */}
              <div className="achievement-top-row">
                <div className="achievement-rank-wrap">
                  <span className="achievement-rank-number">{item.rank}</span>
                  <span className="achievement-rank-label">{item.rankLabel}</span>
                </div>
                <div className="achievement-icon-circle">
                  {item.id === 'sih' ? (
                    <Trophy size={28} className="achievement-badge-icon" />
                  ) : (
                    <Medal size={28} className="achievement-badge-icon" />
                  )}
                </div>
              </div>

              {/* Event Badge */}
              <div className="achievement-badge-tag">
                <Sparkles size={13} />
                <span>{item.highlightBadge}</span>
              </div>

              {/* Title & Description */}
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>

              {/* Card Bottom Accent Border */}
              <div className="achievement-bottom-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
