import React from 'react'
import Profileimage from "../../Images/profile.jpg";

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 text-center  col-md-6 col-12 mt-5 mb-xl-5 image">
                            <img src={Profileimage}  />
                        </div>
                        <div className="col-lg-8 text-center text-md-left col-md-6 col-12 content  mt-md-5 mt-2   mb-lg-4">
                            <h5>Hello, my name is</h5>
                            <h2>Steve Doe</h2>
                            <p>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on <a href="#"> my blog </a> and regularly <a href="#"> speak </a> at various web conferences and meetups. Want to know how I may help your project? Check out my project <a href="#"> case studies </a> and <a href="#"> resume </a>. </p>
                            <button type="button" className="btn btn-primary">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner;
