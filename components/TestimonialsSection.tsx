'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white py-20 lg:py-28 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('reviews.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
            {t('reviews.title')}
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 light:text-slate-700">
            {t('intro.p1')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-obsidian-850 dark:bg-obsidian-850 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-200 p-8 rounded-3xl relative hover:border-gold-500/50 transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between card-shine-container"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold-400/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-gold-400">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400 animate-pulse" />
                  ))}
                </div>

                <p className="text-sm sm:text-base dark:text-slate-200 light:text-slate-800 italic font-serif leading-relaxed">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-700/50 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold dark:text-white light:text-slate-900 font-serif">{test.name}</div>
                  <div className="text-xs text-gold-400 font-medium">{test.role} — <span className="dark:text-slate-400 light:text-slate-600">{test.organization}</span></div>
                </div>

                <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                  {test.eventCategory}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
