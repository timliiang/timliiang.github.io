import './ProjectCard.css'

export default function ProjectCard({ name, git, img, tech }) {

    function displayTech() {
        return tech.map(item => (
            <li key={item}>{item}</li>
        ));
    }

    return(
        <div className="projectCardContainer">
            <img src={img}></img>
            <p>{name}</p>
            <ul>{displayTech}</ul>
            asd
        </div>
    );
}