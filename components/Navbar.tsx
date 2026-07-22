'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, Calendar, ChevronRight, Instagram } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Founder', href: '#founder' },
    { name: 'Services', href: '#services' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Projects', href: '#featured-projects' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-obsidian-950 border-b border-obsidian-800 text-xs text-slate-300 py-2.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gold-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              24/7 Event Booking Available across South India
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">
              Chennai Office: <strong className="text-slate-200">Alapakkam, Chennai</strong>
            </span>
          </div>
          <div className="flex items-center space-x-6">
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
              WhatsApp Direct
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
          <Link href="#hero" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-obsidian-850 p-1 border border-gold-400/40 group-hover:border-gold-400 transition-all shadow-lg gold-glow">
              <Image 
                src="/images/murugan-brand.svg" 
                alt="Kalai Decorators Divine Murugan Brand Mark" 
                width={48} 
                height={48} 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                KALAI <span className="text-gold-400">DECORATORS</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 tracking-widest uppercase font-medium">
                Stage Setup & Mega Event Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-gold-500/10 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Callouts */}
          <div className="hidden sm:flex items-center space-x-3">
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
            className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white bg-obsidian-850 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-obsidian-950 border-b border-gold-500/20 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              <a
                href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center px-3 py-2.5 bg-obsidian-850 border border-slate-800 rounded-lg text-xs font-semibold text-white"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400 mr-2" />
                Call Founder
              </a>
              <a
                href={COMPANY_DETAILS.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-3 py-2.5 bg-emerald-950/80 border border-emerald-800/50 rounded-lg text-xs font-semibold text-emerald-400"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
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
