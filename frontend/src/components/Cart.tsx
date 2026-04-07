import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialItems: CartItem[] = [];

const Cart = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(8px)',
          zIndex: 999, transition: 'all 0.3s ease'
        }}
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div className="glass-card" style={{
        position: 'fixed', top: '1rem', bottom: '1rem', right: '1rem',
        width: '100%', maxWidth: '420px', zIndex: 1000, 
        padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column',
        borderRadius: '24px', boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.5)',
        animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: 'rgba(15, 12, 41, 0.75)'
      }}>
         <style>
          {`
            @keyframes slideInRight {
              from { transform: translateX(120%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .cart-item-hover:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
          `}
        </style>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.3rem' }}>🛒</span> Your Cart
          </h2>
          <button onClick={onClose} style={{ 
            background: 'rgba(255,255,255,0.08)', border: 'none', color: 'var(--white)',
            width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'
          }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(236,72,153,0.5)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.5rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-dim)', marginTop: '5rem' }}>
               <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', opacity: 0.4 }}>🛍️</div>
               Your cart is empty <br />
               <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Looks like you haven't added anything yet.</span>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item-hover" style={{ 
                display: 'flex', gap: '1rem', padding: '1rem', 
                borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '65px', height: '65px', borderRadius: '12px', 
                  background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(139,92,246,0.15))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                }}>
                  {item.image}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                     <span style={{ fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.3, maxWidth: '75%' }}>{item.name}</span>
                     <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ef4444'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-dim)'}>🗑️</button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '1.05rem' }}>${item.price.toFixed(2)}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '0.2rem 0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 300 }}>-</button>
                      <span style={{ fontSize: '0.9rem', width: '20px', textAlign: 'center', fontWeight: 500 }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 300 }}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>
               <span>Total</span>
               <span style={{ color: 'var(--accent-primary)', textShadow: '0 0 10px rgba(139, 92, 246, 0.4)' }}>${total.toFixed(2)}</span>
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.1rem', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.5px', borderRadius: '12px' }}>
               Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
