import React,{useEffect} from "react";
import AOS from "aos";
import Skillcard from "./SkillCard";
import CardData from "../Data/About/SkillCardData";

const Skill = () => {
    useEffect(() => {
        AOS.init({
            duration:2000,
            once:true
            
        })

    
}, [])
    return (
        <>
            <div className="container" id="skills">
                <div className="skill text-center pb-3 mt-5">
                    <h2>Skills Overview</h2>
                    <p>I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</p>
                    <a href="#"> Check out my online resume. </a>
                </div>
                <div data-AOS="fade-right" className="row">
                    {CardData.map(card=>{
                        return(
                            <Skillcard
                          card={card}

                            />

                        )
                    })}
                 
              </div>
        </div>
            
        </>
    )
}

export default Skill;
