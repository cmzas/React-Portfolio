import React from 'react';
const Skillcard = (props) => {
    return (
        <>
         <div className="col-lg-4 col-md-6 mb-4">
                      <div className="mt-lg-5">
                      <div className="card">
                          <div className="box">
                              <div className="img">
                                  <img src={props.card.imgsrc} alt="image" />
                              </div>
                              <h2>{props.card.title}</h2>
                              <p><i className="fas fa-check"></i> {props.card.listone}</p>
                              <p><i className="fas fa-check"></i> {props.card.listtwo}</p>
                              <p><i className="fas fa-check"></i> {props.card.listthree}</p>
                              <p><i className="fas fa-check"></i> {props.card.listfour}</p>
                              <p><i className="fas fa-check"></i> {props.card.listfive}</p>
                          </div>
                      </div>
                      </div>
                  </div>
            
        </> 
    )
}

export default Skillcard;
