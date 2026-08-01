'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, ArrowUp, Instagram } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-slate-900 text-slate-300 border-t border-gold-500/20 pt-10 pb-6 sm:pt-16 sm:pb-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-gold-400/90 shadow-2xl gold-glow bg-obsidian-950 shrink-0 flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Kalai Decorators Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover scale-110 rounded-lg"
                />
              </div>
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                KALAI <span className="text-gold-400">DECORATORS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 sm:line-clamp-none">
              South India&apos;s leading stage architecture &amp; event decoration powerhouse with <strong className="text-gold-400">27+ years</strong> of operational mastery. Specializing in VVIP political rallies, Kollywood cinema audio launches (Vikram, Master, Leo), and royal weddings.
            </p>

            <div className="pt-1 text-[11px] sm:text-xs text-gold-400 font-semibold uppercase tracking-wider">
              Central Operations: Alapakkam, Chennai &amp; All 38 Districts of Tamil Nadu
            </div>
          </div>

          {/* Quick Links & Specializations 2-Column Grid on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {/* Quick Links */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Navigation
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs font-medium text-slate-300">
                <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
                <li><a href="#founder" className="hover:text-gold-400 transition-colors">Founder Story</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
                <li><a href="#featured-projects" className="hover:text-gold-400 transition-colors">Projects</a></li>
                <li><a href="#portfolio" className="hover:text-gold-400 transition-colors">Portfolio</a></li>
                <li><a href="#booking" className="hover:text-gold-400 transition-colors">Book Stage</a></li>
              </ul>
            </div>

            {/* Specializations */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Mastery
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs font-medium text-slate-300">
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Political Rallies</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Cinema Set Works</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Royal Weddings</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Temple Festivals</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Civic Ceremonies</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Expos &amp; Summits</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 63811 47719 | +91 99948 49904</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <a href={COMPANY_DETAILS.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +91 99407 68571 (WhatsApp Direct)
                </a>
              </div>
              <div className="flex items-center space-x-2 text-pink-400">
                <Instagram className="w-3.5 h-3.5 shrink-0" />
                <a href={COMPANY_DETAILS.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram Official Page
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">Kalaidecorators2026@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>No. 4/450, Alapakkam Main Road, Alapakkam, Chennai, Tamil Nadu - 600116</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Kalai Decorators</strong>. All Rights Reserved. Master Craftsman Perumal.
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-obsidian-850 hover:bg-gold-400/20 border border-slate-800 text-gold-400 hover:text-gold-300 transition-colors flex items-center space-x-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 animate-bounce-subtle" />
              <span className="text-[11px] font-bold uppercase">Back to Top</span>
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
