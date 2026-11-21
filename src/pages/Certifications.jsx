import './Page.css'

const certs = [
  {
    icon: '⚛️',
    name: 'React.js & Component Architecture',
    issuer: 'Frontend Specialization',
    date: '2025',
    id: 'REACT-HP-01',
    description: 'Advanced React, virtual DOM optimization, state management, hooks, and responsive design patterns.',
  },
  {
    icon: '🟢',
    name: 'MERN Stack Web Development',
    issuer: 'Full Stack Engineering',
    date: '2025',
    id: 'MERN-HP-02',
    description: 'End-to-end full stack development with MongoDB, Express.js, React.js, and Node.js.',
  },
  {
    icon: '🔌',
    name: 'RESTful API Engineering & Razorpay',
    issuer: 'API & Payment Integration',
    date: '2025',
    id: 'API-HP-03',
    description: 'Secure API development, authentication tokens, payment gateway integration, and error handling.',
  },
  {
    icon: '🍃',
    name: 'Database Design: MongoDB & MySQL',
    issuer: 'Database Management',
    date: '2024',
    id: 'DB-HP-04',
    description: 'Relational schema modeling in MySQL and NoSQL document architectures in MongoDB.',
  },
  {
    icon: '🤖',
    name: 'AI Agents & Prompt Engineering',
    issuer: 'AI-Assisted Development',
    date: '2025',
    id: 'AI-HP-05',
    description: 'Integrating autonomous AI agents, prompt crafting, and AI-assisted engineering workflows.',
  },
  {
    icon: '🔀',
    name: 'Git Version Control & Agile Delivery',
    issuer: 'Software Engineering Practices',
    date: '2024',
    id: 'GIT-HP-06',
    description: 'Git branching models, pull requests, Agile scrum sprints, and collaborative code delivery.',
  },
]

export default function Certifications() {
  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Credentials &amp; Coursework</div>
        <h2 className="section-title">My <span className="grad-text">Certifications</span></h2>
        <p className="section-sub">Verified credentials, technical proficiencies, and professional competencies</p>
      </div>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <div key={i} className="cert-card glass">
            <div className="cert-icon">{c.icon}</div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-issuer">{c.issuer}</div>
            <div className="cert-date">Issued: {c.date} · Credential ID: {c.id}</div>
            <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 14 }}>{c.description}</p>
            <div className="cert-badge">✓ Verified Competency</div>
          </div>
        ))}
      </div>
    </div>
  )
}
