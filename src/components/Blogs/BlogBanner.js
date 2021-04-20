import React from 'react'
import Image from "../../Images/profile.jpg";

const BlogBanner = () => {
    return (
        <>
         <div class="blog-intro text-white py-5">
        <div class="container position-relative">
            <div class="media flex-column flex-md-row">                
                <img class="img-fluid rounded-circle mr-md-4 d-inline-block align-self-center" src={Image} alt="Profile" />
                <div class="media-body">
                    <div class="blog-header-title">
                        <h2 class="text-center text-md-left">Steve Doe's Blog</h2>
                    </div>
                        <div class="blog-header-tagline">
                            <p class="text-center text-md-left">I write about web development and life as a developer.<br class="d-lg-block d-none" />
                                You can follow me via the various channels below:</p>
                        </div>
                        <div class="blog-header-icons text-center text-md-left">
                            <ul class="list-inline">
                                <a href="#"><li class="list-inline-item p-2 mr-2 rounded"><i class="fab fa-twitter"></i></li></a>
                                <a href="#"><li class="list-inline-item p-2 mr-2 rounded"><i class="fab fa-linkedin-in"></i></li></a>
                                <a href="#"><li class="list-inline-item p-2 mr-2 rounded"><i class="fab fa-github-alt"></i></li></a>
                                <a href="#"><li class="list-inline-item p-2 mr-2 rounded"><i class="fas fa-code"></i></li></a>                          
                                <a href="#"><li class="list-inline-item p-2 mr-2 rounded"><i class="fas fa-home"></i></li></a>                          
                                <a href="#"><li class="list-inline-item p-2 rounded"><i class="fas fa-paper-plane"></i></li></a>                          
                            </ul>
                        </div>
                </div>
            </div>
        </div>
      </div>

            
        </>
    )
}

export default BlogBanner;
