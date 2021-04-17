import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "../../../Images/sliderone.jpg";
import Imagetwo from "../../../Images/slidertwo.jpg";
import Imagethree from "../../../Images/sliderthree.jpg";
// import Imagefour from "../../Images/profile-4.jpg";

const Carousels = () => {
   
    return (
        <>
        <div className="container carousels mt-5 pt-5">
            <Carousel autoPlay infiniteLoop>
                <div className="slider">
                    <div className="col-md-12">
                        <div className="slider-image">
                        <img src={Image}  />
                        </div>
                        <div className="slider-text col-lg-6 offset-lg-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div className="slider-title">
                        <h1>NAME</h1>
                        </div>   
                    </div>
                </div>
                <div className="slider">
                <div className="col-md-12">
                        <div className="slider-image">
                        <img src={Imagetwo}  />
                        </div>
                        <div className="slider-text col-lg-6 offset-lg-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div className="slider-title">
                        <h1>NAME</h1>
                        </div>   
                    </div>
                </div>
                <div className="slider">
                <div className="col-md-12">
                        <div className="slider-image">
                        <img src={Imagethree}  />
                        </div>
                        <div className="slider-text col-lg-6 offset-lg-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div className="slider-title">
                        <h1>NAME</h1>
                        </div>   
                    </div>
                </div>
            </Carousel>
            </div>

        </>
    )
}

export default Carousels;
