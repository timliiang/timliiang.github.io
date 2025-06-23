import './Skills.css'
import skillCard from './SkillCard.jsx'

export default function Skills() {
    return (
        <div className="skillsContainer" id="skills">  
            <h1>Skills</h1>
            <br></br>
            <div className="skillsBox">
                <button id="Languages">Languages</button>
                <button id="Frameworks">Frameworks</button>
                <button id="Dev Tools">Dev Tools</button>
                <br />
                <skillCard />
            </div>
        </div>
    );
}