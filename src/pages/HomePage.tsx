import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { LiquidMetalButton } from '../components/LiquidMetalButton';
import { FloatingParticles } from '../components/FloatingParticles';
import { servicesData, testimonialsData } from '../data/mockData';
import { PageType, ServiceItem } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenSignUp: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenSignUp,
  onSelectService,
}) => {
  // Testimonial carousel state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-6 pb-20 sm:pt-10 sm:pb-28 overflow-hidden">
        <FloatingParticles variant="hero" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#23272E] tracking-tight leading-[1.15]">
                We create <br />
                <span className="text-[#FF6633]">solutions</span> for <br />
                your business
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
                Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                <LiquidMetalButton
                  variant="primary"
                  size="md"
                  onClick={() => onOpenSignUp()}
                  className="!px-8 !py-3.5 !text-sm"
                >
                  Get Started
                </LiquidMetalButton>

                {/* Explore more secondary trigger */}
                <button
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF6633] transition-colors cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-full bg-[#FFF2EC] text-[#FF6633] flex items-center justify-center transition-transform group-hover:translate-y-0.5 shadow-xs">
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <span>Explore more</span>
                </button>
              </div>
            </div>

            {/* Right 3D Visual Asset: Creatives on Beanbags with Laptops */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-lg transition-transform duration-700 hover:scale-[1.02]">
                {/* Soft backdrop glow matching warm orange theme */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFF2EC] via-[#FFEADB] to-transparent rounded-3xl -z-10 blur-xl opacity-70" />

                <img
                  src="/src/assets/images/hero_creatives_beanbag_1790204880245.jpg"
                  alt="3D tech creatives lounging on beanbag chairs with laptops and glowing ideas"
                  className="w-full h-auto rounded-3xl object-contain drop-shadow-[0_20px_35px_rgba(255,102,51,0.14)]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SERVICES GRID SECTION                                  */}
      {/* ========================================================= */}
      <section id="services-section" className="py-20 sm:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272E] tracking-tight">
            We Provide <span className="text-[#FF6633]">The Best Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3 leading-relaxed">
            Let us unleash the full potential of your business with our data-driven strategies.
          </p>

          {/* 4 Colorful Service Cards matching image: Yellow, Green, Purple, Red */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14 text-left">
            {servicesData.map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-white rounded-3xl p-7 border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.badgeBg} ${service.iconColor}`}
                  >
                    {service.colorTheme === 'yellow' && (
                      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    )}
                    {service.colorTheme === 'green' && (
                      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                      </svg>
                    )}
                    {service.colorTheme === 'purple' && (
                      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.5s-4 4-4 9.5c0 3 1.5 5 4 7 2.5-2 4-4 4-7 0-5.5-4-9.5-4-9.5z" />
                      </svg>
                    )}
                    {service.colorTheme === 'red' && (
                      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#23272E] mb-3 group-hover:text-[#FF6633] transition-colors">
                    {service.title}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Read more link */}
                <div className="pt-6 mt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-[#FF6633] transition-colors">
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SIMPLE SOLUTIONS SECTION (Peach background #FFF2EC)    */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFF2EC] relative overflow-hidden">
        <FloatingParticles variant="peach" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 3D Asset: Professional on Orange Armchair with Tablet */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/src/assets/images/professional_armchair_tablet_1790204902191.jpg"
                  alt="3D creative professional on an orange armchair with tablet and speech bubble"
                  className="w-full h-auto rounded-3xl object-contain drop-shadow-[0_20px_35px_rgba(255,102,51,0.18)]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right: 4-Step Process & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272E] tracking-tight">
                  Simple <span className="text-[#FF6633]">Solutions!</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                  We understand that no two businesses are alike. That's why we take the time to understand your unique growth engine.
                </p>
              </div>

              {/* 4-Step List with Circular Orange Numbers */}
              <div className="space-y-4 pt-2">
                {[
                  {
                    num: '1',
                    title: 'Contact us',
                    desc: 'Contact us to boost your brand visibility',
                  },
                  {
                    num: '2',
                    title: 'Consult',
                    desc: 'Always available to answer your questions',
                  },
                  {
                    num: '3',
                    title: 'Place order',
                    desc: 'Buy our package today to proceed',
                  },
                  {
                    num: '4',
                    title: 'Payment',
                    desc: 'We receive payments in all types of banking',
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4 group">
                    {/* Orange Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#FF6633] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#23272E]">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Get Started & Read more */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <LiquidMetalButton
                  variant="primary"
                  size="md"
                  onClick={() => onOpenSignUp()}
                >
                  Get Started
                </LiquidMetalButton>

                <LiquidMetalButton
                  variant="white"
                  size="md"
                  onClick={() => onNavigate('about')}
                >
                  Read more
                </LiquidMetalButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR AGENCY SECTION                                     */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white relative">
        <FloatingParticles variant="subtle" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272E] tracking-tight">
                Our <span className="text-[#FF6633]">Agency</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI. Let's turn your data into actionable insights. Tailored Solutions for Your Business.
              </p>

              <div className="pt-2">
                <LiquidMetalButton
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('about')}
                >
                  Read more
                </LiquidMetalButton>
              </div>
            </div>

            {/* Right 3D Visual Asset: Marketer at Desk with 3D Charts */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-bl from-[#FFF2EC] to-transparent rounded-3xl -z-10 blur-xl opacity-60" />

                <img
                  src="/src/assets/images/agency_analytics_desk_1790204918365.jpg"
                  alt="3D digital marketing professional at desk with floating 3D charts and analytics dashboard"
                  className="w-full h-auto rounded-3xl object-contain drop-shadow-[0_20px_35px_rgba(255,102,51,0.15)]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TESTIMONIALS SECTION                                   */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272E] tracking-tight">
            What <span className="text-[#FF6633]">Clients Say!</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-3">
            See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
          </p>

          {/* Testimonials Carousel Cards */}
          <div className="relative mt-14 max-w-5xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#FF6633] hover:border-[#FF6633] shadow-md flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#FF6633] hover:border-[#FF6633] shadow-md flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonials Grid Cards matching reference image layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                testimonialsData[activeTestimonialIdx % testimonialsData.length],
                testimonialsData[(activeTestimonialIdx + 1) % testimonialsData.length],
                testimonialsData[(activeTestimonialIdx + 2) % testimonialsData.length],
              ].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] text-left flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                >
                  <div>
                    {/* User Profile */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FFF2EC]"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-[#23272E]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.quote}
                    </p>
                  </div>

                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-1 text-[#F59E0B] pt-2 border-t border-slate-50">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'w-6 bg-[#FF6633]'
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. CTA BANNER ("Ready to get started?")                   */}
      {/* ========================================================= */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#FF5522] via-[#FF6633] to-[#FF8C42] px-8 sm:px-14 py-10 sm:py-12 shadow-[0_20px_40px_-15px_rgba(255,102,51,0.4)] flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            {/* Subtle background decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-xl pointer-events-none" />

            <div className="text-center sm:text-left relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to get started?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-md">
                Let's discuss your marketing challenges and build a roadmap to predictable growth.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <LiquidMetalButton
                variant="white"
                size="md"
                onClick={() => onNavigate('contact')}
                className="!text-[#FF5522] !px-8 !py-3 font-bold"
              >
                Contact Us
              </LiquidMetalButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
