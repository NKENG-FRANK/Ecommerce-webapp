import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="pill-badge">
           <div className="pulse-dot-cyan"></div>
           The Ultimate E-Commerce Ecosystem
        </div>
        <h1 className="hero-title">
          Your empire <br />
          <span className="gradient-text">starts here.</span>
        </h1>
        <p className="hero-subtitle fade-up">
          Build a stunning online store, market your products to millions, and scale your business beyond borders. No coding required. Just your vision.
        </p>
        <div className="hero-cta-group fade-up-more">
          <Link to="/signup" className="btn-primary btn-massive" style={{ textDecoration: 'none' }}>
            Launch Your Shop
            <svg className="icon-right" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M19 12l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <button className="btn-secondary btn-massive">Explore Platform</button>
        </div>
      </div>
      
      {/* Abstract UI Mockup decoration */}
      <div className="hero-visual-wrapper fade-up-most">
        <div className="mockup-window">
           <div className="mockup-header">
             <div className="mac-btn"></div>
             <div className="mac-btn"></div>
             <div className="mac-btn"></div>
           </div>
           <div className="mockup-body">
             <div className="mockup-sidebar">
               <div className="sidebar-item active">
                 <div className="sidebar-icon"></div><div className="sidebar-text"></div>
               </div>
               <div className="sidebar-item">
                 <div className="sidebar-icon"></div><div className="sidebar-text"></div>
               </div>
               <div className="sidebar-item">
                 <div className="sidebar-icon"></div><div className="sidebar-text"></div>
               </div>
             </div>
             <div className="mockup-main">
               <div className="main-chart">
                 <div className="chart-text">Total Revenue (30 Days)</div>
                 <div className="chart-number">$124,500.00</div>
                 <div className="chart-line"></div>
               </div>
               <div className="mockup-cards">
                 <div className="m-card"><div className="m-card-header"></div><div className="m-card-body"></div></div>
                 <div className="m-card"><div className="m-card-header"></div><div className="m-card-body"></div></div>
                 <div className="m-card"><div className="m-card-header"></div><div className="m-card-body"></div></div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
