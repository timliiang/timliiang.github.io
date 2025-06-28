import './About.css'

function About() {

  return (
    <div className="aboutContainer" id="about">
      <div className="side">
        <h1 className="gradientText">Tim Liang</h1>
        <div className="bar" />
        <br />
        <h2>Fullstack Developer</h2>
        <p>based in Toronto, ON</p>
        <br/>
        <p>
          2nd Year Undergraduate<br/>
          CS @ University of Waterloo &<br/>
          BBA @ Wilfrid Laurier University<br/>
        </p>
      </div>
      <div className="side">
        <img className="profile" src="src/assets/profile.jpg"></img>
      </div>
      <div className="side">
        <ul className="links">
          <li><a href="https://github.com/timliiang" target="_blank"><img src='github.png'></img></a></li>
          <li><a href="https://www.linkedin.com/in/tim726/" target="_blank"><img src='linkedin.webp'></img></a></li>
          <li><a href="mailto:timliang726@gmail.com" target="_blank"><img src="email.png"></img></a></li>
        </ul>
      </div>
    </div>
  )
}

export default About
