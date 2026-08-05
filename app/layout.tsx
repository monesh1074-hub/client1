import type { Metadata } from 'next';
import './globals.css';
import { COMPANY_DETAILS } from '@/lib/data';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: `${COMPANY_DETAILS.name} | Stage Architecture & Event Decor Powerhouse Tamil Nadu`,
  description: 'Kalai Decorators is South India’s premier stage architecture, political rally setup, Kollywood cinema set engineering, and luxury wedding decoration company founded by Perumal in 1999.',
  keywords: [
    'Kalai Decorators',
    'Kalai Decorators Chennai',
    'Stage Decorator Tamil Nadu',
    'VVIP Political Rally Stage Setup',
    'Cinema Audio Launch Set Production',
    'Master Movie Set Production',
    'Royal Wedding Mandapam Decorator',
    'Event Stage Engineering Chennai',
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
    title: `${COMPANY_DETAILS.name} | 27+ Years of Stage Architecture & Event Decor Mastery`,
    description: 'Specializing in engineered political mega rally stages, blockbuster cinema audio launches, and royal weddings across Tamil Nadu and South India.',
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
    title: `${COMPANY_DETAILS.name} | Premier Stage Architecture & Event Decorator`,
    description: 'South India’s trusted stage architecture power with 27+ years of operational excellence.',
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
    'image': 'https://www.kalaidecorators.in/images/master-set-vijay-perumal-thumbnail.jpg',
    '@id': 'https://www.kalaidecorators.in',
    'url': 'https://www.kalaidecorators.in',
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
    'description': 'Kalai Decorators is South India’s leading stage architecture and event decor engineering company, creating VVIP political rallies, cinema set productions, and royal wedding celebrations since 1999.'
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
