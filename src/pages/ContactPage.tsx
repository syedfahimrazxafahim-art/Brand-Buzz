import React, { useState } from 'react';
import { LiquidMetalButton } from '../components/LiquidMetalButton';
import { Mail, Phone, MapPin, CheckCircle, Clock, Sparkles, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState(12000);
  const [selectedService, setSelectedService] = useState('Full-Funnel Marketing');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    'SEO / SEM',
    'Full-Funnel Marketing',
    'Viral Campaign',
    'Branding & Design',
    'Custom Analytics',
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2EC] text-[#FF6633] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#23272E] tracking-tight leading-tight">
            Let's Engineer Your Next <span className="text-[#FF6633]">Growth Surge</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Have a project in mind, need an urgent campaign audit, or want to explore our retainer options? Our leadership team replies within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#FFF2EC] rounded-3xl p-8 sm:p-10 border border-[#FF6633]/20 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#EBF9F1] text-[#059669] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#23272E] mb-2">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#23272E]">{formData.name}</span>. We've logged your request for <span className="font-semibold text-[#FF6633]">{selectedService}</span> with an estimated monthly budget of <span className="font-semibold text-[#23272E]">${budget.toLocaleString()}</span>. A growth director will contact you at <span className="font-semibold text-[#23272E]">{formData.email}</span> shortly.
                </p>
                <LiquidMetalButton
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                >
                  Send Another Inquiry
                </LiquidMetalButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#23272E] mb-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    Fill out the parameters below to expedite discovery.
                  </p>
                </div>

                {/* Service Selector Chips */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Service Focus
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selectedService === srv
                            ? 'bg-[#FF6633] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Target Monthly Investment
                    </label>
                    <span className="text-sm font-extrabold text-[#FF6633]">
                      ${budget.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="50000"
                    step="1000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6633]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>$3,000</span>
                    <span>$25,000</span>
                    <span>$50,000+</span>
                  </div>
                </div>

                {/* Inputs with floating-like styling */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Bell"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name or URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourbrand.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Goals &amp; Specific Challenges
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what bottlenecks you are facing, current CAC/ROAS targets, or the campaign vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                  />
                </div>

                <LiquidMetalButton
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Inquiry Now
                </LiquidMetalButton>
              </form>
            )}
          </div>

          {/* Contact Details & Headquarters Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#23272E]">
                Headquarters &amp; Direct Line
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF2EC] text-[#FF6633] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#23272E]">Studio Headquarters</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      580 Howard Street, Suite 400<br />
                      SoMa District, San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF2EC] text-[#FF6633] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#23272E]">Inquiries &amp; RFP</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      partnerships@brandbuzz.agency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF2EC] text-[#FF6633] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#23272E]">Client Desk Hotline</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      +1 (415) 890-BUZZ (2899)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF2EC] text-[#FF6633] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#23272E]">Operating Hours</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Mon – Fri: 8:00 AM – 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Styled Google Map View */}
            <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative h-64 shadow-sm group">
              {/* Simulated Map Background */}
              <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center">
                <div className="w-full h-full opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Roads and geographic mock lines */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-30 pointer-events-none">
                  <div className="w-full h-3 bg-white transform -rotate-12" />
                  <div className="w-full h-2 bg-yellow-200 transform rotate-6" />
                  <div className="w-full h-4 bg-white" />
                </div>

                {/* Map Pin marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#FF6633] text-white flex items-center justify-center shadow-xl animate-bounce">
                      <MapPin className="w-5 h-5 fill-white" />
                    </div>
                    <div className="w-4 h-2 bg-black/20 rounded-full blur-xs mx-auto mt-1" />
                  </div>
                  <div className="mt-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md border border-slate-200 text-[11px] font-bold text-[#23272E]">
                    BrandBuzz HQ · San Francisco
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
