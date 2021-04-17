import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "../../Images/profile-1.jpg";
import Imagetwo from "../../Images/profile-2.jpg";
import Imagethree from "../../Images/profile-3.jpg";
// import Imagefour from "../../Images/profile-4.jpg";

const Carousels = () => {
   
    return (
        <>
        <div className="container carousel mt-5 pt-5">
            <Carousel autoPlay infiniteLoop>
                <div className="slider">
                    <img src={Image}  />
                    <p className="legend">name 1</p>
                </div>
                <div className="slider">
                    <img src={Imagetwo}  />
                    <p className="legend">name 2</p>
                </div>
                <div className="slider">
                    <img src={Imagethree}  />
                    <p className="legend">name 3</p>
                </div>
            </Carousel>
            </div>

        </>
    )
}

export default Carousels;
