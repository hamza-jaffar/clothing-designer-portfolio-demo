import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [parisTime, setParisTime] = useState('');

  // Update Paris local time in real-time
  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setParisTime(timeStr);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const marqueeWords = [
    "SARTORIAL INTEGRITY",
    "ARCHITECTURAL DRAPE",
    "SUSTAINABLE ORIGIN",
    "HANDCRAFTED IN PARIS",
    "RAW TEXTURAL DUALITY",
    "MONOLITHIC SILHOUETTE"
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#0d0d0d] flex flex-col justify-between pt-32 pb-12 overflow-hidden editorial-grid"
    >
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#f5f5f3]/3 filter blur-[150px] pointer-events-none" />

      {/* Main Split Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
        
        {/* Left Column: Overlapping Typography & Narrow Image */}
        <div className="lg:col-span-7 flex flex-col justify-center relative select-none">
          
          {/* Background big subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-12 left-0 font-sans text-5xl md:text-8xl font-thin tracking-[0.2em] text-[#f5f5f3] uppercase pointer-events-none"
          >
            H A U T E
          </motion.div>

          {/* Main Title Group */}
          <div className="relative z-20 mt-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-[#f5f5f3]/40 block mb-4"
            >
              COLLECTION / 05
            </motion.span>
            
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-light text-[#f5f5f3] leading-[0.95] tracking-tight uppercase">
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                The Silent
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block text-right lg:pr-24 italic font-normal text-[#f5f5f3]/85"
              >
                Structure
              </motion.span>
            </h1>
          </div>

          {/* Tall, narrow image container that overlaps the text on responsive/layout shifts */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:-right-4 w-40 sm:w-56 md:w-64 lg:w-72 h-[320px] sm:h-[450px] lg:h-[520px] overflow-hidden border border-[#f5f5f3]/10 bg-black shadow-2xl -z-10 opacity-70 lg:opacity-100 transition-luxury">
            <motion.div
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.9 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80" 
                alt="Haute couture tailoring showcase" 
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-95"
              />
            </motion.div>
          </div>
          
        </div>

        {/* Right Column: Editorial Text & Details */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pl-16 space-y-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="w-12 h-[1px] bg-[#f5f5f3]/30" />
            <p className="font-serif text-lg md:text-xl text-[#f5f5f3]/80 leading-relaxed font-light">
              A study in sartorial architecture. We mold heavy canvas and delicate silk to drape around the human canvas, creating garments that are sculptures in slow motion.
            </p>
            <p className="font-sans text-xs tracking-widest text-[#f5f5f3]/40 leading-loose uppercase">
              No excess. No shortcuts. Just structural integrity born of raw textures and meticulous geometry. Handmade at our Paris atelier.
            </p>
          </motion.div>

          {/* Micro Information Node */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-[#f5f5f3]/10 pt-6 w-full max-w-sm"
          >
            <div>
              <span className="block text-[9px] tracking-widest text-[#f5f5f3]/35 uppercase">Atelier Location</span>
              <span className="block text-xs font-serif text-[#f5f5f3]/70 mt-1">Rue de la Paix, Paris</span>
            </div>
            <div>
              <span className="block text-[9px] tracking-widest text-[#f5f5f3]/35 uppercase">Local Time (Paris)</span>
              <span className="block text-xs font-mono text-[#f5f5f3]/70 mt-1">{parisTime || '19:27:35'}</span>
            </div>
            <div>
              <span className="block text-[9px] tracking-widest text-[#f5f5f3]/35 uppercase">Current Climate</span>
              <span className="block text-xs font-serif text-[#f5f5f3]/70 mt-1">22°C — Partly Cloudy</span>
            </div>
            <div>
              <span className="block text-[9px] tracking-widest text-[#f5f5f3]/35 uppercase">Next Release</span>
              <span className="block text-xs font-serif text-[#f5f5f3]/70 mt-1">September 2026</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Continuous Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-[#f5f5f3]/10 bg-black/40 backdrop-blur-sm py-4 my-8 z-10 select-none">
        <div className="marquee-content flex items-center space-x-12">
          {/* First iteration */}
          {marqueeWords.map((word, i) => (
            <React.Fragment key={`marquee-1-${i}`}>
              <span className="font-sans text-[10px] tracking-[0.3em] font-light text-[#f5f5f3] uppercase">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5f5f3]/30" />
            </React.Fragment>
          ))}
          {/* Second iteration (for seamless wrapping) */}
          {marqueeWords.map((word, i) => (
            <React.Fragment key={`marquee-2-${i}`}>
              <span className="font-sans text-[10px] tracking-[0.3em] font-light text-[#f5f5f3] uppercase">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5f5f3]/30" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center z-10">
        <span className="font-sans text-[9px] tracking-[0.25em] text-[#f5f5f3]/30 uppercase">
          Sculpture In Motion
        </span>
        <motion.a 
          href="#lookbook"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#lookbook')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex items-center space-x-3 text-xs tracking-widest text-[#f5f5f3]/60 hover:text-[#f5f5f3] transition-colors uppercase"
        >
          <span className="font-sans text-[9px] tracking-widest">Scroll Down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};
