import React,{useState} from 'react';
import ProjectCard from './Projectcard';
import Data from "./ProjectData";

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
                    Data.map(obj=>{
                        return(
                            <ProjectCard
                            imagesrc={obj.imagesrc}
                            title={obj.title}
                            listone={obj.listone}
                            listtwo={obj.listtwo}
                            listthree={obj.listthree}
                            listfour={obj.listfour}
                            />
                        )
                    })
                   
                    }
                    {active==="Php" && 
                    Data.filter(name=>name.category==="php").map(obj=>{
                        return(
                            <ProjectCard
                            imagesrc={obj.imagesrc}
                            title={obj.title}
                            listone={obj.listone}
                            listtwo={obj.listtwo}
                            listthree={obj.listthree}
                            listfour={obj.listfour}
                            />
                        )
                    })
                   
                    }
                    
                     {active==="React" && 
                    Data.filter(name=>name.category==="react").map(obj=>{
                        return(
                            <ProjectCard
                            imagesrc={obj.imagesrc}
                            title={obj.title}
                            listone={obj.listone}
                            listtwo={obj.listtwo}
                            listthree={obj.listthree}
                            listfour={obj.listfour}
                            />
                        )
                    })
                   
                    }
                       {active==="Angular" && 
                    Data.filter(name=>name.category==="angular").map(obj=>{
                        return(
                            <ProjectCard
                            imagesrc={obj.imagesrc}
                            title={obj.title}
                            listone={obj.listone}
                            listtwo={obj.listtwo}
                            listthree={obj.listthree}
                            listfour={obj.listfour}
                            />
                        )
                    })
                   
                    }
                      {active==="Python" && 
                    Data.filter(name=>name.category==="python").map(obj=>{
                        return(
                            <ProjectCard
                            imagesrc={obj.imagesrc}
                            title={obj.title}
                            listone={obj.listone}
                            listtwo={obj.listtwo}
                            listthree={obj.listthree}
                            listfour={obj.listfour}
                            />
                        )
                    })
                   
                    }
                      {active==="Ruby" && 
                    Data.filter(name=>name.category==="ruby").map(obj=>{
                        return(
                            <ProjectCard
                            imagesrc={obj.imagesrc}
                            title={obj.title}
                            listone={obj.listone}
                            listtwo={obj.listtwo}
                            listthree={obj.listthree}
                            listfour={obj.listfour}
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
