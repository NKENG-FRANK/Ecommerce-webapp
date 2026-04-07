import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'mobile_money'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock inherited Cart calculations
  const itemsCount = 3;
  const subtotal = 449.49;
  const tax = 35.95;
  const shipping = 15.00;
  const total = 500.44;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
       alert("Order Placed Successfully! Mock transaction completed.");
       navigate('/dashboard');
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main, #f8fafc)' }}>
       {/* Simple Checkout Nav */}
       <nav style={{ padding: '1.2rem 2rem', background: 'var(--bg-card, #ffffff)', borderBottom: '1px solid var(--border-color, #f1f5f9)', display: 'flex', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main, #1e293b)', fontWeight: 800 }}>
            <span style={{ fontSize: '1.4rem' }}>Secure Checkout</span>
            <span style={{ fontSize: '1.2rem' }}>🔒</span>
          </Link>
          <Link to="/cart" style={{ position: 'absolute', left: '2rem', textDecoration: 'none', color: 'var(--text-muted, #64748b)', fontWeight: 600, marginTop: '5px' }}>← Back to Cart</Link>
      </nav>

       <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Left Col: Main Form */}
          <form onSubmit={handlePlaceOrder} id="checkout-form" style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '2.5rem', minWidth: '300px' }}>
             
             {/* Section 1: Delivery */}
             <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <span style={{ background: 'var(--text-main, #0f172a)', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>1</span>
                   Delivery Information
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                   <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>First Name</label>
                      <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="John" />
                   </div>
                   <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>Last Name</label>
                      <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="Doe" />
                   </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>Address</label>
                      <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="123 Main Street" />
                   </div>
                   
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem' }}>
                      <div style={{ gridColumn: 'span 2' }}>
                         <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>City</label>
                         <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="New York" />
                      </div>
                      <div>
                         <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>State</label>
                         <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="NY" />
                      </div>
                      <div>
                         <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>ZIP</label>
                         <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="10001" />
                      </div>
                   </div>

                   <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>Phone Number</label>
                      <input required type="tel" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none' }} placeholder="+1 (555) 000-0000" />
                   </div>
                </div>
             </div>

             {/* Section 2: Payment */}
             <div style={{ background: 'var(--bg-card, #ffffff)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   <span style={{ background: 'var(--text-main, #0f172a)', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>2</span>
                   Payment Method
                </h2>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                   <div onClick={() => setPaymentMethod('card')} style={{ flex: 1, minWidth: '120px', border: paymentMethod === 'card' ? '2px solid var(--text-main, #0f172a)' : '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s', background: paymentMethod === 'card' ? 'var(--bg-main, #f8fafc)' : 'transparent' }}>
                      <span style={{ fontSize: '1.5rem' }}>💳</span>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main, #0f172a)' }}>Credit Card</span>
                   </div>
                   <div onClick={() => setPaymentMethod('paypal')} style={{ flex: 1, minWidth: '120px', border: paymentMethod === 'paypal' ? '2px solid #003087' : '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s', background: paymentMethod === 'paypal' ? '#f0f4fb' : 'transparent' }}>
                      <span style={{ fontSize: '1.5rem' }}>🅿️</span>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#003087' }}>PayPal</span>
                   </div>
                   <div onClick={() => setPaymentMethod('mobile_money')} style={{ flex: 1, minWidth: '120px', border: paymentMethod === 'mobile_money' ? '2px solid #ea580c' : '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s', background: paymentMethod === 'mobile_money' ? '#fff7ed' : 'transparent' }}>
                      <span style={{ fontSize: '1.5rem' }}>📱</span>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#ea580c' }}>Mobile Money</span>
                   </div>
                </div>

                {paymentMethod === 'card' && (
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fade-in 0.3s ease' }}>
                      <div>
                         <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>Card Number</label>
                         <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none', background: 'var(--bg-main, #f8fafc)' }} placeholder="0000 0000 0000 0000" />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                         <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>Expiry (MM/YY)</label>
                            <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none', background: 'var(--bg-main, #f8fafc)' }} placeholder="12/26" />
                         </div>
                         <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>CVC/CVV</label>
                            <input required type="password" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none', background: 'var(--bg-main, #f8fafc)' }} placeholder="123" />
                         </div>
                      </div>
                   </div>
                )}
                
                {paymentMethod === 'paypal' && (
                   <div style={{ textAlign: 'center', padding: '2rem', border: '1px dashed #003087', borderRadius: '12px', background: '#f8fafc', animation: 'fade-in 0.3s ease' }}>
                      <p style={{ color: 'var(--text-muted, #475569)', marginBottom: '1rem', fontSize: '0.95rem' }}>You will be redirected to PayPal's secure portal safely.</p>
                   </div>
                )}

                {paymentMethod === 'mobile_money' && (
                   <div style={{ padding: '1rem', border: '1px dashed #ea580c', borderRadius: '12px', background: '#fff7ed', animation: 'fade-in 0.3s ease' }}>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #334155)', marginBottom: '0.5rem' }}>Mobile Money Number</label>
                      <input required type="text" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color, #cbd5e1)', borderRadius: '12px', outline: 'none', background: '#fff' }} placeholder="Enter mobile number" />
                   </div>
                )}

             </div>
          </form>

          {/* Right Col: Order Summary Lock-in */}
          <div style={{ flex: 1, background: 'var(--bg-card, #ffffff)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border-color, #e2e8f0)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', position: 'sticky', top: '100px', minWidth: '300px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', margin: '0 0 1.5rem 0' }}>Order Summary</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted, #475569)', fontSize: '0.95rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Items ({itemsCount})</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>${subtotal.toFixed(2)}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Tax (8%)</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>${tax.toFixed(2)}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-main, #0f172a)' }}>${shipping.toFixed(2)}</span>
               </div>
            </div>

            <div style={{ height: '1px', background: 'var(--border-color, #e2e8f0)', margin: '1.5rem 0' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
               <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main, #0f172a)' }}>Total</span>
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                 <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main, #0f172a)', lineHeight: 1 }}>${total.toFixed(2)}</span>
                 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted, #94a3b8)', marginTop: '0.2rem' }}>Currency: USD</span>
               </div>
            </div>

            <button type="submit" form="checkout-form" disabled={isProcessing} style={{ width: '100%', padding: '1.2rem', background: 'var(--text-main, #0f172a)', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 700, cursor: isProcessing ? 'wait' : 'pointer', transition: 'background 0.2s', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: isProcessing ? 0.7 : 1 }}>
               {isProcessing ? 'Processing Transaction...' : 'Place Order Securely'}
            </button>
            
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted, #94a3b8)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
               Your data is protected. All payments bypass secure RSA 2048-bit encryption methodologies inherently.
            </p>
         </div>

       </main>
    </div>
  );
};

export default CheckoutPage;
