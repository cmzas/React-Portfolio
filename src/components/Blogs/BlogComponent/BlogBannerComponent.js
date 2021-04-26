import React, { Profiler } from 'react';

const BlogBannerComponent = (props) => {
    return (
        <>
             <img class="img-fluid rounded-circle mr-md-4 d-inline-block align-self-center" src={props.obj.profileimage} alt="Profile" />
                <div class="media-body">
                    <div class="blog-header-title">
                        <h2 class="text-center text-md-left">{props.obj.profilename}</h2>
                    </div>
                        <div class="blog-header-tagline">
                            <p class="text-center text-md-left">{props.obj.profiletext}</p>
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
        </>
    )
}

export default BlogBannerComponent;
