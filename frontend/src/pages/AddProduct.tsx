import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '', category: '', description: '' });
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally we would push to DB. We just alert and redirect back.
    alert('Product added successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="layout" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="ambient-glow glow-cyan" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="mesh-grid" style={{ opacity: 0.1 }}></div>
      
      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
            <div className="brand-orb" style={{ width: '20px', height: '20px' }}></div>
            <span style={{ fontSize: '1.2rem' }}>E-Commerce</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
             <Link to="/dashboard" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--white)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted)'}>Dashboard</Link>
             <Link to="/my-shop" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--white)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted)'}>My Shop</Link>
             <Link to="/marketplace" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--white)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-muted)'}>Marketplace</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '6rem', position: 'relative', zIndex: 10, padding: '6rem 2rem 2rem 2rem' }}>
         <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Add New Product</h1>
         <p style={{ color: 'var(--text-dim)', marginBottom: '3rem', fontSize: '1.1rem' }}>Upload your latest item to your active storefront inventory.</p>

         <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
               
               <div style={{ flex: 1, minWidth: '220px' }}>
                 <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.8rem', color: 'var(--white)' }}>Product Image</label>
                 <div onClick={() => fileRef.current?.click()} style={{ width: '100%', aspectRatio: '1', background: image ? `url(${image}) center/cover` : 'rgba(255,255,255,0.03)', border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'border-color 0.3s' }} onMouseOver={e=>e.currentTarget.style.borderColor='var(--accent-quaternary)'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                    {!image && (
                       <>
                         <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📸</span>
                         <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Upload Image</span>
                       </>
                    )}
                 </div>
                 <input type="file" ref={fileRef} onChange={handleImageUpload} hidden accept="image/*" />
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 2, minWidth: '280px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--white)' }}>Product Name</label>
                    <input required type="text" placeholder="e.g. Wireless Noise-Cancelling Headphones" value={product.name} onChange={e=>setProduct({...product, name: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', outline: 'none' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--white)' }}>Price ($)</label>
                      <input required type="number" step="0.01" placeholder="299.99" value={product.price} onChange={e=>setProduct({...product, price: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--white)' }}>Category</label>
                      <select required value={product.category} onChange={e=>setProduct({...product, category: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', outline: 'none' }}>
                         <option value="">Select Category</option>
                         <option value="Electronics">Electronics</option>
                         <option value="Fashion">Fashion</option>
                         <option value="Home & Garden">Home & Garden</option>
                         <option value="Sports">Sports</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--white)' }}>Description</label>
                    <textarea required placeholder="Describe the item's key features..." value={product.description} onChange={e=>setProduct({...product, description: e.target.value})} rows={4} style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', outline: 'none', resize: 'none' }}></textarea>
                  </div>
               </div>

            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1rem 0' }}></div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
               <Link to="/dashboard" style={{ padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: 'var(--white)', textDecoration: 'none', fontWeight: 600 }}>Discard</Link>
               <button type="submit" className="btn-primary" style={{ padding: '1rem 3rem', borderRadius: '12px', fontSize: '1rem' }}>Publish Product</button>
            </div>
         </form>

      </main>
    </div>
  );
};

export default AddProduct;
