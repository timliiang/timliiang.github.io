import ProjectCard from './ProjectCard.jsx';
import './Projects.css'

export default function Projects() {
    const projects = [
        {name: "The Little Knight", git: "a", img: "./boss.png"}
    ];

    function mapProject(arr) {
        return arr.map(item => (
            <li key={item.name}>
                <ProjectCard name={item.name} git={item.git} img={item.img} tech={item.tech}/>
            </li>
        ));
    }

    return (
        <div className="projectsContainer" id="projects">
            <h1>Projects</h1>
            <ul className="projectsBox">{mapProject(projects)}</ul>
        </div>
    );
}