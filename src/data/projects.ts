import voyixImage from '@/assets/voyix-sh.png';
import scoImage from '@/assets/3dconfig.jpg';
import kopeAgencyImage from '@/assets/kopeagency.png';
import findAppImage from '@/assets/find-app-thumbnail.png';
import matrixImage from '@/assets/matrix.png';
import minimapImage from '@/assets/promo-tile-size.png';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string | null;
  featured?: boolean;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    title: "Claude Minimap Navigator",
    description:
      "A Chrome extension that adds a minimap navigator to Claude conversations — click to jump to any message instantly and hover to preview content without scrolling.",
    image: minimapImage,
    technologies: ["Chrome Extension", "TypeScript", "JavaScript"],
    liveUrl: "https://chromewebstore.google.com/detail/claude-chat-minimap-navig/kimnmchgkacjjbbgmbjflghhnnihajgp?hl=en-US&utm_source=ext_sidebar",
    githubUrl: "https://github.com/earamburo/claude-minimap-navigator",
    featured: true,
  },
  {
    title: "NCR Voyix Rebrand",
    description:
      "Led frontend development for NCR Voyix's rebrand — enterprise-scale React and WordPress platform serving global enterprise clients.",
    image: voyixImage,
    technologies: ["WordPress", "React.js"],
    liveUrl: "https://ncrvoyix.com/",
    githubUrl: null,
    featured: true,
  },
  {
    title: "3D Self Checkout Configurator",
    description:
      "An interactive web application for real-time 3D product visualization and customization. Smooth rotation, zoom, and live configuration built for enterprise sales.",
    image: scoImage,
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://www.youtube.com/watch?v=1pKCyhj16AA",
    githubUrl: "https://www.linkedin.com/pulse/ideation-creation-self-checkout-configurator-taylor-mcdonnell-mkp2e/",
    featured: true,
  },
  {
    title: "Find App",
    description:
      "A mobile-first social app prototype that lets users discover and share their favorite local spots. Combines geolocation with chat threads so friends can tag restaurants, bars, and experiences.",
    image: findAppImage,
    technologies: ["Figma", "React Native", "Expo", "TypeScript", "Firebase"],
    liveUrl: '/assets/find-app-prototype.mp4',
    githubUrl: '/assets/find-app-mockups.png',
  },
  {
    title: "Matrix Terminal",
    description:
      "A text-based adventure game inspired by The Matrix where your choices shape your destiny. Take the red or blue pill and navigate through branching storylines with multiple endings.",
    image: matrixImage,
    technologies: ["Python", "Pyodide"],
    liveUrl: '/matrix',
    githubUrl: '',
    hidden: true,
  },
  {
    title: "Kope Agency Designs",
    description:
      "A modern design system and web experience built for a creative agency concept. Focused on clean typography, bold visuals, and responsive layouts.",
    image: kopeAgencyImage,
    technologies: ["Figma", "Illustrator", "React", "Next.js"],
    liveUrl: '/assets/Kope-Agency.pdf',
    githubUrl: null,
    hidden: true,
  },
];
