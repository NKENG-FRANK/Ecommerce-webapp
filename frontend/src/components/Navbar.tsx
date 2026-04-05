import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
          <div className="brand-orb"></div>
          <span>E-Commerce</span>
        </Link>
        <div className="nav-links">
          <a href="#create" className="nav-link">Create Shop</a>
          <a href="#promote" className="nav-link">Promote Online</a>
          <a href="#boost" className="nav-link">Boost Sales</a>
          <a href="#global" className="nav-link">Sell Globally</a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/login" className="nav-link" style={{ display: scrolled || window.innerWidth > 768 ? 'block' : 'none', textDecoration: 'none' }}>Log in</Link>
          <Link to="/signup" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>Start Free</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
