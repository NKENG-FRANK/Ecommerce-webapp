import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="layout">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-purple"></div>
      <div className="ambient-glow glow-pink"></div>
      <div className="ambient-glow glow-cyan"></div>
      <div className="mesh-grid"></div>

      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
