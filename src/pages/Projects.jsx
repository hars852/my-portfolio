import { useState } from 'react'
import './Page.css'

const allProjects = [
  {
    name: 'TechBazaar',
    category: 'Full Stack & E-Commerce',
    status: 'MERN Stack',
    desc: 'MERN e-commerce platform with secure checkout, invoice generation, product catalog, and administrative management.',
    stack: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
    emoji: '🛍️',
    bg: 'linear-gradient(135deg, #1e1b4b, #312e81)',
  },
  {
    name: 'Netflix Clone',
    category: 'Frontend & UI',
    status: 'Responsive UI',
    desc: 'Modern streaming platform user interface built with React.js and responsive design principles, featuring dynamic previews and catalog sliders.',
    stack: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design', 'REST APIs'],
    emoji: '🎬',
    bg: 'linear-gradient(135deg, #450a0a, #991b1b)',
  },
  {
    name: 'Food Restaurant Project',
    category: 'Web Apps',
    status: 'Interactive App',
    desc: 'Restaurant ordering and menu management application with interactive cart workflows and optimized user experience.',
    stack: ['React.js', 'JavaScript', 'Menu Management', 'UI/UX Design', 'CSS3'],
    emoji: '🍕',
    bg: 'linear-gradient(135deg, #78350f, #b45309)',
  },
  {
    name: 'Dating App UI',
    category: 'Frontend & UI',
    status: 'UI/UX Showcase',
    desc: 'Modern dating platform interface showcasing responsive frontend development, touch-friendly layouts, and fluid UI/UX design.',
    stack: ['React.js', 'CSS3', 'UI/UX Design', 'Responsive Layout', 'Frontend'],
    emoji: '💖',
    bg: 'linear-gradient(135deg, #831843, #be185d)',
  },
  {
    name: 'BookHub',
    category: 'Frontend & UI',
    status: 'Responsive Web',
    desc: 'Responsive frontend website for book browsing, discovery, search filtering, and catalog exploration.',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Web'],
    emoji: '📚',
    bg: 'linear-gradient(135deg, #134e4a, #0f766e)',
  },
  {
    name: 'WordPress Business Website',
    category: 'CMS & SEO',
    status: 'SEO Business Site',
    desc: 'SEO-friendly business website designed with customized layouts, speed optimization, and responsive design.',
    stack: ['WordPress', 'SEO Optimization', 'Responsive Design', 'CMS', 'Performance'],
    emoji: '💼',
    bg: 'linear-gradient(135deg, #1e293b, #334155)',
  },
]

const categories = ['All Projects', 'Full Stack & E-Commerce', 'Frontend & UI', 'Web Apps', 'CMS & SEO']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const filteredProjects = activeCategory === 'All Projects'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory)

  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Portfolio Projects ({allProjects.length})</div>
        <h2 className="section-title">My <span className="grad-text">Projects</span></h2>
        <p className="section-sub">Personal and open-source web applications, e-commerce platforms, and responsive interfaces</p>
      </div>

      <div className="project-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} {cat === 'All Projects' ? `(${allProjects.length})` : ''}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <div key={i} className="project-card glass">
            <div className="project-thumb" style={{ background: p.bg }}>
              <span className="project-category-badge">{p.status}</span>
              <span style={{ position: 'relative', zIndex: 1, fontSize: 56 }}>{p.emoji}</span>
            </div>
            <div className="project-body">
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-stack">
                {p.stack.map((s, si) => (
                  <span key={si} className="stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
