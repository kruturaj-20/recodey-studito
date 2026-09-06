import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Copy, CheckCheck, Mail, MapPin, Clock } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
  initialTimeline?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialBudget,
  initialTimeline,
  initialMessage
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'web-engineering',
    budget: initialBudget || '$10k – $25k',
    timeline: initialTimeline || '4–6 Weeks',
    message: initialMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) setFormData(prev => ({ ...prev, service: initialService }));
    if (initialBudget) setFormData(prev => ({ ...prev, budget: initialBudget }));
    if (initialTimeline) setFormData(prev => ({ ...prev, timeline: initialTimeline }));
    if (initialMessage) setFormData(prev => ({ ...prev, message: initialMessage }));
  }, [initialService, initialBudget, initialTimeline, initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(AGENCY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#e7e5e1] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#e7e5e1]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block mb-2">
              Direct Engagement • Q2 / Q3 2026
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#141413]">
              Start a project. <br />
              <span className="font-serif italic font-normal">Initiate the brief.</span>
            </h2>
          </div>
          <p className="text-sm text-[#575653] max-w-md leading-relaxed">
            We review project inquiries within 4 business hours. Tell us about your technical requirements or distribution objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
                Direct Communication
              </span>
              
              <div className="flex items-center justify-between pt-2 border-t border-[#e7e5e1]">
                <div>
                  <div className="text-xs text-[#71716e] font-mono">PRIMARY INQUIRIES:</div>
                  <div className="text-sm font-mono font-medium text-[#141413]">
                    {AGENCY_INFO.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono bg-[#f0eee9] hover:bg-[#e4e1db] border border-[#e4e1db] text-[#141413] rounded-xs transition-colors cursor-pointer"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="pt-2 border-t border-[#e7e5e1]">
                <div className="text-xs text-[#71716e] font-mono">DIRECT DESK:</div>
                <div className="text-sm font-mono text-[#141413]">
                  {AGENCY_INFO.directPhone}
                </div>
              </div>

              <div className="pt-2 border-t border-[#e7e5e1]">
                <div className="text-xs text-[#71716e] font-mono">STUDIO HUBS:</div>
                <div className="text-xs text-[#575653] mt-0.5">
                  {AGENCY_INFO.locations.join(' • ')}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm space-y-3 text-xs text-[#575653]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71716e] block">
                Production Policies
              </span>
              <p className="leading-relaxed">
                • Every project is led by a senior technical director and senior creative strategist.
              </p>
              <p className="leading-relaxed">
                • Non-Disclosure Agreements (NDAs) executed prior to architectural review upon request.
              </p>
              <p className="leading-relaxed">
                • Weekly sprint cadences with shared Slack access and transparent GitHub / Figma workspaces.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#fafaf8] border border-[#e7e5e1] rounded-sm p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-left space-y-4">
                <div className="w-10 h-10 rounded-xs bg-[#141413] text-[#fafaf8] flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-light text-[#141413]">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#575653] leading-relaxed max-w-md">
                  Thank you, {formData.name}. A Recodey Studio technical lead has received your brief and will respond to <strong className="text-[#141413] font-mono font-normal">{formData.email}</strong> within 4 business hours with initial notes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-[#f0eee9] text-[#141413] text-xs font-mono rounded-xs border border-[#e4e1db] hover:bg-[#e4e1db] transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                      Company / Organization URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://company.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                      Primary Discipline
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    >
                      <option value="web-engineering">Full-Stack Web Engineering</option>
                      <option value="social-marketing">Algorithmic Social Distribution</option>
                      <option value="full-funnel">Integrated Growth Architecture</option>
                      <option value="seo-audit">Technical Search Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                      Target Investment Bracket
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    >
                      <option value="$5k – $10k">$5,000 – $10,000</option>
                      <option value="$10k – $25k">$10,000 – $25,000</option>
                      <option value="$25k – $50k">$25,000 – $50,000</option>
                      <option value="$50k+">$50,000+ (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                      Target Launch Window
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
                    >
                      <option value="1-2 Months">1–2 Months (Sprint)</option>
                      <option value="2-4 Months">2–4 Months (Platform)</option>
                      <option value="Ongoing Retainer">Ongoing Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#71716e] mb-1.5">
                    Project Scope &amp; Constraints
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current tech stack, pain points, or marketing objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e7e5e1] rounded-xs text-xs text-[#141413] placeholder-[#a8a29e] focus:outline-none focus:border-[#141413] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#141413] text-[#fafaf8] text-xs font-medium rounded-sm hover:bg-[#2c2b29] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Project Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
