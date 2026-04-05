import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
  return (
    <div style={{ paddingTop: '2rem', animation: 'fade-in 0.5s ease' }}>
      <div style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: '24px', padding: '4.5rem 3.5rem', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: '0 15px 40px -10px rgba(99, 102, 241, 0.4)', position: 'relative', overflow: 'hidden' }}>
         <div style={{ position: 'absolute', top: '-50px', right: '-50px', fontSize: '15rem', opacity: 0.1, transform: 'rotate(15deg)' }}>🛍️</div>
         <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>NEW COLLECTION</span>
         <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-0.02em', maxWidth: '650px', lineHeight: 1.1 }}>Discover the absolute best premium products.</h2>
         <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '550px', lineHeight: 1.6 }}>Find exactly what you're looking for using our advanced marketplace filters and get it delivered fast.</p>
         
         <Link to="/marketplace" style={{ background: '#fff', color: '#0f172a', padding: '1.2rem 3rem', borderRadius: '14px', fontSize: '1.15rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
            Explore Marketplace →
         </Link>
      </div>

      <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
         <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid var(--border-color, #e2e8f0)', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '64px', height: '64px', background: '#fef3c7', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>⭐</div>
            <div>
               <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '0.3rem' }}>Top Rated</h3>
               <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.95rem', margin: 0 }}>Highly reviewed quality</p>
            </div>
         </div>
         <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid var(--border-color, #e2e8f0)', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '64px', height: '64px', background: '#e0e7ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🚚</div>
            <div>
               <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '0.3rem' }}>Fast Delivery</h3>
               <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.95rem', margin: 0 }}>Get items in 24 hours</p>
            </div>
         </div>
         <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid var(--border-color, #e2e8f0)', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '64px', height: '64px', background: '#fce7f3', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>🛡️</div>
            <div>
               <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '0.3rem' }}>Secure Checkout</h3>
               <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.95rem', margin: 0 }}>Multiple protected methods</p>
            </div>
         </div>
      </div>
    </div>
  );
};

