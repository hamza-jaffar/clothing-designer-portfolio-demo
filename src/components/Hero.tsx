import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [parisTime, setParisTime] = useState('');

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
    { text: "SARTORIAL INTEGRITY", color: "text-violet-400" },
    { text: "ARCHITECTURAL DRAPE", color: "text-pink-400" },
    { text: "SUSTAINABLE ORIGIN", color: "text-emerald-400" },
    { text: "HANDCRAFTED IN PARIS", color: "text-amber-400" },
    { text: "RAW TEXTURAL DUALITY", color: "text-cyan-400" },
    { text: "MONOLITHIC SILHOUETTE", color: "text-rose-400" }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden editorial-grid"
      style={{ background: 'linear-gradient(135deg, #0a0612 0%, #0f0520 40%, #12061a 70%, #0a0612 100%)' }}
    >
      {/* Vivid aura glows specific to Hero */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)' }} />
      <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,201,255,0.08) 0%, transparent 70%)' }} />

      {/* Main Split Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center relative select-none">

          {/* Background watermark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.07, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="absolute -top-12 left-0 font-sans text-5xl md:text-8xl font-thin tracking-[0.2em] uppercase pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            H A U T E
          </motion.div>

          {/* Main Title */}
          <div className="relative z-20 mt-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="font-sans text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ background: 'linear-gradient(90deg, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              COLLECTION / 05
            </motion.span>

            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-light leading-[0.95] tracking-tight uppercase">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="block text-[#f5f5f3]"
              >
                The Silent
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="block text-right lg:pr-24 italic font-normal"
                style={{ background: 'linear-gradient(90deg, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Structure
              </motion.span>
            </h1>
          </div>

          {/* Tall narrow image with coloured border glow */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 lg:-right-4 w-40 sm:w-56 md:w-64 lg:w-72 h-[320px] sm:h-[450px] lg:h-[520px] overflow-hidden -z-10 opacity-70 lg:opacity-100 transition-luxury"
            style={{ boxShadow: '0 0 40px rgba(167,139,250,0.2), 0 0 80px rgba(236,72,153,0.12)', border: '1px solid rgba(167,139,250,0.25)' }}
          >
            <motion.div
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80"
                alt="Haute couture tailoring showcase"
                className="w-full h-full object-cover contrast-105 brightness-100"
              />
              {/* Violet-pink gradient overlay on image */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.2) 100%)' }} />
            </motion.div>
          </div>

        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pl-16 space-y-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="space-y-6"
          >
            <div className="w-12 h-[1px]" style={{ background: 'linear-gradient(90deg, #a78bfa, #ec4899)' }} />
            <p className="font-serif text-lg md:text-xl text-[#f5f5f3]/90 leading-relaxed font-light">
              A study in sartorial architecture. We mold heavy canvas and delicate silk to drape around the human canvas, creating garments that are sculptures in slow motion.
            </p>
            <p className="font-sans text-xs tracking-widest text-[#f5f5f3]/50 leading-loose uppercase">
              No excess. No shortcuts. Just structural integrity born of raw textures and meticulous geometry. Handmade at our Paris atelier.
            </p>
          </motion.div>

          {/* Micro Info Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6 w-full max-w-sm"
            style={{ borderTop: '1px solid rgba(167,139,250,0.2)' }}
          >
            {[
              { label: 'Atelier Location', value: 'Rue de la Paix, Paris' },
              { label: 'Local Time (Paris)', value: parisTime || '19:27:35', mono: true },
              { label: 'Current Climate', value: '22°C — Partly Cloudy' },
              { label: 'Next Release', value: 'September 2026' },
            ].map(({ label, value, mono }) => (
              <div key={label}>
                <span className="block text-[9px] tracking-widest uppercase mb-1 text-violet-400/70">{label}</span>
                <span className={`block text-xs mt-1 text-[#f5f5f3]/80 ${mono ? 'font-mono' : 'font-serif'}`}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Marquee Ticker — colourful words */}
      <div
        className="w-full overflow-hidden py-4 my-8 z-10 select-none backdrop-blur-sm"
        style={{ borderTop: '1px solid rgba(167,139,250,0.15)', borderBottom: '1px solid rgba(236,72,153,0.15)', background: 'rgba(10,6,18,0.6)' }}
      >
        <div className="marquee-content flex items-center space-x-12">
          {[...marqueeWords, ...marqueeWords].map((item, i) => (
            <React.Fragment key={`marquee-${i}`}>
              <span className={`font-sans text-[10px] tracking-[0.3em] font-medium uppercase ${item.color}`}>
                {item.text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500/40" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center z-10">
        <span className="font-sans text-[9px] tracking-[0.25em] text-violet-400/50 uppercase">
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
          className="flex items-center space-x-3 text-xs tracking-widest transition-colors uppercase text-pink-400/70 hover:text-pink-300"
        >
          <span className="font-sans text-[9px] tracking-widest">Scroll Down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};
