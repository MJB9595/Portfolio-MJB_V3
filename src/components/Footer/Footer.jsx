const Footer = () => {
  return (
    <footer>
      <p className="footer-copy">© 2025 <em>김재아</em> — Built with React & SCSS & 🤍</p>
      <a href="#hero" className="footer-back" onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
        <i className="fa-solid fa-arrow-up"></i> Back to top
      </a>
    </footer>
  );
};

export default Footer;