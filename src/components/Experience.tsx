export default function Experience({ }) {

    interface Experience {
        title: string;
        company: string;
        dates: string;
        description: Array<string>;
        technologies: Array<string>
    }

    const experience: Experience[] = [
        {
            title: "Senior Software Engineer",
            company: "Inspire Brands",
            dates: "July 2024 – August 2025",
            description: [
                "Designed and implemented scalable front-end architecture and design system components across multiple brands, ensuring consistent user experience and accessibility.",
                "Built a Next.js storefront used across Arby’s and GoodR, improving load times and conversion rates.",
                "Developed reusable UI components with React, TypeScript, and Material UI to streamline feature development.",
                "Implemented order flow features including Bag, Tally, and Confirmation pages with Redux and GraphQL APIs.",
                "Led performance optimization and accessibility efforts, achieving AA compliance and reducing Lighthouse issues by 30%.",
                "Contributed to discount logic architecture (MBDP, BuyX_GetY) ensuring correct pricing across complex scenarios."
            ],
            technologies: ["React", "Next.js", "TypeScript", "Redux", "GraphQL", "Material UI", "Tailwind", "SCSS"]
        },
        {
            title: "UI/UX Engineer",
            company: "NCR Voyix",
            dates: "July 2020 – July 2024",
            description: [
                "Led front-end development for customer-facing platforms, focusing on performance, scalability, and usability across global enterprise projects.",
                "Architected and delivered the NCR SCO 2024 3D Self-Checkout Configurator, a React-based interactive sales tool.",
                "Built and maintained a design system for NCR’s digital properties, integrating custom tokens and IcoMoon glyphs.",
                "Enhanced NCR Voyix’s main site and documentation portals with SSR, Node.js, and dynamic React components.",
                "Implemented accessibility best practices (NVDA, AA/AAA compliance) across multiple platforms.",
                "Collaborated with cross-functional teams to deliver SaaS platforms, analytical dashboards, and microsites for major clients."
            ],
            technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Design Systems", "Accessibility"]
        },
        {
            title: "Software Engineer",
            company: "GoodR",
            dates: "July 2020 – June 2021",
            description: [
                "Served as lead frontend developer, modernizing internal tools and building scalable UI architecture to drive business efficiency.",
                "Implemented scalable React architecture into internal tools with React, React Native, Bootstrap, and Node.js, boosting sales performance, customer service efficiency, and marketing analytics.",
                "Designed and delivered responsive UI/UX layouts to create uniform experiences across company platforms.",
                "Migrated legacy codebase from Angular to React, streamlining structure and accelerating delivery under tight deadlines.",
                "Integrated design libraries such as Material UI and Victory.js to improve user interaction and data visualization."
            ],
            technologies: ["React", "React Native", "Node.js", "Bootstrap", "Material UI", "Victory.js", "Angular"]
        },
        {
            title: "Full Stack Engineer",
            company: "StudentBridge",
            dates: "July 2018 – June 2020",
            description: [
                "Developed full-stack applications and internal tools to improve sales performance, automate processes, and streamline customer acquisition.",
                "Increased sales performance and customer service efficiency by 25% through content, rich media, and interactive web applications.",
                "Built web scraping bots (Python, Chromium) to acquire educational statistics, content, and metrics for automated data entry.",
                "Implemented custom internal tools for customer acquisition and feedback using Vue.js and Node.js."
            ],
            technologies: ["Vue.js", "Node.js", "Python", "Chromium", "Excel", "Databases"]
        },
        {
            title: "Frontend Engineer (Freelance & Side Projects)",
            company: "Independent",
            dates: "2018 – Present",
            description: [
                "Worked on entrepreneurial projects and prototypes spanning sports, gaming, and AI-driven apps.",
                "Developed a prototype for a TrackMan-like golf analytics iPhone app with AI-powered ball tracking.",
                "Created a social hotspot map app (Atlanta-focused) with chat threads, filters, and real-time interactions.",
                "Built a grocery receipt scanning app with OCR, AI recipe suggestions, and expiration tracking.",
                "Explored interactive 3D web experiences, vintage car configurators, and AI-enhanced tools for consumer products."
            ],
            technologies: ["React Native", "Expo", "Node.js", "Python", "AI APIs", "OCR", "3D Web"]
        }
    ];



    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-gradient-primary text-center">
                Experience
            </h2>
            <div className="space-y-8">
                {experience.map((e: Experience, index: number) => {
                    return (
                        <div className="hologram-panel p-8 rounded-2xl border-l-4 border-primary">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <h3 className="text-2xl font-bold text-gradient-secondary">{e.title}</h3>
                                <span className="text-primary font-medium">{e.dates}</span>
                            </div>
                            <h4 className="text-lg text-foreground/80 mb-4">{e.company}</h4>

                            <div className="my-3">
                                {e.description.map((point: string, index, number) => {
                                    return (
                                        <p className="text-foreground/70 leading-relaxed">
                                            {point}
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="my-3">
                                {e.technologies.map((tech: string, index: number) => {
                                    return (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 mx-1"
                                        >
                                            {tech}
                                        </span>
                                    )

                                })}
                            </div>

                        </div>

                    )
                })}
            </div>
        </div >
    )
}