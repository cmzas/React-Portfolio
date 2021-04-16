import React from 'react'
import Projectcard from "./Projectcard";

const Project = () => {
    return (
        <>
          <div class="container mb-5">
      <div class="project-title">
        <h2>Featured Projects</h2>
      </div>
      <div class="row">
          <Projectcard/>
          <Projectcard/>
          <Projectcard/>
          <Projectcard/>


        {/* <div class="col-md-6">
          <div class="card">
            <div class="inner">
              <img class="card-img-top" src="uploads/blog/blog-post-thumb-1.jpg" alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title"><a href="#">How to Create an Angular Library</a></h4><br/><br/>
              <p class="date1"><i class="far fa-clock"></i> May 7,2020 <i class="fas fa-comment"></i><a href="#">32 comments</a></p>

              <p class="card-text">Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="inner">
              <img class="card-img-top" src="uploads/blog/blog-post-thumb-2.jpg" alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title react"><a href="#">React, Bootstrap, and Angular- The Basics</a></h4><br/><br/>
              <p class="date2"><i class="far fa-clock"></i> May 7,2020 <i class="fas fa-comment"></i><a href="#">32 comments</a></p>

              <p class="card-text">Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="card">
            <div class="inner">
              <img class="card-img-top" src="uploads/blog/blog-post-thumb-3.jpg" alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title"><a href="#">Best Practices for Code Review</a></h4><br/><br/>
              <p class="date3"><i class="far fa-clock"></i> May 7,2020 <i class="fas fa-comment"></i><a href="#">32 comments</a></p>

              <p class="card-text">Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="card">
            <div class="inner">
              <img class="card-img-top" src="uploads/blog/blog-post-thumb-4.jpg" alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title"><a href="#">Learn React Components</a></h4><br/><br/>
              <p class="date4"><i class="far fa-clock"></i> May 7,2020 <i class="fas fa-comment"></i><a href="#">32 comments</a></p>
              <p class="card-text">Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</p>
            </div>
          </div>
        </div> */}
      </div>
      <div class="post-btn">
        <a href="#" class="btn btn-primary">View All Post</a>
      </div>
    </div>
            
        </>
    )
}

export default Project;
