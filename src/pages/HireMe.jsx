import { useState } from 'react'
import {
  Mail, Phone, FileText, ArrowRight, ArrowLeft, Check, Copy,
  Sparkles, CheckCircle2, ExternalLink, Briefcase, GraduationCap,
  MapPin, Clock, Award, ShieldCheck
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import './HireMe.css'
import './Page.css'

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.71 7.74C8.42 8.06 7.6 8.83 7.6 10.4C7.6 11.97 8.74 13.49 8.9 13.7C9.06 13.91 11.13 17.1 14.31 18.47C15.06 18.79 15.65 18.99 16.11 19.13C16.86 19.37 17.55 19.34 18.09 19.26C18.69 19.17 19.94 18.5 20.2 17.76C20.46 17.03 20.46 16.4 20.38 16.27C20.3 16.14 20.1 16.06 19.8 15.91C19.5 15.76 18.03 15.04 17.75 14.94C17.47 14.84 17.27 14.79 17.07 15.1C16.87 15.41 16.3 16.07 16.12 16.27C15.94 16.47 15.77 16.5 15.47 16.35C15.17 16.2 14.21 15.89 13.07 14.87C12.19 14.08 11.59 13.11 11.42 12.81C11.24 12.51 11.4 12.35 11.55 12.2C11.69 12.06 11.85 11.84 12.01 11.66C12.16 11.47 12.21 11.34 12.31 11.14C12.41 10.94 12.36 10.76 12.29 10.61C12.21 10.46 11.61 8.98 11.36 8.38C11.11 7.79 10.86 7.87 10.68 7.86C10.51 7.86 10.31 7.85 10.11 7.85C9.91 7.85 9.59 7.93 9.53 7.34Z"/>
  </svg>
)

