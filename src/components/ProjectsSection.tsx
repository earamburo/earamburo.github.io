import ProjectCard from './ProjectCard';

// Import project images
import dashboardImage from '@/assets/project-dashboard.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import arImage from '@/assets/project-ar.jpg';
import designSystemImage from '@/assets/project-design-system.jpg';
import collaborationImage from '@/assets/project-collaboration.jpg';
import aiContentImage from '@/assets/project-ai-content.jpg';

const projects = [
  {
    title: "3D Interactive Self Checkout Unit",
    description: "An interactive web application that allows users to explore, customize, and visualize products in real time. Built with React and modern 3D rendering libraries, the configurator provides smooth rotation, zoom, and customization features, enabling users to see their choices come to life instantly.",
    image: dashboardImage,
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Victory.js Interactive Dashboard",
    description: "A comprehensive analytics dashboard featuring real-time data visualizations built with Victory.js and React. Includes interactive charts, particle systems, and responsive design.",
    image: ecommerceImage,
    technologies: ["React", "Next.js", "Victory.js", "Bootstap", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NCR Voyix Rebrand",
    description: "Augmented reality web application allowing users to visualize products in their environment using WebXR APIs and machine learning for object detection.",
    image: arImage,
    technologies: ["WordPress", "React.js"],
    liveUrl: "https://ncrvoyix.com/",
    githubUrl: "#",
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

        <div className="text-center mt-16">
          <button className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-lg bg-transparent hover:bg-primary/10 transition-all duration-300 glow-primary group">
            <span>View All Projects</span>
            <div className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
              →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}