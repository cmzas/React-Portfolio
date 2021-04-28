import React,{useEffect} from "react";
import AOS from "aos";
import ProjectCard from "./Projectcard";
import {Link} from "react-router-dom";

const FeaturedProjects = () => {
    useEffect(() => {
        AOS.init({
            duration:2000,
            once:true
            
        })

    
}, [])
    return (
        <>
            <div data-AOS="fade-up" className="container-fluid blog-bg pt-5 pb-5">
                <div className="container feature-project-heading">
                    <h1 className="text-center main-heading">Featured Projects</h1>
                    <div className="row pb-5">
                        <ProjectCard />
                    </div>
                    <div className="center">
                    <Link to="/project" className="view-project">View All Projects</Link>
                </div>
                </div>

            </div>


        </>
    )
}

export default FeaturedProjects;
