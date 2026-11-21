import './Page.css'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Limbani Software',
    period: '01 Sep 2025 – Present',
    badge: 'Current Role',
    desc: 'Developing responsive and high-performance web applications using React.js, JavaScript, and modern web architectures. Actively contributing to CRM platform modules, authentication flows, REST API integrations, and AI-assisted development workflows.',
    tags: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'REST APIs',
      'CRM Development',
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'AI Agents',
      'Prompt Engineering',
    ],
    achievements: [
      'Develop responsive and high-performance web applications using React.js, JavaScript, HTML5, and CSS3.',
      'Build reusable UI components and integrate REST APIs with seamless state management.',
      'Contribute to enterprise CRM systems: Native-Shipper CRM (business modules & automation) and Temu-Connector CRM (API integrations & AI workflows).',
      'Contribute to platform engineering: Shopdot (pet health food & grocery platform) and TehraPlus (Israel-based salon platform feature validation & QA).',
      'Work with Node.js, Express.js, MongoDB, MySQL, AI Agents, and AI-assisted development workflows to elevate platform scalability.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Enlighten Infosystems',
    period: 'Feb 2025 – May 2025 (3 Months Internship)',
    badge: 'Internship',
    desc: 'Worked as a MERN stack web development intern, building responsive interfaces, integrating transaction and payment gateways, and collaborating in team sprints.',
    tags: [
      'MERN Stack',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Razorpay',
      'REST APIs',
      'Git',
      'Agile',
    ],
    achievements: [
      'Built MERN stack applications and responsive user interfaces optimized for varied screen sizes.',
      'Integrated secure APIs and Razorpay payment workflows for dependable transaction processing.',
      'Collaborated in Agile teams using Git-based development practices, code reviews, and version control.',
    ],
  },
]

export default function Experience() {
  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Professional Experience</div>
        <h2 className="section-title">Work <span className="grad-text">Experience</span></h2>
        <p className="section-sub">Professional roles, key responsibilities, and technical contributions</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card glass">
              <div className="timeline-header">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-period">{exp.period}</div>
              </div>
              <div className="timeline-company">🏢 {exp.company}</div>
              <div className="timeline-desc">{exp.desc}</div>
              <div className="timeline-tags">
                {exp.tags.map((t, ti) => (
                  <span key={ti} className="timeline-tag">{t}</span>
                ))}
              </div>
              <div className="achievements">
                <div className="achievements-title">Key Responsibilities &amp; Impact</div>
                {exp.achievements.map((a, ai) => (
                  <div key={ai} className="achievement-item">{a}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
