'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flag, Clapperboard, Heart, Building2, Sparkles, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const { t } = useLanguage();

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flag': return Flag;
      case 'Clapperboard': return Clapperboard;
      case 'Heart': return Heart;
      case 'Building2': return Building2;
      case 'Sparkles': return Sparkles;
      case 'Briefcase': return Briefcase;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-20 lg:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('services.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 light:text-slate-700">
            {t('hero.desc')}
          </p>
        </motion.div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            const isActive = service.id === activeTab;
            return (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(service.id)}
                className={`inline-flex items-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gold-gradient text-obsidian-950 shadow-lg gold-glow font-bold scale-105'
                    : 'bg-obsidian-850 dark:bg-obsidian-850 light:bg-white dark:text-slate-300 light:text-slate-700 hover:text-gold-400 border border-slate-700/50 dark:border-slate-800 light:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-obsidian-950' : 'text-gold-400'}`} />
                {service.title}
              </motion.button>
            );
          })}
        </div>

        {/* Active Tab Featured Detail Card */}
        <motion.div 
          key={activeService.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl group">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  width={700}
                  height={500}
                  className="w-full h-[320px] sm:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-obsidian-900/90 dark:bg-obsidian-900/90 light:bg-slate-900/90 backdrop-blur-md rounded-xl border border-gold-500/20">
                  <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">{t('services.subtitle')}</div>
                  <div className="text-xs sm:text-sm font-bold text-white">{activeService.idealFor}</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold dark:text-white light:text-slate-900 mb-3">
                  {activeService.title}
                </h3>
                <p className="text-sm dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Feature Bullet Points */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">{t('services.title')}:</div>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm dark:text-slate-200 light:text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="#booking"
                  className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md gold-glow uppercase tracking-wider"
                >
                  {t('hero.bookButton')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
