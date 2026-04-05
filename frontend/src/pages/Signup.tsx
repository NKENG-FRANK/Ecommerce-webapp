import { useState } from 'react';import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Sample sign up logic
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding');
    }, 1500);
  };

  return (
    <div className="layout" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="ambient-glow glow-purple" style={{ top: '10%', left: '15%', transform: 'scale(1.5)' }}></div>
      <div className="ambient-glow glow-pink" style={{ bottom: '5%', right: '15%', transform: 'scale(1.2)' }}></div>
      <div className="mesh-grid"></div>
      
      <div className="glass-card fade-up-more" style={{ width: '100%', maxWidth: '440px', padding: '3.5rem 2.5rem', position: 'relative', zIndex: 10, borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <Link to="/" className="brand" style={{ justifyContent: 'center', marginBottom: '2rem', textDecoration: 'none' }}>
          <div className="brand-orb" style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}></div>
          <span style={{ fontSize: '1.6rem', letterSpacing: '-0.02em' }}>E-Commerce</span>
        </Link>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', fontWeight: 700, fontSize: '2rem', letterSpacing: '-0.03em' }}>Join the Empire</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Create your free store and start selling globally.</p>
        
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 500 }}>Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%', padding: '0.85rem 1.2rem', borderRadius: '12px', 
                background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--white)', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
              }}
              placeholder="Elon Musk"
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.target.style.background = 'rgba(255, 255, 255, 0.04)'; }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 500 }}>Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '0.85rem 1.2rem', borderRadius: '12px', 
                background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--white)', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
              }}
              placeholder="founder@startup.com"
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.target.style.background = 'rgba(255, 255, 255, 0.04)'; }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 500 }}>Create Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '0.85rem 1.2rem', borderRadius: '12px', 
                background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--white)', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
              }}
              placeholder="••••••••"
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.target.style.background = 'rgba(255, 255, 255, 0.04)'; }}
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1.1rem', justifyContent: 'center', fontSize: '1.05rem', fontWeight: 600, borderRadius: '12px', letterSpacing: '0.5px' }} disabled={isLoading}>
            {isLoading ? (
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div className="pulse-dot-cyan" style={{ position: 'relative', margin: 0 }}></div>
                  Creating Account...
               </div>
            ) : 'Launch My Shop'}
          </button>
        </form>
        
        <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-dim)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600, marginLeft: '0.3rem', transition: 'text-shadow 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.textShadow = '0 0 10px rgba(139, 92, 246, 0.5)'} onMouseOut={(e) => e.currentTarget.style.textShadow = 'none'}>Log in instead</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
