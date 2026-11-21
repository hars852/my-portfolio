import './Page.css'

const education = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering (Information Technology)',
    school: 'Vadodara Institute of Technology',
    period: 'Passed Out: 2025',
    cgpa: '7.67 / 10 CGPA',
    desc: 'Completed Bachelor of Engineering in Information Technology from Vadodara Institute of Technology with an aggregate CGPA of 7.67/10. Focused on core software engineering disciplines including Web Development, Database Management Systems, Data Structures & Algorithms, Object-Oriented Programming, and scalable application architecture.',
    highlights: [
      'Graduated with 7.67 / 10 CGPA in Information Technology',
      'Strong academic foundation in MERN Stack, MySQL, MongoDB, and REST APIs',
      'Completed practical capstone projects focused on full-stack web and CRM systems',
    ],
  },
]

export default function Education() {
  return (
    <div className="page">
      <div className="section-header">
        <div className="tag">Academic Background</div>
        <h2 className="section-title">My <span className="grad-text">Education</span></h2>
        <p className="section-sub">Degree, institution, and academic qualifications</p>
      </div>

      <div className="education-grid">
        {education.map((e, i) => (
          <div key={i} className="edu-card glass">
            <div className="edu-icon">{e.icon}</div>
            <div style={{ flex: 1 }}>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
                <span className="edu-period" style={{ marginBottom: 0 }}>📅 {e.period}</span>
                <span className="timeline-tag" style={{ color: 'var(--green)', borderColor: 'rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.1)' }}>
                  🎯 {e.cgpa}
                </span>
              </div>
              <div className="edu-desc">{e.desc}</div>
              {e.highlights && (
                <div className="achievements" style={{ marginTop: 14 }}>
                  <div className="achievements-title">Academic Highlights</div>
                  {e.highlights.map((h, hi) => (
                    <div key={hi} className="achievement-item">{h}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
