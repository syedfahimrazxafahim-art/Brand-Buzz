import React from 'react';
import { X, Check, ArrowRight, TrendingUp, Layers, Award } from 'lucide-react';
import { ServiceItem } from '../types';
import { LiquidMetalButton } from './LiquidMetalButton';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBooking,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.badgeBg} ${service.iconColor} border ${service.borderColor} shadow-sm`}
          >
            {service.colorTheme === 'yellow' && (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            )}
            {service.colorTheme === 'green' && (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
              </svg>
            )}
            {service.colorTheme === 'purple' && (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.5s-4 4-4 9.5c0 3 1.5 5 4 7 2.5-2 4-4 4-7 0-5.5-4-9.5-4-9.5z" />
              </svg>
            )}
            {service.colorTheme === 'red' && (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            )}
          </div>
          <div>
            <span className="text-xs font-semibold text-[#FF6633] uppercase tracking-wider">
              {service.category}
            </span>
            <h3 className="text-2xl font-bold text-[#23272E]">{service.title}</h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          {service.tagline}. Our proprietary methodology combines real-time data engineering, high-tempo creative experimentation, and high-intent attribution modeling to maximize return on capital.
        </p>

        {/* Proven Metric Card */}
        <div className="bg-[#FFF2EC] border border-[#FF6633]/20 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#FF6633] flex items-center justify-center shadow-sm">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Proven Agency Benchmark</p>
              <p className="text-base font-bold text-[#23272E]">{service.metrics}</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#FF6633] bg-white px-3 py-1 rounded-full shadow-xs">
            Verified
          </span>
        </div>

        {/* What's Included */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-600" />
            Core Capabilities Included
          </h4>
          <div className="space-y-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-[#EBF9F1] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-slate-600" />
            Tangible Deliverables
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800"
          >
            Close
          </button>
          <LiquidMetalButton
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              onOpenBooking(service.title);
            }}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book {service.title} Strategy
          </LiquidMetalButton>
        </div>
      </div>
    </div>
  );
};
