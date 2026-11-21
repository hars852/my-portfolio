import './Page.css'

const categories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: '⚛️', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', icon: '⚡', level: 'Advanced' },
      { name: 'HTML5', icon: '🌐', level: 'Expert' },
      { name: 'CSS3', icon: '🎨', level: 'Advanced' },
      { name: 'Responsive Design', icon: '📱', level: 'Expert' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 'Proficient' },
      { name: 'Express.js', icon: '🚀', level: 'Proficient' },
      { name: 'REST APIs', icon: '🔌', level: 'Advanced' },
      { name: 'Workflow Authentication', icon: '🔐', level: 'Proficient' },
    ],
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'MongoDB', icon: '🍃', level: 'Proficient' },
      { name: 'MySQL', icon: '🐬', level: 'Proficient' },
    ],
  },
  {
    title: 'AI & Next-Gen Workflows',
    skills: [
      { name: 'AI Agents', icon: '🤖', level: 'Advanced' },
      { name: 'Prompt Engineering', icon: '🧠', level: 'Advanced' },
      { name: 'AI-Assisted Workflows', icon: '⚡', level: 'Advanced' },
      { name: 'Testing & Debugging', icon: '🧪', level: 'Proficient' },
      { name: 'Performance Optimization', icon: '📈', level: 'Proficient' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: '🔀', level: 'Proficient' },
      { name: 'GitHub', icon: '🐙', level: 'Proficient' },
      { name: 'VS Code', icon: '💻', level: 'Advanced' },
      { name: 'Razorpay', icon: '💳', level: 'Proficient' },
      { name: 'WordPress', icon: '📝', level: 'Proficient' },
    ],
  },
]

export default function Skills() {
  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Technical Skills</div>
        <h2 className="section-title">My <span className="grad-text">Tech Stack</span></h2>
        <p className="section-sub">Technologies, frameworks, databases, and AI-assisted tools I utilize</p>
      </div>

      <div className="skills-section">
        {categories.map((cat, ci) => (
          <div key={ci}>
            <div className="skills-category-title">{cat.title}</div>
            <div className="skills-grid">
              {cat.skills.map((s, si) => (
                <div key={si} className="skill-card glass">
                  <div className="skill-icon">{s.icon}</div>
                  <div className="skill-name">{s.name}</div>
                  <div className="skill-level">{s.level}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
