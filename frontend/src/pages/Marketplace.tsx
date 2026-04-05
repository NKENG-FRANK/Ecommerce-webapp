import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Premium Wireless Headphones', price: 299.99, rating: 4.8, reviews: 124, category: 'Electronics', image: '🎧' },
  { id: 2, name: 'Minimalist Smartwatch', price: 199.50, rating: 4.5, reviews: 89, category: 'Electronics', image: '⌚' },
  { id: 3, name: 'Ergonomic Office Chair', price: 349.00, rating: 4.9, reviews: 210, category: 'Home Goods', image: '🪑' },
  { id: 4, name: 'Organic Cotton T-Shirt', price: 24.99, rating: 4.6, reviews: 54, category: 'Fashion', image: '👕' },
  { id: 5, name: 'Hydration Tracking Bottle', price: 34.50, rating: 4.3, reviews: 15, category: 'Sports', image: '💧' },
  { id: 6, name: 'Professional Camera Lens', price: 899.00, rating: 5.0, reviews: 42, category: 'Electronics', image: '📸' },
  { id: 7, name: 'Ceramic Coffee Mug', price: 18.00, rating: 4.7, reviews: 180, category: 'Home Goods', image: '☕' },
  { id: 8, name: 'Noise-Canceling Earbuds', price: 149.99, rating: 4.4, reviews: 75, category: 'Electronics', image: '🎧' },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hasShop, setHasShop] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('myShop')) setHasShop(true);
  }, []);

  // Deriving categories strictly from products
  const categories = Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)));

  // Filter products by UI inputs
  const displayedProducts = MOCK_PRODUCTS.filter(p => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main, #f8fafc)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar Shared UI */}
      <nav style={{ padding: '0.8rem 2rem', background: 'var(--bg-card, #ffffff)', borderBottom: '1px solid var(--border-color, #f1f5f9)', position: 'sticky', top: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main, #1e293b)', fontWeight: 700 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></div>
            <span style={{ fontSize: '1.2rem' }}>E-Commerce Explore</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
             <Link to="/dashboard" style={{ color: 'var(--text-muted, #64748b)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--text-main, #0f172a)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted, #64748b)'}>Dashboard</Link>
             {hasShop && <Link to="/my-shop" style={{ color: 'var(--text-muted, #64748b)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--text-main, #0f172a)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted, #64748b)'}>My Shop</Link>}
             <Link to="/marketplace" style={{ color: 'var(--text-main, #0f172a)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Marketplace</Link>
             
             <Link to="/cart" style={{ textDecoration: 'none', position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                <span style={{ fontSize: '1.5rem', marginTop: '5px' }}>🛒</span>
                <span style={{ position: 'absolute', top: '-2px', right: '-8px', background: 'var(--accent-quaternary, #f43f5e)', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
             </Link>
          </div>
      </nav>

      <main style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'minmax(240px, 260px) 1fr', gap: '4rem', alignItems: 'start' }}>
         
         {/* Sidebar Navigation & Filters */}
         <aside style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'sticky', top: '100px' }}>
            <div>
               <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '1.2rem' }}>Categories</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div 
                    onClick={() => setSelectedCategory(null)}
                    style={{ padding: '0.6rem 1rem', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', borderRadius: '10px', background: selectedCategory === null ? 'var(--bg-card, #ffffff)' : 'transparent', fontWeight: selectedCategory === null ? 600 : 500, color: selectedCategory === null ? 'var(--accent-tertiary, #6366f1)' : 'var(--text-muted, #475569)', boxShadow: selectedCategory === null ? '0 1px 3px rgba(0,0,0,0.05)' : 'none' }}>
                     <span>All Products</span>
                     <span>{MOCK_PRODUCTS.length}</span>
                  </div>
                  {categories.map(cat => {
                     const isActive = selectedCategory === cat;
                     const count = MOCK_PRODUCTS.filter(p => p.category === cat).length;
                     return (
                       <div 
                         key={cat} onClick={() => setSelectedCategory(cat)}
                         style={{ padding: '0.6rem 1rem', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', borderRadius: '10px', background: isActive ? 'var(--bg-card, #ffffff)' : 'transparent', fontWeight: isActive ? 600 : 500, color: isActive ? 'var(--accent-tertiary, #6366f1)' : 'var(--text-muted, #475569)', transition: 'all 0.2s', boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.05)' : 'none' }}
                         onMouseOver={e => { if(!isActive) e.currentTarget.style.color='var(--text-main, #0f172a)' }}
                         onMouseOut={e => { if(!isActive) e.currentTarget.style.color='var(--text-muted, #475569)' }}
                       >
                          <span>{cat}</span>
                          <span>{count}</span>
                       </div>
                     )
                  })}
               </div>
            </div>

            <div style={{ height: '1px', background: 'var(--border-color, #e2e8f0)' }}></div>

            <div>
               <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '1.2rem' }}>Price Range</h3>
               <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <input type="number" placeholder="Min" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color, #cbd5e1)', outline: 'none', background: 'var(--bg-card, #ffffff)', fontWeight: 500 }} />
                  <span style={{ color: 'var(--text-muted)' }}>-</span>
                  <input type="number" placeholder="Max" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color, #cbd5e1)', outline: 'none', background: 'var(--bg-card, #ffffff)', fontWeight: 500 }} />
               </div>
               <button style={{ width: '100%', marginTop: '1.2rem', padding: '0.8rem', background: 'var(--bg-card, #ffffff)', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', fontWeight: 600, color: 'var(--text-main, #0f172a)', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='var(--bg-main, #f8fafc)'} onMouseOut={e=>e.currentTarget.style.background='var(--bg-card, #ffffff)'}>Apply Price</button>
            </div>

            <div style={{ height: '1px', background: 'var(--border-color, #e2e8f0)' }}></div>

            <div>
               <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', marginBottom: '1.2rem' }}>Customer Ratings</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[4, 3, 2, 1].map(stars => (
                     <label key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                        <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-tertiary, #6366f1)' }} />
                        <div style={{ color: '#fbbf24', fontSize: '1rem', letterSpacing: '2px' }}>
                           {'★'.repeat(stars)}{'☆'.repeat(5 - stars)} 
                        </div>
                        <span style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem', fontWeight: 500 }}>& Up</span>
                     </label>
                  ))}
               </div>
            </div>
         </aside>

         {/* Product Grid Area */}
         <div>
            {/* Search & Sort Head */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem', background: 'var(--bg-card, #ffffff)', padding: '1rem 1.5rem', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid var(--border-color, #f1f5f9)' }}>
               <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '1.1rem' }}>🔍</span>
                  <input 
                     type="text" 
                     placeholder="Search for premium products..." 
                     value={searchTerm}
                     onChange={e => setSearchTerm(e.target.value)}
                     style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)', outline: 'none', fontSize: '0.95rem', background: 'var(--bg-main, #f8fafc)', transition: 'border-color 0.2s', fontWeight: 500 }}
                  />
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem', fontWeight: 500 }}>Sort by:</span>
                  <select style={{ padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)', outline: 'none', background: 'var(--bg-main, #f8fafc)', fontWeight: 600, color: 'var(--text-main, #0f172a)', cursor: 'pointer' }}>
                     <option>Recommended</option>
                     <option>Price: Low to High</option>
                     <option>Price: High to Low</option>
                     <option>Newest Arrivals</option>
                  </select>
               </div>
            </div>

            {/* Total Results Identifier */}
            <div style={{ marginBottom: '2rem', color: 'var(--text-muted, #64748b)', fontSize: '0.95rem', fontWeight: 500 }}>
                Showing <strong style={{color: 'var(--text-main, #0f172a)'}}>{displayedProducts.length}</strong> results {selectedCategory && <span>in <strong style={{color: 'var(--accent-tertiary, #6366f1)'}}>{selectedCategory}</strong></span>}
            </div>

            {/* Results Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
               {displayedProducts.length === 0 ? (
                  <div style={{ gridColumn: '1 / -1', padding: '5rem 2rem', textAlign: 'center', background: 'var(--bg-card, #ffffff)', borderRadius: '24px', border: '2px dashed var(--border-color, #e2e8f0)' }}>
                     <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>🔎</div>
                     <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main, #0f172a)' }}>No matches found</h3>
                     <p style={{ color: 'var(--text-muted, #64748b)' }}>We couldn't find any products matching your current filters.</p>
                  </div>
               ) : (
                  displayedProducts.map(product => (
                     <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit', background: 'var(--bg-card, #ffffff)', borderRadius: '20px', border: '1px solid var(--border-color, #e2e8f0)', padding: '1.5rem', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer', display: 'block' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.08)' }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                        
                        <div style={{ background: 'var(--bg-main, #f1f5f9)', height: '240px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem', marginBottom: '1.5rem', position: 'relative' }}>
                           {product.image}
                           <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', cursor: 'pointer', color: '#94a3b8', fontSize: '1.2rem', transition: 'color 0.2s' }} onClick={(e)=>{e.preventDefault(); alert("Saved to wishlist!")}} onMouseOver={e=>e.currentTarget.style.color='#f43f5e'} onMouseOut={e=>e.currentTarget.style.color='#94a3b8'}>♡</div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                           <span style={{ fontSize: '0.8rem', color: 'var(--accent-tertiary, #6366f1)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{product.category}</span>
                           <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', margin: 0, lineHeight: 1.3 }}>{product.name}</h3>
                           
                           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                              <span style={{ color: '#fbbf24', fontSize: '0.9rem' }}>★</span>
                              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main, #0f172a)' }}>{product.rating}</span>
                              <span style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.85rem' }}>({product.reviews})</span>
                           </div>

                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1.5rem' }}>
                              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>${product.price}</span>
                              <button onClick={(e)=>{e.preventDefault(); alert("Added to cart!")}} style={{ background: 'var(--text-main, #0f172a)', color: '#fff', border: 'none', padding: '0.7rem 1.4rem', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} onMouseOver={e=>e.currentTarget.style.background='#334155'} onMouseOut={e=>e.currentTarget.style.background='var(--text-main, #0f172a)'}>Add to Cart</button>
                           </div>
                        </div>

                     </Link>
                  ))
               )}
            </div>

         </div>
      </main>
    </div>
  );
};

export default Marketplace;
