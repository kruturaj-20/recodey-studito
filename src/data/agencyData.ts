import { ServiceItem, PortfolioProject, BlogPost, Testimonial } from '../types';

export const AGENCY_INFO = {
  name: 'Recodey Studio',
  descriptor: 'Digital Engineering & Social Distribution Practice',
  tagline: 'High-Performance Web Architecture & Culture-Native Social Distribution',
  founded: '2022',
  locations: ['New York', 'London', 'Tokyo', 'Remote'],
  email: 'inquiries@recodeystudio.com',
  directPhone: '+1 (212) 847-1940',
  availability: 'Booking Q2 / Q3 2026',
  socialLinks: {
    twitter: 'https://twitter.com/recodeystudio',
    linkedin: 'https://linkedin.com/company/recodeystudio',
    instagram: 'https://instagram.com/recodeystudio',
    github: 'https://github.com/recodeystudio',
    youtube: 'https://youtube.com/@recodeystudio',
  },
  stats: [
    { label: 'Sub-Second LCP Standard', value: '< 0.8s', context: '99th percentile across mobile & desktop' },
    { label: 'Verified Client Pipeline Lift', value: '+142%', context: 'Median conversion rate increase' },
    { label: 'Verified Paid Social ROAS', value: '4.8x', context: 'Aggregated client advertising return' },
    { label: 'Engineered Client Revenue', value: '$48M+', context: 'Directly attributed transaction volume' },
  ],
  verifiedClients: [
    { name: 'Novus Retail Group', sector: 'Direct-to-Consumer Goods' },
    { name: 'Apex Financial', sector: 'Institutional Fintech' },
    { name: 'Pulse Beverages', sector: 'Consumer Packaged Goods' },
    { name: 'HyperGrid Systems', sector: 'Cloud Infrastructure SaaS' },
    { name: 'Veloce Mobility', sector: 'Luxury Automotive' },
    { name: 'Zeno Health Group', sector: 'Telehealth & Diagnostics' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-engineering',
    category: 'web-development',
    title: 'Full-Stack Web Engineering',
    tagline: 'High-performance digital flagships, headless architectures, and mission-critical web applications.',
    icon: 'Terminal',
    description: 'We eliminate bloated frameworks and sluggish page builders. Every platform is built from first principles with modern React/Next.js, rigorous type safety, sub-second Largest Contentful Paint (LCP), and responsive typographic hierarchies.',
    keyMetrics: '0.6s LCP Speed Benchmark',
    deliverables: [
      'Custom React 19 & Next.js Headless Applications',
      'Headless Shopify & Custom E-Commerce Architectures',
      'Design Systems, Component Libraries & Micro-interactions',
      'Technical SEO Schema Graph (JSON-LD) & Prerendering',
      'Edge CDN Distribution & Sub-50ms Global Response Times',
      'Zero Cumulative Layout Shift (CLS) Performance Guarantees'
    ],
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Node.js', 'PostgreSQL', 'Cloud Run'],
    popular: true
  },
  {
    id: 'social-marketing',
    category: 'social-media',
    title: 'Algorithmic Social Distribution',
    tagline: 'Culture-native short-form content, creator partnerships, and direct-response paid campaigns.',
    icon: 'Share2',
    description: 'We replace corporate vanity posts with algorithmic precision. We script, produce, and edit high-retention short-form video for TikTok, Instagram Reels, and YouTube Shorts, coupled with full-funnel Meta and TikTok advertising.',
    keyMetrics: '4.8x Median Paid Ad ROAS',
    deliverables: [
      'Direct-Response Short-Form Video (TikTok, Reels, Shorts)',
      'Hook-Rate & 3-Second Retention Optimization Framework',
      'Performance Paid Advertising Management (Meta & TikTok)',
      'Creator Seeding & Micro-Influencer Talent Management',
      'Social Search Engine Optimization (TikTok/IG Search Ranking)',
      'Multi-Touch Attribution Dashboards & Revenue Tracking'
    ],
    techStack: ['Meta Ads Manager', 'TikTok Business Center', 'CapCut Studio', 'TripleWhale', 'Google Analytics 4'],
    popular: true
  },
  {
    id: 'full-funnel',
    category: 'hybrid',
    title: 'Integrated Growth Architecture',
    tagline: 'The unified engine: high-converting web storefronts fueled by continuous cultural social acquisition.',
    icon: 'Layers',
    description: 'Traffic without a high-converting web platform wastes capital; a fast website without traffic is invisible. We connect both disciplines into a closed-loop revenue engine where audience attention converts directly to retained revenue.',
    keyMetrics: '+310% Net Pipeline Velocity',
    deliverables: [
      'Synchronized Paid Social Ad Campaigns & Dynamic Landers',
      'Continuous A/B Split Testing & Conversion Rate Optimization (CRO)',
      'Topical Search Authority & Integrated Organic Distribution',
      'Automated Customer Onboarding & Lifecycle Retention Flows',
      'Weekly Engineering & Creative Production Sprints',
      'Dedicated Slack Channel & Senior Technical Director Access'
    ],
    techStack: ['Full Studio Stack', 'Segment', 'PostHog', 'Klaviyo', 'Search Console', 'Figma'],
    popular: false
  },
  {
    id: 'seo-infrastructure',
    category: 'web-development',
    title: 'Technical Search Architecture',
    tagline: 'Systematic organic search engine visibility through mathematical site speed and structured schema data.',
    icon: 'Search',
    description: 'Search engines reward clean semantics, low latency, and explicit entity relationships. We audit and rebuild technical web architectures to capture high-intent commercial queries and outrank legacy competitors.',
    keyMetrics: '+240% Top-3 Commercial Rankings',
    deliverables: [
      'Complete Core Web Vitals Audit & JavaScript Payload Reduction',
      'Enterprise JSON-LD Entity Schema Markup Implementation',
      'Crawl Budget Optimization & Canonical Routing Hierarchy',
      'Topical Keyword Clustering & Commercial Landing Page Specs',
      'Edge Prerendering for Automated Search Spider Indexing'
    ],
    techStack: ['Ahrefs', 'Screaming Frog', 'Search Console', 'Lighthouse CI', 'Edge Functions'],
    popular: false
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'lumina-luxury',
    title: 'Lumina Cosmetics',
    client: 'Lumina Beauty Inc.',
    category: 'hybrid',
    categoryLabel: 'Engineering & Social Growth',
    summary: 'Re-engineered a legacy e-commerce storefront into a headless React web application, paired with an authentic short-form creator campaign that generated $1.4M in incremental quarterly revenue.',
    challenge: 'Suffered from a 4.2s mobile load time that depressed checkout conversions, while escalating paid customer acquisition costs eroded margins.',
    solution: 'Designed and deployed a sub-700ms headless web platform with instant checkout, supported by a 40-creator short-form TikTok seeding campaign targeting skincare routines.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Headless E-Commerce', 'TikTok Distribution', 'React', 'Design System'],
    featured: true,
    metrics: [
      { label: 'Mobile Conversion Rate', value: '+142%' },
      { label: 'Median TikTok Ad ROAS', value: '5.2x' },
      { label: 'Mobile Page Load Speed', value: '0.7s' },
      { label: 'Attributed New Revenue', value: '$1.4M' },
    ],
    testimonial: {
      quote: 'Recodey Studio gave us the technological foundation and creative discipline we desperately needed. Our mobile storefront is instantaneous, and their short-form videos consistently acquire customers at half our historical CPA.',
      author: 'Elena Rostova',
      role: 'Chief Marketing Officer, Lumina Cosmetics'
    }
  },
  {
    id: 'apexfin-tech',
    title: 'Apex Financial',
    client: 'Apex Financial Technologies',
    category: 'web-development',
    categoryLabel: 'Web Platform & Technical SEO',
    summary: 'Architected an institutional-grade financial web platform and search content hub that attracts over 250,000 monthly organic visitors from finance professionals.',
    challenge: 'Required a security-hardened web interface to onboard institutional traders, alongside an authoritative organic search footprint to displace established incumbents.',
    solution: 'Engineered a Next.js web application with sub-second page transitions, dynamic margin calculators, and comprehensive JSON-LD entity schema graph for Google indexing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Financial Platform', 'Data Architecture', 'Technical SEO', 'TypeScript'],
    featured: true,
    metrics: [
      { label: 'Organic Search Growth', value: '+380%' },
      { label: 'Google Performance Index', value: '99/100' },
      { label: 'Institutional Signups', value: '12,500+' },
      { label: 'Top-3 Keyword Rankings', value: '84' },
    ],
    testimonial: {
      quote: 'The architectural rigor of Recodey Studio is rare. They combine genuine engineering excellence with deep search strategy, taking us from invisible to market leaders.',
      author: 'Marcus Vance',
      role: 'VP of Product, Apex Financial'
    }
  },
  {
    id: 'pulse-beverages',
    title: 'Pulse Functional Drinks',
    client: 'Pulse Beverage Co.',
    category: 'social-media',
    categoryLabel: 'Short-Form Social Production',
    summary: 'Orchestrated a cultural product launch achieving 18M+ views across TikTok and Instagram, resulting in a 320% retail sell-through acceleration across national retailers.',
    challenge: 'Entering the competitive functional beverage space against legacy conglomerates with massive multi-million dollar traditional media budgets.',
    solution: 'Designed and executed a high-velocity short-form video campaign focused on consumer pattern interrupts, relatable wellness routines, and geo-targeted paid Meta ads.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    tags: ['Short-Form Video', 'Reels Strategy', 'Creator Seeding', 'Paid Meta'],
    featured: true,
    metrics: [
      { label: 'Verified Video Impressions', value: '18.4M' },
      { label: 'Organic Community Gain', value: '+140k' },
      { label: 'Retail Sell-Through Lift', value: '+320%' },
      { label: 'Average Engagement Rate', value: '9.4%' },
    ],
    testimonial: {
      quote: 'Recodey Studio understands internet culture. No corporate fluff — just sharp, engaging short-form creative that drove real customers into Whole Foods and Target to buy our cans.',
      author: 'Chloe Simmons',
      role: 'Head of Growth, Pulse Beverage Co.'
    }
  },
  {
    id: 'hypergrid-cloud',
    title: 'HyperGrid Systems',
    client: 'HyperGrid Cloud Infrastructure',
    category: 'web-development',
    categoryLabel: 'Developer Platform & Docs',
    summary: 'Designed and deployed an interactive developer platform with real-time browser terminals, crisp documentation, and zero-latency page transitions.',
    challenge: 'Technical software engineers have virtually zero patience for bloated marketing pages or clunky navigational interfaces.',
    solution: 'Built a lightweight client-side application with interactive code sandboxes, keyboard-first navigation, and comprehensive accessibility compliance.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Developer Experience', 'Next.js', 'Sub-second Latency', 'Design System'],
    featured: false,
    metrics: [
      { label: 'Average Session Length', value: '4m 12s' },
      { label: 'Developer Accounts Created', value: '34,000+' },
      { label: 'Interactive Page Load', value: '0.45s' },
      { label: 'GitHub Community Growth', value: '+6,200' },
    ],
    testimonial: {
      quote: 'Developers respected the craftsmanship immediately. Recodey Studio translated our distributed systems architecture into a pristine, instantaneous web interface.',
      author: 'David Chen',
      role: 'Co-Founder & CTO, HyperGrid'
    }
  },
  {
    id: 'veloce-motors',
    title: 'Veloce Supercars Club',
    client: 'Veloce Mobility Group',
    category: 'social-media',
    categoryLabel: 'High-Ticket Acquisition Funnel',
    summary: 'Built an exclusive membership application funnel that produced $3.2M in annual recurring memberships through cinematic short-form video and targeted LinkedIn campaigns.',
    challenge: 'Acquiring $15,000/year luxury members requires subtle visual restraint, premium storytelling, and targeted qualification without cheap sales tactics.',
    solution: 'Produced cinema-grade vertical video assets paired with a private qualification funnel and bespoke demographic retargeting.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cinematic Production', 'Private Funnel', 'LinkedIn Ads', 'High Ticket'],
    featured: false,
    metrics: [
      { label: 'Private Memberships Funded', value: '210+' },
      { label: 'Annual Contract Value', value: '$3.2M' },
      { label: 'Acquisition Cost Reduction', value: '-38%' },
      { label: 'Average Video Watch Time', value: '88%' },
    ]
  },
  {
    id: 'zeno-health',
    title: 'Zeno Health Group',
    client: 'Zeno Clinical Telehealth',
    category: 'hybrid',
    categoryLabel: 'Full-Stack Platform & Patient Growth',
    summary: 'Engineered a HIPAA-compliant patient booking portal coupled with an educational clinician short-form video strategy that grew active patients to 45,000.',
    challenge: 'Translating clinical authority into accessible modern booking flows and understandable short-form health guidance.',
    solution: 'Engineered a sub-second reactive booking interface and produced medical-board-reviewed short-form explainers across TikTok and Instagram.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Telehealth Portal', 'Health Education', 'React App', 'Search Visibility'],
    featured: false,
    metrics: [
      { label: 'Active Monthly Patients', value: '45,000' },
      { label: 'Booking Friction Drop', value: '-65%' },
      { label: 'Educational Video Reach', value: '8.7M' },
      { label: 'Patient Retention Rate', value: '92%' },
    ]
  }
];

