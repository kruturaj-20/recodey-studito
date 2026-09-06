import React, { useState } from 'react';
import { Search, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { SEO_KEYWORDS_MATRIX } from '../data/agencyData';

interface SeoOrganicSectionProps {
  onRequestAudit: (domain: string) => void;
}

export const SeoOrganicSection: React.FC<SeoOrganicSectionProps> = ({ onRequestAudit }) => {
  const [auditDomain, setAuditDomain] = useState<string>('');
  const [auditSubmitted, setAuditSubmitted] = useState<boolean>(false);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditDomain.trim()) return;
    setAuditSubmitted(true);
    onRequestAudit(auditDomain);
  };

  return (
    <section id="seo-proof" className="py-24 border-b border-[#e7e5e1] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Organic Search Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Semantic precision. <br />
              <span className="font-serif italic font-normal">Algorithmic authority.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            Search engine algorithms evaluate structural crawlability, time-to-first-byte (TTFB), and explicit entity schemas before ranking content.
          </p>
        </div>

        {/* 4 Architectural Pillars of Recodey SEO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-2">
            <span className="text-xs font-mono text-[#71716e]">PILLAR 01</span>
            <h3 className="text-sm font-semibold text-[#141413]">Semantic HTML5 Core</h3>
            <p className="text-xs text-[#575653] leading-relaxed">
              Strict document outline hierarchy with valid headings, landmarks, and ARIA attributes for rapid search bot parsing.
            </p>
          </div>

          <div className="p-6 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-2">
            <span className="text-xs font-mono text-[#71716e]">PILLAR 02</span>
            <h3 className="text-sm font-semibold text-[#141413]">Sub-50ms Edge TTFB</h3>
            <p className="text-xs text-[#575653] leading-relaxed">
              Global CDN edge deployment ensures search crawler bot budgets are maximized with zero server latency.
            </p>
          </div>

          <div className="p-6 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-2">
            <span className="text-xs font-mono text-[#71716e]">PILLAR 03</span>
            <h3 className="text-sm font-semibold text-[#141413]">JSON-LD Entity Graph</h3>
            <p className="text-xs text-[#575653] leading-relaxed">
              Machine-readable structured schema linking organizations, services, founders, and content to knowledge graphs.
            </p>
          </div>

          <div className="p-6 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-2">
            <span className="text-xs font-mono text-[#71716e]">PILLAR 04</span>
            <h3 className="text-sm font-semibold text-[#141413]">Omni-Channel Indexing</h3>
            <p className="text-xs text-[#575653] leading-relaxed">
              Coordinating web search keywords with TikTok &amp; YouTube social search for total topical market domination.
            </p>
          </div>
        </div>

        {/* Keyword Intelligence Matrix Table */}
        <div className="bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e7e5e1]">
            <div>
              <h3 className="text-base font-semibold text-[#141413]">
                Commercial Keyword Strategy Sample
              </h3>
              <p className="text-xs text-[#71716e] font-mono mt-0.5">
                SAMPLE HIGH-INTENT TARGET MATRIX &amp; TECHNICAL BLUEPRINT
              </p>
            </div>
            <span className="text-xs font-mono text-[#71716e]">
              UPDATED MONTHLY
            </span>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#e7e5e1] text-[#71716e] font-mono uppercase">
                  <th className="py-3 px-4">Target Keyword</th>
                  <th className="py-3 px-4">Global Search Volume</th>
                  <th className="py-3 px-4">Competitive Tier</th>
                  <th className="py-3 px-4">Search Intent</th>
                  <th className="py-3 px-4">Technical Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e5e1]">
                {SEO_KEYWORDS_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f6f5f2] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-[#141413]">
                      "{row.keyword}"
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#575653]">
                      {row.volume}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 font-mono text-[10px] bg-[#f0eee9] text-[#575653] rounded-xs">
                        {row.difficulty}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#575653]">
                      {row.intent}
                    </td>
                    <td className="py-3.5 px-4 text-[#71716e] font-mono">
                      Sub-800ms LCP + Structured Schema
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Domain Audit Request */}
        <div className="bg-[#f0eee9] border border-[#e4e1db] rounded-sm p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-1">
              Complimentary Studio Assessment
            </span>
            <h3 className="text-lg font-semibold text-[#141413]">
              Request a Technical Architecture Audit
            </h3>
            <p className="text-xs text-[#575653] mt-1 leading-relaxed">
              Submit your domain for an engineer-led review of your Core Web Vitals, JavaScript payload overhead, and structured schema implementation.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {auditSubmitted ? (
              <div className="px-5 py-3 bg-[#ffffff] border border-[#e7e5e1] rounded-sm text-xs font-mono text-emerald-800 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Audit queued for review ({auditDomain})</span>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="text"
                  required
                  placeholder="domain.com"
                  value={auditDomain}
                  onChange={(e) => setAuditDomain(e.target.value)}
                  className="w-full sm:w-64 px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-sm text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2.5 bg-[#141413] text-[#fafaf8] text-xs font-medium rounded-sm hover:bg-[#2c2b29] transition-colors shrink-0 cursor-pointer"
                >
                  Analyze Domain
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
