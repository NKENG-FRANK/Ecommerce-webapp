
const Features = () => {
  return (
    <section className="value-propositions">
        {/* 1. Create Shops & Marketing */}
        <div className="vp-row" id="create">
          <div className="vp-content">
            <div className="vp-number">01</div>
            <h2 className="vp-title">Bring your <span className="gradient-text">vision to life.</span></h2>
            <p className="vp-desc">
              Create a breathtaking shop in minutes. Use our intuitive drag-and-drop builder to craft a unique brand experience. Seamlessly upload your products, define categories, and unlock powerful built-in marketing tools to launch campaigns that convert viewers into loyal customers.
            </p>
          </div>
          <div className="vp-visual">
             <div className="glass-card store-builder-mock">
                <div className="glow-ellipse"></div>
                <div className="sb-header">
                  <div className="sb-title">Store Builder</div>
                  <div className="sb-badge">Live Edit</div>
                </div>
                <div className="sb-blocks">
                  <div className="sb-block" style={{ gridColumn: 'span 2', height: '100px', background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))' }}>Hero Banner Area</div>
                  <div className="sb-block">Product Grid</div>
                  <div className="sb-block">Marketing Call-to-Action</div>
                </div>
             </div>
          </div>
        </div>

        {/* 2. Promote Online Presence */}
        <div className="vp-row reverse" id="promote">
          <div className="vp-content">
            <div className="vp-number">02</div>
            <h2 className="vp-title">Be seen. <span className="gradient-text-alt">Everywhere.</span></h2>
            <p className="vp-desc">
              Promote your presence online and reach an exponentially larger audience. Having your own dedicated shop means owning your customer relationships. Sync your catalog directly to Instagram, TikTok, and Google, capturing clients wherever they spend their time.
            </p>
          </div>
          <div className="vp-visual">
             <div className="glass-card social-mock">
                <div className="sm-card">
                  <div className="sm-header">
                    <div className="sm-avatar" style={{background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'}}></div>
                    <div><div className="sm-name"></div><div className="sm-meta"></div></div>
                  </div>
                  <div className="sm-image" style={{background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%238b5cf6\' opacity=\'0.2\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'20\' fill=\'%23ec4899\' opacity=\'0.5\'/%3E%3C/svg%3E") center/cover'}}></div>
                  <div className="sm-footer"><div className="sm-action"></div><div className="sm-action"></div></div>
                </div>
                <div className="sm-card" style={{ position: 'absolute', top: '40px', right: '-20px', width: '80%', zIndex: -1 }}>
                  <div className="sm-header">
                    <div className="sm-avatar"></div>
                    <div><div className="sm-name"></div><div className="sm-meta"></div></div>
                  </div>
                  <div className="sm-image"></div>
                </div>
             </div>
          </div>
        </div>

        {/* 3. Boost Sales */}
        <div className="vp-row" id="boost">
          <div className="vp-content">
            <div className="vp-number">03</div>
            <h2 className="vp-title">Maximize your <span className="gradient-text">revenue.</span></h2>
            <p className="vp-desc">
              Transform traffic into profit. Boost your sales with enterprise-grade tools available right out of the box. Leverage AI-driven product recommendations, one-click upsells, automated abandoned cart recovery, and lightning-fast checkouts designed to skyrocket your conversion rates.
            </p>
          </div>
          <div className="vp-visual">
             <div className="glass-card sales-mock">
                <div className="sales-circle">
                   <div className="sc-value">+342%</div>
                   <div className="sc-label">Conversion Lift</div>
                </div>
                <div className="sales-bars">
                   <div className="s-bar" style={{height: '30%'}}></div>
                   <div className="s-bar" style={{height: '45%'}}></div>
                   <div className="s-bar" style={{height: '60%'}}></div>
                   <div className="s-bar" style={{height: '75%'}}></div>
                   <div className="s-bar active" style={{height: '100%'}}></div>
                </div>
             </div>
          </div>
        </div>

        {/* 4. Sell in Bulk & Global Horizons */}
        <div className="vp-row reverse" id="global">
          <div className="vp-content">
            <div className="vp-number">04</div>
            <h2 className="vp-title">Widen your <span className="gradient-text-alt">horizons.</span></h2>
            <p className="vp-desc">
              Think bigger. Break geographical barriers and find clients far off. Whether you are selling individual products or selling in bulk to B2B clients, our infrastructure handles multiple currencies, global tax compliance, and wholesale pricing tiers seamlessly.
            </p>
          </div>
          <div className="vp-visual">
             <div className="glass-card global-mock">
                <div className="map-bg"></div>
                <div className="map-line"></div>
                <div className="map-node n1"></div>
                <div className="map-node n2"></div>
                <div className="map-node n3"></div>
                
                <div className="bulk-tag">
                  <div className="bt-icon">B2B</div>
                  <div className="bt-text">Wholesale Orders Active</div>
                </div>
             </div>
          </div>
        </div>

      </section>
  );
};

export default Features;