export const TECHNICAL_BENCHMARKS = [
  {
    metric: 'Largest Contentful Paint (LCP)',
    recodey: '0.65s',
    industryAverage: '3.80s',
    whyItMatters: 'Every 100ms of latency reduction lifts conversion rates by 1.1% on mobile commerce.'
  },
  {
    metric: 'Cumulative Layout Shift (CLS)',
    recodey: '0.00',
    industryAverage: '0.24',
    whyItMatters: 'Zero page jank or jumping elements prevents accidental clicks and reduces bounce rates.'
  },
  {
    metric: 'Interaction to Next Paint (INP)',
    recodey: '28ms',
    industryAverage: '240ms',
    whyItMatters: 'Immediate visual feedback on clicks, taps, and form submissions guarantees perceived responsiveness.'
  },
  {
    metric: 'First-Load JavaScript Payload',
    recodey: '42 kB',
    industryAverage: '1,850 kB',
    whyItMatters: 'Eliminates CPU parsing bottlenecks on mobile devices and cellular networks.'
  }
];

export const SOCIAL_RETENTION_CURVE = [
  { second: '0-2s', phase: 'The Pattern Interrupt', target: 'Arrest the scroll with motion, text anchor, or contrarian premise.', retention: '92%' },
  { second: '3-7s', phase: 'The Value Escalation', target: 'Deliver immediate insight or narrative tension without throat-clearing.', retention: '74%' },
  { second: '8-12s', phase: 'The Proof Point', target: 'Demonstrate tangible outcome, visual evidence, or relatable realization.', retention: '61%' },
  { second: '13-15s', phase: 'The Natural Next Step', target: 'Frictionless call to action (comment, link in bio, or bookmark).', retention: '54%' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'core-web-vitals-seo-2026',
    slug: 'core-web-vitals-seo-ranking-factor',
    title: 'Core Web Vitals as a Ranking Moat: The Architectural Standard',
    category: 'Engineering & Search',
    excerpt: 'Search algorithms increasingly penalize bloated, slow frontends. How sub-second Largest Contentful Paint and zero layout shift generate quantifiable organic search traffic.',
    date: 'March 2, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Julian Hayes',
      role: 'Principal Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
    },
    tags: ['Web Performance', 'Technical SEO', 'Architecture', 'Next.js'],
    keyTakeaways: [
      'LCP under 1.0s correlates directly with higher organic impression share.',
      'Interaction to Next Paint (INP) requires eliminating main-thread JavaScript bloat.',
      'Valid JSON-LD schema graphs increase Google rich result click-through rates.'
    ],
    content: [
      'In modern digital search, high-quality editorial content without technical velocity fails to rank. Search crawlers prioritize web applications that preserve user attention and battery life.',
      'When auditing prospective clients at Recodey Studio, we routinely observe bloated third-party tag managers, unoptimized custom fonts, and shifting layout elements that drag down organic positions.',
      'Our studio applies a zero-compromise architectural threshold: static generation at the edge, sub-50ms server responses, responsive AVIF image sets, and surgical CSS delivery.',
      'The business consequence is immediate: clients rebuilding their platforms under our specifications experience double-digit lifts in search impression volume within the first two crawl cycles.'
    ]
  },
  {
    id: 'short-form-video-conversions',
    slug: 'short-form-video-viral-marketing-playbook',
    title: 'The Direct-Response Playbook: Crafting Retention-First Short-Form Video',
    category: 'Social Distribution',
    excerpt: 'Moving past superficial vanity views. The structural anatomy of 15-second TikTok and Instagram Reels that trigger algorithm distribution and convert viewers into customers.',
    date: 'February 24, 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Maya Lin',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80'
    },
    tags: ['Short-Form Video', 'Retention Economics', 'Creator Strategy', 'Paid Media'],
    keyTakeaways: [
      'The first 2.0 seconds determine up to 80% of an algorithm’s distribution tier.',
      'Visual pattern interrupts consistently outperform spoken greetings or corporate title cards.',
      'Organic high-retention winners should be instantly repurposed into whitelisted paid ad creative.'
    ],
    content: [
      'Virtually every consumer brand recognizes the necessity of publishing short-form video. Yet the majority produce self-absorbed, television-style advertisements that get discarded within milliseconds.',
      'Our social distribution methodology is grounded in viewer psychology, pacing, and community nuance. An authentic clip recorded with raw perspective will routinely outperform a $50,000 studio commercial.',
      'We adhere to a four-part anatomical structure: 1) The Pattern Interrupt (0-2s) to arrest scrolling, 2) The Value Escalation (3-7s), 3) The Empirical Proof (8-12s), and 4) The Frictionless Action (13-15s).',
      'By evaluating 3-second hook rates and retention drop-offs each morning, our team iterates creative assets to reliably hit six-figure view thresholds.'
    ]
  },
  {
    id: 'headless-cms-vs-monolith',
    slug: 'headless-cms-vs-traditional-wordpress',
    title: 'Headless Commerce vs. Monolithic CMS: Architectural Decision Framework',
    category: 'Systems Design',
    excerpt: 'Evaluating the true total cost of ownership, developer velocity, and security trade-offs between monolithic website builders and modern headless architectures.',
    date: 'February 15, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Julian Hayes',
      role: 'Principal Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
    },
    tags: ['Headless Architecture', 'Next.js', 'Security', 'Engineering'],
    keyTakeaways: [
      'Decoupled presentation layers eliminate plugin security vulnerabilities.',
      'Global edge CDNs deliver content with uniform low latency worldwide.',
      'Editorial teams retain intuitive content workflows while code stays cleanly versioned.'
    ],
    content: [
      'Monolithic content platforms powered early web commerce effectively. However, as modern brands require app-like fluid transitions and omni-channel distribution, legacy architectures struggle with plugin bloat.',
      'By decoupling your frontend using React, Next.js, and modern headless services, marketing teams enjoy intuitive editing while your site remains blisteringly fast.',
      'At Recodey Studio, our headless deployments build and preview in seconds, eliminating accidental regression risks.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Jenkins',
    clientRole: 'Chief Executive Officer',
    company: 'Novus Retail Group',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Recodey Studio operates with a level of precision and honesty rarely found in agencies. Our mobile conversion rate surged by 142% in our first quarter, and our social acquisition channels went from cash-drain to highly profitable.',
    results: '+142% Conversion Rate Lift',
    serviceProvided: 'Web Engineering & Social Strategy'
  },
  {
    id: '2',
    clientName: 'Alexander Thorne',
    clientRole: 'Managing Partner',
    company: 'Vanguard Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Partnering with an agency that genuinely masters both rigorous software engineering and culture-fluent social distribution felt impossible until we engaged Recodey Studio. They delivered our flagship in six weeks without compromise.',
    results: '0.6s LCP & 4.8x Median ROAS',
    serviceProvided: 'Full-Funnel Transformation'
  },
  {
    id: '3',
    clientName: 'Priya Sharma',
    clientRole: 'Head of Brand',
    company: 'Kinetix Health',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    quote: 'Our previous agency gave us template code and stagnant posts. Recodey Studio rebuilt our web application with refined typography and launched short-form content that consistently commands industry attention.',
    results: '4.2M Attributed Video Views',
    serviceProvided: 'Web Platform & Short-Form Media'
  }
];

