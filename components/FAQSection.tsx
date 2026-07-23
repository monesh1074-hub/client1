'use client';

import React, { useState } from 'react';
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
    <section className="bg-obsidian-900 border-y border-gold-500/20 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400 flex items-center justify-center">
            <HelpCircle className="w-4 h-4 mr-2" />
            {t('faq.subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('faq.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t('intro.p1')}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {translatedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-obsidian-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 hover:bg-obsidian-850/50 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-500 text-obsidian-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-block text-[11px] font-semibold text-gold-400 uppercase tracking-wider bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
