import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FabricInfo {
  id: string;
  name: string;
  weight: string;
  thickness: string;
  origin: string;
  weave: string;
  description: string;
  accent: string;       // Tailwind gradient string
  accentHex: string;    // Raw hex for inline styles
  accentHex2: string;
  metrics: { rigidity: number; breathability: number; warmth: number; luster: number };
}

const fabrics: FabricInfo[] = [
  {
    id: 'wool',
    name: 'Virgin Merino Wool',
    weight: '380 GSM', thickness: 'Heavy Weight',
    origin: 'Biella, Italy', weave: '2x2 Twill Structure',
    description: 'Sourced from the historic Vitale Barberis Canonico mill in Biella. This wool maintains a crisp structural form that supports rigid shoulder lines and tailored lapels without sagging.',
    accent: 'from-violet-500 to-purple-700',
    accentHex: '#8b5cf6', accentHex2: '#7c3aed',
    metrics: { rigidity: 85, breathability: 40, warmth: 75, luster: 15 }
  },
  {
    id: 'organza',
    name: 'Mulberry Silk Organza',
    weight: '85 GSM', thickness: 'Translucent Sheer',
    origin: 'Lyon, France', weave: 'High-twist plain filament',
    description: 'A Lyon heirloom textile. High-twist double-ply silk yarn gives it an iridescent shimmer. Its crisp tensile strength allows dramatic, gravity-defying sleeve clouds and flowing translucent panels.',
    accent: 'from-pink-500 to-rose-600',
    accentHex: '#ec4899', accentHex2: '#e11d48',
    metrics: { rigidity: 65, breathability: 95, warmth: 10, luster: 80 }
  },
  {
    id: 'nylon',
    name: 'Technical Matte Nylon',
    weight: '190 GSM', thickness: 'Mid Weight',
    origin: 'Osaka, Japan', weave: 'Ripstop Micro-Grid',
    description: 'Milled in Japan using recycled ocean plastics. The matte finish behaves like traditional cotton paper to the touch, but retains extreme windproof and rainproof integrity.',
    accent: 'from-cyan-400 to-sky-600',
    accentHex: '#22d3ee', accentHex2: '#0284c7',
    metrics: { rigidity: 45, breathability: 35, warmth: 50, luster: 5 }
  },
  {
    id: 'cashmere',
    name: 'Brushed Cashmere',
    weight: '450 GSM', thickness: 'Ultra-Heavy Weight',
    origin: 'Ulaanbaatar, Mongolia', weave: 'Loose carded knit',
    description: 'Spun from the finest undercoat fibers of Mongolian goats. Brushed repeatedly using dried vegetable teasels to tease out the soft pile. Perfect for warm, flowing oversized drapes.',
    accent: 'from-amber-400 to-orange-500',
    accentHex: '#fbbf24', accentHex2: '#f97316',
    metrics: { rigidity: 20, breathability: 60, warmth: 95, luster: 30 }
  },
  {
    id: 'linen',
    name: 'Belgian Raw Flax',
    weight: '260 GSM', thickness: 'Breathable Light',
    origin: 'Flanders, Belgium', weave: 'Slubby plain weave',
    description: 'A Belgian organic flax linen with distinctive slubs and organic colour variations. No starch or chemical softeners — the natural, crunchy drape softens gradually through body heat over decades.',
    accent: 'from-emerald-400 to-teal-600',
    accentHex: '#34d399', accentHex2: '#0d9488',
    metrics: { rigidity: 70, breathability: 85, warmth: 30, luster: 10 }
  }
];

// Map metric name → a fixed colour for the bar
const metricColors: Record<string, string> = {
  rigidity:      '#a78bfa',
  breathability: '#34d399',
  warmth:        '#fbbf24',
  luster:        '#f472b6',
};

