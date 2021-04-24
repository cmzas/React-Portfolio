import React from 'react'
import ProjectCard from "./Projectcard";
import {Link} from "react-router-dom";

const FeaturedProjects = () => {
    return (
        <>
            <div className="container-fluid blog-bg pt-5 pb-5">
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
