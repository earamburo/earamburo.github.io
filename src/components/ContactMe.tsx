export default function ContactMe({}) {
    return (
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
    )
}