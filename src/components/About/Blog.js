import React from 'react'
import BlogCard from "./BlogCard";
import CardData from "./Data/BlogCardData";

const Project = () => {
    return (
        <>
          <div class="container-fluid mb-5 pb-5 blog-bg pt-3">
            <div className="container">
      <div class="project-title text-center">
        <h2>Latest Blog Posts</h2>
      </div>
      <div class="row">
         
          {CardData.map(card=>{
                        return(
                          <BlogCard
          
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
    </div>
            
        </>
    )
}

export default Project;
