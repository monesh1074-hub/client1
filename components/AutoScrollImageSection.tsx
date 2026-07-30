'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, X, Eye, Layers } from 'lucide-react';

interface ShowcaseImage {

  id: string;
  src: string;
  title: string;
  category: string;
  location: string;
}

const SHOWCASE_IMAGES_ROW1: ShowcaseImage[] = [
  {
    id: 'sc-1',
    src: '/images/client/cm-stalin/stalin-set-01.jpeg',
    title: 'State Mega Political Convention & Rally Stage',
    category: 'Political Rally',
    location: 'Madurai, TN'
  },
  {
    id: 'sc-2',
    src: '/images/client/important/important-01.jpeg',
    title: 'CM M.K. Stalin Heritage Art & Cultural Pavilion',
    category: 'State Heritage',
    location: 'Chennai, TN'
  },
  {
    id: 'sc-3',
    src: '/images/client/gallery/real-event-01.jpeg',
    title: 'Vikram & Master Cinema Set Audio Launch Arena',
    category: 'Movie Set',
    location: 'Jawaharlal Nehru Stadium, Chennai'
  },
  {
    id: 'sc-4',
    src: '/images/client/marriage/wedding-set-01.jpeg',
    title: 'Royal Palace Theme Floral Wedding Mandapam',
    category: 'Royal Wedding',
    location: 'Coimbatore, TN'
  },
  {
    id: 'sc-5',
    src: '/images/client/temple/temple-set-01.jpeg',
    title: 'Traditional Temple Gopuram Brahmotsavam Decor',
    category: 'Temple Utsavam',
    location: 'Trichy, TN'
  },
  {
    id: 'sc-6',
    src: '/images/client/pongal/pongal-set-01.jpeg',
    title: 'Government State Cultural Festival Pavilion',
    category: 'Civic Ceremony',
    location: 'Vellore, TN'
  }
];

const SHOWCASE_IMAGES_ROW2: ShowcaseImage[] = [
  {
    id: 'sc-7',
    src: '/images/client/behind-scenes/behind-work-01.jpeg',
    title: 'Heavy Structural Steel Trussing Assembly',
    category: 'Stage Engineering',
    location: 'On-site Execution'
  },
  {
    id: 'sc-8',
    src: '/images/client/dmk-manadu/manadu-set-01.jpeg',
    title: '500,000 Audience Capacity Political Rally Ground',
    category: 'Political Mega Rally',
    location: 'Tirunelveli, TN'
  },
  {
    id: 'sc-9',
    src: '/images/client/gollu/gollu-set-01.jpeg',
    title: 'Sacred Traditional Navratri Mandapam Decor',
    category: 'Cultural Festival',
    location: 'Chennai, TN'
  },
  {
    id: 'sc-10',
    src: '/images/client/christmas/christmas-set-01.jpeg',
    title: 'Grand Cathedral & Festive Illumination Set',
    category: 'Festive Decor',
    location: 'Chennai, TN'
  },
  {
    id: 'sc-11',
    src: '/images/client/important/important-02.jpeg',
    title: 'VIP Bulletproof Speaker Podium & Arena',
    category: 'VIP Security Stage',
    location: 'Salem, TN'
  },
  {
    id: 'sc-12',
    src: '/images/client/marriage/wedding-set-02.jpeg',
    title: 'Jasmine & Exotic Orchid Pathway Floral Tunnel',
    category: 'Royal Wedding',
    location: 'Chennai, TN'
  }
];

export default function AutoScrollImageSection() {
  const [activeModalImage, setActiveModalImage] = useState<ShowcaseImage | null>(null);


  // Repeat items for continuous infinite auto-scroll marquee
  const row1Repeated = [...SHOWCASE_IMAGES_ROW1, ...SHOWCASE_IMAGES_ROW1, ...SHOWCASE_IMAGES_ROW1];
  const row2Repeated = [...SHOWCASE_IMAGES_ROW2, ...SHOWCASE_IMAGES_ROW2, ...SHOWCASE_IMAGES_ROW2];

  return (
    <section className="bg-obsidian-950 py-16 sm:py-24 border-y border-gold-500/30 overflow-hidden relative transition-colors duration-300">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-royal-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/40 px-4 py-1.5 rounded-full text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span>Live Production Archive</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Auto-Scrolling Stage & Production Image Loader
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Explore continuous live image feeds of high-capacity political stages, Kollywood blockbuster sets, and royal wedding mandapams. Hover to inspect, click for full-screen preview.
        </p>
      </div>

      {/* Row 1: Left Auto-Scroll Marquee */}
      <div className="relative w-full overflow-hidden py-3 group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6 group-hover:[animation-play-state:paused]">
          {row1Repeated.map((img, idx) => (
            <motion.div
              key={`${img.id}-${idx}`}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => setActiveModalImage(img)}
              className="relative w-72 sm:w-80 h-48 sm:h-52 rounded-2xl overflow-hidden bg-obsidian-900 border border-gold-500/30 hover:border-gold-400 shadow-xl cursor-pointer shrink-0 transition-all duration-300 card-shine-container"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 bg-obsidian-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gold-500/40 text-[10px] font-semibold text-gold-300 flex items-center space-x-1">
                <Layers className="w-3 h-3 text-gold-400" />
                <span>{img.category}</span>
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gold-400 text-obsidian-950 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity shadow-md">
                <Eye className="w-3.5 h-3.5" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5">
                <h3 className="font-serif text-sm font-bold text-white line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-[11px] text-slate-300 flex items-center">
                  📍 {img.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2: Right Auto-Scroll Marquee (Reverse Direction) */}
      <div className="relative w-full overflow-hidden py-3 mt-2 group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-obsidian-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-obsidian-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-reverse space-x-6 group-hover:[animation-play-state:paused]">
          {row2Repeated.map((img, idx) => (
            <motion.div
              key={`${img.id}-${idx}`}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => setActiveModalImage(img)}
              className="relative w-72 sm:w-80 h-48 sm:h-52 rounded-2xl overflow-hidden bg-obsidian-900 border border-gold-500/30 hover:border-gold-400 shadow-xl cursor-pointer shrink-0 transition-all duration-300 card-shine-container"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-90" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 bg-obsidian-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gold-500/40 text-[10px] font-semibold text-gold-300 flex items-center space-x-1">
                <Layers className="w-3 h-3 text-gold-400" />
                <span>{img.category}</span>
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gold-400 text-obsidian-950 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5">
                <h3 className="font-serif text-sm font-bold text-white line-clamp-1">
                  {img.title}
                </h3>
                <p className="text-[11px] text-slate-300 flex items-center">
                  📍 {img.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative bg-obsidian-900 border border-gold-500/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <div>
                <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">{activeModalImage.category}</span>
                <h3 className="font-serif text-xl font-bold text-white">{activeModalImage.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white bg-obsidian-850 border border-slate-700 hover:border-gold-400 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-gold-500/20">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.title}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>
            <div className="flex justify-between items-center text-xs text-slate-300 pt-1">
              <span>Location: {activeModalImage.location}</span>
              <span className="text-gold-400 font-semibold">Kalai Decorators • 27+ Years Legacy</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
