import React from 'react';
import Image from "../../Images/blog-post-thumb-1.jpg";

const BlogFeatured = (props) => {
    return (
        <>
          <div class="blog-bg pt-5">
        <div class="container">
            <div class="blog">
                <div class="row">
                    <div class="col-lg-8 col-md-12 p-0 bg-primary pb-0">
                        <div class="blog-img ">
                            <img src={Image} alt="Blog-1"/>
                        </div>
                    </div>
          <div class="col-lg-4 col-md-12  bg-white">
            <div class="blog-heading pt-3">
                <h4>SoundCloud Podcast Lorem Ipsum</h4>
            </div>
          <div class="blog-text">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus penatibus et magnis dis parturient
                   montes, nascetur ridiculus mus.. Find out more about the conference in my
              </p>
          </div>
          <a href="#" class="btn btn-primary ml-4">Read More</a>
      </div>
    </div>
    </div>
    </div>
      </div>
            
        </>
    )
}

export default BlogFeatured;
