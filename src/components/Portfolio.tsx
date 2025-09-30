import { useState, useEffect } from 'react';
import Scene3D from './Scene3D';
import Navigation from './Navigation';
import Hero from './Hero';
import ProjectsSection from './ProjectsSection';
import Experience from './Experience';
import ContactMe from './ContactMe';

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
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="experience" className="min-h-screen flex items-center justify-center px-6">
          <Experience/>
        </div>
        <div id="contact" className="min-h-screen flex items-center justify-center px-6">
          <ContactMe/>
        </div>
      </main>
    </div>
  );
}