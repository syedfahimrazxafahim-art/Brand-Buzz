import React, { useState } from 'react';
import { servicesData, pricingPlans } from '../data/mockData';
import { LiquidMetalButton } from '../components/LiquidMetalButton';
import { ServiceItem } from '../types';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface ServicesPageProps {
  onOpenSignUp: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenSignUp,
  onSelectService,
}) => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const selectedService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2EC] text-[#FF6633] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Impact Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#23272E] tracking-tight leading-tight">
            Tailored Growth Engines for <span className="text-[#FF6633]">Every Stage</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From algorithmic search dominance to multi-million view viral campaigns, explore our full spectrum of marketing capabilities.
          </p>
        </div>

        {/* Interactive Service Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto mb-12">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === service.id
                  ? 'bg-white text-[#23272E] shadow-sm'
                  : 'text-slate-600 hover:text-[#23272E]'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="bg-[#FFF2EC] rounded-3xl p-8 sm:p-12 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white text-[#FF6633] text-xs font-bold shadow-xs">
              {selectedService.category}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272E]">
              {selectedService.title} Mastery
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {selectedService.tagline}. Our structured sprints eradicate guesswork, pairing high-frequency creative variations with rigorous conversion analytics.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Sprints Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                    <div className="w-4 h-4 rounded-full bg-[#EBF9F1] text-[#059669] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <LiquidMetalButton
                variant="primary"
                size="md"
                onClick={() => onOpenSignUp(selectedService.title)}
              >
                Inquire About {selectedService.title}
              </LiquidMetalButton>

              <LiquidMetalButton
                variant="white"
                size="md"
                onClick={() => onSelectService(selectedService)}
              >
                View Full Specs
              </LiquidMetalButton>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 w-full max-w-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF6633] mb-1">
                Typical Performance Benchmark
              </div>
              <div className="text-3xl font-extrabold text-[#23272E] mb-3">
                {selectedService.metrics}
              </div>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Measured across 80+ client engagements within the initial 90-day execution cycle.
              </p>

              <div className="border-t border-slate-100 pt-4 space-y-2">
                <p className="text-xs font-semibold text-slate-700">Client Deliverables:</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#FFF2EC] text-[#FF6633] text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PRICING PLANS SECTION                                     */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#23272E]">
              Simple, Transparent <span className="text-[#FF6633]">Investment</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Predictable retainer packages tailored to growth milestones. No hidden fees.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="inline-flex items-center gap-3 p-1.5 bg-slate-100 rounded-full mt-6">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-[#23272E] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-white text-[#23272E] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Annual Sprint</span>
                <span className="bg-[#EBF9F1] text-[#059669] text-[10px] px-1.5 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const price =
                billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                    plan.isPopular
                      ? 'bg-white border-2 border-[#FF6633] shadow-[0_20px_40px_-10px_rgba(255,102,51,0.18)] scale-105 z-10'
                      : 'bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6633] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Most Popular Partner
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-[#23272E]">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-extrabold text-[#23272E]">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-[#FF6633] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <LiquidMetalButton
                    variant={plan.isPopular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full"
                    onClick={() => onOpenSignUp(plan.name)}
                  >
                    {plan.ctaText}
                  </LiquidMetalButton>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100">
          <h3 className="text-xl font-bold text-[#23272E] mb-6 text-center">
            Detailed Capability Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 font-bold text-slate-600">Feature Deliverable</th>
                  <th className="py-3 px-4 font-bold text-slate-600 text-center">Starter</th>
                  <th className="py-3 px-4 font-bold text-[#FF6633] text-center">Growth Engine</th>
                  <th className="py-3 px-4 font-bold text-slate-600 text-center">Dominance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Ad Spend Allocation Sprints', s: 'Up to $15k/mo', g: 'Up to $60k/mo', e: 'Unlimited' },
                  { name: 'Weekly Strategy Standups', s: 'Bi-weekly', g: 'Weekly', e: 'Twice Weekly' },
                  { name: 'Dedicated Creative Design Pod', s: 'Standard', g: 'Advanced Video', e: 'Dedicated Pod' },
                  { name: 'Custom Attribution Engineering', s: '—', g: '✓ Included', e: '✓ Custom Warehouse' },
                  { name: 'SLA Support Response Time', s: '24 hours', g: '4 hours', e: '1 hour Priority' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800">{row.name}</td>
                    <td className="py-3 px-4 text-center text-slate-500">{row.s}</td>
                    <td className="py-3 px-4 text-center font-bold text-[#FF6633]">{row.g}</td>
                    <td className="py-3 px-4 text-center text-slate-700 font-medium">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
