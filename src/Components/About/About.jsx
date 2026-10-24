const links = [
    { label: 'GitHub', href: 'https://github.com/timliiang' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tim726/' },
    { label: 'Email', href: 'mailto:timliang726@gmail.com' },
];

const education = [
    { program: 'CS', school: 'University of Waterloo', field: 'Computer Science' },
    { program: 'BBA', school: 'Wilfrid Laurier University', field: 'Business Administration' },
];

// Intro lines fade in one after another on first load
const intro = 'motion-safe:animate-intro';

function About() {

  return (
    <section id="about">
      <div className="grid items-start gap-7 px-6 pt-12 pb-14 sm:grid-cols-[1fr_auto] sm:gap-10 sm:px-10 sm:pt-16 sm:pb-16">
        <div className="space-y-3">
          <p className={`meta ${intro}`}>Toronto, ON</p>
          <h1 className={`mb-5 text-[clamp(40px,7vw,52px)] tracking-[-0.025em] ${intro} [animation-delay:60ms]`}>Tim Liang</h1>
          <p className={`text-lg font-medium ${intro} [animation-delay:120ms]`}>Fullstack developer.</p>
          <p className={`max-w-[46ch] text-muted ${intro} [animation-delay:180ms]`}>2nd year undergraduate studying computer science and business.</p>
          <ul className={`flex flex-wrap gap-5 pt-3 text-[15px] ${intro} [animation-delay:240ms]`}>
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="text-link"
                  href={href}
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img
          className={`row-start-1 size-24 border border-rule bg-surface object-cover p-1 sm:col-start-2 sm:size-33 sm:p-1.5 ${intro} [animation-delay:120ms]`}
          src="./profile.jpg"
          alt="Tim's profile picture, Snoopy drinking a glass of water"
          width="225"
          height="225"
          fetchPriority="high"
        />
      </div>

      {/* Full-width strip: its lines run edge to edge inside the frame */}
      <ul className="grid border-t border-rule sm:grid-cols-2">
        {education.map(({ program, school, field }) => (
          <li key={school} className="border-rule px-6 pt-5 pb-6 not-first:border-t sm:px-10 sm:not-first:border-t-0 sm:not-first:border-l">
            <p className="meta">{program}</p>
            <h2 className="mt-2 mb-1 text-[21px]">{school}</h2>
            <p className="text-sm text-muted">{field}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
