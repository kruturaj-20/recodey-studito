import React, { useState } from 'react';
import { ArrowRight, Check, FileText, Copy, CheckCheck, Sparkles, Sliders, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectEstimatorProps {
  onPreFillInquiry: (details: {
    service: string;
    budget: string;
    timeline: string;
    features: string[];
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPreFillInquiry }) => {
  const [model, setModel] = useState<'sprint' | 'retainer' | 'audit'>('sprint');
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'Custom Headless Next.js Frontend',
    'Core Web Vitals & Sub-Second LCP Guarantee',
    'Short-Form Direct-Response Video Production'
  ]);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Additional Interactive Sliders
  const [teamIntensity, setTeamIntensity] = useState<'standard' | 'accelerated' | 'enterprise'>('standard');
  const [monthlyVideoCount, setMonthlyVideoCount] = useState<number>(12);

  const scopeCatalog = [
    { id: 'nextjs', label: 'Custom Headless Next.js Frontend', tier: 'Engineering', weight: 4500 },
    { id: 'vitals', label: 'Core Web Vitals & Sub-Second LCP Guarantee', tier: 'Engineering', weight: 1800 },
    { id: 'shopify', label: 'Headless Shopify Commerce Engine', tier: 'Engineering', weight: 3500 },
    { id: 'reels', label: 'Short-Form Direct-Response Video Production', tier: 'Distribution', weight: 3200 },
    { id: 'paid-funnel', label: 'Performance Media (Meta & TikTok Ads Management)', tier: 'Distribution', weight: 2800 },
    { id: 'schema', label: 'JSON-LD Structured Schema & Technical SEO Graph', tier: 'Search', weight: 1400 },
    { id: 'cro', label: 'Conversion Rate Optimization & Funnel Instrumentation', tier: 'Growth', weight: 2200 },
  ];

  // Presets
  const applyPreset = (presetKey: 'ecommerce' | 'saas' | 'viral') => {
    if (presetKey === 'ecommerce') {
      setModel('sprint');
      setSelectedScopes([
        'Custom Headless Next.js Frontend',
        'Headless Shopify Commerce Engine',
        'Core Web Vitals & Sub-Second LCP Guarantee',
        'Conversion Rate Optimization & Funnel Instrumentation'
      ]);
    } else if (presetKey === 'saas') {
      setModel('sprint');
      setSelectedScopes([
        'Custom Headless Next.js Frontend',
        'Core Web Vitals & Sub-Second LCP Guarantee',
        'JSON-LD Structured Schema & Technical SEO Graph'
      ]);
    } else if (presetKey === 'viral') {
      setModel('retainer');
      setSelectedScopes([
        'Short-Form Direct-Response Video Production',
        'Performance Media (Meta & TikTok Ads Management)',
        'Conversion Rate Optimization & Funnel Instrumentation'
      ]);
    }
  };

  const toggleScope = (label: string) => {
    if (selectedScopes.includes(label)) {
      setSelectedScopes(selectedScopes.filter(s => s !== label));
    } else {
      setSelectedScopes([...selectedScopes, label]);
    }
  };

  // Base and scope calculations
  const baseInvestment = model === 'sprint' ? 6000 : model === 'retainer' ? 8500 : 2500;
  const scopeTotal = selectedScopes.reduce((acc, name) => {
    const item = scopeCatalog.find(s => s.label === name);
    return acc + (item ? item.weight : 1000);
  }, 0);

  const intensityMultiplier = teamIntensity === 'accelerated' ? 1.25 : teamIntensity === 'enterprise' ? 1.6 : 1.0;
  const calculatedSubtotal = model === 'audit' ? 2500 : Math.round((baseInvestment + scopeTotal) * intensityMultiplier);
  const estimatedTotal = calculatedSubtotal;
  
  const deliveryEstimate = model === 'audit' 
    ? '1-2 Weeks' 
    : teamIntensity === 'accelerated' 
      ? '3-4 Weeks (Fast-Track)' 
      : model === 'sprint' 
        ? '5-6 Weeks' 
        : 'Quarterly Retainer';

  const handleTransferToInquiry = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#141413', '#71716e', '#d6d3cc']
    });
    onPreFillInquiry({
      service: model === 'sprint' ? 'Web & Social Sprint' : model === 'retainer' ? 'Dedicated Monthly Retainer' : 'Technical Architecture Audit',
      budget: `$${estimatedTotal.toLocaleString()}`,
      timeline: deliveryEstimate,
      features: selectedScopes
    });
  };

  const handleCopyBrief = () => {
    const briefText = `RECODEY STUDIO PROJECT SCOPE BRIEF
Model: ${model.toUpperCase()}
Team Velocity: ${teamIntensity.toUpperCase()}
Estimated Delivery: ${deliveryEstimate}
Estimated Range: $${estimatedTotal.toLocaleString()}
Selected Deliverables:
${selectedScopes.map(s => `- ${s}`).join('\n')}`;

    navigator.clipboard.writeText(briefText);
    setCopiedBrief(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#141413', '#71716e', '#d6d3cc']
    });
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <section id="estimator" className="py-24 border-b border-[#e7e5e1] bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Engagement Configurator
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Transparent scope. <br />
              <span className="font-serif italic font-normal">Predictable investment.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            Configure your technical and creative requirements to generate a structured project brief and estimated investment range.
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 p-3 bg-[#ffffff] border border-[#e7e5e1] rounded-sm">
          <span className="text-xs font-mono uppercase text-[#71716e] pl-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#141413]" />
            <span>Recommended Scopes:</span>
          </span>
          <button
            onClick={() => applyPreset('ecommerce')}
            className="px-3 py-1.5 text-xs font-mono bg-[#f0eee9] hover:bg-[#e4e1db] text-[#141413] rounded-xs transition-colors cursor-pointer"
          >
            Headless E-Commerce Flagship
          </button>
          <button
            onClick={() => applyPreset('saas')}
            className="px-3 py-1.5 text-xs font-mono bg-[#f0eee9] hover:bg-[#e4e1db] text-[#141413] rounded-xs transition-colors cursor-pointer"
          >
            SaaS Core Web Vitals Overhaul
          </button>
          <button
            onClick={() => applyPreset('viral')}
            className="px-3 py-1.5 text-xs font-mono bg-[#f0eee9] hover:bg-[#e4e1db] text-[#141413] rounded-xs transition-colors cursor-pointer"
          >
            Organic Social Growth Retainer
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Model Selection & Scope Checkboxes */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 01: Engagement Model */}
            <div className="bg-[#ffffff] border border-[#e7e5e1] rounded-sm p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-4">
                01 / Select Engagement Structure
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  onClick={() => setModel('sprint')}
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    model === 'sprint'
                      ? 'bg-[#fafaf8] border-[#141413] shadow-xs'
                      : 'bg-[#ffffff] border-[#e7e5e1] hover:border-[#a8a29e]'
                  }`}
                >
                  <span className="text-xs font-mono text-[#71716e] block">STRUCTURE 01</span>
                  <div className="text-sm font-semibold text-[#141413] mt-1">Project Sprint</div>
                  <div className="text-xs text-[#575653] mt-1">4–6 week fixed scope deliverable build</div>
                </div>

                <div
                  onClick={() => setModel('retainer')}
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    model === 'retainer'
                      ? 'bg-[#fafaf8] border-[#141413] shadow-xs'
                      : 'bg-[#ffffff] border-[#e7e5e1] hover:border-[#a8a29e]'
                  }`}
                >
                  <span className="text-xs font-mono text-[#71716e] block">STRUCTURE 02</span>
                  <div className="text-sm font-semibold text-[#141413] mt-1">Dedicated Retainer</div>
                  <div className="text-xs text-[#575653] mt-1">Quarterly ongoing engineering &amp; media squad</div>
                </div>

                <div
                  onClick={() => setModel('audit')}
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    model === 'audit'
                      ? 'bg-[#fafaf8] border-[#141413] shadow-xs'
                      : 'bg-[#ffffff] border-[#e7e5e1] hover:border-[#a8a29e]'
                  }`}
                >
                  <span className="text-xs font-mono text-[#71716e] block">STRUCTURE 03</span>
                  <div className="text-sm font-semibold text-[#141413] mt-1">Technical Audit</div>
                  <div className="text-xs text-[#575653] mt-1">1–2 week deep-dive &amp; remediation roadmap</div>
                </div>
              </div>
            </div>

            {/* Step 02: Required Disciplines & Modules */}
            <div className="bg-[#ffffff] border border-[#e7e5e1] rounded-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e7e5e1]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e]">
                  02 / Select Modular Components
                </span>
                <span className="text-xs font-mono text-[#71716e]">
                  {selectedScopes.length} SCOPES SELECTED
                </span>
              </div>

              <div className="divide-y divide-[#e7e5e1]">
                {scopeCatalog.map((scope) => {
                  const isChecked = selectedScopes.includes(scope.label);
                  return (
                    <label 
                      key={scope.id}
                      className="py-3.5 flex items-center justify-between gap-4 cursor-pointer group hover:bg-[#fafaf8] px-2 rounded-xs transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleScope(scope.label)}
                          className="w-4 h-4 rounded-xs accent-[#141413] text-[#141413] border-[#e7e5e1] cursor-pointer"
                        />
                        <span className="text-xs font-medium text-[#141413]">
                          {scope.label}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#71716e] uppercase">
                        {scope.tier}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 03: Velocity & Dedication */}
            <div className="bg-[#ffffff] border border-[#e7e5e1] rounded-sm p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-4">
                03 / Team Velocity &amp; Sla
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setTeamIntensity('standard')}
                  className={`p-3 text-left border rounded-xs transition-colors cursor-pointer ${
                    teamIntensity === 'standard'
                      ? 'bg-[#fafaf8] border-[#141413]'
                      : 'border-[#e7e5e1] hover:border-[#141413]'
                  }`}
                >
                  <span className="text-xs font-mono font-semibold block text-[#141413]">Standard Velocity</span>
                  <span className="text-[11px] text-[#575653] block mt-1">Normal agile cycles</span>
                </button>
                <button
                  onClick={() => setTeamIntensity('accelerated')}
                  className={`p-3 text-left border rounded-xs transition-colors cursor-pointer ${
                    teamIntensity === 'accelerated'
                      ? 'bg-[#fafaf8] border-[#141413]'
                      : 'border-[#e7e5e1] hover:border-[#141413]'
                  }`}
                >
                  <span className="text-xs font-mono font-semibold block text-[#141413]">Accelerated (Fast-Track)</span>
                  <span className="text-[11px] text-[#575653] block mt-1">Dedicated dual-leads</span>
                </button>
                <button
                  onClick={() => setTeamIntensity('enterprise')}
                  className={`p-3 text-left border rounded-xs transition-colors cursor-pointer ${
                    teamIntensity === 'enterprise'
                      ? 'bg-[#fafaf8] border-[#141413]'
                      : 'border-[#e7e5e1] hover:border-[#141413]'
                  }`}
                >
                  <span className="text-xs font-mono font-semibold block text-[#141413]">Enterprise Dedicated</span>
                  <span className="text-[11px] text-[#575653] block mt-1">24/7 Priority SLA</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Estimated Summary Specification */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#ffffff] border border-[#e7e5e1] rounded-sm p-6 sm:p-8 space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-1">
                  Scope Specification
                </span>
                <h3 className="text-xl font-light text-[#141413]">
                  Project Summary
                </h3>
              </div>

              <div className="pt-4 border-t border-[#e7e5e1] space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#71716e] font-mono">ENGAGEMENT:</span>
                  <span className="font-semibold text-[#141413] uppercase font-mono">{model}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#71716e] font-mono">VELOCITY:</span>
                  <span className="font-semibold text-[#141413] uppercase font-mono">{teamIntensity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#71716e] font-mono">EST. TIMELINE:</span>
                  <span className="font-semibold text-[#141413] font-mono">{deliveryEstimate}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#f0eee9]">
                  <span className="text-[#71716e] font-mono">EST. INVESTMENT:</span>
                  <span className="text-2xl font-serif font-medium text-[#141413]">
                    ${estimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e7e5e1] space-y-2">
                <button
                  onClick={handleTransferToInquiry}
                  className="w-full py-3 px-4 bg-[#141413] text-[#fafaf8] text-xs font-medium rounded-sm hover:bg-[#2c2b29] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pre-fill Project Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCopyBrief}
                  className="w-full py-2.5 px-4 bg-[#f0eee9] text-[#141413] text-xs font-medium rounded-sm hover:bg-[#e4e1db] border border-[#e4e1db] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedBrief ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#71716e]" />}
                  <span>{copiedBrief ? 'Brief Copied to Clipboard!' : 'Copy Plaintext Brief'}</span>
                </button>
              </div>

              <p className="text-[11px] font-mono text-[#71716e] leading-normal pt-2">
                Estimates represent standard agency scope brackets. Official project proposals follow a 30-minute discovery consultation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

