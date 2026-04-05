import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateShop = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const logoInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);
  
  // Shop data state
  const [shopData, setShopData] = useState({
    name: '',
    category: '',
    description: '',
    logo: null as string | null,
    banner: null as string | null,
    paymentMethod: ''
  });

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleLaunch = () => {
    // Persist shop details globally
    localStorage.setItem('myShop', JSON.stringify(shopData));
    navigate('/my-shop');
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setShopData({...shopData, logo: url});
    }
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setShopData({...shopData, banner: url});
    }
  };

  const renderStepIndicator = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '15px', left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}>
         <div style={{ height: '100%', background: 'var(--accent-primary)', width: `${((step - 1) / 3) * 100}%`, transition: 'width 0.4s ease' }}></div>
      </div>
      {['Basic Info', 'Branding', 'Payment', 'Preview'].map((title, i) => {
        const s = i + 1;
        const active = step >= s;
        return (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
             <div style={{ 
               width: '32px', height: '32px', borderRadius: '50%', 
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               background: active ? 'var(--accent-primary)' : 'rgba(15,12,41,1)',
               border: `2px solid ${active ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)'}`,
               color: active ? 'var(--white)' : 'var(--text-dim)', transition: 'all 0.3s ease',
               fontWeight: 600, fontSize: '0.9rem',
               boxShadow: active ? '0 0 15px rgba(139, 92, 246, 0.5)' : 'none'
             }}>
               {active && step > s ? '✓' : s}
             </div>
             <span style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: active ? 'var(--white)' : 'var(--text-dim)', fontWeight: active ? 500 : 400, transition: 'color 0.3s ease' }}>{title}</span>
          </div>
        )
      })}
    </div>
  );

  return (
    <div className="layout" style={{ minHeight: '100vh', padding: '2rem' }}>
      <div className="ambient-glow glow-purple" style={{ top: '10%', left: '20%' }}></div>
      <div className="ambient-glow glow-pink" style={{ bottom: '10%', right: '20%' }}></div>
      <div className="mesh-grid" style={{ opacity: 0.1 }}></div>

      <nav style={{ marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <Link to="/dashboard" style={{ color: 'var(--text-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, width: 'fit-content' }}>
          <span>←</span> Back to Dashboard
        </Link>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '-0.02em', textAlign: 'center' }}>Build your Empire</h1>
        <p style={{ color: 'var(--text-dim)', marginBottom: '3rem', textAlign: 'center', fontSize: '1.1rem' }}>Let's get your store set up and ready exclusively for business.</p>

        <div className="glass-card" style={{ padding: '3.5rem 3rem', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
          {renderStepIndicator()}

          <div style={{ minHeight: '300px' }}>
            {/* STEP 1: Basic Info */}
            {step === 1 && (
              <div style={{ animation: 'fade-in 0.4s ease' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 600 }}>1. Basic Information</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', color: 'var(--text-dim)', fontWeight: 500 }}>Shop Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Nexus Tech Store"
                      value={shopData.name}
                      onChange={e => setShopData({...shopData, name: e.target.value})}
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', color: 'var(--text-dim)', fontWeight: 500 }}>Category</label>
                    <select 
                      value={shopData.category}
                      onChange={e => setShopData({...shopData, category: e.target.value})}
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <option value="" disabled style={{ color: '#000' }}>Select a category</option>
                      <option value="Electronics" style={{ color: '#000' }}>Electronics</option>
                      <option value="Fashion" style={{ color: '#000' }}>Fashion</option>
                      <option value="Home Goods" style={{ color: '#000' }}>Home & Garden</option>
                      <option value="Beauty" style={{ color: '#000' }}>Beauty</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', color: 'var(--text-dim)', fontWeight: 500 }}>Description</label>
                    <textarea 
                      placeholder="What are you selling?"
                      value={shopData.description}
                      onChange={e => setShopData({...shopData, description: e.target.value})}
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--white)', fontSize: '1rem', outline: 'none', minHeight: '120px', resize: 'vertical', transition: 'border-color 0.3s ease' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Branding */}
            {step === 2 && (
              <div style={{ animation: 'fade-in 0.4s ease' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 600 }}>2. Store Branding</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', color: 'var(--text-dim)' }}>Shop Logo</label>
                    <input type="file" accept="image/*" ref={logoInputRef} onChange={handleLogoUpload} style={{ display: 'none' }} />
                    <div 
                      onClick={() => logoInputRef.current?.click()}
                      style={{ 
                        border: '2px dashed rgba(255,255,255,0.15)', padding: shopData.logo ? '1rem' : '2.5rem', 
                        borderRadius: '16px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.02)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                      }} 
                      onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }} 
                      onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                    >
                      {shopData.logo ? (
                        <>
                          <img src={shopData.logo} alt="Logo Preview" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--accent-primary)' }} />
                          <p style={{ color: 'var(--accent-secondary)', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>Click to change logo</p>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>📸</div>
                          <p style={{ color: 'var(--text-dim)', fontWeight: 500, margin: 0 }}>Click to upload logo</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.6rem', color: 'var(--text-dim)' }}>Store Banner</label>
                    <input type="file" accept="image/*" ref={bannerInputRef} onChange={handleBannerUpload} style={{ display: 'none' }} />
                    <div 
                      onClick={() => bannerInputRef.current?.click()}
                      style={{ 
                        border: '2px dashed rgba(255,255,255,0.15)', padding: shopData.banner ? '0' : '3.5rem 2rem', 
                        borderRadius: '16px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.02)',
                        overflow: 'hidden', position: 'relative', minHeight: shopData.banner ? '160px' : 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                      }} 
                      onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }} 
                      onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                    >
                      {shopData.banner ? (
                        <>
                          <img src={shopData.banner} alt="Banner Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '0.5rem 1rem', borderRadius: '20px', position: 'relative', zIndex: 10, backdropFilter: 'blur(4px)' }}>
                            <p style={{ color: 'var(--white)', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>Click to change banner</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🖼️</div>
                          <p style={{ color: 'var(--text-dim)', fontWeight: 500, margin: 0 }}>Click to upload a cover image (1200x400 recommended)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Payment */}
            {step === 3 && (
              <div style={{ animation: 'fade-in 0.4s ease' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 600 }}>3. How you get paid</h2>
                <p style={{ color: 'var(--text-dim)', marginBottom: '2.5rem' }}>Connect your payout accounts to securely receive your earnings directly.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: `2px solid ${shopData.paymentMethod === 'stripe' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: shopData.paymentMethod === 'stripe' ? '0 0 20px rgba(139, 92, 246, 0.2)' : 'none' }} onClick={() => setShopData({...shopData, paymentMethod: 'stripe'})}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <div style={{ width: '48px', height: '48px', background: '#635BFF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.4rem' }}>S</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.2rem' }}>Stripe Setup</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Accept Apple Pay, Google Pay & Cards</div>
                      </div>
                    </div>
                    {shopData.paymentMethod === 'stripe' && <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Selected</div>}
                  </div>

                  <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: `2px solid ${shopData.paymentMethod === 'mobile_money' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: shopData.paymentMethod === 'mobile_money' ? '0 0 20px rgba(139, 92, 246, 0.2)' : 'none' }} onClick={() => setShopData({...shopData, paymentMethod: 'mobile_money'})}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <div style={{ width: '48px', height: '48px', background: '#FFCC00', borderRadius: '12px', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.4rem' }}>M</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.2rem' }}>MTN Mobile Money</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Receive payments instantly via MoMo</div>
                      </div>
                    </div>
                    {shopData.paymentMethod === 'mobile_money' && <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Selected</div>}
                  </div>
                  
                  <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: `2px solid ${shopData.paymentMethod === 'orange_money' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: shopData.paymentMethod === 'orange_money' ? '0 0 20px rgba(139, 92, 246, 0.2)' : 'none' }} onClick={() => setShopData({...shopData, paymentMethod: 'orange_money'})}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <div style={{ width: '48px', height: '48px', background: '#FF6600', borderRadius: '12px', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.4rem' }}>O</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.2rem' }}>Orange Money</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Accept secure payments through Orange Money</div>
                      </div>
                    </div>
                    {shopData.paymentMethod === 'orange_money' && <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Selected</div>}
                  </div>
                  
                  <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: `2px solid ${shopData.paymentMethod === 'paypal' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: shopData.paymentMethod === 'paypal' ? '0 0 20px rgba(139, 92, 246, 0.2)' : 'none' }} onClick={() => setShopData({...shopData, paymentMethod: 'paypal'})}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <div style={{ width: '48px', height: '48px', background: '#003087', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.4rem' }}>P</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.2rem' }}>PayPal Connect</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Receive funds directly to your PayPal account</div>
                      </div>
                    </div>
                    {shopData.paymentMethod === 'paypal' && <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Selected</div>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Preview */}
            {step === 4 && (
              <div style={{ animation: 'fade-in 0.4s ease' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 600 }}>4. Review & Launch</h2>
                <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>Here is a sneak peek of your new storefront built with your details.</p>
                <div className="glass-card" style={{ padding: '0', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                   {/* Banner */}
                   <div style={{ height: '160px', background: shopData.banner ? `url(${shopData.banner}) center/cover` : 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(139,92,246,0.3))', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '1.2rem' }}>
                       <span style={{ background: 'rgba(0,0,0,0.5)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--white)', backdropFilter: 'blur(4px)', fontWeight: 500 }}>Live Preview</span>
                   </div>
                   
                   <div style={{ padding: '0 2.5rem 2.5rem 2.5rem', position: 'relative' }}>
                     {/* Logo & Header Row */}
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '-50px', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
                         <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: shopData.logo ? `url(${shopData.logo}) center/cover` : 'linear-gradient(45deg, #0f0c29, #302b63)', border: '5px solid #1a1625', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', boxShadow: '0 5px 15px rgba(0,0,0,0.5)', zIndex: 2, position: 'relative' }}>
                           {!shopData.logo && '🛍️'}
                         </div>
                         
                         <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', paddingBottom: '0.5rem' }}>
                             <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 500 }}>Payments:</span>
                             {shopData.paymentMethod === 'stripe' && <span style={{ background: '#635BFF', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600 }}>Stripe</span>}
                             {shopData.paymentMethod === 'paypal' && <span style={{ background: '#003087', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600 }}>PayPal</span>}
                             {shopData.paymentMethod === 'mobile_money' && <span style={{ background: '#FFCC00', color: '#000', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 700 }}>Mobile Money</span>}
                             {shopData.paymentMethod === 'orange_money' && <span style={{ background: '#FF6600', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600 }}>Orange Money</span>}
                             {!shopData.paymentMethod && <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>Pending</span>}
                         </div>
                     </div>
                     
                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                         <div>
                             <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{shopData.name || 'Your Epic Shop Name'}</h3>
                             <div style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span>🏷️</span> {shopData.category || 'Uncategorized'}
                             </div>
                         </div>
                     </div>

                     <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginTop: '2rem', padding: '1.2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', borderLeft: '4px solid var(--accent-primary)' }}>
                        {shopData.description || 'Welcome to my brand new store. Grab the best verified products right here! Check out our collection below.'}
                     </p>

                     {/* Mock Products Grid */}
                     <h4 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: 600 }}>Trending Products</h4>
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.2rem' }}>
                        {[1, 2, 3].map(item => (
                            <div key={item} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
                                <div style={{ height: '120px', background: 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))', borderRadius: '12px', marginBottom: '1rem' }}></div>
                                <div style={{ fontSize: '1rem', marginBottom: '0.4rem', fontWeight: 500 }}>{shopData.category ? `${shopData.category} Item` : 'Premium Product'} {item}</div>
                                <div style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '1.1rem' }}>${19 * item}.99</div>
                            </div>
                        ))}
                     </div>
                   </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
             <button 
               onClick={handleBack} 
               disabled={step === 1}
               style={{ 
                 padding: '0.9rem 2.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', 
                 color: 'var(--white)', borderRadius: '12px', cursor: step === 1 ? 'not-allowed' : 'pointer', opacity: step === 1 ? 0.3 : 1,
                 fontSize: '1.05rem', transition: 'background 0.2s ease'
               }}
               onMouseOver={e => { if(step !== 1) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
               onMouseOut={e => { if(step !== 1) e.currentTarget.style.background = 'transparent' }}
               >Back</button>
               
             {step < 4 ? (
               <button className="btn-primary" onClick={handleNext} style={{ padding: '0.9rem 3.5rem', borderRadius: '12px', fontSize: '1.05rem', letterSpacing: '0.5px', opacity: (step===1 && !shopData.name) ? 0.5 : 1 }} disabled={step===1 && !shopData.name}>Next Step</button>
             ) : (
               <button className="btn-primary" onClick={handleLaunch} style={{ padding: '0.9rem 3.5rem', borderRadius: '12px', fontSize: '1.05rem', letterSpacing: '0.5px', background: 'linear-gradient(90deg, #10b981, #059669)', boxShadow: '0 10px 20px -5px rgba(16,185,129,0.4)', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>Launch Empire 🚀</button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateShop;
