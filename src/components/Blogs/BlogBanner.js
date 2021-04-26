import React from 'react';
import BlogBannerComponent from './BlogComponent/BlogBannerComponent';
import BlogBannerData from "../Data/Blog/BlogBannerData";
const BlogBanner = () => {
    return (
        <>
         <div class="blog-intro text-white py-5">
        <div class="container position-relative">
            <div class="media flex-column flex-md-row">  
            {BlogBannerData.map(obj=>{
                return(
                    <BlogBannerComponent
                    obj={obj}
                    />
                )
            })}              
               
            </div>
        </div>
      </div>

            
        </>
    )
}

export default BlogBanner;
