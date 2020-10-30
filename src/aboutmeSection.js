import React from 'react'
import './style.css';

function aboutmeSection({logo, graphics}) {
    return (
      
            <section className="aboutMeSection">
          <div className="aboutMe">
            <div className="logo-about-me">
                <img src={logo}/>
            </div>
            <p>
              <span className="intro">Hello! I'm Emarson</span>
              <br />
              <h4>
                an Information Technology with specialization of web and mobile
                application degree holder and an aspiring UI and UX designer. I
                help my clients from the definition of their strategy to the
                realization of their digital ecosystem.
                
              </h4>
            </p>
         
          </div>
          <div className="graphicAnimation">
          <img src={graphics}/>
          </div>
            
        </section>
    )
}

export default aboutmeSection
