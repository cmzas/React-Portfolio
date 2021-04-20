import React from 'react'

const Hero = (props) => {
    return (
        <>
        <div className="jumbotron-fluid hero-bg pt-5 pb-5">
            <div className="container">
                <div className="hero-heading">
                    <h1>{props.name}</h1>
                </div>
                <div className="hero-text pt-3">
                   <p>In-depth Case Studies to show you what I can offer and how I work</p>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Hero;
