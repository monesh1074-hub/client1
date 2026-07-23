export interface PortfolioItem {
  id: string;
  title: string;
  category: 'political' | 'movies' | 'weddings' | 'government' | 'temple' | 'corporate';
  categoryLabel: string;
  image: string;
  gallery?: string[];
  location: string;
  scale: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  idealFor: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: number;
  eventCategory: string;
  avatarImage?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CompanyDetails {
  name: string;
  tagline: string;
  foundedYear: number;
  yearsOfExperience: number;
  founder: {
    name: string;
    role: string;
    experience: string;
    bio: string;
    specialties: string[];
    movieSetHighlights: string[];
    celebrityWork: string[];
    photoUrl: string;
  };
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    altPhone: string;
    email: string;
    primaryEmail: string;
    altEmail: string;
    ownerEmails: string[];
    whatsappNumber: string;
    formattedAddress: string;
    googleMapsUrl: string;
    officeAddress: {
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    serviceAreas: string[];
  };
  socialLinks: {
    whatsapp: string;
    whatsappAlt: string;
    instagram: string;
  };
}

export const COMPANY_DETAILS: CompanyDetails = {
  name: "Kalai Decorators",
  tagline: "27+ Years of High-Capacity Event Staging & Cinema Set Mastery (Est. 1999)",
  foundedYear: 1999,
  yearsOfExperience: 27,
  founder: {
    name: "Perumal",
    role: "Founder & Master Stage Decorator",
    experience: "27+ Years of Industry Leadership",
    bio: "Under the visionary leadership of Founder Perumal, Kalai Decorators has spent over 27 years transforming stadiums, public grounds, and venues across South India into majestic, high-capacity event arenas. Specializing in engineered political mega-rally stages and Kollywood blockbuster cinema set productions.",
    specialties: [
      "Engineered Steel Trussing & Heavy Load Stage Decks",
      "VVIP Bulletproof Speaker Podiums & Political Rally Arenas",
      "Blockbuster Film Set Production & Audio Launch Arenas (Vikram, Master, Leo, Kaithi)",
      "Royal Wedding Mandapams with Imported Exotic Florals"
    ],
    movieSetHighlights: [
      "Vikram (Kamal Haasan)",
      "Master (Thalapathy Vijay)",
      "Leo (Thalapathy Vijay)",
      "Kaithi (Karthi)"
    ],
    celebrityWork: [
      "Thalapathy Vijay",
      "Kamal Haasan",
      "Karthi",
      "Chief Minister M.K. Stalin"
    ],
    photoUrl: "/images/founder-perumal-vijay.jpeg"
  },
  contact: {
    primaryPhone: "+91 98402 85854",
    secondaryPhone: "+91 98409 60322",
    altPhone: "+91 98409 60322",
    email: "Kalaidecorators2026@gmail.com",
    primaryEmail: "Kalaidecorators2026@gmail.com",
    altEmail: "yw73444@gmail.com",
    ownerEmails: [
      "Kalaidecorators2026@gmail.com",
      "yw73444@gmail.com"
    ],
    whatsappNumber: "919940768571",
    formattedAddress: "No. 4/450, Alapakkam Main Road, Alapakkam, Chennai, Tamil Nadu - 600116",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Alapakkam,Chennai,Tamil+Nadu",
    officeAddress: {
      street: "No. 4/450, Alapakkam Main Road, Near Maduravoyal",
      area: "Alapakkam",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600116",
      country: "India",
      full: "No. 4/450, Alapakkam Main Road, Alapakkam, Chennai, Tamil Nadu - 600116"
    },
    serviceAreas: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Trichy",
      "Salem",
      "Tirunelveli",
      "Vellore",
      "All Districts of Tamil Nadu",
      "South India Wide Execution"
    ]
  },
  socialLinks: {
    whatsapp: "https://wa.me/919940768571?text=Hello%20Kalai%20Decorators,%20I%20would%20like%20to%20enquire%20about%20event%20stage%20decoration%20services.",
    whatsappAlt: "https://wa.me/919840960322?text=Hello%20Kalai%20Decorators,%20I%20would%20like%20to%20enquire%20about%20stage%20setup.",
    instagram: "https://www.instagram.com/kalai_decorators?igsh=dngycTltOHp4cXZz"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "political-events",
    title: "Political Events & Public Rallies",
    slug: "political-events",
    iconName: "Flag",
    shortDesc: "Mega-scale stage structures, VIP podiums, high-capacity trussing, and bullet-resistant speaker arenas for state & national public meetings.",
    fullDesc: "We specialize in engineered high-capacity stages built for major political rallies, party conventions, and public addresses across Tamil Nadu and South India. Our engineering complies strictly with security protocols, heavy load capacities, and instant emergency dispersal requirements.",
    features: [
      "Heavy-duty multi-level stage platforms (up to 200 ft span)",
      "VIP & VVIP podium security barricading & bulletproof enclosures",
      "High-output LED wall backdrop mounting & sound tower setups",
      "Weather-resistant weatherproof canopying & ground carpeting",
      "Fast 12-hour turnaround for emergency public rallies"
    ],
    idealFor: "State Rallies, Party Conventions, Public Address Campaigns & Campaign Launches",
    image: "/images/client/cm-stalin/stalin-set-01.jpeg"
  },
  {
    id: "movie-launches",
    title: "Movie Audio Launches & Cinema Set Production",
    slug: "movie-audio-launches",
    iconName: "Clapperboard",
    shortDesc: "Theatrically lit grandeur stages, red carpet arenas, 3D thematic set designs, and audio launches for blockbusters including Vikram, Master, Leo, Kaithi, and more.",
    fullDesc: "Kalai Decorators is the trusted stage design & set production partner for Indian cinema blockbusters like Vikram, Master, Leo, Kaithi, and many more. We turn stadiums and film sets into cinematic wonderlands with custom 3D props, motorized stage reveals, and star-studded red carpets.",
    features: [
      "Custom 3D film-themed set designs & motorized entrance gates (Vikram, Master, Leo, Kaithi)",
      "Grand star-studded red carpet fan arenas & media photobooths",
      "High-lumen theatrical lighting rigs & pyrotechnic-safe zones",
      "VIP celebrity lounge seating & sound-dampened acoustics",
      "Seamless integration with live television broadcast cameras"
    ],
    idealFor: "Blockbuster Audio Launches, Cinema Set Designs, Teaser Reveals & Success Meets",
    image: "/images/client/gallery/real-event-01.jpeg"
  },
  {
    id: "royal-weddings",
    title: "Grand Weddings & Royal Receptions",
    slug: "royal-weddings",
    iconName: "Heart",
    shortDesc: "Exquisite floral Mandapams, regal palace thematic backdrops, crystal chandelier lighting, and immersive entrance arches for dream celebrations.",
    fullDesc: "Transforming your most cherished day into a regal masterpiece. From traditional South Indian floral Mandapams with fresh jasmine & exotic orchids to contemporary international crystal ballroom setups, Founder Perumal personally curates every detail for perfection.",
    features: [
      "Custom carved Temple & Palace theme Mandapams",
      "Fresh exotic floral styling (Orchids, Carnations, Roses, Jasmine)",
      "Warm ambient chandelier & intelligent LED mood lighting",
      "Pathway floral tunnels & grand royal entrance arches",
      "Complete bride & groom stage thrones with luxury drapery"
    ],
    idealFor: "Royal Weddings, Grand Receptions, Engagement Ceremonies & Sangeet Nights",
    image: "/images/client/marriage/wedding-set-01.jpeg"
  },
  {
    id: "government-functions",
    title: "Government Functions & Civic Ceremonies",
    slug: "government-functions",
    iconName: "Building2",
    shortDesc: "Official protocol-compliant setups for inauguration ceremonies, foundation stone layings, state award galas, and civic summits.",
    fullDesc: "Handling government protocol requires precision, punctuality, and dignified decorum. Kalai Decorators has executed scores of state government ceremonies, ensuring flawless execution, VIP security compliance, and premium press backdrops.",
    features: [
      "Strict adherence to State & Union Government protocol",
      "Custom insignia backdrops & presidential podium setups",
      "Seating arrangements for thousands of dignitaries & public",
      "High-speed assembly & dismantling without site disruption",
      "Comprehensive fire-retardant material usage"
    ],
    idealFor: "Infrastructure Inaugurations, State Award Functions & National Summits",
    image: "/images/client/pongal/pongal-set-01.jpeg"
  },
  {
    id: "temple-festivals",
    title: "Temple Festivals & Cultural Galas",
    slug: "temple-festivals",
    iconName: "Sparkles",
    shortDesc: "Traditional Gopuram motifs, sacred floral garlands, illuminated street arches, and devotional stage production for grand temple Utsavams.",
    fullDesc: "Honoring rich Indian heritage and spiritual traditions. We create divine, awe-inspiring stage settings for temple Brahmotsavams, devotional discourses, carnatic music festivals, and traditional cultural performances.",
    features: [
      "Traditional South Indian Gopuram & Chariot stage motifs",
      "Grand illuminated LED street arches & temple perimeter decor",
      "Pure organic floral garlands & sacred mango leaf torans",
      "Acoustically tuned stages for Carnatic & devotional music",
      "Weather-shielded mandapams for multi-day utsavams"
    ],
    idealFor: "Temple Brahmotsavams, Devotional Discourses, Classical Dance & Music Galas",
    image: "/images/client/temple/temple-set-01.jpeg"
  },
  {
    id: "corporate-events",
    title: "Corporate Conventions & Product Launches",
    slug: "corporate-events",
    iconName: "Briefcase",
    shortDesc: "Sleek, modern minimalist stage architecture, brand-aligned backdrops, acoustics, and executive conference environments.",
    fullDesc: "Elevate your enterprise brand with precision-engineered corporate setups. From annual shareholder meets to multi-national tech summits and luxury car launches, we deliver flawless, polished corporate staging.",
    features: [
      "Sleek brand-colored seamless backdrops & curved LED displays",
      "Ergonomic speaker podiums & executive panel seating",
      "Modular exhibition booths & networking lounge setups",
      "Acoustically balanced acoustic drapes & stage carpeting",
      "Zero-defect execution for high-stakes corporate summits"
    ],
    idealFor: "Product Launches, Enterprise Conventions, Award Galas & Annual General Meetings",
    image: "/images/client/behind-scenes/behind-work-01.jpeg"
  }
];

