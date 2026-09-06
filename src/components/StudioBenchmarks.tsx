import React, { useState, useRef } from 'react';
import { Terminal, Share2, Search, ArrowRight, CheckCircle2, ShieldAlert, Play, RefreshCw, Sparkles, Check, Globe } from 'lucide-react';
import { TECHNICAL_BENCHMARKS, SOCIAL_RETENTION_CURVE } from '../data/agencyData';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export const StudioBenchmarks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'social' | 'schema'>('web');
  const [activeSecond, setActiveSecond] = useState<number>(1);

  // Parallax scroll tracking
  const benchmarksRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: benchmarksRef,
    offset: ["start end", "end start"],
  });

  const bgWatermarkY = useTransform(scrollYProgress, [0, 1], ["-70px", "70px"]);
  const bgCoordsX = useTransform(scrollYProgress, [0, 1], ["-25px", "25px"]);

  // Live Audit Simulator state
  const [isSimulatingAudit, setIsSimulatingAudit] = useState<boolean>(false);
  const [auditStep, setAuditStep] = useState<number>(0);
  const [selectedNetwork, setSelectedNetwork] = useState<'4g' | '5g' | 'fiber'>('4g');
  const [auditResults, setAuditResults] = useState({
    lcp: 420,
    cls: 0.002,
    inp: 38,
    ttfb: 28,
    score: 99
  });

  // Schema format toggle
  const [schemaMode, setSchemaMode] = useState<'json' | 'preview'>('json');

  const runLiveAudit = () => {
    setIsSimulatingAudit(true);
    setAuditStep(1);

    setTimeout(() => setAuditStep(2), 600);
    setTimeout(() => setAuditStep(3), 1200);
    setTimeout(() => {
      setAuditStep(4);
      setIsSimulatingAudit(false);
      // Vary slightly based on network
      if (selectedNetwork === 'fiber') {
        setAuditResults({ lcp: 240, cls: 0.001, inp: 22, ttfb: 14, score: 100 });
      } else if (selectedNetwork === '5g') {
        setAuditResults({ lcp: 380, cls: 0.002, inp: 32, ttfb: 24, score: 99 });
      } else {
        setAuditResults({ lcp: 480, cls: 0.004, inp: 42, ttfb: 38, score: 98 });
      }
    }, 1800);
  };

  return (
    <section 
      ref={benchmarksRef}
      id="benchmarks" 
      className="relative py-24 border-b border-[#e7e5e1] bg-[#ffffff] overflow-hidden"
    >
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ y: bgWatermarkY }}
          className="absolute -top-12 left-0 right-0 text-[13vw] font-serif italic text-[#141413]/[0.02] leading-none whitespace-nowrap pl-4 will-change-transform"
        >
          Performance Thresholds &amp; Core Web Vitals
        </motion.div>

        <motion.div 
          style={{ x: bgCoordsX }}
          className="absolute bottom-8 left-12 text-[10px] font-mono text-[#71716e]/30 hidden lg:block tracking-widest"
        >
          SEC-03 // AUDIT STANDARDS: LCP &lt; 0.8S // FID &lt; 50MS // CLS &lt; 0.01
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Engineering &amp; Creative Audits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Measurable standards. <br />
              <span className="font-serif italic font-normal">Zero vanity metrics.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            We hold our work to verifiable performance thresholds across web latency, short-form retention curves, and semantic entity graphs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#e7e5e1] mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer shrink-0 ${
              activeTab === 'web'
                ? 'bg-[#141413] text-[#fafaf8]'
                : 'text-[#71716e] hover:text-[#141413] bg-[#f6f5f2]'
            }`}
          >
            01 / Core Web Vitals Benchmark
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer shrink-0 ${
              activeTab === 'social'
                ? 'bg-[#141413] text-[#fafaf8]'
                : 'text-[#71716e] hover:text-[#141413] bg-[#f6f5f2]'
            }`}
          >
            02 / Short-Form Retention Anatomy
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer shrink-0 ${
              activeTab === 'schema'
                ? 'bg-[#141413] text-[#fafaf8]'
                : 'text-[#71716e] hover:text-[#141413] bg-[#f6f5f2]'
            }`}
          >
            03 / Entity Schema Architecture
          </button>
        </div>

        {/* Tab 01: Core Web Vitals Standard & Live Audit Simulator */}
        {activeTab === 'web' && (
          <div className="space-y-8">
            
            {/* Interactive Live Speed Audit Simulator */}
            <div className="bg-[#fafaf8] border border-[#e7e5e1] p-6 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e7e5e1]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
                    Interactive Production Audit Emulator
                  </span>
                  <h4 className="text-base font-semibold text-[#141413] mt-0.5">
                    Test Edge Core Web Vitals Under Throttled Networks
                  </h4>
                </div>

                {/* Network preset picker */}
                <div className="flex items-center gap-2">
                  <div className="inline-flex p-0.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs font-mono">
                    <button
                      onClick={() => setSelectedNetwork('4g')}
                      className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                        selectedNetwork === '4g' ? 'bg-[#141413] text-white' : 'text-[#71716e]'
                      }`}
                    >
                      Fast 4G Mobile
                    </button>
                    <button
                      onClick={() => setSelectedNetwork('5g')}
                      className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                        selectedNetwork === '5g' ? 'bg-[#141413] text-white' : 'text-[#71716e]'
                      }`}
                    >
                      5G Cellular
                    </button>
                    <button
                      onClick={() => setSelectedNetwork('fiber')}
                      className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                        selectedNetwork === 'fiber' ? 'bg-[#141413] text-white' : 'text-[#71716e]'
                      }`}
                    >
                      Edge Fiber
                    </button>
                  </div>

                  <button
                    onClick={runLiveAudit}
                    disabled={isSimulatingAudit}
                    className="px-4 py-2 bg-[#141413] text-[#fafaf8] text-xs font-mono uppercase tracking-wider rounded-xs hover:bg-[#2c2b29] transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingAudit ? 'animate-spin' : ''}`} />
                    <span>{isSimulatingAudit ? 'Auditing...' : 'Run Audit'}</span>
                  </button>
                </div>
              </div>

              {/* Progress & Live Results */}
              <div className="mt-4 pt-2">
                {isSimulatingAudit ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-full bg-[#e7e5e1] h-1.5 rounded-full overflow-hidden max-w-md mx-auto">
                      <div 
                        className="bg-[#141413] h-full transition-all duration-300"
                        style={{ width: `${auditStep * 25}%` }}
                      />
                    </div>
                    <p className="text-xs font-mono text-[#71716e]">
                      {auditStep === 1 && 'Pinging Edge CDN Gateway (Tokyo / Frankfurt / Ashburn)...'}
                      {auditStep === 2 && 'Executing headless Chromium DOM tree audit (sub-50kb JS payload)...'}
                      {auditStep === 3 && 'Evaluating Cumulative Layout Shift and INP thread responsiveness...'}
                      {auditStep === 4 && 'Synthesizing verified Core Web Vitals telemetry...'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    <div className="p-3.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs">
                      <span className="text-[10px] font-mono text-[#71716e] uppercase block">LCP (Speed)</span>
                      <span className="text-xl font-mono font-semibold text-emerald-700">{auditResults.lcp}ms</span>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Threshold: &lt; 2,500ms</span>
                    </div>
                    <div className="p-3.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs">
                      <span className="text-[10px] font-mono text-[#71716e] uppercase block">CLS (Stability)</span>
                      <span className="text-xl font-mono font-semibold text-emerald-700">{auditResults.cls}</span>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Threshold: &lt; 0.10</span>
                    </div>
                    <div className="p-3.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs">
                      <span className="text-[10px] font-mono text-[#71716e] uppercase block">INP (Interact)</span>
                      <span className="text-xl font-mono font-semibold text-emerald-700">{auditResults.inp}ms</span>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Threshold: &lt; 200ms</span>
                    </div>
                    <div className="p-3.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs">
                      <span className="text-[10px] font-mono text-[#71716e] uppercase block">TTFB (Server)</span>
                      <span className="text-xl font-mono font-semibold text-emerald-700">{auditResults.ttfb}ms</span>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Threshold: &lt; 800ms</span>
                    </div>
                    <div className="p-3.5 bg-[#141413] text-white rounded-xs flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-stone-400 uppercase block">Lighthouse</span>
                      <span className="text-2xl font-mono font-semibold text-emerald-400">{auditResults.score}/100</span>
                      <span className="text-[10px] text-stone-300 block">Status: PASSED (GREEN)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Benchmark Table */}
              <div className="lg:col-span-8 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-8">
                <div className="flex items-center justify-between pb-6 border-b border-[#e7e5e1]">
                  <div>
                    <h3 className="text-base font-semibold text-[#141413]">
                      Production Latency Thresholds
                    </h3>
                    <p className="text-xs text-[#71716e] font-mono mt-0.5">
                      AUDIT SPECIFICATION: MOBILE 4G FAST EMULATION (99TH PERCENTILE)
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 bg-[#e7e5e1] text-[#141413] rounded-xs">
                    GREEN CRITERIA
                  </span>
                </div>

                <div className="divide-y divide-[#e7e5e1] mt-4">
                  {TECHNICAL_BENCHMARKS.map((item, i) => (
                    <div key={i} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      <div className="sm:col-span-6">
                        <span className="text-sm font-medium text-[#141413] block">
                          {item.metric}
                        </span>
                        <span className="text-xs text-[#71716e] leading-normal block mt-1">
                          {item.whyItMatters}
                        </span>
                      </div>
                      
                      <div className="sm:col-span-3">
                        <span className="text-[11px] font-mono text-[#71716e] block uppercase">
                          Recodey Standard
                        </span>
                        <span className="text-base font-mono font-semibold text-emerald-700">
                          {item.recodey}
                        </span>
                      </div>

                      <div className="sm:col-span-3">
                        <span className="text-[11px] font-mono text-[#71716e] block uppercase">
                          Industry Average
                        </span>
                        <span className="text-base font-mono text-[#a8a29e] line-through">
                          {item.industryAverage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Architectural Principles */}
              <div className="lg:col-span-4 bg-[#141413] text-[#fafaf8] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#a8a29e] uppercase">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Philosophy &amp; Rule</span>
                  </div>
                  <h4 className="text-xl font-light font-serif italic text-white">
                    "Every millisecond of latency is a tax on conversion."
                  </h4>
                  <p className="text-xs text-[#d6d3cc] leading-relaxed">
                    Legacy agencies ship bloated WordPress installs with 40 plugins and heavy tag containers. 
                    We compile statically to edge CDNs, strip unused JavaScript, and enforce strict zero-CLS layouts.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2c2b29] text-xs font-mono text-[#a8a29e] space-y-1.5">
                  <div>STATIC GENERATION: NEXT.JS / REACT 19</div>
                  <div>EDGE SERVING: GLOBAL CDN CACHE</div>
                  <div>PAYLOAD STANDARD: &lt; 50KB CRITICAL</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 02: Short-Form Retention Anatomy */}
        {activeTab === 'social' && (
          <div className="space-y-8">
            <div className="bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e7e5e1]">
                <div>
                  <h3 className="text-base font-semibold text-[#141413]">
                    15-Second Retention Curve Optimization
                  </h3>
                  <p className="text-xs text-[#71716e] font-mono mt-0.5">
                    ALGORITHMIC DISTRIBUTION BENCHMARK FOR TIKTOK &amp; REELS
                  </p>
                </div>
                <div className="text-xs font-mono text-[#71716e]">
                  TARGET RETENTION: &gt; 50% AT SECOND 15
                </div>
              </div>

              {/* Retention Curve Scrubber */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8">
                {SOCIAL_RETENTION_CURVE.map((item, idx) => {
                  const isSelected = activeSecond === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveSecond(idx)}
                      className={`p-5 rounded-sm border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#ffffff] border-[#141413] shadow-[0_2px_4px_rgba(0,0,0,0.04)]'
                          : 'bg-[#fafaf8] border-[#e7e5e1] hover:border-[#a8a29e]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-[#71716e]">
                          {item.second}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#141413]">
                          {item.retention} Retention
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-[#141413] mb-1">
                        {item.phase}
                      </h4>
                      <p className="text-xs text-[#575653] leading-relaxed">
                        {item.target}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-[#f0eee9] border border-[#e4e1db] rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71716e]">
                    Direct-Response Observation
                  </span>
                  <p className="text-xs text-[#2c2b29] leading-relaxed max-w-3xl">
                    The first 2.0 seconds determine up to 80% of algorithmic reach. We test 3-5 distinct visual hooks for every video edit to find the statistical outlier before scaling paid media budgets behind it.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 bg-[#141413] text-[#fafaf8] rounded-xs shrink-0 self-start md:self-auto">
                  A/B Hook Velocity
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 03: Entity Schema Architecture & Interactive Rich Results Previewer */}
        {activeTab === 'schema' && (
          <div className="bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e7e5e1]">
              <div>
                <h3 className="text-base font-semibold text-[#141413]">
                  Machine-Readable Structured Entity Graph (JSON-LD)
                </h3>
                <p className="text-xs text-[#71716e] font-mono mt-0.5">
                  NATIVE INJECTION INTO EVERY PRODUCTION BUILD
                </p>
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSchemaMode('json')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-xs cursor-pointer transition-colors ${
                    schemaMode === 'json' ? 'bg-[#141413] text-white' : 'bg-[#ffffff] border border-[#e7e5e1] text-[#71716e]'
                  }`}
                >
                  Raw JSON-LD
                </button>
                <button
                  onClick={() => setSchemaMode('preview')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-xs cursor-pointer transition-colors ${
                    schemaMode === 'preview' ? 'bg-[#141413] text-white' : 'bg-[#ffffff] border border-[#e7e5e1] text-[#71716e]'
                  }`}
                >
                  Google Rich SERP Preview
                </button>
              </div>
            </div>

            {schemaMode === 'json' ? (
              <div className="mt-6 bg-[#141413] text-[#e7e5e1] p-6 rounded-sm font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://recodeystudio.com/#organization",
      "name": "Recodey Studio",
      "url": "https://recodeystudio.com",
      "sameAs": [
        "https://twitter.com/recodeystudio",
        "https://linkedin.com/company/recodeystudio",
        "https://instagram.com/recodeystudio"
      ],
      "knowsAbout": [
        "Headless Web Engineering",
        "Technical Search Engine Optimization",
        "Short-Form Video Production",
        "Algorithmic Customer Acquisition"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://recodeystudio.com/#service",
      "name": "Web Engineering & Social Distribution Practice",
      "areaServed": "Global",
      "priceRange": "$$$"
    }
  ]
}`}
                </pre>
              </div>
            ) : (
              /* Simulated Google Search Result with Rich Snippet */
              <div className="mt-6 p-6 bg-[#ffffff] border border-[#e7e5e1] rounded-sm max-w-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-[#141413] text-[#fafaf8] flex items-center justify-center text-[10px] font-bold">
                    R
                  </div>
                  <div>
                    <span className="text-xs text-[#202124] block leading-none font-medium">Recodey Studio</span>
                    <span className="text-[11px] text-[#5f6368] font-mono block">https://recodeystudio.com</span>
                  </div>
                </div>

                <h4 className="text-lg text-[#1a0dab] hover:underline cursor-pointer font-medium mt-1">
                  Recodey Studio — Sub-Second Web Platforms &amp; Algorithmic Social Media
                </h4>

                <div className="flex items-center gap-2 my-1 text-xs text-[#5f6368]">
                  <span className="text-amber-600">★★★★★</span>
                  <span>Rating: 4.9 · ‎38 reviews</span>
                  <span>· Price range: $$$</span>
                  <span>· Service: Web &amp; Social</span>
                </div>

                <p className="text-xs text-[#4d5156] leading-relaxed">
                  Recodey Studio replaces legacy agency bloat with measured, high-velocity execution. High performance React 19 web platforms &amp; retention-first short-form video.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-[#f1f3f4] text-xs">
                  <div>
                    <a className="text-[#1a0dab] hover:underline font-medium block">Web Engineering Practice</a>
                    <span className="text-[11px] text-[#5f6368]">Sub-800ms LCP standards, Next.js 19 and zero page builder bloat.</span>
                  </div>
                  <div>
                    <a className="text-[#1a0dab] hover:underline font-medium block">Social Distribution Lab</a>
                    <span className="text-[11px] text-[#5f6368]">Scripting, filming, and scaling TikTok &amp; Reels campaigns.</span>
                  </div>
                </div>
              </div>
            )}

            <p className="text-xs text-[#71716e] mt-4 font-mono">
              Search crawlers and generative AI answer engines parse entity schemas to verify domain authority and cite verified client case studies.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
