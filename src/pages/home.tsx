const Home = ({typedText}: { typedText: string }) => {
  return (
    <section className="hero">
      <div className="hero-badge">Welcome to my universe</div>
      <h1 className="hero-title">
        <span className="line1">Irfan Wani</span>
        <span className="line2">
          {typedText}
          <span className="cursor-blink">|</span>
        </span>
      </h1>
      <p className="hero-subtitle">
        A Software Development Engineer & Integration Manager crafting seamless
        digital experiences. Specializing in scalable systems, mobile apps, and
        third-party integrations.
      </p>
      <div className="hero-roles">
        <span className="role-pill">Software Engineer</span>
        <span className="role-pill">Integration Manager</span>
        <span className="role-pill">Mobile Developer</span>
      </div>
      <div className="hero-cta">
        <a href="#experience" className="btn-primary">
          Explore My Work
        </a>
        <a href="#contact" className="btn-secondary">
          Get in Touch
        </a>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Home;
