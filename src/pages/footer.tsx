const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <section className="section section-footer reveal">
      <footer>
        <p className="footer-heading">Thank You for Visiting</p>
        <p className="footer-sub">End of transmission · Irfan Wani · {year}</p>
      </footer>
    </section>
  );
};

export default Footer;
