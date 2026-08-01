'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Quote, Award, Video, Eye, X, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function FounderSection() {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const appreciationPhotos = [
    {
      src: '/images/client/founder-appreciation/appreciation-01.jpeg',
      caption: 'CM M.K. Stalin Stage Honor & Special Decoration Award'
    },
    {
      src: '/images/client/founder-appreciation/appreciation-02.jpeg',
      caption: 'Founder Perumal Commendation by M.K. Stalin for Master Stage Setup'
    },
    {
      src: '/images/client/founder-appreciation/appreciation-03.jpeg',
      caption: 'CM M.K. Stalin State Stage Honor Presentation'
    },
    {
      src: '/images/client/founder-appreciation/appreciation-04.jpeg',
      caption: 'CM M.K. Stalin Stage Honor & Memento Presentation'
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
                    src="/images/founder-perumal-vijay.jpeg"
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
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {t('nav.whatsapp')}
                </motion.a>
              </div>

            </div>

          </div>

          {/* CM M.K. Stalin Appreciation Video & Separate Photo Gallery Cards */}
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gold-500/20 space-y-8 sm:space-y-12">
            
            {/* DEDICATED SECTION 1: OFFICIAL VIDEO PLAYER */}
            <div className="space-y-4">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5" />
                  <span>State Dignitary Commendation Video</span>
                </div>
                <h3 className="font-serif text-xl sm:text-3xl font-bold dark:text-white light:text-slate-900">
                  Hon&apos;ble CM M.K. Stalin Appreciation &amp; Master Movie Set Video
                </h3>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/50 shadow-2xl bg-black group">
                  <div className="w-full aspect-video rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster="/images/master-set-vijay-perumal-thumbnail.jpg"
                      className="w-full h-full object-contain rounded-2xl"
                    >
                      <source src="https://res.cloudinary.com/de97edwlj/video/upload/f_auto,q_auto/v1785557578/kalai-decorators/founder-stalin-appreciation.mp4" type="video/mp4" />
                      <source src="/videos/founder-stalin-appreciation.mp4" type="video/mp4" />
                      Your browser does not support playing video.
                    </video>
                  </div>
                  <div className="p-3.5 bg-obsidian-950 border-t border-gold-400/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2">
                    <span className="font-semibold text-gold-400 flex items-center gap-1.5 truncate">
                      <Award className="w-4 h-4 shrink-0 text-gold-400" />
                      <span>CM M.K. Stalin Commendation &amp; Stage Setup Video</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Master &amp; Vikram Cinema Production
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* DEDICATED SECTION 2: SEPARATE PHOTO CARDS DOWN BELOW */}
            <div className="space-y-6 pt-6 sm:pt-8 border-t border-slate-800">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>State Dignitary Honor Gallery</span>
                </div>
                <h3 className="font-serif text-xl sm:text-3xl font-bold dark:text-white light:text-slate-900">
                  Founder Perumal — CM M.K. Stalin Honor Photographs
                </h3>
                <p className="text-xs sm:text-sm dark:text-slate-300 light:text-slate-600 line-clamp-2 sm:line-clamp-none">
                  Official stage honor and commendation presentation photographs with Chief Minister M.K. Stalin. Click any photo to view full resolution.
                </p>
              </div>

              {/* 4 Photo Cards Horizontal Snap Carousel on Mobile / Grid on Desktop */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                {appreciationPhotos.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onClick={() => setSelectedPhoto(idx)}
                    className="w-[75vw] sm:w-auto shrink-0 snap-center bg-obsidian-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-xl hover:border-gold-400 transition-all duration-300 group cursor-pointer flex flex-col"
                  >
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-obsidian-950">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-obsidian-950/80 backdrop-blur-md text-gold-400 border border-gold-400/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4 bg-obsidian-950 border-t border-slate-800 flex-1 flex flex-col justify-between space-y-2">
                      <p className="text-xs font-semibold text-slate-200 leading-relaxed">
                        {item.caption}
                      </p>
                      <div className="text-[10px] font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5 pt-1">
                        <Award className="w-3.5 h-3.5 text-gold-400" />
                        <span>View Full Photo</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Full Screen Lightbox Modal for Photos */}
          <AnimatePresence>
            {selectedPhoto !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label={appreciationPhotos[selectedPhoto].caption}
                onClick={() => setSelectedPhoto(null)}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full max-h-[90vh] bg-obsidian-900 border border-gold-400/40 rounded-2xl overflow-hidden p-3 shadow-2xl flex flex-col"
                >
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Close photo view"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-obsidian-950 text-slate-300 hover:text-white hover:bg-gold-400 hover:text-obsidian-950 transition-all border border-slate-700 focus-visible:ring-2 focus-visible:ring-gold-400 focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                    <Image
                      src={appreciationPhotos[selectedPhoto].src}
                      alt={appreciationPhotos[selectedPhoto].caption}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="p-3 text-center bg-obsidian-950 border-t border-slate-800">
                    <p className="text-sm font-bold text-gold-400 font-serif">
                      {appreciationPhotos[selectedPhoto].caption}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
