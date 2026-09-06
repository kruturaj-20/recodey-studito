import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-24 border-b border-[#e7e5e1] bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Client Records &amp; Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Words from leadership. <br />
              <span className="font-serif italic font-normal">Documented impact.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            Direct perspectives from executives and technical founders who scaled digital infrastructure and organic distribution with Recodey Studio.
          </p>
        </div>

        {/* Testimonials Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-8 bg-[#ffffff] border border-[#e7e5e1] rounded-sm flex flex-col justify-between space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f0eee9]">
                  <span className="text-[11px] font-mono text-[#71716e] uppercase">
                    {t.company}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-[#141413] px-2 py-0.5 bg-[#f0eee9] rounded-xs">
                    {t.results}
                  </span>
                </div>

                <p className="text-sm font-serif italic text-[#2c2b29] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0eee9] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#141413]">
                    {t.clientName}
                  </div>
                  <div className="text-[11px] font-mono text-[#71716e]">
                    {t.clientRole}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#71716e]">
                  VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio FAQ Section */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="pb-8 mb-8 border-b border-[#e7e5e1]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-1">
              Inquiries &amp; Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#141413]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="divide-y divide-[#e7e5e1]">
            {FAQS.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <div
                    onClick={() => toggleFaq(idx)}
                    className="flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <h4 className="text-base font-medium text-[#141413]">
                      {faq.q}
                    </h4>
                    <button 
                      aria-label="Toggle FAQ answer"
                      className="w-7 h-7 rounded-sm border border-[#e7e5e1] bg-[#ffffff] flex items-center justify-center text-[#141413] shrink-0"
                    >
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-4 text-xs sm:text-sm text-[#575653] leading-relaxed max-w-3xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
