import React from 'react';
import { Award, Code, Cloud, Sparkles, Cpu, BarChart3, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={22} className="cert-type-icon" />;
      case 'Cloud':
        return <Cloud size={22} className="cert-type-icon" />;
      case 'Sparkles':
        return <Sparkles size={22} className="cert-type-icon" />;
      case 'Cpu':
        return <Cpu size={22} className="cert-type-icon" />;
      case 'BarChart3':
        return <BarChart3 size={22} className="cert-type-icon" />;
      case 'Award':
      default:
        return <Award size={22} className="cert-type-icon" />;
    }
  };

  return (
    <section id="certifications" className="section-wrapper" aria-labelledby="certs-heading">
      <div className="ambient-glow-right" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 id="certs-heading" className="section-title">
            Certifications <span>& Learning</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning, one milestone at a time
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card card-base">
              {/* Card Top Row: Issuer & Icon */}
              <div className="cert-header">
                <div className="cert-icon-container">
                  {getCertIcon(cert.icon)}
                </div>
                <div className="cert-issuer-badge">
                  <span className="issuer-dot" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="cert-content">
                <span className="cert-category-tag">{cert.badge}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>
              </div>

              {/* Card Footer: Configurable Verification Link */}
              <div className="cert-footer">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-active"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="cert-link-placeholder">
                    <ShieldCheck size={14} className="placeholder-icon" />
                    <span>Certificate link to be added</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
