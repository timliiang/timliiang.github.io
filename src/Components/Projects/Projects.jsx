import ProjectCard from './ProjectCard.jsx';

const projects = [
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
            {/* Cells run edge to edge inside the frame, split by a single rule */}
            <ul className="grid border-t border-rule sm:grid-cols-2">
                {projects.map(project => (
                    <li key={project.name} className="border-rule not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l">
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
