'use client';

import React from 'react';
import { TIMELINE } from '@/lib/data';
import { Compass, Shield, Film, Crown, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TimelineSection() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Shield': return Shield;
      case 'Film': return Film;
      case 'Crown': return Crown;
      case 'Trophy': return Trophy;
      default: return Trophy;
    }
  };

  return (
    <section className="bg-obsidian-950 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('timeline.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('timeline.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t('intro.p1')}
          </p>
        </div>

        {/* Timeline Vertical Stack */}
        <div className="relative border-l-2 border-gold-500/30 ml-4 sm:ml-32 space-y-12">
          {TIMELINE.map((item, index) => {
            const Icon = getIcon(item.iconName);
            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                
                {/* Year Marker Badge for Desktop */}
                <div className="hidden sm:flex absolute -left-32 top-0.5 w-24 justify-end text-right">
                  <span className="font-serif text-2xl font-bold text-gold-400">{item.year}</span>
                </div>

                {/* Timeline Icon Node */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-obsidian-900 border-2 border-gold-400 flex items-center justify-center text-gold-400 group-hover:scale-125 transition-transform shadow-lg gold-glow">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Mobile Year Badge */}
                <div className="sm:hidden text-xs font-bold text-gold-400 uppercase tracking-widest mb-1">
                  {item.year}
                </div>

                {/* Card Content */}
                <div className="bg-obsidian-850 border border-slate-800 p-6 rounded-2xl hover:border-gold-500/40 transition-all duration-300 shadow-xl space-y-2 max-w-3xl">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
