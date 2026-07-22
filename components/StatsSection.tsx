'use client';

import React from 'react';
import { STATS } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="bg-obsidian-900 border-y border-gold-500/20 py-16 lg:py-20 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="bg-obsidian-950/80 border border-gold-500/30 p-8 rounded-2xl text-center space-y-2 hover:border-gold-400 transition-all duration-300 shadow-xl gold-glow"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-serif text-gold-gradient tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
