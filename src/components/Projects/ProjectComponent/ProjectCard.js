import React from 'react';
import { Link } from "react-router-dom";

const ProjectCard = (project) => {
    return (
        <>
         <div key={project.obj.id}>

<div className="project-card  mt-4">
    <div className="project-card-bg col-md-12 p-0 pb-2" >
        <div className="project-card-image">
            <img src={project.obj.imagesrc} alt="image" />
            <Link to={`/project/${project.obj.id}`}><h1 class="centered text-center"><i class="fas fa-expand"></i></h1></Link>
        </div>
        <div className="project-card-text pt-2">

            <h1><Link to={`/project/${project.obj.id}`}>{project.obj.title}</Link></h1>


            <div className="col-lg-12">
                <div className="row">
                    <div className="list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                        <p>{project.obj.listone}</p>

                    </div>
                    <div className="list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                        <p>{project.obj.listtwo}</p>
                    </div>
                    <div className=" list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                        <p>{project.obj.listthree}</p>
                    </div>
                    <div className=" list-text col-3 col-sm-4 col-md-6 p-1 col-lg-4 col-xl-3">
                        <p>{project.obj.listfour}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


</div>
            
        </>
    )
}

export default ProjectCard;
