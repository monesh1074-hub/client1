'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_GALLERY, PortfolioItem } from '@/lib/data';
import { X, Maximize2, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [galleryImageIndex, setGalleryImageIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('portfolio.catAll') },
    { id: 'political', label: t('portfolio.catPolitical') },
    { id: 'weddings', label: t('portfolio.catWeddings') },
    { id: 'temple', label: t('portfolio.catTemple') },
    { id: 'government', label: t('portfolio.catGov') },
    { id: 'movies', label: t('portfolio.catMovies') },
    { id: 'corporate', label: t('portfolio.catCorp') },
  ];

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_GALLERY 
    : PORTFOLIO_GALLERY.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Active gallery photos for the selected item
  const currentGalleryPhotos = React.useMemo<string[]>(() => {
    if (!selectedItem) return [];
    return selectedItem.gallery && selectedItem.gallery.length > 0
      ? selectedItem.gallery
      : [selectedItem.image];
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem && currentGalleryPhotos.length > 0) {
      currentGalleryPhotos.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, [selectedItem, currentGalleryPhotos]);

  const handlePrevPhoto = () => {
    if (currentGalleryPhotos.length === 0) return;
    setGalleryImageIndex(prev => (prev === 0 ? currentGalleryPhotos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    if (currentGalleryPhotos.length === 0) return;
    setGalleryImageIndex(prev => (prev === currentGalleryPhotos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem || currentGalleryPhotos.length === 0) return;
      if (e.key === 'ArrowLeft') {
        setGalleryImageIndex(prev => (prev === 0 ? currentGalleryPhotos.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setGalleryImageIndex(prev => (prev === currentGalleryPhotos.length - 1 ? 0 : prev + 1));
      }
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentGalleryPhotos]);

  const handleOpenGallery = (item: PortfolioItem) => {
    setSelectedItem(item);
    setGalleryImageIndex(0);
  };

  return (
    <section id="portfolio" className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-slate-50 py-10 lg:py-28 border-b border-gold-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2 sm:space-y-3"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('portfolio.subtitle')}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
            {t('portfolio.title')}
          </h2>
          <p className="text-xs sm:text-base dark:text-slate-300 light:text-slate-700 line-clamp-2 sm:line-clamp-none">
            Explore 1,200+ completed stage productions, political mega rallies, Kollywood cinema set designs, and royal weddings across India.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-6 sm:mb-12 pb-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(12);
                }}
                className={`px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-gold-gradient text-obsidian-950 shadow-md gold-glow font-bold scale-105'
                    : 'bg-obsidian-850 dark:bg-obsidian-850 light:bg-white dark:text-slate-300 light:text-slate-700 hover:text-gold-400 border border-slate-700/50 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedItems.map((item, idx) => {
              const photoCount = item.gallery && item.gallery.length > 0 ? item.gallery.length : 1;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                  key={item.id}
                  onClick={() => handleOpenGallery(item)}
                  className="bg-obsidian-850 dark:bg-obsidian-850 light:bg-white rounded-2xl overflow-hidden border border-slate-700/50 dark:border-slate-800 light:border-slate-200 hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer group card-shine-container"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-obsidian-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={idx < 8}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 bg-obsidian-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gold-400 border border-gold-500/30">
                      {item.categoryLabel}
                    </div>

                    {/* Photo Album Count Pill */}
                    <div className="absolute bottom-3 left-3 bg-gold-500/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gold-300 border border-gold-500/40 flex items-center space-x-1">
                      <Layers className="w-3 h-3 mr-1 text-gold-400" />
                      <span>{photoCount} Photos</span>
                    </div>

                    {/* Expand Hover Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold-400 text-obsidian-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110 shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div className="p-4 space-y-1">
                    <h3 className="font-serif text-sm font-bold dark:text-white light:text-slate-900 group-hover:text-gold-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center text-[11px] dark:text-slate-400 light:text-slate-600">
                      <span className="line-clamp-1">{item.location}</span>
                      <span className="text-gold-400 font-semibold whitespace-nowrap ml-2">Browse ({photoCount}) &rarr;</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="inline-flex items-center px-8 py-3.5 rounded-xl text-sm font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-lg gold-glow uppercase tracking-wider"
            >
              Load More Projects ({filteredItems.length - visibleCount} remaining)
            </motion.button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} Photo Gallery`}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-obsidian-900 dark:bg-obsidian-900 light:bg-white border border-gold-500/40 rounded-3xl max-w-6xl w-full overflow-hidden shadow-2xl max-h-[96vh] flex flex-col"
          >
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-obsidian-950">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="text-xs text-slate-300 font-semibold">
                    Photo {galleryImageIndex + 1} of {currentGalleryPhotos.length}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">{selectedItem.title}</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2.5 rounded-full text-slate-400 hover:text-white bg-obsidian-850 border border-slate-800 hover:border-gold-400 transition-all focus-visible:ring-2 focus-visible:ring-gold-400 focus:outline-none"
                title="Close Lightbox (Esc)"
                aria-label="Close photo gallery (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 relative flex-1 flex flex-col justify-center bg-obsidian-950/60">
              <div className="relative w-full h-[360px] sm:h-[500px] rounded-2xl overflow-hidden border border-gold-500/20 bg-black flex items-center justify-center">
                <Image
                  src={currentGalleryPhotos[galleryImageIndex]}
                  alt={`${selectedItem.title} Photo ${galleryImageIndex + 1}`}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />

                {currentGalleryPhotos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      aria-label="Previous Photo"
                      className="absolute left-4 p-3 rounded-full bg-obsidian-900/80 text-white hover:text-gold-400 border border-gold-500/40 hover:scale-110 transition-all shadow-xl focus-visible:ring-2 focus-visible:ring-gold-400 focus:outline-none"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      aria-label="Next Photo"
                      className="absolute right-4 p-3 rounded-full bg-obsidian-900/80 text-white hover:text-gold-400 border border-gold-500/40 hover:scale-110 transition-all shadow-xl focus-visible:ring-2 focus-visible:ring-gold-400 focus:outline-none"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
