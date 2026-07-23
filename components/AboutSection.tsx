'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const capabilities = [
    { title: t('about.f1'), desc: t('hero.safetyDesc') },
    { title: t('about.f2'), desc: t('hero.cinemaPartner') },
    { title: t('about.f3'), desc: t('why.f2Desc') },
    { title: t('about.f4'), desc: t('contact.serving') }
  ];

  return (
    <section id="about" className="bg-obsidian-950 py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Gallery Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Primary Image */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-obsidian-850">
                <Image
                  src="/images/client/important/important-02.jpeg"
                  alt="Kalai Decorators Grand Event Setup"
                  width={700}
                  height={500}
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-obsidian-900/90 backdrop-blur-md rounded-xl border border-gold-500/20">
                  <div className="text-xs font-semibold text-gold-400 uppercase tracking-widest">{t('hero.featuredCaseStudy')}</div>
                  <div className="text-sm font-bold text-white">{t('about.title')}</div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-10 -right-6 w-3/5 rounded-xl overflow-hidden border-2 border-gold-400 shadow-2xl hidden sm:block">
                <Image
                  src="/images/client/marriage/wedding-set-01.jpeg"
                  alt="Kalai Decorators Royal Wedding Floral Setup"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-gold-gradient p-0.5 rounded-xl shadow-xl">
                <div className="bg-obsidian-950 px-5 py-3 rounded-[10px] flex items-center space-x-3">
                  <div className="text-2xl font-bold font-serif text-gold-400">27+</div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider leading-tight">
                    {t('about.subtitle')}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
                {t('about.subtitle')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('about.title')}
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-obsidian-900 p-3.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{cap.title}</h4>
                    <p className="text-[11px] text-slate-400">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Quote Teaser */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">{t('founder.role')}</div>
                <div className="text-base font-bold font-serif text-gold-400">{t('founder.name')}</div>
              </div>

              <a
                href="#founder"
                className="text-xs font-semibold text-gold-300 hover:text-gold-400 underline underline-offset-4"
              >
                {t('nav.founder')} &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
