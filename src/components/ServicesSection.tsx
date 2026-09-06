import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';
import { SERVICES } from '../data/agencyData';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForInquiry 
}) => {
  const [expandedService, setExpandedService] = useState<string>('web-engineering');

  const toggleService = (id: string) => {
    setExpandedService(prev => prev === id ? '' : id);
  };

  return (
    <section id="services" className="py-24 border-b border-[#e7e5e1] bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Capabilities &amp; Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Engineered for velocity. <br />
              <span className="font-serif italic font-normal">Tuned for retention.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            We provide deep specialization in modern web architecture and organic social distribution, with transparent deliverables and verifiable performance metrics.
          </p>
        </motion.div>

        {/* Structured Capabilities Ledger */}
        <div className="border-t border-[#e7e5e1] divide-y divide-[#e7e5e1]">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedService === service.id;
            const indexNumber = `0${index + 1}`;

            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ 
                  duration: 0.65, 
                  delay: index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`transition-colors ${isExpanded ? 'bg-[#ffffff]' : 'hover:bg-[#f6f5f2]'}`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleService(service.id)}
                  className="py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                    <span className="text-xs font-mono text-[#71716e] pt-1 sm:pt-0">
                      /{indexNumber}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-light text-[#141413] tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#71716e] mt-1 font-mono">
                        BENCHMARK: {service.keyMetrics}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <span className="hidden lg:inline text-xs text-[#575653] max-w-xs truncate">
                      {service.tagline}
                    </span>
                    <button 
                      aria-label="Toggle capability details"
                      className="w-8 h-8 rounded-sm border border-[#e7e5e1] bg-[#fafaf8] flex items-center justify-center text-[#141413] hover:bg-[#e4e1db] transition-colors"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer with Smooth Animated Expansion */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-8 pt-2 border-t border-[#f0eee9] grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left: Description & Tech Stack */}
                        <div className="lg:col-span-6 space-y-6">
                          <p className="text-sm text-[#444340] leading-relaxed">
                            {service.description}
                          </p>

                          <div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
                              Production Tooling &amp; Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.techStack.map((tech) => (
                                <span 
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-mono bg-[#f0eee9] border border-[#e4e1db] text-[#444340] rounded-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              onClick={() => onSelectServiceForInquiry(service.id)}
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#141413] text-[#fafaf8] text-xs font-medium hover:bg-[#2c2b29] transition-colors cursor-pointer"
                            >
                              <span>Inquire About This Discipline</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Right: Deliverable Checklist */}
                        <div className="lg:col-span-6 bg-[#fafaf8] border border-[#e7e5e1] p-6 rounded-sm">
                          <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-4">
                            Standard Deliverables &amp; Scope
                          </span>
                          <ul className="space-y-3">
                            {service.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-xs text-[#2c2b29] leading-relaxed">
                                <span className="w-4 h-4 rounded-xs bg-[#e4e1db] text-[#141413] flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3" />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
