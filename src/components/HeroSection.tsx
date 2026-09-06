import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Terminal, Share2, Layers, Check } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExplorePortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenContact,
  onExplorePortfolio 
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<'all' | 'web' | 'social'>('all');
  
  // Section-level scroll tracking for parallax depth
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Multi-plane parallax translations
  const bgWatermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const bgWatermarkOpacity = useTransform(scrollYProgress, [0, 0.75], [0.035, 0]);
  const bgLinesY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgLinesX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  
  const contentParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const specSheetParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#e7e5e1] overflow-hidden"
    >
      {/* Background Architectural Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Massive editorial watermark drifting with scroll */}
        <motion.div 
          style={{ 
            y: bgWatermarkY, 
            opacity: bgWatermarkOpacity 
          }}
          className="absolute -top-12 left-0 right-0 text-[14vw] font-serif italic text-[#141413] leading-none whitespace-nowrap pl-4 will-change-transform"
        >
          Recodey Studio Architecture
        </motion.div>

        {/* Floating crosshairs and technical coordinates */}
        <motion.div 
          style={{ y: bgLinesY, x: bgLinesX }}
          className="absolute top-48 right-10 text-[10px] font-mono text-[#71716e]/30 hidden lg:block tracking-widest text-right space-y-1"
        >
          <div>SYS // PARALLAX DEPTH ENGINE</div>
          <div>COORDS // 40.7128° N, 74.0060° W</div>
          <div>PRECISION // SUB-800MS LCP STANDARD</div>
        </motion.div>

        {/* Subtle architectural vertical rule */}
        <motion.div 
          style={{ y: bgLinesY }}
          className="absolute top-20 right-1/4 w-[1px] h-96 bg-gradient-to-b from-[#e7e5e1]/60 via-[#e7e5e1]/20 to-transparent hidden md:block"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Editorial Eyebrow & Status Row */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#e7e5e1] text-xs font-mono text-[#71716e]"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#141413]">RECODEY STUDIO</span>
            <span>/</span>
            <span>PRACTICE NO. 2022-Q2</span>
          </div>
          <div className="flex items-center gap-6">
            <span>LOCATIONS: {AGENCY_INFO.locations.join(' • ')}</span>
            <span className="hidden sm:inline">AVG RESPONSE TIME: &lt; 4 HOURS</span>
          </div>
        </motion.div>

        {/* Hero Typographic Statement with Parallax Float */}
        <motion.div style={{ y: contentParallaxY }} className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#141413] leading-[1.08] mb-8"
          >
            Digital engineering <span className="font-serif italic font-normal text-[#2c2b29]">&amp; cultural distribution</span> for brands that refuse to blend in.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#575653] max-w-3xl leading-relaxed mb-10 font-normal"
          >
            Recodey Studio replaces legacy agency bloat with measured, high-velocity execution. 
            We build bespoke, sub-second web platforms and power them with retention-first short-form video 
            and performance media. Fast code. Pure attention. Provable revenue.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <button
              id="hero-inquire-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#141413] text-[#fafaf8] text-sm font-medium hover:bg-[#2c2b29] transition-colors cursor-pointer"
            >
              <span>Initiate Scope Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-portfolio-btn"
              onClick={onExplorePortfolio}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#f0eee9] text-[#141413] text-sm font-medium hover:bg-[#e4e1db] border border-[#e7e5e1] transition-colors cursor-pointer"
            >
              <span>Selected Work (2024–2026)</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Interactive Discipline Spec Sheet with Parallax Offset */}
        <motion.div 
          style={{ y: specSheetParallaxY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#ffffff] border border-[#e7e5e1] rounded-sm p-6 sm:p-8 mb-16 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e7e5e1]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-1">
                Studio Specification
              </span>
              <h2 className="text-lg font-semibold text-[#141413]">
                Dual-Discipline Architecture
              </h2>
            </div>

            {/* Discipline Filter Tabs */}
            <div className="inline-flex p-1 bg-[#f0eee9] border border-[#e4e1db] rounded-sm">
              <button
                onClick={() => setSelectedDiscipline('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  selectedDiscipline === 'all'
                    ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                    : 'text-[#71716e] hover:text-[#141413]'
                }`}
              >
                Integrated Overview
              </button>
              <button
                onClick={() => setSelectedDiscipline('web')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  selectedDiscipline === 'web'
                    ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                    : 'text-[#71716e] hover:text-[#141413]'
                }`}
              >
                Web Engineering
              </button>
              <button
                onClick={() => setSelectedDiscipline('social')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  selectedDiscipline === 'social'
                    ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                    : 'text-[#71716e] hover:text-[#141413]'
                }`}
              >
                Social Distribution
              </button>
            </div>
          </div>

          {/* Discipline Spec Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedDiscipline}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6"
            >
              {(selectedDiscipline === 'all' || selectedDiscipline === 'web') && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#141413]">
                    <Terminal className="w-4 h-4 text-[#71716e]" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider font-mono">
                      Pillar 01: Engineering
                    </h3>
                  </div>
                  <p className="text-xs text-[#575653] leading-relaxed">
                    Headless React 19 / Next.js builds with static edge caching, sub-800ms LCP standards, and rigorous type safety. Zero page builder bloat.
                  </p>
                  <div className="pt-2 border-t border-[#f0eee9] text-[11px] font-mono text-[#71716e] space-y-1">
                    <div>STANDARD: &lt; 50kb Critical JS</div>
                    <div>BENCHMARK: 99+ Core Web Vitals</div>
                    <div>STACK: Next.js • React 19 • Tailwind</div>
                  </div>
                </div>
              )}

              {(selectedDiscipline === 'all' || selectedDiscipline === 'social') && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#141413]">
                    <Share2 className="w-4 h-4 text-[#71716e]" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider font-mono">
                      Pillar 02: Distribution
                    </h3>
                  </div>
                  <p className="text-xs text-[#575653] leading-relaxed">
                    Scripting, filming, and editing short-form vertical assets (TikTok, IG Reels, Shorts) tuned to 3-second hook retention and performance paid attribution.
                  </p>
                  <div className="pt-2 border-t border-[#f0eee9] text-[11px] font-mono text-[#71716e] space-y-1">
                    <div>STANDARD: 85%+ 2-Second Hook Rate</div>
                    <div>CHANNELS: TikTok • Meta • YouTube</div>
                    <div>MODEL: Creator Seeding &amp; Paid Scaling</div>
                  </div>
                </div>
              )}

              {selectedDiscipline === 'all' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#141413]">
                    <Layers className="w-4 h-4 text-[#71716e]" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider font-mono">
                      Pillar 03: The Flywheel
                    </h3>
                  </div>
                  <p className="text-xs text-[#575653] leading-relaxed">
                    Connecting viral attention directly to sub-second storefronts with zero drop-off, continuous A/B split-testing, and measurable transaction growth.
                  </p>
                  <div className="pt-2 border-t border-[#f0eee9] text-[11px] font-mono text-[#71716e] space-y-1">
                    <div>ATTRIBUTION: Server-Side Tracking</div>
                    <div>ACCELERATION: +142% Pipeline Lift</div>
                    <div>CADENCE: Weekly Agile Cycles</div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Real Metrics Ledger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#e7e5e1]"
        >
          {AGENCY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#141413] tracking-tight font-serif">
                {stat.value}
              </span>
              <div className="text-xs font-semibold text-[#2c2b29]">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-[#71716e]">
                {stat.context}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Client Partner Marks */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 mt-12 border-t border-[#e7e5e1]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e]">
              Selected Client Engagements
            </span>
            <span className="text-xs font-mono text-[#71716e]">
              D2C • FINTECH • CPG • SAAS • TELEHEALTH
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {AGENCY_INFO.verifiedClients.map((client, i) => (
              <div 
                key={i} 
                className="p-3.5 bg-[#ffffff] border border-[#e7e5e1] rounded-sm hover:border-[#141413] transition-colors"
              >
                <div className="text-xs font-semibold text-[#141413]">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono text-[#71716e] truncate mt-0.5">
                  {client.sector}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
