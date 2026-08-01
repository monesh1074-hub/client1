'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function IntroTrust() {
  const { t } = useLanguage();

  return (
    <section className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-6 lg:py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white border border-gold-500/30 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 animate-pulse">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold dark:text-slate-400 light:text-slate-600 uppercase tracking-wider">
                {t('contact.addressHeader')}
              </div>
              <div className="text-sm sm:text-base font-semibold dark:text-white light:text-slate-900">
                {COMPANY_DETAILS.contact.formattedAddress}
              </div>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={COMPANY_DETAILS.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md gold-glow uppercase tracking-wider"
          >
            {t('contact.directions')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