export default function HireMe() {
  const navigate = useNavigate()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hp0920230@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919313945479')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2200)
  }

  return (
    <div className="page hire-page animate-fade-up">
      {/* Back Button Navigation */}
      <div className="hire-top-bar">
        <button
          type="button"
          className="hire-back-btn"
          onClick={handleBack}
          aria-label="Back to previous page"
          title="Back to previous page"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
      </div>

      {/* Section Header */}
      <div className="section-header">
        <div className="tag">✦ Recruiter &amp; Hiring Portal</div>
        <h1 className="section-title">
          Hire <span className="grad-text">Harsh Prajapati</span>
        </h1>
        <p className="section-sub">
          Frontend &amp; MERN Stack Developer with professional CRM experience, AI workflows, and fast onboarding capability.
        </p>
      </div>

      {/* Hero Overview Card */}
      <div className="hire-hero-card glass">
        <div className="hire-hero-left">
          <div className="hire-hero-avatar-wrap">
            <div className="hire-hero-avatar-ring" />
            <div className="hire-hero-avatar">HP</div>
            <span className="hire-hero-dot" />
          </div>
          <div className="hire-hero-info">
            <div className="hire-hero-badge">
              <Sparkles size={13} />
              <span>Available for Hire · Immediate Joining</span>
            </div>
            <h2 className="hire-hero-name">Harsh Prajapati</h2>
            <p className="hire-hero-role">
              Frontend &amp; MERN Stack Developer · <strong>Limbani Software</strong>
            </p>
            <div className="hire-hero-tags">
              <span>📍 Halol, Gujarat, India</span>
              <span>·</span>
              <span>💼 Open to Remote, Hybrid &amp; Relocation</span>
              <span>·</span>
              <span>⚡ Full-Time / Contract</span>
            </div>
          </div>
        </div>

        <div className="hire-hero-stats">
          <div className="hire-stat-box">
            <span className="hire-stat-number">7.67</span>
            <span className="hire-stat-label">B.E. IT CGPA (2025)</span>
          </div>
          <div className="hire-stat-box">
            <span className="hire-stat-number">2+</span>
            <span className="hire-stat-label">Core Enterprise CRMs</span>
          </div>
          <div className="hire-stat-box">
            <span className="hire-stat-number">MERN + AI</span>
            <span className="hire-stat-label">Primary Stack Focus</span>
          </div>
        </div>
      </div>

      {/* Quick Recruiter Channels Grid */}
      <div className="hire-section-heading">
        <h3>Direct Recruiter Channels</h3>
        <p>Choose your preferred communication channel to initiate an interview or technical screening:</p>
      </div>

      <div className="hire-grid-channels">
        {/* Email Card (Primary) */}
        <div className="hire-card-item email-featured glass">
          <div className="hire-card-top">
            <div className="hire-card-icon email-icon">
              <Mail size={24} />
            </div>
            <span className="hire-card-pill pill-purple">Recommended for HR</span>
          </div>
          <h4 className="hire-card-title">Send Job Invitation Email</h4>
          <p className="hire-card-email-val">hp0920230@gmail.com</p>
          <p className="hire-card-body-text">
            Composes a pre-formatted email with hiring details, role requirements, and interview invitation.
          </p>
          <div className="hire-card-actions-wrap">
            <a
              href="mailto:hp0920230@gmail.com?subject=Job%20Opportunity%20%7C%20Interview%20Invitation%20-%20Harsh%20Prajapati&body=Hi%20Harsh,%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20would%20love%20to%20invite%20you%20for%20an%20interview%20regarding%20a%20developer%20role%20at%20our%20company.%0D%0A%0D%0ARole:%20%0D%0ACompany:%20%0D%0ALocation/Remote:%20%0D%0A"
              className="btn-primary"
            >
              <span>Compose Email</span>
              <ArrowRight size={15} />
            </a>
            <button type="button" className="btn-outline" onClick={handleCopyEmail}>
              {copiedEmail ? <Check size={14} color="var(--green)" /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Copied Email' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="hire-card-item glass">
          <div className="hire-card-top">
            <div className="hire-card-icon linkedin-icon">
              <LinkedInIcon />
            </div>
            <span className="hire-card-pill pill-blue">Professional Network</span>
          </div>
          <h4 className="hire-card-title">Connect on LinkedIn</h4>
          <p className="hire-card-email-val">linkedin.com/in/harsh-prajapati-982304293</p>
          <p className="hire-card-body-text">
            Review full career recommendations, verified skills, and send a direct InMail message.
          </p>
          <div className="hire-card-actions-wrap">
            <a
              href="https://www.linkedin.com/in/harsh-prajapati-982304293/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>View LinkedIn Profile</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* WhatsApp & Direct Call Card */}
        <div className="hire-card-item glass">
          <div className="hire-card-top">
            <div className="hire-card-icon whatsapp-icon">
              <WhatsAppIcon />
            </div>
            <span className="hire-card-pill pill-green">Fastest Response</span>
          </div>
          <h4 className="hire-card-title">Instant WhatsApp &amp; Call</h4>
          <p className="hire-card-email-val">+91 93139 45479</p>
          <p className="hire-card-body-text">
            Direct chat for fast responses, rapid recruiter screening, and quick interview scheduling.
          </p>
          <div className="hire-card-actions-wrap">
            <a
              href="https://wa.me/919313945479?text=Hi%20Harsh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ background: '#25d366', borderColor: '#25d366' }}
            >
              <span>WhatsApp Chat</span>
              <ArrowRight size={15} />
            </a>
            <a href="tel:+919313945479" className="btn-outline">
              <Phone size={14} />
              <span>Call</span>
            </a>
            <button type="button" className="btn-outline" onClick={handleCopyPhone} title="Copy phone number">
              {copiedPhone ? <Check size={14} color="var(--green)" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Resume Card */}
        <div className="hire-card-item glass">
          <div className="hire-card-top">
            <div className="hire-card-icon resume-icon">
              <FileText size={24} />
            </div>
            <span className="hire-card-pill pill-violet">1-Page ATS Document</span>
          </div>
          <h4 className="hire-card-title">1-Page ATS Resume</h4>
          <p className="hire-card-email-val">Single-Page PDF &amp; Document</p>
          <p className="hire-card-body-text">
            Clean 1-page curriculum vitae covering Limbani Software experience, skills, projects, and education.
          </p>
          <div className="hire-card-actions-wrap">
            <Link to="/resume" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              <span>View &amp; Export 1-Page Resume</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Recruiter At-A-Glance Information Table */}
      <div className="hire-details-grid">
        <div className="hire-details-card glass">
          <h3 className="hire-details-title">
            <Briefcase size={18} className="grad-icon" />
            <span>Candidate Overview &amp; Fit</span>
          </h3>
          <div className="hire-table">
            <div className="hire-row">
              <span className="hire-label">Notice Period:</span>
              <span className="hire-val highlight-green">Immediate / Zero Days</span>
            </div>
            <div className="hire-row">
              <span className="hire-label">Current Role:</span>
              <span className="hire-val">Frontend Developer at Limbani Software (Sep 2025 – Present)</span>
            </div>
            <div className="hire-row">
              <span className="hire-label">Internship:</span>
              <span className="hire-val">Web Development Intern at Enlighten Infosystems (Feb 2025 – May 2025)</span>
            </div>
            <div className="hire-row">
              <span className="hire-label">Primary Stack:</span>
              <span className="hire-val">React.js, JavaScript (ES6+), Node.js, Express.js, MongoDB, MySQL</span>
            </div>
            <div className="hire-row">
              <span className="hire-label">Specialties:</span>
              <span className="hire-val">CRM Systems, REST APIs, Razorpay, AI Agents, Prompt Engineering</span>
            </div>
            <div className="hire-row">
              <span className="hire-label">Education:</span>
              <span className="hire-val">B.E. (Information Technology) · VIT Vadodara · 7.67 CGPA</span>
            </div>
            <div className="hire-row">
              <span className="hire-label">Work Preference:</span>
              <span className="hire-val">Full-time, Contract, Remote, Hybrid, or On-site Relocation</span>
            </div>
          </div>
        </div>

        <div className="hire-details-card glass">
          <h3 className="hire-details-title">
            <ShieldCheck size={18} className="grad-icon" />
            <span>Why Hire Harsh Prajapati?</span>
          </h3>
          <div className="hire-why-list">
            <div className="hire-why-item">
              <CheckCircle2 size={18} color="var(--purple)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong>Proven CRM &amp; Workflow Architecture:</strong>
                <p>Contributed to high-volume enterprise platforms including Native-Shipper CRM, Temu-Connector CRM, and Shopdot with automated workflows.</p>
              </div>
            </div>
            <div className="hire-why-item">
              <CheckCircle2 size={18} color="var(--purple)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong>AI-Assisted Engineering:</strong>
                <p>Leverages AI Agents, modern LLM workflows, and prompt engineering to accelerate feature delivery, testing, and debugging.</p>
              </div>
            </div>
            <div className="hire-why-item">
              <CheckCircle2 size={18} color="var(--purple)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong>Agile Collaboration &amp; Clean Code:</strong>
                <p>Strong Git version control habits, reusable component architectures, cross-browser compatibility, and seamless REST API integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
