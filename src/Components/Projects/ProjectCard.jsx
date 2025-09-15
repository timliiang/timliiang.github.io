import './ProjectCard.css'

export default function ProjectCard({ name, git, img}) {

    function displayTech() {
        return tech.map(item => (
            <li key={item}>{item}</li>
        ));
    }

    return(
        <div className="projectCardContainer">
            <a href={git} target="_blank">
                <img src={img}></img>
                <h3>{name}</h3>
            </a>
        </div>
    );
}