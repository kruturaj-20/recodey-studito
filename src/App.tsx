import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveStudioSandbox } from './components/InteractiveStudioSandbox';
import { ServicesSection } from './components/ServicesSection';
import { StudioBenchmarks } from './components/StudioBenchmarks';
import { PortfolioSection } from './components/PortfolioSection';
import { SeoOrganicSection } from './components/SeoOrganicSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { X, ArrowRight, Check } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [contactPreset, setContactPreset] = useState<{
    service?: string;
    budget?: string;
    timeline?: string;
    message?: string;
  }>({});

  // Quick inquiry drawer modal
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const [quickModalSent, setQuickModalSent] = useState(false);
  const [quickForm, setQuickForm] = useState({
    name: '',
    email: '',
    service: 'web-engineering',
    notes: ''
  });

  // Track active section for navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'studio-sandbox', 'services', 'benchmarks', 'portfolio', 'seo-proof', 'estimator', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactModal = () => {
    setQuickModalSent(false);
    setQuickModalOpen(true);
  };

  const handleScrollToContact = (preset?: {
    service?: string;
    budget?: string;
    timeline?: string;
    message?: string;
  }) => {
    if (preset) {
      setContactPreset(preset);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceId: string) => {
    handleScrollToContact({
      service: serviceId,
      message: `Inquiring regarding ${serviceId.replace(/-/g, ' ')} engagement.`
    });
  };

  const handleQuickModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.email) return;

    setQuickModalSent(true);
    setTimeout(() => {
      setQuickModalOpen(false);
      setQuickModalSent(false);
      setQuickForm({ name: '', email: '', service: 'web-engineering', notes: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#191918] antialiased selection:bg-[#191918] selection:text-[#fafaf8]">
      {/* Top Editorial Navigation */}
      <Navbar 
        onOpenContact={() => handleScrollToContact()}
        activeSection={activeSection}
      />

      {/* Main Structural Flow */}
      <main>
        {/* 1. Hero: Editorial Manifesto & Specification Ledger */}
        <HeroSection 
          onOpenContact={() => handleScrollToContact()}
          onExplorePortfolio={() => {
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Interactive Studio Sandbox: Live Split-Slider, Hook Scrubber & Latency Engine */}
        <InteractiveStudioSandbox />

        {/* 3. Capabilities & Practices (Structured Index Ledger) */}
        <ServicesSection 
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 4. Studio Standards & Empirical Benchmarks (LCP, Retention, Schema) */}
        <StudioBenchmarks />

        {/* 4. Selected Works & Case Study Audits */}
        <PortfolioSection 
          onOpenContactWithProject={(projectName) => {
            handleScrollToContact({
              message: `Interested in commissioning work aligned with the ${projectName} case study.`
            });
          }}
        />

        {/* 5. Organic Search Architecture & Keyword Blueprint */}
        <SeoOrganicSection 
          onRequestAudit={(domain) => {
            handleScrollToContact({
              message: `Requested technical Core Web Vitals and structured schema audit for domain: ${domain}`
            });
          }}
        />

        {/* 6. Transparent Engagement Configurator */}
        <ProjectEstimator 
          onPreFillInquiry={(details) => {
            handleScrollToContact({
              service: details.service,
              budget: details.budget,
              timeline: details.timeline,
              message: `Modular Scope Brief:\n${details.features.join(', ')}`
            });
          }}
        />

        {/* 7. Studio Journal & Field Notes */}
        <BlogSection />

        {/* 8. Client Records & Operating FAQs */}
        <TestimonialsSection />

        {/* 9. Direct Dispatch & Project Brief Form */}
        <ContactSection 
          initialService={contactPreset.service}
          initialBudget={contactPreset.budget}
          initialTimeline={contactPreset.timeline}
          initialMessage={contactPreset.message}
        />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Clean Quick Dispatch Modal */}
      {quickModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/70 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setQuickModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xs bg-[#f0eee9] text-[#71716e] hover:text-[#141413] hover:bg-[#e4e1db] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {quickModalSent ? (
              <div className="py-8 text-left space-y-3">
                <div className="w-8 h-8 rounded-xs bg-[#141413] text-[#fafaf8] flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-light text-[#141413]">
                  Brief Received
                </h3>
                <p className="text-xs text-[#575653] leading-relaxed">
                  We've received your note. A technical lead will review your requirements and respond within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickModalSubmit} className="space-y-4">
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-[#71716e] uppercase block">
                    Recodey Studio • Inquiries Desk
                  </span>
                  <h3 className="text-xl font-light text-[#141413] mt-1">
                    Start a Conversation
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#71716e] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Lee"
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#71716e] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={quickForm.email}
                    onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#71716e] mb-1">
                    Discipline
                  </label>
                  <select
                    value={quickForm.service}
                    onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                  >
                    <option value="web-engineering">Full-Stack Web Engineering</option>
                    <option value="social-marketing">Algorithmic Social Distribution</option>
                    <option value="full-funnel">Integrated Growth Engine</option>
                    <option value="seo-audit">Technical Search Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#71716e] mb-1">
                    Project Brief / URL (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your requirements or current platform URL..."
                    value={quickForm.notes}
                    onChange={(e) => setQuickForm({ ...quickForm, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#141413] text-[#fafaf8] text-xs font-medium rounded-xs hover:bg-[#2c2b29] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Dispatch Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
