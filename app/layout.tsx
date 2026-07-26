import type { Metadata } from 'next';
import './globals.css';
import { COMPANY_DETAILS } from '@/lib/data';

export const metadata: Metadata = {
  title: `${COMPANY_DETAILS.name} | Premier Stage Setup & Event Decorators Chennai Tamil Nadu`,
  description: 'Kalai Decorators (Founded by Perumal) is South India’s top-rated event stage setup & decoration specialist. Expert in political mega rallies, Kollywood movie audio launches, royal wedding mandapams, and government ceremonies across Chennai, Coimbatore, Madurai & Tamil Nadu.',
  keywords: [
    'Kalai Decorators',
    'Kalai Decorators Chennai',
    'Perumal Kalai Decorators',
    'Kalai Decorators Alapakkam',
    'Event management company',
    'Event management services',
    'Event planners Chennai',
    'Top event management companies in Chennai',
    'Best event management company Tamil Nadu',
    'Event management near me',
    'Professional event management services',
    'Full service event management company',
    'Event coordination and execution',
    'Event management at lowest price',
    'Event management best deal Chennai',
    'Best budget event management company',
    'Low cost event management Chennai',
    'Affordable event planners in Tamil Nadu',
    'Cheap and best event management Chennai',
    'Budget friendly event decorators',
    'Luxury event management Tamil Nadu',
    'Premium event management services',
    'Corporate event management Chennai',
    'Corporate event planners Tamil Nadu',
    'Business event management company',
    'Product launch event management',
    'Award ceremony event management',
    'Seminar and conference event planners',
    'Corporate stage setup decorators',
    'Trade show event planners Chennai',
    'Movies event management Chennai',
    'Cinema audio release event planners',
    'Film promo event management',
    'Kollywood audio launch stage setup',
    'Celebrity event management Chennai',
    'Concert and live show event management',
    'Music festival stage setup decorators',
    'Political event management company',
    'Political rally stage setup Chennai',
    'Government function stage setup Tamil Nadu',
    'Large scale public event management',
    'VIP podium setup Chennai',
    'Public address rally event planners',
    'Heavy truss stage construction Tamil Nadu',
    'Wedding event management best packages',
    'Royal wedding mandapam decorators Chennai',
    'Marriage event planners Chennai',
    'Destination wedding event management',
    'Reception stage decoration Chennai',
    'Temple festival stage decoration Chennai',
    'Cultural event management Tamil Nadu',
    'Traditional event stage decor',
    'Stage Decorators Chennai',
    'Best stage decorators in Chennai',
    'Affordable stage decorators Chennai',
    'Low price stage setup decorators',
    'Stage Production Company Chennai',
    'Mega Stage Setup South India',
    'Event stage setup price Chennai',
    'Overnight stage setup Chennai',
    'Wedding decorators near me Chennai',
    'Audio visual event management',
    'LED wall and lighting stage setup',
    'Alapakkam Event Decorators',
    'Coimbatore political rally stage setup',
    'Madurai event stage decorators',
    'Trichy wedding mandapam decorators',
    'Salem stage setup contractors'
  ],
  authors: [{ name: 'Perumal (Founder, Kalai Decorators)' }],
  creator: 'Kalai Decorators',
  publisher: 'Kalai Decorators',
  metadataBase: new URL('https://www.kalaidecorators.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_DETAILS.name} | Master Stage Setup & Event Decorators Chennai`,
    description: 'Transforming political rallies, cinema audio launches, royal weddings, and government ceremonies into architectural masterworks. 15+ years of excellence, 1,200+ completed events across Tamil Nadu.',
    url: 'https://www.kalaidecorators.com',
    siteName: 'Kalai Decorators',
    images: [
      {
        url: '/images/portfolio/kalai-event-01.jpeg',
        width: 1200,
        height: 630,
        alt: 'Kalai Decorators Political Mega Rally Stage Setup Chennai Tamil Nadu',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_DETAILS.name} | Premier Event Stage Setup`,
    description: 'South India’s trusted stage setup company for political rallies, movie audio launches & royal weddings.',
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

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventPlanningService',
    'name': 'Kalai Decorators',
    'image': 'https://www.kalaidecorators.com/images/portfolio/kalai-event-01.jpeg',
    '@id': 'https://www.kalaidecorators.com',
    'url': 'https://www.kalaidecorators.com',
    'telephone': COMPANY_DETAILS.contact.primaryPhone,
    'email': COMPANY_DETAILS.contact.primaryEmail,
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'No. 2/11, Jayalakshmi Nagar, Ganapathi Street, Alapakkam',
      'addressLocality': 'Chennai',
      'addressRegion': 'Tamil Nadu',
      'postalCode': '600116',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 13.0458,
      'longitude': 80.1652
    },
    'founder': {
      '@type': 'Person',
      'name': 'Perumal',
      'jobTitle': 'Founder & Master Creative Director'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'areaServed': [
      'Chennai',
      'Coimbatore',
      'Madurai',
      'Trichy',
      'Salem',
      'Tirunelveli',
      'Tamil Nadu',
      'South India'
    ],
    'sameAs': [
      COMPANY_DETAILS.socialLinks.whatsapp,
      COMPANY_DETAILS.socialLinks.instagram
    ],
    'description': 'Kalai Decorators (Founder: Perumal) is South India’s premier event stage setup & decoration company specializing in political mega rallies, Kollywood cinema audio launches, royal weddings, and government ceremonies across Chennai & Tamil Nadu.'
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian-950 text-slate-100 font-sans antialiased selection:bg-gold-400 selection:text-obsidian-950">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
