'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, Phone, ShieldCheck, Sparkles, X } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '@/lib/data';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    eventType: 'Political Events & Public Rallies',
    eventDate: '',
    venue: '',
    budget: '₹1,00,000 - ₹3,00,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{ message: string; enquiryId: string } | null>(null);

  const budgetOptions = [
    'Under ₹1,00,000',
    '₹1,00,000 - ₹3,00,000',
    '₹3,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    '₹10,00,000+ (Mega Production Scale)'
  ];

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

    // Client-side quick checks
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

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        whatsapp: '',
        eventType: 'Political Events & Public Rallies',
        eventDate: '',
        venue: '',
        budget: '₹1,00,000 - ₹3,00,000',
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
    <section id="booking" className="bg-obsidian-900 border-y border-gold-500/20 py-20 lg:py-28 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Intro Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-400 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Reserve Your Setup
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Book Kalai Decorators For Your <span className="text-gold-gradient">Next Mega Event</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Get a customized quote within 2 hours. Founder <strong className="text-white">Perumal</strong> and our technical director will review your venue details and event requirements.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 bg-obsidian-950 p-4 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Instant Turnaround Quote</h4>
                  <p className="text-xs text-slate-400">Receive precise architectural & floral estimates tailored to your venue scale.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-obsidian-950 p-4 rounded-xl border border-slate-800">
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Direct Founder Access</h4>
                  <p className="text-xs text-slate-400">Need urgent 12-hour rally setup? Call Founder Perumal directly at {COMPANY_DETAILS.contact.primaryPhone}.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Booking Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-obsidian-950 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Event Booking Enquiry Form
              </h3>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs sm:text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Perumal Sundaram"
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Event Category *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Custom Stage Requirement">Custom Mega Production Requirement</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Target Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Venue / Location */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Venue / City Location *
                    </label>
                    <input
                      type="text"
                      name="venue"
                      required
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g. Nehru Indoor Stadium / Madurai Grounds"
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    >
                      {budgetOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Event Details & Special Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention expected crowd size, stage width, LED requirements, or specific floral themes..."
                    className="w-full bg-obsidian-900 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-sm font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-xl gold-glow uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-obsidian-950" />
                      <span>Submit Event Enquiry</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {successData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-obsidian-900 border-2 border-gold-400 rounded-3xl p-8 max-w-lg w-full text-center space-y-6 shadow-2xl gold-glow relative">
            
            <button
              onClick={() => setSuccessData(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">Enquiry Reference #{successData.enquiryId}</div>
              <h3 className="font-serif text-2xl font-bold text-white">Enquiry Received Successfully!</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {successData.message}
              </p>
            </div>

            <div className="bg-obsidian-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400">
              For urgent immediate setup, call Founder Perumal directly at <strong className="text-white">{COMPANY_DETAILS.contact.primaryPhone}</strong>
            </div>

            <button
              onClick={() => setSuccessData(null)}
              className="w-full py-3 rounded-xl font-bold text-obsidian-950 bg-gold-gradient uppercase tracking-wider"
            >
              Close & Continue Browsing
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