export const FabricCanvas: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('wool');
  const activeFabric = fabrics.find(f => f.id === activeId) || fabrics[0];

  return (
    <section
      id="canvas"
      className="py-32 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(167,139,250,0.15)', background: 'linear-gradient(180deg, #0a0612 0%, #0d0620 50%, #0a0612 100%)' }}
    >
      {/* Colour blobs behind section */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${activeFabric.accentHex}18 0%, transparent 65%)`, transition: 'background 0.8s ease' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${activeFabric.accentHex2}14 0%, transparent 65%)`, transition: 'background 0.8s ease' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

        {/* Section Title */}
        <div className="mb-20 text-center md:text-left">
          <span
            className="font-sans text-xs tracking-[0.4em] uppercase block mb-3 font-medium"
            style={{ background: `linear-gradient(90deg, ${activeFabric.accentHex}, ${activeFabric.accentHex2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'all 0.6s ease' }}
          >
            02 / TACTILE NODE
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#f5f5f3] uppercase tracking-wide">
            The Fabric Canvas
          </h2>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">

            {/* Fabric Chips */}
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
                      className="text-xs uppercase tracking-widest px-5 py-3 rounded-none transition-all duration-500 cursor-pointer"
                      style={isActive
                        ? { background: `linear-gradient(90deg, ${fabric.accentHex}, ${fabric.accentHex2})`, color: '#0a0612', border: `1px solid ${fabric.accentHex}`, boxShadow: `0 0 16px ${fabric.accentHex}55` }
                        : { background: 'transparent', color: `${fabric.accentHex}99`, border: `1px solid ${fabric.accentHex}33` }
                      }
                    >
                      {fabric.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description & Specs (animated) */}
            <div className="relative min-h-[300px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFabric.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                  className="space-y-8"
                >
                  {/* Accent rule */}
                  <div className="w-12 h-[2px] rounded" style={{ background: `linear-gradient(90deg, ${activeFabric.accentHex}, ${activeFabric.accentHex2})` }} />

                  <p className="font-serif text-xl md:text-2xl text-[#f5f5f3]/90 leading-relaxed font-light">
                    "{activeFabric.description}"
                  </p>

                  <div
                    className="grid grid-cols-2 gap-y-4 gap-x-8 pt-6 font-sans text-xs uppercase tracking-wider"
                    style={{ borderTop: `1px solid ${activeFabric.accentHex}22` }}
                  >
                    {[
                      { label: 'Origin Mill', value: activeFabric.origin },
                      { label: 'Density Weight', value: `${activeFabric.weight} (${activeFabric.thickness})` },
                      { label: 'Weave / Structure', value: activeFabric.weave, full: true },
                    ].map(({ label, value, full }) => (
                      <div key={label} className={full ? 'col-span-2' : ''}>
                        <span className="block text-[8px] tracking-[0.25em] mb-1" style={{ color: activeFabric.accentHex, opacity: 0.65 }}>{label.toUpperCase()}</span>
                        <span className="font-medium text-[#f5f5f3]">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Weave Schematic + Metrics */}
          <div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center p-8 md:p-12 relative overflow-hidden backdrop-blur-md"
            style={{ border: `1px solid ${activeFabric.accentHex}22`, background: 'rgba(10,6,18,0.65)', transition: 'border-color 0.6s ease' }}
          >
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-5" />
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${activeFabric.accentHex}18 0%, transparent 70%)`, transition: 'background 0.6s ease' }} />

            {/* Animated Warp/Weft Schematic */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden p-6 flex flex-col justify-between shadow-2xl"
              style={{ border: `1px solid ${activeFabric.accentHex}30`, background: 'rgba(6,4,14,0.9)', transition: 'border-color 0.6s ease' }}
            >
              <div>
                <span className="block text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: activeFabric.accentHex }}>
                  YARN WEFT SCHEMATIC
                </span>
                <span className="block text-[10px] tracking-wider text-[#f5f5f3]/50 uppercase">
                  Thread count: 260/inch — Active structural simulation
                </span>
              </div>

              <div className="w-full h-44 relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.line
                      key={`warp-${i}`}
                      x1={10 + i * 9} y1={0} x2={10 + i * 9} y2={100}
                      stroke={activeFabric.accentHex}
                      strokeWidth={activeId === 'wool' || activeId === 'cashmere' ? "0.9" : "0.45"}
                      animate={{ y1: [0, 4, 0], y2: [100, 96, 100] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.1, ease: "easeInOut" }}
                    />
                  ))}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.line
                      key={`weft-${i}`}
                      x1={0} y1={10 + i * 7} x2={200} y2={10 + i * 7}
                      stroke={activeFabric.accentHex2}
                      strokeWidth={activeId === 'wool' || activeId === 'cashmere' ? "0.9" : "0.45"}
                      animate={{ x1: [0, 6, 0], x2: [200, 194, 200] }}
                      transition={{ repeat: Infinity, duration: 4, delay: i * 0.12, ease: "easeInOut" }}
                    />
                  ))}
                  <rect x="50" y="36" width="100" height="28" fill="rgba(6,4,14,0.95)" stroke={activeFabric.accentHex} strokeWidth="0.6" />
                  <text x="100" y="53" fill={activeFabric.accentHex} fontSize="6.5" letterSpacing="1.2" textAnchor="middle" fontFamily="monospace">
                    {activeFabric.weave.toUpperCase()}
                  </text>
                </svg>
              </div>

              <div className="flex justify-between items-end font-mono text-[8px] pt-4" style={{ borderTop: `1px solid ${activeFabric.accentHex}25`, color: `${activeFabric.accentHex}70` }}>
                <span>STABILITY STRESS: PASS</span>
                <span>WARP DENSITY: 120/T</span>
              </div>
            </div>

            {/* Metric Bar Charts */}
            <div className="flex flex-col space-y-6">
              <span className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: `${activeFabric.accentHex}80` }}>
                BEHAVIORAL COEFFICIENT
              </span>

              {Object.entries(activeFabric.metrics).map(([metricName, value]) => (
                <div key={metricName} className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] tracking-widest uppercase">
                    <span className="text-[#f5f5f3]/70">{metricName}</span>
                    <span className="font-mono font-semibold" style={{ color: metricColors[metricName] || activeFabric.accentHex }}>
                      {value}%
                    </span>
                  </div>
                  <div className="w-full h-[3px] rounded-full" style={{ background: 'rgba(245,245,243,0.08)' }}>
                    <motion.div
                      key={`${activeFabric.id}-${metricName}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${metricColors[metricName] || activeFabric.accentHex}, ${activeFabric.accentHex2})` }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-6 mt-4" style={{ borderTop: `1px solid ${activeFabric.accentHex}20` }}>
                <span className="font-sans text-[8px] tracking-[0.25em] uppercase block mb-1" style={{ color: activeFabric.accentHex, opacity: 0.5 }}>
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
