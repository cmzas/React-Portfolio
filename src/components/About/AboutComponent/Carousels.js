import React,{useEffect} from "react";
import AOS from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Carousels = (props) => {
    useEffect(() => {
        AOS.init({
            duration:2000,
            once:true
            
        })

    
}, [])
   
    return (
        <>
        <div data-AOS="fade-left" className="jumbotron-fluid carousel-bg pt-5 pb-5">
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
