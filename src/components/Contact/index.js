import React from "react";
import Contact from "./Contact";
import Hero from "../elements/Hero";
import HeroData from "../elements/HeroData";



const Contactindex = () => {
    return (
        <>
            <Hero
                title={HeroData[1].title}
                text={HeroData[1].text}
            />
            <Contact />

        </>
    )
}
export default Contactindex;