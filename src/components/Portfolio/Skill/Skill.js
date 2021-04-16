import React from 'react'
import Skillcard from "./Skiicard";

const Skill = () => {
    return (
        <>
            <div className="container">
                <div className="skill text-center mt-5">
                    <h2>Skills Overview</h2>
                    <p>I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?<br/>
                    <a href="#"> Check out my online resume. </a></p>
                </div>
                <div className="row">
            <Skillcard/>
            <Skillcard/>
            <Skillcard/>
                 
                  {/* <div className="col-lg-4 col-md-12 col-sm-10 col-12">
                      <div className="mt-xl-5">
                      <div className="card">
                          <div className="box">
                              <div className="img">
                                  <img src="uploads/logos/backend-icon.png" />
                              </div>
                              <h2>Backend</h2>
                              <p><i className="fas fa-check"></i> &nbsp; Python/Django</p>
                              <p><i className="fas fa-check"></i> &nbsp; Javascript</p>
                              <p><i className="fas fa-check"></i> &nbsp; Node.js</p>
                              <p><i className="fas fa-check"></i> &nbsp; Webpack/Gulp/Grunt</p>
                              <p><i className="fas fa-check"></i> &nbsp; HTML/CSS/SASS/LESS</p>
                          </div>
                         </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-10 col-12">
                      <div className="mt-xl-5">
                      <div className="card">
                          <div className="box">
                              <div className="img">
                                  <img src="uploads/logos/other-skills-icon.png" />
                              </div>
                              <h2>Others</h2>
                              <p><i className="fas fa-check"></i> &nbsp;React/Redux/Angular</p>
                              <p><i className="fas fa-check"></i> &nbsp;Javascript</p>
                              <p><i className="fas fa-check"></i> &nbsp;Node.js</p>
                              <p><i className="fas fa-check"></i> &nbsp;Webpack/Gulp/Grunt</p>
                              <p><i className="fas fa-check"></i> &nbsp;HTML/CSS/SASS/LESS</p>
                          </div>
                         </div>
                      </div>
                  </div> */}
                 
              </div>
        </div>
            
        </>
    )
}

export default Skill;
