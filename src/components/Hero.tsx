import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}


export default function Hero({ onNavigate }: HeroProps) {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./public/Edwin-Aramburo-Resume-SWE.pdf";
    link.download = 'Edwin-Aramburo-Resume.pdf';
    link.click();
  }
  

  return (
    <section className="relative my-[5rem] lg:min-h-screen flex flex-col justify-center items-center text-center px-6 py-6">
      <div className="max-w-4xl mx-auto z-10">
        <div className="mb-6 animate-fade-in">
          <span className="text-lg text-white font-medium tracking-wider">
            HELLO, I'M
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-primary">
          Edwin Andres Aramburo
        </h1>

        <h2 className="text-2xl text-white md:text-3xl font-light mb-8">
          Frontend Engineer & UI/UX Designer
        </h2>

        <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft and engineer digital experiences where innovative technology meets 
          beautiful design. Specializing in React and modern 
          web technologies to create immersive user interfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow-primary text-primary-foreground font-semibold px-8 py-4 text-lg"
            onClick={() => onNavigate('projects')}
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover:shadow-glow-primary px-8 py-4 text-lg"
            onClick={() => downloadResume()}
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div 
          className="flex flex-col items-center cursor-pointer animate-float hover-glow sm:hidden hidden sm:flex md:flex lg:flex"
          onClick={() => onNavigate('projects')}
        >
          <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </div>

     
    </section>
  );
}