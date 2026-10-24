import { ArrowUpRight } from '@phosphor-icons/react'

export default function ProjectCard({ name, git, img, width, height, tech, description }) {
    return(
        <article className="group relative flex h-full flex-col px-6 pt-5 pb-7 transition-colors hover:bg-surface sm:px-10">
            <p className="meta">{tech.join(', ')}</p>
            <div className="mt-3.5 aspect-4/3 overflow-hidden bg-surface">
                <img
                    className="block size-full object-cover transition-transform duration-600 ease-out-expo group-hover:scale-[1.03]"
                    src={img}
                    alt={`Screenshot of ${name}`}
                    width={width}
                    height={height}
                    loading="lazy"
                />
            </div>
            <h3 className="mt-5 mb-1.5 text-xl">{name}</h3>
            <p className="mb-5 text-[15px] text-muted">{description}</p>
            {/* The link's ::after stretches over the card, so the whole card is clickable */}
            <a
                className="mt-auto inline-flex items-center gap-1.5 self-start text-sm underline decoration-rule-strong underline-offset-4 transition-colors after:absolute after:inset-0 group-hover:text-accent group-hover:decoration-current"
                href={git}
                target="_blank"
                rel="noreferrer"
            >
                View Source <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only"> for {name} on GitHub</span>
            </a>
        </article>
    );
}
