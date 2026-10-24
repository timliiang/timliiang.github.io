import { useEffect } from 'react'
import Nav from './Components/Nav/Nav.jsx'
import About from './Components/About/About.jsx'
//import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Footer from './Components/Footer/Footer.jsx'

export default function App() {
    // Fade sections in once as they scroll into view. IntersectionObserver
    // fires only on visibility changes, so nothing runs on every scroll frame.
    useEffect(() => {
        const items = document.querySelectorAll('.reveal');
        document.documentElement.classList.add('canReveal');

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('isVisible');
                    observer.unobserve(entry.target);
                }
            }
        }, { threshold: 0.15 });

        items.forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="px-3 py-3 sm:px-6 sm:py-8">
            <a
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
                href="#main"
            >
                Skip to content
            </a>
            {/* The frame: one bordered box around the whole site */}
            <div className="mx-auto max-w-[840px] border border-frame">
                <Nav />
                <main id="main">
                    <About />
                    <Projects />
                </main>
                <Footer />
            </div>
        </div>
    );
}
