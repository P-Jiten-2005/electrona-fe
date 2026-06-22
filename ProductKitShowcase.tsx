import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Activity, ShieldCheck, ArrowRight, Compass, Citrus, Leaf, ShieldAlert } from 'lucide-react';

interface FlavorProfile {
  id: string;
  name: string;
  origin: string;
  scientificName: string;
  tagline: string;
  description: string;
  story: string;
  performanceBenefit: string;
  themeColor: string; // Tailwind color class or hex
  accentBg: string; // tailwind glass background
  glowShadow: string; // custom color glow
  imageUrl: string;
  minerals: { name: string; amount: string }[];
  flavorNotes: string[];
}

const DescriptionBlock = ({ text, themeColor }: { text: string; themeColor: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80;
  const shouldTruncate = text.length > maxLength;

  return (
    <p className="text-[13px] md:text-sm text-neutral-500 font-medium leading-relaxed min-h-[40px]">
      {shouldTruncate && !isExpanded ? `${text.slice(0, maxLength)}...` : text}
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="ml-1 text-[11px] font-bold uppercase transition-colors hover:opacity-80 cursor-pointer"
          style={{ color: themeColor }}
        >
          {isExpanded ? ' less' : ' more'}
        </button>
      )}
    </p>
  );
};

export default function ProductKitShowcase() {
  const [selectedFlavor, setSelectedFlavor] = useState<string>('kokum');
  const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);

  const flavors: FlavorProfile[] = [
    {
      id: 'kokum',
      name: 'KOKUM',
      origin: 'Konkan Coast',
      scientificName: 'Garcinia Indica',
      tagline: 'Traditional metabolic cooling active berry',
      description: 'Deep fruity flavour with a sharp, crisp profile traditionally valued across the coastal Konkan region.',
      story: 'Sourced directly from the vertical, mineral-rich slopes of the Western Ghats along the pristine Konkan Coast. Handpicked by local cooperatives, this wild forest fruit has been naturally sun-dried to secure its dense structure of Hydroxycitric Acid (HCA) and active garcinol. It acts as an organic cellular shield that stabilizes internal temperatures, enabling elite endurance and fast thirst-quenching under peak effort.',
      performanceBenefit: 'Decongests metabolic pathways, keeps body core temperature stable, and prevents early thermal muscle block.',
      themeColor: '#7C3AED', // Premium Deep Purple
      accentBg: 'rgba(124, 58, 237, 0.03)',
      glowShadow: 'rgba(124, 58, 237, 0.15)',
      imageUrl: '/kokum.webp',
      minerals: [
        { name: 'Garcinia Indica Active', amount: '450mg' },
        { name: 'Potassium Osmolyte', amount: '220mg' },
        { name: 'Active Polyphenols', amount: 'High' }
      ],
      flavorNotes: ['Tangy', 'Berry-rich', 'Astringent Reset']
    },
    {
      id: 'watermelon',
      name: 'WATERMELON',
      origin: 'Pan-India',
      scientificName: 'Citrullus Lanatus',
      tagline: 'Hydration powerhouse with premium L-Citrulline',
      description: 'Refreshing, juicy red hydration with naturally high free amino acids.',
      story: 'Cultivated in sandy riverbeds that promote deep potassium and mineral root absorption. Harvested at the absolute peak of solar ripeness, our watermelons are cold water extracted and freeze-dried at sub-zero temperatures within hours. This preserves the dense stores of L-Citrulline—a powerful natural precursor to nitric oxide synthesis that significantly accelerates joint re-oxygenation and limits oxygen debt.',
      performanceBenefit: 'Maximizes nitric oxide synthesis for enhanced oxygen delivery, delays lactic threshold buildup, and protects muscular stamina.',
      themeColor: '#EF4444', // Premium Fresh Red
      accentBg: 'rgba(239, 68, 68, 0.03)',
      glowShadow: 'rgba(239, 68, 68, 0.15)',
      imageUrl: '/watermelon.avif',
      minerals: [
        { name: 'Ultra L-Citrulline', amount: '600mg' },
        { name: 'Natural Citrullus Extract', amount: '500mg' },
        { name: 'Lycopene Defense Core', amount: '80mg' }
      ],
      flavorNotes: ['Sweet Crisp', 'Deep Melon Fresh', 'Clean Aftertaste']
    },
    {
      id: 'lime',
      name: 'LIME',
      origin: 'Kagzi Hills',
      scientificName: 'Citrus Aurantiifolia',
      tagline: 'Zesty electrolyte carrier with intense organic acids',
      description: 'Ultra-crisp classic citrus with instant salivary activation and sharp biological reset.',
      story: 'Sourced from the sun-drenched orchards of specialized Kagzi citrus terrains. These thin-skinned, organic heirloom limes are cold-pressed to extract their highly concentrated citric and ascorbic acids. The resulting formula triggers immediate salivary response—the first step in rehydration signaling—while generating a fast-acting alkaline ash that maintains cellular pH and prevents cramping.',
      performanceBenefit: 'Triggers fast metabolic salivary pathways, regulates deep systemic pH, and maximizes salt-ion cellular absorption.',
      themeColor: '#16A34A', // Premium Fresh Green
      accentBg: 'rgba(22, 163, 74, 0.03)',
      glowShadow: 'rgba(22, 163, 74, 0.15)',
      imageUrl: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=600&q=80',
      minerals: [
        { name: 'Citric Acid Catalysts', amount: '380mg' },
        { name: 'Vitamin C Active', amount: '120mg' },
        { name: 'Sodium Ion Osmolytes', amount: '180mg' }
      ],
      flavorNotes: ['Zesty Citrus', 'Alkaline Sharp', 'Sprightly Cool']
    }
  ];

  const activeFlavor = flavors.find(f => f.id === selectedFlavor) || flavors[0];

  return (
    <section 
      className="relative bg-white pt-6 md:pt-8 pb-0 px-6 md:px-12 lg:px-24 overflow-hidden font-sans" 
      id="flavours-section"
    >
      
      {/* Background Dynamic Spotlight Wash (Adapts beautifully based on hovered/selected flavor) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${hoveredFlavor ? flavors.find(f => f.id === hoveredFlavor)?.themeColor : activeFlavor.themeColor}12 0%, transparent 65%)`
        }}
      />

      {/* Floating abstract lighting element */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neutral-50/65 rounded-full filter blur-[120px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
        
        {/* Elite Apple/Nike Style Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 max-w-3xl">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-neutral-950 uppercase leading-none"
          >
            FLAVOURS OF PERFORMANCE
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed font-sans font-medium"
          >
            Clean hydration rooted in natural chemistry. Every fruit freeze-dried at the source of cultivation to secure maximum biological potential.
          </motion.p>
        </div>

        {/* 3 Premium Flavour Cards with Improved Spacing & Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-11 w-full mb-12">
          {flavors.map((flavor) => {
            const isSelected = selectedFlavor === flavor.id;
            const isHovered = hoveredFlavor === flavor.id;
            
            return (
              <motion.div
                key={flavor.id}
                onClick={() => setSelectedFlavor(flavor.id)}
                onMouseEnter={() => setHoveredFlavor(flavor.id || null)}
                onMouseLeave={() => setHoveredFlavor(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative overflow-hidden rounded-[3rem] border p-10 flex flex-col justify-between h-[550px] transition-all duration-500 bg-white group cursor-pointer ${
                  isSelected 
                    ? `border-neutral-200 shadow-[0_30px_70px_rgba(0,0,0,0.06)]` 
                    : `border-neutral-150/80 shadow-[0_15px_40px_rgba(0,0,0,0.015)] opacity-95 hover:opacity-100 hover:shadow-[0_25px_60px_rgba(0,0,0,0.04)]`
                }`}
                style={{ 
                  boxShadow: isSelected 
                    ? `0 35px 80px rgba(0,0,0,0.05), inset 0 0 0 1.5px ${flavor.themeColor}1a` 
                    : isHovered 
                      ? `0 25px 60px ${flavor.glowShadow}`
                      : undefined,
                  borderColor: isSelected ? `${flavor.themeColor}35` : undefined
                }}
              >
                {/* Spotlight Card Backlight */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${flavor.themeColor}04 0%, transparent 70%)`
                  }}
                />

                {/* Card Top Information */}
                <div className="flex justify-between items-start z-10 relative">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[9px] text-neutral-400 tracking-widest block uppercase font-extrabold">SYSTEM ACTIVE BLOCK</span>
                    <h3 className="text-neutral-900 font-display font-black text-3xl tracking-tight block">{flavor.name}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider block font-black" style={{ color: flavor.themeColor }}>
                      {flavor.scientificName}
                    </span>
                  </div>
                </div>

                {/* Card Center: Floating Realistic Product Image with glare reflections */}
                <div className="flex justify-center items-center py-6 relative">
                  {/* Subtle color flare backdrop */}
                  <motion.div 
                    animate={isSelected ? { scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-52 h-52 rounded-full filter blur-[50px] pointer-events-none" 
                    style={{ backgroundColor: `${flavor.themeColor}1a` }} 
                  />
                  
                  {/* Motion floating capsule */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, isSelected ? 4 : isHovered ? 3 : 1.5, 0]
                    }}
                    transition={{
                      duration: isSelected ? 4 : isHovered ? 4.5 : 5.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-56 h-56 flex items-center justify-center transform-gpu"
                  >
                    <div className="relative w-48 h-48 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-[6px] border-white overflow-hidden bg-neutral-50 transition-transform duration-700 group-hover:scale-106">
                      <img 
                        src={flavor.imageUrl} 
                        alt={flavor.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                        style={{
                          objectFit: 'cover',
                          objectPosition: flavor.id === 'watermelon' ? 'calc(50% + 10px) center' : 'center center',
                        }}
                      />
                      {/* Specular glare sheen overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none mix-blend-overlay" />
                    </div>
                  </motion.div>
                </div>

                {/* Card Bottom Description */}
                <div className="border-t border-neutral-100 pt-6 space-y-2 z-10 relative text-left">
                  <span className="font-mono text-neutral-400 text-[9px] uppercase tracking-widest block font-extrabold">BOTANICAL NOTES</span>
                  <DescriptionBlock text={flavor.description} themeColor={flavor.themeColor} />
                </div>

              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
