export interface PortfolioItem {
  id: string;
  title: string;
  category: 'political' | 'movies' | 'weddings' | 'government' | 'temple' | 'corporate';
  categoryLabel: string;
  image: string;
  video?: string;
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
  videos?: {
    stalinAppreciation: string;
  };
}

export const COMPANY_DETAILS: CompanyDetails = {
  name: "Kalai Decorators",
  tagline: "27+ Years of High-Capacity Event Staging & Cinema Set Mastery (Est. 1999)",
  foundedYear: 1999,
  yearsOfExperience: 27,
  videos: {
    stalinAppreciation: process.env.NEXT_PUBLIC_CLOUDINARY_STALIN_VIDEO || "/videos/founder-stalin-appreciation.mp4",
  },
  founder: {
    name: "Perumal",
    role: "Founder & Master Stage Decorator",
    experience: "27+ Years of Industry Leadership",
    bio: "Under the visionary leadership of Founder Perumal, Kalai Decorators has spent over 27 years transforming stadiums, public grounds, and venues across South India into majestic, high-capacity event arenas. Specializing in engineered political mega-rally stages and Kollywood blockbuster cinema set productions.",
    specialties: [
      "Engineered Steel Trussing & Heavy Load Stage Decks",
      "VVIP Speaker Podiums & DMK Party Meeting Arenas",
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
    primaryPhone: "+91 63811 47719",
    secondaryPhone: "+91 99948 49904",
    altPhone: "+91 99948 49904",
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
    whatsappAlt: "https://wa.me/919994849904?text=Hello%20Kalai%20Decorators,%20I%20would%20like%20to%20enquire%20about%20stage%20setup.",
    instagram: "https://www.instagram.com/kalai_decorator_?igsh=MWozbnptemtmNXFucg%3D%3D"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "political-events",
    title: "Political Events",
    slug: "political-events",
    iconName: "Flag",
    shortDesc: "Mega-scale stage structures, VIP podiums, high-capacity trussing, and DMK party meeting arenas for state & national public meetings.",
    fullDesc: "We specialize in engineered high-capacity stages built for major political rallies, party conventions, and public addresses across Tamil Nadu and South India. Our engineering complies strictly with security protocols, heavy load capacities, and instant emergency dispersal requirements.",
    features: [
      "Heavy-duty multi-level stage platforms (up to 200 ft span)",
      "VIP & VVIP podium security barricading & dignitary seating enclosures",
      "High-output LED wall backdrop mounting & sound tower setups",
      "Weather-resistant weatherproof canopying & ground carpeting",
      "Fast 12-hour turnaround for emergency public rallies"
    ],
    idealFor: "State Rallies, Party Conventions, Public Address Campaigns & Campaign Launches",
    image: "/images/client/stalin-important-set/sis-06.jpeg"

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
    image: "/images/master-set-vijay-perumal-thumbnail.jpg"
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
  }
];

export const FEATURED_PROJECTS: PortfolioItem[] = [
  {
    id: "cm-stalin-heritage-exhibition",
    title: "CM M.K. Stalin State Heritage & Cultural Exhibition",
    category: "political",
    categoryLabel: "Client Recommended Project",
    image: "/images/client/important/important-01.jpeg",
    gallery: Array.from({ length: 5 }, (_, i) => `/images/client/important/important-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Chennai Convention Centre & Statewide Precincts, Tamil Nadu",
    scale: "5 Photo Album • State Dignitary Summit",
    description: "Client recommended top project execution featuring custom-crafted wooden paneling, lit framed art galleries, marigold floral trims, and dignitary exhibition staging.",
    highlights: [
      "CM M.K. Stalin Heritage Art Gallery",
      "Custom Wooden Paneling & Framing",
      "Illuminated Showcase Lighting Rigs",
      "State Dignitary Convention Pavilion"
    ],
    featured: true
  },
  {
    id: "dmk-pongal-grand-festival",
    title: "DMK State Festival & Pongal Celebration Stage",
    category: "government",
    categoryLabel: "Client Featured Event",
    image: "/images/client/pongal/pongal-set-01.jpeg",
    gallery: Array.from({ length: 11 }, (_, i) => `/images/client/pongal/pongal-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Chennai Public Grounds, Tamil Nadu",
    scale: "11 Photo Album • Statewide Cultural Gala",
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
    gallery: Array.from({ length: 6 }, (_, i) => `/images/client/marriage/wedding-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Le Royal Méridien & Grand Venues, Chennai",
    scale: "6 Photo Album • 2,500 VIP Guests",
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
    gallery: Array.from({ length: 36 }, (_, i) => `/images/client/temple/temple-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Madurai & Temple Cities, Tamil Nadu",
    scale: "36 Photo Album • 50,000 Devotees Scale",
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
  // 0. Founder Stalin Appreciation & Master Movie Set Video Album
  {
    id: "album-founder-stalin-appreciation",
    title: "Master Movie Set Completion Celebration & CM M.K. Stalin Appreciation",
    category: "movies",
    categoryLabel: "Master Movie Set Completion Celebration",
    image: "/images/client/founder-appreciation/appreciation-01.jpeg",
    video: "/videos/founder-stalin-appreciation.mp4",
    gallery: [
      "/images/client/founder-appreciation/appreciation-01.jpeg",
      "/images/client/founder-appreciation/appreciation-02.jpeg",
      "/images/client/founder-appreciation/appreciation-03.jpeg",
      "/images/client/founder-appreciation/appreciation-04.jpeg"
    ],
    location: "Chennai Arenas & Statewide Conventions, Tamil Nadu",
    scale: "Official Video & 4 Photo Commendation Album",
    description: "Official celebration video and event photos of Founder Perumal work recognized by Hon'ble Chief Minister M.K. Stalin for master stage design and blockbuster film set productions like Master & Vikram.",
    highlights: ["Master Movie Set Completion Celebration", "Thalapathy Vijay Master Movie Production", "CM M.K. Stalin Direct Appreciation", "4 Event Photos"]
  },

  // 1. CM M.K. Stalin Political Mega Convention Sets Album (11 Photos from cm stalin sets/)
  {
    id: "album-cm-stalin",
    title: "CM M.K. Stalin State Political Convention & Rally Sets",
    category: "political",
    categoryLabel: "CM Stalin Rally Sets (11 Photos)",
    image: "/images/client/cm-stalin/stalin-set-01.jpeg",
    gallery: Array.from({ length: 11 }, (_, i) => `/images/client/cm-stalin/stalin-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "YMCA Grounds, Island Grounds & Statewide Arenas, Tamil Nadu",
    scale: "11 Full Photos • 500,000+ Crowd Capacity Arena",
    description: "Authentic mega political rally stage setups, VVIP speaker podiums, DMK party dignitaries meeting seating, and heavy steel trussing engineered for CM M.K. Stalin addresses.",
    highlights: ["11 Real Event Photos", "VVIP Speaker Podium & DMK Stage", "500,000+ Audience Deck", "180ft Steel Trussing Hangar"]
  },

  // 2. DMK State Level Manadu Mega Rally Arena Album (10 Photos from DMK MANADU/)
  {
    id: "album-dmk-manadu",
    title: "DMK State Manadu Mega Rally Arena & Conventions",
    category: "political",
    categoryLabel: "DMK Manadu Rally Sets (10 Photos)",
    image: "/images/client/dmk-manadu/dmk-manadu-01.jpeg",
    gallery: Array.from({ length: 10 }, (_, i) => `/images/client/dmk-manadu/dmk-manadu-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Manadu Grounds, Tamil Nadu",
    scale: "10 Full Photos • 500,000+ Audience Scale",
    description: "Aerial views and wide arena photography of DMK State Manadu conventions, massive political rally grounds, and state dignitary stages.",
    highlights: ["10 Real Manadu Photos", "Aerial Rally Arena View", "State Convention Staging", "500K Audience Ground"]
  },

  // 3. Grand Royal Wedding Floral Mandapam Sets Album (6 Photos from marriage event set/)
  {
    id: "album-royal-weddings",
    title: "Grand Royal Wedding Floral Mandapam Sets",
    category: "weddings",
    categoryLabel: "Royal Wedding Sets (6 Photos)",
    image: "/images/client/marriage/wedding-set-01.jpeg",
    gallery: Array.from({ length: 6 }, (_, i) => `/images/client/marriage/wedding-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Le Royal Méridien, ITC Grand Chola & Grand Venues, Chennai",
    scale: "6 Full Photos • 3,000 VIP Guest Scale",
    description: "Breathtaking fresh floral wedding mandapams decorated with imported white orchids, Madurai jasmine cascades, hand-carved golden pillars, and imperial chandeliers.",
    highlights: ["6 Real Wedding Photos", "Imported Fresh Orchids", "Carved Golden Pillars", "120ft Floral Entry Tunnel"]
  },

  // 4. Heritage Temple Gopuram & Utsavam Sets Album (36 Photos from temple sets/)
  {
    id: "album-temple-festivals",
    title: "Heritage Temple Gopuram & Brahmotsavam Sets",
    category: "temple",
    categoryLabel: "Temple Festival Sets (36 Photos)",
    image: "/images/client/temple/temple-set-01.jpeg",
    gallery: Array.from({ length: 36 }, (_, i) => `/images/client/temple/temple-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Kapaleeshwarar, Meenakshi & Major Temple Precincts, Tamil Nadu",
    scale: "36 Full Photos • 150,000 Devotees Scale",
    description: "Traditional South Indian Gopuram stage architecture, illuminated street welcome arches, organic mango leaf torans, and devotional music pavilions.",
    highlights: ["36 Real Temple Photos", "5-Tier Gopuram Motif", "LED Street Archways", "Carnatic Music Acoustics"]
  },

  // 5. DMK State Level Pongal Festival Celebration Sets Album (11 Photos from pongal set on dmk/)
  {
    id: "album-dmk-pongal",
    title: "DMK State Level Pongal Cultural Festival Sets",
    category: "government",
    categoryLabel: "DMK Pongal Sets (11 Photos)",
    image: "/images/client/pongal/pongal-set-01.jpeg",
    gallery: Array.from({ length: 11 }, (_, i) => `/images/client/pongal/pongal-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Island Grounds, Chennai & Statewide Venues",
    scale: "11 Full Photos • 50,000 Attendees",
    description: "Traditional Tamil Harvest Pongal festival stage setups with sugarcane welcome arches, clay pot motifs, Kolam floor art, and state leader address podiums.",
    highlights: ["11 Real Festival Photos", "Traditional Sugarcane Arches", "Tamil Heritage Kolam Art", "VIP Public Address Podium"]
  },

  // 6. DMK State Level Christmas Harmony Celebration Sets Album (7 Photos from cristmas set on dmk/)
  {
    id: "album-dmk-christmas",
    title: "DMK State Level Christmas Harmony Celebration Sets",
    category: "government",
    categoryLabel: "DMK Christmas Sets (7 Photos)",
    image: "/images/client/christmas/christmas-set-01.jpeg",
    gallery: Array.from({ length: 7 }, (_, i) => `/images/client/christmas/christmas-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "St. George's Cathedral & Don Bosco Grounds, Chennai",
    scale: "7 Full Photos • 20,000 Delegates",
    description: "Grand Christmas celebration stages featuring illuminated star arches, choir performance decks, and festive dignitary lounges.",
    highlights: ["7 Real Event Photos", "Illuminated Star Arches", "Choir Performance Stage", "Chief Guest Address Podium"]
  },

  // 7. Behind-The-Scenes Heavy Steel Trussing & Structural Work Album (141 Photos from beind the work/)
  {
    id: "album-behind-work",
    title: "Behind-The-Scenes Heavy Steel Trussing & Rigging",
    category: "corporate",
    categoryLabel: "Behind The Scenes (141 Photos)",
    image: "/images/client/behind-scenes/behind-work-01.jpeg",
    gallery: Array.from({ length: 141 }, (_, i) => `/images/client/behind-scenes/behind-work-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Field Sites, Tamil Nadu",
    scale: "141 Full Photos • Structural Rigging",
    description: "Authentic behind-the-scenes engineering photographs showcasing Kalai Decorators specialized crew erecting heavy steel trusses and overhead lighting frames.",
    highlights: ["141 Real Field Photos", "Structural Engineering", "Load Tested Scaffolding", "27+ Yrs Safety Record"]
  },

  // 8. Client High-Priority Recommended Highlights Album (5 Photos from important to add/)
  {
    id: "album-important-highlights",
    title: "Client Recommended High-Priority Event Highlights",
    category: "corporate",
    categoryLabel: "Client Recommended (5 Photos)",
    image: "/images/client/important/important-01.jpeg",
    gallery: Array.from({ length: 5 }, (_, i) => `/images/client/important/important-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Prime Public Grounds, Chennai",
    scale: "5 Full Photos • Featured Showcase",
    description: "High-priority client recommended project executions showcasing grand stage backdrops, LED video wall mountings, and VIP speaker arenas.",
    highlights: ["5 High-Priority Photos", "Client Recommended", "Mega Hangar Staging", "Turnkey Execution"]
  },

  // 9. CM Stalin Important Set for Card Portfolio (7 Photos from stalin important set for card portfolio/)
  {
    id: "album-stalin-important-set",
    title: "CM Stalin Priority Portfolio Showcase",
    category: "political",
    categoryLabel: "Stalin Important Set (7 Photos)",
    image: "/images/client/stalin-important-set/sis-06.jpeg",
    gallery: Array.from({ length: 7 }, (_, i) => `/images/client/stalin-important-set/sis-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Arenas & Public Grounds, Tamil Nadu",
    scale: "7 Full Photos • Priority Showcase",
    description: "Exclusive state political conventions, dignitary addresses, and VIP stage architecture engineered for CM M.K. Stalin.",
    highlights: ["7 Priority Stalin Photos", "State Political Staging", "VVIP Speaker Deck", "Turnkey Production"]
  },

  // 10. New Folder 2 Portfolio Card (4 Photos from New folder (2)/)
  {
    id: "album-new-folder-2",
    title: "Special Event Highlights",
    category: "corporate",
    categoryLabel: "New Folder 2 (4 Photos)",
    image: "/images/client/new-folder-2/nf2-01.jpeg",
    gallery: Array.from({ length: 4 }, (_, i) => `/images/client/new-folder-2/nf2-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Venues, Tamil Nadu",
    scale: "4 Full Photos • Dedicated Showcase",
    description: "Dedicated project portfolio card showcasing event stage decorations and structural setups from New Folder 2.",
    highlights: ["4 Dedicated Photos", "Event Stage Architecture", "Custom Lighting Rigs", "Turnkey Execution"]
  },

  // 11. New Folder 3 Portfolio Card (3 Photos from New folder (3)/)
  {
    id: "album-new-folder-3",
    title: "Stage & Exhibition Sets",
    category: "corporate",
    categoryLabel: "New Folder 3 (3 Photos)",
    image: "/images/client/new-folder-3/nf3-01.jpeg",
    gallery: Array.from({ length: 3 }, (_, i) => `/images/client/new-folder-3/nf3-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Arenas, Tamil Nadu",
    scale: "3 Full Photos • Exhibition & Stage Setups",
    description: "Dedicated project portfolio card showcasing high-impact stage installations and exhibition sets from New Folder 3.",
    highlights: ["3 Authentic Photos", "Exhibition Staging", "Dignitary Lounge Decor", "27+ Yrs Mastery"]
  },

  // 12. Folder 1 Portfolio Card (4 Photos from 1/)
  {
    id: "album-folder-1",
    title: "Special Event Stage & Decor (Folder 1)",
    category: "political",
    categoryLabel: "Folder 1 Sets (4 Photos)",
    image: "/images/client/folder-1/f1-01.jpeg",
    gallery: Array.from({ length: 4 }, (_, i) => `/images/client/folder-1/f1-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Venues, Tamil Nadu",
    scale: "4 Full Photos • Dedicated Showcase",
    description: "Exclusive portfolio card showcasing grand stage decor and event installations strictly using images from Folder 1.",
    highlights: ["4 Folder 1 Photos", "Event Stage Architecture", "Custom Lighting Rigs", "Turnkey Execution"]
  },

  // 13. Folder 3 Portfolio Card (5 Photos from 3/)
  {
    id: "album-folder-3",
    title: "Grand Stage & Exhibition Sets (Folder 3)",
    category: "political",
    categoryLabel: "Folder 3 Sets (5 Photos)",
    image: "/images/client/folder-3/f3-01.jpeg",
    gallery: Array.from({ length: 5 }, (_, i) => `/images/client/folder-3/f3-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Statewide Arenas, Tamil Nadu",
    scale: "5 Full Photos • Dedicated Showcase",
    description: "Exclusive portfolio card showcasing high-impact stage installations and event setups strictly using images from Folder 3.",
    highlights: ["5 Folder 3 Photos", "Exhibition Staging", "Dignitary Lounge Decor", "27+ Yrs Mastery"]
  },

  // 14. Navratri Gollu Setup Portfolio Card (3 Photos from gollu/)
  {
    id: "album-gollu",
    title: "Traditional Navratri Gollu Setup & Heritage Decor",
    category: "temple",
    categoryLabel: "Gollu Sets (3 Photos)",
    image: "/images/client/gollu/gollu-set-01.jpeg",
    gallery: Array.from({ length: 3 }, (_, i) => `/images/client/gollu/gollu-set-${String(i + 1).padStart(2, '0')}.jpeg`),
    location: "Chennai & Cultural Precincts, Tamil Nadu",
    scale: "3 Full Photos • Heritage Setup",
    description: "Traditional Navratri Gollu steps setup, divine idol arrangements, and heritage festive decorations.",
    highlights: ["3 Real Gollu Photos", "Traditional Gollu Decor", "Festive Lighting", "Cultural Heritage Setup"]
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
