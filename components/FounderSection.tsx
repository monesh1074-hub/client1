'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageSquare, Quote, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export default function FounderSection() {
  return (
    <section id="founder" className="bg-obsidian-900 border-y border-gold-500/20 py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-obsidian-950 border border-gold-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image & Profile Badge */}
            <div className="lg:col-span-5 relative text-center">
              <div className="relative mx-auto max-w-sm">
                
                {/* Gold Crest Border Frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gold-gradient blur-md opacity-40" />

                <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400 bg-obsidian-850 shadow-2xl">
                  {/* Founder Profile Visual with Brand Badge */}
                  <Image
                    src="/images/founder-perumal-vijay.jpg"
                    alt="Founder Perumal with Superstar Thalapathy Vijay during Kollywood Movie Stage Setup"
                    width={600}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-[450px] object-cover object-top rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 inset-x-4 p-4 bg-obsidian-900/90 backdrop-blur-md rounded-xl border border-gold-500/30">
                    <div className="text-lg font-bold font-serif text-white">Perumal</div>
                    <div className="text-xs text-gold-400 font-medium">Founder & Chief Director, Kalai Decorators</div>
                    <div className="text-[11px] text-slate-300 italic pt-1">With Superstar Thalapathy Vijay</div>
                  </div>
                </div>

                {/* Divine Murugan Crest Badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-obsidian-900 border-2 border-gold-400 p-2 shadow-2xl gold-glow flex items-center justify-center">
                  <Image 
                    src="/images/murugan-brand.svg" 
                    alt="Murugan Emblem" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain"
                  />
                </div>

              </div>
            </div>

            {/* Right Biography & Message Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>Leadership Vision</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Meet Founder <span className="text-gold-gradient">Perumal</span>
                </h2>
                <p className="text-sm font-semibold text-gold-300 uppercase tracking-wider">
                  The Driving Force Behind South India&apos;s Grandest Event Setups
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-gold-400 space-y-3">
                <Quote className="w-8 h-8 text-gold-400/40 absolute -top-2 -left-4 bg-obsidian-950 px-1" />
                <p className="text-base sm:text-lg text-slate-200 italic font-serif leading-relaxed">
                  &ldquo;When a political leader steps onto a podium before hundreds of thousands, or when a bride enters her wedding mandapam, there is no second chance. Every bolt, every floral garland, every light fixture must be flawless. That is the standard we uphold every single day.&rdquo;
                </p>
                <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">— Perumal, Founder</div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                With over 15 years of hands-on experience, Founder <strong className="text-white">Perumal</strong> personally oversees project planning, structural safety engineering, and creative decor execution. Known for his unwavering work ethic and accessibility, he has built trusted relationships with political committees, movie production banners, state officers, and prominent families.
              </p>

              {/* Direct Founder Contact Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${COMPANY_DETAILS.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-lg gold-glow"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Direct Call: {COMPANY_DETAILS.contact.primaryPhone}
                </a>

                <a
                  href={COMPANY_DETAILS.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
