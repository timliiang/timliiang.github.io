export default function SkillCard({ img, name }) {
    return(
        <div className="flex items-center gap-2.5 text-[15px]">
            {/* Decorative: the name is right next to the logo. The light tile in
                dark mode keeps dark logos (Bash, Linux) visible. */}
            <img className="size-7 bg-logo-tile p-1" src={img} alt="" width="28" height="28" loading="lazy" />
            <span>{name}</span>
        </div>
    );
}
