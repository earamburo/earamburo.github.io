export interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  year: string;
  bullets: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Inspire Brands',
    dates: 'Jul 2024 – Aug 2025',
    year: '2024',
    bullets: [
      "Designed scalable front-end architecture across Arby's and GoodR storefronts.",
      'Built a Next.js storefront improving load times and conversion rates significantly.',
      'Implemented order flow — Bag, Tally, Confirmation — with Redux and GraphQL.',
      'Led accessibility efforts achieving AA compliance, reducing Lighthouse issues 30%.',
      'Contributed to discount logic (MBDP, BuyX_GetY) for complex pricing scenarios.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'Material UI', 'Tailwind'],
  },
  {
    title: 'UI/UX Engineer',
    company: 'NCR Voyix',
    dates: 'Jul 2020 – Jul 2024',
    year: '2020',
    bullets: [
      'Architected the NCR SCO 2024 3D Self-Checkout Configurator — a React-based interactive sales tool.',
      'Built and maintained a design system with custom tokens and IcoMoon glyphs.',
      "Enhanced NCR Voyix's main site with SSR, Node.js, and dynamic React components.",
      'Delivered SaaS platforms, dashboards, and microsites for major global enterprise clients.',
      'Implemented NVDA-compatible AA/AAA accessibility across multiple platforms.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Design Systems', 'A11y'],
  },
  {
    title: 'Software Engineer',
    company: 'GoodR',
    dates: 'Jul 2020 – Jun 2021',
    year: '2020',
    bullets: [
      'Modernized internal tools and built scalable UI architecture.',
      'Migrated legacy Angular codebase to React, accelerating delivery.',
      'Integrated Material UI and Victory.js for data visualization.',
      'Designed and delivered responsive UI/UX across company platforms.',
    ],
    tech: ['React', 'React Native', 'Node.js', 'Bootstrap', 'Material UI', 'Victory.js'],
  },
  {
    title: 'Full Stack Engineer',
    company: 'StudentBridge',
    dates: 'Jul 2018 – Jun 2020',
    year: '2018',
    bullets: [
      'Increased sales performance by 25% via interactive web apps and rich media.',
      'Built web scraping bots (Python, Chromium) for automated data acquisition.',
      'Built custom internal tools for customer acquisition with Vue.js and Node.js.',
    ],
    tech: ['Vue.js', 'Node.js', 'Python', 'Chromium', 'Databases'],
  },
  {
    title: 'Frontend Engineer',
    company: 'Freelance',
    dates: '2018 – Present',
    year: '2018',
    bullets: [
      'Built prototypes: sports analytics, AI golf tracking, social discovery apps.',
      'Developed an Atlanta social hotspot app with chat and real-time geo features.',
      'Explored 3D web experiences, car configurators, and AI-enhanced tools.',
    ],
    tech: ['React Native', 'Expo', 'Node.js', 'Python', 'AI APIs', 'OCR', '3D Web'],
  },
];
