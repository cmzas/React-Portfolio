import React from 'react';
const ProjectCard = (props) => {
    return (
        <>
            <div className="project-card col-md-4 mt-4">
                <div className="project-card-bg col-md-12 p-0 pb-2" >
                    <div className="project-card-image">
                        <img src={props.imagesrc} alt="image" />
                        <h1 class="centered">Google</h1>
                    </div>
                    <div className="project-card-text pt-2">
                        
                            <h1>{props.title}</h1>
                        

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="list-text col-3 col-md-6 p-2 col-lg-3">
                                    <p>Angular</p>

                                </div>
                                <div className="list-text col-3 col-md-6 p-2 col-lg-3">
                                    <p>Angular</p>
                                </div>
                                <div className=" list-text col-3 col-md-6 p-2 col-lg-3">
                                    <p>Angular</p>
                                </div>
                                <div className=" list-text col-3 col-md-6 p-2 col-lg-3">
                                    <p>Angular</p>
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
