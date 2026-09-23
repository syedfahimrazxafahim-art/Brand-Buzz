import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#FFF2EC] pt-16 pb-12 mt-16 overflow-hidden">
      {/* Decorative top subtle curve wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-8 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,90 900,90 1200,0 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#FF6633]/15">
          {/* Brand Info & Socials */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 cursor-pointer focus:outline-none text-left"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF5522] to-[#FF8C42] flex items-center justify-center text-white shadow-sm">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm0-6.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#23272E]">
                BrandBuzz
              </span>
            </button>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              We empower ambitious businesses with cutting-edge digital marketing, SEO, high-impact campaigns, and data-driven creative strategies.
            </p>

            {/* Social Icons matching the design */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="#dribbble"
                aria-label="Dribbble"
                className="w-8 h-8 rounded-full bg-[#EA4C89] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.73 10.05a9.88 9.88 0 01-4.78 4.29c-.21-.47-.45-.94-.71-1.42 2.76-1.14 4.89-2.52 5.49-2.87zm-7.07 4.7c.28.51.54 1.02.77 1.52-1.92.56-4.04.87-6.26.87-.56 0-1.11-.02-1.65-.07 1.63-2.02 4.2-3.48 7.14-2.32zm-2.05-6.04c1.23.47 2.39 1.14 3.45 1.99-.46 1.05-.98 2.06-1.58 3.01-2.91-.97-5.59.33-7.25 2.14a9.92 9.92 0 01-2.67-5.85c2.47-.56 5.42-.4 8.05-.29zm-4.75-2.04c2.56-.03 5.44.02 7.74 2.11-.92-.76-1.95-1.37-3.07-1.8-1.57-.61-3.15-.49-4.67-.31zm8.38-.86c1.88 1.48 3.23 3.61 3.65 6.04-.63.35-2.65 1.64-5.32 2.73.49-.89.92-1.84 1.3-2.83.18-.46.33-.92.47-1.39.02-.07.03-.13.05-.2a9.69 9.69 0 00-.15-4.35zM12 2.15c2.25 0 4.31.77 5.96 2.06-.06.18-.13.38-.21.58-.15.42-.31.84-.49 1.25-2.2-1.92-4.9-2.07-7.39-2.07-1.38 0-2.73.1-3.95.34C7.54 2.92 9.66 2.15 12 2.15z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#23272E]">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#FF6633] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Designs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#23272E]">
              Designs
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  Design contests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  1 to 1 Projects
                </button>
              </li>
              <li>
                <a href="#find-designer" className="hover:text-[#FF6633] transition-colors">
                  Find a designer
                </a>
              </li>
              <li>
                <a href="#inspiration" className="hover:text-[#FF6633] transition-colors">
                  Discover inspiration
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#23272E]">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#become-designer" className="hover:text-[#FF6633] transition-colors">
                  Become a designer
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <a href="#design-without-borders" className="hover:text-[#FF6633] transition-colors">
                  Design without borders
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#FF6633] transition-colors">
                  99awards
                </a>
              </li>
              <li>
                <a href="#affiliates" className="hover:text-[#FF6633] transition-colors">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching design with orange curved bottom accent */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>All Rights Reserved 2026</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#FF6633] transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-[#FF6633] transition-colors">
              Terms of Service
            </a>
            <span>·</span>
            <a href="#cookies" className="hover:text-[#FF6633] transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>

      {/* Curved orange bottom boundary footer bar as in image */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF5522] via-[#FF6633] to-[#FF8C42]" />
    </footer>
  );
};
