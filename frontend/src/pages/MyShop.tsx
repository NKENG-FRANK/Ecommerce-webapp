import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyShop = () => {
  const [shop, setShop] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('myShop');
    if (saved) {
      setShop(JSON.parse(saved));
    }
  }, []);

  if (!shop) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '10rem', background: 'var(--bg-main, #f8fafc)' }}>
         <h1 style={{ marginBottom: '1rem', color: 'var(--text-main, #1e293b)' }}>No shop found</h1>
         <p style={{ color: 'var(--text-muted, #64748b)', marginBottom: '2rem' }}>You haven't launched a store yet.</p>
         <Link to="/dashboard" className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '12px', textDecoration: 'none' }}>Go to Dashboard</Link>
      </div>
    );
  }

  const products: any[] = [];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main, #f8fafc)', paddingBottom: '5rem', display: 'flex', flexDirection: 'column' }}>
      
      <nav style={{ padding: '1rem 2rem', background: 'var(--bg-card, #ffffff)', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main, #1e293b)', fontWeight: 700 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></div>
            <span style={{ fontSize: '1.2rem' }}>E-Commerce</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
             <Link to="/dashboard" style={{ color: 'var(--text-muted, #64748b)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--text-main, #1e293b)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted, #64748b)'}>Dashboard</Link>
             <Link to="/my-shop" style={{ color: 'var(--text-main, #1e293b)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>My Shop</Link>
             <Link to="/marketplace" style={{ color: 'var(--text-muted, #64748b)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--text-main, #1e293b)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted, #64748b)'}>Marketplace</Link>
          </div>
      </nav>

      {/* Banner */}
      <div style={{ 
          width: '100%', height: '300px', 
          background: shop.banner ? `url(${shop.banner}) center/cover no-repeat` : 'linear-gradient(135deg, #e0e7ff, #f3e8ff)',
          position: 'relative' 
      }}></div>

      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Profile Elevated Card */}
        <div style={{ 
            marginTop: '-80px', background: 'var(--bg-card, #ffffff)', borderRadius: '24px', padding: '2rem 3rem',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap',
            border: '1px solid var(--border-color, rgba(0,0,0,0.05))'
        }}>
           <div style={{ 
               width: '140px', height: '140px', borderRadius: '50%', 
               background: shop.logo ? `url(${shop.logo}) center/cover no-repeat` : 'linear-gradient(45deg, #f8fafc, #f1f5f9)', 
               border: '4px solid var(--bg-card, #ffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
               fontSize: '3.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' 
           }}>
             {!shop.logo && '🛍️'}
           </div>
           
           <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', letterSpacing: '-0.02em', margin: 0 }}>
                      {shop.name || 'Untitled Store'}
                  </h1>
                  <span style={{ padding: '0.3rem 0.8rem', background: '#dcfce7', color: '#166534', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600 }}>Verified Shop</span>
              </div>
              <div style={{ color: 'var(--accent-tertiary, #6366f1)', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>●</span> {shop.category || 'Retail Collection'}
              </div>
           </div>
           
           <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ padding: '0.8rem 2rem', background: 'var(--text-main, #0f172a)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>Follow Store</button>
              <button style={{ padding: '0.8rem 1.2rem', background: 'var(--bg-main, #f1f5f9)', color: 'var(--text-main, #0f172a)', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer' }}>Share</button>
           </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 350px) 1fr', gap: '2rem', alignItems: 'start' }}>
           
           {/* Left Sidebar */}
           <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2rem', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid var(--border-color, rgba(0,0,0,0.05))' }}>
                 <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main, #0f172a)', fontWeight: 700, borderBottom: '1px solid var(--border-color, rgba(0,0,0,0.1))', paddingBottom: '0.8rem' }}>About Store</h3>
                 <p style={{ color: 'var(--text-muted, #64748b)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                   {shop.description || 'Welcome to our verified storefront. We provide the highest quality products and collections in the market. Shop with confidence!'}
                 </p>
              </div>

              <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2rem', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid var(--border-color, rgba(0,0,0,0.05))' }}>
                 <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main, #0f172a)', fontWeight: 700, borderBottom: '1px solid var(--border-color, rgba(0,0,0,0.1))', paddingBottom: '0.8rem' }}>Supported Payments</h3>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {shop.paymentMethod === 'stripe' && <div style={{ border: '1px solid var(--border-color, rgba(0,0,0,0.1))', padding: '0.8rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-main, #f8fafc)' }}><span style={{background: '#635BFF', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600}}>Stripe</span> <span style={{fontSize: '0.85rem', color: 'var(--text-muted, #475569)', fontWeight: 500}}>Cards Accepted</span></div>}
                    {shop.paymentMethod === 'paypal' && <div style={{ border: '1px solid var(--border-color, rgba(0,0,0,0.1))', padding: '0.8rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-main, #f8fafc)' }}><span style={{background: '#003087', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600}}>PayPal</span> <span style={{fontSize: '0.85rem', color: 'var(--text-muted, #475569)', fontWeight: 500}}>Verified</span></div>}
                    {shop.paymentMethod === 'mobile_money' && <div style={{ border: '1px solid var(--border-color, rgba(0,0,0,0.1))', padding: '0.8rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-main, #f8fafc)' }}><span style={{background: '#FFCC00', color: '#000', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700}}>MTN MoMo</span> <span style={{fontSize: '0.85rem', color: 'var(--text-muted, #475569)', fontWeight: 500}}>Instant</span></div>}
                    {shop.paymentMethod === 'orange_money' && <div style={{ border: '1px solid var(--border-color, rgba(0,0,0,0.1))', padding: '0.8rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-main, #f8fafc)' }}><span style={{background: '#FF6600', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600}}>Orange</span> <span style={{fontSize: '0.85rem', color: 'var(--text-muted, #475569)', fontWeight: 500}}>Supported</span></div>}
                    {!shop.paymentMethod && <div style={{ border: '1px solid var(--border-color, rgba(0,0,0,0.1))', padding: '0.8rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-main, #f8fafc)' }}><span style={{background: 'var(--text-muted, #cbd5e1)', color: 'var(--text-main, #334155)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600}}>Standard</span> <span style={{fontSize: '0.85rem', color: 'var(--text-muted, #475569)', fontWeight: 500}}>Checkout</span></div>}
                 </div>
              </div>
           </div>

           {/* Main Content: Products */}
           <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid var(--border-color, rgba(0,0,0,0.05))', minHeight: '500px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                 <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, color: 'var(--text-main, #0f172a)' }}>Featured Products</h2>
                 <div style={{ background: 'var(--bg-main, #f1f5f9)', padding: '0.4rem 1rem', borderRadius: '12px', display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main, #0f172a)', fontWeight: 600, cursor: 'pointer' }}>Latest</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted, #64748b)', fontWeight: 500, cursor: 'pointer' }}>Popular</span>
                 </div>
              </div>
              
              {products.length === 0 ? (
                 <div style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--bg-main, #f8fafc)', borderRadius: '20px', border: '2px dashed var(--border-color, #cbd5e1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--border-color, #e2e8f0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>🛒</div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main, #0f172a)', fontWeight: 700 }}>No Products Available</h3>
                    <p style={{ color: 'var(--text-muted, #64748b)', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6, fontSize: '0.95rem' }}>This store is currently setting up their inventory. Check back shortly for their premium collection!</p>
                 </div>
              ) : (
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                    {products.map((item, index) => (
                        <Link to={`/product/${index}`} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
                            <div style={{ height: '240px', background: 'var(--bg-main, #f1f5f9)', borderRadius: '16px', marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
                               <img src="https://via.placeholder.com/300" alt="product" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.8 }} />
                               <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', color: '#000', transition: 'color 0.2s' }} onClick={(e)=>{e.preventDefault(); alert("Saved!")}} onMouseOver={e=>e.currentTarget.style.color='#f43f5e'} onMouseOut={e=>e.currentTarget.style.color='#000'}>♡</div>
                            </div>
                            <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem', fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>{item?.name || 'Premium Item'}</h3>
                            <div style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>{shop.category || 'Retail'}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                               <div style={{ color: 'var(--text-main, #0f172a)', fontWeight: 800, fontSize: '1.2rem' }}>${item?.price || '0.00'}</div>
                               <button onClick={(e)=>{e.preventDefault(); alert("Added to cart!")}} style={{ background: 'var(--text-main, #0f172a)', border: 'none', color: '#fff', padding: '0.4rem 1rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='#334155'} onMouseOut={e=>e.currentTarget.style.background='var(--text-main, #0f172a)'}>Add</button>
                            </div>
                        </Link>
                    ))}
                 </div>
              )}
           </div>
        </div>
      </main>
    </div>
  );
};

export default MyShop;
