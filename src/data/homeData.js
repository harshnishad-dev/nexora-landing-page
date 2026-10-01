import heroBg from '../assets/hero-bg.jpg';
import whyChooseUsImg from '../assets/why-choose-us.jpg';
import blog1Img from '../assets/blog-1.jpg';
import blog2Img from '../assets/blog-2.jpg';
import blog3Img from '../assets/blog-3.jpg';

export const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' }
];

export const heroData = {
  overline: 'BUILD A BRIGHTER TOMORROW',
  titlePart1: 'Smart Solutions',
  titlePart2: 'for a',
  titleHighlight: 'Sustainable Future',
  description: 'We create innovative digital products and services that help businesses grow, people connect and the planet thrive.',
  primaryCta: 'Explore Our Products',
  secondaryCta: 'Watch Video',
  bgImage: heroBg
};

export const statsData = [
  {
    id: 1,
    value: '10K+',
    label: 'Happy Customers',
    iconType: 'leaf'
  },
  {
    id: 2,
    value: '500+',
    label: 'Projects Delivered',
    iconType: 'building'
  },
  {
    id: 3,
    value: '4.8/5',
    label: 'Customer Satisfaction',
    iconType: 'star'
  },
  {
    id: 4,
    value: '12+',
    label: 'Countries',
    iconType: 'globe'
  }
];

export const productsData = [
  {
    id: 'project-flow',
    title: 'ProjectFlow',
    description: 'Manage your projects, teams and deadlines with ease.',
    category: 'Productivity',
    iconType: 'grid',
    iconColor: '#10b981',
    iconBg: '#ecfdf5',
    themeColor: '#10b981',
    fullDescription: 'ProjectFlow delivers intuitive task scheduling, customizable agile boards, smart timeline Gantt charts, and resource management to keep distributed teams synchronized on critical milestones.',
    features: [
      'Interactive Kanban and sprint boards',
      'Automated dependency resolution and milestone alerts',
      'Resource capacity planning and workload distribution',
      'Two-way sync with GitHub, GitLab, and Jira'
    ],
    pricing: '$12/mo',
    rating: '4.9/5'
  },
  {
    id: 'team-sync',
    title: 'TeamSync',
    description: 'Better collaboration for remote teams.',
    category: 'Collaboration',
    iconType: 'users',
    iconColor: '#8b5cf6',
    iconBg: '#f5f3ff',
    themeColor: '#8b5cf6',
    fullDescription: 'TeamSync bridges the distance for remote-first and hybrid organizations with high-definition audio/video huddles, interactive canvas whiteboards, and intelligent async status updates.',
    features: [
      'Crystal-clear HD video and spatial audio huddles',
      'Infinite digital whiteboard with live multi-cursor co-authoring',
      'Smart meeting summaries and automated action items',
      'End-to-end encrypted messaging channels'
    ],
    pricing: '$9/mo',
    rating: '4.8/5'
  },
  {
    id: 'insight-pro',
    title: 'InsightPro',
    description: 'Turn data into actionable insights.',
    category: 'Analytics',
    iconType: 'chart',
    iconColor: '#f59e0b',
    iconBg: '#fffbeb',
    themeColor: '#f59e0b',
    fullDescription: 'InsightPro connects data silos into coherent, interactive business intelligence dashboards with automated anomaly discovery, cohort retention metrics, and predictive forecasting.',
    features: [
      'Real-time streaming pipeline dashboards',
      'AI-powered anomaly detection and trend forecasting',
      'Visual query builder with instant SQL export',
      'Scheduled executive summaries via email and Slack'
    ],
    pricing: '$24/mo',
    rating: '4.9/5'
  },
  {
    id: 'cloud-drive',
    title: 'CloudDrive',
    description: 'Secure and flexible cloud storage for your business.',
    category: 'Cloud',
    iconType: 'cloud',
    iconColor: '#0ea5e9',
    iconBg: '#eff6ff',
    themeColor: '#0ea5e9',
    fullDescription: 'CloudDrive provides modern enterprise-grade cloud storage equipped with client-side zero-knowledge encryption, version control rollback, and high-speed multi-region global distribution.',
    features: [
      '256-bit AES client-side encryption and SOC2 compliance',
      'Unlimited file revision history and instant rollback',
      'Granular permission tiers and password-protected sharing',
      'Direct command-line CLI and desktop virtual sync drive'
    ],
    pricing: '$15/mo',
    rating: '4.7/5'
  }
];

export const whyChooseUsData = {
  overline: 'WHY CHOOSE US',
  title: 'Built for Your Success',
  description: 'We combine technology, creativity and support to help you achieve more, faster.',
  features: [
    'Easy to use and get started',
    'Scalable for growing teams',
    '24/7 expert support',
    'Trusted by 10,000+ businesses'
  ],
  buttonText: 'Learn More',
  image: whyChooseUsImg,
  floatingCards: [
    {
      id: 'card-1',
      title: 'Faster',
      subtitle: 'Performance',
      iconType: 'zap',
      color: '#10b981',
      bg: '#ecfdf5'
    },
    {
      id: 'card-2',
      title: 'Enterprise',
      subtitle: 'Grade Security',
      iconType: 'shield',
      color: '#8b5cf6',
      bg: '#f5f3ff'
    },
    {
      id: 'card-3',
      title: 'Dedicated',
      subtitle: 'Support',
      iconType: 'users',
      color: '#0ea5e9',
      bg: '#eff6ff'
    }
  ]
};

export const blogPostsData = [
  {
    id: 1,
    image: blog1Img,
    date: 'May 15, 2025',
    title: 'The Future of Remote Work',
    excerpt: 'Discover how technology is reshaping the way we work and collaborate.',
    readTime: '4 min read'
  },
  {
    id: 2,
    image: blog2Img,
    date: 'May 10, 2025',
    title: 'Sustainability in Tech',
    excerpt: 'How digital innovation can help build a more sustainable planet.',
    readTime: '5 min read'
  },
  {
    id: 3,
    image: blog3Img,
    date: 'May 5, 2025',
    title: '5 Tips for Better Team Collaboration',
    excerpt: 'Improve communication and productivity with these simple tips.',
    readTime: '6 min read'
  }
];

export const ctaData = {
  title: 'Ready to Build Something Great?',
  description: 'Join thousands of businesses already using Nexora.',
  buttonText: 'Get Started Free'
};

export const footerData = {
  brand: 'Nexora',
  links: ['Home', 'Products', 'Solutions', 'About', 'Blog'],
  socials: ['linkedin', 'twitter', 'facebook', 'instagram', 'youtube'],
  copyright: '© 2025 Nexora. All rights reserved.',
  legal: ['Privacy', 'Terms', 'Contact']
};
