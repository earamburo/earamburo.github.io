export default function AboutMe({}) {
    return (
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
    )
}