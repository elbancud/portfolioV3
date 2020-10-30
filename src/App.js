import React from "react";
import logo from './img/logoVer1.png';
import graphic1 from './img/graphic1-Face.png';
import calendar from './img/projectsGallery/calendar-homepage.png';
import disc from './img/projectsGallery/discRevamp.png';
import hongdae from './img/projectsGallery/HongDaeBanner.png';
import './style.css';
import ProjectGallery from './projectGallery';
import AboutmeSection from './aboutmeSection';
import Footer from './footer';
function App() {
  return (
    <div className="container"> 
      <nav>
      <div className="logo-container">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="links " id="links ">
          <li>
            <ul>
              <a href="">Projects </a>
            </ul>

            <ul>
              <a href=""> About</a>
            </ul>
            <ul>
              <a href=""> Contact Me</a>
            </ul>
            <ul>
              <a href=""> View Cv</a>
            </ul>
          </li>
        </div>
     </nav>


     <main>
        <ProjectGallery disc={disc} hongdae={hongdae} calendar={calendar} logo={logo}/>
        <AboutmeSection  graphics={graphic1} logo={logo}/>
        <Footer />
      </main>
     </div>
  );
}

export default App;
