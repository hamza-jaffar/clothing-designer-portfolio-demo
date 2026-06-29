import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pressReleases = [
  { pub: "VOGUE EDITORIAL", title: "ATELIER JAFFAR REDEFINES SARTORIAL GEOMETRY", date: "MAY 2026", accent: "#a78bfa" },
  { pub: "HARPER'S BAZAAR", title: "THE ARCHITECTURE OF BIAS DRAPING", date: "MARCH 2026", accent: "#f472b6" },
  { pub: "HIGHSNOBIETY", title: "TECHNICAL COUTURE IN THE PARIS UNDERGROUND", date: "JANUARY 2026", accent: "#22d3ee" },
];

export const Footer: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', fabric: 'wool', date: '', notes: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setIsSubmitted(true); }, 1200);
  };

  return (
    <footer
      id="contact"
      className="pt-32 pb-12 relative overflow-hidden editorial-grid"
      style={{ borderTop: '1px solid rgba(167,139,250,0.2)', background: 'linear-gradient(180deg, #0a0612 0%, #0f0a1e 60%, #0a0612 100%)' }}
    >
      {/* Coloured ambient glows */}
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)' }} />
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 relative">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 items-start">

          {/* Left Column: Booking Form */}
          <div
            className="lg:col-span-6 p-8 md:p-12 backdrop-blur-md relative"
            style={{ background: 'rgba(15,10,30,0.7)', border: '1px solid rgba(167,139,250,0.2)' }}
          >
            {/* Gradient top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #22d3ee)' }} />
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />

            <span
              className="font-sans text-[10px] tracking-widest uppercase block mb-2"
              style={{ background: 'linear-gradient(90deg, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
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
                    {[
                      { label: 'Full Name', type: 'text', key: 'name', placeholder: 'Jean Laurent' },
                      { label: 'Email Address', type: 'email', key: 'email', placeholder: 'jean.laurent@outlook.com' },
                    ].map(({ label, type, key, placeholder }) => (
                      <div key={key} className="space-y-1">
                        <label className="text-[9px] tracking-widest text-violet-400/70 uppercase block">{label}</label>
                        <input
                          type={type}
                          required
                          value={formState[key as keyof typeof formState]}
                          onChange={(e) => setFormState({ ...formState, [key]: e.target.value })}
                          className="w-full bg-transparent text-sm py-2 text-[#f5f5f3] outline-none transition-all duration-300"
                          style={{ borderBottom: '1px solid rgba(167,139,250,0.25)' }}
                          placeholder={placeholder}
                          onFocus={e => (e.target.style.borderBottomColor = '#a78bfa')}
                          onBlur={e => (e.target.style.borderBottomColor = 'rgba(167,139,250,0.25)')}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-pink-400/70 uppercase block">Fabric Matrix Focus</label>
                      <select
                        value={formState.fabric}
                        onChange={(e) => setFormState({ ...formState, fabric: e.target.value })}
                        className="w-full text-xs py-2 text-[#f5f5f3]/80 outline-none uppercase tracking-widest cursor-pointer transition-all"
                        style={{ background: 'rgba(15,10,30,0.9)', borderBottom: '1px solid rgba(236,72,153,0.25)', color: '#f5f5f3' }}
                      >
                        <option value="wool">Virgin Merino Wool</option>
                        <option value="organza">Mulberry Silk Organza</option>
                        <option value="nylon">Technical Matte Nylon</option>
                        <option value="cashmere">Brushed Cashmere</option>
                        <option value="linen">Belgian Raw Flax</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-cyan-400/70 uppercase block">Preferred Consultation Date</label>
                      <input
                        type="date"
                        required
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="w-full bg-transparent text-xs py-2 text-[#f5f5f3]/80 outline-none transition-all"
                        style={{ borderBottom: '1px solid rgba(34,211,238,0.25)', colorScheme: 'dark' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] tracking-widest text-amber-400/70 uppercase block">Measurements / Aesthetic Notes</label>
                    <textarea
                      rows={3}
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="w-full bg-transparent text-sm py-2 text-[#f5f5f3] outline-none transition-all resize-none"
                      style={{ borderBottom: '1px solid rgba(251,191,36,0.25)' }}
                      placeholder="e.g. Sculpted shoulder suit request, chest measurement..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full font-sans text-xs uppercase tracking-[0.25em] py-4 cursor-pointer focus:outline-none transition-all duration-500 font-medium"
                    style={{ background: 'linear-gradient(90deg, #8b5cf6, #ec4899)', color: '#f5f5f3', boxShadow: '0 0 30px rgba(139,92,246,0.35)' }}
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
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ border: '1px solid #34d399', boxShadow: '0 0 20px rgba(52,211,153,0.3)', color: '#34d399' }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-2xl font-light text-[#f5f5f3] uppercase tracking-wide">Invitation Sent</h4>
                  <p className="font-sans text-xs text-[#f5f5f3]/70 leading-relaxed uppercase tracking-wider max-w-sm mx-auto">
                    Your request for an aesthetic consultation is registered. We will send an official stamped invitation card within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormState({ name: '', email: '', fabric: 'wool', date: '', notes: '' }); setIsSubmitted(false); }}
                    className="text-xs uppercase tracking-widest transition-colors focus:outline-none mt-6 text-violet-400 hover:text-violet-200"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Typographic headline + Press */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-16">

            {/* Big statement */}
            <div className="space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-[#f5f5f3] uppercase leading-[1.05] tracking-tight">
                Let's shape <br />
                <span
                  className="italic font-normal"
                  style={{ background: 'linear-gradient(90deg, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  silhouettes
                </span>{' '}
                <br />
                together.
              </h2>
              <div className="w-16 h-[2px]" style={{ background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }} />
            </div>

            {/* Press Hub */}
            <div className="space-y-6">
              <span
                className="font-sans text-[10px] tracking-widest uppercase block font-medium"
                style={{ background: 'linear-gradient(90deg, #22d3ee, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                PRESS ARCHIVES
              </span>
              <div className="space-y-6">
                {pressReleases.map((press, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group block pb-4 transition-all duration-500"
                    style={{ borderBottom: '1px solid rgba(167,139,250,0.15)' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = press.accent)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(167,139,250,0.15)')}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-sans text-[8px] tracking-[0.2em] uppercase font-semibold" style={{ color: press.accent }}>
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

            {/* Contact info */}
            <div className="grid grid-cols-2 gap-8 text-xs text-[#f5f5f3]/60 uppercase tracking-widest">
              <div>
                <span className="block text-[8px] mb-2 text-violet-400/60 tracking-[0.25em]">ATELIER CONTACT</span>
                <p className="font-serif lowercase tracking-normal text-sm mb-1 text-[#f5f5f3]">atelier@jaffar.com</p>
                <p>+33 (0)1 44 55 66 77</p>
              </div>
              <div>
                <span className="block text-[8px] mb-2 text-pink-400/60 tracking-[0.25em]">HOURS</span>
                <p>Mon — Fri</p>
                <p>10:00 — 18:30 CEST</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-widest uppercase"
          style={{ borderTop: '1px solid rgba(167,139,250,0.15)', color: 'rgba(245,245,243,0.3)' }}
        >
          <span>© 2026 ATELIER JAFFAR. ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-8">
            {['Instagram', 'Vimeo', 'LinkedIn'].map((s, i) => (
              <a
                key={s}
                href="#"
                className="transition-colors duration-300"
                style={{ color: 'rgba(245,245,243,0.3)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = ['#a78bfa', '#f472b6', '#22d3ee'][i])}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(245,245,243,0.3)')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
