import { ServiceItem, Testimonial, TeamMember, BlogPost, PricingPlan } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'seo-sem',
    title: 'Seo/Sem',
    category: 'Search Optimization',
    tagline: 'High-intent search traffic and precision Google Ads bidding',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    colorTheme: 'yellow',
    badgeBg: 'bg-[#FFF8E7]',
    iconColor: 'text-[#D97706]',
    borderColor: 'border-[#FDE68A]',
    features: [
      'Comprehensive Technical SEO Audits',
      'High-Intent Keyword Cluster Modeling',
      'Google Search & Performance Max Campaigns',
      'Programmatic Content Silos',
      'Local & Global SERP Dominance'
    ],
    metrics: '+240% Organic Inbound Traffic',
    deliverables: ['Weekly Keyword Tracker', 'Ad Spend Optimization', 'Schema Markup Setup']
  },
  {
    id: 'marketing',
    title: 'Marketing',
    category: 'Full-Funnel Growth',
    tagline: 'Multi-channel acquisition pipelines converting curious prospects',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    colorTheme: 'green',
    badgeBg: 'bg-[#EBF9F1]',
    iconColor: 'text-[#059669]',
    borderColor: 'border-[#A7F3D0]',
    features: [
      'Multi-Touch Attribution Modeling',
      'High-Converting Meta & TikTok Funnels',
      'Lifecycle Email & SMS Automation',
      'Landing Page Conversion Rate Optimization',
      'Creative Performance Iteration Sprints'
    ],
    metrics: '4.8x ROAS Sustained Over 12 Months',
    deliverables: ['Funnel Architecture Blueprint', 'Ad Creative Asset Library', 'Cohort Retention Dashboard']
  },
  {
    id: 'viral-campaign',
    title: 'Viral Campaign',
    category: 'Cultural Traction',
    tagline: 'Exponential social reach, influencer buzz, and trendjacking',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    colorTheme: 'purple',
    badgeBg: 'bg-[#F3E8FF]',
    iconColor: 'text-[#7C3AED]',
    borderColor: 'border-[#DDD6FE]',
    features: [
      'Engineered TikTok & Reels Growth Stunts',
      'Micro & Macro Creator Seeding',
      'Cultural Moment Trendjacking Sprints',
      'Community Meme & Interactive Content',
      'Press Amplification & Earned Media'
    ],
    metrics: '48M+ Organic Impressions in 30 Days',
    deliverables: ['Creator Outreach Playbook', 'High-Impact Video Scripts', 'Earned Media Press Release']
  },
  {
    id: 'others',
    title: 'Others',
    category: 'Bespoke Solutions',
    tagline: 'Custom web development, brand systems, and AI automation',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
    colorTheme: 'red',
    badgeBg: 'bg-[#FFEBEB]',
    iconColor: 'text-[#DC2626]',
    borderColor: 'border-[#FECACA]',
    features: [
      'Complete Brand Identity & Design Systems',
      'Modern High-Velocity Web & App Development',
      'AI-Powered Lead Routing & CRM Sync',
      'Executive Ghostwriting & Thought Leadership',
      'Dedicated Fractional CMO Advisory'
    ],
    metrics: '99.2% Satisfaction Score',
    deliverables: ['Brand Guidelines Deck', 'Design System Figma Library', 'CRM Automation Architecture']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Joseph Ryan',
    role: 'Executive CEO',
    company: 'Nexus Logistics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    quote: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    rating: 5,
    highlightMetric: '+320% Revenue'
  },
  {
    id: '2',
    name: 'Ashley Juan',
    role: 'Executive CEO',
    company: 'Apex Cloudware',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    quote: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    rating: 5,
    highlightMetric: '4.2x Pipeline'
  },
  {
    id: '3',
    name: 'Yuan Geh',
    role: 'Executive CEO',
    company: 'Starlight Retail',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    quote: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    rating: 5,
    highlightMetric: '$2.8M Added'
  },
  {
    id: '4',
    name: 'Sarah Al-Mansoor',
    role: 'Head of Growth',
    company: 'FinPulse Group',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    quote: "Working with BrandBuzz completely transformed our customer acquisition economics. Every dollar is tracked.",
    rating: 5,
    highlightMetric: '-44% CAC'
  },
  {
    id: '5',
    name: 'Marcus Vance',
    role: 'Co-Founder & COO',
    company: 'HyperShift Studio',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    quote: "The liquid responsiveness, creative depth, and sharp analytics make them our secret growth weapon.",
    rating: 5,
    highlightMetric: '15M Impressions'
  }
];

