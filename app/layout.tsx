import type { Metadata } from 'next';
import './globals.css';
import { COMPANY_DETAILS } from '@/lib/data';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: `${COMPANY_DETAILS.name} | Premier Event & Wedding Management Company India`,
  description: 'EventPlus is India’s leading event management & luxury wedding planning company. Expert in destination weddings, corporate conferences, product launches, live concerts, and grand celebrations.',
  keywords: [
    'Eventplus',
    'Eventplus India',
    'Event management company India',
    'Wedding planning company India',
    'Best event planners in India',
    'Destination wedding planner',
    'Corporate event management company',
    'Live concert management',
    'Luxury wedding decorators',
    'Event stage setup and lighting',
    'Celebrity event management',
    'Conference and exhibition planners'
  ],
  authors: [{ name: 'EventPlus India Team' }],
  creator: 'EventPlus India',
  publisher: 'EventPlus India',
  metadataBase: new URL('https://www.eventplus.co.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_DETAILS.name} | Leading Event & Wedding Planning Company in India`,
    description: 'Organizing powerful, luxury & unforgettable celebrations & corporate events across India. 10+ years of excellence, 500+ successful events.',
    url: 'https://www.eventplus.co.in',
    siteName: 'EventPlus',
    images: [
      {
        url: '/images/portfolio/kalai-event-01.jpeg',
        width: 1200,
        height: 630,
        alt: 'EventPlus India Premier Event Management',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_DETAILS.name} | Premier Event Management & Wedding Planner`,
    description: 'India’s premier event management company for corporate events, weddings, and live shows.',
    images: ['/images/portfolio/kalai-event-01.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventPlanningService',
    'name': COMPANY_DETAILS.name,
    'image': 'https://www.eventplus.co.in/wp-content/uploads/2024/04/eevntplus-social-share.png',
    '@id': 'https://www.eventplus.co.in',
    'url': 'https://www.eventplus.co.in',
    'telephone': COMPANY_DETAILS.contact.primaryPhone,
    'email': COMPANY_DETAILS.contact.primaryEmail,
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': COMPANY_DETAILS.contact.formattedAddress,
      'addressLocality': 'Chennai',
      'addressRegion': 'Tamil Nadu',
      'postalCode': '600116',
      'addressCountry': 'IN'
    },
    'founder': {
      '@type': 'Person',
      'name': 'Perumal & EventPlus Team',
      'jobTitle': 'Founders & Creative Directors'
    },
    'areaServed': [
      'India',
      'Chennai',
      'Mumbai',
      'Bengaluru',
      'Delhi NCR',
      'Hyderabad',
      'Goa',
      'Jaipur',
      'Coimbatore'
    ],
    'description': 'EventPlus is India’s leading Event & Wedding Planning Company, creating extraordinary celebrations, grand weddings, corporate launches, and live entertainment events.'
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-gold-400 selection:text-obsidian-950">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
