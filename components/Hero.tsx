'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronRight, Phone, Calendar, Sparkles, ChevronLeft, Pause, Play, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

const HERO_SLIDES = [
  {
    id: 'slide-1',
    src: '/images/client/cm-stalin/stalin-set-01.jpeg',
    alt: 'State Mega Political Convention Stage',
    titleKey: 'hero.stalinStageTitle',
    descKey: 'hero.stalinStageDesc',
    badge: 'Political Rally Stage',
    tag: '500,000+ Audience'
  },
  {
    id: 'slide-2',
    src: '/images/client/important/important-01.jpeg',
    alt: 'CM M.K. Stalin Heritage Art Gallery & Convention',
    titleKey: 'CM M.K. Stalin State Heritage Exhibition',
    descKey: 'Custom wooden paneling, lit framed art galleries & dignitary exhibition staging.',
    badge: 'State Heritage Pavilion',
    tag: 'Dignitary Summit'
  },
  {
    id: 'slide-3',
    src: '/images/founder-perumal-vijay.jpeg',
    alt: 'Founder Perumal with Thalapathy Vijay during Master Movie Stage Setup',
    titleKey: 'Blockbuster Cinema Set & Audio Launch Arena',
    descKey: 'Custom 3D film-themed set designs, motorized reveals, and star-studded red carpet fan arenas.',
    badge: 'Kollywood Cinema Set',
    tag: 'Vikram, Master, Leo, Kaithi',
    objectPosition: 'object-top'
  },
  {
    id: 'slide-4',
    src: '/images/client/marriage/wedding-set-01.jpeg',
    alt: 'Grand Royal Wedding Floral Mandapam',
    titleKey: 'Exquisite Royal Wedding Mandapam',
    descKey: 'Custom carved temple theme mandapams with imported exotic floral decor and ambient crystal lighting.',
    badge: 'Royal Wedding',
    tag: 'Luxury Decor'
  },
  {
    id: 'slide-5',
    src: '/images/client/temple/temple-set-01.jpeg',
    alt: 'Temple Brahmotsavam Gopuram Staging',
    titleKey: 'Temple Festival & Devotional Gala Staging',
    descKey: 'Traditional South Indian Gopuram motifs, illuminated street arches, and acoustic stages.',
    badge: 'Temple Utsavam',
    tag: 'Cultural Heritage'
  }
];


