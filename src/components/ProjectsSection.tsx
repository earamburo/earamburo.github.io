import ProjectCard from './ProjectCard';
import dashboardImage from '@/assets/project-dashboard.png';
import voyixImage from '@/assets/voyix-sh.png'
import scoImage from '@/assets/3dconfig.jpg'
import kopeAgencyImage from '@/assets/kopeagency.png'
import findAppImage from '@/assets/find-app-thumbnail.png'

const projects = [
  {
    title: "Find App",
    description:
      "A mobile-first social app prototype that lets users discover and share their favorite local spots. Designed with an intuitive map interface and real-time filters, it combines geolocation with chat threads so friends can tag restaurants, bars, and experiences in their city.",
    image: findAppImage, 
    technologies: ["Figma, React Native", "Expo", "TypeScript", "Firebase"],
    liveUrl: '/assets/find-app-prototype.mp4', 
    githubUrl: '/assets/find-app-mockups.png', 
  },
  {
    title: "Kope Agency Designs",
    description:
      "A modern design system and web experience built for a creative agency concept. Focused on clean typography, bold visuals, and responsive layouts, the designs highlight branding flexibility and deliver a polished user experience across desktop and mobile.",
    image: kopeAgencyImage,
    technologies: ["Figma", "Illustrator",,"React", "Next.js"],
    liveUrl: '/assets/Kope-Agency.pdf', 
    githubUrl: null,
  },
  {
    title: "3D Interactive Self Checkout Unit",
    description: "An interactive web application that allows users to explore, customize, and visualize products in real time. Built with React and modern 3D rendering libraries, the configurator provides smooth rotation, zoom, and customization features, enabling users to see their choices come to life instantly.",
    image: scoImage,
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://www.youtube.com/watch?v=1pKCyhj16AA",
    githubUrl: "https://www.linkedin.com/pulse/ideation-creation-self-checkout-configurator-taylor-mcdonnell-mkp2e/",
    featured: true,
  },
  {
    title: "Victory.js Interactive Dashboard",
    description: "A comprehensive analytics dashboard featuring real-time data visualizations built with Victory.js and React. Includes interactive charts, particle systems, and responsive design.",
    image: dashboardImage,
    technologies: ["React", "React Native", "Next.js", "Victory.js", "Bootstap", "PostgreSQL"],
    liveUrl: "/assets/victory.mp4",
    githubUrl: "/assets/new-dash.pdf",
  },
  {
    title: "NCR Voyix Rebrand",
    description: "Augmented reality web application allowing users to visualize products in their environment using WebXR APIs and machine learning for object detection.",
    image: voyixImage,
    technologies: ["WordPress", "React.js"],
    liveUrl: "https://ncrvoyix.com/",
    githubUrl: null,
    featured: true
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A showcase of my latest work combining cutting-edge technology
            with thoughtful design to create memorable user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in min-h-500"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <button className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-lg bg-transparent hover:bg-primary/10 transition-all duration-300 glow-primary group">
            <span>View All Projects</span>
            <div className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
              →
            </div>
          </button>
        </div> */}
      </div>
    </section>
  );
}