import type { Metadata } from 'next';
import './globals.css';
import { COMPANY_DETAILS } from '@/lib/data';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: `${COMPANY_DETAILS.name} | Event Management & Stage Architecture Company Chennai Tamil Nadu`,
  description: 'Kalai Decorators is South India’s premier Event Management and Stage Architecture company, specializing in VVIP political rallies, cinema set engineering, and luxury wedding decor since 1999.',
  keywords: [
    'Event Management',
    'Event Management Company',
    'Event Management Chennai',
    'Event Decorators Chennai',
    'Kalai Decorators',
    'Stage Decorator Tamil Nadu',
    'Wedding Event Management',
    'VVIP Political Rally Stage Setup',
    'Cinema Audio Launch Set Production',
    'Master Movie Set Production',
    'Royal Wedding Mandapam Decorator',
    'Event Stage Engineering Chennai',
    'Corporate Event Management',
    'Founder Perumal Decorator',
    'Alapakkam Chennai Event Decorators',
    'Heavy Steel Trussing Stage Setup',
    'State Convention Stage Decorators'
  ],
  authors: [{ name: 'Kalai Decorators Team' }],
  creator: 'Kalai Decorators',
  publisher: 'Kalai Decorators',
  metadataBase: new URL('https://www.kalaidecorators.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_DETAILS.name} | Event Management & Stage Architecture Mastery`,
    description: 'Premier Event Management & Stage Engineering company for political mega rallies, cinema audio launches, and luxury weddings across Tamil Nadu and South India.',
    url: 'https://www.kalaidecorators.in',
    siteName: 'Kalai Decorators',
    images: [
      {
        url: '/images/master-set-vijay-perumal-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalai Decorators Master Stage Setup with Founder Perumal',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_DETAILS.name} | Premier Event Management & Stage Decorator`,
    description: 'South India’s trusted event management & stage architecture powerhouse with 27+ years of operational excellence.',
    images: ['/images/master-set-vijay-perumal-thumbnail.jpg'],
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
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
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
    'logo': 'https://www.kalaidecorators.in/logo.jpeg',
    'image': 'https://www.kalaidecorators.in/images/master-set-vijay-perumal-thumbnail.jpg',
    '@id': 'https://www.kalaidecorators.in',
    'url': 'https://www.kalaidecorators.in',
    'telephone': COMPANY_DETAILS.contact.primaryPhone,
    'email': COMPANY_DETAILS.contact.primaryEmail,
    'priceRange': '₹₹₹',
    'serviceType': [
      'Event Management',
      'Event Decorators',
      'Stage Architecture',
      'Wedding Event Management',
      'Political Rally Stage Setup',
      'Cinema Set Production'
    ],
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
      'name': 'Founder Perumal',
      'jobTitle': 'Founder & Master Stage Architecture Director'
    },
    'areaServed': [
      'Tamil Nadu',
      'Chennai',
      'Madurai',
      'Coimbatore',
      'Trichy',
      'Salem',
      'Tirunelveli',
      'Vellore',
      'South India'
    ],
    'description': 'Kalai Decorators is South India’s leading event management and stage decor engineering company, creating VVIP political rallies, cinema set productions, and royal wedding celebrations since 1999.'
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.svg" />
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
