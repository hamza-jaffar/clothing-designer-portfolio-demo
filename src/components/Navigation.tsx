import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Philosophy', href: '#hero', id: 'hero' },
    { name: 'Runway Lookbook', href: '#lookbook', id: 'lookbook' },
    { name: 'Fabric Canvas', href: '#canvas', id: 'canvas' },
    { name: 'Book Appointment', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    initial: { x: '100%' },
    animate: { 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
    exit: { 
      x: '100%', 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 } 
    }
  };

  const navLinksVariants = {
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const linkItemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
    exit: { 
      y: 30, 
      opacity: 0, 
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  return (
    <>
      {/* Sleek Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-[#f5f5f3]/10 transition-luxury">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="font-serif text-xl tracking-[0.25em] font-light uppercase transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(90deg, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            ATELIER JAFFAR
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 relative">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-xs uppercase tracking-[0.2em] font-light relative py-2 text-[#f5f5f3]/60 hover:text-[#f5f5f3] transition-colors duration-300"
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px]"
                    style={{ background: 'linear-gradient(90deg, #a78bfa, #f472b6)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1.5 items-end justify-center w-8 h-8 group relative z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} style={{ background: 'linear-gradient(90deg, #a78bfa, #f472b6)' }} />
            <span className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-0 opacity-0' : 'w-4 group-hover:w-6'}`} style={{ background: 'linear-gradient(90deg, #f472b6, #22d3ee)' }} />
            <span className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-5'}`} style={{ background: 'linear-gradient(90deg, #22d3ee, #a78bfa)' }} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile/Slideout Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              transition={{ duration: 0.5 }}
            />

            {/* Menu Container */}
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 w-full sm:w-[480px] h-full bg-[#0d0d0d] border-l border-[#f5f5f3]/10 z-45 p-12 md:p-20 flex flex-col justify-between"
            >
              {/* Close Button inside Drawer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-[#f5f5f3]/60 hover:text-[#f5f5f3] focus:outline-none z-50 cursor-pointer p-2 hover:rotate-90 transition-transform duration-300"
                style={{ background: 'linear-gradient(90deg, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                aria-label="Close Menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Background pattern inside menu */}
              <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />

              {/* Top part / coordinates info */}
              <div className="pt-8 pb-8" style={{ borderBottom: '1px solid rgba(167,139,250,0.2)' }}>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase block mb-1" style={{ color: '#a78bfa', opacity: 0.7 }}>
                  Atelier Coordinates
                </span>
                <span className="font-serif italic text-sm" style={{ color: 'rgba(245,245,243,0.8)' }}>
                  48.8566° N, 2.3522° E — Paris, FR
                </span>
              </div>

              {/* Navigation links */}
              <motion.nav 
                variants={navLinksVariants}
                className="flex flex-col space-y-8 my-auto"
              >
                {menuItems.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    variants={linkItemVariants}
                    className="overflow-hidden"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="group flex items-baseline space-x-6 text-[#f5f5f3] hover:text-[#f5f5f3]/80 transition-colors"
                    >
                      <span className="font-sans text-xs tracking-widest text-[#f5f5f3]/30 group-hover:text-[#f5f5f3] transition-colors">
                        0{idx + 1}.
                      </span>
                      <span className="font-serif text-4xl md:text-5xl font-light tracking-wide uppercase relative">
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#f5f5f3] group-hover:w-full transition-all duration-500 ease-out" />
                      </span>
                    </a>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Footer info in Menu */}
              <div className="border-t border-[#f5f5f3]/10 pt-8 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] text-[#f5f5f3]/40 uppercase block mb-2">
                    Inquiries
                  </span>
                  <a 
                    href="mailto:Hamza@jaffar.com" 
                    className="text-xs tracking-wider text-[#f5f5f3]/70 hover:text-[#f5f5f3] transition-colors"
                  >
                    Hamza@jaffar.com
                  </a>
                </div>
                <span className="font-sans text-[9px] tracking-widest text-[#f5f5f3]/20">
                  © 2026 Hamza JAFFAR
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
