import React, { useState, useEffect } from 'react';
import { LiquidMetalButton } from './LiquidMetalButton';
import { PageType } from '../types';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenSignUp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSignUp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Contact us', page: 'contact' },
    { label: 'Blog', page: 'blog' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-left cursor-pointer focus:outline-none"
        >
          {/* Brand Icon Badge */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF5522] to-[#FF8C42] flex items-center justify-center text-white shadow-[0_2px_10px_rgba(255,102,51,0.35)] transition-transform duration-300 group-hover:scale-105">
            <svg
              className="w-4 h-4 fill-white transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm0-6.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z" />
              <path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 2.21.96 4.2 2.49 5.58.2.18.5.17.68-.03.18-.2.17-.5-.03-.68C6.31 15.65 5.5 13.92 5.5 12c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 1.92-.81 3.65-2.14 4.87-.2.18-.21.48-.03.68.18.2.48.21.68.03 1.53-1.38 2.49-3.37 2.49-5.58 0-4.14-3.36-7.5-7.5-7.5z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#23272E] group-hover:text-[#FF6633] transition-colors">
            BrandBuzz
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#FF6633] font-semibold'
                    : 'text-slate-600 hover:text-[#23272E]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6633] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4">
          <LiquidMetalButton
            variant="primary"
            size="sm"
            onClick={onOpenSignUp}
            className="!px-6 !py-2"
          >
            Sign Up
          </LiquidMetalButton>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LiquidMetalButton
            variant="primary"
            size="sm"
            onClick={onOpenSignUp}
            className="!px-4 !py-1.5 !text-xs"
          >
            Sign Up
          </LiquidMetalButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#FF6633] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'bg-[#FFF2EC] text-[#FF6633] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
