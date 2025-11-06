import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TechStack from './components/TechStack';
import Demo from './components/Demo';
import Team from './components/Team';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A2342] text-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Demo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