const SellerDashboard = () => {
  const [shopName, setShopName] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'messages'>('overview');

  useEffect(() => {
    const saved = localStorage.getItem('myShop');
    if (saved) {
      const parsed = JSON.parse(saved);
      setShopName(parsed.name || 'Your Store');
    }
  }, []);

  // Mock Overview Data
  const totalSales = "0";
  const activeOrders = 0;
  const productsCount = 0;
  const storeViews = "0";

  // Real Data Integration Arrays
  const mockProducts: any[] = [];
  const mockOrders: any[] = [];
  const mockMessages: any[] = [];

  if (!shopName) {
    return (
      <div className="glass-card fade-up-more" style={{ marginTop: '2rem', padding: '5rem 2rem', textAlign: 'center', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
        <div className="ambient-glow glow-pink" style={{ top: '-50%', left: '50%', transform: 'translateX(-50%)' }}></div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '1.5rem', textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>🏪</div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>You haven't set up your shop yet</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Start building your online presence. Customize your storefront, upload products, and start accepting payments.
          </p>
          <Link to="/create-shop" className="btn-primary" style={{ padding: '1.1rem 3rem', fontSize: '1.1rem', borderRadius: '16px', letterSpacing: '0.5px', textDecoration: 'none', display: 'inline-block' }}>
            Create Your Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '2rem', animation: 'fade-in 0.5s ease' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.8rem', margin: 0, fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>{shopName} Dashboard</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/my-shop" style={{ padding: '0.7rem 1.5rem', borderRadius: '12px', textDecoration: 'none', background: 'transparent', border: '1px solid var(--text-main, #0f172a)', color: 'var(--text-main, #0f172a)', fontWeight: 600 }}>View Live Page</Link>
          <Link to="/add-product" style={{ padding: '0.7rem 1.5rem', borderRadius: '12px', textDecoration: 'none', background: 'var(--text-main, #0f172a)', color: '#fff', fontWeight: 600 }}>+ Add Product</Link>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '2px solid var(--border-color, #e2e8f0)', marginBottom: '2.5rem', overflowX: 'auto' }}>
        {[
          { id: 'overview', label: 'Analytics' },
          { id: 'products', label: 'Products' },
          { id: 'orders', label: 'Orders' },
          { id: 'messages', label: 'Messages' }
        ].map(tab => (
          <div 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id as any)}
            style={{ 
              padding: '0.8rem 1rem', 
              cursor: 'pointer', 
              fontWeight: 600, 
              color: activeTab === tab.id ? 'var(--text-main, #0f172a)' : 'var(--text-muted, #64748b)',
              borderBottom: activeTab === tab.id ? '3px solid var(--text-main, #0f172a)' : '3px solid transparent',
              marginBottom: '-2px',
              transition: 'all 0.2s'
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      
      {/* Tab Contents */}
      {activeTab === 'overview' && (
        <div style={{ animation: 'fade-in 0.3s ease' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div style={{ background: 'var(--bg-card, #ffffff)', padding: '1.8rem', borderRadius: '20px', borderTop: '4px solid #10b981', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
               <div style={{ color: 'var(--text-muted, #64748b)', fontWeight: 600, marginBottom: '0.8rem', fontSize: '0.95rem' }}>Total Sales</div>
               <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>${totalSales}</div>
            </div>
            <div style={{ background: 'var(--bg-card, #ffffff)', padding: '1.8rem', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
               <div style={{ color: 'var(--text-muted, #64748b)', fontWeight: 600, marginBottom: '0.8rem', fontSize: '0.95rem' }}>Active Orders</div>
               <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>{activeOrders}</div>
            </div>
            <div style={{ background: 'var(--bg-card, #ffffff)', padding: '1.8rem', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
               <div style={{ color: 'var(--text-muted, #64748b)', fontWeight: 600, marginBottom: '0.8rem', fontSize: '0.95rem' }}>Products Count</div>
               <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>{productsCount}</div>
            </div>
            <div style={{ background: 'var(--bg-card, #ffffff)', padding: '1.8rem', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
               <div style={{ color: 'var(--text-muted, #64748b)', fontWeight: 600, marginBottom: '0.8rem', fontSize: '0.95rem' }}>Store Views</div>
               <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>{storeViews}</div>
            </div>
          </div>
          
          <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
             <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', marginBottom: '1.5rem' }}>Revenue Mapping (Mocked Data)</h3>
             <div style={{ height: '300px', width: '100%', background: 'linear-gradient(to top, rgba(16, 185, 129, 0.1), transparent)', borderBottom: '2px solid var(--text-main, #0f172a)', position: 'relative' }}>
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: 0 }}>
                   <polyline points="0,90 20,70 40,80 60,40 80,50 100,20" fill="none" stroke="#10b981" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
             </div>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div style={{ animation: 'fade-in 0.3s ease', background: 'var(--bg-card, #ffffff)', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
           <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                 <tr style={{ borderBottom: '1px solid var(--border-color, #e2e8f0)', background: 'var(--bg-main, #f8fafc)', color: 'var(--text-muted, #64748b)' }}>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Product Name</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Price</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Stock</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Status</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
                 </tr>
              </thead>
              <tbody>
                 {mockProducts.length === 0 ? (
                    <tr>
                       <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>
                          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem', opacity: 0.5 }}>📦</span>
                          No products found. Add a product to get started!
                       </td>
                    </tr>
                 ) : mockProducts.map((p, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color, #e2e8f0)' }}>
                       <td style={{ padding: '1.5rem', fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>{p.name}</td>
                       <td style={{ padding: '1.5rem', color: 'var(--text-muted, #475569)' }}>${p.price.toFixed(2)}</td>
                       <td style={{ padding: '1.5rem', color: 'var(--text-muted, #475569)' }}>{p.stock}</td>
                       <td style={{ padding: '1.5rem' }}>
                          <span style={{ 
                             background: p.status === 'Active' ? 'rgba(16, 185, 129, 0.15)' : p.status === 'Low Stock' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.15)', 
                             color: p.status === 'Active' ? '#10b981' : p.status === 'Low Stock' ? '#d97706' : '#ef4444', 
                             padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700 
                          }}>{p.status}</span>
                       </td>
                       <td style={{ padding: '1.5rem', textAlign: 'right' }}>
                          <button style={{ background: 'transparent', border: '1px solid var(--border-color, #cbd5e1)', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Edit</button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      )}

      {activeTab === 'orders' && (
        <div style={{ animation: 'fade-in 0.3s ease', background: 'var(--bg-card, #ffffff)', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
           <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                 <tr style={{ borderBottom: '1px solid var(--border-color, #e2e8f0)', background: 'var(--bg-main, #f8fafc)', color: 'var(--text-muted, #64748b)' }}>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Order ID</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Customer</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Date</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Status</th>
                    <th style={{ padding: '1.5rem', fontWeight: 600 }}>Total</th>
                 </tr>
              </thead>
              <tbody>
                 {mockOrders.length === 0 ? (
                    <tr>
                       <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>
                          <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem', opacity: 0.5 }}>📝</span>
                          You have no pending orders.
                       </td>
                    </tr>
                 ) : mockOrders.map((o, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-color, #e2e8f0)' }}>
                       <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--text-main, #0f172a)' }}>{o.id}</td>
                       <td style={{ padding: '1.5rem', color: 'var(--text-muted, #475569)' }}>{o.customer}</td>
                       <td style={{ padding: '1.5rem', color: 'var(--text-muted, #475569)' }}>{o.date}</td>
                       <td style={{ padding: '1.5rem' }}>
                          <span style={{ 
                             background: o.status === 'Delivered' ? 'rgba(16, 185, 129, 0.15)' : o.status === 'Shipped' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(245, 158, 11, 0.15)', 
                             color: o.status === 'Delivered' ? '#10b981' : o.status === 'Shipped' ? '#3b82f6' : '#d97706', 
                             padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700 
                          }}>{o.status}</span>
                       </td>
                       <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--text-main, #0f172a)' }}>${o.total.toFixed(2)}</td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      )}

      {activeTab === 'messages' && (
        <div style={{ animation: 'fade-in 0.3s ease', display: 'flex', background: 'var(--bg-card, #ffffff)', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', minHeight: '500px' }}>
           {/* Left Pane: Inbox List */}
           <div style={{ width: '350px', borderRight: '1px solid var(--border-color, #e2e8f0)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color, #e2e8f0)', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>Inbox</div>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                 {mockMessages.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted, #64748b)' }}>Inbox is empty</div>
                 ) : mockMessages.map(m => (
                    <div key={m.id} style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color, #f1f5f9)', cursor: 'pointer', background: m.unread ? 'var(--bg-main, #f8fafc)' : 'transparent', display: 'flex', flexDirection: 'column', gap: '0.4rem', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='var(--bg-main, #f8fafc)'} onMouseOut={e=>e.currentTarget.style.background=m.unread ? 'var(--bg-main, #f8fafc)' : 'transparent'}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: m.unread ? 800 : 600, color: 'var(--text-main, #0f172a)' }}>{m.from}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted, #94a3b8)' }}>{m.time}</span>
                       </div>
                       <div style={{ fontSize: '0.9rem', color: m.unread ? 'var(--text-main, #334155)' : 'var(--text-muted, #64748b)', fontWeight: m.unread ? 600 : 400 }}>{m.subject}</div>
                    </div>
                 ))}
              </div>
           </div>
           {/* Right Pane: Chat Read */}
           <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main, #f8fafc)', color: 'var(--text-muted, #94a3b8)' }}>
              <div style={{ fontSize: '4rem', opacity: 0.5, marginBottom: '1rem' }}>✉️</div>
              <p style={{ fontWeight: 600 }}>Select a message to view the conversation</p>
           </div>
        </div>
      )}

    </div>
  );
};

const Dashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'buyer' | 'seller'>('buyer');
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasShop, setHasShop] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  useEffect(() => {
    let savedRole = localStorage.getItem('userRole');
    if (!savedRole) savedRole = 'both'; 

    setRole(savedRole);
    if (savedRole === 'seller') {
      setViewMode('seller');
    } else {
      setViewMode('buyer');
    }
    
    if (localStorage.getItem('myShop')) {
       setHasShop(true);
    }
  }, []);

  if (!role) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading dashboard...</div>;
  }

  return (
    <div className="layout" style={{ minHeight: '100vh' }}>
      <div className="ambient-glow glow-purple" style={{ top: '-10%', right: '-10%' }}></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '-10%', left: '-10%', transform: 'scale(1.5)' }}></div>
      <div className="mesh-grid" style={{ opacity: 0.2 }}></div>

      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
            <div className="brand-orb" style={{ width: '20px', height: '20px' }}></div>
            <span style={{ fontSize: '1.2rem' }}>E-Commerce</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginRight: '1rem' }}>
                 <Link to="/dashboard" style={{ color: 'var(--white)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Dashboard</Link>
                 {hasShop && <Link to="/my-shop" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--white)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted)'}>My Shop</Link>}
                 <Link to="/marketplace" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--white)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted)'}>Marketplace</Link>
              </div>
              {role === 'both' && (
                <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '0.3rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <button 
                    onClick={() => setViewMode('buyer')}
                    style={{ 
                      background: viewMode === 'buyer' ? 'var(--accent-primary)' : 'transparent',
                      border: 'none', color: 'var(--white)', padding: '0.4rem 1.2rem', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: viewMode === 'buyer' ? 600 : 400
                    }}>Buyer</button>
                  <button 
                    onClick={() => setViewMode('seller')}
                    style={{ 
                      background: viewMode === 'seller' ? 'var(--accent-primary)' : 'transparent',
                      border: 'none', color: 'var(--white)', padding: '0.4rem 1.2rem', borderRadius: '16px', cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: viewMode === 'seller' ? 600 : 400
                    }}>Seller</button>
                </div>
              )}
              
             <div style={{ position: 'relative' }}>
                <div onClick={() => setShowDropdown(!showDropdown)} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', cursor: 'pointer', boxShadow: '0 0 15px rgba(236,72,153,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>U</div>
                
                {showDropdown && (
                   <div className="fade-down" style={{ position: 'absolute', top: '55px', right: 0, background: 'var(--bg-card, #1e293b)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', overflow: 'hidden', minWidth: '200px', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>Signed in as <b style={{color:'var(--white)'}}>User</b></div>
                      {viewMode === 'seller' && <Link to="/my-shop" style={{ padding: '0.8rem 1rem', color: 'var(--white)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>View Storefront</Link>}
                      <Link to="#" style={{ padding: '0.8rem 1rem', color: 'var(--white)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.95rem' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>Account Settings</Link>
                      <div onClick={handleLogout} style={{ padding: '0.8rem 1rem', color: '#f43f5e', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>Log Out</div>
                   </div>
                )}
             </div>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem 4rem 2rem', position: 'relative', zIndex: 10 }}>
        <div className="fade-down" style={{ marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
            Hello there! 👋
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>Here's what's happening {viewMode === 'seller' ? 'with your store' : 'in the marketplace'} today.</p>
        </div>

        {viewMode === 'buyer' ? <BuyerDashboard /> : <SellerDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;
