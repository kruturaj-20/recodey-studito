export type ServiceCategory = 'web-development' | 'social-media' | 'hybrid';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  keyMetrics: string;
  deliverables: string[];
  techStack: string[];
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'web-development' | 'social-media' | 'hybrid';
  categoryLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  featured?: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Engineering & Search' | 'Social Distribution' | 'Systems Design' | 'Engineering' | 'Social Growth' | 'SEO & Search' | 'Strategy';
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  serviceType: 'web-development' | 'social-media' | 'full-funnel' | 'seo-audit';
  budget: string;
  timeline: string;
  message: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  quote: string;
  results: string;
  serviceProvided: string;
}
