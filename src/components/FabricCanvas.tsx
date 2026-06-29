import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FabricInfo {
  id: string;
  name: string;
  weight: string;
  thickness: string;
  origin: string;
  weave: string;
  image: string;
  description: string;
  // Metrics out of 100 for visual graphs
  metrics: {
    rigidity: number;
    breathability: number;
    warmth: number;
    luster: number;
  };
}

const fabrics: FabricInfo[] = [
  {
    id: 'wool',
    name: 'Virgin Merino Wool',
    weight: '380 GSM',
    thickness: 'Heavy Weight',
    origin: 'Biella, Italy',
    weave: '2x2 Twill Structure',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Sourced from the historic Vitale Barberis Canonico mill in Biella. This wool maintains a crisp structural form that supports rigid shoulder lines and tailored lapels without sagging, acting as a sculptural medium for haute couture tailoring.',
    metrics: { rigidity: 85, breathability: 40, warmth: 75, luster: 15 }
  },
  {
    id: 'organza',
    name: 'Mulberry Silk Organza',
    weight: '85 GSM',
    thickness: 'Translucent Sheer',
    origin: 'Lyon, France',
    weave: 'High-twist plain filament',
    image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=800&q=80',
    description: 'A Lyon heirloom textile. High-twist double-ply silk yarn gives it an iridescent shimmer under direct lighting. Its crisp tensile strength allows us to design dramatic, gravity-defying sleeve clouds and flowing translucent panels.',
    metrics: { rigidity: 65, breathability: 95, warmth: 10, luster: 80 }
  },
  {
    id: 'nylon',
    name: 'Technical Matte Nylon',
    weight: '190 GSM',
    thickness: 'Mid Weight',
    origin: 'Osaka, Japan',
    weave: 'Ripstop Micro-Grid',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80',
    description: 'Milled in Japan using recycled ocean plastics. The matte finish behaves like traditional cotton paper to the touch, but retains extreme windproof and rainproof integrity. The ripstop grid adds a subtle, geometric motif under close inspection.',
    metrics: { rigidity: 45, breathability: 35, warmth: 50, luster: 5 }
  },
  {
    id: 'cashmere',
    name: 'Brushed Cashmere',
    weight: '450 GSM',
    thickness: 'Ultra-Heavy Weight',
    origin: 'Ulaanbaatar, Mongolia',
    weave: 'Loose carded knit',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80',
    description: 'Spun from the finest undercoat fibers of Mongolian goats. Naturally insulating and brushed repeatedly using dried vegetable teasels to tease out the soft pile. Perfect for enveloping the body in warm, flowing oversized drapes.',
    metrics: { rigidity: 20, breathability: 60, warmth: 95, luster: 30 }
  },
  {
    id: 'linen',
    name: 'Belgian Raw Flax',
    weight: '260 GSM',
    thickness: 'Breathable Light',
    origin: 'Flanders, Belgium',
    weave: 'Slubby plain weave',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    description: 'A Belgian organic flax linen with distinctive slubs and organic variations in color. We do not apply starch or chemical softeners, allowing the natural, crunchy drape of linen to soften gradually through body heat and wear over decades.',
    metrics: { rigidity: 70, breathability: 85, warmth: 30, luster: 10 }
  }
];

