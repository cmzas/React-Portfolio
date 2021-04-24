import React from 'react';
import { Link } from "react-router-dom";
import Data from "./ProjectData";
const ProjectCard = () => {
    const projects = Data.map((project) => {
        return (
            <div key={project.id}>

                <div className="project-card  mt-4">
                    <div className="project-card-bg col-md-12 p-0 pb-2" >
                        <div className="project-card-image">
                            <img src={project.imagesrc} alt="image" />
                            <h1 class="centered">Google</h1>
                        </div>
                        <div className="project-card-text pt-2">

                            <h1><Link to={`/project/${project.id}`}>{project.title}</Link></h1>


                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                                        <p>{project.listone}</p>

                                    </div>
                                    <div className="list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                                        <p>{project.listtwo}</p>
                                    </div>
                                    <div className=" list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                                        <p>{project.listthree}</p>
                                    </div>
                                    <div className=" list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                                        <p>{project.listfour}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    })
    return (
        <>
            <div className="container project-grid py-5">
                <div className="grid-container">



                    {projects}

                </div>

            </div>

        </>
    )
}

export default ProjectCard;
