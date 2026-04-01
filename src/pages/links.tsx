const Links = () => {
  return (
    <section className="section section-links reveal">
      <span className="section-label">✦ Chapter 04</span>
      <h2 className="section-title">Get in Touch</h2>
      <div className="links-grid">
        <a
          className="link-card stagger-item"
          href="https://github.com/irfanwani"
          target="_blank"
          rel="noreferrer"
        >
          <div className="link-icon">⌥</div>
          <div className="link-details">
            <span className="link-title">GitHub</span>
            <span className="link-subtitle">github.com/irfanwani</span>
          </div>
        </a>
        <a
          className="link-card stagger-item"
          href="https://www.linkedin.com/in/irfan-wani/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="link-icon">in</div>
          <div className="link-details">
            <span className="link-title">LinkedIn</span>
            <span className="link-subtitle">Connect with me</span>
          </div>
        </a>
        <a
          className="link-card stagger-item"
          href="https://www.instagram.com/irfanwani347/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="link-icon">◎</div>
          <div className="link-details">
            <span className="link-title">Instagram</span>
            <span className="link-subtitle">@irfanwani347</span>
          </div>
        </a>
        <a
          className="link-card stagger-item"
          href="mailto:irfanwani347@gmail.com"
        >
          <div className="link-icon">✉</div>
          <div className="link-details">
            <span className="link-title">Email</span>
            <span className="link-subtitle">irfanwani347@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Links;
