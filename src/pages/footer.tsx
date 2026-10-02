const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
        <p className="footer-text">
          DESIGNED & BUILT BY IRFAN WANI &copy; {year}
        </p>
      </footer>
  );
};

export default Footer;
