'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const translatedFaqs = [
    { question: t('faq.q1'), answer: t('faq.a1'), category: language === 'ta' ? 'முன்பதிவு' : 'Booking' },
    { question: t('faq.q2'), answer: t('faq.a2'), category: language === 'ta' ? 'மாவட்டங்கள்' : 'Coverage' },
    { question: t('faq.q3'), answer: t('faq.a3'), category: language === 'ta' ? 'சினிமா' : 'Cinema' },
    { question: t('faq.q4'), answer: t('faq.a4'), category: language === 'ta' ? 'பாதுகாப்பு' : 'Safety' },
  ];

  return (
    <section className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-20 lg:py-28 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400 flex items-center justify-center">
            <HelpCircle className="w-4 h-4 mr-2 animate-spin-slow" />
            {t('faq.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
            {t('faq.title')}
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 light:text-slate-700">
            {t('intro.p1')}
          </p>
        </motion.div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {translatedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white border border-slate-700/50 dark:border-slate-800 light:border-slate-200 rounded-2xl overflow-hidden shadow-md transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 hover:bg-gold-500/5 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold dark:text-white light:text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-400 text-obsidian-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm dark:text-slate-300 light:text-slate-700 leading-relaxed border-t border-slate-700/40 dark:border-slate-800/60 pt-4">
                        <p>{faq.answer}</p>
                        <div className="mt-3 inline-block text-[11px] font-semibold text-gold-400 uppercase tracking-wider bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                          Category: {faq.category}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
