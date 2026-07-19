const Skills = () => {
  return (
    <section className="section" id="tech">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>
      </div>
      <div className="tech-grid">
        <div className="tech-category reveal">
          <div className="tech-cat-title">Languages</div>
          <div className="tech-items">
            <span className="tech-item">Python</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">TypeScript</span>
            <span className="tech-item">SQL</span>
            <span className="tech-item">C++</span>
            <span className="tech-item">Java</span>
          </div>
        </div>
        <div className="tech-category reveal">
          <div className="tech-cat-title">Frameworks & Libraries</div>
          <div className="tech-items">
            <span className="tech-item">FastAPI</span>
            <span className="tech-item">React Native</span>
            <span className="tech-item">React</span>
            <span className="tech-item">Redux</span>
            <span className="tech-item">Django</span>
            <span className="tech-item">DRF</span>
            <span className="tech-item">Three.js</span>
            <span className="tech-item">GraphQL</span>
            <span className="tech-item">Socket.io</span>
          </div>
        </div>
        <div className="tech-category reveal">
          <div className="tech-cat-title">Databases</div>
          <div className="tech-items">
            <span className="tech-item">PostgreSQL</span>
            <span className="tech-item">MongoDB</span>
            <span className="tech-item">SQLite3</span>
          </div>
        </div>
        <div className="tech-category reveal">
          <div className="tech-cat-title">Tools & Platforms</div>
          <div className="tech-items">
            <span className="tech-item">SIP</span>
            <span className="tech-item">VoIP</span>
            <span className="tech-item">AWS</span>
            <span className="tech-item">ECS</span>
            <span className="tech-item">Docker</span>
            <span className="tech-item">REST APIs</span>
            <span className="tech-item">Webhooks</span>
            <span className="tech-item">Automations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
