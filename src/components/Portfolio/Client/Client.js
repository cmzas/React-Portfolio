import React from 'react';
import Carousels from "./Carousels";
import Image from "../../../Images/logo-1.png";


const Client = () => {
    return (
        <>
            
    <div className="col-md-12 mb-2" id="feedback">
      
      <div className="container">
        <div className="title">
          <h2>Great clients I've worked with</h2>
      </div>
        <div className="row">

        <div className="col-lg-2 col-md-4 col-sm-4 col-12 mt-lg-1">
                <div className="col-md-12">
                    <a href="#"><img className="img-fluid" src={Image} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mt-lg-1">
                <div className="col-md-12">
                    <a href="#"><img className="img-fluid" src={Image} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mt-lg-1">
                <div className="col-md-12">
                    <a href="#"><img className="img-fluid" src={Image} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mt-lg-1">
                <div className="col-md-12">
                    <a href="#"><img className="img-fluid" src={Image} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mt-lg-1">
                <div className="col-md-12">
                    <a href="#"><img className="img-fluid" src={Image} /></a>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mt-lg-1">
                <div className="col-md-12">
                    <a href="#"><img className="img-fluid" src={Image} /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Carousels/>
        </>
    )
}

export default Client;
