'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_GALLERY } from '@/lib/data';
import { X, Maximize2, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Active gallery photos for the selected item
  const currentGalleryPhotos = React.useMemo<string[]>(() => {
    if (!selectedItem) return [];
    return selectedItem.gallery && selectedItem.gallery.length > 0
      ? selectedItem.gallery
      : [selectedItem.image];
  }, [selectedItem]);

  // Preload gallery images for instant 60fps photo switching
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

  // Keyboard Arrow navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null || currentGalleryPhotos.length === 0) return;
      if (e.key === 'ArrowLeft') {
        setGalleryImageIndex(prev => (prev === 0 ? currentGalleryPhotos.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setGalleryImageIndex(prev => (prev === currentGalleryPhotos.length - 1 ? 0 : prev + 1));
      }
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, currentGalleryPhotos]);

  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    setGalleryImageIndex(0);
  };

  return (
    <section id="portfolio" className="bg-obsidian-900 border-y border-gold-500/20 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('portfolio.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('portfolio.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t('portfolio.desc')}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(12);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-md gold-glow scale-105'
                  : 'bg-obsidian-850 text-slate-300 hover:text-white hover:bg-obsidian-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item, idx) => {
            const photoCount = item.gallery ? item.gallery.length : 1;
            return (
              <div
                key={item.id}
                onClick={() => openModal(idx)}
                className="group relative bg-obsidian-850 rounded-2xl overflow-hidden border border-slate-800 hover:border-gold-500/40 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
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
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-obsidian-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gold-400 border border-gold-500/30">
                    {item.categoryLabel}
                  </div>

                  {/* Photo Album Count Pill */}
                  <div className="absolute bottom-3 left-3 bg-gold-500/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gold-300 border border-gold-500/40 flex items-center space-x-1">
                    <Layers className="w-3 h-3 mr-1 text-gold-400" />
                    <span>{photoCount} Photos Collection</span>
                  </div>

                  {/* Expand Hover Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-500/40 flex items-center justify-center text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Info */}
                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-sm font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span className="line-clamp-1">{item.location}</span>
                    <span className="text-gold-400 font-semibold whitespace-nowrap ml-2">Browse ({photoCount}) &rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="inline-flex items-center px-8 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-obsidian-850 hover:bg-obsidian-800 border border-gold-500/30 hover:border-gold-400 transition-all shadow-lg hover:scale-105"
            >
              Load More Project Collections ({filteredItems.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal with Full Photo Album Slider & Ambient Backdrop */}
      {selectedItem && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative bg-obsidian-900 border border-gold-500/40 rounded-3xl max-w-6xl w-full overflow-hidden shadow-2xl max-h-[96vh] flex flex-col">
            
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
                onClick={() => setSelectedIndex(null)}
                className="p-2.5 rounded-full text-slate-400 hover:text-white bg-obsidian-850 border border-slate-800 hover:border-gold-400 transition-all"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Cinematic Theater Viewer */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 relative flex-1 flex flex-col justify-center bg-obsidian-950/60">
              
              {/* Theater Stage View Container */}
              <div className="relative w-full h-[45vh] sm:h-[58vh] min-h-[380px] rounded-2xl overflow-hidden border border-gold-500/20 bg-obsidian-950 flex items-center justify-center shadow-inner group">
                
                {/* Ambient Blurred Background of current photo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-45 scale-125 transition-all duration-700 pointer-events-none"
                  style={{ backgroundImage: `url(${currentGalleryPhotos[galleryImageIndex] || selectedItem.image})` }}
                />

                {/* Main Foreground Image */}
                <Image
                  key={`${selectedItem.id}-${galleryImageIndex}`}
                  src={currentGalleryPhotos[galleryImageIndex] || selectedItem.image}
                  alt={`${selectedItem.title} Photo ${galleryImageIndex + 1}`}
                  width={1400}
                  height={1000}
                  priority
                  className="relative z-10 w-full h-full object-contain transition-opacity duration-200"
                />

                {/* Left Prev Arrow */}
                {currentGalleryPhotos.length > 1 && (
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-obsidian-950/85 hover:bg-gold-500 text-white hover:text-obsidian-950 border border-gold-500/40 flex items-center justify-center transition-all shadow-2xl hover:scale-110 active:scale-95"
                    title="Previous Photo (Left Arrow)"
                  >
                    <ChevronLeft className="w-7 h-7" />
                  </button>
                )}

                {/* Right Next Arrow */}
                {currentGalleryPhotos.length > 1 && (
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-obsidian-950/85 hover:bg-gold-500 text-white hover:text-obsidian-950 border border-gold-500/40 flex items-center justify-center transition-all shadow-2xl hover:scale-110 active:scale-95"
                    title="Next Photo (Right Arrow)"
                  >
                    <ChevronRight className="w-7 h-7" />
                  </button>
                )}

                {/* Floating Photo Counter Pill */}
                {currentGalleryPhotos.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-obsidian-950/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gold-300 border border-gold-500/40 shadow-xl">
                    Photo {galleryImageIndex + 1} / {currentGalleryPhotos.length}
                  </div>
                )}
              </div>

              {/* Enhanced Scrollable Thumbnail Carousel */}
              {currentGalleryPhotos.length > 1 && (
                <div className="relative py-2">
                  <div className="flex space-x-3 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-gold-500/40 scrollbar-track-obsidian-900 max-w-full">
                    {currentGalleryPhotos.map((photoUrl, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => setGalleryImageIndex(pIdx)}
                        className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 group ${
                          galleryImageIndex === pIdx
                            ? 'border-gold-400 scale-105 shadow-xl gold-glow ring-2 ring-gold-400/50'
                            : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-gold-500/50'
                        }`}
                      >
                        <Image
                          src={photoUrl}
                          alt={`Thumbnail ${pIdx + 1}`}
                          fill
                          sizes="96px"
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute bottom-1 right-1 bg-obsidian-950/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-gold-300">
                          #{pIdx + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 pt-3 border-t border-slate-800/80">
                <div>
                  <strong className="text-white block font-semibold mb-0.5 text-xs uppercase tracking-wider text-gold-400">Location & Venue</strong>
                  {selectedItem.location}
                </div>
                <div>
                  <strong className="text-white block font-semibold mb-0.5 text-xs uppercase tracking-wider text-gold-400">Event Scale</strong>
                  {selectedItem.scale}
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-white block font-semibold mb-0.5 text-xs uppercase tracking-wider text-gold-400">Project Highlights & Description</strong>
                  {selectedItem.description}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-obsidian-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-300 font-medium">Want to discuss this stage design or enquire about event decor?</span>
              <a
                href="#booking"
                onClick={() => setSelectedIndex(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-obsidian-950 bg-gold-gradient uppercase tracking-wider text-center shadow-lg hover:scale-105 transition-transform"
              >
                Enquire This Specific Setup
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
