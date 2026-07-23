'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-obsidian-950 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('reviews.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('reviews.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t('intro.p1')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-obsidian-850 border border-slate-800 p-8 rounded-3xl relative hover:border-gold-500/40 transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold-400/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-gold-400">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-200 italic font-serif leading-relaxed">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-white font-serif">{test.name}</div>
                  <div className="text-xs text-gold-400 font-medium">{test.role} — <span className="text-slate-400">{test.organization}</span></div>
                </div>

                <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
                  {test.eventCategory}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
