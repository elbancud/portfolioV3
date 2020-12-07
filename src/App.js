import React, { useEffect, useRef,useState} from "react";
import gsap, {TweenMax,Power3, TimelineLite} from "gsap";
import projects from './img/projects.svg';
import about from './img/about.svg';
import contact from './img/contact.svg';
import logo from './img/logoVer1.png';
import graphic1 from './img/graphic1-Face.png';
import calendar from './img/projectsGallery/calendar-homepage.png';
import disc from './img/projectsGallery/discRevamp.png';
import hongdae from './img/projectsGallery/HongDaeBanner.png';
import './style.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bars from './img/bars.svg';
import ProjectGallery from './projectGallery';
import Footer from './footer';
import close from './img/close.svg';
function App() {
  // variables for hook

  let app = useRef(null);
  let images = useRef(null);
  
  let tl = new TimelineLite();

  //run everytime
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

    const graphic1 = images.firstElementChild;

    gsap.from(".polygon", {
      scrollTrigger: {
        trigger: ".polygon",
        start: "top center",
       
        toggleActions:"restart pause none none"
        },
        rotation: 180,
        duration:1
    })
   
  })
  const [navBar, setNavBar] = useState(false);
  const showNavBar = () => {
    
    
    
     setNavBar(!navBar);
      
  };
  
  window.addEventListener('resize', () => { if(window.innerWidth >= 950){setNavBar(false)}});

 
  return (
    <div className="container"> 
      <nav >
        <div className="wrapper">
        <div className="nav-list">
      <div className="logo-container">
              <img src={logo} alt="Logo" />
              
        </div>
            <div className="links " id="links ">
              
          <li>
                <ul>
                  <div className="navAnimateOut">
                    <img src={projects} />
                  </div>
                  <div className="navAnimateIn">
                    <a href="#">Projects </a>
                    
                  </div>
                  
                  
            </ul>

            <ul>
                  <div className="navAnimateOut">
                   <img src={about} />
                  </div>
                  <div className="navAnimateIn">
                    <a href=""> About</a>
                  </div>
                  
                 
            </ul>
            <ul>
                  <div className="navAnimateOut">
                   <img src={contact} />
                  </div>
                  <div className="navAnimateIn">
                     <a href=""> Contact </a>
                  </div>
                 
                
            </ul>
            {/* <ul>
              <a href="">  Cv</a>
            </ul> */}
          </li>
            </div>
             <div className="bars">
              <div className="icon" onClick={showNavBar}> <img src={bars} /></div>
            </div>
           
          </div>  
          
        
        </div>
        
        <div className={navBar?'mobileNavigation active animate__rubberBand': 'mobileNavigation hidden animate__slideInUp'}>
            <div className="closeIcon" onClick={showNavBar}>
              <img src={close} alt="close"/>
            </div>
          <div className="mobileNavigationLinks">
              <li>
                <ul>
                 <img src={projects} alt="button"/> <a> projects</a>
                 
                </ul>
                 <ul>
                 <img src={about} alt="button"/> <a> about</a>
                 
                </ul>
                 <ul>
                 <img src={contact} alt="button"/><a> contact</a>
                 
                </ul>
              </li>
            </div>
          </div>
     </nav>


      <main >
      
<div className="navInHamburger">
              
            </div>
         <section  ref={el => app = el}>
          <div className="wrapper aboutMeSection" >
            <div className="content-left">
              <div className="logo-about-me">
                  <img src={logo}/>
              </div>
             <div className="paragraph">
         
              <span className="intro">Hello! I'm Emarson</span>
              <br />
              <h4>
                an Information Technology with specialization of web and mobile
                application degree holder and an aspiring UI and UX designer. I
                help my clients from the definition of their strategy to the
                realization of their digital ecosystem.
               

              </h4>
            
            </div>
          </div>
            <div className=" graphicAnimation" ref={el => images = el}>
              <div className="polygon"></div>
            <img src={graphic1}/>
          </div>
          </div>
          
        </section>
          <ProjectGallery disc={disc} hongdae={hongdae} calendar={calendar} logo={logo} />
        <section className="wrapper">


        </section>
        
        <Footer />
      </main>
     </div>
  );
}

export default App;
