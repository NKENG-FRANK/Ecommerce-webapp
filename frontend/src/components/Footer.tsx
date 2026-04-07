import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="epic-cta">
        <h2 className="font-display">Start your journey today.</h2>
        <p>Join thousands of ambitious entrepreneurs who have chosen Nexus to build, manage, and scale their online empires.</p>
        <Link to="/signup" className="btn-primary btn-massive" style={{ textDecoration: 'none' }}>
          Create Your Free Shop
          <svg className="icon-right" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="brand">
            <div className="brand-orb" style={{ width: '20px', height: '20px', animation: 'none' }}></div>
            <span style={{ fontSize: '1.1rem' }}>E-Commerce</span>
          </div>
          <div className="footer-links">
            <a href="#create">Features</a>
            <a href="#promote">Solutions</a>
            <a href="#global">Global Options</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">&copy; {new Date().getFullYear()} Nexus Commerce Inc. All rights reserved.</div>
          <div className="footer-links" style={{ gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
