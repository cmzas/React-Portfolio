import React from 'react';
import Hero from "../elements/Hero";
import Navbar from "./Navbar";
import HeroData from "../elements/HeroData";

const Projectindex = () => {
    return (
        <>
            <Hero
                title={HeroData[2].title}
                text={HeroData[2].text}
            />
            <Navbar />

        </>
    )
}

export default Projectindex;