export const FEATURED_PROJECTS: PortfolioItem[] = [
  {
    id: "cm-stalin-mega-rally",
    title: "CM M.K. Stalin State Public Convention & Rally",
    category: "political",
    categoryLabel: "Client Recommended Project",
    image: "/images/client/cm-stalin/stalin-set-01.jpeg",
    gallery: Array.from({ length: 20 }, (_, i) => `/images/client/cm-stalin/stalin-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Chennai & Statewide Grounds, Tamil Nadu",
    scale: "20 Photo Album • 500,000+ Crowd Capacity",
    description: "Client recommended top project execution featuring state political rally staging, high-output LED backdrops, bulletproof VIP podium, and heavy-duty steel trussing.",
    highlights: [
      "CM M.K. Stalin State Public Rally Stage",
      "VVIP Bulletproof Speaker Podium",
      "500,000+ Crowd Capacity Arena",
      "Zero-Delay Rapid Setup"
    ],
    featured: true
  },
  {
    id: "dmk-pongal-grand-festival",
    title: "DMK State Festival & Pongal Celebration Stage",
    category: "government",
    categoryLabel: "Client Featured Event",
    image: "/images/client/pongal/pongal-set-01.jpeg",
    gallery: Array.from({ length: 7 }, (_, i) => `/images/client/pongal/pongal-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Chennai Public Grounds, Tamil Nadu",
    scale: "7 Photo Album • Statewide Cultural Gala",
    description: "Massive festive stage setup and traditional Pongal festival decor crafted for state political leaders and cultural celebrations.",
    highlights: [
      "Traditional Tamil Heritage Theme",
      "High-Output LED Video Wall Mounting",
      "VIP Seating & Press Arena",
      "Turnkey Production"
    ],
    featured: true
  },
  {
    id: "royal-palace-marriage-set",
    title: "Grand Royal Wedding Floral Mandapam",
    category: "weddings",
    categoryLabel: "Royal Marriage Event",
    image: "/images/client/marriage/wedding-set-01.jpeg",
    gallery: Array.from({ length: 8 }, (_, i) => `/images/client/marriage/wedding-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Le Royal Méridien & Grand Venues, Chennai",
    scale: "8 Photo Album • 2,500 VIP Guests",
    description: "A breathtaking wedding mandapam decorated with fresh imported orchids, jasmine cascades, hand-carved golden pillars, and crystal chandeliers.",
    highlights: [
      "Fresh Exotic Floral Styling",
      "Custom Carved Temple Pillars",
      "Imperial Chandelier Illuminations",
      "150ft Floral Entry Tunnel"
    ],
    featured: true
  },
  {
    id: "heritage-temple-gopuram-utsavam",
    title: "Divine Temple Brahmotsavam & Gopuram Decor",
    category: "temple",
    categoryLabel: "Temple Festival",
    image: "/images/client/temple/temple-set-01.jpeg",
    gallery: Array.from({ length: 13 }, (_, i) => `/images/client/temple/temple-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Madurai & Temple Cities, Tamil Nadu",
    scale: "13 Photo Album • 50,000 Devotees Scale",
    description: "Traditional South Indian Gopuram stage architecture, sacred floral garlands, and illuminated street arches.",
    highlights: [
      "South Indian Gopuram Motifs",
      "Sacred Fresh Floral Garlands",
      "Devotional Music Acoustics",
      "Weather-Shield Canopy"
    ],
    featured: true
  }
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  // 1. CM M.K. Stalin Political Mega Convention Sets Album (20 Photos strictly from cm-stalin/)
  {
    id: "album-cm-stalin",
    title: "CM M.K. Stalin State Political Convention & Rally Sets",
    category: "political",
    categoryLabel: "CM Stalin Rally Sets (20 Photos)",
    image: "/images/client/cm-stalin/stalin-set-01.jpeg",
    gallery: Array.from({ length: 20 }, (_, i) => `/images/client/cm-stalin/stalin-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "YMCA Grounds, Island Grounds & Statewide Arenas, Tamil Nadu",
    scale: "20 Full Photos • 500,000+ Crowd Capacity Arena",
    description: "Authentic mega political rally stage setups, VVIP speaker podiums, bulletproof glass enclosures, and heavy steel trussing engineered for CM M.K. Stalin addresses.",
    highlights: ["20 Real Event Photos", "VVIP Bulletproof Speaker Podium", "500,000+ Audience Deck", "180ft Steel Trussing Hangar"]
  },

  // 2. Grand Royal Wedding Floral Mandapam Sets Album (8 Photos strictly from marriage/)
  {
    id: "album-royal-weddings",
    title: "Grand Royal Wedding Floral Mandapam Sets",
    category: "weddings",
    categoryLabel: "Royal Wedding Sets (8 Photos)",
    image: "/images/client/marriage/wedding-set-01.jpeg",
    gallery: Array.from({ length: 8 }, (_, i) => `/images/client/marriage/wedding-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Le Royal Méridien, ITC Grand Chola & Grand Venues, Chennai",
    scale: "8 Full Photos • 3,000 VIP Guest Scale",
    description: "Breathtaking fresh floral wedding mandapams decorated with imported white orchids, Madurai jasmine cascades, hand-carved golden pillars, and imperial chandeliers.",
    highlights: ["8 Real Wedding Photos", "Imported Fresh Orchids", "Carved Golden Pillars", "120ft Floral Entry Tunnel"]
  },

  // 3. Heritage Temple Gopuram & Utsavam Sets Album (13 Photos strictly from temple/)
  {
    id: "album-temple-festivals",
    title: "Heritage Temple Gopuram & Brahmotsavam Sets",
    category: "temple",
    categoryLabel: "Temple Festival Sets (13 Photos)",
    image: "/images/client/temple/temple-set-01.jpeg",
    gallery: Array.from({ length: 13 }, (_, i) => `/images/client/temple/temple-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Kapaleeshwarar, Meenakshi & Major Temple Precincts, Tamil Nadu",
    scale: "13 Full Photos • 150,000 Devotees Scale",
    description: "Traditional South Indian Gopuram stage architecture, illuminated street welcome arches, organic mango leaf torans, and devotional music pavilions.",
    highlights: ["13 Real Temple Photos", "5-Tier Gopuram Motif", "LED Street Archways", "Carnatic Music Acoustics"]
  },

  // 4. DMK State Level Pongal Festival Celebration Sets Album (7 Photos strictly from pongal/)
  {
    id: "album-dmk-pongal",
    title: "DMK State Level Pongal Cultural Festival Sets",
    category: "government",
    categoryLabel: "DMK Pongal Sets (7 Photos)",
    image: "/images/client/pongal/pongal-set-01.jpeg",
    gallery: Array.from({ length: 7 }, (_, i) => `/images/client/pongal/pongal-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Island Grounds, Chennai & Statewide Venues",
    scale: "7 Full Photos • 50,000 Attendees",
    description: "Traditional Tamil Harvest Pongal festival stage setups with sugarcane welcome arches, clay pot motifs, Kolam floor art, and state leader address podiums.",
    highlights: ["7 Real Festival Photos", "Traditional Sugarcane Arches", "Tamil Heritage Kolam Art", "VIP Public Address Podium"]
  },

  // 5. DMK State Level Christmas Harmony Celebration Sets Album (6 Photos strictly from christmas/)
  {
    id: "album-dmk-christmas",
    title: "DMK State Level Christmas Harmony Celebration Sets",
    category: "government",
    categoryLabel: "DMK Christmas Sets (6 Photos)",
    image: "/images/client/christmas/christmas-set-01.jpeg",
    gallery: Array.from({ length: 6 }, (_, i) => `/images/client/christmas/christmas-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "St. George's Cathedral & Don Bosco Grounds, Chennai",
    scale: "6 Full Photos • 20,000 Delegates",
    description: "Grand Christmas celebration stages featuring 40-foot illuminated star arches, choir performance decks, and festive dignitary lounges.",
    highlights: ["6 Real Event Photos", "40ft Illuminated Star Arches", "Choir Performance Stage", "Chief Guest Address Podium"]
  },

  // 6. Behind-The-Scenes Heavy Steel Trussing & Structural Work Album (3 Photos strictly from behind-scenes/)
  {
    id: "album-behind-work",
    title: "Behind-The-Scenes Heavy Steel Trussing & Rigging",
    category: "corporate",
    categoryLabel: "Behind The Scenes (3 Photos)",
    image: "/images/client/behind-scenes/behind-work-01.jpeg",
    gallery: Array.from({ length: 3 }, (_, i) => `/images/client/behind-scenes/behind-work-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Field Sites, Tamil Nadu",
    scale: "3 Full Photos • Structural Rigging",
    description: "Authentic behind-the-scenes engineering photographs showcasing Kalai Decorators specialized crew erecting heavy steel trusses and overhead lighting frames.",
    highlights: ["3 Real Field Photos", "Structural Engineering", "Load Tested Scaffolding", "27+ Yrs Safety Record"]
  },

  // 7. Client High-Priority Recommended Highlights Album (3 Photos strictly from important/)
  {
    id: "album-important-highlights",
    title: "Client Recommended High-Priority Event Highlights",
    category: "corporate",
    categoryLabel: "Client Recommended (3 Photos)",
    image: "/images/client/important/important-01.jpeg",
    gallery: Array.from({ length: 3 }, (_, i) => `/images/client/important/important-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Prime Public Grounds, Chennai",
    scale: "3 Full Photos • Featured Showcase",
    description: "High-priority client recommended project executions showcasing grand stage backdrops, LED video wall mountings, and VIP speaker arenas.",
    highlights: ["3 High-Priority Photos", "Client Recommended", "Mega Hangar Staging", "Turnkey Execution"]
  },

  // 8. Kollywood Blockbuster Cinema Audio Launches & Movie Sets Album (40 Photos strictly from gallery/)
  {
    id: "album-cinema-sets",
    title: "Kollywood Blockbuster Cinema Audio Launches & Movie Sets",
    category: "movies",
    categoryLabel: "Blockbuster Cinema Sets (40 Photos)",
    image: "/images/client/gallery/real-event-01.jpeg",
    gallery: Array.from({ length: 40 }, (_, i) => `/images/client/gallery/real-event-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Jawaharlal Nehru Indoor Stadium & Prasad Studios, Chennai",
    scale: "40 Full Photos • 25,000 Stadium Audience + Live Broadcast",
    description: "Massive 3D thematic movie stage designs, custom prop constructions, star-studded red carpet fan arenas, and broadcast lighting created for Thalapathy Vijay blockbusters (Leo, Master), Vikram, and Kaithi.",
    highlights: ["40 Real Cinema Photos", "Custom 3D Movie Set Architecture", "200m VIP Red Carpet Corridor", "Broadcast-Grade Lighting Rigs"]
  }
];

export const STATS: StatItem[] = [
  {
    value: "1,200+",
    label: "Events Executed",
    description: "Successful grand stage setups completed across South India"
  },
  {
    value: "27+",
    label: "Years of Mastery",
    description: "27+ years of excellence (Est. 1999) under Founder Perumal's leadership"
  },
  {
    value: "500K+",
    label: "Max Audience Scale",
    description: "Proven structural capacity for massive political rallies"
  },
  {
    value: "100%",
    label: "On-Time Track Record",
    description: "Zero delays, flawless execution for time-critical events"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "1999",
    title: "Foundation of Kalai Decorators",
    subtitle: "Visionary Start in Chennai",
    description: "Perumal established Kalai Decorators in Alapakkam, Chennai in 1999, embarking on a 27+ year journey of crafting stage structures and event decorations with strength, artistry, and reliability.",
    iconName: "Compass"
  },
  {
    year: "2006",
    title: "Expansion into Cinema Sets & Audio Launches",
    subtitle: "Kollywood Film Spectacles",
    description: "Pioneered grand thematic stages and movie set backdrops for major film production banners across South India.",
    iconName: "Film"
  },
  {
    year: "2013",
    title: "Political Rallies & High-Capacity Stages",
    subtitle: "Engineering Mega Stages",
    description: "Engineered heavy-duty structural steel stages capable of accommodating hundreds of VIPs and surviving extreme weather for state rallies.",
    iconName: "Shield"
  },
  {
    year: "2019",
    title: "Blockbuster Movie Stage Mastery",
    subtitle: "Kaithi, Master, Vikram, Leo Set Work",
    description: "Became the premier stage and set partner for Kollywood blockbusters including Vikram, Master, Leo, Kaithi, and major star releases.",
    iconName: "Crown"
  },
  {
    year: "Present",
    title: "27+ Years of Industry Leadership",
    subtitle: "1,200+ Projects Completed",
    description: "Continuing to lead the industry in Tamil Nadu with state-of-the-art lighting, modular trussing, and breathtaking floral & 3D engineering.",
    iconName: "Trophy"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "K. R. Sundaram",
    role: "Senior Event Coordinator",
    organization: "State Political Convention Committee",
    quote: "When you have 200,000 people attending a rally and state leaders on stage, structural safety and timeliness are everything. Kalai Decorators delivered a flawless 150-foot stage in under 12 hours. Perumal sir's commitment is legendary.",
    rating: 5,
    eventCategory: "Political Event"
  },
  {
    id: "test-2",
    name: "S. V. Ramanan",
    role: "Executive Film Producer",
    organization: "Kollywood Cinema Productions",
    quote: "For our blockbuster movie launches like Vikram, Master, and Leo, Kalai Decorators built breathtaking 3D thematic stages and red carpet fan arenas at Nehru Stadium. Perumal sir and his crew deliver world-class perfection every single time!",
    rating: 5,
    eventCategory: "Movie Audio Launch & Sets"
  },
  {
    id: "test-3",
    name: "Dr. Ananya & Karthik",
    role: "Bride & Groom",
    organization: "Royal Wedding Ceremony",
    quote: "Our wedding floral Mandapam looked straight out of a royal palace! Perumal sir listened to every detail we wanted and created a masterpiece with fresh jasmine and orchids. Our guests are still talking about it!",
    rating: 5,
    eventCategory: "Royal Wedding"
  },
  {
    id: "test-4",
    name: "M. Vijayakumar",
    role: "Protocol Officer",
    organization: "Civic Inauguration Board",
    quote: "Kalai Decorators understands government protocol better than anyone. Clean backdrops, strict adherence to security guidelines, and absolute punctuality. Highly recommended for any large-scale ceremony.",
    rating: 5,
    eventCategory: "Government Ceremony"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long has Kalai Decorators been in business?",
    answer: "Kalai Decorators was established in 1999 by Founder Perumal in Alapakkam, Chennai. We bring over 27+ years of experience in mega stage setups, movie sets, political rallies, royal weddings, and government protocol events.",
    category: "About Company"
  },
  {
    question: "Which major movies has Kalai Decorators done stage set & audio launch work for?",
    answer: "We have crafted iconic stage setups, 3D thematic set decor, and audio release arenas for South India's biggest blockbuster movies, including Vikram, Master, Leo, Kaithi, and many more major star vehicles.",
    category: "Movies & Cinema Sets"
  },
  {
    question: "How far in advance should we book Kalai Decorators for an event?",
    answer: "For major political rallies, movie audio launches, or royal weddings, we recommend booking 2 to 4 weeks in advance. However, for urgent requirements, our 24/7 rapid deployment team can mobilize within 12 to 24 hours anywhere in Tamil Nadu.",
    category: "Booking & Timeline"
  },
  {
    question: "Do you handle outdoor events with weather-proofing and safety compliance?",
    answer: "Yes, absolutely. All our heavy-duty stage structures, steel trussing, and canopies are engineered for wind resistance, rain protection, and high load-bearing safety. We comply fully with structural safety and fire-retardant standards.",
    category: "Safety & Engineering"
  },
  {
    question: "What geographical locations do you cover?",
    answer: "Our main headquarters is located in Alapakkam, Chennai, but we execute mega stage setups and event decorations across Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, and all major cities in Tamil Nadu and neighboring South Indian states.",
    category: "Coverage"
  },
  {
    question: "How does the pricing and budget estimation work?",
    answer: "We offer transparent, customized quotes based on stage dimensions, floral choices, lighting requirements, and venue scale. Fill out our online booking enquiry form or call +91 6381147719 / +91 9994849904 for an instant estimate.",
    category: "Pricing"
  }
];
