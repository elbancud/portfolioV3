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
         </div>

         <div className="box medium ">
         <div className="overlay">
         <div className="content">
         <img src={calendar}/>
              </div>
            </div>
          </div>

          <div className="box black ">
            <div className="overlay">
              <div className="content">
               <img src={hongdae}/>
              </div>
            </div>
          </div>
          
          <div className="box white ">
            <div className="overlay">
              <div className="content">
                <img src={logo} alt="logo"/>
              </div>
            </div>
          </div>
       
          </div>
          
        </div>
    )
}
