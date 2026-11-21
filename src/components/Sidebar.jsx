import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, User, Code2, Briefcase, FolderOpen,
  Award, GraduationCap, FileText, Mail, Phone
} from 'lucide-react'

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
import './Sidebar.css'

const nav = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/about', icon: User, label: 'About Me' },
  { to: '/skills', icon: Code2, label: 'Skills' },
  { to: '/experience', icon: Briefcase, label: 'Experience' },
  { to: '/projects', icon: FolderOpen, label: 'Projects' },
  { to: '/certifications', icon: Award, label: 'Certifications' },
  { to: '/education', icon: GraduationCap, label: 'Education' },
  { to: '/resume', icon: FileText, label: 'Resume' },
  { to: '/contact', icon: Mail, label: 'Contact' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar glass">
      <div className="sidebar-profile">
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <div className="avatar">HP</div>
          <span className="status-dot" />
        </div>
        <h3 className="profile-name">Harsh Prajapati</h3>
        <p className="profile-role">Frontend &amp; MERN Stack Developer</p>
        <div className="profile-badge">✦ Available for hire</div>
      </div>

      <nav className="sidebar-nav">
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-social">
        <a href="https://github.com/hars852" target="_blank" rel="noreferrer" className="social-btn" title="GitHub: hars852">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/harsh-prajapati-982304293/" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn: Harsh Prajapati">
          <LinkedinIcon />
        </a>
        <a href="mailto:hp0920230@gmail.com?subject=Regarding%20Portfolio%20Inquiry%20-%20Harsh%20Prajapati" className="social-btn" title="Email: hp0920230@gmail.com">
          <Mail size={18} />
        </a>
        <a href="https://wa.me/919313945479" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp: +91 93139 45479">
          <Phone size={17} />
        </a>
      </div>
    </aside>
  )
}
