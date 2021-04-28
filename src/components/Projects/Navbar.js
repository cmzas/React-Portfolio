import React, { useState} from 'react';
import Slide from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Zoom';
import Data from "../Data/Project/ProjectData";
import ProjectCard from './ProjectComponent/ProjectCard';

const Navbar = () => {
   
    const [active, setactive] = useState("All")
    return (
        <>
            <div className="container-fluid project-bg pt-5 pb-5">
                <div className="container">
                    <nav className="col-lg-6 offset-lg-3">
                        <div className="row">
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button className="active" onClick={() => setactive("All")}>All</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button onClick={() => setactive("Angular")}>Angular</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button onClick={() => setactive("React")}>React</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button onClick={() => setactive("Python")}>Python</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button onClick={() => setactive("Ruby")}>Ruby</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button onClick={() => setactive("Php")}>Php</button>

                            </div>
                        </div>
                    </nav>
                    <div className="container navbar-grid">
                        <div className="grid-container">
                        {active === "All" &&
                           Data.map(obj =>{
                               return(
                                   <Slide bottom>
                               <ProjectCard
                               obj={obj}
                               />
                               </Slide>
                               )
                           })
                        }
                 {active === "Php" &&
                           
                                Data.filter(name => name.category === "php").map(obj => {
                                   
                                    return (
                                        <Slide left>
                                        <ProjectCard
                                            obj={obj}
                                        />
                                        </Slide>
                                    )
                                    
                                })

                            }

                            {active === "React" &&
                                Data.filter(name => name.category === "react").map(obj => {
                                    return (
                                        <Bounce right>
                                        <ProjectCard
                                            obj={obj}
                                        />
                                        </Bounce>
                                    )
                                })

                            }
                            {active === "Angular" &&
                                Data.filter(name => name.category === "angular").map(obj => {
                                    return (
                                        <Zoom bottom>
                                        <ProjectCard
                                            obj={obj}
                                        />
                                        </Zoom>
                                    )
                                })

                            }
                            {active === "Python" &&
                                Data.filter(name => name.category === "python").map(obj => {
                                    return (
                                        <Zoom top>
                                        <ProjectCard
                                            obj={obj}
                                        />
                                        </Zoom>
                                    )
                                })

                            }
                            {active === "Ruby" &&
                                Data.filter(name => name.category === "ruby").map(obj => {
                                    return (
                                        <Fade right>
                                        <ProjectCard
                                            obj={obj}
                                        />
                                        </Fade>
                                    )
                                })

                            }

                        </div>
                    </div>







                </div>

            </div>

        </>
    )
}

export default Navbar;
