import React from "react";
import Banner from "./Banner";
import Skill from "./Skill/Skill";
import Client from "./Client/Client";
import Project from "./FeatureProject/Project";
import Featurein from "./Featurein";
import Carousels from "./Carousels";


const Portfolioindex= () =>{
    return(
        <>
       <Banner/>
       <Skill/>
       <Carousels/>
       <Client/>
       <Project/>
       <Featurein/>
      
        </>
    )
}
export default Portfolioindex;