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
    title: "3D Interactive Dashboard",
    description: "A comprehensive analytics dashboard featuring real-time 3D data visualizations built with Three.js and React. Includes interactive charts, particle systems, and responsive design.",
    image: dashboardImage,
    technologies: ["React", "Three.js", "TypeScript", "D3.js", "WebGL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced filtering, real-time inventory management, and seamless checkout experience. Built with performance optimization in mind.",
    image: ecommerceImage,
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AR Product Visualizer",
    description: "Augmented reality web application allowing users to visualize products in their environment using WebXR APIs and machine learning for object detection.",
    image: arImage,
    technologies: ["WebXR", "Three.js", "TensorFlow.js", "React", "WebGL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design System Library",
    description: "Comprehensive component library and design system used across multiple products. Features automated testing, documentation, and theming capabilities.",
    image: designSystemImage,
    technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS", "Jest"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Multi-user collaborative workspace with live cursors, real-time editing, and integrated voice chat. Optimized for low latency and high concurrent users.",
    image: collaborationImage,
    technologies: ["React", "Socket.io", "Node.js", "WebRTC", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI-Powered Content Generator",
    description: "Intelligent content creation platform leveraging GPT models for generating marketing copy, blog posts, and social media content with custom brand voice training.",
    image: aiContentImage,
    technologies: ["React", "OpenAI API", "Python", "FastAPI", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A showcase of my latest work combining cutting-edge technology 
            with thoughtful design to create memorable user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
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