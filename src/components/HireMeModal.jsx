import { useState, useEffect } from 'react'
import {
  X, Mail, Phone, FileText, ArrowRight, Check, Copy,
  CheckCircle2, ExternalLink
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './HireMeModal.css'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.71 7.74C8.42 8.06 7.6 8.83 7.6 10.4C7.6 11.97 8.74 13.49 8.9 13.7C9.06 13.91 11.13 17.1 14.31 18.47C15.06 18.79 15.65 18.99 16.11 19.13C16.86 19.37 17.55 19.34 18.09 19.26C18.69 19.17 19.94 18.5 20.2 17.76C20.46 17.03 20.46 16.4 20.38 16.27C20.3 16.14 20.1 16.06 19.8 15.91C19.5 15.76 18.03 15.04 17.75 14.94C17.47 14.84 17.27 14.79 17.07 15.1C16.87 15.41 16.3 16.07 16.12 16.27C15.94 16.47 15.77 16.5 15.47 16.35C15.17 16.2 14.21 15.89 13.07 14.87C12.19 14.08 11.59 13.11 11.42 12.81C11.24 12.51 11.4 12.35 11.55 12.2C11.69 12.06 11.85 11.84 12.01 11.66C12.16 11.47 12.21 11.34 12.31 11.14C12.41 10.94 12.36 10.76 12.29 10.61C12.21 10.46 11.61 8.98 11.36 8.38C11.11 7.79 10.86 7.87 10.68 7.86C10.51 7.86 10.31 7.85 10.11 7.85C9.91 7.85 9.59 7.93 9.53 7.34Z"/>
  </svg>
)

export default function HireMeModal({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopyEmail = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText('hp0920230@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText('+919313945479')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleViewResume = () => {
    onClose()
    navigate('/resume')
  }

  return (
    <div className="hire-modal-backdrop" onClick={onClose}>
      <div className="hire-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Gradient Accent Line */}
        <div className="hire-modal-accent" />

        {/* Modal Header */}
        <div className="hire-modal-header">
          <div className="hire-header-top-bar">
            <div className="hire-availability-pill">
              <span className="hire-pulse-dot" />
              <span>Available for Hire · Immediate Joining</span>
            </div>
            <button
              type="button"
              className="hire-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>

          <div className="hire-profile-row">
            <div className="hire-avatar-container">
              <div className="hire-avatar-ring" />
              <div className="hire-avatar-badge">HP</div>
            </div>
            <div className="hire-profile-details">
              <h2 className="hire-modal-title">
                Let's Connect &amp; <span className="grad-text">Work Together</span>
              </h2>
              <p className="hire-modal-subtitle">
                Harsh Prajapati · <strong>Frontend &amp; MERN Stack Developer</strong>
              </p>
              <div className="hire-meta-tags">
                <span className="hire-meta-item">🏢 Limbani Software</span>
                <span className="hire-meta-item">📍 Halol, Gujarat</span>
                <span className="hire-meta-item">💼 Full-time / Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Channels List */}
        <div className="hire-channels-list">
          {/* Email Channel */}
          <div className="hire-channel-row email-highlight">
            <div className="hire-channel-icon-wrap email">
              <Mail size={22} />
            </div>
            <div className="hire-channel-info">
              <div className="hire-channel-header">
                <span className="hire-channel-title">Direct Email</span>
                <span className="hire-channel-badge">Recommended for HR</span>
              </div>
              <div className="hire-channel-value">hp0920230@gmail.com</div>
              <div className="hire-channel-desc">
                Pre-formatted hiring &amp; interview invitation template
              </div>
            </div>
            <div className="hire-channel-actions">
              <button
                type="button"
                className="hire-copy-btn"
                onClick={handleCopyEmail}
                title="Copy email address"
              >
                {copiedEmail ? <Check size={13} color="var(--green)" /> : <Copy size={13} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href="mailto:hp0920230@gmail.com?subject=Job%20Opportunity%20%7C%20Interview%20Invitation%20-%20Harsh%20Prajapati&body=Hi%20Harsh,%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20invite%20you%20for%20an%20interview%20regarding%20a%20developer%20role%20at%20our%20company.%0D%0A%0D%0ARole:%20%0D%0ACompany:%20%0D%0ALocation/Remote:%20%0D%0A"
                className="hire-cta-primary"
              >
                <span>Send Email</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* LinkedIn Channel */}
          <div className="hire-channel-row">
            <div className="hire-channel-icon-wrap linkedin">
              <LinkedInIcon />
            </div>
            <div className="hire-channel-info">
              <div className="hire-channel-header">
                <span className="hire-channel-title">LinkedIn Profile</span>
                <span className="hire-channel-badge-subtle">Professional Network</span>
              </div>
              <div className="hire-channel-value">linkedin.com/in/harsh-prajapati-982304293</div>
              <div className="hire-channel-desc">
                Direct InMail, credentials, and full background
              </div>
            </div>
            <div className="hire-channel-actions">
              <a
                href="https://www.linkedin.com/in/harsh-prajapati-982304293/"
                target="_blank"
                rel="noreferrer"
                className="hire-cta-secondary"
              >
                <span>View Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* WhatsApp & Direct Call */}
          <div className="hire-channel-row">
            <div className="hire-channel-icon-wrap whatsapp">
              <WhatsAppIcon />
            </div>
            <div className="hire-channel-info">
              <div className="hire-channel-header">
                <span className="hire-channel-title">WhatsApp &amp; Direct Call</span>
                <span className="hire-channel-badge-fast">Fastest Response</span>
              </div>
              <div className="hire-channel-value">+91 93139 45479</div>
              <div className="hire-channel-desc">
                Instant messaging or direct telephone call for urgent discussions
              </div>
            </div>
            <div className="hire-channel-actions">
              <button
                type="button"
                className="hire-copy-btn"
                onClick={handleCopyPhone}
                title="Copy phone number"
              >
                {copiedPhone ? <Check size={13} color="var(--green)" /> : <Phone size={13} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href="https://wa.me/919313945479?text=Hi%20Harsh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity."
                target="_blank"
                rel="noreferrer"
                className="hire-cta-whatsapp"
              >
                <span>WhatsApp Chat</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* 1-Page ATS Resume */}
          <div className="hire-channel-row">
            <div className="hire-channel-icon-wrap resume">
              <FileText size={22} />
            </div>
            <div className="hire-channel-info">
              <div className="hire-channel-header">
                <span className="hire-channel-title">1-Page ATS Resume</span>
                <span className="hire-channel-badge-subtle">ATS Single-Page Format</span>
              </div>
              <div className="hire-channel-value">Standard Curriculum Vitae (PDF)</div>
              <div className="hire-channel-desc">
                Clean single-page layout with verified skills, Limbani Software experience &amp; education
              </div>
            </div>
            <div className="hire-channel-actions">
              <button
                type="button"
                className="hire-cta-secondary"
                onClick={handleViewResume}
              >
                <span>View &amp; Export</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="hire-modal-footer">
          <div className="hire-footer-status">
            <CheckCircle2 size={16} color="var(--green)" />
            <span>Typically responds within a few hours</span>
          </div>
          <a href="tel:+919313945479" className="hire-footer-call">
            <Phone size={14} />
            <span>Call Directly: +91 93139 45479</span>
          </a>
        </div>
      </div>
    </div>
  )
}
