'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Quote, Award, Video, Play, Eye } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function FounderSection() {
  const { t } = useLanguage();
  const [activeMedia, setActiveMedia] = useState<'video' | number>('video');

  const appreciationPhotos = [
    {
      src: '/images/client/founder-appreciation/appreciation-01.jpeg',
      caption: 'CM M.K. Stalin Stage Honor'
    },
    {
      src: '/images/client/founder-appreciation/appreciation-02.jpeg',
      caption: 'Founder Perumal Commendation by M.K. Stalin for Decoration'
    },
    {
      src: '/images/client/founder-appreciation/appreciation-03.jpeg',
      caption: 'CM M.K. Stalin Stage Honor'
    },
    {
      src: '/images/client/founder-appreciation/appreciation-04.jpeg',
      caption: 'CM M.K. Stalin Stage Honor'
    }
  ];

  return (
    <section id="founder" className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-20 lg:py-28 relative overflow-hidden transition-colors duration-300">

      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white border border-gold-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative"
        >

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image & Profile Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative text-center"
            >
              <div className="relative mx-auto max-w-sm">

                <div className="relative rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-obsidian-850 dark:bg-obsidian-850 light:bg-slate-100 shadow-2xl group animate-float-slow">
                  {/* Founder Profile Visual */}
                  <Image
                    src="/images/founder-perumal-vijay.jpg"
                    alt="Founder Perumal with Thalapathy Vijay during Master Movie Stage Setup"
                    width={600}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-[450px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-85" />

                  <div className="absolute bottom-4 inset-x-4 p-4 bg-obsidian-900/90 dark:bg-obsidian-900/90 light:bg-slate-900/90 backdrop-blur-md rounded-xl border border-gold-500/30">
                    <div className="text-lg font-bold font-serif text-white">{t('founder.name')}</div>
                    <div className="text-xs text-gold-400 font-medium">{t('founder.role')}</div>
                    <div className="text-[11px] text-slate-300 italic pt-1">{t('founder.vijayPhotoSubtitle')}</div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Biography & Message Column */}
            <div className="lg:col-span-7 space-y-6 text-left">

              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>{t('founder.role')}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
                  {t('founder.name')} — <span className="text-gold-gradient">{t('founder.exp')}</span>
                </h2>
                <p className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
                  {t('about.subtitle')}
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="relative pl-6 border-l-2 border-gold-400 space-y-3"
              >
                <Quote className="w-8 h-8 text-gold-400/40 absolute -top-2 -left-4 bg-obsidian-950 dark:bg-obsidian-950 light:bg-white px-1" />
                <p className="text-base sm:text-lg dark:text-slate-200 light:text-slate-800 italic font-serif leading-relaxed">
                  {t('founder.bio1')}
                </p>
                <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">— {t('founder.name')}, {t('founder.role')}</div>
              </motion.div>

              <p className="text-sm dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {t('about.p2')}
              </p>

              {/* Key Highlights Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border border-gold-500/30 p-3.5 rounded-xl"
                >
                  <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">{t('hero.yearsLegacy')}</div>
                  <div className="text-base font-bold dark:text-white light:text-slate-900 font-serif">1999 ({t('about.subtitle')})</div>
                  <div className="text-xs dark:text-slate-400 light:text-slate-600">{t('nav.chennaiOffice')}</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border border-gold-500/30 p-3.5 rounded-xl"
                >
                  <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">{t('hero.cinemaPartner')}</div>
                  <div className="text-sm font-bold dark:text-slate-200 light:text-slate-800 pt-0.5">Vikram • Master • Leo • Kaithi</div>
                  <div className="text-xs dark:text-slate-400 light:text-slate-600">{t('hero.cinemaPartner')}</div>
                </motion.div>
              </div>

              {/* Direct Founder Contact Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-lg gold-glow uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('hero.callFounderBtn')}: {COMPANY_DETAILS.contact.primaryPhone}
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={COMPANY_DETAILS.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-100 light:text-emerald-800 border border-emerald-500/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {t('nav.whatsapp')}
                </motion.a>
              </div>

            </div>

          </div>

          {/* CM M.K. Stalin Appreciation Video & Cinema Set Showcase */}
          <div className="mt-12 pt-12 border-t border-gold-500/20">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>State Dignitary Commendation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold dark:text-white light:text-slate-900">
                Hon'ble CM M.K. Stalin Appreciation &amp; Master Movie Set Video
              </h3>
              <p className="text-xs sm:text-sm dark:text-slate-300 light:text-slate-600">
                Click any photo on the right to display it on the big screen below, or play the official appreciation video.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* BIG SCREEN MEDIA VIEWER (Left Column) */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-2xl bg-obsidian-950 group">
                  {activeMedia === 'video' ? (
                    <video
                      controls
                      autoPlay={false}
                      preload="metadata"
                      poster="/images/master-set-vijay-perumal-thumbnail.jpg"
                      src="/videos/founder-stalin-appreciation.mp4"
                      className="w-full h-[360px] sm:h-[420px] rounded-2xl object-cover"
                    >
                      Your browser does not support playing video.
                    </video>
                  ) : (
                    <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-obsidian-950 flex items-center justify-center">
                      <Image
                        src={appreciationPhotos[activeMedia].src}
                        alt={appreciationPhotos[activeMedia].caption}
                        fill
                        priority
                        className="object-contain p-2"
                      />
                    </div>
                  )}

                  {/* Caption & Controls Bar */}
                  <div className="p-3 bg-obsidian-950 border-t border-gold-400/20 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-gold-400 flex items-center gap-1.5 truncate max-w-[65%]">
                      {activeMedia === 'video' ? (
                        <>
                          <Award className="w-4 h-4 shrink-0 text-gold-400" />
                          <span className="truncate">CM M.K. Stalin Commendation Video</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 shrink-0 text-gold-400" />
                          <span className="truncate">{appreciationPhotos[activeMedia].caption}</span>
                        </>
                      )}
                    </span>

                    {activeMedia !== 'video' ? (
                      <button
                        onClick={() => setActiveMedia('video')}
                        className="px-3 py-1.5 rounded-lg bg-gold-400 text-obsidian-950 text-[11px] font-bold flex items-center gap-1 hover:bg-gold-300 transition-all shadow-md shrink-0"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Video</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-400 hidden sm:inline">
                        Master &amp; Vikram Set Mastery
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 4 Appreciation Photo Thumbnails + Video Switcher (Right Column) */}
              <div className="lg:col-span-5 space-y-3">
                {/* Video Switcher Button */}
                <button
                  onClick={() => setActiveMedia('video')}
                  className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
                    activeMedia === 'video'
                      ? 'bg-gold-400/20 border-gold-400 text-gold-400 font-bold shadow-lg ring-1 ring-gold-400/50'
                      : 'bg-obsidian-900 border-slate-800 text-slate-300 hover:border-gold-400/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-gold-400/20 text-gold-400">
                      <Video className="w-4 h-4" />
                    </div>
                    <div className="text-left text-xs">
                      <div className="font-bold text-slate-100">CM M.K. Stalin Commendation Video</div>
                      <div className="text-[11px] text-slate-400">Click to play video on big screen</div>
                    </div>
                  </div>
                  {activeMedia === 'video' && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-400/30 text-gold-300 uppercase font-bold">Active</span>
                  )}
                </button>

                {/* 4 Photo Thumbnails Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {appreciationPhotos.map((item, idx) => {
                    const isSelected = activeMedia === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveMedia(idx)}
                        className={`group relative rounded-xl overflow-hidden border text-left transition-all duration-300 ${
                          isSelected
                            ? 'border-2 border-gold-400 ring-2 ring-gold-400/40 shadow-xl scale-[1.02]'
                            : 'border-gold-400/30 bg-obsidian-900 opacity-80 hover:opacity-100 hover:border-gold-400/60'
                        }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.caption}
                          width={300}
                          height={200}
                          className="w-full h-28 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-85" />
                        
                        <div 
                          title={item.caption}
                          className={`absolute bottom-2 left-2 right-2 text-[10px] font-bold truncate px-2 py-1 rounded border ${
                            isSelected
                              ? 'bg-gold-400 text-obsidian-950 border-gold-300 shadow-md'
                              : 'bg-obsidian-950/90 text-gold-400 border-gold-400/20'
                          }`}
                        >
                          {item.caption}
                        </div>

                        {isSelected && (
                          <div className="absolute top-2 right-2 p-1 rounded-full bg-gold-400 text-obsidian-950 shadow-md">
                            <Eye className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
