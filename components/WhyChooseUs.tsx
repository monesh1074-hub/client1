'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white py-10 lg:py-28 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('why.subtitle')}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
            {t('why.title')}
          </h2>
          <p className="text-xs sm:text-base dark:text-slate-300 light:text-slate-700 line-clamp-2 sm:line-clamp-none">
            {t('about.p1')}
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -7, scale: 1.03 }}
                className="bg-obsidian-850 dark:bg-obsidian-850 light:bg-slate-50 p-3.5 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-700/50 dark:border-slate-800 light:border-slate-200 hover:border-gold-500/50 transition-all duration-300 shadow-xl group h-full card-shine-container flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-2.5 sm:mb-6 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-all shadow-md">
                    <Icon className="w-4 h-4 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-serif text-xs sm:text-xl font-bold dark:text-white light:text-slate-900 mb-1.5 sm:mb-3 group-hover:text-gold-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm dark:text-slate-400 light:text-slate-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