export const SEO_KEYWORDS_MATRIX = [
  { keyword: 'website development company', volume: '74,000/mo', difficulty: 'Hard', intent: 'Commercial', rankReady: true },
  { keyword: 'social media marketing agency', volume: '110,000/mo', difficulty: 'Competitive', intent: 'Commercial', rankReady: true },
  { keyword: 'headless ecommerce development', volume: '18,500/mo', difficulty: 'Medium', intent: 'Transactional', rankReady: true },
  { keyword: 'short-form video production agency', volume: '22,400/mo', difficulty: 'Medium', intent: 'Commercial', rankReady: true },
  { keyword: 'technical SEO audit services', volume: '14,200/mo', difficulty: 'Medium', intent: 'Transactional', rankReady: true },
  { keyword: 'next.js development agency', volume: '29,000/mo', difficulty: 'Competitive', intent: 'Commercial', rankReady: true },
];

export const FAQS = [
  {
    q: 'How does Recodey Studio combine web engineering and social distribution?',
    a: 'Traditional agencies either write code or produce social posts. The result is a broken transition: high social traffic hits a slow, non-converting website. Recodey Studio integrates both disciplines under one roof: we engineer ultra-fast digital platforms and power them with algorithmic social media content and paid ads to maximize your return.'
  },
  {
    q: 'How do you ensure web platforms rank on search engines?',
    a: 'We build every platform with search engine mechanics in mind from day one: semantic HTML5, sub-second Core Web Vitals (LCP < 0.8s, CLS = 0, INP < 50ms), dynamic JSON-LD structured schemas, Open Graph metadata, and keyword-targeted architecture.'
  },
  {
    q: 'What is your typical project timeline and turnaround?',
    a: 'For custom web development sprints, we deliver production-ready platforms within 4 to 6 weeks. For social media distribution and short-form video production, onboarding and creative shoot sprints begin within 7 business days, with daily publishing and ad optimization running continuously.'
  },
  {
    q: 'Can you optimize existing websites, or do you only build from scratch?',
    a: 'Both. If your existing codebase has solid architecture, we perform Core Web Vitals remediation, design system upgrades, and conversion rate optimization. If the platform is constrained by legacy CMS bloat, we propose a clean, modern headless rebuild.'
  },
  {
    q: 'How do you measure and report marketing ROI?',
    a: 'We avoid vanity metrics. We provide transparent client dashboards tracking verified business KPIs: Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), customer pipeline value, qualified inbound sales inquiries, and organic search rank progression.'
  }
];
