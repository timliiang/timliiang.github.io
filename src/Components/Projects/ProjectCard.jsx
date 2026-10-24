import { ArrowUpRight } from '@phosphor-icons/react'

export default function ProjectCard({ name, git, img, width, height, alt, tech, description, highlights, featured }) {
    const meta = <p className="meta">{tech.join(', ')}</p>;

    const media = (
        <div className={`aspect-4/3 overflow-hidden bg-surface ${featured ? '' : 'mt-3.5'}`}>
            <img
                className="block size-full object-cover transition-transform duration-600 ease-out-expo group-hover:scale-[1.03]"
                src={img}
                alt={alt ?? `Screenshot of ${name}`}
                width={width}
                height={height}
                loading="lazy"
            />
        </div>
    );

    const details = (
        <>
            <h3 className={`mb-1.5 ${featured ? 'mt-3 text-2xl' : 'mt-5 text-xl'}`}>{name}</h3>
            <p className="mb-5 text-[15px] text-muted">{description}</p>
            {highlights && (
                <ul className="mb-6 space-y-2 text-sm text-muted">
                    {highlights.map(item => (
                        <li key={item} className="relative pl-4 before:absolute before:top-[0.6em] before:left-0 before:size-1 before:bg-rule-strong">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
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
        </>
    );

    // Featured: image in the left column and details in the right, so the
    // image renders at the same size as the regular cards below it
    if (featured) {
        return (
            <article className="group relative grid gap-5 px-6 pt-6 pb-7 transition-colors hover:bg-surface sm:grid-cols-2 sm:gap-8 sm:px-10 sm:pt-7">
                {media}
                <div className="flex flex-col">
                    {meta}
                    {details}
                </div>
            </article>
        );
    }

    return(
        <article className="group relative flex h-full flex-col px-6 pt-5 pb-7 transition-colors hover:bg-surface sm:px-10">
            {meta}
            {media}
            {details}
        </article>
    );
}
