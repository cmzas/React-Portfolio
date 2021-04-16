import React from 'react'
import Image from "../../../Images/logos/frontend-icon.png";

const Skiicard = (props) => {
    return (
        <>
         <div className="col-lg-4 col-md-12 col-sm-10 col-12">
                      <div className="mt-xl-5">
                      <div className="card">
                          <div className="box">
                              <div className="img">
                                  <img src={Image} />
                              </div>
                              <h2>Frontend</h2>
                              <p><i className="fas fa-check"></i> &nbsp; React/Redux/Angular</p>
                              <p><i className="fas fa-check"></i> &nbsp;Javascript</p>
                              <p><i className="fas fa-check"></i> &nbsp;Node.js</p>
                              <p><i className="fas fa-check"></i> &nbsp;Webpack/Gulp/Grunt</p>
                              <p><i className="fas fa-check"></i> &nbsp;HTML/CSS/SASS/LESS</p>
                          </div>
                      </div>
                      </div>
                  </div>
            
        </>
    )
}

export default Skiicard;
