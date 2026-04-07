import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally restore saved role to allow switching later
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setSelected(savedRole);
    }
  }, []);

  const handleContinue = () => {
    if (selected) {
      localStorage.setItem('userRole', selected);
      // Redirect to home or dashboard after onboarding
      navigate('/dashboard');
    }
  };

  const options = [
    { id: 'buyer', icon: '🛍️', title: 'Browse & Buy', desc: 'Discover amazing products, brands, and shop as a customer.' },
    { id: 'seller', icon: '🏪', title: 'Create a Shop', desc: 'Set up your empire, build a brand, and start selling today.' },
    { id: 'both', icon: '🔄', title: 'Both', desc: 'Enjoy the best of both worlds. Shop for yourself and run your business.' },
  ];

  return (
    <div className="layout" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="ambient-glow glow-cyan" style={{ top: '15%', left: '15%', transform: 'scale(1.2)' }}></div>
      <div className="ambient-glow glow-purple" style={{ bottom: '15%', right: '15%', transform: 'scale(1.4)' }}></div>
      <div className="mesh-grid"></div>

      <div className="fade-up-more" style={{ width: '100%', maxWidth: '1000px', zIndex: 10, padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.8rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          What do you want to do?
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '3.5rem' }}>
          Select how you plan to use our platform. Don't worry, you can always change this later in your settings.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {options.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className="glass-card"
              style={{
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '24px',
                border: `2px solid ${selected === opt.id ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)'}`,
                background: selected === opt.id ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                boxShadow: selected === opt.id ? '0 15px 40px -10px rgba(139, 92, 246, 0.3)' : '0 10px 30px -15px rgba(0,0,0,0.5)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: selected === opt.id ? 'translateY(-12px)' : 'translateY(0)',
              }}
              onMouseOver={(e) => {
                if (selected !== opt.id) {
                  e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
              onMouseOut={(e) => {
                if (selected !== opt.id) {
                  e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem', filter: selected === opt.id ? 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' : 'none', transition: 'all 0.3s ease' }}>
                {opt.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '0.8rem', textAlign: 'center', color: selected === opt.id ? 'var(--white)' : 'rgba(255,255,255,0.9)' }}>{opt.title}</h3>
              <p style={{ color: 'var(--text-dim)', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {opt.desc}
              </p>
              
              {/* Custom Radio Indicator */}
              <div style={{
                marginTop: '2rem',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: `2px solid ${selected === opt.id ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)'}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: selected === opt.id ? 'var(--accent-primary)' : 'transparent',
                transition: 'all 0.2s ease',
              }}>
                {selected === opt.id && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'fade-in 0.2s ease' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            className="btn-primary" 
            onClick={handleContinue}
            disabled={!selected}
            style={{ 
              padding: '1.3rem 4rem', 
              fontSize: '1.15rem', 
              letterSpacing: '0.5px',
              borderRadius: '16px',
              boxShadow: selected ? '0 10px 30px -10px rgba(6, 182, 212, 0.5)' : 'none',
              opacity: selected ? 1 : 0.5,
              cursor: selected ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease'
            }}
          >
            Continue
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Onboarding;
