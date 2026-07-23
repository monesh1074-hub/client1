'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageSquare, Menu, X, Calendar, ChevronRight, Instagram, Globe } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.founder'), href: '#founder' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#featured-projects' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.reviews'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-obsidian-950 border-b border-obsidian-800 text-xs text-slate-300 py-2.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gold-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              {t('nav.247booking')}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">
              {t('nav.chennaiOffice')}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-300 hover:bg-gold-500/20 font-bold transition-all"
              title="Change Language (English / தமிழ்)"
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
            <a 
              href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`} 
              className="flex items-center hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              {COMPANY_DETAILS.contact.primaryPhone}
            </a>
            <a 
              href={COMPANY_DETAILS.socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp: +91 99407 68571
            </a>
            <a 
              href={COMPANY_DETAILS.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-pink-400 hover:text-pink-300 transition-colors font-medium"
              title="Official Instagram Page"
            >
              <Instagram className="w-3.5 h-3.5 mr-1.5" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-obsidian-950/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl' 
            : 'bg-obsidian-900/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo & Brand Identity */}
          <Link href="#hero" className="flex items-center space-x-3 group shrink-0 mr-3">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden border-2 border-gold-400/90 shadow-2xl gold-glow group-hover:scale-105 transition-transform bg-obsidian-950 flex items-center justify-center shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Kalai Decorators Official Logo"
                width={150}
                height={150}
                priority
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors whitespace-nowrap">
                KALAI <span className="text-gold-400">DECORATORS</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase font-medium whitespace-nowrap">
                {language === 'ta' ? 'மேடை அலங்கார நிபுணர்கள்' : 'Stage Setup & Event Specialists'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 shrink overflow-hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-gold-500/10 rounded-lg transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Callouts */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-gold-500/30 text-gold-400 font-bold text-xs transition-all shadow-md"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-gold-400" />
              <span>{language === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>
            <a
              href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="p-2.5 text-slate-300 hover:text-white bg-obsidian-850 hover:bg-obsidian-800 border border-slate-800 rounded-lg transition-colors"
              title="Call Us Now"
            >
              <Phone className="w-4 h-4 text-gold-400" />
            </a>

            <a
              href="#booking"
              className="relative inline-flex items-center px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-md gold-glow uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 mr-2 text-obsidian-950" />
              Enquire Event
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg text-slate-300 hover:text-white bg-obsidian-850 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-obsidian-950 border-b border-gold-500/20 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-800">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center px-2 py-2.5 bg-gold-500/10 border border-gold-400/40 rounded-lg text-xs font-bold text-gold-300"
              >
                <Globe className="w-3.5 h-3.5 mr-1 text-gold-400" />
                {language === 'en' ? 'தமிழ்' : 'English'}
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center px-2 py-2.5 bg-obsidian-850 border border-slate-800 rounded-lg text-xs font-semibold text-white"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400 mr-1" />
                Call
              </a>
              <a
                href={COMPANY_DETAILS.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-2 py-2.5 bg-emerald-950/80 border border-emerald-800/50 rounded-lg text-xs font-semibold text-emerald-400"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-gold-500/10 rounded-lg"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 rounded-lg text-sm font-bold text-obsidian-950 bg-gold-gradient uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Event Stage Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
