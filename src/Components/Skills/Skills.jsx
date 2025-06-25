import './Skills.css'
import SkillCard from './SkillCard.jsx'
import { useState } from 'react';

export default function Skills() {
    /* Most icons from https://devicon.dev/ */
    const languages = [
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', name: 'Python'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', name: 'Java'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg', name: 'C'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', name: 'HTML5'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', name: 'CSS3'},
        { img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg', name: 'Racket'}, /* This one from wikipedia */
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', name: "Bash"}
    ];
    const tools = [
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', name: 'VSC'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', name: 'Linux'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', name: 'Git'},
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', name: 'Figma'}
    ];
    const frameworks = [
        { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', name: 'React'}
    ]
    
    const [skillType, setSkillType] = useState("languages");
    
    function mapSkill(arr) {
        return arr.map(item => (
            <li key={item.name}>
                <SkillCard img={item.img} name={item.name} />
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