import React from 'react'
import Skillcard from "./Skiicard";
import CardData from "./SkillCardData";

const Skill = () => {
    return (
        <>
            <div className="container" id="skills">
                <div className="skill text-center mt-5">
                    <h2>Skills Overview</h2>
                    <p>I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?<br/>
                    <a href="#"> Check out my online resume. </a></p>
                </div>
                <div className="row">
                    {CardData.map(card=>{
                        return(
                            <Skillcard
                            imgsrc={card.imgsrc && card.imgsrc}
                            title={card.title && card.title}
                            listone={card.listone && card.listone}
                            listtwo={card.listtwo && card.listtwo}
                            listthree={card.listthree && card.listthree}
                            listfour={card.listfour && card.listfour}
                            listfive={card.listfive && card.listfive}

                            />

                        )
                    })}
                 
              </div>
        </div>
            
        </>
    )
}

export default Skill;
