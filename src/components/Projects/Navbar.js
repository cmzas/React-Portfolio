import React,{useState} from 'react';
import ProjectCard from './Projectcard';
import Data from "../Data/Project/ProjectData";

const Navbar = () => {
    const [active, setactive] = useState("All")
    return (
        <>
        <div className="container-fluid project-bg pt-5 pb-5">
                <div className="container">
                    <nav className="col-lg-6 offset-lg-3">
                        <div className="row">
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                                <button className="active" onClick={()=> setactive("All")}>All</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                            <button onClick={()=> setactive("Angular")}>Angular</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                            <button onClick={()=> setactive("React")}>React</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                            <button onClick={()=> setactive("Python")}>Python</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                            <button onClick={()=> setactive("Ruby")}>Ruby</button>

                            </div>
                            <div className="col-4 col-sm-2 col-md-3 col-lg-2 menu">
                            <button onClick={()=> setactive("Php")}>Php</button>

                            </div>
                        </div>
                    </nav>
                    <div className="row">
                    {active==="All" && 
                            <ProjectCard/>
                    }
                    {active==="Php" && 
                    Data.filter(name=>name.category==="php").map(obj=>{
                        return(
                            <ProjectCard
                            // obj={obj}
                            />
                        )
                    })
                   
                    }
                    
                     {active==="React" && 
                    Data.filter(name=>name.category==="react").map(obj=>{
                        return(
                            <ProjectCard
                            // obj={obj}
                            />
                        )
                    })
                   
                    }
                       {active==="Angular" && 
                    Data.filter(name=>name.category==="angular").map(obj=>{
                        return(
                            <ProjectCard
                            // obj={obj}
                            />
                        )
                    })
                   
                    }
                      {active==="Python" && 
                    Data.filter(name=>name.category==="python").map(obj=>{
                        return(
                            <ProjectCard
                            // obj={obj}
                            />
                        )
                    })
                   
                    }
                      {active==="Ruby" && 
                    Data.filter(name=>name.category==="ruby").map(obj=>{
                        return(
                            <ProjectCard
                            // obj={obj}
                            />
                        )
                    })
                   
                    }
                       
                 
                    
                        
                    </div>

                </div>

            </div>
            
        </>
    )
}

export default Navbar;
