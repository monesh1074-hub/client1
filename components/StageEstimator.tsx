'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';

export default function StageEstimator() {
  const [eventType, setEventType] = useState('political');
  const [crowdCapacity, setCrowdCapacity] = useState('large');
  const [stageScale, setStageScale] = useState('mega');
  const [addons, setAddons] = useState<string[]>(['led', 'trussing']);
  const [submitted, setSubmitted] = useState(false);
  const [clientPhone, setClientPhone] = useState('');
  const [clientName, setClientName] = useState('');

  const toggleAddon = (id: string) => {
    setAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Budget calculation logic
  const calculateEstimate = () => {
    let baseMin = 75000;
    let baseMax = 150000;

    if (eventType === 'political') {
      baseMin += 100000;
      baseMax += 250000;
    } else if (eventType === 'movies') {
      baseMin += 120000;
      baseMax += 300000;
    } else if (eventType === 'weddings') {
      baseMin += 80000;
      baseMax += 200000;
    }

    if (crowdCapacity === 'mega') {
      baseMin += 150000;
      baseMax += 350000;
    } else if (crowdCapacity === 'large') {
      baseMin += 60000;
      baseMax += 120000;
    }

    if (stageScale === 'mega') {
      baseMin += 100000;
      baseMax += 200000;
    } else if (stageScale === 'heavy') {
      baseMin += 50000;
      baseMax += 100000;
    }

    if (addons.includes('led')) { baseMin += 40000; baseMax += 80000; }
    if (addons.includes('trussing')) { baseMin += 50000; baseMax += 100000; }
    if (addons.includes('floral')) { baseMin += 35000; baseMax += 70000; }
    if (addons.includes('podium')) { baseMin += 25000; baseMax += 50000; }

    const formatINR = (val: number) => 
      new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    return {
      min: formatINR(baseMin),
      max: formatINR(baseMax)
    };
  };

  const estimate = calculateEstimate();

  const handleInstantQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone) return;

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName || 'Estimator Inquiry',
          phone: clientPhone,
          email: 'quote@estimator.local',
          whatsapp: clientPhone,
          eventType: `Estimated ${eventType.toUpperCase()} Event Setup`,
          eventDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
          venue: 'Chennai / Tamil Nadu Venue',
          budget: `${estimate.min} - ${estimate.max}`,
          message: `Calculated Estimate: ${estimate.min} - ${estimate.max} for ${eventType} event, scale: ${stageScale}, addons: ${addons.join(', ')}`,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="estimator" className="bg-obsidian-900 border-y border-gold-500/20 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-obsidian-850 px-4 py-1.5 rounded-full border border-gold-500/30">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Instant Stage & Event <span className="text-gold-gradient">Budget Estimator</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select your event requirements below to generate an instant estimate tailored for Tamil Nadu venues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-7 bg-obsidian-850 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* Step 1: Event Category */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                1. Select Event Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'political', label: 'Political Rally' },
                  { id: 'movies', label: 'Movie Audio Launch' },
                  { id: 'weddings', label: 'Royal Wedding' },
                  { id: 'government', label: 'Govt Protocol' },
                  { id: 'temple', label: 'Temple Festival' },
                  { id: 'corporate', label: 'Corporate Summit' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEventType(item.id)}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left ${
                      eventType === item.id
                        ? 'bg-gold-gradient text-obsidian-950 border-gold-400 font-bold shadow-md'
                        : 'bg-obsidian-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Crowd Capacity */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                2. Expected Audience Capacity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: '1,000 - 10,000' },
                  { id: 'large', label: '10,000 - 50,000' },
                  { id: 'mega', label: '100,000 - 500,000+' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCrowdCapacity(item.id)}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      crowdCapacity === item.id
                        ? 'bg-gold-gradient text-obsidian-950 border-gold-400 font-bold shadow-md'
                        : 'bg-obsidian-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Stage Dimensions */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                3. Stage Deck Structure & Scale
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: '40ft Standard' },
                  { id: 'heavy', label: '80ft Heavy Truss' },
                  { id: 'mega', label: '150ft-200ft Mega' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStageScale(item.id)}
                    className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      stageScale === item.id
                        ? 'bg-gold-gradient text-obsidian-950 border-gold-400 font-bold shadow-md'
                        : 'bg-obsidian-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Technical Addons */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                4. Select Optional Add-On Systems
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'led', label: '4K LED Video Backdrop' },
                  { id: 'trussing', label: '100kW Concert Audio Rig' },
                  { id: 'floral', label: 'Fresh Exotic Floral Mandapam' },
                  { id: 'podium', label: 'VVIP Bulletproof Podium' },
                ].map((item) => {
                  const active = addons.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleAddon(item.id)}
                      className={`p-3 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                        active
                          ? 'bg-gold-500/10 text-gold-300 border-gold-400'
                          : 'bg-obsidian-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      <CheckCircle2 className={`w-4 h-4 ${active ? 'text-gold-400' : 'text-slate-700'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card (Right) */}
          <div className="lg:col-span-5 bg-obsidian-950 border border-gold-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-gold-gradient text-obsidian-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
              Live Estimate Breakdown
            </div>

            <div className="space-y-2 border-b border-slate-800 pb-6">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Estimated Budget Range</div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient">
                {estimate.min} – {estimate.max}
              </div>
              <p className="text-xs text-slate-400">
                Includes complete material supply, logistics, 24/7 technical crew, and structural safety assembly.
              </p>
            </div>

            {/* Included Guarantees */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="font-bold text-white uppercase text-[11px] tracking-wider">Included Turnkey Services:</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Structural Load & Wind-Resistance Safety</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rapid Overnight Assembly & On-Time Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated On-Site Technical Supervisor</span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-2xl text-center space-y-2">
                <Sparkles className="w-6 h-6 text-emerald-400 mx-auto" />
                <div className="text-sm font-bold text-white">Estimate Request Received!</div>
                <p className="text-xs text-slate-300">
                  Founder Perumal or our engineering team will call you within 15 minutes to confirm availability.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInstantQuoteSubmit} className="space-y-3 pt-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider">Lock in this Quote & Schedule Inspection:</div>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your Name / Organization"
                  className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none"
                />
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Your Mobile / WhatsApp Number"
                  className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-lg uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <span>Request Official Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Direct WhatsApp Callout */}
            <div className="pt-2 text-center">
              <a
                href={COMPANY_DETAILS.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:underline inline-flex items-center"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Or Chat Directly on WhatsApp (+91 9940768571)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
