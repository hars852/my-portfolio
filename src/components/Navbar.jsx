import { NavLink, useLocation } from 'react-router-dom'
import {
  Menu, X, Sun, Moon, LayoutDashboard, User, Code2, Briefcase,
  FolderOpen, Award, GraduationCap, FileText, Mail, ArrowUpRight
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const routeMeta = {
  '/': { title: 'Dashboard', icon: LayoutDashboard },
  '/about': { title: 'About Me', icon: User },
  '/skills': { title: 'Skills & Stack', icon: Code2 },
  '/experience': { title: 'Experience', icon: Briefcase },
  '/projects': { title: 'Projects', icon: FolderOpen },
  '/certifications': { title: 'Certifications', icon: Award },
  '/education': { title: 'Education', icon: GraduationCap },
  '/resume': { title: 'Resume', icon: FileText },
  '/contact': { title: 'Contact', icon: Mail },
}

const quickLinks = [
  { to: '/', label: 'Dashboard' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ isMobileOpen, onToggleMobile }) {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const currentRoute = routeMeta[location.pathname] || {
    title: 'Harsh Prajapati',
    icon: LayoutDashboard,
  }
  const CurrentIcon = currentRoute.icon

  return (
    <header className="app-navbar d-flex-between">
      {/* Left: Mobile Toggle & Brand / Active Page Breadcrumb */}
      <div className="navbar-left d-flex">
        {/* Mobile Hamburger Drawer Button */}
        <button
          type="button"
          className="navbar-toggle-btn d-flex-center"
          onClick={onToggleMobile}
          aria-label={isMobileOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
          title={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Brand Info */}
        <div className="navbar-mobile-brand d-flex">
          <div className="mobile-brand-avatar d-flex-center">HP</div>
          <div className="mobile-brand-meta">
            <span className="mobile-brand-name">Harsh Prajapati</span>
            <span className="mobile-brand-role">Frontend &amp; MERN</span>
          </div>
        </div>

        {/* Desktop Breadcrumb / Active Page Indicator */}
        <div className="navbar-desktop-brand d-flex">
          <div className="navbar-route-badge d-flex">
            <CurrentIcon size={16} className="route-icon" />
            <span className="route-name">{currentRoute.title}</span>
          </div>
          <span className="navbar-divider">/</span>
          <div className="navbar-status-pill d-flex">
            <span className="status-live-dot" />
            <span>Available for hire</span>
          </div>
        </div>
      </div>

      {/* Center: Desktop Quick Navigation Links */}
      <nav className="navbar-center d-flex">
        {quickLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Right: Theme Toggle & Quick Action */}
      <div className="navbar-right d-flex">
        {/* Primary Dark / Light Mode Switcher Button */}
        <button
          type="button"
          className="navbar-theme-btn d-flex"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <div className="theme-btn-icon d-flex-center">
            {theme === 'dark' ? (
              <Sun size={17} className="icon-sun" />
            ) : (
              <Moon size={17} className="icon-moon" />
            )}
          </div>
          <span className="theme-btn-label">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </span>
        </button>

        {/* Desktop Quick Connect CTA */}
        <NavLink to="/contact" className="navbar-cta-btn d-flex">
          <span>Hire Me</span>
          <ArrowUpRight size={15} />
        </NavLink>
      </div>
    </header>
  )
}
