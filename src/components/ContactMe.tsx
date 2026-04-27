export default function ContactMe() {
    return (
        <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-sm text-foreground/40 mb-2">
                <span className="text-primary">[user@earamburo ~]</span>$ contact --open
            </p>
            <h2 className="text-4xl font-bold mb-8 text-foreground">
                Let's Build Something
            </h2>
            <p className="text-lg text-foreground/60 mb-12 leading-relaxed">
                Open to full-time roles, freelance projects, and interesting collaborations.
                Reach out and I'll get back to you fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="mailto:edwin.aramburo1@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-glow-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                >
                    Get In Touch
                </a>
                <a
                    href="https://linkedin.com/in/edwin-aramburo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground/70 rounded-lg font-semibold hover:border-primary/60 hover:text-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
