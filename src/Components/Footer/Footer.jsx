export default function Footer() {
    return (
        <footer className="flex items-center justify-between border-t border-frame px-6 py-6 sm:px-10">
            <p className="meta">© {new Date().getFullYear()} Tim Liang</p>
            <a className="meta transition-colors hover:text-ink" href="#about">Back to top</a>
        </footer>
    );
}
