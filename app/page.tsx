import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroTrust from '@/components/IntroTrust';
import AutoScrollImageSection from '@/components/AutoScrollImageSection';
import AboutSection from '@/components/AboutSection';
import FounderSection from '@/components/FounderSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import PortfolioGallery from '@/components/PortfolioGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import TimelineSection from '@/components/TimelineSection';
import BookingForm from '@/components/BookingForm';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingActionDock from '@/components/FloatingActionDock';
import EventChatbot from '@/components/EventChatbot';
import CustomCursor from '@/components/CustomCursor';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-obsidian-950 dark:bg-obsidian-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 overflow-x-hidden relative transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AutoScrollImageSection />
      <IntroTrust />
      <AboutSection />
      <FounderSection />
      <WhyChooseUs />
      <ServicesSection />
      <FeaturedProjects />
      <PortfolioGallery />
      <TestimonialsSection />
      <StatsSection />
      <TimelineSection />
      <BookingForm />
      <ContactSection />
      <FAQSection />
      <Footer />
      <FloatingActionDock />
      <EventChatbot />
    </main>
  );
}

