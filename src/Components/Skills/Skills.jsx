import SkillCard from './SkillCard.jsx'

/* Most icons from https://devicon.dev/ */
const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const groups = [
    {
        name: 'Languages',
        skills: [
            { img: devicon('python'), name: 'Python' },
            { img: devicon('java'), name: 'Java' },
            { img: devicon('c'), name: 'C' },
            { img: devicon('javascript'), name: 'JavaScript' },
            { img: devicon('html5'), name: 'HTML5' },
            { img: devicon('css3'), name: 'CSS3' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg', name: 'Racket' }, /* This one from wikipedia */
            { img: devicon('bash'), name: 'Bash' },
        ],
    },
    {
        name: 'Frameworks',
        skills: [
            { img: devicon('react'), name: 'React' },
        ],
    },
    {
        name: 'Dev Tools',
        skills: [
            { img: devicon('vscode'), name: 'VS Code' },
            { img: devicon('linux'), name: 'Linux' },
            { img: devicon('git'), name: 'Git' },
            { img: devicon('figma'), name: 'Figma' },
            { img: devicon('mysql'), name: 'MySQL' },
        ],
    },
];

export default function Skills() {
    return (
        <section className="reveal border-t border-frame px-6 pt-12 pb-14 sm:px-10 sm:pt-14 sm:pb-16" id="skills">
            <h2 className="mb-6 text-[26px]">Skills</h2>
            <div className="border-b border-rule">
                {groups.map(group => (
                    <div key={group.name} className="grid gap-3.5 border-t border-rule py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                        <h3 className="pt-1 text-[17px]">{group.name}</h3>
                        <ul className="flex flex-wrap gap-x-7 gap-y-3">
                            {group.skills.map(skill => (
                                <li key={skill.name}>
                                    <SkillCard img={skill.img} name={skill.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
