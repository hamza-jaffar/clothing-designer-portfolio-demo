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
    <div className="relative min-h-screen bg-[#0d0d0d] text-[#f5f5f3] overflow-x-hidden">
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
