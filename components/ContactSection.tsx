'use client';

import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink, Instagram } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-obsidian-950 py-10 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t('contact.subtitle')}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('contact.title')}
          </h2>
          <p className="text-xs sm:text-base text-slate-300 line-clamp-2 sm:line-clamp-none">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Contact Card */}
          <div className="lg:col-span-5 bg-obsidian-900 border border-gold-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-6 sm:space-y-8 shadow-2xl">
            
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white border-b border-slate-800 pb-3 sm:pb-4">
              {t('contact.directChannels')}
            </h3>

            {/* Phones */}
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Primary Contact Numbers</div>
                  <a href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`} className="block text-base font-bold text-white hover:text-gold-400">
                    {COMPANY_DETAILS.contact.primaryPhone} (Founder Perumal)
                  </a>
                  <a href={`tel:${COMPANY_DETAILS.contact.altPhone.replace(/\s+/g, '')}`} className="block text-sm text-slate-300 hover:text-gold-400">
                    {COMPANY_DETAILS.contact.altPhone} (Alternate Line)
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Official WhatsApp Numbers</div>
                  <a 
                    href={COMPANY_DETAILS.socialLinks.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-emerald-400 hover:underline"
                  >
                    +91 99407 68571 (Chat Now)
                  </a>
                  <a 
                    href={COMPANY_DETAILS.socialLinks.whatsappAlt} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-emerald-400 hover:underline"
                  >
                    +91 99948 49904 (Support Line)
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Official Instagram Page</div>
                  <a 
                    href={COMPANY_DETAILS.socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm font-semibold text-pink-400 hover:underline flex items-center"
                  >
                    @kalai_decorator_
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Official Email Addresses</div>
                  <a href={`mailto:${COMPANY_DETAILS.contact.primaryEmail}`} className="block text-sm font-semibold text-white hover:text-gold-400">
                    {COMPANY_DETAILS.contact.primaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_DETAILS.contact.altEmail}`} className="block text-xs text-slate-400 hover:text-gold-400">
                    {COMPANY_DETAILS.contact.altEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Headquarters & Office Address</div>
                  <div className="text-sm text-slate-200 leading-relaxed font-medium">
                    {COMPANY_DETAILS.contact.formattedAddress}
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-2 border-t border-slate-800 flex items-center space-x-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>Operations: 24 Hours / 7 Days a Week</span>
            </div>

          </div>

          {/* Right Map Display */}
          <div className="lg:col-span-7 bg-obsidian-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[480px] relative">
            <iframe
              title="Kalai Decorators Office Location Map Alapakkam Chennai"
              src="https://maps.google.com/maps?q=Alapakkam,Chennai,Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 bg-obsidian-950/90 backdrop-blur-md p-4 rounded-xl border border-gold-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Alapakkam, Chennai Central Warehouse</div>
                <div className="text-[11px] text-slate-400">Serving Chennai, All Tamil Nadu & South India</div>
              </div>

              <a
                href={COMPANY_DETAILS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold text-obsidian-950 bg-gold-gradient flex items-center"
              >
                Directions
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
