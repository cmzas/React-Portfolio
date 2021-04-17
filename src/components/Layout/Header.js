import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
 <nav className="navbar navbar-expand-lg">
             <div className="container-fluid">
                 <div className="icons">
                    <a href="#" className="mr-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mr-3"><i className="fas fa-camera"></i></a>
                    <a href="#" className="mr-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mr-3"><i className="fab fa-linkedin-in"></i></a>
            </div>
             <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                 aria-expanded="false" aria-label="Toggle navigation">
                 <i className="fas fa-bars navbar-toggler-icon"></i>
                </button>
             <div className="collapse navbar-collapse" id="collapsibleNavId">
                 <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                     <li className="nav-item active disabled">
                         <a className="nav-link" href="#skills">SKILLS</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#projects">PROJECTS</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#contact">CONTACT</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#feedback">FEEDBACK</a>
                     </li>
                   
                 </ul>
                
             </div>
            </div>
         </nav>

        </>
    )
}
export default Header;