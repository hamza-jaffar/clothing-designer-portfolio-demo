import React from 'react';
import { motion } from 'framer-motion';

interface CollectionItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  fabric: string;
  gsm: string;
  notes: string;
  silhouette: string;
  // SVG drawing paths to animate
  sketchPaths: string[];
  viewBox: string;
}

const collections: CollectionItem[] = [
  {
    id: 1,
    title: "Sartorial Structure",
    subtitle: "COLLECTION 05 / PIECE I",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    fabric: "100% Virgin Merino Wool",
    gsm: "380 GSM",
    silhouette: "Sharply structured shoulder pads, hand-padded lapels, sculpted double-darted waist seam.",
    notes: "Utilizes historical Parisian canvas padding inside the chest area for rigid structure.",
    viewBox: "0 0 100 100",
    sketchPaths: [
      "M 15 10 L 85 10 L 85 45 L 65 45 L 50 75 L 35 45 L 15 45 Z", // Tailored coat outline simplified
      "M 35 10 L 35 45 M 65 10 L 65 45", // Dart guides
      "M 50 10 L 50 75", // Center line
      "M 15 25 L 35 25 M 85 25 L 65 25" // Pocket placements
    ]
  },
  {
    id: 2,
    title: "Raw Organza",
    subtitle: "COLLECTION 05 / PIECE II",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
    fabric: "70% Silk, 30% Glass Organza",
    gsm: "85 GSM",
    silhouette: "Oversized cocoon sleeve, raw-edged sheer hemline, dual-layered transparency.",
    notes: "French-seamed interior edges to maintain absolute transparency under light.",
    viewBox: "0 0 100 100",
    sketchPaths: [
      "M 30 10 C 40 12, 60 12, 70 10 C 75 35, 75 65, 80 90 C 60 85, 40 85, 20 90 C 25 65, 25 35, 30 10 Z", // Flowing gown shape
      "M 30 35 C 45 40, 55 40, 70 35", // Waist gather guidelines
      "M 25 50 C 35 55, 65 55, 75 50" // Draped bias guidelines
    ]
  },
  {
    id: 3,
    title: "Monochrome Technical",
    subtitle: "COLLECTION 05 / PIECE III",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1000&q=80",
    fabric: "100% Matte Recycled Nylon",
    gsm: "190 GSM",
    silhouette: "Oversized utility hood, elasticated cinch hem, matte black metal hardware details.",
    notes: "Treated with water-repellent biological wax layer for technical performance.",
    viewBox: "0 0 100 100",
    sketchPaths: [
      "M 20 20 L 40 10 L 60 10 L 80 20 L 75 80 L 25 80 Z", // Technical vest outline
      "M 50 10 L 50 80", // Center zipper
      "M 30 35 H 45 V 50 H 30 Z M 70 35 H 55 V 50 H 70 Z", // Double tactical pockets
      "M 25 80 C 35 83, 65 83, 75 80" // Bungee cord adjustments
    ]
  },
  {
    id: 4,
    title: "Sculpted Cashmere",
    subtitle: "COLLECTION 05 / PIECE IV",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
    fabric: "100% Mongolian Cashmere",
    gsm: "450 GSM",
    silhouette: "Soft dropped shoulders, heavy rib-knit mock neck collar, elongated side-slits.",
    notes: "Knitted using standard 12-gauge tensioning for heavy weight and dense texture.",
    viewBox: "0 0 100 100",
    sketchPaths: [
      "M 15 15 L 30 10 L 70 10 L 85 15 L 80 85 L 20 85 Z", // Oversized sweater outline
      "M 30 10 L 30 25 C 40 28, 60 28, 70 25 L 70 10", // Neck collar shape
      "M 15 15 L 25 45 M 85 15 L 75 45", // Slanted shoulder seam lines
      "M 20 75 H 80" // Heavy ribbed hem border
    ]
  }
];

export const Lookbook: React.FC = () => {
  const lineAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.25,
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  return (
    <section 
      id="lookbook" 
      className="bg-[#0d0d0d] py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#f5f5f3]/10"
    >
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-6 md:space-y-0">
        <div>
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#f5f5f3]/40 block mb-3">
            01 / RUNWAY TRACK
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#f5f5f3] uppercase tracking-wide">
            Curated Collections
          </h2>
        </div>
        <p className="font-sans text-xs tracking-widest text-[#f5f5f3]/50 max-w-sm leading-relaxed uppercase">
          An asymmetric exploration of structural draping, textiles in their raw form, and the geometry of architectural couture.
        </p>
      </div>

      {/* Lookbook Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-36">
        {collections.map((item, idx) => {
          // Asymmetrical layout offsets: Alternate padding-top or margins for staggered feel
          const isEven = idx % 2 === 1;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${isEven ? 'md:mt-24' : ''} group`}
            >
              
              {/* Image Container with scale and details reveals */}
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#f5f5f3]/10 bg-black mb-8">
                
                {/* Visual Image */}
                <motion.div 
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 group-hover:brightness-95 transition-all duration-700"
                  />
                </motion.div>

                {/* Micro Sketch Overlay (traces when image is hovered or visible) */}
                <div className="absolute top-4 right-4 w-28 h-28 bg-[#0d0d0d]/80 backdrop-blur-sm p-3 border border-[#f5f5f3]/10 pointer-events-none hidden sm:block">
                  <span className="block text-[7px] tracking-widest text-[#f5f5f3]/35 uppercase mb-1">
                    PATTERN SCHEMATIC
                  </span>
                  <svg 
                    viewBox={item.viewBox} 
                    className="w-full h-20 text-[#f5f5f3] opacity-40"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5"
                  >
                    {item.sketchPaths.map((path, pIdx) => (
                      <motion.path
                        key={pIdx}
                        d={path}
                        variants={lineAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Hover Slider Details Panel (from bottom) */}
                <div className="absolute inset-x-0 bottom-0 bg-[#0d0d0d]/90 backdrop-blur-md border-t border-[#f5f5f3]/10 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-20">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-sans text-[10px] tracking-widest text-[#f5f5f3]/50 uppercase">
                      FABRIC MATRIX
                    </span>
                    <span className="font-mono text-[10px] text-[#d4af37] tracking-wider uppercase font-semibold">
                      {item.gsm}
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-light text-[#f5f5f3] mb-2 uppercase">
                    {item.fabric}
                  </h4>
                  <p className="font-sans text-xs text-[#f5f5f3]/70 tracking-wide leading-relaxed mb-4">
                    {item.silhouette}
                  </p>
                  <div className="border-t border-[#f5f5f3]/10 pt-4">
                    <span className="block text-[8px] tracking-[0.2em] text-[#f5f5f3]/40 uppercase mb-1">
                      ATELIER DESIGN NOTE
                    </span>
                    <p className="font-sans text-[11px] italic text-[#f5f5f3]/50">
                      "{item.notes}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Title & Metadata below card */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-sans text-[9px] tracking-[0.3em] text-[#f5f5f3]/40 uppercase block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl font-light text-[#f5f5f3] tracking-wide uppercase transition-colors group-hover:text-[#d4af37]">
                    {item.title}
                  </h3>
                </div>
                
                {/* Arrow detail */}
                <div className="w-8 h-8 rounded-full border border-[#f5f5f3]/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-[#f5f5f3] transition-luxury mt-2">
                  <svg className="w-3.5 h-3.5 text-[#f5f5f3] transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
