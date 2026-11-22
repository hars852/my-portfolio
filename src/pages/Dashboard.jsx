import { TypeAnimation } from 'react-type-animation'
import { Download, Send, Star, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react'
import './Dashboard.css'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const stats = [
  { icon: <Star size={20} />, value: '6+', label: 'Featured Projects', color: '#f59e0b' },
  { icon: <Briefcase size={20} />, value: 'Limbani', label: 'Frontend Developer', color: '#8b5cf6' },
  { icon: <GraduationCap size={20} />, value: '7.67', label: 'B.E. (IT) CGPA', color: '#3b82f6' },
  { icon: <Code2 size={20} />, value: 'MERN + AI', label: 'Tech Stack Focus', color: '#10b981' },
]

const skillsOverview = [
  { name: 'React.js & JavaScript', level: 95, color: '#61dafb' },
  { name: 'Node.js & Express.js', level: 88, color: '#68a063' },
  { name: 'MongoDB & MySQL', level: 84, color: '#47a248' },
  { name: 'REST APIs & Razorpay', level: 90, color: '#3178c6' },
  { name: 'AI Agents & Prompt Eng.', level: 86, color: '#8b5cf6' },
]

const recentProjects = [
  { name: 'TechBazaar', stack: 'MERN Stack · Razorpay · E-Commerce', status: 'Featured', color: '#10b981' },
  { name: 'Netflix Clone', stack: 'React.js · JavaScript · CSS3 UI', status: 'Completed', color: '#8b5cf6', liveUrl: 'https://cinimer.netlify.app/' },
  { name: 'Food Restaurant Project', stack: 'React.js · Menu Management · UX', status: 'Completed', color: '#3b82f6' },
  { name: 'Dating App UI', stack: 'React.js · CSS3 · UI/UX Design', status: 'Showcase', color: '#f59e0b', liveUrl: 'https://vocal-donut-1f162e.netlify.app/step1' },
]

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text animate-fade-up">
            <div className="hero-tag">📍 Halol, Gujarat, India · Open to Opportunities</div>
            <h1 className="hero-name">
              Hi, I'm <span className="grad-text">Harsh Prajapati</span>
            </h1>
            <div className="hero-typing">
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'MERN Stack Developer', 2000,
                  'CRM Systems Specialist', 2000,
                  'AI-Assisted Workflow Dev', 2000,
                  'React.js Specialist', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className="cursor-blink">|</span>
            </div>
            <p className="hero-summary">
              Frontend &amp; MERN Stack Developer with professional experience building CRM systems,
              business platforms, scalable web applications, and AI-assisted workflows. Currently working
              at <strong>Limbani Software</strong>, leveraging React.js, Node.js, Express.js, MongoDB,
              MySQL, REST APIs, AI Agents, Prompt Engineering, testing, and performance optimization.
            </p>
            <div className="hero-actions">
              <a href="/resume" className="btn-primary">
                <Download size={16} /> View &amp; Download Resume
              </a>
              <a href="/contact" className="btn-outline">
                <Send size={16} /> Get In Touch
              </a>
              <a
                href="https://github.com/hars852"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                title="GitHub Profile"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-prajapati-982304293/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-visual animate-fade">
            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar">HP</div>
              <div className="floating-badge badge-1">React.js</div>
              <div className="floating-badge badge-2">MERN &amp; APIs</div>
              <div className="floating-badge badge-3">AI Agents</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card glass" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-icon" style={{ color: s.color, background: `${s.color}18` }}>
                {s.icon}
              </div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Grid */}
      <div className="dashboard-grid">
        {/* Skills Overview */}
        <div className="dash-card glass">
          <div className="dash-card-header">
            <h3>Core Technical Skills</h3>
            <a href="/skills" className="view-all">View All <ExternalLink size={13} /></a>
          </div>
          <div className="skills-bars">
            {skillsOverview.map((s, i) => (
              <div key={i} className="skill-bar-item">
                <div className="skill-bar-top">
                  <span>{s.name}</span>
                  <span style={{ color: s.color }}>{s.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${s.level}%`, background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="dash-card glass">
          <div className="dash-card-header">
            <h3>Featured Projects</h3>
            <a href="/projects" className="view-all">View All Projects <ExternalLink size={13} /></a>
          </div>
          <div className="recent-projects">
            {recentProjects.map((p, i) => (
              <div key={i} className="recent-project-item">
                <div className="rp-dot" style={{ background: p.color }} />
                <div className="rp-info">
                  <div className="rp-name">{p.name}</div>
                  <div className="rp-stack">{p.stack}</div>
                </div>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rp-live-link"
                    title="Live Demo"
                  >
                    Demo <ExternalLink size={12} />
                  </a>
                )}
                <span className="rp-status" style={{ color: p.color, background: `${p.color}18`, border: `1px solid ${p.color}33` }}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="dash-card glass experience-highlight">
          <div className="dash-card-header">
            <h3>Current Professional Experience</h3>
            <a href="/experience" className="view-all">View Full Experience <ExternalLink size={13} /></a>
          </div>
          <div className="exp-item">
            <div className="exp-logo">💼</div>
            <div className="exp-info">
              <div className="exp-role">Frontend Developer</div>
              <div className="exp-company">Limbani Software · 01 Sep 2025 – Present</div>
              <div className="exp-desc">
                Develop responsive and high-performance web applications using React.js, JavaScript, HTML5, and CSS3.
                Build reusable UI components, integrate REST APIs, and contribute to CRM development, workflow authentication,
                testing, debugging, and deployment with Node.js, Express.js, MongoDB, MySQL, and AI Agents.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
