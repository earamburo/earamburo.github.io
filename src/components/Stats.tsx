export default function Stats({ }) {

    return (
        //* Stats */ 
        <div className="absolute bottom-10 left-0 right-0">
            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
                <div className="hologram-panel p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-primary">20+</div>
                    <div className="text-sm text-foreground/60">Projects</div>
                </div>
                <div className="hologram-panel p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-secondary">5+</div>
                    <div className="text-sm text-foreground/60">Years Experience</div>
                </div>
                <div className="hologram-panel p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gradient-primary">100%</div>
                    <div className="text-sm text-foreground/60">Client Satisfaction</div>
                </div>
            </div>
        </div>
    )
   

}