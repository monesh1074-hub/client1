'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();

  const statsList = [
    { value: '1,200+', label: t('hero.eventsDelivered'), description: t('why.f2Desc') },
    { value: '27+ Yrs', label: t('hero.yearsLegacy'), description: t('about.subtitle') },
    { value: '500K+', label: t('hero.audienceCap'), description: t('hero.stalinStageDesc') },
    { value: '100%', label: t('hero.safetyCertified'), description: t('hero.safetyDesc') },
  ];

  return (
    <section className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-8 lg:py-20 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-gold-500/10 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-obsidian-950/80 dark:bg-obsidian-950/80 light:bg-white border border-gold-500/30 p-4 sm:p-8 rounded-xl sm:rounded-2xl text-center space-y-1 sm:space-y-2 hover:border-gold-400 transition-all duration-300 shadow-xl gold-glow card-shine-container"
            >
              <div className="text-2xl sm:text-5xl font-extrabold font-serif text-gold-gradient tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold dark:text-white light:text-slate-900 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[10px] sm:text-xs dark:text-slate-400 light:text-slate-600 line-clamp-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
