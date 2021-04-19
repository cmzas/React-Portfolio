import React from 'react';
const Skiicard = (props) => {
    return (
        <>
         <div className="col-lg-4 col-md-6 mb-4">
                      <div className="mt-lg-5">
                      <div className="card">
                          <div className="box">
                              <div className="img">
                                  <img src={props.imgsrc} alt="image" />
                              </div>
                              <h2>{props.title}</h2>
                              <p><i className="fas fa-check"></i> {props.listone}</p>
                              <p><i className="fas fa-check"></i> {props.listtwo}</p>
                              <p><i className="fas fa-check"></i> {props.listthree}</p>
                              <p><i className="fas fa-check"></i> {props.listfour}</p>
                              <p><i className="fas fa-check"></i> {props.listfive}</p>
                          </div>
                      </div>
                      </div>
                  </div>
            
        </> 
    )
}

export default Skiicard;