export const FabricCanvas: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('wool');
  const activeFabric = fabrics.find(f => f.id === activeId) || fabrics[0];

  return (
    <section 
      id="canvas" 
      className="bg-[#0c0c0c] py-32 border-t border-[#f5f5f3]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Title */}
        <div className="mb-20 text-center md:text-left">
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#f5f5f3]/40 block mb-3">
            02 / TACTILE NODE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#f5f5f3] uppercase tracking-wide">
            The Fabric Canvas
          </h2>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Interactive Chips & Detailed Data */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            {/* Chips Container */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] tracking-widest text-[#f5f5f3]/30 uppercase block mb-6">
                SELECT TEXTURE TO CANVAS
              </span>
              <div className="flex flex-wrap gap-3">
                {fabrics.map((fabric) => {
                  const isActive = fabric.id === activeId;
                  return (
                    <button
                      key={fabric.id}
                      onClick={() => setActiveId(fabric.id)}
                      className={`text-xs uppercase tracking-widest px-5 py-3 border rounded-none transition-luxury relative cursor-pointer ${
                        isActive 
                          ? 'border-[#f5f5f3] text-[#0d0d0d] bg-[#f5f5f3]' 
                          : 'border-[#f5f5f3]/10 text-[#f5f5f3]/60 hover:text-[#f5f5f3] hover:border-[#f5f5f3]/40'
                      }`}
                    >
                      {fabric.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fabric Details & Technical Specifications (Animated) */}
            <div className="relative min-h-[300px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFabric.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <p className="font-serif text-xl md:text-2xl text-[#f5f5f3]/90 leading-relaxed font-light">
                    "{activeFabric.description}"
                  </p>

                  {/* Technical Specs List */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-[#f5f5f3]/15 pt-6 font-sans text-xs uppercase tracking-wider text-[#f5f5f3]/70">
                    <div>
                      <span className="block text-[8px] tracking-[0.25em] text-[#f5f5f3]/35 mb-1">ORIGIN MILL</span>
                      <span className="font-medium text-[#f5f5f3]">{activeFabric.origin}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] tracking-[0.25em] text-[#f5f5f3]/35 mb-1">DENSITY WEIGHT</span>
                      <span className="font-medium text-[#f5f5f3]">{activeFabric.weight} ({activeFabric.thickness})</span>
                    </div>
                    <div className="col-span-2">
                      <span className="block text-[8px] tracking-[0.25em] text-[#f5f5f3]/35 mb-1">WEAVE / STRUCTURE</span>
                      <span className="font-medium text-[#f5f5f3]">{activeFabric.weave}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Large Preview & Tactile Graphic Metric Graphs */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-black/40 border border-[#f5f5f3]/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
            
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />

            {/* Dynamic Texture Preview Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#f5f5f3]/10 bg-zinc-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFabric.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.85, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <img 
                    src={activeFabric.image} 
                    alt={`${activeFabric.name} Texture Closeup`}
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              {/* Tactical overlay notes */}
              <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] tracking-widest text-[#f5f5f3]/50">
                ZOOM X8.0 TACTILE VIEW // C05_SPEC_{activeFabric.id.toUpperCase()}
              </div>
            </div>

            {/* Performance/Feel Graph Charts */}
            <div className="flex flex-col space-y-6">
              <span className="font-sans text-[10px] tracking-widest text-[#f5f5f3]/30 uppercase mb-2">
                BEHAVIORAL COEFFICIENT
              </span>

              {Object.entries(activeFabric.metrics).map(([metricName, value]) => (
                <div key={metricName} className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] tracking-widest text-[#f5f5f3]/70 uppercase">
                    <span>{metricName}</span>
                    <span className="font-mono text-[#d4af37]">{value}%</span>
                  </div>
                  
                  {/* Custom animated progress bar */}
                  <div className="w-full h-[2px] bg-[#f5f5f3]/10 relative overflow-hidden">
                    <motion.div
                      key={`${activeFabric.id}-${metricName}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-0 h-full bg-[#f5f5f3]/80 group-hover:bg-[#d4af37] transition-colors"
                    />
                  </div>
                </div>
              ))}

              {/* Design quote */}
              <div className="border-t border-[#f5f5f3]/10 pt-6 mt-4">
                <span className="font-sans text-[8px] tracking-[0.25em] text-[#f5f5f3]/30 uppercase block mb-1">
                  Atelier Formulation
                </span>
                <p className="font-serif italic text-xs text-[#f5f5f3]/50 leading-relaxed">
                  "Every garment is formulated based on the textile's behavioral coefficient, balancing stiffness with breathing capacity."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
