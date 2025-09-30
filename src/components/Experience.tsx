export default function Experience({ }) {
    return (
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
    )
}