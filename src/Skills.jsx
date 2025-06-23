import './Skills.css'
import SkillCard from './SkillCard.jsx'
import { useState } from 'react';

export default function Skills() {
    const languages = [
        { img: '', name: 'Python'},
        { img: '', name: 'Java'},
        { img: '', name: 'C'},
        { img: '', name: 'JavaScript'}
    ];
    const tools = [
        { img: '', name: 'VSC'},
        { img: '', name: 'Linux'}
    ];
    const frameworks = [
        { img: '', name: 'React'}
    ]
    
    const [skillType, setSkillType] = useState("languages");
    
    function mapSkill(arr) {
        return arr.map(item => (
            <li key={item.name}>
                <SkillCard src={item.img} name={item.name} />
            </li>
        ));
    }

    let skillList;
    switch (skillType) {
        case "frameworks":
            skillList = mapSkill(frameworks);
            break;
        case "tools":
            skillList = mapSkill(tools);
            break;
        default: /* languages */
            skillList = mapSkill(languages);
            break;
    }

    return (
        <div className="skillsContainer" id="skills">  
            <h1>Skills</h1>
            <br></br>
            <div className="skillsBox">
                <button onClick={() => setSkillType("languages")} id="Languages">Languages</button>
                <button onClick={() => setSkillType("frameworks")} id="Frameworks">Frameworks</button>
                <button onClick={() => setSkillType("tools")} id="Dev Tools">Dev Tools</button>
                <br />
                <ul>{skillList}</ul>
            </div>
        </div>
    );
}