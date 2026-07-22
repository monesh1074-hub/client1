'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const capabilities = [
    { title: "Heavy Structural Steel Trussing", desc: "Supports massive 200ft stage decks with multi-ton lighting & LED loads." },
    { title: "Custom 3D Thematic Sculpting", desc: "Bespoke movie sets, traditional Gopurams & palace facades." },
    { title: "Exotic Floral Mastercraft", desc: "Fresh imported orchids, roses, jasmine & marigold floral Mandapams." },
    { title: "VIP & VVIP Security Enclosures", desc: "Bulletproof speaker podiums & protocol crowd barricading." },
    { title: "High-Lumen Broadcast Lighting", desc: "Stage illumination tuned for live 4K television cameras." },
    { title: "24/7 Multi-City Mobilization", desc: "Dedicated logistics fleet for rapid setup anywhere in South India." }
  ];

  return (
    <section id="about" className="bg-obsidian-950 py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Gallery Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Primary Image */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-obsidian-850">
                <Image
                  src="/images/portfolio/kalai-event-02.jpeg"
                  alt="Kalai Decorators Cinema Audio Launch Stage Design"
                  width={700}
                  height={500}
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-obsidian-900/90 backdrop-blur-md rounded-xl border border-gold-500/20">
                  <div className="text-xs font-semibold text-gold-400 uppercase tracking-widest">Kollywood Cinema Audio Launch</div>
                  <div className="text-sm font-bold text-white">Massive Stadium Stage with Motorized Gate</div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-10 -right-6 w-3/5 rounded-xl overflow-hidden border-2 border-gold-400 shadow-2xl hidden sm:block">
                <Image
                  src="/images/portfolio/kalai-event-03.jpeg"
                  alt="Kalai Decorators Royal Wedding Floral Setup"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-gold-gradient p-0.5 rounded-xl shadow-xl">
                <div className="bg-obsidian-950 px-5 py-3 rounded-[10px] flex items-center space-x-3">
                  <div className="text-2xl font-bold font-serif text-gold-400">15+</div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider leading-tight">
                    Years of <br />Excellence
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
                About Kalai Decorators
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Where Architectural Strength Meets <span className="text-gold-gradient">Unrivaled Artistry</span>
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Established in <strong className="text-white">2010</strong> in Alapakkam, Chennai, <strong className="text-white">Kalai Decorators</strong> was built on a singular conviction: every high-stakes event deserves stage architecture that radiates prestige, stability, and sheer beauty.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Under the visionary direction of <strong className="text-slate-200">Founder Perumal</strong>, we have evolved from a local decorator into South India&apos;s most sought-after mega stage production company. Whether building a 200-foot political rally stage engineered to hold hundreds of VIPs or designing an intricate floral temple Mandapam with 50,000 imported orchids, our team operates with zero tolerance for errors.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-obsidian-900 p-3.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{cap.title}</h4>
                    <p className="text-[11px] text-slate-400">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Quote Teaser */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-medium">Founded & Supervised by</div>
                <div className="text-base font-bold font-serif text-gold-400">Perumal — Founder</div>
              </div>

              <a
                href="#founder"
                className="text-xs font-semibold text-gold-300 hover:text-gold-400 underline underline-offset-4"
              >
                Read Founder Story &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
