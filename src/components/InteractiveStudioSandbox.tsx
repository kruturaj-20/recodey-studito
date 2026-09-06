import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Play, Pause, Volume2, VolumeX, Sliders, Smartphone, 
  Zap, Gauge, ArrowRight, RotateCcw, Activity, Eye, 
  Share2, Sparkles, CheckCircle2, TrendingUp, Laptop, RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveStudioSandbox: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'split-slider' | 'hook-lab' | 'roi-calculator'>('split-slider');

  // Parallax scroll tracking for section depth
  const sandboxRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sandboxRef,
    offset: ["start end", "end start"],
  });

  const bgWatermarkY = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);
  const bgLinesY = useTransform(scrollYProgress, [0, 1], ["-35px", "35px"]);

  // Mode 1: Split-screen slider state
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Mode 2: Short-form Hook Lab state
  const [currentHookSecond, setCurrentHookSecond] = useState<number>(1);
  const [isPlayingHook, setIsPlayingHook] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [activeReelTheme, setActiveReelTheme] = useState<'founder' | 'product' | 'organic'>('product');

  // Mode 3: ROI Latency Engine state
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(65000);
  const [aov, setAov] = useState<number>(120);
  const [currentSpeedSeconds, setCurrentSpeedSeconds] = useState<number>(3.8);

  // Hook Lab auto-play timer
  useEffect(() => {
    if (!isPlayingHook) return;
    const interval = setInterval(() => {
      setCurrentHookSecond((prev) => (prev >= 15 ? 1 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, [isPlayingHook]);

  // Calculations for Mode 3
  const speedReduction = Math.max(0, currentSpeedSeconds - 0.45);
  // Amazon/Google metric: every 100ms delay costs ~1% conversion
  const estimatedConversionLiftPercent = Math.min(32, Math.max(4, Number((speedReduction * 5.2).toFixed(1))));
  const baselineConversionRate = 0.021; // 2.1%
  const newConversionRate = baselineConversionRate * (1 + estimatedConversionLiftPercent / 100);
  const currentMonthlyOrders = monthlyTraffic * baselineConversionRate;
  const newMonthlyOrders = monthlyTraffic * newConversionRate;
  const monthlyRevenueLift = Math.round((newMonthlyOrders - currentMonthlyOrders) * aov);
  const annualRevenueLift = monthlyRevenueLift * 12;

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#141413', '#71716e', '#d6d3cc']
    });
  };

  return (
    <section 
      ref={sandboxRef}
      id="studio-sandbox" 
      className="relative py-24 border-b border-[#e7e5e1] bg-[#ffffff] overflow-hidden"
    >
      {/* Background Architectural Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ y: bgWatermarkY }}
          className="absolute -top-16 left-0 right-0 text-[12vw] font-serif italic text-[#141413]/[0.02] leading-none whitespace-nowrap pl-4 will-change-transform"
        >
          Interactive Laboratory &amp; Empirical Latency Benchmarks
        </motion.div>

        <motion.div 
          style={{ y: bgLinesY }}
          className="absolute top-1/3 left-8 text-[10px] font-mono text-[#71716e]/30 hidden lg:block tracking-widest space-y-1"
        >
          <div>SEC-02 // EMPIRICAL TELEMETRY</div>
          <div>DELTA: 1800MS VS 420MS</div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Status Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#71716e]">
                Interactive Architecture &amp; Creative Lab
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Experience the delta. <br />
              <span className="font-serif italic font-normal">Test the mechanics live.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            Test the architectural differences between bloated legacy stacks and Recodey's sub-second edge builds, or analyze our 15-second short-form hook retention engine.
          </p>
        </div>

        {/* Sandbox Primary Mode Navigation */}
        <div className="flex items-center justify-between gap-2 border-b border-[#e7e5e1] mb-10 overflow-x-auto pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveMode('split-slider')}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeMode === 'split-slider'
                  ? 'bg-[#141413] text-[#fafaf8] shadow-xs'
                  : 'bg-[#fafaf8] text-[#71716e] hover:text-[#141413] hover:bg-[#f0eee9]'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>01 / Architecture Split-Slider</span>
            </button>
            <button
              onClick={() => setActiveMode('hook-lab')}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeMode === 'hook-lab'
                  ? 'bg-[#141413] text-[#fafaf8] shadow-xs'
                  : 'bg-[#fafaf8] text-[#71716e] hover:text-[#141413] hover:bg-[#f0eee9]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>02 / 15s Retention Hook Lab</span>
            </button>
            <button
              onClick={() => setActiveMode('roi-calculator')}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeMode === 'roi-calculator'
                  ? 'bg-[#141413] text-[#fafaf8] shadow-xs'
                  : 'bg-[#fafaf8] text-[#71716e] hover:text-[#141413] hover:bg-[#f0eee9]'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>03 / Latency &amp; Revenue Engine</span>
            </button>
          </div>

          <span className="hidden lg:inline text-[11px] font-mono text-[#71716e]">
            TACTILE ENGINE • LIVE SIMULATION
          </span>
        </div>

        {/* MODE 1: Architecture Split-Screen Comparison */}
        {activeMode === 'split-slider' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fafaf8] border border-[#e7e5e1] p-4 rounded-sm">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-medium text-[#141413]">
                  Interactive Instruction:
                </span>
                <span className="text-xs text-[#575653]">
                  Drag the slider handle to contrast legacy monolith performance vs. Recodey Edge architecture.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSliderPosition(20)}
                  className="px-2.5 py-1 text-[11px] font-mono bg-[#ffffff] border border-[#e7e5e1] rounded-xs hover:border-[#141413] text-[#141413] cursor-pointer"
                >
                  Inspect Legacy
                </button>
                <button
                  onClick={() => setSliderPosition(80)}
                  className="px-2.5 py-1 text-[11px] font-mono bg-[#ffffff] border border-[#e7e5e1] rounded-xs hover:border-[#141413] text-[#141413] cursor-pointer"
                >
                  Inspect Recodey
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className="px-2.5 py-1 text-[11px] font-mono bg-[#141413] text-[#fafaf8] rounded-xs cursor-pointer"
                >
                  Split (50%)
                </button>
              </div>
            </div>

            {/* Split Comparison Canvas Container */}
            <div className="relative w-full aspect-[16/9] max-h-[560px] bg-[#fafaf8] border border-[#e7e5e1] rounded-sm overflow-hidden select-none">
              
              {/* Layer Left: Legacy Monolithic Stack */}
              <div className="absolute inset-0 bg-[#f7f5f0] p-6 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4 max-w-sm">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#e4e1db] text-[#71716e] text-[10px] font-mono uppercase tracking-wider rounded-xs">
                    Legacy Monolith (Shopify Theme / WP)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#71716e] line-through decoration-rose-500/60">
                    Bloated Runtime Architecture
                  </h3>
                  <p className="text-xs text-[#8c8983] leading-relaxed">
                    34 external third-party tracking scripts, render-blocking stylesheets, 3.4MB uncompressed JavaScript bundle, 1,420ms Time to First Byte.
                  </p>
                </div>

                {/* Legacy Metric Indicators */}
                <div className="grid grid-cols-3 gap-4 border-t border-[#e4e1db] pt-6 max-w-md">
                  <div>
                    <span className="text-[10px] font-mono text-[#8c8983] uppercase block">LCP Latency</span>
                    <span className="text-xl sm:text-2xl font-mono text-rose-700 font-semibold">3.82s</span>
                    <span className="text-[10px] text-rose-700 block mt-0.5">POOR (FAIL)</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8c8983] uppercase block">Lighthouse</span>
                    <span className="text-xl sm:text-2xl font-mono text-rose-700 font-semibold">41/100</span>
                    <span className="text-[10px] text-rose-700 block mt-0.5">HIGH FRICTION</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8c8983] uppercase block">Script Payload</span>
                    <span className="text-xl sm:text-2xl font-mono text-rose-700 font-semibold">3.4 MB</span>
                    <span className="text-[10px] text-rose-700 block mt-0.5">HEAVY BLOAT</span>
                  </div>
                </div>
              </div>

              {/* Layer Right: Recodey Edge Platform (Clipped by Slider) */}
              <div 
                className="absolute inset-0 bg-[#ffffff] p-6 sm:p-10 flex flex-col justify-between border-l border-[#141413]/20 shadow-[-8px_0_24px_rgba(0,0,0,0.06)]"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className="space-y-4 max-w-sm ml-auto text-right">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#141413] text-[#fafaf8] text-[10px] font-mono uppercase tracking-wider rounded-xs ml-auto">
                    Recodey Edge Platform (Next.js 19)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#141413]">
                    Sub-Second Static Velocity
                  </h3>
                  <p className="text-xs text-[#575653] leading-relaxed">
                    Zero render-blocking scripts, tree-shaken critical CSS, edge static CDN caching, 38kb critical JS, 34ms Time to First Byte globally.
                  </p>
                </div>

                {/* Recodey Metric Indicators */}
                <div className="grid grid-cols-3 gap-4 border-t border-[#e7e5e1] pt-6 max-w-md ml-auto text-right">
                  <div>
                    <span className="text-[10px] font-mono text-[#71716e] uppercase block">LCP Latency</span>
                    <span className="text-xl sm:text-2xl font-mono text-emerald-700 font-semibold">0.42s</span>
                    <span className="text-[10px] text-emerald-700 block mt-0.5">GOOD (99TH %)</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#71716e] uppercase block">Lighthouse</span>
                    <span className="text-xl sm:text-2xl font-mono text-emerald-700 font-semibold">100/100</span>
                    <span className="text-[10px] text-emerald-700 block mt-0.5">PRISTINE RUN</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#71716e] uppercase block">Script Payload</span>
                    <span className="text-xl sm:text-2xl font-mono text-emerald-700 font-semibold">48 KB</span>
                    <span className="text-[10px] text-emerald-700 block mt-0.5">OPTIMIZED EDGE</span>
                  </div>
                </div>
              </div>

              {/* Draggable Divider Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#141413] cursor-ew-resize flex items-center justify-center z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#141413] text-[#fafaf8] shadow-lg flex items-center justify-center -translate-x-1/2 cursor-grab active:cursor-grabbing border-2 border-[#ffffff]">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>

              {/* Transparent Slider Range Input for Touch & Drag */}
              <input 
                type="range" 
                min="5" 
                max="95" 
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag to compare legacy vs recodey architecture"
              />
            </div>

            {/* Bottom Live Waterfall Inspection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71716e] uppercase">Legacy Waterfall Sequence</span>
                  <span className="text-xs font-mono text-rose-700">Total: 3,820ms</span>
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-[#71716e]">DNS:</span>
                    <div className="w-24 h-2 bg-rose-300 rounded-xs" />
                    <span className="text-[#141413]">120ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-[#71716e]">TTFB:</span>
                    <div className="w-48 h-2 bg-rose-400 rounded-xs" />
                    <span className="text-[#141413]">1,420ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-[#71716e]">Assets:</span>
                    <div className="w-64 h-2 bg-rose-500 rounded-xs" />
                    <span className="text-[#141413]">2,280ms</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71716e] uppercase">Recodey Edge Sequence</span>
                  <span className="text-xs font-mono text-emerald-700">Total: 420ms</span>
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-[#71716e]">DNS:</span>
                    <div className="w-4 h-2 bg-emerald-400 rounded-xs" />
                    <span className="text-[#141413]">18ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-[#71716e]">TTFB:</span>
                    <div className="w-8 h-2 bg-emerald-500 rounded-xs" />
                    <span className="text-[#141413]">34ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 text-[#71716e]">Assets:</span>
                    <div className="w-20 h-2 bg-emerald-600 rounded-xs" />
                    <span className="text-[#141413]">368ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: Short-Form 15s Retention Hook Lab */}
        {activeMode === 'hook-lab' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Phone Mockup with Playback */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/16] bg-[#141413] rounded-[36px] p-3 shadow-2xl border-4 border-[#2c2b29] flex flex-col justify-between overflow-hidden">
                
                {/* Phone Speaker & Dynamic Island Notch */}
                <div className="w-28 h-4 bg-[#2c2b29] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#141413] mr-2" />
                  <div className="w-8 h-1 bg-[#141413] rounded-full" />
                </div>

                {/* Video Simulation Canvas */}
                <div className="relative flex-1 rounded-[24px] bg-[#222120] overflow-hidden flex flex-col justify-between p-4 text-[#fafaf8]">
                  
                  {/* Subtle Video Background Representation */}
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-stone-800 via-stone-900 to-black pointer-events-none" />
                  
                  {/* Top Live Badges */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 bg-[#ffffff]/20 backdrop-blur-xs rounded-xs">
                      {activeReelTheme === 'product' && 'D2C APPAREL CUT'}
                      {activeReelTheme === 'founder' && 'FOUNDER THESIS'}
                      {activeReelTheme === 'organic' && 'VIRAL SEEDING'}
                    </span>
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full bg-[#ffffff]/20 hover:bg-[#ffffff]/30 transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Center Dynamic Visual Cue at Current Second */}
                  <div className="relative z-10 my-auto text-center space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-mono">
                      <Activity className="w-3 h-3 animate-pulse" />
                      <span>{currentHookSecond}s / 15s Timestamp</span>
                    </div>

                    <h4 className="text-xl font-light tracking-tight px-2 leading-snug">
                      {currentHookSecond <= 3 && "⚡ Hook: Visual pattern interrupt & curiosity gap established."}
                      {currentHookSecond > 3 && currentHookSecond <= 7 && "🔥 Retention: High-velocity proof cut without empty breath."}
                      {currentHookSecond > 7 && currentHookSecond <= 11 && "📦 Value Demo: Demonstrating tactile friction-free outcome."}
                      {currentHookSecond > 11 && "🎯 Conversion Callout: Seamless link-in-bio frictionless checkout."}
                    </h4>
                  </div>

                  {/* Bottom Video Progress & Engagement Column */}
                  <div className="relative z-10 space-y-3">
                    {/* Scrub Progress Bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-400 h-full transition-all duration-300"
                        style={{ width: `${(currentHookSecond / 15) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setIsPlayingHook(!isPlayingHook)}
                          className="w-7 h-7 rounded-full bg-white text-[#141413] flex items-center justify-center cursor-pointer"
                        >
                          {isPlayingHook ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                        </button>
                        <span className="font-mono text-[11px]">
                          0:{currentHookSecond < 10 ? `0${currentHookSecond}` : currentHookSecond}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-[11px] font-mono text-white/80">
                        <span>❤️ 48.2k</span>
                        <span>💬 1,420</span>
                        <span>↗ 8.9k</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Home Indicator Bar */}
                <div className="w-32 h-1 bg-[#444] rounded-full mx-auto mt-2" />
              </div>
            </div>

            {/* Right: Interactive Second-by-Second Scrubber & Playbook Analysis */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Campaign Theme Picker */}
              <div className="bg-[#fafaf8] border border-[#e7e5e1] p-5 rounded-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-3">
                  Select Distribution Creative Format
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveReelTheme('product')}
                    className={`py-2 px-3 text-xs font-mono rounded-xs border transition-colors cursor-pointer ${
                      activeReelTheme === 'product'
                        ? 'bg-[#141413] text-[#fafaf8] border-[#141413]'
                        : 'bg-[#ffffff] text-[#71716e] border-[#e7e5e1] hover:border-[#141413]'
                    }`}
                  >
                    Product Velocity
                  </button>
                  <button
                    onClick={() => setActiveReelTheme('founder')}
                    className={`py-2 px-3 text-xs font-mono rounded-xs border transition-colors cursor-pointer ${
                      activeReelTheme === 'founder'
                        ? 'bg-[#141413] text-[#fafaf8] border-[#141413]'
                        : 'bg-[#ffffff] text-[#71716e] border-[#e7e5e1] hover:border-[#141413]'
                    }`}
                  >
                    Founder Angle
                  </button>
                  <button
                    onClick={() => setActiveReelTheme('organic')}
                    className={`py-2 px-3 text-xs font-mono rounded-xs border transition-colors cursor-pointer ${
                      activeReelTheme === 'organic'
                        ? 'bg-[#141413] text-[#fafaf8] border-[#141413]'
                        : 'bg-[#ffffff] text-[#71716e] border-[#e7e5e1] hover:border-[#141413]'
                    }`}
                  >
                    Creator Seeding
                  </button>
                </div>
              </div>

              {/* Scrubber Buttons */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
                  Scrub Timeline Milestones
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 3, 7, 11, 15].map((sec) => (
                    <button
                      key={sec}
                      onClick={() => {
                        setCurrentHookSecond(sec);
                        setIsPlayingHook(false);
                      }}
                      className={`p-3 text-center border rounded-xs transition-all cursor-pointer ${
                        currentHookSecond === sec
                          ? 'bg-[#141413] text-[#fafaf8] border-[#141413]'
                          : 'bg-[#ffffff] text-[#575653] border-[#e7e5e1] hover:border-[#141413]'
                      }`}
                    >
                      <span className="block text-sm font-semibold font-mono">{sec}s</span>
                      <span className="text-[10px] block opacity-70">
                        {sec === 1 && 'Interrupt'}
                        {sec === 3 && 'Hook Lock'}
                        {sec === 7 && 'Value'}
                        {sec === 11 && 'Proof'}
                        {sec === 15 && 'Action'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Algorithmic Breakdown for Active Timestamp */}
              <div className="bg-[#fafaf8] border border-[#e7e5e1] p-6 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#e7e5e1] pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#141413]" />
                    <h4 className="text-sm font-semibold text-[#141413]">
                      Second {currentHookSecond} Algorithmic Blueprint
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-xs border border-emerald-200">
                    Retention: {Math.max(48, Math.round(92 - currentHookSecond * 2.8))}% Expected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-mono text-[#71716e] block uppercase text-[10px] mb-1">
                      Editorial Execution
                    </span>
                    <p className="text-[#2c2b29] leading-relaxed">
                      {currentHookSecond <= 3 && "Strictly no greeting or intro cards. Begin in media res with rapid motion, unexpected auditory sound effect, and high-contrast bold typography."}
                      {currentHookSecond > 3 && currentHookSecond <= 7 && "Jump cuts every 1.1 seconds. Background audio ducking under dialogue to maintain crisp speech intelligibility and prevent swipe-aways."}
                      {currentHookSecond > 7 && currentHookSecond <= 11 && "Side-by-side split screen showing before/after outcome or real customers reacting to verifiable utility."}
                      {currentHookSecond > 11 && "Native comment incentive ('Drop a comment below for direct link access') powering algorithmic comment velocity."}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[#71716e] block uppercase text-[10px] mb-1">
                      Algorithmic Signal Triggered
                    </span>
                    <p className="text-[#2c2b29] leading-relaxed">
                      {currentHookSecond <= 3 && "2-Second Watch Rate > 85% (Triggers TikTok Tier 1 distribution batch to 10,000 seed viewers)."}
                      {currentHookSecond > 3 && currentHookSecond <= 7 && "Average Watch Time exceeding 6.2s (Feeds Meta Reels high-intent audience lookalike models)."}
                      {currentHookSecond > 7 && currentHookSecond <= 11 && "Share-to-Watch Ratio > 4.2% (The primary viral multiplier on YouTube Shorts & IG)."}
                      {currentHookSecond > 11 && "Comment velocity & direct link engagement triggering commercial conversion attribution."}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e7e5e1] flex items-center justify-between text-xs font-mono text-[#71716e]">
                  <span>RECODEY SHORT-FORM LAB</span>
                  <span>TIKTOK • REELS • SHORTS</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* MODE 3: Latency & Revenue Impact Engine */}
        {activeMode === 'roi-calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Range Sliders */}
            <div className="lg:col-span-7 bg-[#fafaf8] border border-[#e7e5e1] p-6 sm:p-8 rounded-sm space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-1">
                  Empirical Latency Model
                </span>
                <h3 className="text-xl font-light text-[#141413]">
                  Configure Your Current Traffic &amp; Latency Parameters
                </h3>
              </div>

              {/* Slider 1: Monthly Traffic */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#575653]">Monthly Unique Visitors</span>
                  <span className="text-base font-semibold text-[#141413]">
                    {monthlyTraffic.toLocaleString()} visitors/mo
                  </span>
                </div>
                <input 
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={monthlyTraffic}
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full accent-[#141413] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71716e]">
                  <span>10,000</span>
                  <span>250,000</span>
                  <span>500,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Order / Contract Value */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#575653]">Average Order Value (AOV) / ACV</span>
                  <span className="text-base font-semibold text-[#141413]">
                    ${aov.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full accent-[#141413] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71716e]">
                  <span>$20 (CPG)</span>
                  <span>$150 (D2C)</span>
                  <span>$1,000+ (High Ticket/SaaS)</span>
                </div>
              </div>

              {/* Slider 3: Current Mobile Load Speed */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#575653]">Current Mobile Page Load Speed</span>
                  <span className="text-base font-semibold text-rose-700">
                    {currentSpeedSeconds}s (Industry Avg: 3.4s)
                  </span>
                </div>
                <input 
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.1"
                  value={currentSpeedSeconds}
                  onChange={(e) => setCurrentSpeedSeconds(Number(e.target.value))}
                  className="w-full accent-rose-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#71716e]">
                  <span>1.0s (Fast)</span>
                  <span>3.5s (Average)</span>
                  <span>6.0s (Severe Dropoff)</span>
                </div>
              </div>

              <div className="p-4 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#575653] leading-relaxed">
                <strong className="text-[#141413]">Benchmark Formula:</strong> Based on Akamai and Google research, every 100ms of latency reduction correlates to +1.1% in conversion rate for transactional ecommerce and lead generation funnels.
              </div>
            </div>

            {/* Right Column: Live Yield Output Card */}
            <div className="lg:col-span-5 bg-[#141413] text-[#fafaf8] p-6 sm:p-8 rounded-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#2c2b29] pb-4">
                <span className="text-xs font-mono text-[#a8a29e] uppercase">
                  Projected Recodey Edge Lift
                </span>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono rounded-xs border border-emerald-500/30">
                  ESTIMATED RETURN
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#a8a29e] block mb-1">
                  Estimated Annual Revenue Recovered
                </span>
                <div className="text-4xl sm:text-5xl font-serif font-light text-[#ffffff] tracking-tight">
                  +${annualRevenueLift.toLocaleString()}
                  <span className="text-base font-sans font-normal text-[#a8a29e]">/yr</span>
                </div>
                <p className="text-xs text-emerald-400 mt-2 font-mono flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+${monthlyRevenueLift.toLocaleString()}/month recurring pipeline expansion</span>
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#2c2b29] text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-[#2c2b29]/50">
                  <span className="text-[#a8a29e]">Speed Target (Edge):</span>
                  <span className="text-emerald-400 font-semibold">0.45s (Sub-second)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#2c2b29]/50">
                  <span className="text-[#a8a29e]">Latency Reduction:</span>
                  <span className="text-white">-{speedReduction.toFixed(2)} seconds</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#2c2b29]/50">
                  <span className="text-[#a8a29e]">Projected Conversion Delta:</span>
                  <span className="text-emerald-400 font-semibold">+{estimatedConversionLiftPercent}%</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#a8a29e]">Baseline vs New Orders:</span>
                  <span className="text-white">{Math.round(currentMonthlyOrders)} → {Math.round(newMonthlyOrders)} /mo</span>
                </div>
              </div>

              <button
                onClick={triggerConfetti}
                className="w-full py-3 bg-[#ffffff] text-[#141413] text-xs font-medium rounded-xs hover:bg-[#e4e1db] transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Save This Simulation &amp; Celebrate</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
