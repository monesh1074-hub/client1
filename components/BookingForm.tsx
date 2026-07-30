'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send, Phone, ShieldCheck, Sparkles, X } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

export default function BookingForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    eventType: 'Political Events & Public Rallies',
    eventDate: '',
    venue: '',
    budget: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ message: string; enquiryId: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.name.trim() || formData.name.length < 2) {
      setError('Please enter your full name (minimum 2 characters).');
      setLoading(false);
      return;
    }

    if (!formData.phone.trim() || !/^[0-9+\s\-]{10,15}$/.test(formData.phone.trim())) {
      setError('Please enter a valid phone number (10 to 15 digits).');
      setLoading(false);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    if (!formData.eventDate) {
      setError('Please select your target event date.');
      setLoading(false);
      return;
    }

    if (!formData.venue.trim()) {
      setError('Please specify the event venue or city.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry.');
      }

      setSuccessData({
        message: result.message,
        enquiryId: result.enquiryId
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        whatsapp: '',
        eventType: 'Political Events & Public Rallies',
        eventDate: '',
        venue: '',
        budget: '',
        message: ''
      });

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-100 border-y border-gold-500/20 py-20 lg:py-28 relative transition-colors duration-300">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/10 blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Intro Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-spin-slow" />
                {t('nav.enquire')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white light:text-slate-900">
                {t('booking.title')}
              </h2>
            </div>

            <p className="text-sm sm:text-base dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {t('booking.desc')}
            </p>

            <div className="space-y-4 pt-2">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 bg-obsidian-950 dark:bg-obsidian-950 light:bg-white p-4 rounded-xl border border-slate-700/50 dark:border-slate-800 light:border-slate-200"
              >
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold dark:text-white light:text-slate-900 uppercase">{t('hero.safetyCertified')}</h4>
                  <p className="text-xs dark:text-slate-400 light:text-slate-600">{t('hero.safetyDesc')}</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 bg-obsidian-950 dark:bg-obsidian-950 light:bg-white p-4 rounded-xl border border-slate-700/50 dark:border-slate-800 light:border-slate-200"
              >
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold dark:text-white light:text-slate-900 uppercase">{t('hero.callFounderBtn')}</h4>
                  <p className="text-xs dark:text-slate-400 light:text-slate-600">{COMPANY_DETAILS.contact.primaryPhone}</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Booking Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-obsidian-950 dark:bg-obsidian-950 light:bg-white border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              <h3 className="font-serif text-2xl font-bold dark:text-white light:text-slate-900 mb-6">
                {t('booking.title')}
              </h3>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {successData && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-sm space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Inquiry Submitted Successfully!
                    </span>
                    <button onClick={() => setSuccessData(null)} className="text-slate-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs">{successData.message}</p>
                  <p className="text-[11px] font-mono text-emerald-400">Ref ID: {successData.enquiryId}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                      {t('form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sundaram"
                      className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.name@company.com"
                      className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                      Event Category *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 outline-none transition-colors"
                    >
                      <option value="Wedding Planning & Mandapam">💍 Wedding Planning & Mandapam</option>
                      <option value="Corporate Events & Conferences">🏢 Corporate Event & Conference</option>
                      <option value="Live Concerts & Shows">🎵 Live Concert & Entertainment</option>
                      <option value="Brand Activation & Exhibition">🚀 Brand Activation & Stall</option>
                      <option value="Political Events & Rallies">🚩 Political Event & Mega Rally</option>
                      <option value="Private Parties & Celebrations">🎉 Private Birthday / Anniversary</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                      Target Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 outline-none transition-colors"
                    />
                  </div>

                  {/* Venue / City */}
                  <div>
                    <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                      Venue / City Location *
                    </label>
                    <input
                      type="text"
                      name="venue"
                      required
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g. Chennai / Goa / Mumbai"
                      className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
                    Event Requirements & Special Requests
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe estimated guest count, theme design, seating capacity, or custom set requirements..."
                    className="w-full bg-obsidian-900 dark:bg-obsidian-900 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-300 focus:border-gold-400 rounded-xl px-4 py-3 text-sm dark:text-white light:text-slate-900 placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-base font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-xl gold-glow tracking-wider uppercase flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Submitting Inquiry...' : 'Send Event Inquiry Now'}</span>
                </motion.button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
