import React from 'react'
import ProjectCard from "../elements/ProjectCard";

const FeaturedProjects = () => {
    return (
        <>
            <div className="container-fluid blog-bg pt-5 pb-5">
                <div className="container feature-project-heading">
                    <h1 className="text-center main-heading">Featured Projects</h1>
                    <div className="row">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />


                    </div>

                </div>

            </div>


        </>
    )
}

export default FeaturedProjects;