export const teamData: TeamMember[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'Chief Growth Officer',
    department: 'Strategy & Leadership',
    bio: 'Former VP of Growth with 12+ years scaling SaaS and e-commerce companies from zero to $50M ARR.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80',
    skills: ['Funnel Architecture', 'Multi-touch Attribution', 'Growth Loops']
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Head of Search & Paid Media',
    department: 'Performance',
    bio: 'PPC and SEO engineer managing $18M annual ad spend with consistent positive ROI multipliers.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
    skills: ['Performance Max', 'Programmatic SEO', 'Google Ads']
  },
  {
    id: 't3',
    name: 'Maya Lin',
    role: 'Creative Director & Viral Lead',
    department: 'Creative & Culture',
    bio: 'Award-winning storyteller whose campaigns have generated over 250M views across TikTok and Instagram.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    skills: ['Short-Form Video', 'Creative Strategy', 'Influencer Seeding']
  },
  {
    id: 't4',
    name: 'Kofi Mensah',
    role: 'Lead Data Architect',
    department: 'Analytics & CRO',
    bio: 'Specialist in custom conversion rate tracking, predictive LTV modeling, and heatmapping experimentation.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
    skills: ['CRO Testing', 'Mixpanel', 'BigQuery Analytics']
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'b1',
    title: 'How We Scaled B2B Pipeline by 310% Using Short-Form Social',
    excerpt: 'The untraditional playbook for generating high-intent enterprise discovery calls from executive TikTok and LinkedIn video loops.',
    content: `Many B2B brands believe short-form video is strictly reserved for D2C lifestyle products. In reality, decision-makers—from VPs of Engineering to Chief Marketing Officers—spend over 45 minutes daily consuming bite-sized analysis on their feeds.

By shifting from generic whitepapers to 60-second teardowns of industry bottlenecks, our client Apex Cloudware generated 34 qualified enterprise demo requests in 90 days with zero paid ad spend.

Key Takeaways:
1. Speak directly to pain, not product features.
2. Hook in the first 2.5 seconds with counter-intuitive metrics.
3. Funnel organic attention directly to a frictionless 1-click booking calendar.`,
    category: 'Strategy',
    readTime: '4 min read',
    date: 'Sep 21, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    tags: ['B2B Growth', 'Video Strategy', 'Conversion']
  },
  {
    id: 'b2',
    title: 'The Death of Cookie Tracking: Navigating Privacy & Real Attribution',
    excerpt: 'How modern growth teams utilize server-side tracking and blended MER (Marketing Efficiency Ratio) to safeguard ad efficiency.',
    content: `First-party cookies, iOS privacy updates, and browser tracking restrictions have decimated legacy conversion pixels. Marketers relying on last-click attribution are operating blind.

In this deep dive, our Data Architecture team outlines how we engineer server-side conversions through CAPI and blend MMM (Media Mix Modeling) with bottom-up cohort analysis.

Key Takeaways:
1. Implement Server-to-Server Conversions API on Meta & Google.
2. Evaluate blended Marketing Efficiency Ratio (MER) alongside in-platform ROAS.
3. Build proprietary customer data silos that you own outright.`,
    category: 'AI & Tech',
    readTime: '6 min read',
    date: 'Sep 18, 2026',
    author: {
      name: 'Kofi Mensah',
      role: 'Lead Data Architect',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    tags: ['Data Science', 'Attribution', 'AdTech']
  },
  {
    id: 'b3',
    title: 'Programmatic SEO in 2026: Generating 500k Monthly Visits at Low Cost',
    excerpt: 'Why high-utility database-driven landing pages are outperforming manual keyword blog posts across competitive verticals.',
    content: `Instead of writing 100 individual articles, learn how we architected dynamic template engines that automatically answer search queries with live calculators, comparative benchmarks, and localized data.

This approach enabled Starlight Retail to capture 420,000 monthly unique visitors in competitive consumer categories without inflating agency overhead.

Key Takeaways:
1. Identify high-intent repetitive search formats.
2. Aggregate clean structured data into scalable database models.
3. Ensure human editorial oversight to maintain Google quality score invariants.`,
    category: 'Growth',
    readTime: '5 min read',
    date: 'Sep 14, 2026',
    author: {
      name: 'David Chen',
      role: 'Head of Search',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80'
    },
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80',
    tags: ['SEO', 'Programmatic', 'Organic Search']
  },
  {
    id: 'b4',
    title: 'The Viral Formula: Anatomy of a 10M-View Organic Brand Stunt',
    excerpt: 'Deconstructing the exact psychological triggers and meme mechanics that sparked organic coverage on TechCrunch, Bloomberg, and TikTok.',
    content: `Viral success isn't random lightning—it is an engineered chemical reaction between cultural tension, self-deprecating humor, and frictionless participation.

Here is the exact step-by-step breakdown of how our creative squad took a dormant product release and orchestrated a collaborative viral wave.

Key Takeaways:
1. Identify existing online community discourse and subvert expectations.
2. Equip creators with customizable meme assets, not rigid talking points.
3. Prepare conversion landing pages to withstand traffic surges.`,
    category: 'Case Study',
    readTime: '7 min read',
    date: 'Sep 09, 2026',
    author: {
      name: 'Maya Lin',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
    tags: ['Viral Marketing', 'Earned Media', 'PR']
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Sprint',
    description: 'Ideal for emerging brands and high-potential startups seeking traction.',
    monthlyPrice: 2490,
    annualPrice: 1990,
    features: [
      'Comprehensive Technical & SEO Audit',
      '2 Paid Ad Channels (Meta & Google)',
      'Bi-weekly Performance Reports',
      '4 High-Converting Ad Creative Sets / Month',
      'Direct Slack Channel with Growth Lead'
    ],
    ctaText: 'Get Started with Starter'
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    description: 'Our most popular comprehensive retainer for scaling revenues quickly.',
    monthlyPrice: 4890,
    annualPrice: 3910,
    isPopular: true,
    features: [
      'Full-Funnel Omni-Channel Paid Media Management',
      'Dedicated Short-Form Viral Video Sprints',
      'Advanced Conversion Rate Optimization (CRO)',
      'Custom Server-Side Attribution Tracking',
      'Bi-weekly Strategic Review & Executive Dashboards',
      'Unlimited Ad Creative Refresh Iterations'
    ],
    ctaText: 'Accelerate with Growth'
  },
  {
    id: 'enterprise',
    name: 'Dominance & Scale',
    description: 'Bespoke growth apparatus for enterprise operators & venture-backed leaders.',
    monthlyPrice: 8990,
    annualPrice: 7190,
    features: [
      'Dedicated Fractional CMO & 4-Person Creative Pod',
      'Programmatic SEO Machine with Custom Content Silos',
      'Global Creator & Influencer Seeding Campaigns',
      'Predictive LTV & Churn Modeling on Data Warehouse',
      '24/7 Priority Hotline & On-Demand Turnaround',
      'Custom Brand Identity & Web App Development Sprints'
    ],
    ctaText: 'Schedule Executive Briefing'
  }
];
