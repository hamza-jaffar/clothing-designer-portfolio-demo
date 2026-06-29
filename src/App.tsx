import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Lookbook } from './components/Lookbook';
import { FabricCanvas } from './components/FabricCanvas';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'lookbook', 'canvas', 'contact'];
      const scrollPosition = window.scrollY + 350; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0612] text-[#f5f5f3] overflow-x-hidden transition-colors duration-1000">
      {/* Dynamic luxury light glow spots (auroras) for premium color depth */}
      <div className="absolute top-[5%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-[#7000ff]/12 via-[#be185d]/12 to-transparent filter blur-[120px] pointer-events-none z-0 animate-pulse duration-[10s]" />
      <div className="absolute top-[35%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#00c9ff]/10 via-[#d4af37]/10 to-transparent filter blur-[150px] pointer-events-none z-0 animate-pulse duration-[12s]" />
      <div className="absolute bottom-[25%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#ec4899]/12 via-[#7000ff]/12 to-transparent filter blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-t from-[#00f2fe]/10 to-transparent filter blur-[100px] pointer-events-none z-0" />

      {/* Dynamic luxury film-grain texture overlay */}
      <div className="bg-grain" />

      {/* Header & Menu Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Full Content Stream */}
      <main>
        {/* Section 1: Hero Philosophy */}
        <Hero />

        {/* Section 2: Runway Track Lookbook Grid */}
        <Lookbook />

        {/* Section 3: Tactile Fabric Showcase */}
        <FabricCanvas />
      </main>

      {/* Section 4: Contact, Appointments & Press Hub */}
      <Footer />
    </div>
  );
}

export default App;
