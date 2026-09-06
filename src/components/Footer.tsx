import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fafaf8] border-t border-[#e7e5e1] text-[#575653] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#e7e5e1]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-lg tracking-tight text-[#141413]">
                RECODEY
              </span>
              <span className="text-xs font-mono text-[#71716e] uppercase">
                / Studio
              </span>
            </div>

            <p className="text-xs text-[#575653] leading-relaxed max-w-sm">
              Independent digital engineering &amp; cultural distribution practice. 
              We craft high-performance web platforms and execute algorithmic short-form social campaigns.
            </p>

            <div className="text-[11px] font-mono text-[#71716e] pt-2">
              NEW YORK • LONDON • TOKYO • REMOTE
            </div>
          </div>

          {/* Directory 01: Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
              Disciplines
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#141413] transition-colors">
                  Full-Stack Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#141413] transition-colors">
                  Algorithmic Social Distribution
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#141413] transition-colors">
                  Integrated Growth Engine
                </a>
              </li>
              <li>
                <a href="#seo-proof" className="hover:text-[#141413] transition-colors">
                  Technical Search Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Directory 02: Verification */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
              Studio Index
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-[#141413] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#benchmarks" className="hover:text-[#141413] transition-colors">
                  Performance Audits
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#141413] transition-colors">
                  Project Estimator
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#141413] transition-colors">
                  Field Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
              Channels
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={AGENCY_INFO.socialLinks.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href={AGENCY_INFO.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href={AGENCY_INFO.socialLinks.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${AGENCY_INFO.email}`} 
                  className="hover:text-[#141413] transition-colors"
                >
                  Direct Dispatch
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#71716e]">
          <div>
            &copy; {new Date().getFullYear()} RECODEY STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>VERSION 2.4.0</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#141413] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>TOP OF DESK</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
