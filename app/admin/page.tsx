'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lock, LogOut, Search, RefreshCw, Phone, MessageSquare, 
  MapPin, AlertCircle, Trash2, FileText, Sparkles, Eye, X, Calendar, Tag, DollarSign 
} from 'lucide-react';
import { EnquiryRecord } from '@/lib/enquiries-store';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);
  const [selectedEnquiryForNotes, setSelectedEnquiryForNotes] = useState<EnquiryRecord | null>(null);
  const [noteInput, setNoteInput] = useState<string>('');

  // Check initial login state
  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } fontally: {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passcode }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsAuthenticated(true);
        fetchEnquiries();
      } else {
        setLoginError(data.error || 'Invalid passcode.');
      }
    } catch {
      setLoginError('Error authenticating with server.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: EnquiryRecord['status']) => {
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(prev => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch {
      console.error('Failed to update status');
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiryForNotes) return;
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedEnquiryForNotes.id, adminNotes: noteInput }),
      });

      if (res.ok) {
        setEnquiries(prev => prev.map(e => e.id === selectedEnquiryForNotes.id ? { ...e, adminNotes: noteInput } : e));
        if (selectedEnquiry && selectedEnquiry.id === selectedEnquiryForNotes.id) {
          setSelectedEnquiry(prev => prev ? { ...prev, adminNotes: noteInput } : null);
        }
        setSelectedEnquiryForNotes(null);
      }
    } catch {
      console.error('Failed saving notes');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setEnquiries(prev => prev.filter(e => e.id !== id));
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry(null);
        }
      }
    } catch {
      console.error('Failed deleting enquiry');
    }
  };

  // Filtered List
  const filteredEnquiries = enquiries.filter(item => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      item.name.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.venue.toLowerCase().includes(q) ||
      item.eventType.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q);

    return matchesStatus && matchesSearch;
  });

  // Metrics
  const totalCount = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'new').length;
  const contactedCount = enquiries.filter(e => e.status === 'contacted').length;
  const confirmedCount = enquiries.filter(e => e.status === 'confirmed').length;

  // Render Passcode Gate if not logged in
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-obsidian-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-obsidian-900 border-2 border-gold-400/40 rounded-3xl p-8 shadow-2xl space-y-6 gold-glow">
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-obsidian-850 border border-gold-400/40 flex items-center justify-center mx-auto p-2">
              <Image src="/images/murugan-brand.svg" alt="Murugan Brand Icon" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-white">Kalai Decorators Admin</h1>
            <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
              Management & Event Enquiry Portal
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Enter Admin Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Passcode (Default: kalai2026)"
                  className="w-full bg-obsidian-950 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none pr-10"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-4" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-obsidian-950 bg-gold-gradient hover:opacity-95 transition-all shadow-xl gold-glow uppercase tracking-wider"
            >
              {loggingIn ? 'Authenticating...' : 'Access Admin Portal'}
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-slate-400 hover:text-gold-400 underline underline-offset-4">
              &larr; Back to Main Website
            </Link>
          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-obsidian-950 text-slate-100 pb-20">
      
      {/* Top Admin Header */}
      <header className="bg-obsidian-900 border-b border-gold-500/20 py-4 px-4 sm:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-obsidian-850 p-1 border border-gold-400">
              <Image src="/images/murugan-brand.svg" alt="Kalai Decorators Logo" width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-white leading-tight">
                Kalai Decorators <span className="text-gold-400">Executive Panel</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium">Founder Perumal & Lead Management Dashboard</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={fetchEnquiries}
              className="px-3.5 py-2 rounded-lg bg-obsidian-850 border border-slate-800 text-slate-300 hover:text-white hover:border-gold-400 text-xs font-semibold flex items-center space-x-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-gold-400 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Enquiries</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-lg bg-obsidian-850 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold hidden sm:flex items-center"
            >
              View Website &rarr;
            </Link>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-3.5 py-2 rounded-lg bg-red-950/60 border border-red-800/50 text-red-300 hover:bg-red-900 text-xs font-semibold flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit Admin</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-obsidian-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-semibold">Total Enquiries</div>
            <div className="text-3xl font-serif font-bold text-white">{totalCount}</div>
            <div className="text-[11px] text-slate-500">All-time booking leads</div>
          </div>

          <div className="bg-obsidian-900 border border-blue-500/30 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-blue-400 uppercase font-semibold flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5 animate-ping"></span>
              New Unread
            </div>
            <div className="text-3xl font-serif font-bold text-blue-400">{newCount}</div>
            <div className="text-[11px] text-slate-500">Pending initial response</div>
          </div>

          <div className="bg-obsidian-900 border border-amber-500/30 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-amber-400 uppercase font-semibold">In Discussion</div>
            <div className="text-3xl font-serif font-bold text-amber-400">{contactedCount}</div>
            <div className="text-[11px] text-slate-500">Quotes sent & follow up</div>
          </div>

          <div className="bg-obsidian-900 border border-emerald-500/30 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-emerald-400 uppercase font-semibold">Confirmed Events</div>
            <div className="text-3xl font-serif font-bold text-emerald-400">{confirmedCount}</div>
            <div className="text-[11px] text-slate-500">Booked stage setups</div>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="bg-obsidian-900 border border-slate-800 p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Status Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['all', 'new', 'contacted', 'confirmed', 'archived'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                  statusFilter === status
                    ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-md gold-glow'
                    : 'bg-obsidian-850 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {status === 'all' ? 'All Leads' : status}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client name, phone, venue..."
              className="w-full bg-obsidian-950 border border-slate-800 focus:border-gold-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none pr-9"
            />
            <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
          </div>

        </div>

        {/* Enquiries List */}
        <div className="space-y-4">
          {filteredEnquiries.length === 0 ? (
            <div className="bg-obsidian-900 border border-slate-800 p-12 rounded-2xl text-center space-y-3">
              <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
              <div className="text-base font-bold text-white">No enquiries match your filter</div>
              <p className="text-xs text-slate-400">Incoming booking requests submitted via the website form will appear here automatically.</p>
            </div>
          ) : (
            filteredEnquiries.map((record) => {
              const cleanPhone = record.phone.replace(/\D/g, '');
              const cleanWhatsapp = (record.whatsapp || record.phone).replace(/\D/g, '');

              return (
                <div
                  key={record.id}
                  className={`bg-obsidian-900 border rounded-2xl p-6 transition-all space-y-4 ${
                    record.status === 'new' 
                      ? 'border-gold-500/50 shadow-xl gold-glow bg-obsidian-900/90' 
                      : 'border-slate-800'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono font-bold text-gold-400 px-2.5 py-1 rounded-md bg-gold-500/10 border border-gold-500/20">
                        #{record.id}
                      </span>
                      <span className="text-xs text-slate-400">
                        Received {new Date(record.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                      </span>
                    </div>

                    {/* Status Dropdown */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-400 font-medium">Status:</span>
                      <select
                        value={record.status}
                        onChange={(e) => handleStatusChange(record.id, e.target.value as EnquiryRecord['status'])}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border outline-none cursor-pointer ${
                          record.status === 'new' ? 'bg-blue-950 text-blue-300 border-blue-800' :
                          record.status === 'contacted' ? 'bg-amber-950 text-amber-300 border-amber-800' :
                          record.status === 'confirmed' ? 'bg-emerald-950 text-emerald-300 border-emerald-800' :
                          'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        <option value="new">🔵 New Lead</option>
                        <option value="contacted">🟡 Contacted</option>
                        <option value="confirmed">🟢 Confirmed</option>
                        <option value="archived">⚪ Archived</option>
                      </select>
                    </div>
                  </div>

                  {/* Main Grid Info (Clickable to open full details modal) */}
                  <div 
                    onClick={() => setSelectedEnquiry(record)}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs cursor-pointer hover:bg-gold-500/5 p-3 rounded-xl transition-colors border border-transparent hover:border-gold-500/20"
                    title="Click to view full client event requirements and details"
                  >
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase text-[10px] tracking-wider">Client Name</span>
                      <span className="text-sm font-bold text-white group-hover:text-gold-300 flex items-center">
                        {record.name}
                        <Eye className="w-3.5 h-3.5 text-gold-400 ml-2 opacity-75" />
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-semibold uppercase text-[10px] tracking-wider">Event Category</span>
                      <span className="text-xs font-bold text-gold-400">{record.eventType}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-semibold uppercase text-[10px] tracking-wider">Target Event Date</span>
                      <span className="text-xs font-semibold text-white">{record.eventDate}</span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-semibold uppercase text-[10px] tracking-wider">Budget Range</span>
                      <span className="text-xs font-semibold text-emerald-400">{record.budget}</span>
                    </div>
                  </div>

                  {/* Venue & Message (Clickable) */}
                  <div 
                    onClick={() => setSelectedEnquiry(record)}
                    className="bg-obsidian-950 p-3.5 rounded-xl border border-slate-850 space-y-2 text-xs cursor-pointer hover:border-gold-500/30 transition-colors"
                    title="Click to view full client event requirements and details"
                  >
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 mr-1.5 shrink-0" />
                      <strong className="mr-1">Venue / City:</strong> {record.venue}
                    </div>
                    {record.message && (
                      <div className="text-slate-400 italic pt-1 border-t border-slate-850">
                        &ldquo;{record.message}&rdquo;
                      </div>
                    )}
                  </div>

                  {/* Admin Notes Preview */}
                  {record.adminNotes && (
                    <div className="text-xs bg-gold-500/10 border border-gold-500/20 p-3 rounded-xl text-gold-200">
                      <strong className="text-gold-400">Admin Notes:</strong> {record.adminNotes}
                    </div>
                  )}

                  {/* Bottom Actions Bar */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    
                    {/* Direct Contact Triggers */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedEnquiry(record)}
                        className="px-3.5 py-2 rounded-lg bg-obsidian-850 border border-gold-400/40 text-gold-300 hover:text-white hover:bg-obsidian-800 text-xs font-bold flex items-center space-x-1.5 shadow-md"
                      >
                        <Eye className="w-3.5 h-3.5 text-gold-400" />
                        <span>View Full Details</span>
                      </button>

                      <a
                        href={`tel:${cleanPhone}`}
                        className="px-3.5 py-2 rounded-lg bg-gold-gradient text-obsidian-950 text-xs font-bold flex items-center space-x-1.5 shadow-md gold-glow"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {record.phone}</span>
                      </a>

                      <a
                        href={`https://wa.me/${cleanWhatsapp}?text=Hello%20${encodeURIComponent(record.name)},%20this%20is%20Perumal%20from%20Kalai%20Decorators%20regarding%20your%20${encodeURIComponent(record.eventType)}%20enquiry.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold flex items-center space-x-1.5 hover:bg-emerald-900"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>

                    {/* Notes & Delete */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedEnquiryForNotes(record);
                          setNoteInput(record.adminNotes || '');
                        }}
                        className="px-3 py-2 rounded-lg bg-obsidian-850 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1"
                      >
                        <FileText className="w-3.5 h-3.5 text-gold-400" />
                        <span>{record.adminNotes ? 'Edit Notes' : '+ Add Notes'}</span>
                      </button>

                      <button
                        onClick={() => handleDelete(record.id)}
                        className="p-2 rounded-lg bg-obsidian-850 border border-slate-800 text-red-400 hover:bg-red-950 hover:border-red-800 transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

      {/* FULL ENQUIRY DETAIL MODAL */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-obsidian-900 border-2 border-gold-400 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl gold-glow relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-obsidian-950">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold text-gold-400 px-3 py-1 rounded-md bg-gold-500/10 border border-gold-500/30">
                  #{selectedEnquiry.id}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">{selectedEnquiry.name}</h3>
                  <div className="text-xs text-slate-400">
                    Submitted on {new Date(selectedEnquiry.createdAt).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white bg-obsidian-850 border border-slate-800 hover:border-gold-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Event Logistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-obsidian-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <Tag className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
                    Event Category
                  </div>
                  <div className="text-sm font-bold text-gold-400">{selectedEnquiry.eventType}</div>
                </div>

                <div className="bg-obsidian-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <Calendar className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
                    Target Event Date
                  </div>
                  <div className="text-sm font-bold text-white">{selectedEnquiry.eventDate}</div>
                </div>

                <div className="bg-obsidian-950 p-4 rounded-xl border border-slate-800 space-y-1 sm:col-span-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
                    Event Venue / City Location
                  </div>
                  <div className="text-sm font-bold text-slate-200">{selectedEnquiry.venue}</div>
                </div>

                <div className="bg-obsidian-950 p-4 rounded-xl border border-slate-800 space-y-1 sm:col-span-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                    Estimated Budget Range
                  </div>
                  <div className="text-sm font-bold text-emerald-400">{selectedEnquiry.budget}</div>
                </div>
              </div>

              {/* Client Contact Info */}
              <div className="bg-obsidian-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider border-b border-slate-850 pb-2">
                  Client Contact Channels
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <strong className="text-slate-400 block mb-0.5">Primary Phone:</strong>
                    <a href={`tel:${selectedEnquiry.phone.replace(/\D/g, '')}`} className="font-bold text-white hover:text-gold-400 text-sm">
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                  <div>
                    <strong className="text-slate-400 block mb-0.5">WhatsApp Number:</strong>
                    <a 
                      href={`https://wa.me/${(selectedEnquiry.whatsapp || selectedEnquiry.phone).replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-emerald-400 hover:underline text-sm"
                    >
                      {selectedEnquiry.whatsapp || selectedEnquiry.phone}
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <strong className="text-slate-400 block mb-0.5">Client Email:</strong>
                    <a href={`mailto:${selectedEnquiry.email}`} className="font-medium text-slate-200 hover:text-gold-400">
                      {selectedEnquiry.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Event Requirements & Message */}
              {selectedEnquiry.message && (
                <div className="bg-obsidian-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Special Requirements & Message
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed italic bg-obsidian-900 p-3.5 rounded-xl border border-slate-850">
                    &ldquo;{selectedEnquiry.message}&rdquo;
                  </p>
                </div>
              )}

              {/* Internal Admin Notes */}
              <div className="bg-obsidian-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    Internal Management Notes
                  </h4>
                  <button
                    onClick={() => {
                      setSelectedEnquiryForNotes(selectedEnquiry);
                      setNoteInput(selectedEnquiry.adminNotes || '');
                    }}
                    className="text-[11px] text-gold-300 hover:underline"
                  >
                    Edit Notes
                  </button>
                </div>
                <div className="text-xs text-slate-300 bg-obsidian-900 p-3.5 rounded-xl border border-slate-850">
                  {selectedEnquiry.adminNotes || 'No internal notes added yet.'}
                </div>
              </div>

            </div>

            {/* Modal Footer Triggers */}
            <div className="p-5 border-t border-slate-800 bg-obsidian-950 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <a
                  href={`tel:${selectedEnquiry.phone.replace(/\D/g, '')}`}
                  className="px-4 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 text-xs font-bold shadow-md gold-glow flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Client</span>
                </a>

                <a
                  href={`https://wa.me/${(selectedEnquiry.whatsapp || selectedEnquiry.phone).replace(/\D/g, '')}?text=Hello%20${encodeURIComponent(selectedEnquiry.name)},%20this%20is%20Perumal%20from%20Kalai%20Decorators%20regarding%20your%20${encodeURIComponent(selectedEnquiry.eventType)}%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold flex items-center space-x-1.5 hover:bg-emerald-900"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2.5 rounded-xl bg-obsidian-850 text-slate-300 text-xs font-semibold border border-slate-800"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Admin Notes Edit Modal */}
      {selectedEnquiryForNotes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/95 backdrop-blur-xl">
          <div className="bg-obsidian-900 border border-gold-500/40 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-white">
              Internal Admin Notes ({selectedEnquiryForNotes.name})
            </h3>
            
            <textarea
              rows={4}
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="e.g. Quoted ₹2.5 Lakhs for stage & lighting. Follow up on Tuesday..."
              className="w-full bg-obsidian-950 border border-slate-800 focus:border-gold-400 rounded-xl p-3 text-xs text-white outline-none"
            ></textarea>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setSelectedEnquiryForNotes(null)}
                className="px-4 py-2 rounded-xl bg-obsidian-850 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNotes}
                className="px-5 py-2 rounded-xl bg-gold-gradient text-obsidian-950 text-xs font-bold"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
