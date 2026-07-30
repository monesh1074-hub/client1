'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, MapPin, ShieldAlert, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function IntroTrust() {
  const { t } = useLanguage();

  const trustPoints = [
    {
      icon: Award,
      title: t('intro.badge'),
      description: t('intro.p1')
    },
    {
      icon: Clock,
      title: t('timeline.title'),
      description: t('intro.p2')
    },
    {
      icon: ShieldAlert,
      title: t('hero.safetyCertified'),
      description: t('hero.safetyDesc')
    },
    {
      icon: CheckCircle2,
      title: t('hero.eventsDelivered'),
      description: t('why.f2Desc')
    }
  ];

  return (
    <section className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-12 lg:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline & Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>{t('intro.badge')}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white light:text-slate-900">
            {t('intro.title')}
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 light:text-slate-700">
            {t('intro.p1')} {t('intro.p2')}
          </p>
        </motion.div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-obsidian-850 dark:bg-obsidian-850 light:bg-white p-6 rounded-xl border border-slate-700/50 dark:border-slate-800 light:border-slate-200 hover:border-gold-500/50 transition-all duration-300 shadow-lg group h-full card-shine-container"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold dark:text-white light:text-slate-900 mb-2 group-hover:text-gold-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Location Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-obsidian-950 dark:bg-obsidian-950 light:bg-white border border-gold-500/30 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 animate-pulse">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold dark:text-slate-400 light:text-slate-600 uppercase tracking-wider">{t('contact.addressHeader')}</div>
              <div className="text-sm sm:text-base font-semibold dark:text-white light:text-slate-900">
                {COMPANY_DETAILS.contact.formattedAddress}
              </div>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={COMPANY_DETAILS.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md gold-glow uppercase tracking-wider"
          >
            {t('contact.directions')}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
