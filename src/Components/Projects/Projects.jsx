import ProjectCard from './ProjectCard.jsx';

const projects = [
    {
        name: "Verdix",
        git: "https://github.com/timliiang/Verdix",
        img: "./verdix.jpg",
        width: 1024,
        height: 768,
        alt: "Verdix home page in dark mode, showing a featured film with its ranking score above a row of movie posters",
        tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"],
        description: "A full-stack movie ranking platform. Instead of scoring films in isolation, each new watch is compared against your history to build a personal ranking.",
        highlights: [
            "Stateless JWT authentication with a custom Spring Security filter and BCrypt-hashed passwords",
            "REST API with author-only edits, request validation and paginated endpoints, documented in Swagger",
            "Caches TMDB movie data in PostgreSQL on first request to cut external API calls",
            "Unit and web-layer tests with JUnit 5, Mockito and MockMvc",
        ],
        featured: true,
    },
    {
        name: "The Little Knight",
        git: "https://github.com/timliiang/The-Little-Knight",
        img: "./boss.png",
        width: 614,
        height: 460,
        tech: ["Python", "Pygame Zero"],
        description: "A 2D platformer inspired by Hollow Knight, built as a high school programming project.",
    },
    {
        name: "3D Renderer in Java",
        git: "https://github.com/timliiang/3D-Renderer-in-Java",
        img: "./renderer.png",
        width: 785,
        height: 595,
        tech: ["Java", "Maven"],
        description: "A 3D renderer written from scratch in Java that draws lit, shaded spheres.",
    },
];

export default function Projects() {
    return (
        <section className="reveal border-t border-frame pt-12 sm:pt-14" id="projects">
            <h2 className="mb-6 px-6 text-[26px] sm:px-10">Projects</h2>
            {/* Cells run edge to edge inside the frame. The 1px grid gap shows the
                rule-coloured list background through, drawing the dividers.
                Featured projects take a full row; the rest pair up below. */}
            <ul className="grid gap-px border-t border-rule bg-rule sm:grid-cols-2">
                {projects.map(project => (
                    <li key={project.name} className={`bg-bg ${project.featured ? 'sm:col-span-2' : ''}`}>
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
