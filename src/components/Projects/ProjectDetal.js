import React from 'react';


import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Data from "../Data/Project/ProjectData";
const ProjectDetal = () => {
    const { projectId } = useParams();
    const data=Data.find((pro)=>pro.id===projectId);

    return (
        <>
            <div className="jumbotron-fluid project-detail-bg">
                <div className="container ">

                    <div className="project-detail-banner-content">
                        <h1>{data.title}</h1>
                        <p>{data.bannertext}</p>


                    </div>
                </div>
            </div>
            <div className="project-detail-container mt-5">
                <div className="container">
                    <div className="project-content-image pb-2">
                        <img src={data.imagesrc} />
                    </div>
                    <div className="project-content-text">
                        <p>{data.projectcontent}</p>

                    </div>
                    <div className="project-content-button">
                        <Link className="btn one"><i class="fas fa-desktop pr-2"></i>View Live Site</Link>
                    </div>
                    <div className="carsouels py-4">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src={data.sliderone} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={data.slidertwo} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={data.sliderthree} alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="project-inner-content">
                        <h1>{data.headingone}</h1>
                        <p>{data.paraone}</p>
                        
                        <p>{data.paratwo}</p>
                        <ul class="list-group">
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlistone}</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlisttwo}</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlistthree}</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlistfour}</li>
                        </ul>

                        <div className="project-video">
                            <h1>{data.videotitle}</h1>
                            <iframe class="embed-responsive-item" src={data.videolink}></iframe>
                        </div>
                        <div className="project-template">
                            <h1>{data.headingtwo}</h1>
                            <p>{data.parathree}</p>
                            <img src={data.projecttemplate} alt="imagetemplate" />
                            <p>{data.parafour}</p>
                            <ul class="list-group">
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlistfive}</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlistsix}</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlistseven}</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>{data.innerlisteight}</li>
                            </ul>
                            <p>{data.parafive}</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetal;