export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  // Preload background images into browser cache
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);


  // Auto scroll timer (5 seconds interval)
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoScrolling, nextSlide]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center bg-obsidian-950 dark:bg-obsidian-950 light:bg-slate-900 transition-colors duration-300 overflow-hidden pt-8 pb-20 lg:py-24">
      
      {/* Dynamic Auto-Scrolling Background Image Loader Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlideData.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlideData.src}
              alt={activeSlideData.alt}
              fill
              priority
              quality={90}
              sizes="100vw"
              className={`object-cover ${activeSlideData.objectPosition || 'object-center'} filter brightness-90 animate-kenburns`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/80 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-obsidian-950/70 to-obsidian-950 z-[1]" />
      </div>

      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none z-[2]" />

      {/* Auto Scroll Progress Bar Indicator */}
      <div className="absolute top-0 inset-x-0 h-1 bg-obsidian-800 z-30">
        {isAutoScrolling && (
          <motion.div
            key={currentSlide}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-gold-gradient shadow-md"
          />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            
            {/* Crowned Badge & Slide Indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 bg-obsidian-900/90 backdrop-blur-md border border-gold-500/40 px-4 py-2 rounded-full shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-100 uppercase">
                  {t('hero.badge')}
                </span>
              </motion.div>

              <div className="inline-flex items-center space-x-2 bg-gold-500/15 backdrop-blur-md border border-gold-500/50 px-3.5 py-1.5 rounded-full shadow-md text-gold-300 font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <span>{activeSlideData.badge}</span>
              </div>
            </div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.25]"
            >
              {t('hero.title1')} <br />
              <span className="text-gold-gradient italic">{t('hero.title2')}</span> {t('hero.title3')}
            </motion.h1>

            {/* Movie Portfolio Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-obsidian-900/90 backdrop-blur-xl border border-gold-500/30 rounded-xl p-3.5 max-w-2xl mx-auto lg:mx-0 shadow-2xl"
            >
              <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gold-400 mr-2 animate-ping" />
                  {t('hero.cinemaPartner')}
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Live Background Slide {currentSlide + 1}/{HERO_SLIDES.length}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {['Vikram', 'Master', 'Leo', 'Kaithi', '& More Blockbusters'].map((movie, idx) => (
                  <motion.span 
                    key={idx}
                    whileHover={{ scale: 1.08, translateY: -2 }}
                    className="bg-obsidian-800/90 text-slate-200 px-3 py-1 rounded-lg border border-slate-700 hover:border-gold-400 transition-all flex items-center cursor-pointer shadow"
                  >
                    🎬 {movie}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Subheading / Copy */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-shadow-sm">
              {t('hero.desc')}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-xl gold-glow tracking-wider uppercase"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('hero.bookButton')}
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#featured-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-obsidian-900/90 backdrop-blur-md border border-gold-500/40 hover:border-gold-400 transition-all shadow-lg"
              >
                {t('hero.exploreProjects')}
                <ChevronRight className="w-5 h-5 ml-1 text-gold-400" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold text-emerald-400 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.callFounderBtn')}
              </motion.a>
            </div>

            {/* Background Image Loader Controls & Thumbnails Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-obsidian-900/80 border border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-all"
                  title="Previous Background Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className="p-2 rounded-lg bg-obsidian-900/80 border border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-all flex items-center space-x-1 text-xs"
                  title={isAutoScrolling ? 'Pause Auto Scroll' : 'Play Auto Scroll'}
                >
                  {isAutoScrolling ? <Pause className="w-4 h-4 text-gold-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
                  <span className="hidden sm:inline text-[11px] font-mono">{isAutoScrolling ? 'Auto-Scrolling' : 'Paused'}</span>
                </button>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-obsidian-900/80 border border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-all"
                  title="Next Background Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'w-8 bg-gold-400 shadow-md gold-glow'
                        : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
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

          </motion.div>

          {/* Right Column: Interactive Visual Card Sync'd with Background Image Loader */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-gold-400/50 via-gold-500/30 to-royal-900/50 blur-xl opacity-80 animate-pulse-glow" />

              {/* Sync'd Active Image Loader Card */}
              <div className="relative rounded-2xl overflow-hidden bg-obsidian-900 border border-gold-500/40 shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlideData.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[380px] sm:h-[460px] w-full"
                  >
                    <Image
                      src={activeSlideData.src}
                      alt={activeSlideData.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      className={`object-cover ${activeSlideData.objectPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />

                    {/* Image Loader Status Badge */}
                    <div className="absolute top-4 right-4 bg-obsidian-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/40 flex items-center space-x-1.5 text-xs text-gold-300 font-mono">
                      <Layers className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
                      <span>{activeSlideData.tag}</span>
                    </div>

                    {/* Overlaid Image Details Card */}
                    <div className="absolute bottom-0 inset-x-0 p-6 space-y-2 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-transparent">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/20 text-gold-300 border border-gold-500/30">
                        {activeSlideData.badge}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-white line-clamp-1">
                        {activeSlideData.titleKey.startsWith('hero.') ? t(activeSlideData.titleKey) : activeSlideData.titleKey}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {activeSlideData.descKey.startsWith('hero.') ? t(activeSlideData.descKey) : activeSlideData.descKey}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Verified Badge */}
              <motion.div 
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-6 -left-6 bg-obsidian-900/95 backdrop-blur-xl border border-gold-500/40 rounded-xl p-4 shadow-2xl flex items-center space-x-3 hidden sm:flex z-20"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">{t('hero.safetyCertified')}</div>
                  <div className="text-[11px] text-slate-400">{t('hero.safetyDesc')}</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

