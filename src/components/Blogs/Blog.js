import React from 'react';
import BlogCard from "./BlogCard";
import Data from "./Data";

const Blog = () => {
    return (
        <>
            <div class="container">

                <div class="row">
                    
{Data.map(card=>{
    return(
        <BlogCard
        imagesrc={card.imagesrc}
        title={card.title}
        text={card.text}
        date={card.date}
        />
    )
})}
                 
                    




                    <div class="col-12 my-5 pl-md-0 pr-lg-0">
                        <a class="btn-blog-more btn btn-primary btn-block text-white font-weight-bold py-3">Load more posts...</a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Blog;
