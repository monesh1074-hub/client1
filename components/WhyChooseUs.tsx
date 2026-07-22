'use client';

import React from 'react';
import { ShieldCheck, Zap, Layers, Sparkles, Clock, Crown } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Layers,
      title: "Turnkey Stage Execution",
      description: "From structural steel trussing, wooden flooring, and acoustics to LED backdrops and floral styling—we handle every component under one roof."
    },
    {
      icon: Crown,
      title: "Mega-Scale Capacity",
      description: "Equipped to build 200ft wide stages engineered for 500,000+ public rally crowds, heavy equipment, and multi-dignitary seating."
    },
    {
      icon: Zap,
      title: "24/7 Rapid Deployment",
      description: "Our dedicated technical workforce of 150+ craftsmen works round-the-clock for overnight mega stage setups and tight deadline events."
    },
    {
      icon: Sparkles,
      title: "Custom Floral & 3D Props",
      description: "Specialized artisans crafting fresh exotic flower Mandapams and bespoke 3D film-themed set designs."
    },
    {
      icon: ShieldCheck,
      title: "VIP Security Compliance",
      description: "Strict adherence to VVIP protocol, bulletproof speaker podium enclosures, and certified fire-retardant structural materials."
    },
    {
      icon: Clock,
      title: "100% On-Time Record",
      description: "15 years, 1,200+ projects, and ZERO delayed handovers. When we promise a completion time, your stage is ready hours before curtain-raise."
    }
  ];

  return (
    <section className="bg-obsidian-950 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            The Kalai Decorators Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why High-Profile Organizers Trust <span className="text-gold-gradient">Kalai Decorators</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We don&apos;t just decorate stages; we engineer memorable experiences with unmatched structural precision and aesthetic luxury.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-obsidian-850 p-8 rounded-2xl border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
