/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageType, ServiceItem, BlogPost } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleModal } from './components/ArticleModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [signUpService, setSignUpService] = useState<string>('Marketing Strategy');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleOpenSignUp = (serviceName?: string) => {
    if (serviceName) setSignUpService(serviceName);
    setIsSignUpOpen(true);
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#23272E] font-sans antialiased selection:bg-[#FF6633]/20 selection:text-[#FF5522]">
      {/* Pinned Top Navigation Bar adhering to Top Bar contract */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSignUp={() => handleOpenSignUp()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenSignUp={handleOpenSignUp}
            onSelectService={(srv) => setSelectedService(srv)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenSignUp={() => handleOpenSignUp()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenSignUp={handleOpenSignUp}
            onSelectService={(srv) => setSelectedService(srv)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer matching reference design */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Lead Capture / Sign Up Onboarding Modal */}
      <LeadCaptureModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        defaultService={signUpService}
      />

      {/* Service Detail Modal ("Read more" on cards) */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={(name) => handleOpenSignUp(name)}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={() => handleOpenSignUp()}
      />
    </div>
  );
}
