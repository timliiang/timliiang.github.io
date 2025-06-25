import ProjectCard from './ProjectCard.jsx';
import './Projects.css'

export default function Projects() {
    const projects = [
        {name: "temp1", git: "", img: "", tech: ["Java", "VSC", "AWS"]},
        {name: "temp2", git: "", img: "", tech: ["", "", ""]},
        {name: "temp2", git: "", img: "", tech: ["", "", ""]},
        {name: "temp3", git: "", img: "", tech: ["", "", ""]}
    ];

    function mapProject(arr) {
        return arr.map(item => (
            <li key={item.name}>
                <ProjectCard name={item.name}/>
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