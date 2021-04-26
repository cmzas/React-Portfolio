import React from 'react';
import Image from "../../Images/blog-post-thumb-1.jpg";
import { Link } from "react-router-dom";
import Data from "../Data/Blog/BlogCardData";

const BlogFeatured = (props) => {
    const blogs = Data.slice(0,1).map((blog) => {
        return (
            <>

                <div className="col-lg-8 col-md-12 p-0 bg-primary pb-0">
                    <div className="blog-img ">

                        <Link to={`/blog/${blog.id}`}><img src={blog.image} alt="Blog-1" /></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12  bg-white">
                    <div className="blog-heading pt-3">
                        <h4>{blog.title}</h4>
                    </div>
                    <div className="blog-text">
                   <p>{blog.text}</p>
                    </div>
                    <Link to={`/blog/${blog.id}`} className="btn btn-primary ml-4">Read More</Link>
                </div>


            </>
        )
    })
    return (
        <>
            <div className="blog-bg pt-5 pb-3">
                <div className="container">
                    <div className="blog">
                        <div className="row">
                            {blogs}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogFeatured;
