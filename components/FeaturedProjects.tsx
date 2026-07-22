'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Users, CheckCircle2, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/lib/data';

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="bg-obsidian-950 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400">
            Case Studies of Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            High-Profile <span className="text-gold-gradient">Featured Event Setups</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A deeper look at how Kalai Decorators engineers large-scale stage productions under extreme deadlines.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12 lg:space-y-16">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className="bg-obsidian-850 border border-gold-500/20 rounded-3xl overflow-hidden shadow-2xl hover:border-gold-500/40 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                  
                  {/* Case Study Image */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index < 2}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 bg-gold-gradient px-3 py-1 rounded-full text-xs font-bold text-obsidian-950 uppercase tracking-wider shadow-lg">
                        {project.categoryLabel}
                      </div>
                    </div>
                  </div>

                  {/* Case Study Details */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      
                      {/* Scale & Location Badges */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300 pt-1">
                        <span className="flex items-center text-gold-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center text-emerald-400">
                          <Users className="w-4 h-4 mr-1" />
                          {project.scale}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights Grid */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">Engineering Highlights:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200 bg-obsidian-900 px-3 py-2 rounded-lg border border-slate-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                      <a
                        href="#booking"
                        className="inline-flex items-center text-xs font-bold text-gold-300 hover:text-gold-400 uppercase tracking-wider group"
                      >
                        Enquire Similar Stage Setup
                        <ExternalLink className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
