import React, { useState } from 'react';
import { teamData } from '../data/mockData';
import { LiquidMetalButton } from '../components/LiquidMetalButton';
import { PageType } from '../types';
import { Sparkles, Trophy, Users, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenSignUp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenSignUp }) => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const stats = [
    { label: 'Campaigns Launched', value: '520+', icon: Zap },
    { label: 'Client Revenue Generated', value: '$140M+', icon: TrendingUp },
    { label: 'Client Retention Rate', value: '98.4%', icon: ShieldCheck },
    { label: 'Industry Design Awards', value: '42', icon: Trophy },
  ];

  const values = [
    {
      title: 'Data-Informed Conviction',
      desc: 'We never guess. Every creative experiment, ad variant, and keyword cluster is anchored in empirical tracking and conversion science.',
      color: 'bg-[#FFF8E7] text-[#D97706]',
    },
    {
      title: 'Creative Bravery',
      desc: 'In a landscape of uniform corporate monotony, we engineer campaigns that provoke attention, spark discourse, and demand engagement.',
      color: 'bg-[#EBF9F1] text-[#059669]',
    },
    {
      title: 'Radical Transparency',
      desc: 'No black-box markups or vague vanity metrics. Clients have live direct access to dashboards, cost-per-acquisition data, and ad managers.',
      color: 'bg-[#F3E8FF] text-[#7C3AED]',
    },
    {
      title: 'Relentless Execution',
      desc: 'Agility is our superpower. We deploy, test, and iterate with startup speed while maintaining Fortune 500 brand excellence.',
      color: 'bg-[#FFEBEB] text-[#DC2626]',
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2EC] text-[#FF6633] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Story &amp; DNA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#23272E] tracking-tight leading-tight">
            We Build Growth Engines for <span className="text-[#FF6633]">World-Class Brands</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Founded with a singular mission: bridge the gap between high-art creative design and uncompromising conversion math.
          </p>
        </div>

        {/* Story Section with 3D Visual Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-[#FFF2EC] rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#23272E]">
              From a Passionate Studio to a <span className="text-[#FF6633]">Global Force</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              BrandBuzz began as a tight-knit collective of performance engineers, creative directors, and data architects frustrated by slow, opaque legacy agencies.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Today, we manage millions in monthly media spend, steer viral cultural stunts, and construct high-converting digital properties for high-growth tech ventures and visionary retail leaders.
            </p>
            <div className="pt-2">
              <LiquidMetalButton
                variant="primary"
                size="md"
                onClick={onOpenSignUp}
              >
                Join Our Client Roster
              </LiquidMetalButton>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/src/assets/images/hero_creatives_beanbag_1790204880245.jpg"
              alt="BrandBuzz creative team collaboration"
              className="w-full max-w-md rounded-2xl drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] text-center transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2EC] text-[#FF6633] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#23272E] tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#23272E]">
              Our Guiding <span className="text-[#FF6633]">Principles</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              How we approach every client partner, campaign brief, and growth milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Principle 0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#23272E] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#23272E]">
              Meet The <span className="text-[#FF6633]">Growth Architects</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Passionate specialists who turn creative disruption into reliable bottom-line profit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setSelectedMember(member.id)}
                onMouseLeave={() => setSelectedMember(null)}
                className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04)] text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-3 border-[#FFF2EC] group-hover:border-[#FF6633] transition-colors">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#23272E] group-hover:text-[#FF6633] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FF6633] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap justify-center gap-1.5">
                  {member.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] rounded-md bg-slate-100 text-slate-600 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
