import React from 'react';
import Hero from "../elements/Hero";
import HeroData from "../elements/HeroData";
import Resume from "./Resume";

const Resumeindex = () => {
    return (
        <>
         <Hero
                title={HeroData[3].title}
                text={HeroData[3].text}
            />
            <Resume/>
        
            
        </>
    )
}

export default Resumeindex;
