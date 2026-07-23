'use client';

import React from 'react';
import { ShieldCheck, Zap, Layers, Sparkles, Clock, Crown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const differentiators = [
    {
      icon: Layers,
      title: t('why.f1Title'),
      description: t('why.f1Desc')
    },
    {
      icon: Crown,
      title: t('hero.badge'),
      description: t('hero.desc')
    },
    {
      icon: Zap,
      title: t('why.f2Title'),
      description: t('why.f2Desc')
    },
    {
      icon: Sparkles,
      title: t('services.subtitle'),
      description: t('hero.cinemaPartner')
    },
    {
      icon: ShieldCheck,
      title: t('why.f3Title'),
      description: t('why.f3Desc')
    },
    {
      icon: Clock,
      title: t('why.f4Title'),
      description: t('why.f4Desc')
    }
  ];

  return (
    <section className="bg-obsidian-950 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('why.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('why.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t('about.p1')}
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
