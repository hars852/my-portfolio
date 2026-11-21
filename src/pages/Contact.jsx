import { Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import './Page.css'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9 7.42 8.71 7.74C8.42 8.06 7.6 8.83 7.6 10.4C7.6 11.97 8.74 13.49 8.9 13.7C9.06 13.91 11.13 17.1 14.31 18.47C15.06 18.79 15.65 18.99 16.11 19.13C16.86 19.37 17.55 19.34 18.09 19.26C18.69 19.17 19.94 18.5 20.2 17.76C20.46 17.03 20.46 16.4 20.38 16.27C20.3 16.14 20.1 16.06 19.8 15.91C19.5 15.76 18.03 15.04 17.75 14.94C17.47 14.84 17.27 14.79 17.07 15.1C16.87 15.41 16.3 16.07 16.12 16.27C15.94 16.47 15.77 16.5 15.47 16.35C15.17 16.2 14.21 15.89 13.07 14.87C12.19 14.08 11.59 13.11 11.42 12.81C11.24 12.51 11.4 12.35 11.55 12.2C11.69 12.06 11.85 11.84 12.01 11.66C12.16 11.47 12.21 11.34 12.31 11.14C12.41 10.94 12.36 10.76 12.29 10.61C12.21 10.46 11.61 8.98 11.36 8.38C11.11 7.79 10.86 7.87 10.68 7.86C10.51 7.86 10.31 7.85 10.11 7.85C9.91 7.85 9.59 7.93 9.53 7.34Z"/>
  </svg>
)

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hp0920230@gmail.com',
    href: 'mailto:hp0920230@gmail.com?subject=Regarding%20Portfolio%20Inquiry%20-%20Harsh%20Prajapati'
  },
  {
    icon: <WhatsAppIcon />,
    label: 'Phone / WhatsApp',
    value: '+91 93139 45479',
    href: 'https://wa.me/919313945479'
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/harsh-prajapati-982304293',
    href: 'https://www.linkedin.com/in/harsh-prajapati-982304293/'
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'github.com/hars852',
    href: 'https://github.com/hars852'
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Halol, Gujarat, India',
    href: null
  },
]

export default function Contact() {
  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Direct Contact</div>
        <h2 className="section-title">Get In <span className="grad-text">Touch</span></h2>
        <p className="section-sub">Have a project, role, or collaboration in mind? Reach out directly via WhatsApp or Email!</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Profile & Info */}
        <div className="contact-info">
          <div className="contact-info-card glass">
            <div className="contact-info-title">Let's Connect</div>
            <div className="contact-info-desc">
              I'm currently working at Limbani Software and always open to discussing new opportunities,
              CRM platforms, business web applications, AI-assisted workflows, and exciting software collaborations.
            </div>
            <div className="contact-items">
              {contactItems.map((item, i) => (
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="contact-item"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    title={item.label}
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Direct Quick Connect Channels (Replaces form) */}
        <div className="contact-direct-card glass">
          <div>
            <div className="contact-direct-badge">✦ Instant Reach</div>
            <h3 className="contact-direct-heading">Quick Direct Reach</h3>
            <p className="contact-direct-subtitle">
              Reach out to me directly without waiting. Click on WhatsApp for an immediate chat or Email to compose a message.
            </p>

            <div className="direct-channels-grid">
              {/* WhatsApp & Mobile Card */}
              <a
                href="https://wa.me/919313945479"
                target="_blank"
                rel="noreferrer"
                className="direct-channel-card whatsapp-channel"
                title="Chat with Harsh on WhatsApp"
              >
                <div className="direct-channel-left">
                  <div className="direct-channel-icon whatsapp-icon">
                    <WhatsAppIcon />
                  </div>
                  <div className="direct-channel-meta">
                    <span className="direct-channel-label">WhatsApp &amp; Call</span>
                    <span className="direct-channel-value">+91 93139 45479</span>
                    <span className="direct-channel-hint">Click to chat instantly on WhatsApp</span>
                  </div>
                </div>
                <div className="direct-channel-btn whatsapp-btn">
                  Chat on WhatsApp <ArrowRight size={14} />
                </div>
              </a>

              {/* Direct Email Card */}
              <a
                href="mailto:hp0920230@gmail.com?subject=Regarding%20Portfolio%20Inquiry%20-%20Harsh%20Prajapati"
                className="direct-channel-card email-channel"
                title="Send an email to Harsh"
              >
                <div className="direct-channel-left">
                  <div className="direct-channel-icon email-icon">
                    <Mail size={22} />
                  </div>
                  <div className="direct-channel-meta">
                    <span className="direct-channel-label">Direct Email</span>
                    <span className="direct-channel-value">hp0920230@gmail.com</span>
                    <span className="direct-channel-hint">Click to compose email and reply to me</span>
                  </div>
                </div>
                <div className="direct-channel-btn email-btn">
                  Send Email Reply <ArrowRight size={14} />
                </div>
              </a>
            </div>
          </div>

          <div className="direct-availability-banner">
            <CheckCircle2 size={18} color="var(--green)" style={{ flexShrink: 0 }} />
            <div>
              <strong>Available for hire:</strong> Fast turnaround on Frontend &amp; MERN Stack roles, CRM platforms, and full-stack projects.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
