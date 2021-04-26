import React from 'react';
import Imagetemplate from "../../Images/blog-post-image.png";
import Imagecover from "../../Images/blog-post-thumb-1.jpg";
import Imagecovertwo from "../../Images/blog-post-thumb-2.jpg";
import Imagecoverthree from "../../Images/blog-post-thumb-3.jpg";
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
                        <p>Project tagline goes here lorem ipsum dolor sit amet.</p>


                    </div>
                </div>
            </div>
            <div className="project-detail-container mt-5">
                <div className="container">
                    <div className="project-content-image pb-2">
                        <img src={data.imagesrc} />
                    </div>
                    <div className="project-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

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
                                    <img class="d-block w-100" src={Imagecover} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Imagecovertwo} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Imagecoverthree} alt="Third slide" />
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
                        <h1>Heading Vestibulum Fringilla</h1>
                        <p>Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                        <ul class="list-group">
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                        </ul>

                        <div className="project-video">
                            <h1>Project Video</h1>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/RS36gBEp8OI?rel=0"></iframe>
                        </div>
                        <div className="project-template">
                            <h1>Technologies Used</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                            <img src={Imagetemplate} alt="imagetemplate" />
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                            <ul class="list-group">
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                                <li class="list-group-item"><i class="fas fa-hand-point-right"></i>Lorem ipsum dolor sit amet consectetuer.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetal;
