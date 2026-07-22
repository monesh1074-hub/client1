'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Mail, MapPin, ArrowUp, Instagram } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 text-slate-300 border-t border-gold-500/20 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-obsidian-850 p-1 border border-gold-400/40">
                <Image
                  src="/images/murugan-brand.svg"
                  alt="Kalai Decorators Murugan Brand Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                KALAI <span className="text-gold-400">DECORATORS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premier event decoration and mega stage setup company based in Chennai. Founded by <strong className="text-slate-200">Perumal</strong>, specializing in political rallies, cinema audio launches, royal weddings, and government ceremonies.
            </p>

            <div className="pt-2 text-xs text-gold-400 font-semibold uppercase tracking-wider">
              Central Warehouse & Office: Alapakkam, Chennai
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Company</a></li>
              <li><a href="#founder" className="hover:text-gold-400 transition-colors">Founder Story</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#featured-projects" className="hover:text-gold-400 transition-colors">Featured Projects</a></li>
              <li><a href="#portfolio" className="hover:text-gold-400 transition-colors">Project Portfolio</a></li>
              <li><a href="#booking" className="hover:text-gold-400 transition-colors">Book Event Setup</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Event Categories
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Political Rallies & Public Meetings</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Movie Audio Launches & Red Carpets</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Royal Weddings & Floral Mandapams</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Government Protocol Ceremonies</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Temple Festivals & Cultural Galas</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Corporate Summits & Product Launches</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 6381147719 | +91 9994849904</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>+91 9940768571 (WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-400">
                <Instagram className="w-3.5 h-3.5 shrink-0" />
                <a href={COMPANY_DETAILS.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @kalai_decorator_ (Instagram)
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">Kalaidecorators2026@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>No. 2/11, Jayalakshmi Nagar, Ganapathi Street, Alapakkam, Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Kalai Decorators</strong>. All Rights Reserved. Masterminded by <strong className="text-gold-400">Perumal</strong>.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 border border-slate-800 text-gold-400 hover:text-gold-300 transition-colors flex items-center space-x-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase">Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
