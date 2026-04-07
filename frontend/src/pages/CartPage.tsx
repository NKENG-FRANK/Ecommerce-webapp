import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Premium Wireless Headphones', price: 299.99, quantity: 1, image: '🎧', category: 'Electronics' },
    { id: 2, name: 'Minimalist Mechanical Keyboard', price: 149.50, quantity: 2, image: '⌨️', category: 'Accessories' }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax mock
  const shipping = items.length > 0 ? 15.00 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main, #f8fafc)', display: 'flex', flexDirection: 'column' }}>
       {/* Shared Header */}
       <nav style={{ padding: '0.8rem 2rem', background: 'var(--bg-card, #ffffff)', borderBottom: '1px solid var(--border-color, #f1f5f9)', position: 'sticky', top: 0, zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main, #1e293b)', fontWeight: 700 }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></div>
            <span style={{ fontSize: '1.2rem' }}>E-Commerce Store</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
             <Link to="/marketplace" style={{ color: 'var(--text-main, #0f172a)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Continue Shopping</Link>
          </div>
      </nav>

      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
         
         {/* Left Col: Cart Items */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 2 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>Shopping Cart</h1>
            
            {items.length === 0 ? (
               <div style={{ background: 'var(--bg-card, #ffffff)', padding: '4rem 2rem', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '4rem', opacity: 0.5 }}>🛒</div>
                  <div>
                     <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', margin: '0 0 0.5rem 0' }}>Your cart is empty</h2>
                     <p style={{ color: 'var(--text-muted, #64748b)', margin: 0, fontSize: '1.05rem' }}>Looks like you haven't added anything yet.</p>
                  </div>
                  <Link to="/marketplace" style={{ background: 'var(--text-main, #0f172a)', color: '#fff', padding: '1rem 2rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginTop: '1rem' }}>Browse Marketplace</Link>
               </div>
            ) : (
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {items.map(item => (
                     <div key={item.id} style={{ background: 'var(--bg-card, #ffffff)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-color, #e2e8f0)', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '16px', background: 'var(--bg-main, #f1f5f9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', flexShrink: 0 }}>
                           {item.image}
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <div>
                                 <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main, #0f172a)', margin: '0 0 0.2rem 0' }}>{item.name}</h3>
                                 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)' }}>{item.category}</span>
                              </div>
                              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>${(item.price * item.quantity).toFixed(2)}</span>
                           </div>
                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '8px', overflow: 'hidden' }}>
                                 <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '0.4rem 0.8rem', background: 'transparent', border: 'none', borderRight: '1px solid var(--border-color, #cbd5e1)', cursor: 'pointer', fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>-</button>
                                 <div style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #0f172a)', minWidth: '40px', textAlign: 'center' }}>{item.quantity}</div>
                                 <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '0.4rem 0.8rem', background: 'transparent', border: 'none', borderLeft: '1px solid var(--border-color, #cbd5e1)', cursor: 'pointer', fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>+</button>
                              </div>
                              <button onClick={() => removeItem(item.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>Remove</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>

         {/* Right Col: Order Summary */}
         <div style={{ flex: 1, background: 'var(--bg-card, #ffffff)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: '300px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: 0 }}>Order Summary</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted, #475569)', fontSize: '0.95rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal ({items.length} items)</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>${subtotal.toFixed(2)}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Estimated Tax</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>${tax.toFixed(2)}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
               </div>
            </div>

            <div style={{ height: '1px', background: 'var(--border-color, #e2e8f0)' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main, #0f172a)' }}>Total Price</span>
               <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main, #0f172a)' }}>${total.toFixed(2)}</span>
            </div>

            <button onClick={() => navigate('/checkout')} disabled={items.length === 0} style={{ width: '100%', padding: '1.2rem', background: items.length === 0 ? 'var(--border-color, #cbd5e1)' : 'var(--text-main, #0f172a)', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 700, cursor: items.length === 0 ? 'not-allowed' : 'pointer', transition: 'background 0.2s', marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
               Checkout Securely <span>🔒</span>
            </button>
            
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', textAlign: 'center', margin: 0 }}>
               By proceeding to checkout, you agree to our Terms of Service and Privacy Policy. All transactions are securely encrypted.
            </p>
         </div>

      </main>
    </div>
  );
};

export default CartPage;
