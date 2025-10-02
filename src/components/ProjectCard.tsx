import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Video } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className={`group relative overflow-hidden hover-float transition-all duration-500 md:min-h-[620px] ${
      featured ? 'glow-primary' : ''
    } hologram-panel border-primary/20 hover:border-primary/50`}>
      
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
            FEATURED
          </span>
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-3">
            {liveUrl && (
              <Button
                size="sm"
                className="bg-primary/90 hover:bg-primary text-primary-foreground glow-primary"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-primary/50 bg-card/90 hover:bg-primary/10"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Video className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gradient-primary group-hover:text-gradient-secondary transition-all duration-300">
          {title}
        </h3>

        <p className="text-foreground/80 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}