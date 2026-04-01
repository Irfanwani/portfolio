const Home = () => {
  return (
    <section className="section section-hero reveal">
      <p className="hero-eyebrow">✦ Welcome to my universe ✦</p>
      <h1 className="hero-name">Irfan Wani</h1>
      <div className="hero-roles">
        <span className="hero-badge">Software Engineer</span>
        <span className="hero-badge">Integration Manager</span>
        <span className="hero-badge">Mobile Developer</span>
      </div>
      <p className="hero-bio">
        A Software Development Engineer &amp; Integration Manager with a passion
        for crafting seamless digital experiences. Specializing in scalable
        systems, mobile application development, and third-party integrations.
      </p>
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">scroll to explore</span>
      </div>
    </section>
  );
};

export default Home;
