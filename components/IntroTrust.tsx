'use client';

import React from 'react';
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
    <section className="bg-obsidian-900 border-y border-gold-500/20 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline & Statement */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>{t('intro.badge')}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {t('intro.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t('intro.p1')} {t('intro.p2')}
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-obsidian-850 p-6 rounded-xl border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:shadow-xl group h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Location Banner */}
        <div className="mt-10 bg-obsidian-950 border border-gold-500/20 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t('contact.addressHeader')}</div>
              <div className="text-sm sm:text-base font-semibold text-white">
                {COMPANY_DETAILS.contact.formattedAddress}
              </div>
            </div>
          </div>

          <a
            href={COMPANY_DETAILS.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-200 bg-obsidian-800 hover:bg-obsidian-700 border border-slate-700 hover:border-gold-400 transition-all"
          >
            {t('contact.directions')}
          </a>
        </div>

      </div>
    </section>
  );
}
