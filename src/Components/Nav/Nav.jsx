import './Nav.css'

export default function Nav() {
    console.log(window.visualViewport.width);
    console.log(window.visualViewport.height);

    return (
        <>
            <div className="navContainer">
                <div className="navRect"></div>
                <ul className="navList">
                    <li><a href="#">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </>
    );
}
