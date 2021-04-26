import React from 'react';
import {Link} from "react-router-dom";
import Data from "../Data/Blog/BlogCardData";


const BlogCard = () => {
  const blogs = Data.slice(0,4).map((blog) => {
      return (
          <div key={blog.id}>
              <div class=" card rounded-0 border-0 shadow-sm  ">
                  <div class="image-inner">
                  <Link to={`/blog/${blog.id}`}><img class="card-img-top rounded-0" src={blog.image} alt="image" /></Link>
                      
                  </div>
                  <div class="p-2">
                      <div className="blo-card-text">
                          <h1 class="mb-1"><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h1>

                          <p>{blog.text}</p>

                      </div>

                  </div>
                  <div class="card-footer border-0">
                      <ul class="list-inline mb-0">
                          <li><i class="far fa-clock mr-2"></i> {blog.date}</li>
                          <li><i class="fas fa-comment ml-2"></i><a href="#">{blog.comment}</a></li>
                      </ul>
                  </div>
              </div>

          </div>
      )
  })
 
  return (
      <>
          <div className="container about-grid py-5">
              <div className="grid-container">
                 
                

                      {blogs}

                      </div>
                      <div className="center pt-5">
           <Link to="/blog" className="view-project">View All Posts</Link>
           </div>

              </div>
       


      </>
  )
}
export default BlogCard;
