import { useState, useEffect } from 'react'
import { Download, Eye, X } from 'lucide-react'
import './Page.css'

export default function Resume() {
  const [showFullResume, setShowFullResume] = useState(false)

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowFullResume(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleDownloadPDF = () => {
    const prevTitle = document.title
    document.title = 'Harsh_Prajapati_Resume'
    window.print()
    setTimeout(() => {
      document.title = prevTitle
    }, 1500)
  }

  // Reusable Paper Document component that renders strictly as a single page
  const PaperResumeDocument = () => (
    <div className="resume-paper-doc" onClick={(e) => e.stopPropagation()}>
      {/* Header */}
      <div className="paper-header">
        <div>
          <h1 className="paper-name">HARSH PRAJAPATI</h1>
          <div className="paper-title">Frontend &amp; MERN Stack Developer</div>
        </div>
        <div className="paper-contact">
          <div>Halol, Gujarat, India · +91 93139 45479</div>
          <div>
            <a href="mailto:hp0920230@gmail.com">hp0920230@gmail.com</a> ·{' '}
            <a
              href="https://github.com/hars852"
              target="_blank"
              rel="noreferrer"
            >
              github.com/hars852
            </a> ·{' '}
            <a
              href="https://www.linkedin.com/in/harsh-prajapati-982304293/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/harsh-prajapati-982304293
            </a>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="paper-section">
        <div className="paper-section-title">Professional Summary</div>
        <p className="paper-summary-text">
          Frontend &amp; MERN Stack Developer with professional experience building CRM systems,
          business platforms, scalable web applications, and AI-assisted workflows. Currently working
          at <strong>Limbani Software</strong>, leveraging React.js, Node.js, Express.js, MongoDB,
          MySQL, REST APIs, AI Agents, Prompt Engineering, testing, and performance optimization.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="paper-section">
        <div className="paper-section-title">Technical Skills</div>
        <div className="paper-skills-grid">
          <div className="paper-skill-row">
            <span className="paper-skill-label">Frontend:</span> React.js, JavaScript, HTML5, CSS3, Responsive Design
          </div>
          <div className="paper-skill-row">
            <span className="paper-skill-label">Backend &amp; DB:</span> Node.js, Express.js, REST APIs, Workflow Authentication, MongoDB, MySQL
          </div>
          <div className="paper-skill-row">
            <span className="paper-skill-label">Tools &amp; Platforms:</span> Git, GitHub, VS Code, Razorpay, WordPress
          </div>
          <div className="paper-skill-row">
            <span className="paper-skill-label">Modern &amp; AI:</span> AI Agents, Prompt Engineering, Testing &amp; Debugging, Performance Optimization
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="paper-section">
        <div className="paper-section-title">Professional Experience</div>

        <div className="paper-item">
          <div className="paper-item-header">
            <div className="paper-role">Frontend Developer</div>
            <div className="paper-date">01 Sep 2025 – Present</div>
          </div>
          <div className="paper-company">Limbani Software</div>
          <ul className="paper-bullets">
            <li className="paper-bullet">Develop responsive and high-performance web applications using React.js, JavaScript, HTML5, and CSS3.</li>
            <li className="paper-bullet">Build reusable UI components and integrate REST APIs with seamless error handling and state management.</li>
            <li className="paper-bullet">Contribute to core CRM systems: <strong>Native-Shipper CRM</strong> &amp; <strong>Temu-Connector CRM</strong> with workflow automation.</li>
            <li className="paper-bullet">Engineer client platforms: <strong>Shopdot</strong> (pet food &amp; grocery) and <strong>TehraPlus</strong> (Israel salon platform QA/validation).</li>
            <li className="paper-bullet">Work with Node.js, Express.js, MongoDB, MySQL, AI Agents, and AI-assisted development workflows.</li>
          </ul>
        </div>

        <div className="paper-item">
          <div className="paper-item-header">
            <div className="paper-role">Web Development Intern</div>
            <div className="paper-date">Feb 2025 – May 2025 (3 Months)</div>
          </div>
          <div className="paper-company">Enlighten Infosystems</div>
          <ul className="paper-bullets">
            <li className="paper-bullet">Built MERN stack applications and responsive user interfaces with cross-browser compatibility.</li>
            <li className="paper-bullet">Integrated secure APIs and Razorpay payment workflows; collaborated in Agile teams using Git.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="paper-section">
        <div className="paper-section-title">Education</div>
        <div className="paper-item" style={{ marginBottom: 0 }}>
          <div className="paper-item-header">
            <div className="paper-role">Bachelor of Engineering (Information Technology)</div>
            <div className="paper-date">Passed Out: 2025</div>
          </div>
          <div className="paper-company" style={{ marginBottom: 0 }}>
            Vadodara Institute of Technology · <span style={{ color: '#0f172a', fontWeight: 700 }}>CGPA: 7.67 / 10</span>
          </div>
        </div>
      </div>

      {/* Key Projects - 2-Column Compact Grid */}
      <div className="paper-section" style={{ marginBottom: 0 }}>
        <div className="paper-section-title">Key Projects</div>
        <div className="paper-projects-grid">
          <div className="paper-project-item">
            <span className="paper-project-name">1. TechBazaar:</span> MERN e-commerce platform with checkout, invoice generation &amp; admin management.
          </div>
          <div className="paper-project-item">
            <span className="paper-project-name">4. Dating App UI:</span> Modern dating platform interface showcasing responsive UI/UX design.
          </div>
          <div className="paper-project-item">
            <span className="paper-project-name">2. Netflix Clone:</span> Streaming platform UI built with React.js and responsive design principles.
          </div>
          <div className="paper-project-item">
            <span className="paper-project-name">5. BookHub:</span> Responsive frontend website for book catalog browsing and discovery.
          </div>
          <div className="paper-project-item">
            <span className="paper-project-name">3. Food Restaurant Project:</span> Restaurant ordering and menu management application with optimized UX.
          </div>
          <div className="paper-project-item">
            <span className="paper-project-name">6. WordPress Business Website:</span> SEO-friendly responsive business website.
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Curriculum Vitae · 1-Page Layout</div>
        <h2 className="section-title">My <span className="grad-text">Resume</span></h2>
        <p className="section-sub">Single-page ATS-optimized resume formatted for professional review and PDF export</p>
      </div>

      <div className="resume-section">
        {/* Actions Bar */}
        <div className="resume-actions">
          <button onClick={handleDownloadPDF} className="btn-primary" style={{ cursor: 'pointer', border: 'none' }}>
            <Download size={16} /> Download PDF (1-Page)
          </button>
          <button onClick={() => setShowFullResume(true)} className="btn-outline" style={{ cursor: 'pointer' }}>
            <Eye size={16} /> View Full Resume
          </button>
        </div>

        {/* Dashboard Glass Resume Preview (Matches Single-Page Layout) */}
        <div className="resume-preview glass">
          <div className="resume-header-section">
            <div>
              <div className="resume-name-big">HARSH PRAJAPATI</div>
              <div className="resume-title-big">Frontend &amp; MERN Stack Developer</div>
            </div>
            <div className="resume-contact-info">
              <div>📍 Halol, Gujarat, India</div>
              <div>📞 <a href="tel:+919313945479" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93139 45479</a></div>
              <div>✉️ <a href="mailto:hp0920230@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>hp0920230@gmail.com</a></div>
              <div>🐙 <a href="https://github.com/hars852" target="_blank" rel="noreferrer" style={{ color: 'var(--purple)', textDecoration: 'none' }}>github.com/hars852</a></div>
              <div>🔗 <a href="https://www.linkedin.com/in/harsh-prajapati-982304293/" target="_blank" rel="noreferrer" style={{ color: 'var(--purple)', textDecoration: 'none' }}>linkedin.com/in/harsh-prajapati-982304293</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
            <div className="resume-section-title">Professional Summary</div>
            <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, margin: 0 }}>
              Frontend &amp; MERN Stack Developer with professional experience building CRM systems,
              business platforms, scalable web applications, and AI-assisted workflows. Currently working
              at <strong>Limbani Software</strong>, leveraging React.js, Node.js, Express.js, MongoDB,
              MySQL, REST APIs, AI Agents, Prompt Engineering, testing, and performance optimization.
            </p>
          </div>

          {/* Two-Column Body */}
          <div className="resume-body">
            {/* Column 1: Experience & Education */}
            <div>
              <div className="resume-section-title">Professional Experience</div>

              <div className="resume-item">
                <div className="resume-item-title">Frontend Developer</div>
                <div className="resume-item-sub">Limbani Software · 01 Sep 2025 – Present</div>
                <div className="resume-item-desc">
                  <div className="achievement-item">Develop responsive and high-performance web applications using React.js, JavaScript, HTML5, and CSS3.</div>
                  <div className="achievement-item">Build reusable UI components and integrate REST APIs with proper state management.</div>
                  <div className="achievement-item">Contribute to enterprise CRM systems: <strong>Native-Shipper CRM</strong> &amp; <strong>Temu-Connector CRM</strong>.</div>
                  <div className="achievement-item">Develop client &amp; business platforms: <strong>Shopdot</strong> and <strong>TehraPlus</strong> (QA/validation).</div>
                  <div className="achievement-item">Work with Node.js, Express.js, MongoDB, MySQL, AI Agents, and AI-assisted development workflows.</div>
                </div>
              </div>

              <div className="resume-item" style={{ marginTop: 18 }}>
                <div className="resume-item-title">Web Development Intern</div>
                <div className="resume-item-sub">Enlighten Infosystems · Feb 2025 – May 2025 (3 Months)</div>
                <div className="resume-item-desc">
                  <div className="achievement-item">Built MERN stack applications and responsive user interfaces.</div>
                  <div className="achievement-item">Integrated secure APIs and Razorpay payment workflows.</div>
                  <div className="achievement-item">Collaborated in Agile teams using Git-based development practices.</div>
                </div>
              </div>

              <div className="resume-section-title" style={{ marginTop: 24 }}>Education</div>
              <div className="resume-item">
                <div className="resume-item-title">Bachelor of Engineering (Information Technology)</div>
                <div className="resume-item-sub">Vadodara Institute of Technology · Passed Out: 2025</div>
                <div className="resume-item-desc">
                  <strong>CGPA:</strong> 7.67 / 10 · Information Technology, Web Development &amp; Software Engineering.
                </div>
              </div>
            </div>

            {/* Column 2: Technical Skills & Key Projects */}
            <div>
              <div className="resume-section-title">Technical Skills</div>

              <div className="resume-item">
                <div className="resume-item-sub">Frontend</div>
                <div className="resume-skills-list">
                  {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'].map(s => (
                    <span key={s} className="resume-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-sub">Backend &amp; Database</div>
                <div className="resume-skills-list">
                  {['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'].map(s => (
                    <span key={s} className="resume-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-sub">Tools &amp; Modern Tech</div>
                <div className="resume-skills-list">
                  {['Git', 'GitHub', 'VS Code', 'Razorpay', 'WordPress', 'AI Agents', 'Prompt Eng.'].map(s => (
                    <span key={s} className="resume-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="resume-section-title" style={{ marginTop: 24 }}>Key Projects</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px' }}>
                <div className="resume-item" style={{ marginBottom: 8 }}>
                  <div className="resume-item-title" style={{ fontSize: 13 }}>1. TechBazaar</div>
                  <div className="resume-item-desc" style={{ fontSize: 11 }}>MERN e-commerce with invoices &amp; admin.</div>
                </div>
                <div className="resume-item" style={{ marginBottom: 8 }}>
                  <div className="resume-item-title" style={{ fontSize: 13 }}>4. Dating App UI</div>
                  <div className="resume-item-desc" style={{ fontSize: 11 }}>Modern dating UI/UX design.</div>
                </div>
                <div className="resume-item" style={{ marginBottom: 8 }}>
                  <div className="resume-item-title" style={{ fontSize: 13 }}>2. Netflix Clone</div>
                  <div className="resume-item-desc" style={{ fontSize: 11 }}>React.js streaming platform UI.</div>
                </div>
                <div className="resume-item" style={{ marginBottom: 8 }}>
                  <div className="resume-item-title" style={{ fontSize: 13 }}>5. BookHub</div>
                  <div className="resume-item-desc" style={{ fontSize: 11 }}>Responsive book exploration web.</div>
                </div>
                <div className="resume-item" style={{ marginBottom: 8 }}>
                  <div className="resume-item-title" style={{ fontSize: 13 }}>3. Food Restaurant</div>
                  <div className="resume-item-desc" style={{ fontSize: 11 }}>Restaurant ordering &amp; menu app.</div>
                </div>
                <div className="resume-item" style={{ marginBottom: 8 }}>
                  <div className="resume-item-title" style={{ fontSize: 13 }}>6. WordPress Site</div>
                  <div className="resume-item-desc" style={{ fontSize: 11 }}>SEO-friendly business website.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden container strictly for printing clean single-page document if modal is not open */}
      <div className="print-only-doc">
        <PaperResumeDocument />
      </div>

      {/* FULL RESUME MODAL / 1-PAGE DOCUMENT VIEWER */}
      {showFullResume && (
        <div className="resume-modal-overlay" onClick={() => setShowFullResume(false)}>
          {/* Modal Toolbar */}
          <div className="resume-modal-toolbar" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-title">
              📄 Harsh_Prajapati_Resume.pdf (1-Page Format)
            </div>
            <div className="resume-modal-actions">
              <button
                onClick={handleDownloadPDF}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: 13, cursor: 'pointer', border: 'none' }}
              >
                <Download size={15} /> Download PDF
              </button>
              <button
                onClick={() => setShowFullResume(false)}
                className="btn-outline modal-close-btn"
                style={{ padding: '8px 14px', fontSize: 13, cursor: 'pointer' }}
                title="Close (Esc)"
              >
                <X size={16} /> Close
              </button>
            </div>
          </div>

          {/* 1-Page Paper Resume Sheet */}
          <PaperResumeDocument />
        </div>
      )}
    </div>
  )
}
