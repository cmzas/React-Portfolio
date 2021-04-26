import React from 'react';
import ProfileImage from "../../Images/profile.jpg";
import { Link } from "react-router-dom";
import ExperienceComponent from "./ExperienceComponent";
import ExperienceData from "../Data/Resume/ExperienceData";
import FrontEnd from './FrontEnd';
import FrontData from "../Data/Resume/FrontendData";
import BackendData from "../Data/Resume/BackendData";
import BackEnd from './BackEnd';
import Others from './Others';
import OtherData from "../Data/Resume/OthersData";
import Education from './Education';
import EducationData from "../Data/Resume/EducationData";
import Awards from './Awards';
import AwardData from "../Data/Resume/AwardData";
import Language from './Language';
import LanguageData from "../Data/Resume/LanguageData";

const Resume = () => {
    return (
        <>



            <div className="resume pb-4">
                <div class="container ">
                    <div className=" text-light p-0">
                        <div class="row bg-dark">

                            <div class="col-lg-3 col-md-12 pl-0">
                                <div class="cv-pannel-image text-center text-lg-left ">
                                    <img class="" src={ProfileImage} alt="" />
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 mt-3">
                                <div className="table-ul">
                                    <div class="cv-profile-title">
                                        <h1>STEVE DOE</h1>
                                        <h2>Full Stack Developer</h2>
                                    </div>
                                    <div class="cv-tagline">
                                        <ul class="pl-0">
                                            <li><a href="#"><i class="fas fa-envelope mx-auto"></i> Steve.Doe@website.com</a></li>
                                            <li><a href="#"><i class="fas fa-mobile-alt mx-1"></i> 01122334455</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12">
                                <div className="table-ul">
                                    <ul class="cv-icons pl-0 py-lg-4">
                                        <li><i class="fab fa-linkedin pb-3"></i><Link>linkedin</Link></li>
                                        <li><i class="fab fa-github-square pb-3"></i><Link>github</Link></li>
                                        <li><i class="fab fa-codepen pb-3"></i><Link>codepen</Link></li>
                                        <li><i class="fab fa-codepen pb-3"></i><Link>website</Link></li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* first banner end */}
                    <div class="career pt-5">
                        <h1 class="font-weight-bold">CAREER SUMMARY</h1>
                        <div class="custom-border"></div>
                        <div class="career-content pt-3">
                            <p>Summarise your career here.<a href="#" target="_blank"> You can make a PDF version of your
                    resume using our free Sketch template here.</a>
                Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque
                eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                nec,
                vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="experience-title">
                                <h1 class="font-weight-bolder">WORK EXPERIENCE</h1>
                                <div class="custom-border"></div>
                            </div>
                            {ExperienceData.map(obj => {
                                return (
                                    <ExperienceComponent
                                        obj={obj}
                                    />
                                )
                            })}

                        </div>

                        <div class="col-md-4">

                            <div class="skill-title">
                                <h1 class="font-weight-bold">SKILLS & TOOLS</h1>
                                <div class="custom-border"></div>
                            </div>
                            <div class="lead-title pt-3">
                                <h1 class=" font-weight-bolder">Frontend</h1>
                            </div>
                            {FrontData.map(obj => {
                                return (
                                    <FrontEnd
                                        obj={obj}
                                    />
                                )
                            })}

                            <div class="lead-title pt-3">
                                <h1 class=" font-weight-bolder">Backend</h1>
                            </div>
                            {BackendData.map(obj => {
                                return (
                                    <BackEnd
                                        obj={obj}
                                    />
                                )
                            })}

                            <div class="lead-title pt-3">
                                <h1 class=" font-weight-bolder">Others</h1>
                            </div>
                            <div class="row">
                                {OtherData.map(obj=>{
                                    return(
                                        <Others
                                        obj={obj}
                                        />

                                    )
                                })}
                              
                            </div>
                            <div class="lead-title pt-3">
                                <h1 class=" font-weight-bolder">EDUCATION</h1>
                                <div class="custom-border"></div>
                            </div>
                            {EducationData.map(obj=>{
                                return(
                                    <Education
                                    obj={obj}
                                    />
                                )
                            })}
                           
                            <div class="lead-title">
                                <h1 class="font-weight-bold">AWARDS</h1>
                                <div class="custom-border"></div>
                            </div>
                            {AwardData.map(obj=>{
                                return(
                                    <Awards
                                    obj={obj}
                                    />
                                )
                            })}
                            <div class="language-title">
                                <h1 class="font-weight-bold">LANGUAGE</h1>
                                <div class="custom-border"></div>
                            </div>

                            <div class="languages pt-2">
                                {LanguageData.map(obj=>{
                                    return(
                                        <Language
                                        obj={obj}
                                        />
                                    )
                                })}
                               
                            </div>


                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default Resume;
