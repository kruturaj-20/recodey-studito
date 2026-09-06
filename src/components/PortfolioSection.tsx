import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Check, Quote, ArrowRight, Layers } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioProject } from '../types';

interface PortfolioSectionProps {
  onOpenContactWithProject?: (projectName: string) => void;
}

// Dedicated Parallax Project Card Component with Depth Scroll Tracking
const ParallaxProjectCard: React.FC<{
  project: PortfolioProject;
  index: number;
  onSelect: () => void;
}> = ({ project, index, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress as this card moves from entering bottom of viewport to exiting top
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Vertical parallax offset for the inner image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  // Subtle optical scale to ensure image never clips outer bounds during translation
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.10, 1.18]);
  // Subtle badge float
  const badgeY = useTransform(scrollYProgress, [0, 1], ["-4px", "4px"]);

  return (
    <motion.article 
      ref={cardRef}
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#ffffff] border border-[#e7e5e1] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#141413] transition-all cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative"
    >
      <div>
        {/* Visual Image Presentation with Hardware-Accelerated Parallax */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#f0eee9] border-b border-[#e7e5e1]">
          <motion.img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            style={{ 
              y: imageY, 
              scale: imageScale,
              transformOrigin: "center center"
            }}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 will-change-transform"
          />
          
          {/* Parallax Floating Category Pill */}
          <motion.div 
            style={{ y: badgeY }}
            className="absolute top-3 left-3 bg-[#141413]/90 text-[#fafaf8] text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-xs z-10 shadow-sm"
          >
            {project.categoryLabel}
          </motion.div>

          {/* Interactive Depth Cue Indicator */}
          <div className="absolute bottom-3 right-3 bg-white/90 text-[#141413] text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center gap-1 shadow-sm">
            <span>EXPLORE AUDIT</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </div>

          {/* Subtle Corner Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>

        {/* Content Details */}
        <div className="p-6">
          <div className="text-xs font-mono text-[#71716e] mb-1">
            CLIENT: {project.client}
          </div>
          <h3 className="text-lg font-semibold text-[#141413] group-hover:text-[#2c2b29] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-[#575653] leading-relaxed mt-2.5 line-clamp-2">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 text-[10px] font-mono bg-[#f0eee9] text-[#575653] rounded-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="px-6 py-4 border-t border-[#f0eee9] bg-[#fafaf8] flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx}>
              <span className="font-mono font-semibold text-[#141413] block">
                {m.value}
              </span>
              <span className="text-[10px] text-[#71716e] block uppercase font-mono truncate max-w-[110px]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#141413] group-hover:translate-x-0.5 transition-transform">
          <span>Audit</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.article>
  );
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onOpenContactWithProject 
}) => {
  const [filter, setFilter] = useState<'all' | 'web-development' | 'social-media' | 'hybrid'>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  // Section-level ref for background parallax
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background parallax layers
  const bgWatermarkY = useTransform(sectionScrollProgress, [0, 1], ["-80px", "80px"]);
  const bgGridY = useTransform(sectionScrollProgress, [0, 1], ["-30px", "30px"]);
  const bgCoordsX = useTransform(sectionScrollProgress, [0, 1], ["-20px", "20px"]);

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section 
      ref={sectionRef} 
      id="portfolio" 
      className="relative py-24 border-b border-[#e7e5e1] bg-[#fafaf8] overflow-hidden"
    >
      {/* Background Architectural Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle oversized typographic watermark drifting with scroll */}
        <motion.div 
          style={{ y: bgWatermarkY }}
          className="absolute -top-10 left-0 right-0 text-[11vw] font-serif italic text-[#141413]/[0.025] leading-none whitespace-nowrap pl-4 will-change-transform"
        >
          Selected Works &amp; Production Architecture
        </motion.div>

        {/* Blueprint coordinate line */}
        <motion.div 
          style={{ y: bgGridY, x: bgCoordsX }}
          className="absolute bottom-12 right-12 text-[10px] font-mono text-[#71716e]/30 hidden lg:block tracking-widest"
        >
          SEC-04 // LATENCY: SUB-800MS // ARCHIVE: 2024-2026
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Selected Works • 2024–2026
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Proven systems. <br />
              <span className="font-serif italic font-normal">Documented outcomes.</span>
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#f0eee9] border border-[#e4e1db] rounded-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                  : 'text-[#71716e] hover:text-[#141413]'
              }`}
            >
              All Releases
            </button>
            <button
              onClick={() => setFilter('web-development')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                filter === 'web-development'
                  ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                  : 'text-[#71716e] hover:text-[#141413]'
              }`}
            >
              Web Engineering
            </button>
            <button
              onClick={() => setFilter('social-media')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                filter === 'social-media'
                  ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                  : 'text-[#71716e] hover:text-[#141413]'
              }`}
            >
              Social Distribution
            </button>
            <button
              onClick={() => setFilter('hybrid')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                filter === 'hybrid'
                  ? 'bg-[#ffffff] text-[#141413] shadow-xs'
                  : 'text-[#71716e] hover:text-[#141413]'
              }`}
            >
              Integrated Growth
            </button>
          </div>
        </div>

        {/* Project Grid with Parallax-Enabled Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ParallaxProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={() => setActiveProject(project)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/70 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-10 shadow-2xl text-left"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xs bg-[#f0eee9] text-[#71716e] hover:text-[#141413] hover:bg-[#e4e1db] transition-colors cursor-pointer"
                aria-label="Close case study details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-1">
                  Case Study • {activeProject.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#141413] tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-mono text-[#71716e] mt-1">
                  CLIENT: {activeProject.client}
                </p>
              </div>

              {/* Case Study Image */}
              <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#e7e5e1] mb-8 border border-[#e7e5e1]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verified Metrics Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#ffffff] border border-[#e7e5e1] rounded-sm mb-8">
                {activeProject.metrics.map((metric, i) => (
                  <div key={i} className="space-y-0.5">
                    <span className="text-xl font-serif font-medium text-[#141413] block">
                      {metric.value}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#71716e] block">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge & Architectural Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
                    The Constraint
                  </span>
                  <p className="text-xs sm:text-sm text-[#444340] leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
                    The Architecture &amp; Execution
                  </span>
                  <p className="text-xs sm:text-sm text-[#444340] leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Testimonial Quote */}
              {activeProject.testimonial && (
                <div className="p-6 bg-[#f0eee9] border border-[#e4e1db] rounded-sm mb-8">
                  <p className="text-sm font-serif italic text-[#2c2b29] leading-relaxed mb-3">
                    "{activeProject.testimonial.quote}"
                  </p>
                  <div className="text-xs font-mono text-[#575653]">
                    — {activeProject.testimonial.author}, {activeProject.testimonial.role}
                  </div>
                </div>
              )}

              {/* Modal Bottom Action */}
              <div className="pt-6 border-t border-[#e7e5e1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-[11px] font-mono bg-[#f0eee9] text-[#575653] rounded-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const name = activeProject.title;
                    setActiveProject(null);
                    if (onOpenContactWithProject) {
                      onOpenContactWithProject(name);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#141413] text-[#fafaf8] text-xs font-medium rounded-sm hover:bg-[#2c2b29] transition-colors cursor-pointer"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
