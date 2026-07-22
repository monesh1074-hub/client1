export interface PortfolioItem {
  id: string;
  title: string;
  category: 'political' | 'movies' | 'weddings' | 'government' | 'temple' | 'corporate';
  categoryLabel: string;
  image: string;
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

export const COMPANY_DETAILS = {
  name: "Kalai Decorators",
  tagline: "Premier Event Decoration & Grand Stage Setup Specialist",
  subTagline: "Crafting India's Most Spectacular Mega Stages, Political Rallies, Movie Audio Launches & Royal Weddings",
  founder: "Perumal",
  founderTitle: "Founder & Master Creative Director",
  establishedYear: "2010",
  experienceYears: "15+",
  eventsCompleted: "1,200+",
  maxAudienceCapacity: "500,000+",
  onTimeDeliveryRate: "100%",
  
  contact: {
    primaryPhone: "+91 6381147719",
    altPhone: "+91 9994849904",
    whatsappPrimary: "+91 9940768571",
    whatsappAlt: "+91 9994849904",
    primaryEmail: "Kalaidecorators2026@gmail.com",
    altEmail: "yw73444@gmail.com",
    formattedAddress: "No. 2/11, Jayalakshmi Nagar, Ganapathi Street, Alapakkam, Chennai, Tamil Nadu, India",
    googleMapsUrl: "https://maps.google.com/?q=Alapakkam+Chennai+Tamil+Nadu",
    operatingHours: "24/7 Operations & Rapid On-Site Setup",
  },
  
  socialLinks: {
    whatsapp: "https://wa.me/919940768571?text=Hello%20Kalai%20Decorators,%20I%20would%20like%20to%20enquire%20about%20event%20decoration%20services.",
    whatsappAlt: "https://wa.me/919994849904?text=Hello%20Kalai%20Decorators,%20I%20would%20like%20to%20enquire%20about%20stage%20setup.",
    instagram: "https://www.instagram.com/kalai_decorator_",
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
    image: "/images/portfolio/kalai-event-01.jpeg"
  },
  {
    id: "movie-launches",
    title: "Movie Audio Launches & Film Promotions",
    slug: "movie-audio-launches",
    iconName: "Clapperboard",
    shortDesc: "Theatrically lit grandeur stages, red carpet walkways, immersive 3D thematic backdrops, and media press arenas for Indian cinema blockbusters.",
    fullDesc: "Kalai Decorators is the trusted partner for Kollywood and Indian cinema's biggest audio releases and star-studded promotions. We turn stadiums and auditoriums into cinematic wonderlands with custom 3D props, dynamic motorized stage reveals, and press-friendly red carpets.",
    features: [
      "Custom 3D film-themed set designs & motorized entrance gates",
      "Grand star-studded red carpet fan arenas & media photobooths",
      "High-lumen theatrical lighting rigs & pyrotechnic-safe zones",
      "VIP celebrity lounge seating & sound-dampened acoustics",
      "Seamless integration with live television broadcast cameras"
    ],
    idealFor: "Blockbuster Audio Launches, Teaser Reveals, Success Meets & Celebrity Fan Galas",
    image: "/images/portfolio/kalai-event-02.jpeg"
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
    image: "/images/portfolio/kalai-event-03.jpeg"
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
    image: "/images/portfolio/kalai-event-04.jpeg"
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
    image: "/images/portfolio/kalai-event-05.jpeg"
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
    image: "/images/portfolio/kalai-event-06.jpeg"
  }
];

export const FEATURED_PROJECTS: PortfolioItem[] = [
  {
    id: "political-mega-rally-chennai",
    title: "State Political Mega Convention & Rally",
    category: "political",
    categoryLabel: "Political Rally",
    image: "/images/portfolio/kalai-event-38.jpeg",
    location: "YMCA Grounds, Royapettah, Chennai",
    scale: "300,000+ Attendees",
    description: "A monumental 180-foot wide mega stage featuring bulletproof VIP security enclosures, 4K LED video wall mounting, and integrated 100kW audio trussing built in under 18 hours.",
    highlights: [
      "180ft Reinforced Steel Stage Deck",
      "Bulletproof Glass Speaker Enclosure",
      "300,000+ Crowd Capacity Setup",
      "Zero Delay Turnaround"
    ],
    featured: true
  },
  {
    id: "kollywood-blockbuster-audio-launch",
    title: "Star-Studded Cinema Audio Release",
    category: "movies",
    categoryLabel: "Movie Audio Launch",
    image: "/images/portfolio/kalai-event-64.jpeg",
    location: "Nehru Indoor Stadium, Chennai",
    scale: "15,000 Stadium Audience + Live TV",
    description: "Immersive 3D thematic stage featuring motorized entrance gates, 50ft high custom movie props, and a 100-meter celebrity red carpet walkway for South India's biggest film stars.",
    highlights: [
      "3D Architectural Prop Set Design",
      "100m VIP Red Carpet Arena",
      "Motorized Stage Reveal Gate",
      "Broadcast-Grade Lighting Rig"
    ],
    featured: true
  },
  {
    id: "royal-palace-wedding-mandapam",
    title: "Grand Royal Floral Palace Wedding",
    category: "weddings",
    categoryLabel: "Royal Wedding",
    image: "/images/portfolio/kalai-event-78.jpeg",
    location: "Le Royal Méridien, Chennai",
    scale: "2,500 VIP Guests",
    description: "A breathtaking wedding mandapam decorated with 50,000 fresh imported orchids, jasmine cascades, hand-carved golden pillars, and 12 crystal chandeliers.",
    highlights: [
      "50,000+ Fresh Exotic Flowers",
      "Custom Carved Gold Temple Pillars",
      "12 Imperial Crystal Chandeliers",
      "150ft Floral Entry Tunnel"
    ],
    featured: true
  },
  {
    id: "state-govt-infrastructure-summit",
    title: "State Government Infrastructure Ceremony",
    category: "government",
    categoryLabel: "Government Function",
    image: "/images/portfolio/kalai-event-55.jpeg",
    location: "Chennai Trade Centre, Nandambakkam",
    scale: "5,000 Delegates & Dignitaries",
    description: "Official protocol-compliant main stage featuring soundproof acoustic paneling, VVIP security perimeter, and high-brightness LED backdrop arrays.",
    highlights: [
      "VVIP Protocol Approved Seating",
      "Acoustically Calibrated Sound Truss",
      "4K LED Video Backdrop Rig",
      "Rapid Teardown Crew"
    ],
    featured: true
  }
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = Array.from({ length: 90 }, (_, index) => {
  const fileIndex = String(index + 1).padStart(2, '0');
  const categories: ('political' | 'movies' | 'weddings' | 'government' | 'temple' | 'corporate')[] = [
    'political', 'movies', 'weddings', 'government', 'temple', 'corporate'
  ];
  const cat = categories[index % categories.length];
  
  const labels: Record<string, string> = {
    political: 'Political Rally',
    movies: 'Movie Launch',
    weddings: 'Royal Wedding',
    government: 'Government Ceremony',
    temple: 'Temple Festival',
    corporate: 'Corporate Spectacle'
  };

  const titles: Record<string, string[]> = {
    political: [
      "State Level Public Conference Setup",
      "VIP Public Meeting Stage Arena",
      "State-Wide Campaign Stage Decor",
      "Massive Public Rally Stage Setup",
      "Dignitary Speaker Stage & Canopy"
    ],
    movies: [
      "Cinema Audio Launch Stadium Stage",
      "Film Teaser Launch Red Carpet Arena",
      "Celebrity Fan Meet Grand Stage",
      "Blockbuster Movie Celebration Backdrop",
      "Star Press Conference Decor"
    ],
    weddings: [
      "Royal Floral Wedding Mandapam",
      "Grand Reception Stage Illuminations",
      "Traditional South Indian Temple Weding",
      "Luxury Floral Entry Archway",
      "Sangeet Night Decorative Stage"
    ],
    government: [
      "Official Civic Infrastructure Launch",
      "State Award Function Grand Stage",
      "Dignitary Summit Protocol Staging",
      "Public Welfare Scheme Stage Arena",
      "Government Convention Backdrop"
    ],
    temple: [
      "Divine Gopuram Stage Architecture",
      "Brahmotsavam Street Arch Illumination",
      "Carnatic Music Festival Stage",
      "Devotional Discourse Grand Canopy",
      "Heritage Temple Celebration Staging"
    ],
    corporate: [
      "Enterprise Tech Summit Mainstage",
      "Luxury Brand Product Reveal Decor",
      "Global Corporate Leadership Forum",
      "Annual Business Gala Backdrop",
      "Exhibition Keynote Stage Arena"
    ]
  };

  const titleList = titles[cat];
  const selectedTitle = titleList[index % titleList.length];

  return {
    id: `portfolio-${fileIndex}`,
    title: `${selectedTitle} #${fileIndex}`,
    category: cat,
    categoryLabel: labels[cat],
    image: `/images/portfolio/kalai-event-${fileIndex}.jpeg`,
    location: index % 2 === 0 ? "Chennai, Tamil Nadu" : "Coimbatore / Madurai, Tamil Nadu",
    scale: index % 3 === 0 ? "Mega Capacity Event" : "Exclusive VIP Scale",
    description: `High-definition project execution by Kalai Decorators featuring heavy-duty structural staging, custom backdrops, and precision lighting.`,
    highlights: ["Custom Theme Design", "Heavy Trussing Infrastructure", "Flawless Execution", "On-Time Turnaround"]
  };
});

export const STATS: StatItem[] = [
  {
    value: "1,200+",
    label: "Events Executed",
    description: "Successful grand stage setups completed across South India"
  },
  {
    value: "15+",
    label: "Years of Mastery",
    description: "Unmatched expertise under Founder Perumal's leadership"
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
    year: "2010",
    title: "Foundation of Kalai Decorators",
    subtitle: "Visionary Start in Chennai",
    description: "Perumal established Kalai Decorators in Alapakkam, Chennai, with a commitment to redefining event stage setup with strength, artistry, and reliability.",
    iconName: "Compass"
  },
  {
    year: "2014",
    title: "Expansion into Political Rallies",
    subtitle: "Engineering Mega Stages",
    description: "Pioneered heavy-duty structural steel stages capable of accommodating hundreds of VIPs and surviving extreme weather conditions for state rallies.",
    iconName: "Shield"
  },
  {
    year: "2018",
    title: "Cinema & Audio Launch Mastery",
    subtitle: "Kollywood Star Spectacles",
    description: "Became the preferred stage decor partner for major film production houses, building 3D prop stages for blockbuster movie launches in stadiums.",
    iconName: "Film"
  },
  {
    year: "2022",
    title: "Government Protocol & Royal Weddings",
    subtitle: "Statewide Recognition",
    description: "Expanded workforce to 150+ skilled craftsmen, executing high-security government summits and royal destination weddings with equal finesse.",
    iconName: "Crown"
  },
  {
    year: "Present",
    title: "Industry Leader in Stage Production",
    subtitle: "1,200+ Projects Completed",
    description: "Continuing to lead the industry in Tamil Nadu with state-of-the-art lighting, modular trussing, and breathtaking floral engineering.",
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
    organization: "Kollywood Mega Productions",
    quote: "Our movie audio launch was held at Nehru Indoor Stadium. The 3D thematic stage created by Kalai Decorators blew away the actors, director, and 15,000 fans! The red carpet setup was world-class.",
    rating: 5,
    eventCategory: "Movie Audio Launch"
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
    question: "Can you create custom 3D themes for film launches or branded corporate events?",
    answer: "Yes! Founder Perumal and our architectural design team craft custom 3D props, motorized entrance gates, illuminated logos, and bespoke backdrops tailored to your specific movie theme or corporate branding.",
    category: "Design & Customization"
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
