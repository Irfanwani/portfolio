const ContactMe = () => {
  return (
    <section className="contact-section" id="contact">
        <h2 className="contact-title reveal">
          Let's Build <span>Something Great</span>
        </h2>
        <p className="contact-desc reveal">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:irfanwani347@gmail.com" className="contact-link">
            Email
          </a>
          <a
            href="https://github.com/irfanwani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/irfan-wani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </section>
  );
};

export default ContactMe;
