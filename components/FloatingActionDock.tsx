'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Instagram, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export default function FloatingActionDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end space-y-2.5 animate-in fade-in slide-in-from-bottom-5 duration-300">
      
      {/* Floating Instagram Button */}
      <a
        href={COMPANY_DETAILS.socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all border border-white/20 group"
        title="Follow EventPlus on Instagram"
        aria-label="Instagram Page"
      >
        <Instagram className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY_DETAILS.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all border border-white/20 gold-glow group"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
      </a>

      {/* Floating Phone Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
        className="w-11 h-11 rounded-full bg-gold-gradient text-obsidian-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-all gold-glow font-bold group"
        title={`Call EventPlus Direct (${COMPANY_DETAILS.contact.primaryPhone})`}
        aria-label="Call Event Manager"
      >
        <Phone className="w-5 h-5 transform group-hover:rotate-12 transition-transform text-obsidian-950" />
      </a>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="w-9 h-9 rounded-full bg-obsidian-900/90 text-slate-300 hover:text-gold-400 border border-slate-700 hover:border-gold-400 flex items-center justify-center shadow-lg transition-all"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
