import React from 'react';
import { Brain, Cloud, Code2, Sparkles, Layers, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={26} className="category-header-icon" />;
      case 'Cloud':
        return <Cloud size={26} className="category-header-icon" />;
      case 'Code2':
        return <Code2 size={26} className="category-header-icon" />;
      default:
        return <Cpu size={26} className="category-header-icon" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper" aria-labelledby="skills-heading">
      <div className="ambient-glow-right" aria-hidden="true" />
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 id="skills-heading" className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="section-subtitle">
            Areas of study, practical foundations, and emerging technology interests
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={group.category} className="skill-category-card card-base">
              {/* Category Header */}
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(group.icon)}
                </div>
                <div>
                  <h3 className="category-title">{group.category}</h3>
                  <span className="category-number">0{index + 1}</span>
                </div>
              </div>

              <p className="category-desc">{group.description}</p>

              {/* Skills Tags List */}
              <div className="skill-pills-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill-item">
                    <div className="pill-dot" />
                    <div className="pill-content">
                      <span className="pill-name">{skill.name}</span>
                      <span className="pill-level-tag">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Subtle Corner Line */}
              <div className="card-corner-accent" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
