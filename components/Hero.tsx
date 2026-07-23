'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, ChevronRight, Phone, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-obsidian-950 overflow-hidden pt-6 pb-16 lg:py-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-royal-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Crowned Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center space-x-2 bg-obsidian-850 border border-gold-500/30 px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase">
                  {t('hero.badge')}
                </span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-gold-500/10 border border-gold-500/40 px-3.5 py-1.5 rounded-full shadow-md text-gold-300 text-xs font-bold uppercase tracking-wider">
                <span>{t('hero.est')}</span>
              </div>
            </div>

            {/* Main Luxury Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.3] sm:leading-[1.2]">
              {t('hero.title1')} <br />
              <span className="text-gold-gradient italic">{t('hero.title2')}</span> {t('hero.title3')}
            </h1>

            {/* Movie Portfolio Pills */}
            <div className="bg-obsidian-900/90 border border-gold-500/20 rounded-xl p-3 max-w-2xl mx-auto lg:mx-0">
              <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest mb-2 flex items-center">
                <span className="w-2 h-2 rounded-full bg-gold-400 mr-2 animate-ping"></span>
                {t('hero.cinemaPartner')}
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {['Vikram', 'Master', 'Leo', 'Kaithi', '& More Kollywood Hits'].map((movie, idx) => (
                  <span key={idx} className="bg-obsidian-800 text-slate-200 px-3 py-1 rounded-lg border border-slate-700 hover:border-gold-400 transition-colors flex items-center">
                    🎬 {movie}
                  </span>
                ))}
              </div>
            </div>

            {/* Subheading / Value Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t('hero.desc')}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-xl gold-glow tracking-wider uppercase"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('hero.bookButton')}
              </a>

              <a
                href="#featured-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-obsidian-850 hover:bg-obsidian-800 border border-gold-500/30 hover:border-gold-400 transition-all shadow-lg"
              >
                {t('hero.exploreProjects')}
                <ChevronRight className="w-5 h-5 ml-1 text-gold-400" />
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.callFounderBtn')}
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-gold-400">1,200+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t('hero.eventsDelivered')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-gold-400">27+ Yrs</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t('hero.yearsLegacy')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-gold-400">500K+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t('hero.audienceCap')}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Stack with Real Project Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-gold-400/40 via-gold-500/20 to-royal-900/40 blur-xl opacity-75" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-obsidian-850 border border-gold-500/30 shadow-2xl group">
                <Image
                  src="/images/client/cm-stalin/stalin-set-01.jpeg"
                  alt="Kalai Decorators Mega Political Convention Stage for CM M.K. Stalin"
                  width={800}
                  height={600}
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                {/* Overlaid Image Details Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/20 text-gold-300 border border-gold-500/30">
                    {t('hero.featuredCaseStudy')}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {t('hero.stalinStageTitle')}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {t('hero.stalinStageDesc')}
                  </p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -left-6 bg-obsidian-900 border border-gold-500/40 rounded-xl p-4 shadow-2xl flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">{t('hero.safetyCertified')}</div>
                  <div className="text-[11px] text-slate-400">{t('hero.safetyDesc')}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
