import './SkillCard.css'

export default function SkillCard({ img, name }) {
    return(
        <div className="skillCardContainer">
            <img src={img} alt={name}></img>
            <p>{name}</p>
        </div>
    );
}