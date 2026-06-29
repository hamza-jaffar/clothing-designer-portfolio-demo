import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    fabric: 'wool',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate premium submission response
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const pressReleases = [
    {
      pub: "VOGUE EDITORIAL",
      title: "ATELIER JAFFAR REDEFINES SARTORIAL GEOMETRY",
      date: "MAY 2026",
      link: "#"
    },
    {
      pub: "HARPER'S BAZAAR",
      title: "THE ARCHITECTURE OF BIAS DRAPING",
      date: "MARCH 2026",
      link: "#"
    },
    {
      pub: "HIGHSNOBIETY",
      title: "TECHNICAL COUTURE IN THE PARIS UNDERGROUND",
      date: "JANUARY 2026",
      link: "#"
    }
  ];

  return (
    <footer 
      id="contact" 
      className="bg-[#0d0d0d] pt-32 pb-12 border-t border-[#f5f5f3]/10 relative overflow-hidden editorial-grid"
    >
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#f5f5f3]/2 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 relative">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 items-start">
          
          {/* Left Column: Form Booking */}
          <div className="lg:col-span-6 bg-black/40 border border-[#f5f5f3]/10 p-8 md:p-12 backdrop-blur-md relative">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />
            
            <span className="font-sans text-[10px] tracking-widest text-[#f5f5f3]/30 uppercase block mb-2">
              APPOINTMENT BOOKING
            </span>
            <h3 className="font-serif text-3xl font-light text-[#f5f5f3] uppercase tracking-wide mb-8">
              Atelier Request
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1 relative">
                      <label className="text-[9px] tracking-widest text-[#f5f5f3]/40 uppercase block">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-transparent border-b border-[#f5f5f3]/20 focus:border-[#d4af37] text-sm py-2 text-[#f5f5f3] outline-none transition-luxury"
                        placeholder="Jean Laurent"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1 relative">
                      <label className="text-[9px] tracking-widest text-[#f5f5f3]/40 uppercase block">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-transparent border-b border-[#f5f5f3]/20 focus:border-[#d4af37] text-sm py-2 text-[#f5f5f3] outline-none transition-luxury"
                        placeholder="jean.laurent@outlook.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Fabric Focus */}
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-[#f5f5f3]/40 uppercase block">
                        Fabric Matrix Focus
                      </label>
                      <select 
                        value={formState.fabric}
                        onChange={(e) => setFormState({...formState, fabric: e.target.value})}
                        className="w-full bg-[#0d0d0d] border-b border-[#f5f5f3]/20 focus:border-[#d4af37] text-xs py-2 text-[#f5f5f3]/80 outline-none transition-luxury uppercase tracking-widest cursor-pointer"
                      >
                        <option value="wool">Virgin Merino Wool</option>
                        <option value="organza">Mulberry Silk Organza</option>
                        <option value="nylon">Technical Matte Nylon</option>
                        <option value="cashmere">Brushed Cashmere</option>
                        <option value="linen">Belgian Raw Flax</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-[#f5f5f3]/40 uppercase block">
                        Preferred Consultation Date
                      </label>
                      <input 
                        type="date" 
                        required
                        value={formState.date}
                        onChange={(e) => setFormState({...formState, date: e.target.value})}
                        className="w-full bg-transparent border-b border-[#f5f5f3]/20 focus:border-[#d4af37] text-xs py-2 text-[#f5f5f3]/80 outline-none transition-luxury"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest text-[#f5f5f3]/40 uppercase block">
                      Measurements / Aesthetic Notes
                    </label>
                    <textarea 
                      rows={3}
                      value={formState.notes}
                      onChange={(e) => setFormState({...formState, notes: e.target.value})}
                      className="w-full bg-transparent border-b border-[#f5f5f3]/20 focus:border-[#d4af37] text-sm py-2 text-[#f5f5f3] outline-none transition-luxury resize-none"
                      placeholder="e.g. Sculpted shoulder suit request, chest measurement..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#f5f5f3] text-[#0d0d0d] font-sans text-xs uppercase tracking-[0.25em] py-4 hover:bg-[#d4af37] hover:text-[#0d0d0d] transition-luxury cursor-pointer focus:outline-none"
                  >
                    {isLoading ? 'REGISTERING DETAILED CONFIGS...' : 'REQUEST ATELIER INVITATION'}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6 py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37] mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-2xl font-light text-[#f5f5f3] uppercase tracking-wide">
                    Invitation Sent
                  </h4>
                  <p className="font-sans text-xs text-[#f5f5f3]/70 leading-relaxed uppercase tracking-wider max-w-sm mx-auto">
                    Your request for an aesthetic consultation is registered. We will send an official stamped invitation card to your email or physical coordinate within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState({ name: '', email: '', fabric: 'wool', date: '', notes: '' });
                      setIsSubmitted(false);
                    }}
                    className="text-xs uppercase tracking-widest text-[#f5f5f3]/40 hover:text-[#f5f5f3] transition-colors border-b border-[#f5f5f3]/20 pb-1 mt-6 focus:outline-none"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Title & Press Hub */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-16">
            
            {/* Big typographic statement */}
            <div className="space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-[#f5f5f3] uppercase leading-[1.05] tracking-tight">
                Let's shape <br />
                <span className="italic font-normal text-[#f5f5f3]/80">silhouettes</span> <br />
                together.
              </h2>
              <div className="w-16 h-[1px] bg-[#f5f5f3]/30" />
            </div>

            {/* Press Releases Hub */}
            <div className="space-y-6">
              <span className="font-sans text-[10px] tracking-widest text-[#f5f5f3]/30 uppercase block">
                PRESS ARCHIVES
              </span>
              <div className="space-y-6">
                {pressReleases.map((press, i) => (
                  <a 
                    key={i} 
                    href={press.link}
                    className="group block border-b border-[#f5f5f3]/10 pb-4 hover:border-[#f5f5f3] transition-luxury"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-sans text-[8px] tracking-[0.2em] text-[#d4af37] uppercase">
                        {press.pub}
                      </span>
                      <span className="font-mono text-[9px] text-[#f5f5f3]/40 group-hover:text-[#f5f5f3] transition-colors">
                        {press.date}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-light text-[#f5f5f3]/70 group-hover:text-[#f5f5f3] uppercase tracking-wide transition-colors">
                      {press.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>

            {/* General contact data */}
            <div className="grid grid-cols-2 gap-8 text-xs text-[#f5f5f3]/60 uppercase tracking-widest">
              <div>
                <span className="block text-[8px] text-[#f5f5f3]/30 tracking-[0.25em] mb-2">ATELIER CONTACT</span>
                <p className="font-serif lowercase tracking-normal text-sm mb-1 text-[#f5f5f3]">atelier@jaffar.com</p>
                <p>+33 (0)1 44 55 66 77</p>
              </div>
              <div>
                <span className="block text-[8px] text-[#f5f5f3]/30 tracking-[0.25em] mb-2">HOURS</span>
                <p>Mon — Fri</p>
                <p>10:00 — 18:30 CEST</p>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="border-t border-[#f5f5f3]/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-widest text-[#f5f5f3]/30 uppercase">
          <span>© 2026 ATELIER JAFFAR. ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#f5f5f3] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#f5f5f3] transition-colors">Vimeo</a>
            <a href="#" className="hover:text-[#f5f5f3] transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
