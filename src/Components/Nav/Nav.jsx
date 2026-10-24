import { useEffect, useState } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'

const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
];

const themeColors = { light: '#fafafa', dark: '#0b0b0b' };

function currentTheme() {
    const pinned = document.documentElement.dataset.theme;
    if (pinned) return pinned;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Nav() {
    const [theme, setTheme] = useState(currentTheme);
    const [active, setActive] = useState('about');

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
    }, [theme]);

    // Highlight the link for whichever section sits in the middle of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) setActive(entry.target.id);
            }
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch { /* storage blocked, theme still applies */ }
        setTheme(next);
    }

    return (
        <header className="sticky top-0 z-10 border-b border-frame bg-bg/85 backdrop-blur-md">
            <div className="flex h-15 items-center gap-4 px-6 sm:gap-6 sm:px-10">
                <a className="mr-auto font-serif text-[17px] font-medium" href="#about">Tim Liang</a>
                <nav aria-label="Sections">
                    <ul className="flex gap-3.5 sm:gap-5">
                        {sections.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    aria-current={active === id ? 'true' : undefined}
                                    className="border-b border-transparent py-1 text-sm text-muted transition-colors hover:text-ink aria-[current]:border-ink aria-[current]:text-ink"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className="grid size-8 cursor-pointer touch-manipulation place-items-center border border-transparent text-muted transition-colors hover:border-rule hover:text-ink active:translate-y-px"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                    {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                </button>
            </div>
        </header>
    );
}
