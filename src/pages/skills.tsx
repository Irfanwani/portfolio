const Skills = () => {
  return (
    <section className="section section-skills reveal">
      <span className="section-label">✦ Chapter 03</span>
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        <div className="skill-category stagger-item">
          <div className="skill-category-header">Languages</div>
          <div className="skill-pills">
            {["Python", "JavaScript", "TypeScript", "SQL", "C++", "Java"].map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>
        <div className="skill-category stagger-item">
          <div className="skill-category-header">Frameworks &amp; Libraries</div>
          <div className="skill-pills">
            {["React Native", "React", "Redux", "RTK Query", "Django", "DRF", "Three.js", "GraphQL", "Socket.io", "Matplotlib"].map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>
        <div className="skill-category stagger-item">
          <div className="skill-category-header">Databases</div>
          <div className="skill-pills">
            {["PostgreSQL", "MongoDB", "SQLite3"].map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>
        <div className="skill-category stagger-item">
          <div className="skill-category-header">Other</div>
          <div className="skill-pills">
            {["Data Structures", "Algorithms", "HTML", "CSS", "AWS", "REST APIs", "Webhooks"].map((s) => (
              <span key={s} className="skill-pill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
