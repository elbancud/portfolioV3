import React from 'react'
import './style.css';

export default function projectGallery({disc, calendar, hongdae, logo}) {
    return (
        <div>
             <div className="projectGallery">
         <div className="box large ">
         <div className="overlay">
           <div className="content ">
                <img src={disc} alt="calendar"></img>
               
              </div>
              
              </div>
             <div className="bottom-content">
              <div><img src={disc} alt="calendar"></img></div>
              <div>Dj Revamp project</div>
                </div>
         </div>
 
         <div className="box medium ">
         <div className="overlay">
         <div className="content">
         <img src={calendar}/>
              </div>
            </div>
            <div className="bottom-content">
              <div><img src={calendar} alt="calendar"></img></div>
              <div>2019 Calendar design </div>
                </div>
          </div>

          <div className="box black ">
            <div className="overlay">
              <div className="content">
               <img src={hongdae}/>
              </div>
            </div>
            <div className="bottom-content">
              <div><img src={hongdae} alt="calendar"></img></div>
              <div>Travel agency retro </div>
                </div>
          </div>
          
          <div className="box red ">
            <div className="overlay">
              <div className="content">
                <img src={logo} alt="logo"/>
              </div>
            </div>
            <div className="bottom-content">
             <div><img src={logo} alt="calendar"></img></div>
              <div>Travel agency retro </div>
                </div>
          </div>
       
          </div>
          
        </div>
    )
}
