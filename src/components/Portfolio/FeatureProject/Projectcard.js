import React from 'react'
import Image from "../../../Images/blog/blog-post-thumb-1.jpg";

const Projectcard = () => {
    return (
        <>
          <div class="col-md-6 mt-5 mb-2">
          <div class="card">
            <div class="inner">
              <img class="card-img-top" src={Image} alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title"><a href="#">How to Create an Angular Library</a></h4><br/><br/>
              <p class="date1"><i class="far fa-clock"></i> May 7,2020 <i class="fas fa-comment"></i><a href="#">32 comments</a></p>

              <p class="card-text">Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</p>
            </div>
          </div>
        </div>
            
        </>
    )
}

export default Projectcard;
