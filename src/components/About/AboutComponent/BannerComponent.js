import React from 'react';
import {Link} from "react-router-dom";

const BannerComponent = (props) => {
    return (
        <>
            <div className="col-lg-4 text-center  col-md-6 col-12 mt-5 mb-xl-5 image">
                <img src={props.image} />
            </div>
            <div className="col-lg-8 text-center text-md-left col-md-6 col-12 content  mt-md-5 mt-2   mb-lg-4">

                <h5>Hello, my name is</h5>
                <h2>{props.profilename}</h2>
                <p>{props.bio}</p>
                <Link to="/contact" className="hire-me">Hire Me</Link>
            </div>


        </>
    )
}

export default BannerComponent;
