import './SkillCard.css'

export default function SkillCard(img, name) {
    return(
        <div className="skillCardContainer">
            <p>{name}</p>
        </div>
    );
}