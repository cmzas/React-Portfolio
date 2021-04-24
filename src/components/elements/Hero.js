import React from 'react'

const Hero = (props) => {
    return (
        <>
        <div className="jumbotron-fluid hero-bg pt-5 pb-5">
            <div className="container">
                <div className="hero-heading">
                    <h1>{props.title}</h1>
                </div>
                <div className="hero-text pt-3">
                   <p>{props.text}</p>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Hero;
