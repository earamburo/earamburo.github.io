import { useState, useEffect } from 'react';
import Scene3D from './Scene3D';
import Navigation from './Navigation';
import Hero from './Hero';
import ProjectsSection from './ProjectsSection';

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Scene3D />
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      <main>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>
        <div id="about" className="min-h-screen flex items-center justify-center">
          <div className="hologram-panel p-12 rounded-2xl max-w-4xl mx-6">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  I'm a passionate frontend engineer with 5+ years of experience creating 
                  innovative digital experiences. My background in graphic design allows me 
                  to bridge the gap between aesthetics and functionality.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I specialize in React, Three.js, and modern web technologies, with a 
                  focus on performance, accessibility, and user experience. I love pushing 
                  the boundaries of what's possible on the web.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>React & TypeScript</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>Three.js & WebGL</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex justify-between">
                  <span>UI/UX Design</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>

        <div id="experience" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="hologram-panel p-8 rounded-2xl border-l-4 border-primary">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold text-gradient-secondary">Senior Frontend Engineer</h3>
                  <span className="text-primary font-medium">2022 - Present</span>
                </div>
                <h4 className="text-lg text-foreground/80 mb-4">TechCorp Inc.</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Led the development of a 3D data visualization platform using React and Three.js. 
                  Improved performance by 40% and user engagement by 60%. Mentored junior developers 
                  and established design system standards.
                </p>
              </div>
              
              <div className="hologram-panel p-8 rounded-2xl border-l-4 border-secondary">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-2xl font-bold text-gradient-primary">Frontend Developer</h3>
                  <span className="text-secondary font-medium">2020 - 2022</span>
                </div>
                <h4 className="text-lg text-foreground/80 mb-4">Digital Studio</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Developed responsive web applications for various clients. Specialized in 
                  React ecosystem and modern CSS. Collaborated with design teams to implement 
                  pixel-perfect user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gradient-primary">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-foreground/80 mb-12">
              Ready to bring your ideas to life? I'm always excited to work on 
              innovative projects that push the boundaries of web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:alex@example.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow-primary transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}