import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { LiquidMetalButton } from './LiquidMetalButton';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Marketing Strategy',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    budget: '$5k - $15k / month',
    primaryGoal: 'Scale Revenue & Inbound Leads',
    timeline: 'Within 2 weeks',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FF6633]/15 to-transparent rounded-bl-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6633] mb-2 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 1 of 2 · Tell Us Your Focus</span>
            </div>
            <h3 className="text-2xl font-bold text-[#23272E] mb-2">
              Transform Your Growth
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Select the core area where BrandBuzz can unleash the highest ROI for your business.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { name: 'Seo / Sem', tag: 'Search & Paid Intent' },
                { name: 'Growth Marketing', tag: 'Full Funnel Acquisition' },
                { name: 'Viral Campaign', tag: 'TikTok & Creator Hype' },
                { name: 'Bespoke Solutions', tag: 'Branding & Systems' },
              ].map((srv) => (
                <button
                  key={srv.name}
                  type="button"
                  onClick={() => setSelectedService(srv.name)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedService === srv.name
                      ? 'border-[#FF6633] bg-[#FFF2EC] shadow-sm ring-1 ring-[#FF6633]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <p className="text-sm font-bold text-[#23272E]">{srv.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{srv.tag}</p>
                </button>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <label className="text-xs font-semibold text-slate-700">Primary Objective</label>
              <select
                value={formData.primaryGoal}
                onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
              >
                <option>Scale Revenue & Inbound Leads</option>
                <option>Cut Customer Acquisition Cost (CAC)</option>
                <option>Launch a Viral Product Stunt</option>
                <option>Complete Brand Identity & Modern Web App</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <LiquidMetalButton
                variant="primary"
                size="md"
                onClick={() => setStep(2)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Continue
              </LiquidMetalButton>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6633] mb-2 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 2 of 2 · Company Details</span>
            </div>
            <h3 className="text-2xl font-bold text-[#23272E] mb-2">
              Where Should We Send Your Proposal?
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              We will conduct a preliminary audit and prepare a tailored strategy roadmap.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Website or URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://brand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6633]/20 focus:border-[#FF6633]"
                  >
                    <option>$2.5k - $5k / mo</option>
                    <option>$5k - $15k / mo</option>
                    <option>$15k - $30k / mo</option>
                    <option>$30k+ / mo (Enterprise)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                ← Back
              </button>
              <div className="flex items-center gap-3">
                <LiquidMetalButton
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Generating Proposal...' : 'Get Free Proposal'}
                </LiquidMetalButton>
              </div>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#EBF9F1] text-[#059669] flex items-center justify-center mx-auto mb-4 animate-in zoom-in-75 duration-300">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#23272E] mb-2">
              You're On The Priority List!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
              Thanks <span className="font-semibold text-[#23272E]">{formData.fullName || 'there'}</span>. Our senior growth strategist is reviewing your submission and will dispatch your custom {selectedService} action plan to <span className="font-semibold text-[#23272E]">{formData.email || 'your email'}</span> within 24 hours.
            </p>

            <div className="bg-[#FFF2EC] rounded-2xl p-4 mb-6 flex items-center gap-3 text-left">
              <ShieldCheck className="w-6 h-6 text-[#FF6633] shrink-0" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-[#23272E]">Guaranteed Confidentiality:</span> Your metrics and growth plans are held under strict NDA standards.
              </div>
            </div>

            <LiquidMetalButton
              variant="primary"
              size="md"
              onClick={() => {
                setStep(1);
                onClose();
              }}
            >
              Done & Return to Site
            </LiquidMetalButton>
          </div>
        )}
      </div>
    </div>
  );
};
