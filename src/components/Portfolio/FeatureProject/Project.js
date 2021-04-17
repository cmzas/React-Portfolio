import React from 'react'
import Projectcard from "./Projectcard";
import Carddata from "./Carddata";

const Project = () => {
    return (
        <>
          <div class="container mb-5">
      <div class="project-title">
        <h2>Featured Projects</h2>
      </div>
      <div class="row">
         
          {Carddata.map(card=>{
                        return(
                          <Projectcard
          
                          image={card.image && card.image}
                          title={card.title && card.title}
                          date={card.date && card.date}
                          text={card.text && card.text}
                         />

                        )
                    })}
      </div>
      <div class="post-btn">
        <a href="#" class="btn btn-primary">View All Post</a>
      </div>
    </div>
            
        </>
    )
}

export default Project;
