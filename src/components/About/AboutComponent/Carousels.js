import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "../../../Images/sliderone.jpg";
import Imagetwo from "../../../Images/slidertwo.jpg";
import Imagethree from "../../../Images/sliderthree.jpg";


const Carousels = (props) => {
   
    return (
        <>
        <div className="jumbotron-fluid carousel-bg pt-5 pb-5">
        <div className="container carousels pt-5 pt-5">
            <Carousel autoPlay infiniteLoop>
                <div className="slider">
                    <div className="col-md-12">
                        <div className="slider-image">
                        <img src={props.obj.sliderone}  />
                        </div>
                        <div className="slider-text col-lg-6 offset-lg-3">
                        <p>{props.obj.slidertext}</p>
                        </div>
                        <div className="slider-title">
                        <h1>{props.obj.slidername}</h1>
                        </div>   
                    </div>
                </div>
                <div className="slider">
                <div className="col-md-12">
                        <div className="slider-image">
                        <img src={props.obj.slidertwo}  />
                        </div>
                        <div className="slider-text col-lg-6 offset-lg-3">
                        <p>{props.obj.slidertext}</p>
                        </div>
                        <div className="slider-title">
                        <h1>{props.obj.slidername}</h1>
                        </div>   
                    </div>
                </div>
                <div className="slider">
                <div className="col-md-12">
                        <div className="slider-image">
                        <img src={props.obj.sliderthree}  />
                        </div>
                        <div className="slider-text col-lg-6 offset-lg-3">
                        <p>{props.obj.slidertext}</p>
                        </div>
                        <div className="slider-title">
                        <h1>{props.obj.slidername}</h1>
                        </div>   
                    </div>
                </div>
            </Carousel>
            </div>
            </div>

        </>
    )
}

export default Carousels;
