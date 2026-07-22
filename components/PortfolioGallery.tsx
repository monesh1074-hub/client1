'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_GALLERY } from '@/lib/data';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = [
    { id: 'all', label: 'All 90+ Projects' },
    { id: 'political', label: 'Political Rallies' },
    { id: 'movies', label: 'Movie Launches' },
    { id: 'weddings', label: 'Royal Weddings' },
    { id: 'government', label: 'Government Functions' },
    { id: 'temple', label: 'Temple Festivals' },
    { id: 'corporate', label: 'Corporate Setups' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_GALLERY 
    : PORTFOLIO_GALLERY.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <section id="portfolio" className="bg-obsidian-900 border-y border-gold-500/20 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            Real Project Archives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Explore Our Comprehensive <span className="text-gold-gradient">Event Stage Portfolio</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Browse through 90+ real project photographs showcasing our stage setups across South India.
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
          {displayedItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
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

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-obsidian-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gold-400 border border-gold-500/30">
                  {item.categoryLabel}
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
                  <span>{item.location}</span>
                  <span className="text-gold-400 font-medium">View Setup &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="inline-flex items-center px-8 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-obsidian-850 hover:bg-obsidian-800 border border-gold-500/30 hover:border-gold-400 transition-all shadow-lg"
            >
              Load More Project Photos ({filteredItems.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal with Prev/Next Navigation */}
      {selectedItem && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative bg-obsidian-900 border border-gold-500/40 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-obsidian-950">
              <div>
                <span className="text-xs text-gold-400 font-semibold uppercase">{selectedItem.categoryLabel} ({selectedIndex + 1} of {filteredItems.length})</span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{selectedItem.title}</h3>
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white bg-obsidian-850 border border-slate-800 hover:border-gold-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Prev / Next Buttons */}
            <div className="p-6 overflow-y-auto space-y-6 relative">
              <div className="relative w-full h-[360px] sm:h-[480px] rounded-2xl overflow-hidden border border-gold-500/20 bg-black flex items-center justify-center">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={1200}
                  height={900}
                  priority
                  className="w-full h-full object-contain"
                />

                {/* Left Prev Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-obsidian-950/80 hover:bg-gold-500 text-white hover:text-obsidian-950 border border-white/20 flex items-center justify-center transition-all shadow-xl"
                  title="Previous Photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Next Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-obsidian-950/80 hover:bg-gold-500 text-white hover:text-obsidian-950 border border-white/20 flex items-center justify-center transition-all shadow-xl"
                  title="Next Photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                <div>
                  <strong className="text-white block font-semibold mb-1">Location:</strong>
                  {selectedItem.location}
                </div>
                <div>
                  <strong className="text-white block font-semibold mb-1">Event Scale:</strong>
                  {selectedItem.scale}
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-white block font-semibold mb-1">Description:</strong>
                  {selectedItem.description}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-obsidian-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">Like this stage design for your event?</span>
              <a
                href="#booking"
                onClick={() => setSelectedIndex(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-obsidian-950 bg-gold-gradient uppercase tracking-wider text-center"
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
