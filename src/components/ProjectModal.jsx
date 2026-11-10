import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Target, Lightbulb, Cpu, FileQuestion } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-badge">Project Deep Dive</span>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Overview Section */}
          <div className="modal-section">
            <div className="modal-section-heading">
              <Lightbulb size={18} className="modal-heading-icon" />
              <h4>Overview & Context</h4>
            </div>
            <p className="modal-text">{project.shortDescription}</p>
          </div>

          {/* Problem Statement */}
          <div className="modal-section">
            <div className="modal-section-heading">
              <Target size={18} className="modal-heading-icon" />
              <h4>Problem Statement</h4>
            </div>
            <p className="modal-text">{project.details.problemStatement}</p>
          </div>

          {/* Objectives */}
          <div className="modal-section">
            <div className="modal-section-heading">
              <CheckCircle2 size={18} className="modal-heading-icon" />
              <h4>Key Objectives</h4>
            </div>
            <p className="modal-text">{project.details.objectives}</p>
          </div>

          {/* Proposed Solution & Architecture */}
          <div className="modal-section">
            <div className="modal-section-heading">
              <Cpu size={18} className="modal-heading-icon" />
              <h4>Methodology & Solution</h4>
            </div>
            <p className="modal-text">{project.details.solution}</p>
          </div>

          {/* Technologies Used */}
          <div className="modal-section">
            <h4 className="modal-section-title-simple">Technologies & Architecture</h4>
            <div className="modal-tags-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes & Impact */}
          <div className="modal-section">
            <div className="modal-section-heading">
              <CheckCircle2 size={18} className="modal-heading-icon" />
              <h4>Expected Outcomes & Impact</h4>
            </div>
            <p className="modal-text">{project.details.outcomes}</p>
          </div>

          {/* User Configuration Notice */}
          <div className="modal-info-note">
            <FileQuestion size={18} className="note-icon" />
            <p>
              <strong>Repository & Demo Configuration:</strong> This project structure is verified. When your repository or live demonstration is ready, configure the links in <code>src/data/portfolioData.js</code>.
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="modal-footer">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={16} />
              <span>View Repository</span>
            </a>
          ) : (
            <span className="status-pill-neutral">
              <GithubIcon size={14} />
              <span>Repository link to be added</span>
            </span>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
          ) : (
            <span className="status-pill-neutral">
              <ExternalLink size={14} />
              <span>Project details coming soon</span>
            </span>
          )}

          <button
            type="button"
            className="btn btn-ghost btn-sm close-action-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
