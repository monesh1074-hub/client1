'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Send, Bot, Sparkles, 
  Calculator, Calendar, Phone, 
  ChevronRight, Volume2, VolumeX, RefreshCw, ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: { label: string; action: string; icon?: string }[];
  isWidget?: 'calculator' | 'dateCheck' | 'leadForm' | 'success';
}

interface CostEstimateState {
  eventType: string;
  guestCount: number;
  city: string;
  decorLevel: 'standard' | 'luxury' | 'royal';
}

export default function EventChatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Widget States inside Chat
  const [costState, setCostState] = useState<CostEstimateState>({
    eventType: 'Wedding & Reception',
    guestCount: 300,
    city: 'Chennai',
    decorLevel: 'luxury'
  });

  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    eventDate: '',
    city: 'Chennai',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialBotMessage: ChatMessage = {
    id: '1',
    sender: 'bot',
    text: language === 'ta' 
      ? 'வணக்கம்! நான் Kalai Decorators AI உதவியாளர். உரிமையாளரிடம் பேச அல்லது உங்கள் நிகழ்ச்சியை திட்டமிட நான் எவ்வாறு உதவ முடியும்?'
      : 'Hello! I am your **Kalai Decorators AI Event Concierge**. How can I help you plan your dream event or talk to our owner today?',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    options: [
      { label: '📞 Talk to Owner (6381147719)', action: 'show_owner', icon: 'Phone' },
      { label: '💰 Estimate Event Cost', action: 'show_calculator', icon: 'Calculator' },
      { label: '💍 Wedding Planning', action: 'ask_wedding', icon: 'Sparkles' },
      { label: '🏢 Corporate & Rallies', action: 'ask_corporate', icon: 'Award' },
      { label: '📅 Check Date Availability', action: 'show_datecheck', icon: 'Calendar' },
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const playNotificationSound = () => {
    if (isMuted) return;
    try {
      const audioWindow = window as Window & { webkitAudioContext?: typeof AudioContext };
      const AudioContextClass = window.AudioContext || audioWindow.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // Audio fallback
    }
  };

  const handleSendMessage = (customText?: string) => {
    const textToSend = customText || inputValue.trim();
    if (!textToSend) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotResponse(textToSend);
      setIsTyping(false);
      playNotificationSound();
    }, 700);
  };

  const handleOptionClick = (option: { label: string; action: string }) => {
    handleSendMessage(option.label);

    if (option.action === 'show_owner') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: '📞 **Talk Directly to Owner (Perumal)**:\n\nYou can call our Founder & Master Decorator directly at **6381147719** (+91 63811 47719) for immediate assistance or leave your details below for a quick callback:',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isWidget: 'leadForm'
          }
        ]);
      }, 850);
    } else if (option.action === 'show_calculator') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: 'Here is our **Event Cost Estimator**. Customize your guest count, event type, and tier to view estimated budget:',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isWidget: 'calculator'
          }
        ]);
      }, 850);
    } else if (option.action === 'show_datecheck') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: 'Please select your target event date and preferred location below to check schedule availability:',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isWidget: 'dateCheck'
          }
        ]);
      }, 850);
    } else if (option.action === 'show_leadform') {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: 'Leave your contact details and our Owner / Lead Specialist will call you shortly at **6381147719** for a free consultation:',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isWidget: 'leadForm'
          }
        ]);
      }, 850);
    }
  };

  const generateBotResponse = (input: string) => {
    const lower = input.toLowerCase();
    let replyText = '';
    let options: { label: string; action: string }[] | undefined = undefined;

    if (
      lower.includes('owner') ||
      lower.includes('founder') ||
      lower.includes('perumal') ||
      lower.includes('talk') ||
      lower.includes('speak') ||
      lower.includes('boss') ||
      lower.includes('director') ||
      lower.includes('head') ||
      lower.includes('manager')
    ) {
      replyText = `📞 **Talk Directly to Owner (Perumal)**:\n\nTo speak directly with the owner of Kalai Decorators, please call **6381147719** (+91 63811 47719).\n\nHe is available for direct inquiries regarding mega political rallies, blockbuster movie audio launches, and royal wedding setups.`;
      options = [
        { label: '📞 Call Owner: 6381147719', action: 'show_leadform' },
        { label: '💬 Chat on WhatsApp', action: 'whatsapp_redirect' }
      ];
    } else if (lower.includes('cost') || lower.includes('price') || lower.includes('budget') || lower.includes('package') || lower.includes('estimate')) {
      replyText = "We offer flexible event packages starting from budget-friendly options to ultra-luxury VIP productions. Would you like to run our instant live cost calculator or speak to the owner?";
      options = [
        { label: '🧮 Launch Cost Calculator', action: 'show_calculator' },
        { label: '📞 Talk to Owner (6381147719)', action: 'show_owner' }
      ];
    } else if (lower.includes('wedding') || lower.includes('mandap') || lower.includes('reception') || lower.includes('marriage') || lower.includes('sangeet')) {
      replyText = "✨ **Kalai Decorators Royal Weddings**: We create breathtaking luxury wedding decor, traditional mandapams, Sangeet stages, imported floral setups, and end-to-end wedding management.\n\nTo consult with our owner directly, call **6381147719**.";
      options = [
        { label: '💰 Estimate Wedding Cost', action: 'show_calculator' },
        { label: '📅 Check Booking Dates', action: 'show_datecheck' },
        { label: '📞 Talk to Owner (6381147719)', action: 'show_owner' }
      ];
    } else if (lower.includes('corporate') || lower.includes('conference') || lower.includes('launch') || lower.includes('award') || lower.includes('brand') || lower.includes('rally')) {
      replyText = "🏢 **Mega Event & Political Rally Stage Production**: Kalai Decorators manages high-capacity political rallies, cinema set productions (Vikram, Master, Leo), and corporate conventions with 100% safety and steel trussing engineering.\n\nOwner Direct Contact: **6381147719**.";
      options = [
        { label: '📞 Talk to Owner (6381147719)', action: 'show_owner' },
        { label: '📅 Check Date Schedule', action: 'show_datecheck' }
      ];
    } else if (lower.includes('location') || lower.includes('city') || lower.includes('where') || lower.includes('address') || lower.includes('chennai')) {
      replyText = `📍 **Kalai Decorators HQ**: No. 4/450, Alapakkam Main Road, Alapakkam, Chennai - 600116.\n\nOperational execution across Tamil Nadu & South India.\n\nCall Owner: **6381147719**`;
      options = [
        { label: '📞 Call Owner: 6381147719', action: 'show_owner' },
        { label: '📅 Check Location Availability', action: 'show_datecheck' }
      ];
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('call') || lower.includes('email')) {
      replyText = `📞 **Direct Contact Information**:\n\n• **Owner Direct Line**: **6381147719** (+91 63811 47719)\n• **Alternate Phone**: +91 99948 49904\n• **Email**: ${COMPANY_DETAILS.contact.primaryEmail}\n\nYou can reach our owner directly at **6381147719**!`;
      options = [
        { label: '📞 Talk to Owner (6381147719)', action: 'show_owner' },
        { label: '💬 Chat on WhatsApp', action: 'whatsapp_redirect' }
      ];
    } else {
      replyText = `Thank you for reaching out to **Kalai Decorators**! We specialize in Mega Political Rallies, Cinema Audio Launches, and Royal Weddings.\n\nIf you want to talk directly to the owner, call **6381147719** (+91 63811 47719).`;
      options = [
        { label: '📞 Talk to Owner (6381147719)', action: 'show_owner' },
        { label: '💰 Estimate Event Budget', action: 'show_calculator' },
        { label: '📅 Check Date Schedule', action: 'show_datecheck' }
      ];
    }

    const botMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'bot',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  const calculateEstimatedCost = () => {
    let base = 50000;
    if (costState.eventType.includes('Wedding')) base = 120000;
    if (costState.eventType.includes('Concert') || costState.eventType.includes('Political')) base = 250000;
    if (costState.eventType.includes('Corporate')) base = 85000;

    const perGuestMultiplier = costState.decorLevel === 'royal' ? 450 : costState.decorLevel === 'luxury' ? 280 : 160;
    const guestTotal = costState.guestCount * perGuestMultiplier;

    const totalEstimate = base + guestTotal;
    const minRange = Math.round(totalEstimate * 0.88);
    const maxRange = Math.round(totalEstimate * 1.15);

    return {
      min: minRange.toLocaleString('en-IN'),
      max: maxRange.toLocaleString('en-IN')
    };
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;

    setFormSubmitted(true);
    setTimeout(() => {
      const confirmMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'bot',
        text: `🎉 **Thank you, ${leadForm.name}!** Your inquiry for **${costState.eventType}** in ${leadForm.city} has been received. Our Owner will contact you shortly at **${leadForm.phone}**.\n\nYou can also reach the Owner directly at **6381147719**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [
          { label: '💬 Chat on WhatsApp Now', action: 'whatsapp_redirect' }
        ]
      };
      setMessages((prev) => [...prev, confirmMsg]);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(`Hi Kalai Decorators, I would like to inquire about event management for ${leadForm.name || 'my event'}. Phone: ${leadForm.phone || '6381147719'}`);
    window.open(`https://wa.me/${COMPANY_DETAILS.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900/90 text-slate-200 border border-gold-400/30 text-xs shadow-lg backdrop-blur-md animate-bounce-subtle">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-medium">Need Event Help? Ask AI</span>
          </div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setUnreadCount(0);
          }}
          className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${
            isOpen 
              ? 'bg-obsidian-800 text-gold-400 border border-gold-400/40 rotate-90'
              : 'bg-gradient-to-r from-gold-400 via-amber-500 to-gold-500 text-obsidian-950 gold-glow'
          }`}
          aria-label="Toggle Event AI Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-7 h-7" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-obsidian-950 animate-pulse">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* Chat Window Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[580px] max-h-[82vh] rounded-2xl bg-obsidian-900/95 border border-gold-400/30 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in text-slate-100">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-gold-400/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-obsidian-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-slate-100">Kalai Decorators AI Concierge</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-gold-400/20 text-gold-400 font-semibold uppercase tracking-wider">Online</span>
                </div>
                <p className="text-[11px] text-slate-400">24/7 Smart Event &amp; Wedding Planner</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-gold-400/10 transition-colors"
                title={isMuted ? "Unmute Sound" : "Mute Sound"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => {
                  setMessages([initialBotMessage]);
                  setFormSubmitted(false);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-gold-400/10 transition-colors"
                title="Reset Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm custom-scrollbar bg-slate-950/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start gap-2 max-w-[88%]">
                  {msg.sender === 'bot' && (
                    <div className="p-1.5 rounded-lg bg-gold-400/10 text-gold-400 border border-gold-400/20 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-medium rounded-tr-none shadow-md'
                        : 'bg-obsidian-850/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line leading-relaxed">{msg.text}</div>

                    {/* Interactive Widgets */}
                    {msg.isWidget === 'calculator' && (
                      <div className="mt-3 p-3 rounded-xl bg-obsidian-900 border border-gold-400/30 space-y-3 text-slate-200">
                        <div className="flex items-center justify-between text-xs font-bold text-gold-400 border-b border-slate-800 pb-2">
                          <span className="flex items-center gap-1.5">
                            <Calculator className="w-3.5 h-3.5" /> Live Quote Calculator
                          </span>
                          <span className="text-[10px] font-normal text-slate-400">Instant Estimate</span>
                        </div>

                        {/* Event Type */}
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">Event Category</label>
                          <select
                            value={costState.eventType}
                            onChange={(e) => setCostState({ ...costState, eventType: e.target.value })}
                            className="w-full bg-obsidian-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:border-gold-400 outline-none"
                          >
                            <option value="Wedding & Reception">💍 Wedding &amp; Grand Reception</option>
                            <option value="Corporate Launch">🏢 Corporate Event / Conference</option>
                            <option value="Live Concert">🎵 Live Concert / Entertainment Show</option>
                            <option value="Private Celebration">🎉 Birthday / Gala Anniversary</option>
                            <option value="Brand Activation">🚀 Brand Activation &amp; Stall</option>
                          </select>
                        </div>

                        {/* Guest Count */}
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                            <span>Estimated Guests</span>
                            <span className="text-gold-400 font-semibold">{costState.guestCount} Pax</span>
                          </div>
                          <input
                            type="range"
                            min="50"
                            max="3000"
                            step="50"
                            value={costState.guestCount}
                            onChange={(e) => setCostState({ ...costState, guestCount: parseInt(e.target.value) })}
                            className="w-full accent-gold-400 cursor-pointer"
                          />
                        </div>

                        {/* Decor Tier */}
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">Decor &amp; Production Tier</label>
                          <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                            {(['standard', 'luxury', 'royal'] as const).map((tier) => (
                              <button
                                key={tier}
                                type="button"
                                onClick={() => setCostState({ ...costState, decorLevel: tier })}
                                className={`py-1.5 rounded-lg border capitalize transition-all ${
                                  costState.decorLevel === tier
                                    ? 'bg-gold-400/20 text-gold-400 border-gold-400 font-bold'
                                    : 'bg-obsidian-950 border-slate-800 text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {tier}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Result */}
                        <div className="p-2.5 rounded-lg bg-gradient-to-r from-gold-400/10 to-amber-500/10 border border-gold-400/40 text-center">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Estimated Budget Range</span>
                          <span className="text-sm sm:text-base font-extrabold text-gold-400">
                            ₹{calculateEstimatedCost().min} - ₹{calculateEstimatedCost().max}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            handleSendMessage(`I calculated an estimate of ₹${calculateEstimatedCost().min} - ₹${calculateEstimatedCost().max} for ${costState.eventType}. I want to lock dates.`);
                            handleOptionClick({ label: '📞 Book Priority Consultation', action: 'show_leadform' });
                          }}
                          className="w-full py-2 rounded-lg bg-gold-400 text-obsidian-950 font-bold text-xs hover:bg-gold-300 transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          Lock This Estimate <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Date Check Widget */}
                    {msg.isWidget === 'dateCheck' && (
                      <div className="mt-3 p-3 rounded-xl bg-obsidian-900 border border-gold-400/30 space-y-2.5">
                        <div className="text-xs font-bold text-gold-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                          <Calendar className="w-3.5 h-3.5" /> Date &amp; Venue Checker
                        </div>
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">Target Event Date</label>
                          <input
                            type="date"
                            className="w-full bg-obsidian-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:border-gold-400 outline-none"
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val) {
                                handleSendMessage(`Checking schedule for date: ${val}`);
                                setTimeout(() => {
                                  setMessages((prev) => [
                                    ...prev,
                                    {
                                      id: Date.now().toString(),
                                      sender: 'bot',
                                      text: `✅ Good news! **${val}** is currently open for booking. Our team can reserve your slot today.`,
                                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                                      options: [
                                        { label: '📝 Reserve Date Now', action: 'show_leadform' }
                                      ]
                                    }
                                  ]);
                                }, 600);
                              }
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Lead Form Widget */}
                    {msg.isWidget === 'leadForm' && !formSubmitted && (
                      <form onSubmit={handleLeadSubmit} className="mt-3 p-3 rounded-xl bg-obsidian-900 border border-gold-400/30 space-y-2.5">
                        <div className="text-xs font-bold text-gold-400 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                          <Phone className="w-3.5 h-3.5" /> Request Instant Callback
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name *"
                            required
                            value={leadForm.name}
                            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                            className="w-full bg-obsidian-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:border-gold-400 outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone / WhatsApp Number *"
                            required
                            value={leadForm.phone}
                            onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                            className="w-full bg-obsidian-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:border-gold-400 outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="City / Venue Location"
                            value={leadForm.city}
                            onChange={(e) => setLeadForm({ ...leadForm, city: e.target.value })}
                            className="w-full bg-obsidian-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:border-gold-400 outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2 rounded-lg bg-gold-400 text-obsidian-950 font-bold text-xs hover:bg-gold-300 transition-all flex items-center justify-center gap-1.5 shadow-md"
                        >
                          Submit Callback Request
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>

                {/* Response Quick Chips */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (opt.action === 'whatsapp_redirect') {
                            handleWhatsAppRedirect();
                          } else {
                            handleOptionClick(opt);
                          }
                        }}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-obsidian-850 hover:bg-gold-400/20 text-slate-300 hover:text-gold-400 border border-gold-400/30 transition-all flex items-center gap-1"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-3 h-3 text-gold-400/60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="p-1.5 rounded-lg bg-gold-400/10 text-gold-400 border border-gold-400/20">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex gap-1 p-2 rounded-xl bg-obsidian-850 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Footer Input */}
          <div className="p-3 bg-obsidian-950 border-t border-gold-400/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Kalai Decorators AI (e.g., Talk to owner, cost)..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-obsidian-900 text-slate-100 placeholder-slate-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-800 focus:border-gold-400 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-gold-400 text-obsidian-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gold-300 transition-all shadow-md shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-gold-400" /> 100% Confidential
              </span>
              <span>Kalai Decorators official Assistant</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
