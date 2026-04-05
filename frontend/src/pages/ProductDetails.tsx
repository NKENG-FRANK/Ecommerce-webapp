import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Mock product lookup simulating API
  const product = {
    id,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    rating: 4.8,
    reviews: 124,
    category: 'Electronics',
    description: 'Experience crystal clear audio with our latest premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions designed for all-day wear. The perfect companion for audiophiles and remote workers alike.',
    seller: 'NEXUS Official Store',
    hasStore: true,
    badges: ['Top Rated', 'Fast Shipping'],
    features: ['Active Noise Cancellation', '30-Hour Battery Life', 'Bluetooth 5.3', 'Comfort-Fit Cushions'],
    images: ['🎧', '🎵', '🔋', '📱'] // Using emojis as mock images
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart!`);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main, #f8fafc)', display: 'flex', flexDirection: 'column' }}>
       {/* Shared Header */}
       <nav style={{ padding: '0.8rem 2rem', background: 'var(--bg-card, #ffffff)', borderBottom: '1px solid var(--border-color, #f1f5f9)', position: 'sticky', top: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main, #1e293b)', fontWeight: 700 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></div>
            <span style={{ fontSize: '1.2rem' }}>E-Commerce Store</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
             <Link to="/marketplace" style={{ color: 'var(--text-muted, #64748b)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Back to Marketplace</Link>
             <Link to="/cart" style={{ textDecoration: 'none', position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', marginTop: '5px' }}>🛒</span>
                <span style={{ position: 'absolute', top: '-2px', right: '-8px', background: 'var(--accent-quaternary, #f43f5e)', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
             </Link>
          </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '1.5rem 2rem 0', color: 'var(--text-muted, #64748b)', fontSize: '0.9rem', fontWeight: 500 }}>
         <Link to="/marketplace" style={{color: 'inherit', textDecoration: 'none'}}>Marketplace</Link> / <span style={{color: 'var(--accent-tertiary, #6366f1)', cursor: 'pointer'}}>{product.category}</span> / <span style={{color: 'var(--text-main, #0f172a)'}}>{product.name}</span>
      </div>

      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
         
         {/* Left Col: Media Gallery */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '100px' }}>
            <div style={{ background: 'var(--bg-main, #f1f5f9)', width: '100%', aspectRatio: '1', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10rem', border: '1px solid var(--border-color, #e2e8f0)', position: 'relative' }}>
               {product.images[activeImage]}
               <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', fontSize: '1.2rem', color: '#94a3b8' }}>♡</div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
               {product.images.map((img, idx) => (
                 <div key={idx} onClick={() => setActiveImage(idx)} style={{ width: '80px', height: '80px', borderRadius: '12px', background: 'var(--bg-main, #f1f5f9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', cursor: 'pointer', border: activeImage === idx ? '2px solid var(--accent-tertiary, #6366f1)' : '1px solid var(--border-color, #e2e8f0)', opacity: activeImage === idx ? 1 : 0.6, transition: 'all 0.2s', flexShrink: 0 }}>
                    {img}
                 </div>
               ))}
            </div>
         </div>

         {/* Right Col: Commerce Info */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
               <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: '0 0 0.5rem 0', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{product.name}</h1>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                     <span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                     <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main, #0f172a)' }}>{product.rating}</span>
                     <span style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem', textDecoration: 'underline', cursor: 'pointer' }}>{product.reviews} Reviews</span>
                  </div>
                  <span style={{ color: 'var(--border-color, #cbd5e1)' }}>|</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                     {product.badges.map(b => <span key={b} style={{ background: '#f0fdf4', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>{b}</span>)}
                  </div>
               </div>
               
               <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: '1.5rem 0' }}>
                  ${product.price} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted, #64748b)' }}>+ Free Shipping</span>
               </div>
               
               <p style={{ color: 'var(--text-muted, #475569)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                   {product.description}
               </p>
            </div>

            <div style={{ height: '1px', background: 'var(--border-color, #e2e8f0)' }}></div>

            {/* Config & Add to Cart */}
            <div>
               <label style={{ display: 'block', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '0.8rem' }}>Quantity</label>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-card, #ffffff)' }}>
                     <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '0.8rem 1.2rem', background: 'transparent', border: 'none', borderRight: '1px solid var(--border-color, #cbd5e1)', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--text-main, #0f172a)' }}>-</button>
                     <div style={{ padding: '0.8rem 1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '40px', color: 'var(--text-main, #0f172a)' }}>{quantity}</div>
                     <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '0.8rem 1.2rem', background: 'transparent', border: 'none', borderLeft: '1px solid var(--border-color, #cbd5e1)', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--text-main, #0f172a)' }}>+</button>
                  </div>
                  <span style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem' }}>14 items available</span>
               </div>

               <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                  <button onClick={handleAddToCart} style={{ width: '100%', padding: '1.2rem', background: 'var(--text-main, #0f172a)', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'background 0.2s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <span>🛒</span> Add to Cart
                  </button>
                  <button onClick={handleAddToCart} style={{ width: '100%', padding: '1.2rem', background: 'var(--bg-main, #f1f5f9)', color: 'var(--text-main, #0f172a)', border: 'none', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}>
                    Buy Now
                  </button>
               </div>
            </div>

            {/* Seller Summary Box */}
            <div style={{ marginTop: '1rem', background: 'var(--bg-card, #ffffff)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color, #e2e8f0)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #0f0c29, #302b63)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🛍️</div>
                  <div>
                     <div style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', fontWeight: 600, marginBottom: '0.2rem', textTransform: 'uppercase' }}>Sold By</div>
                     <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-main, #0f172a)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>{product.seller} <span style={{ color: '#10b981', fontSize: '1rem' }}>✓</span></h4>
                  </div>
               </div>
               <Link to="/my-shop" style={{ padding: '0.6rem 1.2rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '10px', textDecoration: 'none', color: 'var(--text-main, #0f172a)', fontWeight: 600, fontSize: '0.9rem' }}>Visit Store</Link>
            </div>

         </div>
      </main>

      {/* Description & Reviews Block */}
      <div style={{ borderTop: '1px solid var(--border-color, #e2e8f0)', marginTop: '3rem', paddingTop: '4rem', paddingBottom: '6rem', background: 'var(--bg-card, #ffffff)' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <div>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', marginBottom: '1.5rem' }}>Product Overview</h2>
               <p style={{ color: 'var(--text-muted, #475569)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
                  Whether you're commuting, working out, or relaxing at home, the {product.name} delivers unparalleled sound consistency. Connect instantly using Bluetooth 5.3 and enjoy zero latency playback across all your devices.
               </p>
               <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '1rem' }}>Key Features</h3>
               <ul style={{ color: 'var(--text-muted, #475569)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem' }}>
                  {product.features.map(f => <li key={f} style={{ marginBottom: '0.5rem' }}>{f}</li>)}
               </ul>
            </div>

            <div>
               <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', marginBottom: '1.5rem' }}>Customer Reviews</h2>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', lineHeight: 1 }}>{product.rating}</div>
                  <div>
                     <div style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: '0.2rem' }}>★★★★★</div>
                     <div style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem' }}>Based on {product.reviews} reviews</div>
                  </div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[1,2,3].map(review => (
                     <div key={review} style={{ borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                           <h4 style={{ margin: 0, color: 'var(--text-main, #0f172a)' }}>John Doe</h4>
                           <div style={{ color: '#fbbf24', fontSize: '0.9rem' }}>★★★★★</div>
                        </div>
                        <p style={{ color: 'var(--text-muted, #475569)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>"Absolutely love this item! The quality is way better than I expected for the price. Highly recommend to everyone."</p>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default ProductDetails;
