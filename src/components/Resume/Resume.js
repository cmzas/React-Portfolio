import React from 'react';
import ProfileImage from "../../Images/profile.jpg";
import { Link } from "react-router-dom";

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

                            <div class="lead-title pt-3">
                                <h1 class=" font-weight-bolder">Lead Developer</h1>
                            </div>

                            <div class="date font-weight-bold">
                                <p>2018 - Present</p>
                            </div>

                            <div class="lead-content">
                                <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo,
                                fringilla vel.
                </p>
                            </div>

                            <div class="achievement-title">
                                <h1>Achievements:</h1>

                                <div class="achiev-content">
                                    <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi sint occaecati cupiditate non provident.</p>
                                </div>

                                <ul>
                                    <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                                    <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                                    <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                                    <li>Maecenas tempus tellus eget.</li>
                                </ul>
                            </div>



                            <div class="lead-technology">
                                <h1>Technologies used:</h1>

                                <div class="col-md-12 mb-5 pt-3">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">Angular</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">Python</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">jQuery</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">Webpack</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">PostgresSQL</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div class="lead-title pt-3">
                                <h1 class="font-weight-bolder">Senior Software Developer</h1>
                            </div>

                            <div class="date font-weight-bold">
                                <p>2018 - Present</p>
                            </div>

                            <div class="lead-content">
                                <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo,
                    fringilla vel.</p>
                            </div>

                            <div class="achievement-title">
                                <h1>Achievements:</h1>
                            </div>

                            <div class="achiev-content">
                                <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident.</p>
                            </div>

                            <div class="senior-technology">
                                <h1>Technologies used:</h1>

                                <div class="col-md-12 mb-5 px-0 pt-3">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">Angular</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">Python</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">jQuery</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">Webpack</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">HTML/SASS</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary badge-pill">PostgresSQL</span></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>



                            <div class="lead-title pt-3">
                                <h1 class=" font-weight-bolder">Web Developer <span> (Intern)</span></h1>
                            </div>

                            <div class="date font-weight-bold">
                                <p>2018 - Present</p>
                            </div>

                            <div class="lead-content">
                                <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec..</p>
                                <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa. Donec quam felis,
                    ultricies nec..</p>
                            </div>


                            <div class="web-technology">
                                <h1>Technologies used:</h1>

                                <div class="col-md-12 mb-5  pt-3">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul>
                                                <li><span class="badge badge-secondary badge-pill">Angular</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul>
                                                <li><span class="badge badge-secondary badge-pill">Python</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul>
                                                <li><span class="badge badge-secondary badge-pill">jQuery</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 techno-list">
                                            <ul>
                                                <li><span class="badge badge-secondary badge-pill">Webpack</span></li>
                                            </ul>
                                        </div>


                                    </div>

                                </div>

                            </div>





                        </div>





                        <div class="col-md-4">

                            <div class="skill-title">
                                <h1 class="font-weight-bold">SKILLS & TOOLS</h1>
                                <div class="custom-border"></div>
                            </div>


                            <div class="frontend-title pt-3">
                                <h1>Frontend</h1>
                            </div>
                            <div class="frontend-content">
                                <p class="mb-0">Angular</p>
                                <div class="angular-border mb-2"></div>
                            </div>
                            <div class="frontend-content">
                                <p class="mb-0">React</p>
                                <div class="react-border mb-2"></div>
                            </div>
                            <div class="frontend-content">
                                <p class="mb-0">JavaScript</p>
                                <div class="java-border mb-2"></div>
                            </div>
                            <div class="frontend-content">
                                <p class="mb-0">Node.js</p>
                                <div class="node-border mb-2"></div>
                            </div>
                            <div class="frontend-content">
                                <p class="mb-0">HTML/CSS/SASS/LESS</p>
                                <div class="html-border mb-2"></div>
                            </div>


                            <div class="backend-title pt-3">
                                <h1>Backend</h1>
                            </div>
                            <div class="backend-content">
                                <p class="mb-0">Python/Django</p>
                                <div class="python-border mb-2"></div>
                            </div>
                            <div class="backend-content">
                                <p class="mb-0">Ruby/Rails</p>
                                <div class="ruby-border mb-2"></div>
                            </div>
                            <div class="backend-content">
                                <p class="mb-0">PHP</p>
                                <div class="php-border mb-2"></div>
                            </div>
                            <div class="backend-content">
                                <p class="mb-0">WordPress/Shopify</p>
                                <div class="word-border mb-2"></div>
                            </div>



                            <div class="other-title pt-3">
                                <h1>Others</h1>
                            </div>

                            <div class="col-md-12 mb-5  pt-3">
                                <div class="row">

                                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 other-list">
                                        <ul class="pl-0">
                                            <li><span class="badge badge-secondary">DevOps</span></li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-5 col-md-5 col-sm-4 col-4 other-list">
                                        <ul class="pl-0">
                                            <li><span class="badge badge-secondary">Code Review</span></li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-4 col-4 other-list">
                                        <ul class="pl-0">
                                            <li><span class="badge badge-secondary">Git</span></li>
                                        </ul>
                                    </div>




                                </div>










                                <div class="col-md-12 mb-5">
                                    <div class="row">

                                        <div class="col-lg-4 col-md-4 col-sm-4 col-4 other-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary">Unit Testing</span></li>
                                            </ul>
                                        </div>

                                        <div class="col-lg-3 col-md-3 col-sm-4 col-4 other-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary">Sketch</span></li>
                                            </ul>
                                        </div>

                                        <div class="col-lg-5 col-md-5 col-sm-4 col-4 other-list">
                                            <ul class="pl-0">
                                                <li><span class="badge badge-secondary">Wireframing</span></li>
                                            </ul>
                                        </div>




                                    </div>






                                    <div class="col-md-12 mb-5 ">
                                        <div class="row">

                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4 other-list">
                                                <ul class="pl-0">
                                                    <li><span class="badge badge-secondary">Balsamiq</span></li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4 other-list">
                                                <ul class="pl-0">
                                                    <li><span class="badge badge-secondary">WordPress</span></li>
                                                </ul>
                                            </div>

                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4 other-list">
                                                <ul class="pl-0">
                                                    <li><span class="badge badge-secondary">Shopify</span></li>
                                                </ul>
                                            </div>




                                        </div>




                                        <div class="edu-title">
                                            <h1 class="font-weight-bold">EDUCATION</h1>
                                            <div class="custom-border"></div>
                                        </div>
                                        <div class="msc-heading pt-2 ">
                                            <h1 class="">MSc in Computer Science</h1>
                                        </div>
                                        <div class="msc-content">
                                            <p class="my-0">University College London</p>
                                            <p>2010 - 2011</p>
                                        </div>

                                        <div class="bsc-heading font-weight-bold">
                                            <h1>BSc Maths and Physics</h1>
                                        </div>
                                        <div class="bsc-content">
                                            <p class="my-0">Imperial College London</p>
                                            <p>2010 - 2011</p>
                                        </div>






                                        <div class="award-title">
                                            <h1 class="font-weight-bold">AWARDS</h1>
                                            <div class="custom-border"></div>
                                        </div>

                                        <div class="award-lorem pt-2">
                                            <h1 class="font-weight-bold"><i class="fas fa-trophy"></i> Award Name Lorem</h1>
                                        </div>
                                        <div class="lorem-content mb-0">
                                            <p>Award desc goes here, ultricies nec, pellentesque eu, pretium
                                quis, sem. Nulla consequat massa quis enim. Donec pede justo</p>
                                        </div>
                                        <div class="award-ipsum">
                                            <h1 class="font-weight-bold"><i class="fas fa-trophy"></i> Award Name Ipsum</h1>
                                        </div>
                                        <div class="ipsum-content mb-0">
                                            <p>Award desc goes here, ultricies nec, pellentesque.</p>
                                        </div>



                                        <div class="language-title">
                                            <h1 class="font-weight-bold">LANGUAGE</h1>
                                            <div class="custom-border"></div>
                                        </div>

                                        <div class="languages pt-2">
                                            <h1>English <span> (Native) </span></h1>
                                            <h1>French <span> (Professional)</span></h1>
                                            <h1>Spanish <span>(Professional)</span></h1>
                                        </div>


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

export default Resume;
