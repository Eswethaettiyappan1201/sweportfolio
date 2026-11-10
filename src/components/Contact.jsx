import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { contactConfig } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Validate form inputs
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email format (e.g. name@domain.com).';
      }
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a message subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto query parameters
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Swetha,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${contactConfig.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Provide clear, truthful status feedback and initiate email client
    setStatusMessage({
      type: 'success',
      text: `Your email client is opening with your pre-filled inquiry. If your email app didn't launch automatically, you can write directly to ${contactConfig.email}.`
    });

    window.location.href = mailtoUrl;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactConfig.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  return (
    <section id="contact" className="section-wrapper" aria-labelledby="contact-heading">
      <div className="ambient-glow-right" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 id="contact-heading" className="section-title">
            Let's <span>Connect</span>
          </h2>
          <p className="section-subtitle">
            Have an opportunity, an idea, or a project in mind? Let's connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Social Cards Column */}
          <div className="contact-info-col">
            <div className="contact-summary-card card-base">
              <h3 className="contact-col-title">Reach Out Directly</h3>
              <p className="contact-col-desc">
                I am actively seeking internship opportunities, collaborative hackathons, and technical projects in AI, NLP, and software development. Feel free to connect or drop an email anytime.
              </p>

              {/* Direct Channels */}
              <div className="contact-methods-list">
                {/* 1. Email */}
                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="method-label">Email Address</span>
                    <a
                      href={`mailto:${contactConfig.email}`}
                      className="method-link"
                      title="Send email to Swetha E"
                    >
                      {contactConfig.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="copy-btn"
                    aria-label="Copy email address"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check size={16} className="text-pink" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* 2. LinkedIn */}
                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <LinkedinIcon size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="method-label">LinkedIn Profile</span>
                    <a
                      href={contactConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-link"
                    >
                      swetha-ettiyappan-52b932329
                    </a>
                  </div>
                </div>

                {/* 3. GitHub */}
                <div className="contact-method-item">
                  <div className="contact-method-icon">
                    <GithubIcon size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="method-label">GitHub Account</span>
                    <a
                      href={contactConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-link"
                    >
                      Eswethaettiyappan1201
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="contact-availability-badge">
                <span className="availability-dot" />
                <span>Open for Summer / Academic Internships</span>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form card-base" noValidate>
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">
                Fill in the form to compose a direct message via your default mail client.
              </p>

              {statusMessage && (
                <div className={`status-banner banner-${statusMessage.type}`}>
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 size={18} className="banner-icon" />
                  ) : (
                    <AlertCircle size={18} className="banner-icon" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email Address <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. priya@example.com"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  className={`form-input ${errors.subject ? 'input-error' : ''}`}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-submit">
                <Send size={18} />
                <span>Send Message</span>
              </button>

              <p className="form-footnote">
                Using direct mailto protocol. No third-party data tracking or external backend required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
