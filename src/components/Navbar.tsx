import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Interactive Lab', href: '#studio-sandbox' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Benchmarks', href: '#benchmarks' },
    { label: 'Search Architecture', href: '#seo-proof' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Journal', href: '#blog' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#fafaf8]/95 backdrop-blur-md border-b border-[#e7e5e1] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Studio Brand Mark */}
          <a 
            href="#" 
            id="brand-logo"
            className="flex items-baseline gap-3 group focus:outline-none"
          >
            <span className="font-semibold text-base sm:text-lg tracking-tight text-[#141413]">
              RECODEY
            </span>
            <span className="text-xs font-mono text-[#71716e] uppercase tracking-wider hidden sm:inline">
              / Studio
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-sm bg-[#f0eee9] border border-[#e4e1db] text-[11px] font-mono text-[#575653]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>{AGENCY_INFO.availability}</span>
            </span>
          </a>

          {/* Desktop Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#575653]">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-150 relative py-1 hover:text-[#141413] ${
                    isActive ? 'text-[#141413] font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#141413]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions & Direct Inquire */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`mailto:${AGENCY_INFO.email}`} 
              className="text-xs font-mono text-[#71716e] hover:text-[#141413] transition-colors hidden xl:inline"
            >
              {AGENCY_INFO.email}
            </a>
            <button
              id="navbar-inquire-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#141413] text-[#fafaf8] text-xs font-medium tracking-wide hover:bg-[#2c2b29] transition-colors cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-inquire-quick-btn"
              onClick={onOpenContact}
              className="px-3 py-1.5 rounded-sm bg-[#141413] text-[#fafaf8] text-xs font-medium"
            >
              Inquire
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141413] hover:bg-[#f0eee9] rounded-sm transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#e7e5e1] space-y-3 pb-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#575653] hover:text-[#141413] py-1.5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#e7e5e1] flex flex-col gap-2">
              <span className="text-xs font-mono text-[#71716e]">{AGENCY_INFO.email}</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-sm bg-[#141413] text-[#fafaf8] text-xs font-medium text-center"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
