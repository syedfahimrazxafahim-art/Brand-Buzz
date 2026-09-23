import React from 'react';
import { X, Calendar, Clock, Share2, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { LiquidMetalButton } from './LiquidMetalButton';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenBooking,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Meta */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6633] mb-3">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-slate-500 font-normal">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#23272E] mb-4 leading-snug">
          {article.title}
        </h2>

        {/* Author Bio */}
        <div className="flex items-center gap-3 py-3 border-y border-slate-100 mb-6">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />
          <div>
            <div className="text-sm font-bold text-[#23272E]">{article.author.name}</div>
            <div className="text-xs text-slate-500">{article.author.role}</div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, text: article.excerpt, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="p-2 rounded-full text-slate-500 hover:text-[#FF6633] hover:bg-slate-50 transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Image */}
        <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4 mb-8">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-[#FFF2EC] border border-[#FF6633]/20 rounded-2xl p-5 mb-8">
          <h4 className="text-sm font-bold text-[#23272E] mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FF6633]" />
            Growth Takeaways for Your Brand
          </h4>
          <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
            <li>Modern audience attention requires authentic, native storytelling over corporate scripts.</li>
            <li>Tracking unit economics (MER, CAC to LTV) protects profitability during aggressive scaling.</li>
            <li>Continuous creative testing cycles beat one-off campaign gambles every time.</li>
          </ul>
        </div>

        {/* Call to action footer */}
        <div className="bg-slate-50 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#23272E]">Want results like this for your brand?</h4>
            <p className="text-xs text-slate-500">Book a private growth strategy review with our directors.</p>
          </div>
          <LiquidMetalButton
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
          >
            Claim Free Audit
          </LiquidMetalButton>
        </div>
      </div>
    </div>
  );
};
