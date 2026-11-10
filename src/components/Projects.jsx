import React, { useState } from 'react';
import { ArrowUpRight, MessageSquareCode, Trash2, Cpu, Globe2, ShieldCheck, Scale, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper section-alt" aria-labelledby="projects-heading">
      <div className="ambient-glow-left" aria-hidden="true" />
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 id="projects-heading" className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">Turning ideas into practical solutions</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={project.id} className="project-card card-base">
              {/* Abstract CSS Graphic Illustration (No Photographs) */}
              <div className="project-visual-canvas" aria-hidden="true">
                {project.id === 'legal-chatbot' ? (
                  /* Graphic for Multilingual Legal Chatbot */
                  <div className="graphic-canvas canvas-chatbot">
                    <div className="graphic-grid-overlay" />
                    <div className="chat-node-bubble bubble-left">
                      <Globe2 size={20} className="node-icon" />
                      <span>Multilingual Input</span>
                    </div>
                    <div className="chat-connection-beam" />
                    <div className="chat-core-node">
                      <Scale size={28} className="core-icon" />
                      <span className="core-text">Legal & Governance AI</span>
                    </div>
                    <div className="chat-node-bubble bubble-right">
                      <ShieldCheck size={20} className="node-icon" />
                      <span>Verified Guidance</span>
                    </div>
                  </div>
                ) : (
                  /* Graphic for Automatic Waste Segregator */
                  <div className="graphic-canvas canvas-segregator">
                    <div className="graphic-grid-overlay" />
                    <div className="segregator-intake-funnel">
                      <Trash2 size={24} className="intake-icon" />
                      <span>Refuse Intake</span>
                    </div>
                    <div className="sensor-detect-zone">
                      <div className="sensor-scan-line" />
                      <span className="sensor-label">Automated Dry/Wet Sensor</span>
                    </div>
                    <div className="chambers-duo">
                      <div className="chamber chamber-dry">
                        <span>Dry Chamber</span>
                      </div>
                      <div className="chamber chamber-wet">
                        <span>Wet Chamber</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Project Index Badge */}
                <div className="project-index-badge">0{index + 1}</div>
              </div>

              {/* Project Card Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">
                  {project.shortDescription}
                </p>

                {/* Key Highlights */}
                <div className="project-highlights-box">
                  <span className="highlights-header">
                    <Sparkles size={14} className="sparkle-icon" />
                    Key Focus:
                  </span>
                  <ul className="highlights-list">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                {/* Technology Pills */}
                <div className="project-tech-pills">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-card-actions">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                    aria-label={`View full details for ${project.title}`}
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </button>

                  {/* Repository link status */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Repository</span>
                    </a>
                  ) : (
                    <span className="status-label-subtle">
                      Project details coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
